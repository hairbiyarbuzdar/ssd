"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { db } from "@/lib/db";
import { showToast } from "@/components/Toast";
import { formatCurrency, formatDate, todayISO } from "@/lib/helpers";
import { DollarSign, FileText, Plus, Trash2, Pencil, X, Wallet, Check, Printer, RotateCcw } from "lucide-react";
import { PrintHeader } from "@/components/PrintHeader";
import { PrintFooter } from "@/components/PrintFooter";
import type { Expense, CashbookEntry } from "@/lib/database.types";
import { DT } from "@/lib/dataTableStyles";
import { confirmDialog } from "@/components/ConfirmModal";
import { logActivity } from "@/lib/activityLog";
import { useSaving } from "@/lib/useSaving";
import { usePaymentMethods, computeMethodBalances, type PaymentMethodRow } from "@/lib/paymentMethods";
import { createExpense, expenseCashbookDesc, UNPAID_METHOD, isUnpaid } from "@/lib/expenses";

function thisMonthPrefix(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}

interface InvoiceLite {
  id: string;
  invoice_number: string;
  client_name: string;
  client_phone: string;
  invoice_date: string;
  grand_total: number;
  amount_received: number;
  balance_due: number;
  payment_status: string;
}

// ── KPI card (matches reference: filled icon chip + big mono value) ──
function Kpi({ label, value, color, icon }: { label: string; value: string; color: string; icon: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden bg-white rounded-[16px] border border-[var(--gray-100)] p-5" style={{ boxShadow: "var(--shadow-sm)" }}>
      <div className="w-12 h-12 rounded-[12px] flex items-center justify-center mb-3" style={{ background: color }}>
        {icon}
      </div>
      <div className="text-[24px] font-extrabold leading-tight" style={{ color: "var(--gray-900)" }}>{value}</div>
      <div className="text-[12px] font-semibold mt-0.5" style={{ color: "var(--gray-600)" }}>{label}</div>
    </div>
  );
}

