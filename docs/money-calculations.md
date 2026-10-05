# Money Calculations — Sky Digital

Complete documentation of how money, balances, and credits flow through the application.

---

## Core Data Model

The system uses a **signed balance** convention for accounts:

- **credit** (positive signed) = the party **owes you** (receivable)
- **debit** (negative signed) = you **owe them** (payable)

Stored in the DB as two fields: `balance` (absolute value) + `bal_type` ("credit" or "debit").

Internal conversion used throughout:

```
signed = bal_type === "credit" ? balance : -balance
```

After any update:

```
balance = abs(signed)
bal_type = signed >= 0 ? "credit" : "debit"
```

---

## Balance Increases (Party Owes You More)

### Creating an Invoice (Accounts Page)

**File:** `app/(dashboard)/accounts/page.tsx` — `handleSaveInvoice()`

1. Calculates `grandTotal` from line items.
2. Creates records in `quick_invoices`, `quick_invoice_items`, `invoices`, and `invoice_items`.
3. Updates account balance:

```
signed = current effective balance (from ledger or DB)
signed += grandTotal
```

The invoice is created with `amount_received = 0`, `balance_due = grandTotal`, `payment_status = "unpaid"`.

### Cashbook "Credit (In)" Entry Linked to an Account

**File:** `app/(dashboard)/cashbook/page.tsx` — `applyAccountBalance()`

When a manual cashbook entry with `type = "in"` is saved and linked to an account:

```
signed += amount   // Credit = work done -> they owe more
```

---

## Balance Decreases (Party Pays You / Owes Less)

### Receive Payment (Accounts Page)

**File:** `app/(dashboard)/accounts/page.tsx` — `handleReceivePayment()`

1. Creates a cashbook entry with `type = "in"` (cash coming into the register).
2. Updates account balance:

```
signed -= amount   // payment received -> they owe less
```

3. Opens WhatsApp with a payment receipt message.

### Cashbook "Debit (Out)" Entry Linked to an Account

**File:** `app/(dashboard)/cashbook/page.tsx` — `applyAccountBalance()`

When a manual cashbook entry with `type = "out"` is saved and linked to an account:

```
signed -= amount   // Debit = payment received -> they owe less
```

---

## Cashbook (Cash in Hand)

**File:** `app/(dashboard)/cashbook/page.tsx`

```
totalIn  = sum of all entries where type = "in"
totalOut = sum of all entries where type = "out"
netBalance (cash in hand) = totalIn - totalOut
```

### What Creates "out" Entries (Cash Leaving)

| Source | File | Description |
|---|---|---|
| Worker advance | `workers/page.tsx` — `handleSaveAdvance()` | Cash paid as advance against salary |
| Worker wage payment | `workers/page.tsx` — `handlePayWages()` | Net wage = salary - advances |
| Labor advance | `labor/page.tsx` — `handleSaveStandaloneAdvance()` | Cash advance to a laborer (no task) |
| Labor task payment | `labor/page.tsx` — `handlePayTask()` | Payment for a completed/partial task |
| Manual entry | `cashbook/page.tsx` — `handleSave()` | User creates a "Debit (Out)" entry |

### What Creates "in" Entries (Cash Arriving)

| Source | File | Description |
|---|---|---|
| Receive payment | `accounts/page.tsx` — `handleReceivePayment()` | Party pays against their balance |
| Manual entry | `cashbook/page.tsx` — `handleSave()` | User creates a "Credit (In)" entry |

### Edit / Delete Behavior

- **Edit:** Reverses the old entry's effect on the linked account, then applies the new entry.
- **Delete:** Reverses the entry's effect on the linked account.

Both use `applyAccountBalance()` with `reverse = true`.

---

## Ledger (Account Statement)

**File:** `app/(dashboard)/accounts/page.tsx` — `buildLedgerRows()` + `ledgerWithRunningBalance()`

The ledger combines two data sources per account:

### Source 1: Invoices

- Each invoice's `grand_total` is a **debit** row (they owe).
- Each invoice's `amount_received` (if > 0) is a **credit** row (they paid).

### Source 2: Cashbook Entries

- Entries with `type = "out"` or description matching "payment received" = **credit** row.
- All other entries = **debit** row.

### Running Balance

```
balance += debit - credit   (for each row, chronologically)
```

### Effective Party Balance

Used in the accounts table to show the "true" balance for each party:

- If ledger rows exist: uses the closing balance from the last ledger row.
- Otherwise: falls back to the DB `balance` / `bal_type` fields.

### Date-Filtered Ledger

When filtering by date range:

