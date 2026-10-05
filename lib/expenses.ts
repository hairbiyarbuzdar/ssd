import { db } from "@/lib/db";
import { todayISO } from "@/lib/helpers";

/** Reserved "method" for expenses recorded on credit / not paid from any cash
 *  account. These never create a cashbook entry, so they don't reduce cash. */
export const UNPAID_METHOD = "Unpaid";
export const isUnpaid = (method?: string | null) => (method ?? "") === UNPAID_METHOD;

/** Next sequential expense number (EXP-001, EXP-002, …).
 *  Client-side max+1, same approach the app uses for invoice/quote numbers. */
export async function nextExpenseNumber(): Promise<string> {
  const { data } = await db
    .from("expenses")
    .select("expense_number")
    .order("created_at", { ascending: false })
    .limit(300);
  let max = 0;
  for (const r of (data ?? []) as { expense_number?: string | null }[]) {
    const m = String(r.expense_number ?? "").match(/(\d+)$/);
    if (m) max = Math.max(max, parseInt(m[1], 10));
  }
  return `EXP-${String(max + 1).padStart(3, "0")}`;
}

export interface CreateExpenseInput {
  category: string;
  description: string;
  amount: number;
  method: string;
  date?: string;
  /** When set, the cashbook entry's reference = invoiceId so it's auto-removed on invoice delete. */
  invoiceId?: string | null;
  invoiceNumber?: string;
}

/** Build the cashbook "out" description for an expense. */
export function expenseCashbookDesc(category: string, invoiceNumber?: string | null): string {
  return `${category || "Expense"}${invoiceNumber ? ` — ${invoiceNumber}` : ""}`;
}

/** Create an expense. When amount > 0 it's a real cash-out: a cashbook "out"
 *  entry is written (so cash-in-hand drops and it shows in Cash Book) and linked
 *  to the expenses row. When amount is 0 (a pending expense flagged from an
 *  invoice, to be completed later in the Expense module) no cash entry is made.
 *  Returns the inserted expense_number, or an error message. */
export async function createExpense(input: CreateExpenseInput): Promise<{ expenseNumber: string | null; error: string | null }> {
  const date = input.date || todayISO();
  const expenseNumber = await nextExpenseNumber();

  let cashbookEntryId: string | null = null;
  if (input.amount > 0 && !isUnpaid(input.method)) {
    const { data: cbOut, error: cbErr } = await db
      .from("cashbook")
      .insert({
        type: "out",
        description: expenseCashbookDesc(input.category, input.invoiceNumber),
        amount: input.amount,
        date,
        account_name: "",
        method: input.method,
        reference: input.invoiceId ?? "",
      })
      .select()
      .single();
    if (cbErr) return { expenseNumber: null, error: cbErr.message };
    cashbookEntryId = cbOut?.id ?? null;
  }

  const { error: expErr } = await db.from("expenses").insert({
    expense_number: expenseNumber,
    category: input.category,
    invoice_id: input.invoiceId ?? null,
    invoice_number: input.invoiceNumber ?? "",
    description: input.description,
    amount: input.amount,
    date,
    method: input.method,
    cashbook_entry_id: cashbookEntryId,
  });
  if (expErr) return { expenseNumber: null, error: expErr.message };

  return { expenseNumber, error: null };
}