export default function ExpensePage() {
  const { saving, run } = useSaving();
  const { methods: paymentMethods } = usePaymentMethods();
  const [loading, setLoading] = useState(true);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [invoicesById, setInvoicesById] = useState<Record<string, InvoiceLite>>({});
  const [tab, setTab] = useState<"expenses" | "projects">("expenses");

  // Standalone add / edit modal
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState<Expense | null>(null);
  const [fCategory, setFCategory] = useState("");
  const [fAmount, setFAmount] = useState("");
  const [fMethod, setFMethod] = useState("Cash");
  const [fDate, setFDate] = useState(todayISO());
  const [fDesc, setFDesc] = useState("");

  // Per-invoice expense modal
  const [invoiceModalId, setInvoiceModalId] = useState<string | null>(null);
  // A4 print payload (rendered outside the no-print shell, then window.print())
  const [printData, setPrintData] = useState<{ invoice: InvoiceLite; expenses: Expense[] } | null>(null);

  useEffect(() => {
    if (!printData) return;
    const t = setTimeout(() => window.print(), 60);
    return () => clearTimeout(t);
  }, [printData]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const [{ data: expData }, { data: invData }] = await Promise.all([
      db.from("expenses").select("*").order("date", { ascending: false }).order("created_at", { ascending: false }),
      db.from("invoices").select("id, invoice_number, client_name, client_phone, invoice_date, grand_total, amount_received, balance_due, payment_status"),
    ]);
    if (expData) setExpenses(expData as Expense[]);
    const invs = (invData ?? []) as InvoiceLite[];
    const byId: Record<string, InvoiceLite> = {};
    for (const inv of invs) byId[inv.id] = inv;
    setInvoicesById(byId);
    setLoading(false);
  }, []);

  useEffect(() => { void fetchData(); }, [fetchData]);

  const totalExpenses = useMemo(() => expenses.reduce((s, e) => s + Number(e.amount), 0), [expenses]);
  const todayExpense = useMemo(() => {
    const t = todayISO();
    return expenses.filter((e) => String(e.date).slice(0, 10) === t).reduce((s, e) => s + Number(e.amount), 0);
  }, [expenses]);
  const thisMonth = useMemo(() => {
    const ym = thisMonthPrefix();
    return expenses.filter((e) => String(e.date).startsWith(ym)).reduce((s, e) => s + Number(e.amount), 0);
  }, [expenses]);
  const currentMonthName = useMemo(() => new Date().toLocaleDateString("en-US", { month: "long" }), []);

  // Projects = walk-in invoices that have expenses (incl. pending placeholders).
  const projects = useMemo(() => {
    const map = new Map<string, { expenseTotal: number; count: number }>();
    for (const e of expenses) {
      if (!e.invoice_id) continue;
      const cur = map.get(e.invoice_id) ?? { expenseTotal: 0, count: 0 };
      cur.expenseTotal += Number(e.amount);
      if (Number(e.amount) > 0) cur.count += 1;
      map.set(e.invoice_id, cur);
    }
    const completedByInvoice = new Map<string, { has: boolean; all: boolean }>();
    for (const e of expenses) {
      if (!e.invoice_id || Number(e.amount) <= 0) continue;
      const cur = completedByInvoice.get(e.invoice_id) ?? { has: true, all: true };
      if (!e.completed) cur.all = false;
      completedByInvoice.set(e.invoice_id, cur);
    }
    return Array.from(map.entries())
      .map(([invoiceId, v]) => ({ invoiceId, ...v, invoice: invoicesById[invoiceId], completed: completedByInvoice.get(invoiceId)?.all ?? false }))
      .sort((a, b) => String(b.invoice?.invoice_date ?? "").localeCompare(String(a.invoice?.invoice_date ?? "")));
  }, [expenses, invoicesById]);

  function openAdd() {
    setEditing(null);
    setFCategory("");
    setFAmount("");
    setFMethod(paymentMethods[0]?.name ?? "Cash");
    setFDate(todayISO());
    setFDesc("");
    setShowModal(true);
  }

  function openEdit(exp: Expense) {
    setEditing(exp);
    setFCategory(exp.category ?? "");
    setFAmount(String(Number(exp.amount) || ""));
    setFMethod(exp.method || "Cash");
    setFDate(String(exp.date).slice(0, 10) || todayISO());
    setFDesc(exp.description ?? "");
    setShowModal(true);
  }

  function onRowClick(exp: Expense) {
    if (exp.invoice_id) setInvoiceModalId(exp.invoice_id);
    else openEdit(exp);
  }

  async function handleSubmit() {
    const amt = parseFloat(String(fAmount).replace(/,/g, "")) || 0;
    if (amt <= 0) { showToast("Enter an amount greater than 0", "err"); return; }
    if (!fMethod || (!isUnpaid(fMethod) && !paymentMethods.some((m) => m.name === fMethod))) { showToast("Select a valid payment method", "err"); return; }

    await run(async () => {
      // Unpaid/credit expenses never touch cash, so skip the funds check.
      if (!isUnpaid(fMethod)) {
        const { data: cbAll } = await db.from("cashbook").select("id, type, amount, method, description");
        const entries = ((cbAll ?? []) as (CashbookEntry & { id: string })[])
          .filter((e) => !editing?.cashbook_entry_id || e.id !== editing.cashbook_entry_id);
        const balances = computeMethodBalances(entries, paymentMethods);
        const available = balances[fMethod] ?? 0;
        if (amt > available) {
          showToast(`Not enough funds in "${fMethod}" (available ${formatCurrency(available)}).`, "err");
          return;
        }
      }

      const category = fCategory.trim();
      const description = fDesc.trim();

      if (editing) {
        const cbDesc = expenseCashbookDesc(category, editing.invoice_number);
        let cashbookEntryId = editing.cashbook_entry_id ?? null;
        if (isUnpaid(fMethod)) {
          if (cashbookEntryId) { await db.from("cashbook").delete().eq("id", cashbookEntryId); cashbookEntryId = null; }
        } else if (cashbookEntryId) {
          await db.from("cashbook").update({ amount: amt, method: fMethod, date: fDate, description: cbDesc }).eq("id", cashbookEntryId);
        } else {
          const { data: cbOut, error: cbErr } = await db.from("cashbook").insert({
            type: "out", description: cbDesc, amount: amt, date: fDate, account_name: "",
            method: fMethod, reference: editing.invoice_id ?? "",
          }).select().single();
          if (cbErr) { showToast(cbErr.message, "err"); return; }
          cashbookEntryId = cbOut?.id ?? null;
        }
        const { error } = await db.from("expenses").update({ category, description, amount: amt, method: fMethod, date: fDate, cashbook_entry_id: cashbookEntryId }).eq("id", editing.id);
        if (error) { showToast(error.message, "err"); return; }
        showToast("Expense updated", "ok");
      } else {
        const { error } = await createExpense({ category, description, amount: amt, method: fMethod, date: fDate });
        if (error) { showToast(error, "err"); return; }
        showToast("Expense added", "ok");
      }
      setShowModal(false);
      void fetchData();
    });
  }

  async function handleDelete(exp: Expense) {
    const ok = await confirmDialog({
      title: "Delete expense?",
      message: `Delete this expense of ${formatCurrency(Number(exp.amount))}? The linked cash-out will be reversed and the amount returned to "${exp.method}".`,
      details: [exp.expense_number ? `No: ${exp.expense_number}` : "", exp.category ? `Category: ${exp.category}` : ""].filter(Boolean).join("\n") || undefined,
      tone: "danger",
    });
    if (!ok) return;
    await run(async () => {
      if (exp.cashbook_entry_id) await db.from("cashbook").delete().eq("id", exp.cashbook_entry_id);
      const { error } = await db.from("expenses").delete().eq("id", exp.id);
      if (error) { showToast(error.message, "err"); return; }
      await logActivity({
        action: "delete",
        entityType: "expense",
        entityId: exp.id,
        title: "Expense Deleted",
        subtitle: `${exp.expense_number || ""} ${exp.category || exp.description || "Expense"}`.trim(),
        amount: Number(exp.amount),
        metadata: { method: exp.method, invoice_number: exp.invoice_number },
      });
      showToast("Expense deleted", "ok");
      void fetchData();
    });
  }

  return (
    <>
    <div className="no-print animate-fade-in">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-5">
        <div>
          <h1 className="text-xl font-extrabold" style={{ color: "var(--gray-900)" }}>Expense</h1>
          <p className="text-xs mt-0.5" style={{ color: "var(--gray-800)" }}>
            Track business costs. Click an invoice-linked expense to manage all costs for that invoice.
          </p>
        </div>
        <button
          type="button"
          onClick={openAdd}
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-[9px] text-[12.5px] font-semibold border-none cursor-pointer text-white shrink-0"
          style={{ background: "linear-gradient(135deg, var(--blue-deeper), var(--blue))", boxShadow: "0 2px 10px rgba(2,132,199,.28)" }}
        >
          <Plus size={16} /> Add Expense
        </button>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
        <Kpi label="Today Expense" value={formatCurrency(todayExpense)} color="var(--red)" icon={<DollarSign size={22} color="#fff" />} />
        <Kpi label={`${currentMonthName} Expense`} value={formatCurrency(thisMonth)} color="var(--orange)" icon={<FileText size={22} color="#fff" />} />
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 mb-4 border-b border-[var(--gray-100)]">
        {([["expenses", "Expenses"], ["projects", "Project Expense"]] as const).map(([key, label]) => (
          <button key={key} type="button" onClick={() => setTab(key)}
            className="relative px-4 py-2.5 text-[13px] font-bold border-none bg-transparent cursor-pointer transition-colors"
            style={{ color: tab === key ? "var(--blue-deeper)" : "var(--gray-500)" }}>
            {label}
            {tab === key && <span className="absolute left-2 right-2 bottom-[-1px] h-[3px] rounded-t-full" style={{ background: "var(--blue)" }} />}
          </button>
        ))}
      </div>

      {/* Tab: Expenses */}
      {tab === "expenses" && (
      <div className="bg-white rounded-[14px] border border-[var(--gray-100)] overflow-hidden" style={{ boxShadow: "var(--shadow-sm)" }}>
        {loading ? (
          <div className="text-center py-10 text-[13px]" style={{ color: "var(--gray-800)" }}>Loading…</div>
        ) : expenses.length === 0 ? (
          <div className="py-14 text-center">
            <Wallet size={32} className="mx-auto mb-2" style={{ color: "var(--gray-200)" }} />
            <p className="text-[13px] font-medium" style={{ color: "var(--gray-800)" }}>No expenses yet.</p>
            <p className="text-[12px] mt-1" style={{ color: "var(--gray-600)" }}>
              Add one above, or tick &ldquo;Add expense for this invoice&rdquo; when creating a walk-in invoice.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className={`${DT.table} min-w-[900px]`}>
              <thead>
                <tr>
                  {["#", "Expense No", "Category", "Payment", "Date", "Description", "Amount", ""].map((h) => {
                    const right = h === "Amount";
                    return <th key={h} className={`${DT.thDense} ${right ? "text-right" : "text-left"}`} style={DT.thStyle}>{h}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                {expenses.map((exp, idx) => (
                  <tr key={exp.id} className="hover:bg-[#bfcffe] transition-colors cursor-pointer" onClick={() => onRowClick(exp)} title={exp.invoice_id ? "Open invoice expenses" : "Edit expense"}>
                    <td className={`${DT.tdDense} ${DT.cellBody}`} style={{ color: "var(--gray-800)" }}>{idx + 1}</td>
                    <td className={`${DT.tdDense} ${DT.cellBody} font-mono`} style={{ color: "var(--blue-deeper)" }}>{exp.expense_number || "—"}</td>
                    <td className={`${DT.tdDense} ${DT.cellPrimary}`} style={{ color: "var(--gray-900)" }}>{exp.category || "—"}</td>
                    <td className={`${DT.tdDense}`}>
                      <span className="px-2.5 py-0.5 rounded-full text-[10.5px] font-bold uppercase tracking-wide"
                        style={isUnpaid(exp.method) ? { background: "var(--orange-light)", color: "#B45309" } : { background: "var(--blue-pale)", color: "var(--blue-deeper)" }}>
                        {isUnpaid(exp.method) ? "Unpaid" : exp.method}
                      </span>
                    </td>
                    <td className={`${DT.tdDense} ${DT.cellBody} whitespace-nowrap`} style={{ color: "var(--gray-800)" }}>{formatDate(exp.date)}</td>
                    <td className={`${DT.tdDense} ${DT.cellBody}`} style={{ color: "var(--gray-700)" }}>{exp.description || "—"}</td>
                    <td className={`${DT.tdDense} font-mono text-right font-extrabold text-[15px]`}>
                      {Number(exp.amount) > 0 ? (
                        <span style={{ color: "var(--red)" }}>{formatCurrency(exp.amount)}</span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide" style={{ background: "var(--orange-light)", color: "#B45309" }}>Pending</span>
                      )}
                    </td>
                    <td className={`${DT.tdDense}`} onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center justify-end gap-1">
                        <button type="button" onClick={() => onRowClick(exp)} disabled={saving} title="Edit"
                          className="inline-flex items-center justify-center w-8 h-8 rounded-[8px] border-none bg-transparent cursor-pointer transition-all hover:bg-[var(--blue-pale)] disabled:opacity-50"
                          style={{ color: "var(--blue-deeper)" }}>
                          <Pencil size={14} />
                        </button>
                        <button type="button" onClick={() => void handleDelete(exp)} disabled={saving} title="Delete"
                          className="inline-flex items-center justify-center w-8 h-8 rounded-[8px] border-none bg-transparent cursor-pointer transition-all hover:bg-[var(--red-light)] disabled:opacity-50"
                          style={{ color: "var(--red)" }}>
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr style={{ background: "var(--gray-50)" }}>
                  <td colSpan={6} className={`${DT.tdDense} text-[13.5px] font-bold border-t-2 border-[var(--gray-200)]`} style={{ color: "var(--gray-700)" }}>
                    Total — {expenses.length} {expenses.length !== 1 ? "entries" : "entry"}
                  </td>
                  <td className={`${DT.tdDense} font-mono text-right text-[15px] font-extrabold border-t-2 border-[var(--gray-200)]`} style={{ color: "var(--red)" }}>{formatCurrency(totalExpenses)}</td>
                  <td className="border-t-2 border-[var(--gray-200)]" />
                </tr>
              </tfoot>
            </table>
          </div>
        )}
      </div>
      )}

      {/* Tab: Project Expense */}
      {tab === "projects" && (
        <div>
          {loading ? (
            <div className="text-center py-10 text-[13px]" style={{ color: "var(--gray-800)" }}>Loading…</div>
          ) : projects.length === 0 ? (
            <div className="bg-white rounded-[14px] border border-[var(--gray-100)] py-14 text-center" style={{ boxShadow: "var(--shadow-sm)" }}>
              <Wallet size={32} className="mx-auto mb-2" style={{ color: "var(--gray-200)" }} />
              <p className="text-[13px] font-medium" style={{ color: "var(--gray-800)" }}>No projects yet.</p>
              <p className="text-[12px] mt-1" style={{ color: "var(--gray-600)" }}>Tick &ldquo;Add expense for this invoice&rdquo; on a walk-in invoice to create one.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((p) => {
                const income = Number(p.invoice?.grand_total ?? 0);
                const profit = income - p.expenseTotal;
                return (
                  <button key={p.invoiceId} type="button" onClick={() => setInvoiceModalId(p.invoiceId)}
                    className="text-left rounded-[14px] border border-[var(--gray-100)] bg-white p-4 cursor-pointer transition-all hover:shadow-md"
                    style={{ boxShadow: "var(--shadow-xs)" }}>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-mono text-[13px] font-extrabold" style={{ color: "var(--blue-deeper)" }}>{p.invoice?.invoice_number ?? "—"}</span>
                      {p.completed
                        ? <span className="px-2 py-0.5 rounded-full text-[9.5px] font-bold uppercase tracking-wide" style={{ background: "var(--blue-light)", color: "var(--blue)" }}>Completed</span>
                        : p.expenseTotal === 0
                        ? <span className="px-2 py-0.5 rounded-full text-[9.5px] font-bold uppercase tracking-wide" style={{ background: "var(--orange-light)", color: "#B45309" }}>Pending</span>
                        : <span className="px-2 py-0.5 rounded-full text-[9.5px] font-bold uppercase tracking-wide" style={{ background: "var(--blue-pale)", color: "var(--blue-deeper)" }}>{p.count} {p.count === 1 ? "item" : "items"}</span>}
                    </div>
                    <div className="text-[14px] font-bold truncate" style={{ color: "var(--gray-900)" }}>{p.invoice?.client_name ?? "—"}</div>
                    <div className="text-[11px] mb-3" style={{ color: "var(--gray-500)" }}>{p.invoice ? formatDate(p.invoice.invoice_date) : "—"}</div>
                    <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[var(--gray-100)]">
                      <div>
                        <div className="text-[8.5px] font-bold tracking-wide uppercase mb-0.5" style={{ color: "var(--gray-500)" }}>Income</div>
                        <div className="text-[12.5px] font-extrabold font-mono" style={{ color: "var(--blue-deeper)" }}>{formatCurrency(income)}</div>
                      </div>
                      <div>
                        <div className="text-[8.5px] font-bold tracking-wide uppercase mb-0.5" style={{ color: "var(--gray-500)" }}>Expense</div>
                        <div className="text-[12.5px] font-extrabold font-mono" style={{ color: "var(--red)" }}>{formatCurrency(p.expenseTotal)}</div>
                      </div>
                      <div>
                        <div className="text-[8.5px] font-bold tracking-wide uppercase mb-0.5" style={{ color: "var(--gray-500)" }}>{profit >= 0 ? "Profit" : "Loss"}</div>
                        <div className="text-[12.5px] font-extrabold font-mono" style={{ color: profit >= 0 ? "var(--blue)" : "var(--red)" }}>{formatCurrency(Math.abs(profit))}</div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Standalone add / edit modal */}
      {showModal && (
        <div className="fixed inset-0 z-[800] flex items-start justify-center backdrop-blur-sm pt-10 px-3 pb-8 overflow-y-auto no-print">
          <button type="button" aria-label="Close" className="absolute inset-0 bg-black/35 cursor-default border-none" onClick={() => { if (!saving) setShowModal(false); }} />
          <div className="relative z-10 w-full max-w-[460px] bg-white rounded-[14px] border border-[var(--gray-100)] overflow-hidden" style={{ boxShadow: "var(--shadow-lg)" }}>
            <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-[var(--gray-100)]" style={{ background: "var(--blue-deeper)" }}>
              <div className="text-[15px] font-extrabold text-white">{editing ? `Edit expense ${editing.expense_number || ""}` : "Add expense"}</div>
              <button type="button" onClick={() => { if (!saving) setShowModal(false); }} className="text-white/80 hover:text-white border-none bg-transparent cursor-pointer p-1">
                <X size={18} />
              </button>
            </div>

            <div className="p-5 flex flex-col gap-3.5">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold tracking-[1px] uppercase" style={{ color: "var(--gray-700)" }}>Category</label>
                <input type="text" value={fCategory} onChange={(e) => setFCategory(e.target.value)} placeholder="e.g. Material, Glass, Gas Bill"
                  className="border border-[var(--gray-200)] rounded-[8px] px-3 py-2 text-[13px] outline-none bg-white focus:border-[var(--blue)]" style={{ color: "#0C2433" }} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold tracking-[1px] uppercase" style={{ color: "var(--gray-700)" }}>Amount</label>
                  <input type="number" min={0} step={1} value={fAmount} onChange={(e) => setFAmount(e.target.value)} onWheel={(e) => e.currentTarget.blur()} placeholder="0"
                    className="border border-[var(--gray-200)] rounded-[8px] px-3 py-2 text-[13px] outline-none bg-white focus:border-[var(--blue)]" style={{ color: "#0C2433" }} />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold tracking-[1px] uppercase" style={{ color: "var(--gray-700)" }}>Paid from</label>
                  <select value={fMethod} onChange={(e) => setFMethod(e.target.value)}
                    className="border border-[var(--gray-200)] rounded-[8px] px-3 py-2 text-[13px] outline-none bg-white focus:border-[var(--blue)]">
                    {paymentMethods.map((m) => <option key={m.id} value={m.name}>{m.name}</option>)}
                    <option value={UNPAID_METHOD}>— Unpaid (Credit) —</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold tracking-[1px] uppercase" style={{ color: "var(--gray-700)" }}>Date</label>
                <input type="date" value={fDate} onChange={(e) => setFDate(e.target.value)}
                  className="border border-[var(--gray-200)] rounded-[8px] px-3 py-2 text-[13px] outline-none bg-white focus:border-[var(--blue)]" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold tracking-[1px] uppercase" style={{ color: "var(--gray-700)" }}>
                  Description <span className="font-normal normal-case opacity-80">(optional)</span>
                </label>
                <input type="text" value={fDesc} onChange={(e) => setFDesc(e.target.value)} placeholder="Notes / reference"
                  className="border border-[var(--gray-200)] rounded-[8px] px-3 py-2 text-[13px] outline-none bg-white focus:border-[var(--blue)]" style={{ color: "#0C2433" }} />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 px-5 py-4 border-t border-[var(--gray-100)]" style={{ background: "var(--gray-50)" }}>
              <button type="button" onClick={() => { if (!saving) setShowModal(false); }} disabled={saving}
                className="px-4 py-2.5 rounded-[9px] text-[12.5px] font-semibold border-[1.5px] bg-white cursor-pointer disabled:opacity-50" style={{ borderColor: "var(--gray-200)", color: "var(--gray-700)" }}>
                Cancel
              </button>
              <button type="button" onClick={() => void handleSubmit()} disabled={saving}
                className="px-5 py-2.5 rounded-[9px] text-[12.5px] font-semibold border-none cursor-pointer text-white disabled:opacity-60"
                style={{ background: "linear-gradient(135deg, var(--blue-deeper), var(--blue))" }}>
                {saving ? "Saving…" : editing ? "Update expense" : "Save expense"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Per-invoice expense modal */}
      {invoiceModalId && (
        <InvoiceExpenseModal
          invoiceId={invoiceModalId}
          paymentMethods={paymentMethods}
          onClose={() => setInvoiceModalId(null)}
          onChanged={fetchData}
          onPrint={(invoice, exps) => setPrintData({ invoice, expenses: exps })}
        />
      )}
    </div>

    {/* A4 print template — hidden on screen, shown only when printing */}
    {printData && <ProjectExpensePrint invoice={printData.invoice} expenses={printData.expenses} />}
    </>
  );
}

// ══════════════════════════════════════════════════════════
// Per-invoice expense modal — modeled on the reference layout
// ══════════════════════════════════════════════════════════
interface ExpenseRow { what: string; amount: string; method: string }

function InvoiceExpenseModal({
  invoiceId, paymentMethods, onClose, onChanged, onPrint,
}: {
  invoiceId: string;
  paymentMethods: PaymentMethodRow[];
  onClose: () => void;
  onChanged: () => void;
  onPrint: (invoice: InvoiceLite, expenses: Expense[]) => void;
}) {
  const { saving, run } = useSaving();
  const defaultMethod = paymentMethods[0]?.name ?? "Cash";
  const [loading, setLoading] = useState(true);
  const [invoice, setInvoice] = useState<InvoiceLite | null>(null);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [rows, setRows] = useState<ExpenseRow[]>([{ what: "", amount: "", method: defaultMethod }]);

  // Inline edit of an existing expense row
  const [editId, setEditId] = useState<string | null>(null);
  const [eWhat, setEWhat] = useState("");
  const [eAmount, setEAmount] = useState("");
  const [eMethod, setEMethod] = useState(defaultMethod);

  function startEdit(exp: Expense) {
    setEditId(exp.id);
    setEWhat(exp.category ?? "");
    setEAmount(String(Number(exp.amount) || ""));
    setEMethod(exp.method || defaultMethod);
  }
  function cancelEdit() { setEditId(null); }

  async function saveEdit(exp: Expense) {
    const amt = parseFloat(String(eAmount).replace(/,/g, "")) || 0;
    if (amt <= 0) { showToast("Enter an amount greater than 0", "err"); return; }
    if (!eMethod || (!isUnpaid(eMethod) && !paymentMethods.some((m) => m.name === eMethod))) { showToast("Select a valid payment method", "err"); return; }
    await run(async () => {
      const category = eWhat.trim();
      const cbDesc = expenseCashbookDesc(category, exp.invoice_number);
      let cashbookEntryId = exp.cashbook_entry_id ?? null;

      if (isUnpaid(eMethod)) {
        // Unpaid/credit — no cash movement. Reverse any prior cash-out.
        if (cashbookEntryId) { await db.from("cashbook").delete().eq("id", cashbookEntryId); cashbookEntryId = null; }
      } else {
        // Funds check — ignore this expense's own existing cash impact.
        const { data: cbAll } = await db.from("cashbook").select("id, type, amount, method, description");
        const entries = ((cbAll ?? []) as (CashbookEntry & { id: string })[]).filter((e) => e.id !== exp.cashbook_entry_id);
        const balances = computeMethodBalances(entries, paymentMethods);
        const avail = balances[eMethod] ?? 0;
        if (amt > avail) { showToast(`Not enough funds in "${eMethod}" (available ${formatCurrency(avail)}).`, "err"); return; }

        if (cashbookEntryId) {
          await db.from("cashbook").update({ amount: amt, method: eMethod, description: cbDesc }).eq("id", cashbookEntryId);
        } else {
          const { data: cbOut, error: cbErr } = await db.from("cashbook").insert({
            type: "out", description: cbDesc, amount: amt, date: String(exp.date).slice(0, 10) || todayISO(),
            account_name: "", method: eMethod, reference: exp.invoice_id ?? "",
          }).select().single();
          if (cbErr) { showToast(cbErr.message, "err"); return; }
          cashbookEntryId = cbOut?.id ?? null;
        }
      }
      const { error } = await db.from("expenses").update({ category, amount: amt, method: eMethod, cashbook_entry_id: cashbookEntryId }).eq("id", exp.id);
      if (error) { showToast(error.message, "err"); return; }
      showToast("Expense updated", "ok");
      setEditId(null);
      await load();
      onChanged();
    });
  }

  const load = useCallback(async () => {
    setLoading(true);
    const [{ data: inv }, { data: exps }] = await Promise.all([
      db.from("invoices").select("id, invoice_number, client_name, client_phone, invoice_date, grand_total, amount_received, balance_due, payment_status").eq("id", invoiceId).single(),
      db.from("expenses").select("*").eq("invoice_id", invoiceId).order("created_at", { ascending: true }),
    ]);
    setInvoice((inv as InvoiceLite) ?? null);
    setExpenses((exps ?? []) as Expense[]);
    setLoading(false);
  }, [invoiceId]);

  useEffect(() => { void load(); }, [load]);

  const realExpenses = useMemo(() => expenses.filter((e) => Number(e.amount) > 0), [expenses]);
  const expenseTotal = useMemo(() => realExpenses.reduce((s, e) => s + Number(e.amount), 0), [realExpenses]);
  const income = Number(invoice?.grand_total ?? 0);
  const profit = income - expenseTotal;
  const newRowsTotal = rows.reduce((s, r) => s + (parseFloat(String(r.amount).replace(/,/g, "")) || 0), 0);
  const isCompleted = realExpenses.length > 0 && realExpenses.every((e) => !!e.completed);

  async function markCompleted() {
    if (realExpenses.length === 0) { showToast("Add at least one expense before completing", "err"); return; }
    await run(async () => {
      const { error } = await db.from("expenses").update({ completed: true }).eq("invoice_id", invoiceId);
      if (error) { showToast(error.message, "err"); return; }
      showToast("Project marked completed", "ok");
      await load();
      onChanged();
    });
  }

  async function reopen() {
    await run(async () => {
      const { error } = await db.from("expenses").update({ completed: false }).eq("invoice_id", invoiceId);
      if (error) { showToast(error.message, "err"); return; }
      showToast("Project reopened", "ok");
      await load();
      onChanged();
    });
  }

  function addRow() { setRows((r) => [...r, { what: "", amount: "", method: defaultMethod }]); }
  function removeRow(i: number) { setRows((r) => (r.length > 1 ? r.filter((_, idx) => idx !== i) : r)); }
  function updateRow(i: number, patch: Partial<ExpenseRow>) { setRows((r) => r.map((row, idx) => (idx === i ? { ...row, ...patch } : row))); }

  async function saveRows() {
    const valid = rows
      .map((r) => ({ what: r.what.trim(), amount: parseFloat(String(r.amount).replace(/,/g, "")) || 0, method: r.method }))
      .filter((r) => r.amount > 0);
    if (!valid.length) { showToast("Add at least one row with an amount", "err"); return; }
    for (const r of valid) {
      if (!r.method || (!isUnpaid(r.method) && !paymentMethods.some((m) => m.name === r.method))) { showToast("Select a valid payment method on each row", "err"); return; }
    }

    await run(async () => {
      // Funds check — aggregate the PAID rows per method vs available balance
      // (unpaid/credit rows don't touch cash, so they're excluded).
      const { data: cbAll } = await db.from("cashbook").select("id, type, amount, method, description");
      const balances = computeMethodBalances((cbAll ?? []) as (CashbookEntry & { id: string })[], paymentMethods);
      const byMethod: Record<string, number> = {};
      for (const r of valid) { if (!isUnpaid(r.method)) byMethod[r.method] = (byMethod[r.method] || 0) + r.amount; }
      for (const [method, amt] of Object.entries(byMethod)) {
        const avail = balances[method] ?? 0;
        if (amt > avail) { showToast(`Not enough funds in "${method}" (available ${formatCurrency(avail)}).`, "err"); return; }
      }

      const desc = invoice ? `${invoice.invoice_number} · ${invoice.client_name}` : "";
      const pending = expenses.find((e) => Number(e.amount) === 0);

      for (let i = 0; i < valid.length; i++) {
        const r = valid[i];
        if (i === 0 && pending) {
          // Complete the pending placeholder created from the invoice checkbox.
          // Unpaid rows record no cashbook entry (no cash movement).
          let cbId: string | null = null;
          if (!isUnpaid(r.method)) {
            const cbDesc = expenseCashbookDesc(r.what, pending.invoice_number);
            const { data: cbOut, error: cbErr } = await db.from("cashbook").insert({
              type: "out", description: cbDesc, amount: r.amount, date: String(pending.date).slice(0, 10) || todayISO(),
              account_name: "", method: r.method, reference: pending.invoice_id ?? "",
            }).select().single();
            if (cbErr) { showToast(cbErr.message, "err"); return; }
            cbId = cbOut?.id ?? null;
          }
          await db.from("expenses").update({ category: r.what, amount: r.amount, method: r.method, cashbook_entry_id: cbId }).eq("id", pending.id);
        } else {
          const { error } = await createExpense({
            category: r.what, description: desc, amount: r.amount, method: r.method,
            date: invoice?.invoice_date ? String(invoice.invoice_date).slice(0, 10) : todayISO(),
            invoiceId, invoiceNumber: invoice?.invoice_number,
          });
          if (error) { showToast(error, "err"); return; }
        }
      }
      showToast("Expense saved", "ok");
      setRows([{ what: "", amount: "", method: defaultMethod }]);
      await load();
      onChanged();
    });
  }

  async function deleteOne(exp: Expense) {
    const ok = await confirmDialog({
      title: "Delete expense?",
      message: `Delete ${exp.category || "this expense"} of ${formatCurrency(Number(exp.amount))}? The cash-out will be reversed.`,
      tone: "danger",
    });
    if (!ok) return;
    await run(async () => {
      if (exp.cashbook_entry_id) await db.from("cashbook").delete().eq("id", exp.cashbook_entry_id);
      const { error } = await db.from("expenses").delete().eq("id", exp.id);
      if (error) { showToast(error.message, "err"); return; }
      await logActivity({
        action: "delete", entityType: "expense", entityId: exp.id,
        title: "Expense Deleted", subtitle: `${exp.expense_number || ""} ${exp.category || "Expense"}`.trim(),
        amount: Number(exp.amount), metadata: { method: exp.method, invoice_number: exp.invoice_number },
      });
      showToast("Expense deleted", "ok");
      await load();
      onChanged();
    });
  }

  const detail = (label: string, value: string) => (
    <div>
      <div className="text-[9px] font-bold tracking-[1.3px] uppercase mb-0.5" style={{ color: "var(--gray-500)" }}>{label}</div>
      <div className="text-[13px] font-bold" style={{ color: "var(--gray-900)" }}>{value}</div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-[800] flex items-start justify-center backdrop-blur-sm pt-8 px-3 pb-8 overflow-y-auto no-print">
      <button type="button" aria-label="Close" className="absolute inset-0 bg-black/40 cursor-default border-none" onClick={() => { if (!saving) onClose(); }} />
      <div className="relative z-10 w-full max-w-[680px] bg-white rounded-[16px] border border-[var(--gray-100)] overflow-hidden" style={{ boxShadow: "var(--shadow-lg)" }}>
        {/* Header */}
        <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-[var(--gray-100)]" style={{ background: "var(--blue-deeper)" }}>
          <div className="text-[15px] font-extrabold text-white">
            {invoice ? `Invoice ${invoice.invoice_number}` : "Invoice expenses"}
          </div>
          <button type="button" onClick={() => { if (!saving) onClose(); }} className="text-white/80 hover:text-white border-none bg-transparent cursor-pointer p-1">
            <X size={18} />
          </button>
        </div>

        {loading ? (
          <div className="py-16 text-center text-[13px]" style={{ color: "var(--gray-700)" }}>Loading…</div>
        ) : (
          <div className="p-5">
            {/* Invoice details */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-4 mb-4 border-b border-[var(--gray-100)]">
              {detail("Client", invoice?.client_name || "—")}
              {detail("Phone", invoice?.client_phone || "—")}
              {detail("Date", invoice ? formatDate(invoice.invoice_date) : "—")}
              {detail("Status", invoice?.payment_status || "—")}
              {detail("Grand Total", formatCurrency(income))}
              {detail("Received", formatCurrency(Number(invoice?.amount_received ?? 0)))}
              {detail("Balance", formatCurrency(Number(invoice?.balance_due ?? 0)))}
            </div>

            {isCompleted ? (
              <div className="flex items-center gap-2 mb-5 px-4 py-3 rounded-[10px]" style={{ background: "var(--green-light)", color: "var(--green)" }}>
                <Check size={16} />
                <span className="text-[12.5px] font-bold">This project is completed — expenses are locked.</span>
              </div>
            ) : (
              <>
                {/* Add expense rows */}
                <div className="flex items-center justify-between mb-2">
                  <div className="text-[11px] font-bold tracking-[1px] uppercase" style={{ color: "var(--gray-700)" }}>Add expense for this invoice</div>
                  <button type="button" onClick={addRow}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-[8px] text-[11.5px] font-semibold border-[1.5px] bg-white cursor-pointer"
                    style={{ borderColor: "var(--blue-light)", color: "var(--blue-deeper)" }}>
                    <Plus size={13} /> Add Row
                  </button>
                </div>

                <div className="flex flex-col gap-2 mb-3">
                  {rows.map((row, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <input type="text" value={row.what} onChange={(e) => updateRow(i, { what: e.target.value })} placeholder="What for? (e.g. Decor)"
                        className="flex-1 border border-[var(--gray-200)] rounded-[8px] px-3 py-2 text-[13px] outline-none bg-white focus:border-[var(--blue)]" style={{ color: "#0C2433" }} />
                      <input type="number" min={0} step={1} value={row.amount} onChange={(e) => updateRow(i, { amount: e.target.value })} onWheel={(e) => e.currentTarget.blur()} placeholder="Amount"
                        className="w-[110px] border border-[var(--gray-200)] rounded-[8px] px-3 py-2 text-[13px] outline-none bg-white focus:border-[var(--blue)]" style={{ color: "#0C2433" }} />
                      <select value={row.method} onChange={(e) => updateRow(i, { method: e.target.value })}
                        className="w-[130px] border border-[var(--gray-200)] rounded-[8px] px-2 py-2 text-[13px] outline-none bg-white focus:border-[var(--blue)]">
                        {paymentMethods.map((m) => <option key={m.id} value={m.name}>{m.name}</option>)}
                        <option value={UNPAID_METHOD}>Unpaid (Credit)</option>
                      </select>
                      <button type="button" onClick={() => removeRow(i)} disabled={rows.length === 1} title="Remove row"
                        className="inline-flex items-center justify-center w-8 h-8 rounded-[8px] border-none bg-transparent cursor-pointer hover:bg-[var(--red-light)] disabled:opacity-30" style={{ color: "var(--red)" }}>
                        <X size={15} />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-5">
                  <div className="text-[13px] font-bold" style={{ color: "var(--gray-700)" }}>New rows total: <span style={{ color: "var(--red)" }}>{formatCurrency(newRowsTotal)}</span></div>
                  <button type="button" onClick={() => void saveRows()} disabled={saving}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-[9px] text-[12.5px] font-semibold border-none cursor-pointer text-white disabled:opacity-60"
                    style={{ background: "linear-gradient(135deg, var(--blue-deeper), var(--blue))" }}>
                    <Plus size={15} /> {saving ? "Saving…" : "Add Expense"}
                  </button>
                </div>
              </>
            )}

            {/* Existing expenses for this invoice */}
            <div className="text-[11px] font-bold tracking-[1px] uppercase mb-2" style={{ color: "var(--gray-700)" }}>
              Expenses for this invoice <span className="font-semibold normal-case" style={{ color: "var(--gray-500)" }}>· {realExpenses.length} entries</span>
            </div>
            {realExpenses.length === 0 ? (
              <p className="text-[12px] py-3 text-center" style={{ color: "var(--gray-500)" }}>No expenses recorded yet.</p>
            ) : (
              <div className="rounded-[10px] border border-[var(--gray-100)] overflow-hidden">
                {realExpenses.map((exp) => (
                  <div key={exp.id} className="px-3 py-2.5 border-b border-[var(--gray-100)] last:border-b-0">
                    {editId === exp.id ? (
                      <div className="flex items-center gap-2">
                        <input type="text" value={eWhat} onChange={(e) => setEWhat(e.target.value)} placeholder="What for?"
                          className="flex-1 border border-[var(--gray-200)] rounded-[8px] px-3 py-1.5 text-[13px] outline-none bg-white focus:border-[var(--blue)]" style={{ color: "#0C2433" }} />
                        <input type="number" min={0} step={1} value={eAmount} onChange={(e) => setEAmount(e.target.value)} onWheel={(e) => e.currentTarget.blur()} placeholder="Amount"
                          className="w-[100px] border border-[var(--gray-200)] rounded-[8px] px-3 py-1.5 text-[13px] outline-none bg-white focus:border-[var(--blue)]" style={{ color: "#0C2433" }} />
                        <select value={eMethod} onChange={(e) => setEMethod(e.target.value)}
                          className="w-[120px] border border-[var(--gray-200)] rounded-[8px] px-2 py-1.5 text-[13px] outline-none bg-white focus:border-[var(--blue)]">
                          {paymentMethods.map((m) => <option key={m.id} value={m.name}>{m.name}</option>)}
                          <option value={UNPAID_METHOD}>Unpaid (Credit)</option>
                        </select>
                        <button type="button" onClick={() => void saveEdit(exp)} disabled={saving} title="Save"
                          className="inline-flex items-center justify-center w-7 h-7 rounded-[7px] border-none bg-transparent cursor-pointer hover:bg-[var(--blue-light)] disabled:opacity-50" style={{ color: "var(--blue)" }}>
                          <Check size={15} />
                        </button>
                        <button type="button" onClick={cancelEdit} disabled={saving} title="Cancel"
                          className="inline-flex items-center justify-center w-7 h-7 rounded-[7px] border-none bg-transparent cursor-pointer hover:bg-[var(--gray-100)] disabled:opacity-50" style={{ color: "var(--gray-500)" }}>
                          <X size={15} />
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between gap-3">
                        <div className="min-w-0">
                          <div className="text-[13px] font-bold truncate" style={{ color: "var(--gray-900)" }}>{exp.category || "Expense"}</div>
                          <div className="text-[10.5px]" style={{ color: "var(--gray-500)" }}>{exp.expense_number} · {formatDate(exp.date)} · {exp.method}</div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-[13px] font-extrabold font-mono" style={{ color: "var(--red)" }}>{formatCurrency(exp.amount)}</span>
                          {!isCompleted && (
                            <>
                              <button type="button" onClick={() => startEdit(exp)} disabled={saving} title="Edit"
                                className="inline-flex items-center justify-center w-7 h-7 rounded-[7px] border-none bg-transparent cursor-pointer hover:bg-[var(--blue-pale)] disabled:opacity-50" style={{ color: "var(--blue-deeper)" }}>
                                <Pencil size={13} />
                              </button>
                              <button type="button" onClick={() => void deleteOne(exp)} disabled={saving} title="Delete"
                                className="inline-flex items-center justify-center w-7 h-7 rounded-[7px] border-none bg-transparent cursor-pointer hover:bg-[var(--red-light)] disabled:opacity-50" style={{ color: "var(--red)" }}>
                                <Trash2 size={13} />
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                <div className="flex items-center justify-between px-3 py-2.5" style={{ background: "var(--red-light)" }}>
                  <span className="text-[13px] font-extrabold" style={{ color: "#B45309" }}>Invoice Total</span>
                  <span className="text-[13px] font-extrabold font-mono" style={{ color: "var(--red)" }}>{formatCurrency(expenseTotal)}</span>
                </div>
              </div>
            )}

            {/* KPIs */}
            <div className="grid grid-cols-3 gap-3 mt-5">
              <div className="rounded-[10px] px-3 py-3" style={{ background: "var(--blue-pale)" }}>
                <div className="text-[9px] font-bold tracking-[1.2px] uppercase mb-1" style={{ color: "var(--blue-deeper)" }}>Invoice Income</div>
                <div className="text-[16px] font-extrabold font-mono" style={{ color: "var(--blue-deeper)" }}>{formatCurrency(income)}</div>
              </div>
              <div className="rounded-[10px] px-3 py-3" style={{ background: "var(--red-light)" }}>
                <div className="text-[9px] font-bold tracking-[1.2px] uppercase mb-1" style={{ color: "var(--red)" }}>Invoice Expenses</div>
                <div className="text-[16px] font-extrabold font-mono" style={{ color: "var(--red)" }}>{formatCurrency(expenseTotal)}</div>
              </div>
              <div className="rounded-[10px] px-3 py-3" style={{ background: profit >= 0 ? "var(--green-light)" : "var(--red-light)" }}>
                <div className="text-[9px] font-bold tracking-[1.2px] uppercase mb-1" style={{ color: profit >= 0 ? "var(--green)" : "var(--red)" }}>{profit >= 0 ? "Profit" : "Loss"}</div>
                <div className="text-[16px] font-extrabold font-mono" style={{ color: profit >= 0 ? "var(--green)" : "var(--red)" }}>{formatCurrency(Math.abs(profit))}</div>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between gap-2 px-5 py-4 border-t border-[var(--gray-100)]" style={{ background: "var(--gray-50)" }}>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => invoice && onPrint(invoice, realExpenses)} disabled={!invoice || saving}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-[9px] text-[12.5px] font-semibold border-[1.5px] bg-white cursor-pointer disabled:opacity-50" style={{ borderColor: "var(--gray-200)", color: "var(--blue-deeper)" }}>
              <Printer size={14} /> Print A4
            </button>
            {isCompleted ? (
              <button type="button" onClick={() => void reopen()} disabled={saving}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-[9px] text-[12.5px] font-semibold border-[1.5px] bg-white cursor-pointer disabled:opacity-50" style={{ borderColor: "var(--gray-200)", color: "var(--gray-700)" }}>
                <RotateCcw size={14} /> Reopen
              </button>
            ) : (
              <button type="button" onClick={() => void markCompleted()} disabled={saving || realExpenses.length === 0}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-[9px] text-[12.5px] font-semibold border-none cursor-pointer text-white disabled:opacity-50" style={{ background: "var(--blue)" }}>
                <Check size={15} /> Mark Completed
              </button>
            )}
          </div>
          <button type="button" onClick={() => { if (!saving) onClose(); }}
            className="px-5 py-2.5 rounded-[9px] text-[12.5px] font-semibold border-[1.5px] bg-white cursor-pointer" style={{ borderColor: "var(--gray-200)", color: "var(--gray-700)" }}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════
// A4 print template — uses the same Header.png / Footer.png as invoices
// ══════════════════════════════════════════════════════════
function ProjectExpensePrint({ invoice, expenses }: { invoice: InvoiceLite; expenses: Expense[] }) {
  const total = expenses.reduce((s, e) => s + Number(e.amount), 0);
  const income = Number(invoice.grand_total ?? 0);
  const profit = income - total;
  const completed = expenses.length > 0 && expenses.every((e) => !!e.completed);

  const cellL: React.CSSProperties = { padding: "6px 14px", border: "1px solid #e5e7eb", fontWeight: 700, color: "#374151", fontSize: 12 };
  const cellR: React.CSSProperties = { padding: "6px 14px", border: "1px solid #e5e7eb", textAlign: "right", fontFamily: "monospace", fontWeight: 800, color: "#111", fontSize: 12 };

  return (
    <div className="ledger-a4-print-only" style={{ background: "#fff", fontFamily: "Arial, sans-serif" }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minHeight: 0 }}>
        <PrintHeader />

        <div style={{ textAlign: "center", background: "#1f2937", color: "#fff", fontWeight: 800, letterSpacing: 2, padding: "6px 0", fontSize: 13, textTransform: "uppercase", marginBottom: 4 }}>
          Project Expense &nbsp;|&nbsp; {invoice.invoice_number}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "10px 4px 8px" }}>
          <div>
            <div style={{ fontSize: 10, color: "#888", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Project / Bill To</div>
            <div style={{ fontSize: 16, fontWeight: 800, color: "#111" }}>{invoice.client_name}</div>
            {invoice.client_phone ? <div style={{ fontSize: 11, color: "#555" }}>{invoice.client_phone}</div> : null}
          </div>
          <div style={{ textAlign: "right", fontSize: 11, color: "#555" }}>
            <div><b>Date:</b> {formatDate(invoice.invoice_date)}</div>
            <div><b>Status:</b> {completed ? "Completed" : "In Progress"}</div>
          </div>
        </div>

        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11, marginTop: 4 }}>
          <thead>
            <tr style={{ background: "#1f2937" }}>
              {["SN", "Expense No", "Description", "Method", "Amount"].map((h) => (
                <th key={h} style={{ color: "#fff", fontWeight: 700, textAlign: h === "Amount" ? "right" : "left", padding: "7px 8px", fontSize: 10, letterSpacing: 1, textTransform: "uppercase" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {expenses.length === 0 ? (
              <tr><td colSpan={5} style={{ padding: "12px 8px", color: "#777", textAlign: "center" }}>No expenses recorded.</td></tr>
            ) : expenses.map((e, idx) => (
              <tr key={e.id} style={{ background: idx % 2 === 0 ? "#fff" : "#fafafa", borderBottom: "1px solid #f0f0f0" }}>
                <td style={{ padding: "6px 8px", color: "#999" }}>{idx + 1}</td>
                <td style={{ padding: "6px 8px", fontFamily: "monospace", color: "#1f2937", fontWeight: 700 }}>{e.expense_number || "—"}</td>
                <td style={{ padding: "6px 8px", fontWeight: 600 }}>{e.category || "Expense"}</td>
                <td style={{ padding: "6px 8px", color: "#555" }}>{e.method}</td>
                <td style={{ padding: "6px 8px", fontFamily: "monospace", fontWeight: 800, textAlign: "right" }}>{formatCurrency(e.amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 16 }}>
          <table style={{ borderCollapse: "collapse", minWidth: 280 }}>
            <tbody>
              <tr><td style={cellL}>Invoice Income</td><td style={cellR}>{formatCurrency(income)}</td></tr>
              <tr><td style={cellL}>Total Expense</td><td style={{ ...cellR, color: "#dc2626" }}>{formatCurrency(total)}</td></tr>
              <tr style={{ background: "#f3f4f6" }}>
                <td style={{ ...cellL, fontWeight: 900 }}>{profit >= 0 ? "Profit" : "Loss"}</td>
                <td style={{ ...cellR, fontWeight: 900, color: profit >= 0 ? "#16a34a" : "#dc2626" }}>{formatCurrency(Math.abs(profit))}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <PrintFooter />
    </div>
  );
}