```
opening = sum of (debit - credit) for all rows before the "from" date
```

Then the running balance starts from `opening` and accumulates through the filtered rows.

---

## Invoice Line Item Calculation

Used in both the Quick Invoice page and the Accounts page invoice modal:

```
sqft  = round(width * height)
total = sqft * rate * qty
grandTotal = sum of all item totals
```

The invoice schema supports GST (`gst_pct`, `gst_amount`), service tax (`stax_pct`, `stax_amount`), and discounts (`discount_type`, `discount_value`, `discount_amount`), but these are all set to **0** in the current UI flows.

---

## Quick Invoice (Walk-in Customers)

**File:** `app/(dashboard)/quick-invoice/page.tsx` — `handleSave()`

1. Creates `quick_invoices` + `quick_invoice_items` records.
2. Creates a matching `invoices` + `invoice_items` record.
3. **Does NOT update any account balance** (walk-in customers have no linked account).
4. **Does NOT create a cashbook entry.**

---

## Worker Wages

**File:** `app/(dashboard)/workers/page.tsx`

### Advance

- Creates cashbook "out" entry.
- Creates `worker_advances` record.
- Capped at: `monthly_wage - existing_advances_for_month`.

### Pay Wages

```
netPaid = max(0, monthly_wage - total_advances_for_month)
```

- Creates cashbook "out" entry for the net amount.
- Creates `worker_payments` record.

### Undo Payment

- Deletes the linked cashbook entry.
- Deletes the `worker_payments` record.

### Delete Advance

- Deletes the linked cashbook entry.
- Deletes the `worker_advances` record.

---

## Labor (Contract Workers)

**File:** `app/(dashboard)/labor/page.tsx`

### Standalone Advance (No Task)

1. Creates cashbook "out" entry.
2. Creates `labor_advances` record.
3. Auto-applies the advance to existing pending tasks (oldest first):
   - For each pending task, applies `min(remaining_advance, task_net_payable)`.
   - If the task is fully covered, its status becomes "paid".
4. Any leftover amount is added to `laborer.advance_balance`.

### Add Task

```
sqft   = width * height
amount = sqft * rate
```

1. Auto-deducts from `laborer.advance_balance`:
   - `fromPool = min(advance, standing_balance)`
   - `newStanding = standing_balance - fromPool`
2. If advance covers full amount: `status = "paid"` immediately.
3. Otherwise: `status = "pending"`.

### Pay Task

1. Creates or updates a cashbook "out" entry.
2. Increases `task.advance` by the payment amount.
3. If `amount - advance <= 0`: `status = "paid"`.

### Delete Task

1. Deletes linked cashbook entry (if any).
2. If task was pending: restores `advance_from_balance` back to `laborer.advance_balance`.
3. Deletes the `labor_tasks` record.

---

## Dashboard KPIs

**File:** `app/(dashboard)/dashboard/page.tsx`

| KPI | Calculation |
|---|---|
| Today Revenue | Sum of `grand_total` for invoices with `invoice_date = today` |
| Today Received | Sum of cashbook "in" entries with `date = today` |
| Today Pending | Sum of `balance_due` for invoices with `invoice_date = today` |
| Total Invoices | Count of all invoices |

---

## Reports Aggregations

**File:** `app/(dashboard)/reports/page.tsx`

| Metric | Calculation |
|---|---|
| Total Revenue | Sum of `grand_total` for filtered invoices |
| Total Collected | Sum of `amount_received` for filtered invoices |
| Total Due | Sum of `balance_due` for filtered invoices |

**File:** `app/(dashboard)/invoice-report/page.tsx`

Same three totals plus counts of paid / partial / unpaid invoices.

---

## Key Notes

1. **Two parallel balance tracking systems:** The `accounts.balance` DB field is updated directly by cashbook and invoice operations, BUT the ledger view recalculates from source data (invoices + cashbook). The `effectivePartySigned` map reconciles this by preferring ledger-computed balances when activity exists.

2. **Quick invoices create no account balance changes** — they are for walk-in customers only.

3. **Cashbook "in" has dual meaning:** When created via "Receive Payment" on the accounts page, it represents cash coming in and the party's balance going down. When created manually in the cashbook linked to an account, `applyAccountBalance` treats it as credit (balance goes UP).

4. **Invoices are never edited after creation.** The `amount_received` field is always set to 0 in current flows and is never updated by later payments. Payments are tracked exclusively through the cashbook.

5. **All currency values** are stored as `NUMERIC(12,2)` and displayed using `formatCurrency()` which rounds to the nearest integer and formats as `Rs X,XXX`.
