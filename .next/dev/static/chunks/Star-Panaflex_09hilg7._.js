(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Star-Panaflex/lib/dataTableStyles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Shared data-table visuals — matches Accounts → Account List
 * (maroon header, 11px uppercase tracking, body px-4 py-2.5, primary 15px bold).
 */ __turbopack_context__.s([
    "DT",
    ()=>DT
]);
const DT = {
    table: "w-full border-collapse",
    /** Standard header cell (use with text-left / text-center / text-right). */ th: "text-[11px] font-bold tracking-[1.2px] uppercase px-4 py-3 whitespace-nowrap",
    /** Wider tables: tighter horizontal padding. */ thDense: "text-[11px] font-bold tracking-[1.2px] uppercase px-3 py-3 whitespace-nowrap",
    thStyle: {
        background: "var(--blue-deeper)",
        color: "white"
    },
    td: "px-4 py-2.5 border-b border-[var(--gray-100)]",
    tdDense: "px-3 py-2.5 border-b border-[var(--gray-100)]",
    row: "hover:bg-[#bfcffe] transition-colors cursor-default",
    empty: "text-center py-8 text-[14px] font-semibold",
    emptyStyle: {
        color: "var(--gray-800)"
    },
    cellPrimary: "text-[15px] font-bold",
    cellBody: "text-[13.5px] font-semibold",
    cellMono: "text-[13.5px] font-mono font-semibold",
    badge: "text-[11px] font-bold px-2.5 py-0.5 rounded-full"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Star-Panaflex/lib/whatsappWaMe.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildInvoiceShareWhatsAppMessage",
    ()=>buildInvoiceShareWhatsAppMessage,
    "buildLastTransactionWhatsAppMessage",
    ()=>buildLastTransactionWhatsAppMessage,
    "buildPaymentReceivedWhatsAppMessage",
    ()=>buildPaymentReceivedWhatsAppMessage,
    "buildSupplierPaymentWhatsAppMessage",
    ()=>buildSupplierPaymentWhatsAppMessage,
    "formatRemainingBalanceWhatsApp",
    ()=>formatRemainingBalanceWhatsApp,
    "openWhatsAppMessageOnlyNewTab",
    ()=>openWhatsAppMessageOnlyNewTab,
    "openWhatsAppNewTab",
    ()=>openWhatsAppNewTab,
    "waMeDigitsFromNumber",
    ()=>waMeDigitsFromNumber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/helpers.ts [app-client] (ecmascript)");
;
function waMeDigitsFromNumber(raw) {
    const d = raw.replace(/\D/g, "");
    if (d.length === 11 && d.startsWith("0")) return `92${d.slice(1)}`;
    if (d.length === 12 && d.startsWith("92")) return d;
    if (d.length === 10) return `92${d}`;
    if (d.length >= 11 && d.startsWith("92")) return d;
    if (d.length >= 10) return `92${d.replace(/^0+/, "")}`;
    return null;
}
function formatRemainingBalanceWhatsApp(signed) {
    if (signed > 0) {
        return `*Remaining balance:* ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(signed)} (amount due)`;
    }
    if (signed < 0) {
        return `*Remaining balance:* ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(Math.abs(signed))} (credit / advance on account)`;
    }
    return `*Remaining balance:* ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(0)} (settled)`;
}
function openWhatsAppNewTab(rawPhone, message) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const to = waMeDigitsFromNumber(rawPhone);
    if (!to) return false;
    const url = `https://wa.me/${to}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    return true;
}
function openWhatsAppMessageOnlyNewTab(message) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
}
function buildPaymentReceivedWhatsAppMessage(input) {
    const lines = [
        "*Star Sign Panaflex & 3D Sign*",
        "",
        "Assalam-o-Alaikum,",
        "",
        `We confirm *payment received* from *${input.partyName}*.`,
        "",
        `*Amount:* ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(input.amount)}`,
        `*Date:* ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(input.dateISO)}`,
        `*Method:* ${input.method}`
    ];
    if (input.description?.trim()) {
        lines.push(`*Note:* ${input.description.trim()}`);
    }
    lines.push("", formatRemainingBalanceWhatsApp(input.remainingBalanceSigned));
    lines.push("", "Thank you for your payment.", "", "Star Sign Panaflex & 3D Sign", "", "_Software by AddsMint.com_");
    return lines.join("\n");
}
function buildInvoiceShareWhatsAppMessage(input) {
    const status = input.paymentStatus.replace(/_/g, " ");
    const lines = [
        "*Star Sign Panaflex & 3D Sign*",
        "",
        "Assalam-o-Alaikum,",
        "",
        `Invoice *${input.invoiceNumber}* — *${input.clientName}*`,
        `*Date:* ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(input.invoiceDate)}`,
        `*Total:* ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(input.grandTotal)}`,
        `*Received:* ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(input.amountReceived)}`,
        `*Balance due:* ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(input.balanceDue)}`,
        `*Status:* ${status}`
    ];
    if (input.invoiceDescription?.trim()) {
        lines.push(`*Description:* ${input.invoiceDescription.trim()}`);
    }
    if (input.items && input.items.length > 0) {
        lines.push("", "*Products / line items:*");
        input.items.forEach((it, i)=>{
            const name = (it.category || "").trim() || "Item";
            const extra = (it.description || "").trim();
            const label = extra ? `${name} (${extra})` : name;
            lines.push(`${i + 1}. *${label}* — ${it.width}×${it.height} ft, ${it.sqft} sqft, qty *${it.qty}*, rate ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(it.rate)}, amount *${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(it.amount)}*`);
        });
    }
    lines.push("", "Thank you.", "", "Star Sign Panaflex & 3D Sign", "", "_Software by AddsMint.com_");
    return lines.join("\n");
}
function buildLastTransactionWhatsAppMessage(partyName, row, remainingBalanceSigned, invoiceExtra) {
    const lines = [
        "*Star Sign Panaflex & 3D Sign*",
        "",
        "Assalam-o-Alaikum,",
        "",
        `Regarding *${partyName}*, your *latest* transaction with us:`,
        ""
    ];
    if (row.debit > 0 && invoiceExtra) {
        // Full invoice detail
        const status = invoiceExtra.paymentStatus.replace(/_/g, " ");
        lines.push(`Invoice *${row.doc}* — *${partyName}*`, `*Date:* ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(row.date)}`, `*Total:* ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(invoiceExtra.grandTotal)}`, `*Received:* ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(invoiceExtra.amountReceived)}`, `*Balance due:* ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(Math.max(0, invoiceExtra.grandTotal - invoiceExtra.amountReceived))}`, `*Status:* ${status}`);
        if (invoiceExtra.description?.trim()) {
            lines.push(`*Description:* ${invoiceExtra.description.trim()}`);
        }
        if (invoiceExtra.items && invoiceExtra.items.length > 0) {
            lines.push("", "*Products / line items:*");
            invoiceExtra.items.forEach((it, i)=>{
                const name = (it.category || "").trim() || "Item";
                const extra = (it.description || "").trim();
                const label = extra ? `${name} (${extra})` : name;
                lines.push(`${i + 1}. *${label}* — ${it.width}×${it.height} ft, ${it.sqft} sqft, qty *${it.qty}*, rate ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(it.rate)}, amount *${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(it.amount)}*`);
            });
        }
    } else if (row.debit > 0) {
        lines.push(`*Invoice / bill:* ${row.doc} — *${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(row.debit)}* on *${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(row.date)}*.\n${row.desc}`);
    } else if (row.credit > 0) {
        lines.push(`*Payment received:* *${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(row.credit)}* on *${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(row.date)}*.\n${row.desc}`);
    } else {
        lines.push(`${row.desc} — ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(row.date)}`);
    }
    lines.push("", formatRemainingBalanceWhatsApp(remainingBalanceSigned), "", "If you have any questions, reply to this message.", "", "Thank you.", "", "Star Sign Panaflex & 3D Sign", "", "_Software by AddsMint.com_");
    return lines.join("\n");
}
function buildSupplierPaymentWhatsAppMessage(input) {
    const lines = [
        "*Star Sign Panaflex & 3D Sign*",
        "",
        "Assalam-o-Alaikum,",
        "",
        `This confirms *payment made* to *${input.supplierName}*.`,
        "",
        `*Amount:* ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(input.amount)}`,
        `*Date:* ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(input.dateISO)}`,
        `*Method:* ${input.method}`
    ];
    if (input.description?.trim()) lines.push(`*Note:* ${input.description.trim()}`);
    lines.push("", `*Remaining payable:* ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(Math.max(0, input.remainingPayable))}`, "", "Thank you.", "", "Star Sign Panaflex & 3D Sign", "", "_Software by AddsMint.com_");
    return lines.join("\n");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Star-Panaflex/lib/paymentMethods.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "computeMethodBalances",
    ()=>computeMethodBalances,
    "fetchPaymentMethods",
    ()=>fetchPaymentMethods,
    "getMethodBalance",
    ()=>getMethodBalance,
    "isBalanceAdjustmentEntry",
    ()=>isBalanceAdjustmentEntry,
    "isLedgerOnlyEntry",
    ()=>isLedgerOnlyEntry,
    "isOpeningBalanceEntry",
    ()=>isOpeningBalanceEntry,
    "normalizePaymentMethod",
    ()=>normalizePaymentMethod,
    "usePaymentMethods",
    ()=>usePaymentMethods
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/db.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const DEFAULT_FALLBACK = "Cash";
function normalizePaymentMethod(raw) {
    const s = (raw ?? "").trim();
    if (!s) return DEFAULT_FALLBACK;
    if (s === "Mobile Wallet") return "EasyPaisa";
    return s;
}
function isOpeningBalanceEntry(entry) {
    return /^opening balance/i.test(entry.description ?? "");
}
function isBalanceAdjustmentEntry(entry) {
    return (entry.method ?? "").trim().toLowerCase() === "adjustment" || /^balance adjustment/i.test(entry.description ?? "");
}
function isLedgerOnlyEntry(entry) {
    return isOpeningBalanceEntry(entry) || isBalanceAdjustmentEntry(entry);
}
function computeMethodBalances(entries, methods) {
    const result = {};
    // Seed every active method with its opening balance so the dashboard shows
    // it even before any entries are recorded against it.
    for (const m of methods){
        if (m.archived) continue;
        result[m.name] = Number(m.opening_balance) || 0;
    }
    for (const e of entries){
        if (isLedgerOnlyEntry(e)) continue;
        const method = normalizePaymentMethod(e.method);
        const amt = Number(e.amount) || 0;
        if (!(method in result)) result[method] = 0; // archived/legacy method — still tally
        if (e.type === "in") result[method] += amt;
        else if (e.type === "out") result[method] -= amt;
    }
    return result;
}
async function fetchPaymentMethods() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("payment_methods").select("id, name, opening_balance, archived, sort_order").order("sort_order", {
        ascending: true
    }).order("name", {
        ascending: true
    });
    if (error || !Array.isArray(data)) return [];
    return data.map((m)=>({
            ...m,
            opening_balance: Number(m.opening_balance) || 0,
            archived: !!m.archived,
            sort_order: Number(m.sort_order) || 0
        }));
}
function usePaymentMethods() {
    _s();
    const [methods, setMethods] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    async function reload() {
        setLoading(true);
        const all = await fetchPaymentMethods();
        setMethods(all.filter((m)=>!m.archived));
        setLoading(false);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePaymentMethods.useEffect": ()=>{
            void reload();
        }
    }["usePaymentMethods.useEffect"], []);
    return {
        methods,
        loading,
        reload
    };
}
_s(usePaymentMethods, "3rteatDlQmMWWJEjS/XDCDfRPoI=");
async function getMethodBalance(methodName) {
    const [{ data: entries }, methods] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("cashbook").select("type, amount, method, description"),
        fetchPaymentMethods()
    ]);
    const safeEntries = entries ?? [];
    const balances = computeMethodBalances(safeEntries, methods);
    return balances[normalizePaymentMethod(methodName)] ?? 0;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Star-Panaflex/lib/expenses.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UNPAID_METHOD",
    ()=>UNPAID_METHOD,
    "createExpense",
    ()=>createExpense,
    "expenseCashbookDesc",
    ()=>expenseCashbookDesc,
    "isUnpaid",
    ()=>isUnpaid,
    "nextExpenseNumber",
    ()=>nextExpenseNumber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/db.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/helpers.ts [app-client] (ecmascript)");
;
;
const UNPAID_METHOD = "Unpaid";
const isUnpaid = (method)=>(method ?? "") === UNPAID_METHOD;
async function nextExpenseNumber() {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("expenses").select("expense_number").order("created_at", {
        ascending: false
    }).limit(300);
    let max = 0;
    for (const r of data ?? []){
        const m = String(r.expense_number ?? "").match(/(\d+)$/);
        if (m) max = Math.max(max, parseInt(m[1], 10));
    }
    return `EXP-${String(max + 1).padStart(3, "0")}`;
}
function expenseCashbookDesc(category, invoiceNumber) {
    return `${category || "Expense"}${invoiceNumber ? ` — ${invoiceNumber}` : ""}`;
}
async function createExpense(input) {
    const date = input.date || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["todayISO"])();
    const expenseNumber = await nextExpenseNumber();
    let cashbookEntryId = null;
    if (input.amount > 0 && !isUnpaid(input.method)) {
        const { data: cbOut, error: cbErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("cashbook").insert({
            type: "out",
            description: expenseCashbookDesc(input.category, input.invoiceNumber),
            amount: input.amount,
            date,
            account_name: "",
            method: input.method,
            reference: input.invoiceId ?? ""
        }).select().single();
        if (cbErr) return {
            expenseNumber: null,
            error: cbErr.message
        };
        cashbookEntryId = cbOut?.id ?? null;
    }
    const { error: expErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("expenses").insert({
        expense_number: expenseNumber,
        category: input.category,
        invoice_id: input.invoiceId ?? null,
        invoice_number: input.invoiceNumber ?? "",
        description: input.description,
        amount: input.amount,
        date,
        method: input.method,
        cashbook_entry_id: cashbookEntryId
    });
    if (expErr) return {
        expenseNumber: null,
        error: expErr.message
    };
    return {
        expenseNumber,
        error: null
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Star-Panaflex/components/PrintFooter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrintFooter",
    ()=>PrintFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function PrintFooter({ style } = {}) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%",
            marginTop: 12,
            ...style
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "/Footer.png",
                alt: "Star Sign Panaflex contact",
                style: {
                    width: "100%",
                    height: "auto",
                    display: "block"
                }
            }, void 0, false, {
                fileName: "[project]/Star-Panaflex/components/PrintFooter.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: "center",
                    fontSize: 11,
                    fontWeight: 800,
                    color: "#000",
                    marginTop: 6,
                    letterSpacing: 0.3
                },
                children: "Software by AddsMint.com"
            }, void 0, false, {
                fileName: "[project]/Star-Panaflex/components/PrintFooter.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Star-Panaflex/components/PrintFooter.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = PrintFooter;
var _c;
__turbopack_context__.k.register(_c, "PrintFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Star-Panaflex/components/PrintHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrintHeader",
    ()=>PrintHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function PrintHeader({ style } = {}) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%",
            marginBottom: 8,
            ...style
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: "/Header.png",
            alt: "Star Sign Panaflex",
            style: {
                width: "100%",
                height: "auto",
                display: "block"
            }
        }, void 0, false, {
            fileName: "[project]/Star-Panaflex/components/PrintHeader.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Star-Panaflex/components/PrintHeader.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = PrintHeader;
var _c;
__turbopack_context__.k.register(_c, "PrintHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Star-Panaflex/components/ThermalHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThermalHeader",
    ()=>ThermalHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function ThermalHeader({ style } = {}) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%",
            textAlign: "center",
            padding: "4px 0 6px",
            borderBottom: "1px solid #000",
            marginBottom: 4,
            ...style
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: "/Thermal.png",
            alt: "Star Sign",
            style: {
                width: "60mm",
                maxWidth: "100%",
                height: "auto",
                display: "block",
                margin: "0 auto"
            }
        }, void 0, false, {
            fileName: "[project]/Star-Panaflex/components/ThermalHeader.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Star-Panaflex/components/ThermalHeader.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = ThermalHeader;
var _c;
__turbopack_context__.k.register(_c, "ThermalHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Star-Panaflex/components/SearchableSelect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchableSelect",
    ()=>SearchableSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function SearchableSelect({ value, onChange, options, placeholder = "— Select —", emptyValue = "", inputClassName = "", inputStyle, onCreate, createLabel = "+ Add" }) {
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [highlight, setHighlight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [dropdownStyle, setDropdownStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const selectedLabel = options.find((o)=>o.value === value)?.label ?? "";
    const isEmpty = value === emptyValue || value === "";
    const trimmedQuery = query.trim();
    const filtered = trimmedQuery ? options.filter((o)=>o.label.toLowerCase().includes(trimmedQuery.toLowerCase())) : options;
    const hasExactMatch = trimmedQuery ? options.some((o)=>o.label.toLowerCase() === trimmedQuery.toLowerCase() || o.value.toLowerCase() === trimmedQuery.toLowerCase()) : false;
    const showCreateRow = !!onCreate && trimmedQuery.length > 0 && !hasExactMatch;
    const positionDropdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SearchableSelect.useCallback[positionDropdown]": ()=>{
            if (!inputRef.current) return;
            const rect = inputRef.current.getBoundingClientRect();
            const viewportH = window.innerHeight;
            const margin = 8;
            const desiredMax = 220;
            const spaceBelow = viewportH - rect.bottom - margin;
            const spaceAbove = rect.top - margin;
            const flipUp = spaceBelow < Math.min(desiredMax, 160) && spaceAbove > spaceBelow;
            const maxHeight = Math.max(120, Math.min(desiredMax, flipUp ? spaceAbove : spaceBelow));
            setDropdownStyle(flipUp ? {
                position: "fixed",
                bottom: viewportH - rect.top + 4,
                left: rect.left,
                width: rect.width,
                maxHeight,
                zIndex: 9999
            } : {
                position: "fixed",
                top: rect.bottom + 4,
                left: rect.left,
                width: rect.width,
                maxHeight,
                zIndex: 9999
            });
        }
    }["SearchableSelect.useCallback[positionDropdown]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchableSelect.useEffect": ()=>{
            if (!open) return;
            positionDropdown();
            window.addEventListener("scroll", positionDropdown, true);
            window.addEventListener("resize", positionDropdown);
            return ({
                "SearchableSelect.useEffect": ()=>{
                    window.removeEventListener("scroll", positionDropdown, true);
                    window.removeEventListener("resize", positionDropdown);
                }
            })["SearchableSelect.useEffect"];
        }
    }["SearchableSelect.useEffect"], [
        open,
        positionDropdown
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchableSelect.useEffect": ()=>{
            if (!open) return;
            function onOutside(e) {
                if (inputRef.current?.contains(e.target) || dropdownRef.current?.contains(e.target)) return;
                setOpen(false);
                setQuery("");
            }
            document.addEventListener("mousedown", onOutside);
            return ({
                "SearchableSelect.useEffect": ()=>document.removeEventListener("mousedown", onOutside)
            })["SearchableSelect.useEffect"];
        }
    }["SearchableSelect.useEffect"], [
        open
    ]);
    function handleFocus() {
        setOpen(true);
        setQuery("");
        setHighlight(0);
    }
    function handleChange(e) {
        setQuery(e.target.value);
        setOpen(true);
        setHighlight(0);
    }
    function select(opt) {
        onChange(opt ? opt.value : emptyValue);
        setOpen(false);
        setQuery("");
        inputRef.current?.blur();
    }
    function handleCreate() {
        if (!onCreate || !trimmedQuery) return;
        onCreate(trimmedQuery);
        setOpen(false);
        setQuery("");
        inputRef.current?.blur();
    }
    function handleKeyDown(e) {
        if (!open) {
            if (e.key === "ArrowDown" || e.key === "Enter") {
                setOpen(true);
                setHighlight(0);
                e.preventDefault();
            }
            return;
        }
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setHighlight((h)=>filtered.length === 0 ? 0 : (h + 1) % filtered.length);
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setHighlight((h)=>filtered.length === 0 ? 0 : (h - 1 + filtered.length) % filtered.length);
        } else if (e.key === "Enter") {
            if (filtered.length === 0) {
                if (showCreateRow) {
                    e.preventDefault();
                    handleCreate();
                }
                return;
            }
            e.preventDefault();
            const idx = Math.min(highlight, filtered.length - 1);
            select(filtered[idx]);
        } else if (e.key === "Escape") {
            setOpen(false);
            setQuery("");
            inputRef.current?.blur();
        }
    }
    const displayValue = open ? query : isEmpty ? "" : selectedLabel;
    const dropdown = open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: dropdownRef,
        style: {
            background: "#fff",
            border: "1px solid var(--gray-200)",
            borderRadius: 8,
            boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
            overflowY: "auto",
            ...dropdownStyle
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onMouseDown: (e)=>{
                    e.preventDefault();
                    select(null);
                },
                className: "px-3 py-2 text-[11px] cursor-pointer hover:bg-[var(--blue-pale)]",
                style: {
                    color: "var(--gray-500)",
                    borderBottom: "1px solid var(--gray-100)"
                },
                children: placeholder
            }, void 0, false, {
                fileName: "[project]/Star-Panaflex/components/SearchableSelect.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-3 py-2 text-[11px]",
                        style: {
                            color: "var(--gray-400)"
                        },
                        children: "No results"
                    }, void 0, false, {
                        fileName: "[project]/Star-Panaflex/components/SearchableSelect.tsx",
                        lineNumber: 197,
                        columnNumber: 11
                    }, this),
                    showCreateRow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onMouseDown: (e)=>{
                            e.preventDefault();
                            handleCreate();
                        },
                        className: "px-3 py-2 text-[12px] cursor-pointer hover:bg-[var(--blue-pale)]",
                        style: {
                            color: "var(--blue-deeper)",
                            fontWeight: 700,
                            borderTop: "1px solid var(--gray-100)"
                        },
                        children: [
                            createLabel,
                            " “",
                            trimmedQuery,
                            "”"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Star-Panaflex/components/SearchableSelect.tsx",
                        lineNumber: 201,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    filtered.map((o, i)=>{
                        const isHighlighted = i === Math.min(highlight, filtered.length - 1);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onMouseDown: (e)=>{
                                e.preventDefault();
                                select(o);
                            },
                            onMouseEnter: ()=>setHighlight(i),
                            className: "px-3 py-2 text-[12px] cursor-pointer",
                            style: {
                                fontWeight: o.value === value ? 700 : 400,
                                color: o.value === value ? "var(--blue-deeper)" : "var(--gray-900)",
                                background: isHighlighted ? "var(--blue-pale)" : undefined
                            },
                            children: o.label
                        }, o.value, false, {
                            fileName: "[project]/Star-Panaflex/components/SearchableSelect.tsx",
                            lineNumber: 215,
                            columnNumber: 15
                        }, this);
                    }),
                    showCreateRow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onMouseDown: (e)=>{
                            e.preventDefault();
                            handleCreate();
                        },
                        className: "px-3 py-2 text-[12px] cursor-pointer hover:bg-[var(--blue-pale)]",
                        style: {
                            color: "var(--blue-deeper)",
                            fontWeight: 700,
                            borderTop: "1px solid var(--gray-100)"
                        },
                        children: [
                            createLabel,
                            " “",
                            trimmedQuery,
                            "”"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Star-Panaflex/components/SearchableSelect.tsx",
                        lineNumber: 231,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/Star-Panaflex/components/SearchableSelect.tsx",
        lineNumber: 177,
        columnNumber: 5
    }, this) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: inputRef,
                type: "text",
                value: displayValue,
                placeholder: isEmpty ? placeholder : selectedLabel,
                onFocus: handleFocus,
                onChange: handleChange,
                onKeyDown: handleKeyDown,
                className: inputClassName,
                style: inputStyle,
                autoComplete: "off"
            }, void 0, false, {
                fileName: "[project]/Star-Panaflex/components/SearchableSelect.tsx",
                lineNumber: 246,
                columnNumber: 7
            }, this),
            ("TURBOPACK compile-time value", "object") !== "undefined" && dropdown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(dropdown, document.body) : null
        ]
    }, void 0, true, {
        fileName: "[project]/Star-Panaflex/components/SearchableSelect.tsx",
        lineNumber: 245,
        columnNumber: 5
    }, this);
}
_s(SearchableSelect, "xkyESOO1WV6P8KTArOWU4f/hh/g=");
_c = SearchableSelect;
var _c;
__turbopack_context__.k.register(_c, "SearchableSelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Star-Panaflex/lib/activityLog.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "logActivity",
    ()=>logActivity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/db.ts [app-client] (ecmascript)");
;
async function logActivity(input) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("activity_log").insert({
            action: input.action,
            entity_type: input.entityType,
            entity_id: input.entityId ?? "",
            title: input.title ?? "",
            subtitle: input.subtitle ?? "",
            amount: input.amount ?? null,
            metadata: input.metadata ? JSON.stringify(input.metadata) : ""
        });
    } catch (e) {
        console.error("[activityLog] failed to log:", e);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Star-Panaflex/components/ProductCreateModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCreateModal",
    ()=>ProductCreateModal,
    "nextProductCode",
    ()=>nextProductCode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/db.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/components/Toast.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function nextProductCode(existing) {
    let max = 0;
    for (const p of existing){
        const m = String(p.code ?? "").match(/(\d+)/);
        if (m) max = Math.max(max, parseInt(m[1], 10));
    }
    return String(max + 1);
}
function ProductCreateModal({ initialName, existingProducts, onClose, onCreated }) {
    _s();
    const [fName, setFName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialName);
    const [fCode, setFCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ProductCreateModal.useState": ()=>nextProductCode(existingProducts)
    }["ProductCreateModal.useState"]);
    const [fDescription, setFDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [fCost, setFCost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [fSale, setFSale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [fPricingType, setFPricingType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("sqft");
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductCreateModal.useEffect": ()=>{
            function onKey(e) {
                if (e.key === "Escape" && !saving) onClose();
            }
            window.addEventListener("keydown", onKey);
            return ({
                "ProductCreateModal.useEffect": ()=>window.removeEventListener("keydown", onKey)
            })["ProductCreateModal.useEffect"];
        }
    }["ProductCreateModal.useEffect"], [
        onClose,
        saving
    ]);
    function handleNameChange(name) {
        setFName(name);
    }
    async function handleSave() {
        const trimmed = fName.trim();
        if (!trimmed) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Enter product name", "err");
            return;
        }
        setSaving(true);
        const payload = {
            code: fCode || nextProductCode(existingProducts),
            name: trimmed,
            description: fDescription.trim(),
            cost_price: parseFloat(fCost) || 0,
            sale_price: parseFloat(fSale) || 0,
            pricing_type: fPricingType
        };
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("products").insert(payload).select("id").single();
        setSaving(false);
        if (error || !data?.id) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(error?.message || "Could not save product", "err");
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Product saved", "ok");
        onCreated({
            id: String(data.id),
            name: payload.name,
            sale_price: payload.sale_price,
            description: payload.description,
            pricing_type: payload.pricing_type
        });
    }
    const inputStyle = {
        borderColor: "var(--gray-200)",
        background: "var(--gray-50)",
        color: "var(--gray-900)"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[1000] flex items-start justify-center backdrop-blur-sm pt-10 px-4 overflow-y-auto",
        style: {
            background: "rgba(10,30,50,.45)"
        },
        onClick: ()=>{
            if (!saving) onClose();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-[20px] w-[480px] max-w-full overflow-hidden animate-slide-up",
            style: {
                boxShadow: "var(--shadow-lg)"
            },
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-5 py-4 border-b border-[var(--gray-100)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-[15px] font-bold",
                            children: "Add Product"
                        }, void 0, false, {
                            fileName: "[project]/Star-Panaflex/components/ProductCreateModal.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            disabled: saving,
                            className: "w-7 h-7 rounded-full flex items-center justify-center border-none cursor-pointer disabled:opacity-50",
                            style: {
                                background: "var(--gray-100)",
                                color: "var(--gray-800)"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 12
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/components/ProductCreateModal.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Star-Panaflex/components/ProductCreateModal.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Star-Panaflex/components/ProductCreateModal.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-5 grid grid-cols-2 gap-3.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-1 col-span-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-[10px] font-bold tracking-[1.2px] uppercase",
                                    style: {
                                        color: "var(--blue-deeper)"
                                    },
                                    children: [
                                        "Product Name ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: "var(--red)"
                                            },
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/components/ProductCreateModal.tsx",
                                            lineNumber: 98,
                                            columnNumber: 28
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/components/ProductCreateModal.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: fName,
                                    onChange: (e)=>handleNameChange(e.target.value),
                                    placeholder: "e.g. Billboard Print, Shop Sign Acrylic",
                                    className: "border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none",
                                    style: inputStyle,
                                    autoFocus: true
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/components/ProductCreateModal.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Star-Panaflex/components/ProductCreateModal.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-1 col-span-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-[10px] font-bold tracking-[1.2px] uppercase",
                                    style: {
                                        color: "var(--blue-deeper)"
                                    },
                                    children: [
                                        "Description ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-normal normal-case",
                                            style: {
                                                color: "var(--gray-800)"
                                            },
                                            children: "(optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/components/ProductCreateModal.tsx",
                                            lineNumber: 107,
                                            columnNumber: 27
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/components/ProductCreateModal.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: fDescription,
                                    onChange: (e)=>setFDescription(e.target.value),
                                    placeholder: "e.g. Outdoor vinyl, UV print, lamination options…",
                                    rows: 3,
                                    className: "border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none resize-y min-h-[72px]",
                                    style: inputStyle
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/components/ProductCreateModal.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Star-Panaflex/components/ProductCreateModal.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-1 col-span-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-[10px] font-bold tracking-[1.2px] uppercase",
                                    style: {
                                        color: "var(--blue-deeper)"
                                    },
                                    children: "Pricing Type"
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/components/ProductCreateModal.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex border-[1.5px] rounded-[9px] overflow-hidden",
                                    style: {
                                        borderColor: "var(--gray-200)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setFPricingType("sqft"),
                                            className: "flex-1 py-2 text-[12px] font-semibold border-none cursor-pointer transition-all",
                                            style: {
                                                background: fPricingType === "sqft" ? "var(--blue-deeper)" : "var(--gray-50)",
                                                color: fPricingType === "sqft" ? "#fff" : "var(--gray-500)"
                                            },
                                            children: "Sqft (Width × Height)"
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/components/ProductCreateModal.tsx",
                                            lineNumber: 122,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setFPricingType("standalone"),
                                            className: "flex-1 py-2 text-[12px] font-semibold border-none cursor-pointer transition-all",
                                            style: {
                                                background: fPricingType === "standalone" ? "#B45309" : "var(--gray-50)",
                                                color: fPricingType === "standalone" ? "#fff" : "var(--gray-500)"
                                            },
                                            children: "Standalone (Fixed Price)"
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/components/ProductCreateModal.tsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/components/ProductCreateModal.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Star-Panaflex/components/ProductCreateModal.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-[10px] font-bold tracking-[1.2px] uppercase",
                                    style: {
                                        color: "var(--blue-deeper)"
                                    },
                                    children: "Item Code"
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/components/ProductCreateModal.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: fCode,
                                    onChange: (e)=>setFCode(e.target.value),
                                    placeholder: "Auto-generated",
                                    className: "border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none font-mono font-bold",
                                    style: {
                                        ...inputStyle,
                                        background: "var(--blue-pale)",
                                        color: "var(--blue-deeper)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/components/ProductCreateModal.tsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Star-Panaflex/components/ProductCreateModal.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-[10px] font-bold tracking-[1.2px] uppercase",
                                    style: {
                                        color: "var(--blue-deeper)"
                                    },
                                    children: [
                                        "Cost Price",
                                        fPricingType === "sqft" ? " / Sqft" : "",
                                        " (Rs)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/components/ProductCreateModal.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    value: fCost,
                                    onChange: (e)=>setFCost(e.target.value),
                                    placeholder: "0",
                                    min: "0",
                                    className: "border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none font-mono",
                                    style: inputStyle
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/components/ProductCreateModal.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Star-Panaflex/components/ProductCreateModal.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-1 col-span-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-[10px] font-bold tracking-[1.2px] uppercase",
                                    style: {
                                        color: "var(--blue-deeper)"
                                    },
                                    children: [
                                        "Sale Price",
                                        fPricingType === "sqft" ? " / Sqft" : "",
                                        " (Rs)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/components/ProductCreateModal.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    value: fSale,
                                    onChange: (e)=>setFSale(e.target.value),
                                    placeholder: "0",
                                    min: "0",
                                    className: "border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none font-mono",
                                    style: inputStyle
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/components/ProductCreateModal.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Star-Panaflex/components/ProductCreateModal.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this),
                        fCost && fSale && parseFloat(fSale) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-span-2 flex items-center gap-2 px-3 py-2 rounded-[9px]",
                            style: {
                                background: "var(--green-light)",
                                border: "1.5px solid rgba(14,173,106,.2)"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] font-semibold",
                                style: {
                                    color: "var(--green)"
                                },
                                children: [
                                    "Margin: ",
                                    Math.round((parseFloat(fSale) - parseFloat(fCost)) / parseFloat(fSale) * 100),
                                    "% — Rs ",
                                    Math.round(parseFloat(fSale) - parseFloat(fCost)),
                                    " profit ",
                                    fPricingType === "sqft" ? "per sqft" : "per unit"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/components/ProductCreateModal.tsx",
                                lineNumber: 164,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Star-Panaflex/components/ProductCreateModal.tsx",
                            lineNumber: 162,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Star-Panaflex/components/ProductCreateModal.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end gap-2 px-5 py-3.5 border-t border-[var(--gray-100)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            disabled: saving,
                            className: "px-4 py-2 rounded-[9px] text-[12.5px] font-semibold border-[1.5px] cursor-pointer bg-white disabled:opacity-50",
                            style: {
                                borderColor: "var(--gray-200)",
                                color: "var(--blue-deeper)"
                            },
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/Star-Panaflex/components/ProductCreateModal.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSave,
                            disabled: saving,
                            className: "px-4 py-2 rounded-[9px] text-[12.5px] font-semibold border-none cursor-pointer text-white disabled:opacity-60 inline-flex items-center gap-1.5",
                            style: {
                                background: "linear-gradient(135deg, var(--blue-deeper), var(--blue))"
                            },
                            children: [
                                saving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    size: 13,
                                    className: "animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/components/ProductCreateModal.tsx",
                                    lineNumber: 180,
                                    columnNumber: 23
                                }, this) : null,
                                saving ? "Saving…" : "Save Product"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Star-Panaflex/components/ProductCreateModal.tsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Star-Panaflex/components/ProductCreateModal.tsx",
                    lineNumber: 171,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Star-Panaflex/components/ProductCreateModal.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Star-Panaflex/components/ProductCreateModal.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_s(ProductCreateModal, "NHOnOfNh4VhLU+zOvV27oKdSSaU=");
_c = ProductCreateModal;
var _c;
__turbopack_context__.k.register(_c, "ProductCreateModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InvoicePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/db.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/components/Toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/helpers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/dataTableStyles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$html2canvas$2f$dist$2f$html2canvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/html2canvas/dist/html2canvas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$whatsappWaMe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/whatsappWaMe.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$paymentMethods$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/paymentMethods.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$expenses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/expenses.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$PrintFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/components/PrintFooter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$PrintHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/components/PrintHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$ThermalHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/components/ThermalHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$UserContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/UserContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$SearchableSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/components/SearchableSelect.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$ConfirmModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/components/ConfirmModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$activityLog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/activityLog.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$ProductCreateModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/components/ProductCreateModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function blankItem() {
    return {
        lineType: "product",
        product: "",
        laborType: "",
        description: "",
        width: 0,
        height: 0,
        sqft: 0,
        rate: 0,
        qty: 1,
        total: 0,
        pricingType: "sqft"
    };
}
function calcItem(item) {
    if (item.pricingType === "standalone") {
        return {
            ...item,
            sqft: 0,
            total: Math.round(Number(item.rate) * Number(item.qty) * 100) / 100
        };
    }
    const sqft = Math.round(Number(item.width) * Number(item.height));
    return {
        ...item,
        sqft,
        total: sqft * Number(item.rate) * Number(item.qty)
    };
}
function computeWalkInPayment(draft) {
    const subtotal = draft.items.reduce((s, it)=>s + it.total, 0);
    const rawDiscount = parseFloat(String(draft.discountValue).replace(/,/g, "")) || 0;
    const discountAmount = draft.discountType === "pct" ? Math.min(Math.max(0, rawDiscount), 100) * (subtotal / 100) : Math.min(Math.max(0, rawDiscount), subtotal);
    const grandTotal = Math.max(0, Math.round((subtotal - discountAmount) * 100) / 100);
    const paidParsed = parseFloat(String(draft.amountPaid).replace(/,/g, "")) || 0;
    const amountReceived = Math.min(Math.max(0, paidParsed), grandTotal);
    const balanceDue = Math.round((grandTotal - amountReceived) * 100) / 100;
    const paymentStatus = balanceDue <= 0 ? "paid" : amountReceived > 0 ? "partial" : "unpaid";
    return {
        subtotal,
        discountAmount,
        grandTotal,
        amountReceived,
        balanceDue,
        paymentStatus
    };
}
const EMPTY_WALK_IN_DASH = {
    todayInvoices: 0,
    todaySales: 0,
    todayReceived: 0,
    todayPending: 0,
    totalInvoices: 0,
    totalSales: 0,
    totalReceived: 0,
    totalPending: 0
};
function InvoicePage() {
    _s();
    const userProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$UserContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { methods: paymentMethods } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$paymentMethods$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePaymentMethods"])();
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [nextNum, setNextNum] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [savedInvoices, setSavedInvoices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [allAccounts, setAllAccounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [draft, setDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [payInvoice, setPayInvoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [payAmount, setPayAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [payMethod, setPayMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Cash");
    const [payDate, setPayDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [paySaving, setPaySaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const invoicePdfRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [invoicePdfData, setInvoicePdfData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [generatingPdfFor, setGeneratingPdfFor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [printingPdfFor, setPrintingPdfFor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [draftPdfBusy, setDraftPdfBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deletingId, setDeletingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showPrintTypeModal, setShowPrintTypeModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedPrintType, setSelectedPrintType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("a4");
    const selectedPrintTypeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("a4");
    const pendingPrintFnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [walkInDash, setWalkInDash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(EMPTY_WALK_IN_DASH);
    const [walkInDashLoading, setWalkInDashLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const refreshWalkInStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InvoicePage.useCallback[refreshWalkInStats]": async ()=>{
            setWalkInDashLoading(true);
            const { data: invRows, error: invErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("invoices").select("grand_total, amount_received, balance_due, invoice_date, client_name").eq("is_walk_in", true);
            if (invErr) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(invErr.message, "err");
                setWalkInDash(EMPTY_WALK_IN_DASH);
                setWalkInDashLoading(false);
                return;
            }
            const walk = invRows ?? [];
            const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["todayISO"])();
            const walkToday = walk.filter({
                "InvoicePage.useCallback[refreshWalkInStats].walkToday": (i)=>i.invoice_date === t
            }["InvoicePage.useCallback[refreshWalkInStats].walkToday"]);
            const n = {
                "InvoicePage.useCallback[refreshWalkInStats].n": (x)=>Number(x) || 0
            }["InvoicePage.useCallback[refreshWalkInStats].n"];
            setWalkInDash({
                todayInvoices: walkToday.length,
                todaySales: Math.round(walkToday.reduce({
                    "InvoicePage.useCallback[refreshWalkInStats]": (s, i)=>s + n(i.grand_total)
                }["InvoicePage.useCallback[refreshWalkInStats]"], 0) * 100) / 100,
                todayReceived: Math.round(walkToday.reduce({
                    "InvoicePage.useCallback[refreshWalkInStats]": (s, i)=>s + n(i.amount_received)
                }["InvoicePage.useCallback[refreshWalkInStats]"], 0) * 100) / 100,
                todayPending: Math.round(walkToday.reduce({
                    "InvoicePage.useCallback[refreshWalkInStats]": (s, i)=>s + n(i.balance_due)
                }["InvoicePage.useCallback[refreshWalkInStats]"], 0) * 100) / 100,
                totalInvoices: walk.length,
                totalSales: Math.round(walk.reduce({
                    "InvoicePage.useCallback[refreshWalkInStats]": (s, i)=>s + n(i.grand_total)
                }["InvoicePage.useCallback[refreshWalkInStats]"], 0) * 100) / 100,
                totalReceived: Math.round(walk.reduce({
                    "InvoicePage.useCallback[refreshWalkInStats]": (s, i)=>s + n(i.amount_received)
                }["InvoicePage.useCallback[refreshWalkInStats]"], 0) * 100) / 100,
                totalPending: Math.round(walk.reduce({
                    "InvoicePage.useCallback[refreshWalkInStats]": (s, i)=>s + n(i.balance_due)
                }["InvoicePage.useCallback[refreshWalkInStats]"], 0) * 100) / 100
            });
            setWalkInDashLoading(false);
        }
    }["InvoicePage.useCallback[refreshWalkInStats]"], []);
    const fetchSaved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InvoicePage.useCallback[fetchSaved]": async ()=>{
            const [{ data: invData }, { data: acctData }] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("invoices").select("id, invoice_number, client_name, invoice_date, grand_total, amount_received, previous_balance, balance_due, payment_status, payment_method, created_by_name, created_by_email").eq("is_walk_in", true).order("created_at", {
                    ascending: false
                }).limit(50),
                __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("accounts").select("id, name, head_accounts(name)").order("name")
            ]);
            if (invData) setSavedInvoices(invData);
            if (acctData) {
                setAllAccounts(acctData.map({
                    "InvoicePage.useCallback[fetchSaved]": (a)=>{
                        const headName = String(a.head_accounts?.name ?? "").trim().toLowerCase();
                        const category = headName.includes("government") ? "Government" : headName.includes("press") ? "Press" : headName.includes("shop") ? "Shop" : "Others";
                        return {
                            id: a.id,
                            name: a.name,
                            category
                        };
                    }
                }["InvoicePage.useCallback[fetchSaved]"]));
            }
        }
    }["InvoicePage.useCallback[fetchSaved]"], []);
    const accountNameSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "InvoicePage.useMemo[accountNameSet]": ()=>new Set(allAccounts.map({
                "InvoicePage.useMemo[accountNameSet]": (a)=>a.name
            }["InvoicePage.useMemo[accountNameSet]"]))
    }["InvoicePage.useMemo[accountNameSet]"], [
        allAccounts
    ]);
    const accountCategoryByName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "InvoicePage.useMemo[accountCategoryByName]": ()=>{
            const m = new Map();
            allAccounts.forEach({
                "InvoicePage.useMemo[accountCategoryByName]": (a)=>m.set(a.name, a.category)
            }["InvoicePage.useMemo[accountCategoryByName]"]);
            return m;
        }
    }["InvoicePage.useMemo[accountCategoryByName]"], [
        allAccounts
    ]);
    const walkInSavedInvoices = savedInvoices; // already filtered to is_walk_in=true at fetch time
    const filteredInvoices = walkInSavedInvoices;
    function openPayModal(inv) {
        setPayInvoice(inv);
        setPayAmount(String(Number(inv.balance_due)));
        setPayMethod((0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$paymentMethods$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizePaymentMethod"])(inv.payment_method));
        setPayDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["todayISO"])());
    }
    async function confirmPayBalance() {
        if (!payInvoice) return;
        const inv = payInvoice;
        const balanceDue = Number(inv.balance_due);
        const parsed = parseFloat(String(payAmount).replace(/,/g, "")) || 0;
        const amt = Math.round(Math.min(Math.max(0, parsed), balanceDue) * 100) / 100;
        if (balanceDue <= 0 || amt <= 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Enter a valid amount up to the balance due", "err");
            return;
        }
        if (!payMethod || !payMethod.trim()) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Please select a payment method", "err");
            return;
        }
        if (!paymentMethods.some((m)=>m.name === payMethod)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Select a valid payment method", "err");
            return;
        }
        setPaySaving(true);
        const newReceived = Math.round((Number(inv.amount_received) + amt) * 100) / 100;
        const newBalance = Math.round((Number(inv.grand_total) - newReceived) * 100) / 100;
        const status = newBalance <= 0 ? "paid" : newReceived > 0 ? "partial" : "unpaid";
        const { error: invErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("invoices").update({
            amount_received: newReceived,
            balance_due: newBalance,
            payment_status: status
        }).eq("id", inv.id);
        if (invErr) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(invErr.message, "err");
            setPaySaving(false);
            return;
        }
        // Walk-in invoices are always independent of party accounts, regardless of matching names
        const { error: cbErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("cashbook").insert({
            type: "in",
            description: `Walk-in ${inv.invoice_number} — ${inv.client_name}`,
            amount: amt,
            date: payDate.trim() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["todayISO"])(),
            account_name: "",
            method: payMethod,
            reference: inv.id
        });
        if (cbErr) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(cbErr.message, "err");
            setPaySaving(false);
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Payment recorded", "ok");
        setPayInvoice(null);
        setPaySaving(false);
        void fetchSaved();
        void refreshWalkInStats();
    }
    const refreshCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InvoicePage.useCallback[refreshCount]": async ()=>{
            const [{ data: qiData }, { data: invData }] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("quick_invoices").select("invoice_number").order("created_at", {
                    ascending: false
                }).limit(1),
                __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("invoices").select("invoice_number").order("created_at", {
                    ascending: false
                }).limit(1)
            ]);
            let maxNum = 0;
            [
                qiData?.[0],
                invData?.[0]
            ].forEach({
                "InvoicePage.useCallback[refreshCount]": (row)=>{
                    if (row?.invoice_number) {
                        const m = row.invoice_number.match(/(\d+)$/);
                        if (m) maxNum = Math.max(maxNum, parseInt(m[1], 10));
                    }
                }
            }["InvoicePage.useCallback[refreshCount]"]);
            setNextNum(maxNum + 1);
        }
    }["InvoicePage.useCallback[refreshCount]"], []);
    const fetchProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InvoicePage.useCallback[fetchProducts]": async ()=>{
            const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("products").select("id, code, name, sale_price, description, pricing_type");
            if (data) {
                const sorted = [
                    ...data
                ].sort({
                    "InvoicePage.useCallback[fetchProducts].sorted": (a, b)=>{
                        const an = parseInt(String(a.code ?? ""), 10);
                        const bn = parseInt(String(b.code ?? ""), 10);
                        if (Number.isNaN(an) && Number.isNaN(bn)) return String(a.code ?? "").localeCompare(String(b.code ?? ""));
                        if (Number.isNaN(an)) return 1;
                        if (Number.isNaN(bn)) return -1;
                        return an - bn;
                    }
                }["InvoicePage.useCallback[fetchProducts].sorted"]);
                setProducts(sorted);
                return sorted;
            }
            return [];
        }
    }["InvoicePage.useCallback[fetchProducts]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InvoicePage.useEffect": ()=>{
            refreshCount();
            fetchSaved();
            void refreshWalkInStats();
            void fetchProducts();
        }
    }["InvoicePage.useEffect"], [
        refreshCount,
        fetchSaved,
        refreshWalkInStats,
        fetchProducts
    ]);
    // ── Inline product-create modal state (triggered from product picker rows) ──
    const [productCreate, setProductCreate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Tracks products inserted via the inline modal during this draft. Deleted if the
    // user cancels the invoice; cleared (kept) if the invoice saves successfully.
    const pendingProductIdsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const handleProductCreated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InvoicePage.useCallback[handleProductCreated]": async (newProduct)=>{
            pendingProductIdsRef.current.push(newProduct.id);
            await fetchProducts();
            const idx = productCreate?.idx;
            setProductCreate(null);
            if (typeof idx !== "number") return;
            setDraft({
                "InvoicePage.useCallback[handleProductCreated]": (d)=>{
                    if (!d) return d;
                    const items = [
                        ...d.items
                    ];
                    const cur = items[idx];
                    if (!cur) return d;
                    const isStandalone = newProduct.pricing_type === "standalone";
                    let item = {
                        ...cur,
                        product: newProduct.name,
                        rate: Number(newProduct.sale_price) || 0,
                        pricingType: isStandalone ? "standalone" : "sqft"
                    };
                    if (isStandalone) item = {
                        ...item,
                        width: 0,
                        height: 0,
                        sqft: 0
                    };
                    if (!item.description.trim() && newProduct.description?.trim()) {
                        item = {
                            ...item,
                            description: newProduct.description.trim()
                        };
                    }
                    items[idx] = calcItem(item);
                    return {
                        ...d,
                        items
                    };
                }
            }["InvoicePage.useCallback[handleProductCreated]"]);
        }
    }["InvoicePage.useCallback[handleProductCreated]"], [
        fetchProducts,
        productCreate
    ]);
    /** Run cleanup after the browser print dialog closes (or fallback timeout). Keeps PDF data in DOM until then. */ const scheduleAfterPrint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InvoicePage.useCallback[scheduleAfterPrint]": (cleanup)=>{
            let ran = false;
            const run = {
                "InvoicePage.useCallback[scheduleAfterPrint].run": ()=>{
                    if (ran) return;
                    ran = true;
                    window.removeEventListener("afterprint", run);
                    cleanup();
                }
            }["InvoicePage.useCallback[scheduleAfterPrint].run"];
            window.addEventListener("afterprint", run);
            window.setTimeout(run, 3500);
        }
    }["InvoicePage.useCallback[scheduleAfterPrint]"], []);
    /** Prevent stuck loading states when browser/network hangs before print opens. */ async function withTimeout(promise, ms, message) {
        return await Promise.race([
            promise,
            new Promise((_, reject)=>{
                window.setTimeout(()=>reject(new Error(message)), ms);
            })
        ]);
    }
    function openModal() {
        setDraft({
            invoiceNumber: `SSP${String(nextNum).padStart(3, "0")}`,
            clientName: "",
            clientPhone: "",
            description: "",
            amountPaid: "",
            payMethod: "Cash",
            discountType: "pct",
            discountValue: "",
            items: [
                blankItem()
            ],
            addToExpense: false
        });
    }
    async function closeModal() {
        const pending = pendingProductIdsRef.current;
        if (pending.length > 0) {
            pendingProductIdsRef.current = [];
            await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("products").delete().in("id", pending);
            void fetchProducts();
        }
        setDraft(null);
    }
    async function reopenInvoice(inv) {
        const { data: full, error: invErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("invoices").select("id, invoice_number, client_name, client_phone, job_notes, amount_received, payment_method, discount_type, discount_value").eq("id", inv.id).single();
        if (invErr || !full) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(invErr?.message || "Could not load invoice", "err");
            return;
        }
        const { data: rows, error: itemErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("invoice_items").select("category, description, width, height, sqft, rate, qty, amount").eq("invoice_id", inv.id).order("id", {
            ascending: true
        });
        if (itemErr) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(itemErr.message, "err");
            return;
        }
        const mapped = (rows ?? []).map((r)=>{
            const productName = String(r.category ?? "");
            const dbProd = products.find((p)=>p.name === productName);
            const pricingType = dbProd?.pricing_type === "standalone" ? "standalone" : "sqft";
            return {
                lineType: "product",
                product: productName,
                laborType: "",
                description: String(r.description ?? ""),
                width: Number(r.width) || 0,
                height: Number(r.height) || 0,
                sqft: Number(r.sqft) || 0,
                rate: Number(r.rate) || 0,
                qty: Number(r.qty) || 1,
                total: Number(r.amount) || 0,
                pricingType
            };
        });
        setDraft({
            invoiceNumber: String(full.invoice_number ?? inv.invoice_number),
            clientName: String(full.client_name ?? inv.client_name),
            clientPhone: String(full.client_phone ?? ""),
            description: String(full.job_notes ?? ""),
            amountPaid: String(Number(full.amount_received) || 0),
            payMethod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$paymentMethods$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizePaymentMethod"])(String(full.payment_method ?? inv.payment_method ?? "Cash")),
            discountType: String(full.discount_type) === "flat" ? "flat" : "pct",
            discountValue: String(Number(full.discount_value) || 0),
            items: mapped.length ? mapped : [
                blankItem()
            ],
            editingInvoiceId: inv.id,
            // Expense flag is create-only; not shown when reopening an invoice.
            addToExpense: false
        });
    }
    async function handleSave() {
        if (!draft) return;
        const clientName = draft.clientName.trim() || "Walk-in Customer";
        if (draft.items.some((it)=>Number(it.qty) < 1)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Each item must have a quantity of at least 1", "err");
            return;
        }
        const { subtotal, discountAmount, grandTotal, amountReceived, balanceDue, paymentStatus } = computeWalkInPayment(draft);
        if (grandTotal <= 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Add at least one item with a value", "err");
            return;
        }
        if (amountReceived > 0) {
            if (!draft.payMethod || !draft.payMethod.trim()) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Please select a payment method", "err");
                return;
            }
            if (!paymentMethods.some((m)=>m.name === draft.payMethod)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Select a valid payment method", "err");
                return;
            }
        }
        setSaving(true);
        const today = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["todayISO"])();
        const inv = draft;
        // Walk-in invoices never carry a party's previous balance — they are independent of party accounts
        const previousBalance = 0;
        let finalInvoiceId = inv.editingInvoiceId ?? "";
        // For a create, this is overwritten with the server-confirmed number once
        // the invoices row is inserted (the server assigns it atomically — see
        // createInvoiceWithUniqueNumber in app/api/db/route.ts). Unchanged on edit.
        let finalInvoiceNumber = inv.invoiceNumber;
        if (inv.editingInvoiceId) {
            const { data: current } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("invoices").select("amount_received").eq("id", inv.editingInvoiceId).single();
            const keepReceived = Math.min(Math.max(0, Number(current?.amount_received) || 0), grandTotal);
            const keepBalance = Math.round((grandTotal - keepReceived) * 100) / 100;
            const keepStatus = keepBalance <= 0 ? "paid" : keepReceived > 0 ? "partial" : "unpaid";
            const { error: updErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("invoices").update({
                invoice_number: inv.invoiceNumber,
                client_name: clientName,
                client_phone: inv.clientPhone.trim(),
                subtotal,
                grand_total: grandTotal,
                previous_balance: previousBalance,
                amount_received: keepReceived,
                balance_due: keepBalance,
                payment_status: keepStatus,
                payment_method: inv.payMethod,
                discount_type: inv.discountType,
                discount_value: parseFloat(inv.discountValue) || 0,
                discount_amount: discountAmount,
                job_notes: inv.description.trim()
            }).eq("id", inv.editingInvoiceId);
            if (updErr) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(updErr.message, "err");
                setSaving(false);
                return;
            }
            await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("invoice_items").delete().eq("invoice_id", inv.editingInvoiceId);
            await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("invoice_items").insert(inv.items.map((it)=>({
                    invoice_id: inv.editingInvoiceId,
                    category: it.lineType === "labor" ? "Labor" : it.product,
                    description: it.lineType === "labor" ? it.laborType : it.description.trim(),
                    width: it.width,
                    height: it.height,
                    sqft: it.sqft,
                    rate: it.rate,
                    qty: it.qty,
                    amount: it.total
                })));
            const { data: qRows } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("quick_invoices").select("id").eq("invoice_number", inv.invoiceNumber).limit(1);
            const qid = qRows?.[0]?.id;
            if (qid) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("quick_invoices").update({
                    client_name: clientName,
                    grand_total: grandTotal
                }).eq("id", qid);
                await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("quick_invoice_items").delete().eq("quick_invoice_id", qid);
                await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("quick_invoice_items").insert(inv.items.map((it)=>({
                        quick_invoice_id: qid,
                        product: it.lineType === "labor" ? `Labor: ${it.laborType || "General"}` : it.product,
                        description: it.lineType === "labor" ? it.laborType : it.description.trim(),
                        width: it.width,
                        height: it.height,
                        total_size: it.sqft,
                        rate_per_sqft: it.rate,
                        total: it.total,
                        qty: it.qty,
                        grand_total: it.total
                    })));
            }
        } else {
            // Insert `invoices` FIRST — the server assigns invoice_number atomically
            // (with retry on collision), so this is the single source of truth for
            // the number. Whatever `inv.invoiceNumber` shows on screen is only a
            // preview; the confirmed number below is what actually gets saved.
            const { data: invData, error: invErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("invoices").insert({
                invoice_number: inv.invoiceNumber,
                client_name: clientName,
                client_phone: inv.clientPhone.trim(),
                invoice_date: today,
                subtotal,
                grand_total: grandTotal,
                previous_balance: previousBalance,
                amount_received: amountReceived,
                balance_due: balanceDue,
                payment_status: paymentStatus,
                payment_method: inv.payMethod,
                discount_type: inv.discountType,
                discount_value: parseFloat(inv.discountValue) || 0,
                discount_amount: discountAmount,
                gst_pct: 0,
                gst_amount: 0,
                stax_pct: 0,
                stax_amount: 0,
                job_notes: inv.description.trim(),
                is_walk_in: true
            }).select().single();
            if (invErr) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(invErr.message, "err");
                setSaving(false);
                return;
            }
            finalInvoiceId = invData.id;
            finalInvoiceNumber = invData.invoice_number;
            await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("invoice_items").insert(inv.items.map((it)=>({
                    invoice_id: invData.id,
                    category: it.lineType === "labor" ? "Labor" : it.product,
                    description: it.lineType === "labor" ? it.laborType : it.description.trim(),
                    width: it.width,
                    height: it.height,
                    sqft: it.sqft,
                    rate: it.rate,
                    qty: it.qty,
                    amount: it.total
                })));
            // Mirror into quick_invoices (legacy/parallel storage — no unique
            // constraint here) using the CONFIRMED number so both tables agree.
            const { data: qiRows } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("quick_invoices").insert({
                invoice_number: finalInvoiceNumber,
                client_name: clientName,
                grand_total: grandTotal
            }).select();
            const qiData = qiRows?.[0] ?? null;
            if (qiData) await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("quick_invoice_items").insert(inv.items.map((it)=>({
                    quick_invoice_id: qiData.id,
                    product: it.product,
                    description: it.description.trim(),
                    width: it.width,
                    height: it.height,
                    total_size: it.sqft,
                    rate_per_sqft: it.rate,
                    total: it.total,
                    qty: it.qty,
                    grand_total: it.total
                })));
        }
        if (!inv.editingInvoiceId && finalInvoiceId && amountReceived > 0) {
            const { error: cbErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("cashbook").insert({
                type: "in",
                description: `Walk-in ${finalInvoiceNumber} — ${clientName}`,
                amount: amountReceived,
                date: today,
                account_name: "",
                method: inv.payMethod,
                reference: finalInvoiceId
            });
            if (cbErr) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(cbErr.message, "err");
                setSaving(false);
                return;
            }
        }
        // If flagged, create a PENDING expense (amount 0, no cash entry yet) linked
        // to this invoice, then send the user to the Expense module to fill in the
        // amount/category — that's where the cash-out gets recorded.
        let goToExpense = false;
        if (!inv.editingInvoiceId && finalInvoiceId && inv.addToExpense) {
            const { error: expErr } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$expenses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createExpense"])({
                category: "",
                description: `${finalInvoiceNumber} · ${clientName}`,
                amount: 0,
                method: inv.payMethod,
                date: today,
                invoiceId: finalInvoiceId,
                invoiceNumber: finalInvoiceNumber
            });
            if (expErr) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(expErr, "err");
                setSaving(false);
                return;
            }
            goToExpense = true;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(inv.editingInvoiceId ? `Invoice ${finalInvoiceNumber} updated!` : `Invoice ${finalInvoiceNumber} saved!`, "ok");
        pendingProductIdsRef.current = [];
        setDraft(null);
        setSaving(false);
        refreshCount();
        fetchSaved();
        void refreshWalkInStats();
        if (goToExpense) router.push("/expense");
    }
    const STATUS = {
        paid: {
            bg: "var(--green-light)",
            color: "var(--green)"
        },
        partial: {
            bg: "var(--orange-light)",
            color: "#B45309"
        },
        unpaid: {
            bg: "var(--red-light)",
            color: "var(--red)"
        }
    };
    async function fetchInvoicePdfPayload(invId) {
        const { data: full, error: invErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("invoices").select("*").eq("id", invId).single();
        if (invErr || !full) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(invErr?.message || "Invoice not found", "err");
            return null;
        }
        const { data: rows, error: itemErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("invoice_items").select("category, description, width, height, sqft, rate, qty, amount").eq("invoice_id", invId).order("id", {
            ascending: true
        });
        if (itemErr) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(itemErr.message, "err");
            return null;
        }
        return {
            invoice: {
                invoice_number: full.invoice_number,
                client_name: full.client_name,
                client_phone: full.client_phone || "",
                invoice_date: full.invoice_date,
                payment_status: full.payment_status,
                subtotal: Number(full.subtotal ?? full.grand_total),
                grand_total: Number(full.grand_total),
                previous_balance: Number(full.previous_balance ?? 0),
                amount_received: Number(full.amount_received),
                balance_due: Number(full.balance_due),
                payment_method: full.payment_method || "Cash",
                description: String(full.job_notes ?? "").trim(),
                gst_pct: Number(full.gst_pct ?? 0),
                gst_amount: Number(full.gst_amount ?? 0),
                stax_pct: Number(full.stax_pct ?? 0),
                stax_amount: Number(full.stax_amount ?? 0),
                bra_pct: Number(full.bra_pct ?? 0),
                bra_amount: Number(full.bra_amount ?? 0)
            },
            items: (rows ?? []).map((it)=>({
                    category: String(it.category ?? ""),
                    description: String(it.description ?? ""),
                    width: Number(it.width),
                    height: Number(it.height),
                    sqft: Number(it.sqft),
                    rate: Number(it.rate),
                    qty: Number(it.qty),
                    amount: Number(it.amount)
                }))
        };
    }
    async function fetchInvoicePdfItems(invId) {
        const { data: rows, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("invoice_items").select("category, description, width, height, sqft, rate, qty, amount").eq("invoice_id", invId).order("id", {
            ascending: true
        });
        if (error) throw new Error(error.message);
        return (rows ?? []).map((it)=>({
                category: String(it.category ?? ""),
                description: String(it.description ?? ""),
                width: Number(it.width),
                height: Number(it.height),
                sqft: Number(it.sqft),
                rate: Number(it.rate),
                qty: Number(it.qty),
                amount: Number(it.amount)
            }));
    }
    function draftToPdfPayload(d) {
        const clientName = d.clientName.trim() || "Walk-in Customer";
        const { subtotal, grandTotal, amountReceived, balanceDue, paymentStatus } = computeWalkInPayment(d);
        return {
            invoice: {
                invoice_number: d.invoiceNumber,
                client_name: clientName,
                client_phone: d.clientPhone.trim(),
                invoice_date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["todayISO"])(),
                payment_status: paymentStatus,
                subtotal,
                grand_total: grandTotal,
                previous_balance: 0,
                amount_received: amountReceived,
                balance_due: balanceDue,
                payment_method: d.payMethod,
                description: d.description.trim(),
                gst_pct: 0,
                gst_amount: 0,
                stax_pct: 0,
                stax_amount: 0,
                bra_pct: 0,
                bra_amount: 0
            },
            items: d.items.map((it)=>({
                    category: it.lineType === "labor" ? `Labor: ${it.laborType || "General"}` : it.product,
                    description: it.lineType === "labor" ? "" : it.description.trim(),
                    width: it.width,
                    height: it.height,
                    sqft: it.sqft,
                    rate: it.rate,
                    qty: it.qty,
                    amount: it.total
                }))
        };
    }
    async function generateInvoicePdfBlob() {
        const node = invoicePdfRef.current;
        if (!node) throw new Error("Invoice PDF template not found");
        const prevDisplay = node.style.display;
        const prevPosition = node.style.position;
        const prevLeft = node.style.left;
        const prevTop = node.style.top;
        const prevWidth = node.style.width;
        const prevFlexDirection = node.style.flexDirection;
        const prevMinHeight = node.style.minHeight;
        // Match the print layout: flex column with A4 page-height min so the footer
        // sits at the bottom of the captured page even for short invoices.
        node.style.display = "flex";
        node.style.flexDirection = "column";
        node.style.minHeight = "273mm";
        node.style.position = "absolute";
        node.style.left = "-99999px";
        node.style.top = "0";
        node.style.width = "210mm";
        try {
            await new Promise((r)=>setTimeout(r, 100));
            const canvas = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$html2canvas$2f$dist$2f$html2canvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node, {
                scale: 2,
                useCORS: true,
                backgroundColor: "#ffffff",
                logging: false
            });
            const imgData = canvas.toDataURL("image/png");
            const pdf = new __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                orientation: "p",
                unit: "mm",
                format: "a4"
            });
            const pageWidth = pdf.internal.pageSize.getWidth();
            const pageHeight = pdf.internal.pageSize.getHeight();
            const imgProps = pdf.getImageProperties(imgData);
            const imgWidth = pageWidth;
            const imgHeight = imgProps.height * imgWidth / imgProps.width;
            const totalPages = Math.max(1, Math.ceil(imgHeight / pageHeight));
            for(let i = 0; i < totalPages; i++){
                if (i > 0) pdf.addPage();
                const y = -pageHeight * i;
                pdf.addImage(imgData, "PNG", 0, y, imgWidth, imgHeight);
            }
            return pdf.output("blob");
        } finally{
            node.style.display = prevDisplay;
            node.style.position = prevPosition;
            node.style.left = prevLeft;
            node.style.top = prevTop;
            node.style.width = prevWidth;
            node.style.flexDirection = prevFlexDirection;
            node.style.minHeight = prevMinHeight;
        }
    }
    async function downloadInvoicePdf(inv) {
        if (generatingPdfFor || printingPdfFor || draftPdfBusy) return;
        setGeneratingPdfFor(inv.id);
        try {
            const payload = await withTimeout(fetchInvoicePdfPayload(inv.id), 12000, "PDF request timed out. Please try again.");
            if (!payload) return;
            setInvoicePdfData(payload);
            await new Promise((r)=>setTimeout(r, 150));
            const blob = await generateInvoicePdfBlob();
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            const safe = (s)=>s.replace(/[/\\?%*:|"<>]/g, "-").trim();
            const invParty = safe(payload.invoice.client_name || "Customer");
            const invNum = safe(payload.invoice.invoice_number);
            const invDate = safe(payload.invoice.invoice_date?.slice(0, 10) ?? "");
            a.download = `${invParty} - ${invNum} - ${invDate}.pdf`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            URL.revokeObjectURL(url);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("PDF downloaded", "ok");
        } catch (e) {
            const msg = e instanceof Error ? e.message : "Failed to generate PDF";
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(msg, "err");
        } finally{
            setInvoicePdfData(null);
            setGeneratingPdfFor(null);
        }
    }
    /** Show the print-type picker, then execute the actual print when the user selects a format. */ function requestPrint(fn) {
        pendingPrintFnRef.current = fn;
        setShowPrintTypeModal(true);
    }
    async function confirmPrint(type) {
        selectedPrintTypeRef.current = type;
        setSelectedPrintType(type);
        setShowPrintTypeModal(false);
        if (pendingPrintFnRef.current) {
            await pendingPrintFnRef.current();
            pendingPrintFnRef.current = null;
        }
    }
    function applyPrintMode(type) {
        const a4El = document.querySelector(".a4-print-only");
        const thEl = document.querySelector(".thermal-print-only");
        if (type === "thermal") {
            if (a4El) a4El.style.setProperty("display", "none", "important");
            if (thEl) thEl.style.setProperty("display", "block", "important");
            const el = document.createElement("style");
            el.id = "__thermal_page_style";
            el.textContent = "@page { size: 80mm auto; margin: 2mm 3mm; }";
            document.head.appendChild(el);
            document.body.classList.add("thermal-mode");
        } else {
            if (thEl) thEl.style.setProperty("display", "none", "important");
            if (a4El) {
                // Flex column + A4 min-height pins the footer to the bottom of the page
                // even when the invoice has only a few line items.
                a4El.style.setProperty("display", "flex", "important");
                a4El.style.setProperty("flex-direction", "column", "important");
                a4El.style.setProperty("min-height", "273mm", "important");
            }
            const el = document.createElement("style");
            el.id = "__a4_page_style";
            el.textContent = "@page { size: A4 portrait; margin: 12mm 14mm; }";
            document.head.appendChild(el);
        }
    }
    function restorePrintMode() {
        document.getElementById("__thermal_page_style")?.remove();
        document.getElementById("__a4_page_style")?.remove();
        document.body.classList.remove("thermal-mode");
        const a4El = document.querySelector(".a4-print-only");
        const thEl = document.querySelector(".thermal-print-only");
        if (a4El) {
            a4El.style.removeProperty("display");
            a4El.style.removeProperty("flex-direction");
            a4El.style.removeProperty("min-height");
        }
        if (thEl) thEl.style.removeProperty("display");
    }
    async function printSavedInvoicePdf(inv) {
        if (generatingPdfFor || printingPdfFor || draftPdfBusy) return;
        setPrintingPdfFor(inv.id);
        try {
            let items = [];
            try {
                items = await withTimeout(fetchInvoicePdfItems(inv.id), 7000, "Item load timed out");
            } catch  {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Printing with summary only (items could not be loaded)", "info");
            }
            const payload = {
                invoice: {
                    invoice_number: inv.invoice_number,
                    client_name: inv.client_name,
                    client_phone: "",
                    invoice_date: inv.invoice_date,
                    payment_status: inv.payment_status,
                    subtotal: Number(inv.grand_total),
                    grand_total: Number(inv.grand_total),
                    previous_balance: Number(inv.previous_balance ?? 0),
                    amount_received: Number(inv.amount_received),
                    balance_due: Number(inv.balance_due),
                    payment_method: inv.payment_method || "Cash",
                    description: "",
                    gst_pct: 0,
                    gst_amount: 0,
                    stax_pct: 0,
                    stax_amount: 0,
                    bra_pct: 0,
                    bra_amount: 0
                },
                items
            };
            setInvoicePdfData(payload);
            await new Promise((r)=>setTimeout(r, 200));
            applyPrintMode(selectedPrintTypeRef.current);
            scheduleAfterPrint(()=>{
                restorePrintMode();
                setInvoicePdfData(null);
                setPrintingPdfFor(null);
            });
            window.print();
        } catch (e) {
            const msg = e instanceof Error ? e.message : "Failed to prepare print";
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(msg, "err");
            restorePrintMode();
            setInvoicePdfData(null);
            setPrintingPdfFor(null);
        }
    }
    async function deleteSavedInvoice(inv) {
        if (generatingPdfFor || printingPdfFor || draftPdfBusy || deletingId) return;
        const ok = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$ConfirmModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["confirmDialog"])({
            title: "Delete invoice?",
            message: `Delete invoice ${inv.invoice_number} (${inv.client_name})? This cannot be undone.`,
            details: `Linked invoice items, draft, and any cashbook entries tied to this invoice will also be deleted.`,
            tone: "danger"
        });
        if (!ok) return;
        setDeletingId(inv.id);
        try {
            const { error: invErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("invoices").delete().eq("id", inv.id);
            if (invErr) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(invErr.message, "err");
                return;
            }
            await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("quick_invoices").delete().eq("invoice_number", inv.invoice_number);
            // Remove any cashbook entries linked to this invoice so Cash in Hand stays accurate
            await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("cashbook").delete().eq("reference", inv.id);
            // Drop the linked expense record too (its cashbook "out" entry is removed above)
            await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("expenses").delete().eq("invoice_id", inv.id);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$activityLog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logActivity"])({
                action: "delete",
                entityType: "invoice",
                entityId: inv.id,
                title: "Invoice Deleted",
                subtitle: `${inv.invoice_number} — ${inv.client_name}`,
                amount: Number(inv.grand_total ?? 0) || null
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Invoice deleted", "ok");
            void fetchSaved();
            void refreshCount();
            void refreshWalkInStats();
        } finally{
            setDeletingId(null);
        }
    }
    async function sendSavedInvoiceWhatsApp(inv) {
        const { data: full, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("invoices").select("client_name, client_phone, invoice_number, invoice_date, grand_total, amount_received, balance_due, payment_status, job_notes").eq("id", inv.id).single();
        if (error || !full) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(error?.message || "Could not load invoice", "err");
            return;
        }
        const { data: itemRows, error: itemErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("invoice_items").select("category, description, width, height, sqft, rate, qty, amount").eq("invoice_id", inv.id).order("id", {
            ascending: true
        });
        if (itemErr) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(itemErr.message, "err");
            return;
        }
        const items = (itemRows ?? []).map((r)=>({
                category: String(r.category ?? ""),
                description: String(r.description ?? ""),
                width: Number(r.width),
                height: Number(r.height),
                sqft: Number(r.sqft),
                rate: Number(r.rate),
                qty: Number(r.qty),
                amount: Number(r.amount)
            }));
        const msg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$whatsappWaMe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildInvoiceShareWhatsAppMessage"])({
            invoiceNumber: String(full.invoice_number),
            clientName: String(full.client_name),
            invoiceDate: String(full.invoice_date),
            grandTotal: Number(full.grand_total),
            amountReceived: Number(full.amount_received),
            balanceDue: Number(full.balance_due),
            paymentStatus: String(full.payment_status),
            invoiceDescription: String(full.job_notes ?? "").trim() || undefined,
            items
        });
        const phone = String(full.client_phone ?? "").trim();
        if (phone) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$whatsappWaMe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openWhatsAppNewTab"])(phone, msg)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("WhatsApp opened for saved number", "ok");
                return;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Saved number isn’t valid for WhatsApp — choose a contact", "info");
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$whatsappWaMe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openWhatsAppMessageOnlyNewTab"])(msg);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("WhatsApp opened — pick a contact to send", "ok");
    }
    async function printDraftInvoice() {
        if (!draft || draftPdfBusy || generatingPdfFor || printingPdfFor) return;
        const grandTotal = draft.items.reduce((s, it)=>s + it.total, 0);
        if (grandTotal <= 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Add at least one line with an amount before printing", "err");
            return;
        }
        setDraftPdfBusy(true);
        try {
            setInvoicePdfData(draftToPdfPayload(draft));
            await new Promise((r)=>setTimeout(r, 200));
            applyPrintMode(selectedPrintTypeRef.current);
            scheduleAfterPrint(()=>{
                restorePrintMode();
                setInvoicePdfData(null);
                setDraftPdfBusy(false);
            });
            window.print();
        } catch  {
            restorePrintMode();
            setInvoicePdfData(null);
            setDraftPdfBusy(false);
        }
    }
    async function downloadDraftInvoice() {
        if (!draft || draftPdfBusy || generatingPdfFor || printingPdfFor) return;
        const grandTotal = draft.items.reduce((s, it)=>s + it.total, 0);
        if (grandTotal <= 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Add at least one line with an amount before download", "err");
            return;
        }
        setDraftPdfBusy(true);
        try {
            setInvoicePdfData(draftToPdfPayload(draft));
            await new Promise((r)=>setTimeout(r, 150));
            const blob = await generateInvoicePdfBlob();
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            const safe = (s)=>s.replace(/[/\\?%*:|"<>]/g, "-").trim();
            const draftParty = safe(draft.clientName.trim() || "Customer");
            const draftNum = safe(draft.invoiceNumber);
            const draftDate = safe((0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["todayISO"])());
            a.download = `${draftParty} - ${draftNum} - ${draftDate}.pdf`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            URL.revokeObjectURL(url);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("PDF downloaded", "ok");
        } catch (e) {
            const msg = e instanceof Error ? e.message : "Failed to generate PDF";
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(msg, "err");
        } finally{
            setInvoicePdfData(null);
            setDraftPdfBusy(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-fade-in",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-5 gap-3 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-xl font-extrabold",
                                        style: {
                                            color: "var(--gray-900)"
                                        },
                                        children: "Walk-in Invoice"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1196,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs mt-0.5",
                                        style: {
                                            color: "var(--gray-700)"
                                        },
                                        children: "Create a new walk-in invoice or review history below"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1197,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                lineNumber: 1195,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: openModal,
                                className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-[9px] border-none text-[12.5px] font-semibold cursor-pointer text-white",
                                style: {
                                    background: "linear-gradient(135deg, var(--blue-deeper), var(--blue))",
                                    boxShadow: "0 2px 10px rgba(204,17,17,.28)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1207,
                                        columnNumber: 11
                                    }, this),
                                    " New Invoice"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                lineNumber: 1201,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                        lineNumber: 1194,
                        columnNumber: 7
                    }, this),
                    userProfile?.isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-[14px] border border-[var(--gray-100)] overflow-hidden mb-5",
                        style: {
                            boxShadow: "var(--shadow-sm)",
                            background: "var(--gray-50)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-3 border-b border-[var(--gray-100)] bg-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[13px] font-extrabold m-0",
                                        style: {
                                            color: "var(--gray-900)"
                                        },
                                        children: "Walk-in customers (dashboard)"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1217,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] m-0 mt-0.5 leading-snug",
                                        style: {
                                            color: "var(--gray-600)"
                                        },
                                        children: [
                                            "Only invoices whose client name is ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "not"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1219,
                                                columnNumber: 48
                                            }, this),
                                            " an account in Accounts — same split as the tables below. Totals use all walk-in invoices in the database."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1218,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                lineNumber: 1216,
                                columnNumber: 9
                            }, this),
                            walkInDashLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-8 text-center text-[12px]",
                                style: {
                                    color: "var(--gray-600)"
                                },
                                children: "Loading walk-in totals…"
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                lineNumber: 1223,
                                columnNumber: 11
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 space-y-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[9px] font-bold tracking-[1.2px] uppercase mb-2",
                                            style: {
                                                color: "var(--blue-deeper)"
                                            },
                                            children: [
                                                "Today · ",
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["todayISO"])())
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                            lineNumber: 1227,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 sm:grid-cols-4 gap-2",
                                            children: [
                                                {
                                                    label: "Invoices",
                                                    val: String(walkInDash.todayInvoices),
                                                    color: "var(--gray-900)"
                                                },
                                                {
                                                    label: "Sales (billed)",
                                                    val: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(walkInDash.todaySales),
                                                    color: "var(--gray-900)"
                                                },
                                                {
                                                    label: "Received",
                                                    val: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(walkInDash.todayReceived),
                                                    color: "var(--green)"
                                                },
                                                {
                                                    label: "Pending",
                                                    val: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(walkInDash.todayPending),
                                                    color: "var(--red)"
                                                }
                                            ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-[10px] border border-[var(--gray-100)] bg-white px-3 py-2.5",
                                                    style: {
                                                        boxShadow: "var(--shadow-xs)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[9px] font-bold tracking-wider uppercase mb-0.5",
                                                            style: {
                                                                color: "var(--gray-600)"
                                                            },
                                                            children: c.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                            lineNumber: 1242,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[14px] font-extrabold font-mono leading-tight",
                                                            style: {
                                                                color: c.color
                                                            },
                                                            children: c.val
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                            lineNumber: 1243,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, c.label, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                    lineNumber: 1237,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                            lineNumber: 1230,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                    lineNumber: 1226,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                lineNumber: 1225,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                        lineNumber: 1212,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5 mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                size: 14,
                                style: {
                                    color: "var(--gray-700)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                lineNumber: 1254,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-bold tracking-[2px] uppercase",
                                style: {
                                    color: "var(--gray-700)"
                                },
                                children: "Previous Invoices"
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                lineNumber: 1255,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 h-px",
                                style: {
                                    background: "var(--gray-200)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                lineNumber: 1258,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] font-semibold",
                                style: {
                                    color: "var(--gray-700)"
                                },
                                children: [
                                    savedInvoices.length,
                                    " records"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                lineNumber: 1259,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                        lineNumber: 1253,
                        columnNumber: 7
                    }, this),
                    savedInvoices.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-[14px] border border-[var(--gray-100)] overflow-hidden py-14 text-center",
                        style: {
                            boxShadow: "var(--shadow-sm)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[13px] m-0 px-4",
                            style: {
                                color: "var(--gray-700)"
                            },
                            children: [
                                "No invoices yet — use ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "New Invoice"
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                    lineNumber: 1265,
                                    columnNumber: 35
                                }, this),
                                " to add one"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                            lineNumber: 1264,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                        lineNumber: 1263,
                        columnNumber: 9
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-[14px] border border-[var(--gray-100)] overflow-hidden",
                            style: {
                                boxShadow: "var(--shadow-sm)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-4 py-3 border-b border-[var(--gray-100)] bg-[var(--gray-50)] flex items-end justify-between gap-3 flex-wrap",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-[14px] font-extrabold m-0",
                                                style: {
                                                    color: "var(--gray-900)"
                                                },
                                                children: "Invoice history"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1273,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] m-0 mt-0.5",
                                                style: {
                                                    color: "var(--gray-600)"
                                                },
                                                children: "Walk-in customers only. Party invoices are managed in the Accounts section."
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1274,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1272,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                    lineNumber: 1271,
                                    columnNumber: 13
                                }, this),
                                filteredInvoices.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[13px] text-center py-8 m-0 px-4",
                                    style: {
                                        color: "var(--gray-600)"
                                    },
                                    children: "No walk-in invoices yet."
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                    lineNumber: 1280,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-x-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].table} min-w-[640px]`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        "Invoice",
                                                        "Customer",
                                                        "Created By",
                                                        "Total",
                                                        "Received",
                                                        "Due",
                                                        "Status",
                                                        "Actions"
                                                    ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].th} ${h === "Actions" ? "text-center min-w-[220px]" : h === "Received" || h === "Due" || h === "Total" ? "text-right" : "text-left"}`,
                                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].thStyle,
                                                            children: h
                                                        }, h, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                            lineNumber: 1287,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                    lineNumber: 1285,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1284,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: filteredInvoices.map((inv)=>{
                                                    const s = STATUS[inv.payment_status] ?? STATUS.unpaid;
                                                    const due = Number(inv.balance_due);
                                                    const busy = generatingPdfFor !== null || printingPdfFor !== null || draftPdfBusy || deletingId !== null || paySaving;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].row,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-mono text-[11px] font-bold px-1.5 py-0.5 rounded",
                                                                        style: {
                                                                            background: "var(--blue-light)",
                                                                            color: "var(--blue-deeper)"
                                                                        },
                                                                        children: inv.invoice_number
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                                        lineNumber: 1310,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[10px] mt-1",
                                                                        style: {
                                                                            color: "var(--gray-600)"
                                                                        },
                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(inv.invoice_date)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                                        lineNumber: 1316,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                                lineNumber: 1309,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td} ${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].cellPrimary}`,
                                                                style: {
                                                                    color: "var(--gray-900)"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: inv.client_name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                                    lineNumber: 1321,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                                lineNumber: 1320,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td,
                                                                style: {
                                                                    color: "var(--gray-800)"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[12px] font-semibold",
                                                                        children: inv.created_by_name || "—"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                                        lineNumber: 1324,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    inv.created_by_email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[10px]",
                                                                        style: {
                                                                            color: "var(--gray-600)"
                                                                        },
                                                                        children: inv.created_by_email
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                                        lineNumber: 1326,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                                lineNumber: 1323,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td} font-mono font-bold text-[14px] text-right`,
                                                                style: {
                                                                    color: "var(--blue-deeper)"
                                                                },
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(Number(inv.grand_total))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                                lineNumber: 1329,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td} font-mono text-[13px] text-right font-semibold`,
                                                                style: {
                                                                    color: "var(--green)"
                                                                },
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(Number(inv.amount_received))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                                lineNumber: 1332,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td} font-mono text-[13px] text-right font-bold`,
                                                                style: {
                                                                    color: due > 0 ? "var(--red)" : "var(--green)"
                                                                },
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(due)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                                lineNumber: 1335,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].badge} capitalize`,
                                                                    style: {
                                                                        background: s.bg,
                                                                        color: s.color
                                                                    },
                                                                    children: inv.payment_status
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                                    lineNumber: 1342,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                                lineNumber: 1341,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td} text-center px-1 py-2`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "inline-flex items-center justify-center gap-0.5 flex-wrap",
                                                                    children: [
                                                                        due > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>openPayModal(inv),
                                                                            disabled: busy,
                                                                            title: "Pay remaining balance — updates invoice, cashbook, and party account when linked",
                                                                            className: "inline-flex items-center justify-center gap-0.5 px-1.5 h-8 rounded-[8px] border-none cursor-pointer text-[10px] font-bold disabled:opacity-45 disabled:cursor-not-allowed",
                                                                            style: {
                                                                                background: "var(--green-light)",
                                                                                color: "var(--green)"
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                                                                    size: 12
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                                                    lineNumber: 1357,
                                                                                    columnNumber: 37
                                                                                }, this),
                                                                                " Pay"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                                            lineNumber: 1349,
                                                                            columnNumber: 35
                                                                        }, this) : null,
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>void sendSavedInvoiceWhatsApp(inv),
                                                                            disabled: busy,
                                                                            title: "WhatsApp — to saved number if set, else you pick the contact",
                                                                            className: "inline-flex items-center justify-center w-8 h-8 rounded-[8px] border-[1.5px] cursor-pointer transition-all hover:bg-[var(--gray-50)] disabled:opacity-45 disabled:cursor-not-allowed",
                                                                            style: {
                                                                                borderColor: "var(--gray-200)",
                                                                                color: "#128C7E"
                                                                            },
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhatsAppGlyph, {
                                                                                size: 15
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                                                lineNumber: 1368,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                                            lineNumber: 1360,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>void reopenInvoice(inv),
                                                                            disabled: busy,
                                                                            title: "Reopen and edit invoice",
                                                                            className: "inline-flex items-center justify-center w-8 h-8 rounded-[8px] border-[1.5px] cursor-pointer transition-all hover:bg-[var(--gray-50)] disabled:opacity-45 disabled:cursor-not-allowed",
                                                                            style: {
                                                                                borderColor: "var(--gray-200)",
                                                                                color: "var(--blue-deeper)"
                                                                            },
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                                size: 14
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                                                lineNumber: 1378,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                                            lineNumber: 1370,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>requestPrint(()=>printSavedInvoicePdf(inv)),
                                                                            disabled: busy,
                                                                            title: "Print invoice",
                                                                            className: "inline-flex items-center justify-center w-8 h-8 rounded-[8px] border-[1.5px] cursor-pointer transition-all hover:bg-[var(--gray-50)] disabled:opacity-45 disabled:cursor-not-allowed",
                                                                            style: {
                                                                                borderColor: "var(--gray-200)",
                                                                                color: "var(--blue-deeper)"
                                                                            },
                                                                            children: printingPdfFor === inv.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                                size: 14,
                                                                                className: "animate-spin"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                                                lineNumber: 1388,
                                                                                columnNumber: 64
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                                                                size: 14
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                                                lineNumber: 1388,
                                                                                columnNumber: 113
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                                            lineNumber: 1380,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>void downloadInvoicePdf(inv),
                                                                            disabled: busy,
                                                                            title: "Download invoice PDF",
                                                                            className: "inline-flex items-center justify-center w-8 h-8 rounded-[8px] border-[1.5px] cursor-pointer transition-all hover:bg-[var(--gray-50)] disabled:opacity-45 disabled:cursor-not-allowed",
                                                                            style: {
                                                                                borderColor: "var(--gray-200)",
                                                                                color: "var(--blue-deeper)"
                                                                            },
                                                                            children: generatingPdfFor === inv.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                                size: 14,
                                                                                className: "animate-spin"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                                                lineNumber: 1398,
                                                                                columnNumber: 66
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                                size: 14
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                                                lineNumber: 1398,
                                                                                columnNumber: 115
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                                            lineNumber: 1390,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        userProfile?.isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>void deleteSavedInvoice(inv),
                                                                            disabled: busy,
                                                                            title: "Delete invoice",
                                                                            className: "inline-flex items-center justify-center w-8 h-8 rounded-[8px] border-[1.5px] cursor-pointer transition-all hover:bg-[var(--red-light)] disabled:opacity-45 disabled:cursor-not-allowed",
                                                                            style: {
                                                                                borderColor: "var(--gray-200)",
                                                                                color: "var(--red)"
                                                                            },
                                                                            children: deletingId === inv.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                                size: 14,
                                                                                className: "animate-spin"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                                                lineNumber: 1409,
                                                                                columnNumber: 62
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                size: 14
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                                                lineNumber: 1409,
                                                                                columnNumber: 111
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                                            lineNumber: 1401,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                                    lineNumber: 1347,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                                lineNumber: 1346,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, inv.id, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                        lineNumber: 1308,
                                                        columnNumber: 27
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1297,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1283,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                    lineNumber: 1282,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                            lineNumber: 1270,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                        lineNumber: 1269,
                        columnNumber: 9
                    }, this),
                    payInvoice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-[850] flex items-center justify-center p-4",
                        style: {
                            background: "rgba(10,30,50,.45)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "aria-label": "Close",
                                className: "absolute inset-0 cursor-default border-none",
                                style: {
                                    background: "transparent"
                                },
                                onClick: ()=>{
                                    if (!paySaving) setPayInvoice(null);
                                }
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                lineNumber: 1427,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 w-full max-w-[400px] rounded-[14px] border border-[var(--gray-100)] bg-white overflow-hidden",
                                style: {
                                    boxShadow: "var(--shadow-lg)"
                                },
                                onClick: (e)=>e.stopPropagation(),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between gap-2 px-4 py-3 border-b border-[var(--gray-100)]",
                                        style: {
                                            background: "var(--gray-50)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-[14px] font-extrabold m-0",
                                                        style: {
                                                            color: "var(--gray-900)"
                                                        },
                                                        children: "Pay balance"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                        lineNumber: 1441,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] m-0 mt-0.5 font-mono font-bold",
                                                        style: {
                                                            color: "var(--blue-deeper)"
                                                        },
                                                        children: payInvoice.invoice_number
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                        lineNumber: 1442,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] m-0 mt-0.5",
                                                        style: {
                                                            color: "var(--gray-600)"
                                                        },
                                                        children: payInvoice.client_name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                        lineNumber: 1443,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1440,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                disabled: paySaving,
                                                onClick: ()=>setPayInvoice(null),
                                                className: "shrink-0 w-8 h-8 rounded-[8px] border-none cursor-pointer flex items-center justify-center",
                                                style: {
                                                    background: "var(--gray-100)",
                                                    color: "var(--gray-700)"
                                                },
                                                "aria-label": "Close",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                    lineNumber: 1453,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1445,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1439,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-3 space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[12px] m-0",
                                                style: {
                                                    color: "var(--gray-700)"
                                                },
                                                children: [
                                                    "Balance due:",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono font-extrabold",
                                                        style: {
                                                            color: "var(--red)"
                                                        },
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(payInvoice.balance_due)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                        lineNumber: 1459,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1457,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-[9.5px] font-bold tracking-wider uppercase mb-1",
                                                        style: {
                                                            color: "var(--gray-700)"
                                                        },
                                                        children: "Amount"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                        lineNumber: 1462,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        min: 0,
                                                        step: 1,
                                                        value: payAmount,
                                                        onChange: (e)=>setPayAmount(e.target.value),
                                                        onWheel: (e)=>e.currentTarget.blur(),
                                                        className: "w-full border-[1.5px] rounded-[8px] px-2.5 py-2 text-[13px] font-mono font-bold outline-none",
                                                        style: {
                                                            borderColor: "var(--gray-200)",
                                                            color: "var(--gray-900)"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                        lineNumber: 1463,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1461,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-[9.5px] font-bold tracking-wider uppercase mb-1",
                                                        style: {
                                                            color: "var(--gray-700)"
                                                        },
                                                        children: "Date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                        lineNumber: 1475,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        value: payDate,
                                                        onChange: (e)=>setPayDate(e.target.value),
                                                        className: "w-full border-[1.5px] rounded-[8px] px-2.5 py-2 text-[12.5px] outline-none",
                                                        style: {
                                                            borderColor: "var(--gray-200)",
                                                            color: "var(--gray-900)"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                        lineNumber: 1476,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1474,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-[9.5px] font-bold tracking-wider uppercase mb-1",
                                                        style: {
                                                            color: "var(--gray-700)"
                                                        },
                                                        children: "Method"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                        lineNumber: 1485,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap border-[1.5px] rounded-[8px] overflow-hidden",
                                                        style: {
                                                            borderColor: "var(--gray-200)"
                                                        },
                                                        children: paymentMethods.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setPayMethod(m.name),
                                                                className: "flex-1 min-w-[80px] py-2 text-[11px] font-semibold border-none cursor-pointer",
                                                                style: {
                                                                    background: payMethod === m.name ? "var(--blue-deeper)" : "var(--gray-50)",
                                                                    color: payMethod === m.name ? "#fff" : "var(--gray-500)"
                                                                },
                                                                children: m.name
                                                            }, m.id, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                                lineNumber: 1488,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                        lineNumber: 1486,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1484,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] m-0",
                                                style: {
                                                    color: "var(--gray-600)"
                                                },
                                                children: "Cashbook only — walk-in payments do not affect party account balances."
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1503,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1456,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-end gap-2 px-4 py-3 border-t border-[var(--gray-100)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                disabled: paySaving,
                                                onClick: ()=>setPayInvoice(null),
                                                className: "px-3 py-2 rounded-[8px] text-[12px] font-semibold border-[1.5px] bg-white cursor-pointer",
                                                style: {
                                                    borderColor: "var(--gray-200)",
                                                    color: "var(--gray-800)"
                                                },
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1508,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                disabled: paySaving,
                                                onClick: ()=>void confirmPayBalance(),
                                                className: "px-3 py-2 rounded-[8px] text-[12px] font-semibold border-none text-white cursor-pointer disabled:opacity-50",
                                                style: {
                                                    background: "linear-gradient(135deg, var(--blue-deeper), var(--blue))"
                                                },
                                                children: paySaving ? "Saving…" : "Save payment"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1517,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1507,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                lineNumber: 1434,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                        lineNumber: 1426,
                        columnNumber: 9
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                lineNumber: 1193,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: invoicePdfRef,
                className: "a4-print-only",
                style: {
                    background: "#fff",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    color: "#111",
                    fontSize: 11,
                    paddingBottom: 12
                },
                children: invoicePdfData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$PrintHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrintHeader"], {}, void 0, false, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                            lineNumber: 1536,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: 16,
                                padding: "5px 12px",
                                background: "#7f1d1d",
                                color: "#fff",
                                marginBottom: 10
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 13,
                                        fontWeight: 900,
                                        letterSpacing: 1.5,
                                        textTransform: "uppercase"
                                    },
                                    children: "Invoice"
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                    lineNumber: 1540,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: "rgba(255,255,255,0.4)",
                                        fontSize: 13
                                    },
                                    children: "|"
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                    lineNumber: 1541,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: "monospace",
                                        fontWeight: 800,
                                        fontSize: 13
                                    },
                                    children: invoicePdfData.invoice.invoice_number
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                    lineNumber: 1542,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                            lineNumber: 1539,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "grid",
                                gridTemplateColumns: "1fr auto",
                                gap: 12,
                                padding: "0 12px",
                                marginBottom: 12
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 8,
                                                color: "#111",
                                                textTransform: "uppercase",
                                                letterSpacing: 1,
                                                marginBottom: 2
                                            },
                                            children: "Bill To"
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                            lineNumber: 1548,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontWeight: 900,
                                                color: "#111",
                                                fontSize: 16,
                                                lineHeight: 1.2
                                            },
                                            children: invoicePdfData.invoice.client_name
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                            lineNumber: 1549,
                                            columnNumber: 17
                                        }, this),
                                        invoicePdfData.invoice.client_phone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 11,
                                                color: "#111",
                                                marginTop: 3
                                            },
                                            children: invoicePdfData.invoice.client_phone
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                            lineNumber: 1551,
                                            columnNumber: 19
                                        }, this) : null,
                                        invoicePdfData.invoice.description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 10,
                                                color: "#111",
                                                marginTop: 6,
                                                lineHeight: 1.5
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontWeight: 700
                                                    },
                                                    children: "Desc: "
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                    lineNumber: 1555,
                                                    columnNumber: 21
                                                }, this),
                                                invoicePdfData.invoice.description
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                            lineNumber: 1554,
                                            columnNumber: 19
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                    lineNumber: 1547,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: "right",
                                        minWidth: 160
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginBottom: 5,
                                                display: "flex",
                                                alignItems: "baseline",
                                                justifyContent: "flex-end",
                                                gap: 6
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 8,
                                                        color: "#111",
                                                        textTransform: "uppercase",
                                                        letterSpacing: 1,
                                                        whiteSpace: "nowrap"
                                                    },
                                                    children: "Date:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                    lineNumber: 1561,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontWeight: 700,
                                                        fontSize: 12
                                                    },
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(invoicePdfData.invoice.invoice_date)
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                    lineNumber: 1562,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                            lineNumber: 1560,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: 4,
                                                textAlign: "right"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontWeight: 700,
                                                    fontSize: 10,
                                                    color: "#111"
                                                },
                                                children: "Star Sign Panaflex & 3D Sign"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1565,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                            lineNumber: 1564,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                    lineNumber: 1559,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                            lineNumber: 1546,
                            columnNumber: 13
                        }, this),
                        (()=>{
                            const gridCols = "5% 33% 6% 7% 7% 13% 13% 16%";
                            const cellPad = "6px 8px";
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: "0 12px",
                                    marginBottom: 12,
                                    flex: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                    minHeight: 0,
                                    fontSize: 13
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "grid",
                                            gridTemplateColumns: gridCols,
                                            background: "#7f1d1d",
                                            color: "#fff"
                                        },
                                        children: [
                                            {
                                                label: "SN",
                                                align: "center"
                                            },
                                            {
                                                label: "Description",
                                                align: "left"
                                            },
                                            {
                                                label: "Qty",
                                                align: "center"
                                            },
                                            {
                                                label: "W (ft)",
                                                align: "center"
                                            },
                                            {
                                                label: "H (ft)",
                                                align: "center"
                                            },
                                            {
                                                label: "Total Sq.ft",
                                                align: "center"
                                            },
                                            {
                                                label: "Rate",
                                                align: "right"
                                            },
                                            {
                                                label: "Amount",
                                                align: "right"
                                            }
                                        ].map((h, i, arr)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    padding: "6px 8px",
                                                    fontSize: 11,
                                                    fontWeight: 700,
                                                    textAlign: h.align,
                                                    textTransform: "uppercase",
                                                    letterSpacing: 0.7,
                                                    borderLeft: "1px solid #000",
                                                    ...i === arr.length - 1 ? {
                                                        borderRight: "1px solid #000"
                                                    } : {}
                                                },
                                                children: h.label
                                            }, h.label, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1588,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1577,
                                        columnNumber: 19
                                    }, this),
                                    invoicePdfData.items.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: 16,
                                            textAlign: "center",
                                            color: "#111",
                                            border: "1px solid #000"
                                        },
                                        children: "No line items"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1595,
                                        columnNumber: 21
                                    }, this) : invoicePdfData.items.map((it, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "grid",
                                                gridTemplateColumns: gridCols,
                                                background: idx % 2 === 0 ? "#fff" : "#f8fafc",
                                                borderBottom: "1px solid #000"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: cellPad,
                                                        textAlign: "center",
                                                        color: "#111",
                                                        borderLeft: "1px solid #000"
                                                    },
                                                    children: idx + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                    lineNumber: 1598,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: cellPad,
                                                        fontWeight: 600,
                                                        color: "#111",
                                                        borderLeft: "1px solid #000"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: it.category || "—"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                            lineNumber: 1600,
                                                            columnNumber: 25
                                                        }, this),
                                                        it.description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontWeight: 400,
                                                                fontSize: 11,
                                                                color: "#444",
                                                                marginTop: 2,
                                                                whiteSpace: "pre-wrap"
                                                            },
                                                            children: it.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                            lineNumber: 1602,
                                                            columnNumber: 27
                                                        }, this) : null
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                    lineNumber: 1599,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: cellPad,
                                                        textAlign: "center",
                                                        fontFamily: "monospace",
                                                        fontWeight: 700,
                                                        borderLeft: "1px solid #000"
                                                    },
                                                    children: it.qty
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                    lineNumber: 1605,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: cellPad,
                                                        textAlign: "center",
                                                        fontFamily: "monospace",
                                                        borderLeft: "1px solid #000"
                                                    },
                                                    children: it.width || "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                    lineNumber: 1606,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: cellPad,
                                                        textAlign: "center",
                                                        fontFamily: "monospace",
                                                        borderLeft: "1px solid #000"
                                                    },
                                                    children: it.height || "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                    lineNumber: 1607,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: cellPad,
                                                        textAlign: "center",
                                                        fontFamily: "monospace",
                                                        fontWeight: 600,
                                                        borderLeft: "1px solid #000"
                                                    },
                                                    children: it.sqft && it.qty ? Math.round(it.sqft * it.qty * 100) / 100 : it.sqft || "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                    lineNumber: 1608,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: cellPad,
                                                        textAlign: "right",
                                                        fontFamily: "monospace",
                                                        borderLeft: "1px solid #000"
                                                    },
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(it.rate)
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                    lineNumber: 1609,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: cellPad,
                                                        textAlign: "right",
                                                        fontFamily: "monospace",
                                                        fontWeight: 800,
                                                        color: "#111",
                                                        borderLeft: "1px solid #000",
                                                        borderRight: "1px solid #000"
                                                    },
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(it.amount)
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                    lineNumber: 1610,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                            lineNumber: 1597,
                                            columnNumber: 21
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1,
                                            display: "grid",
                                            gridTemplateColumns: gridCols,
                                            borderBottom: "1px solid #000"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    borderLeft: "1px solid #000"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1615,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    borderLeft: "1px solid #000"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1616,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    borderLeft: "1px solid #000"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1617,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    borderLeft: "1px solid #000"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1618,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    borderLeft: "1px solid #000"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1619,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    borderLeft: "1px solid #000"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1620,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    borderLeft: "1px solid #000"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1621,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    borderLeft: "1px solid #000",
                                                    borderRight: "1px solid #000"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1622,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1614,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                lineNumber: 1575,
                                columnNumber: 17
                            }, this);
                        })(),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                justifyContent: "flex-end",
                                padding: "0 12px",
                                marginBottom: 16
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 230
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            padding: "3px 10px",
                                            borderTop: "1px solid #e5e7eb"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 10,
                                                    fontWeight: 600,
                                                    color: "#111"
                                                },
                                                children: "Previous Balance"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1632,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "monospace",
                                                    fontWeight: 700,
                                                    color: "#111"
                                                },
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(invoicePdfData.invoice.previous_balance)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1633,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1631,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            padding: "3px 10px",
                                            borderTop: "2px solid #111"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 10,
                                                    fontWeight: 700,
                                                    textTransform: "uppercase",
                                                    letterSpacing: 0.5
                                                },
                                                children: "New Bill"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1636,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "monospace",
                                                    fontWeight: 900,
                                                    fontSize: 14,
                                                    color: "#111"
                                                },
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(invoicePdfData.invoice.grand_total)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1637,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1635,
                                        columnNumber: 17
                                    }, this),
                                    invoicePdfData.invoice.gst_amount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            padding: "3px 10px",
                                            borderTop: "1px solid #e5e7eb"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 10,
                                                    fontWeight: 600,
                                                    color: "#111"
                                                },
                                                children: [
                                                    "GST (",
                                                    invoicePdfData.invoice.gst_pct,
                                                    "%)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1641,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "monospace",
                                                    fontWeight: 700,
                                                    color: "#111"
                                                },
                                                children: [
                                                    "+ ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(invoicePdfData.invoice.gst_amount)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1642,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1640,
                                        columnNumber: 19
                                    }, this),
                                    invoicePdfData.invoice.stax_amount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            padding: "3px 10px",
                                            borderTop: "1px solid #e5e7eb"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 10,
                                                    fontWeight: 600,
                                                    color: "#111"
                                                },
                                                children: [
                                                    "Sales Tax (",
                                                    invoicePdfData.invoice.stax_pct,
                                                    "%)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1647,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "monospace",
                                                    fontWeight: 700,
                                                    color: "#111"
                                                },
                                                children: [
                                                    "+ ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(invoicePdfData.invoice.stax_amount)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1648,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1646,
                                        columnNumber: 19
                                    }, this),
                                    invoicePdfData.invoice.bra_amount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            padding: "3px 10px",
                                            borderTop: "1px solid #e5e7eb"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 10,
                                                    fontWeight: 600,
                                                    color: "#111"
                                                },
                                                children: [
                                                    "BRA (",
                                                    invoicePdfData.invoice.bra_pct,
                                                    "%)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1653,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "monospace",
                                                    fontWeight: 700,
                                                    color: "#111"
                                                },
                                                children: [
                                                    "+ ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(invoicePdfData.invoice.bra_amount)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1654,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1652,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            padding: "3px 10px",
                                            borderTop: "1px solid #e5e7eb"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 10,
                                                    fontWeight: 600,
                                                    color: "#111"
                                                },
                                                children: "Received"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1658,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "monospace",
                                                    fontWeight: 700,
                                                    color: "#111"
                                                },
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(invoicePdfData.invoice.amount_received)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1659,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1657,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            padding: "3px 10px",
                                            borderTop: "2px solid #111"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 10,
                                                    fontWeight: 700,
                                                    textTransform: "uppercase",
                                                    letterSpacing: 0.5
                                                },
                                                children: "Total Balance"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1662,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "monospace",
                                                    fontWeight: 900,
                                                    fontSize: 14,
                                                    color: "#111"
                                                },
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(invoicePdfData.invoice.grand_total + invoicePdfData.invoice.previous_balance - invoicePdfData.invoice.amount_received)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1663,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1661,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                lineNumber: 1630,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                            lineNumber: 1629,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$PrintFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrintFooter"], {}, void 0, false, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                            lineNumber: 1668,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true) : null
            }, void 0, false, {
                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                lineNumber: 1533,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "thermal-print-only",
                style: {
                    background: "#fff",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    color: "#000",
                    fontSize: 11,
                    width: "72mm",
                    margin: "0 auto"
                },
                children: invoicePdfData ? (()=>{
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$ThermalHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThermalHeader"], {}, void 0, false, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                lineNumber: 1678,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: "5px 4px",
                                    borderBottom: "1px dashed #000"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            fontSize: 10
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontWeight: 700
                                                },
                                                children: "Invoice #:"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1683,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "monospace",
                                                    fontWeight: 800
                                                },
                                                children: invoicePdfData.invoice.invoice_number
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1684,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1682,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            fontSize: 10,
                                            marginTop: 2
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontWeight: 700
                                                },
                                                children: "Date:"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1687,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(invoicePdfData.invoice.invoice_date)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1688,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1686,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            fontSize: 10,
                                            marginTop: 2
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontWeight: 700
                                                },
                                                children: "Payment:"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1691,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: invoicePdfData.invoice.payment_method
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1692,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1690,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                lineNumber: 1681,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: "5px 4px",
                                    borderBottom: "1px dashed #000"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 8,
                                            textTransform: "uppercase",
                                            letterSpacing: 0.8
                                        },
                                        children: "Customer"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1698,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontWeight: 900,
                                            fontSize: 13
                                        },
                                        children: invoicePdfData.invoice.client_name
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1699,
                                        columnNumber: 17
                                    }, this),
                                    invoicePdfData.invoice.client_phone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 10,
                                            marginTop: 2
                                        },
                                        children: invoicePdfData.invoice.client_phone
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1701,
                                        columnNumber: 19
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                lineNumber: 1697,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: "5px 4px",
                                    borderBottom: "1px dashed #000"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    style: {
                                        width: "100%",
                                        borderCollapse: "collapse",
                                        fontSize: 10
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                style: {
                                                    borderBottom: "1px solid #000"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: {
                                                            textAlign: "left",
                                                            fontWeight: 700,
                                                            paddingBottom: 3,
                                                            fontSize: 9
                                                        },
                                                        children: "Item"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                        lineNumber: 1710,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: {
                                                            textAlign: "center",
                                                            fontWeight: 700,
                                                            paddingBottom: 3,
                                                            fontSize: 9,
                                                            width: 30
                                                        },
                                                        children: "Qty"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                        lineNumber: 1711,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: {
                                                            textAlign: "right",
                                                            fontWeight: 700,
                                                            paddingBottom: 3,
                                                            fontSize: 9,
                                                            width: 55
                                                        },
                                                        children: "Amount"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                        lineNumber: 1712,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1709,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                            lineNumber: 1708,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: invoicePdfData.items.map((it, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    style: {
                                                        borderBottom: "1px dotted #aaa"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                paddingTop: 4,
                                                                paddingBottom: 4,
                                                                verticalAlign: "top"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontWeight: 600
                                                                    },
                                                                    children: it.category || "—"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                                    lineNumber: 1719,
                                                                    columnNumber: 27
                                                                }, this),
                                                                it.description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: 9,
                                                                        color: "#333",
                                                                        whiteSpace: "pre-wrap"
                                                                    },
                                                                    children: it.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                                    lineNumber: 1721,
                                                                    columnNumber: 29
                                                                }, this) : null,
                                                                it.width || it.height ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: 9
                                                                    },
                                                                    children: [
                                                                        it.width || 0,
                                                                        "ft × ",
                                                                        it.height || 0,
                                                                        "ft = ",
                                                                        it.sqft || 0,
                                                                        " sqft"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                                    lineNumber: 1724,
                                                                    columnNumber: 29
                                                                }, this) : null,
                                                                it.rate ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: 9
                                                                    },
                                                                    children: [
                                                                        "@ ",
                                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(it.rate)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                                    lineNumber: 1726,
                                                                    columnNumber: 38
                                                                }, this) : null
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                            lineNumber: 1718,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                textAlign: "center",
                                                                fontFamily: "monospace",
                                                                paddingTop: 4,
                                                                verticalAlign: "top"
                                                            },
                                                            children: it.qty
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                            lineNumber: 1728,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                textAlign: "right",
                                                                fontFamily: "monospace",
                                                                fontWeight: 700,
                                                                paddingTop: 4,
                                                                verticalAlign: "top"
                                                            },
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(it.amount)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                            lineNumber: 1729,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                    lineNumber: 1717,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                            lineNumber: 1715,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                    lineNumber: 1707,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                lineNumber: 1706,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: "5px 4px",
                                    borderBottom: "1px dashed #000"
                                },
                                children: [
                                    invoicePdfData.invoice.previous_balance > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            fontSize: 11,
                                            marginBottom: 2
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Previous Balance"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1740,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "monospace"
                                                },
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(invoicePdfData.invoice.previous_balance)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1741,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1739,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            fontWeight: 900,
                                            fontSize: 13,
                                            marginBottom: 3
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "New Bill"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1745,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "monospace"
                                                },
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(invoicePdfData.invoice.grand_total)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1746,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1744,
                                        columnNumber: 17
                                    }, this),
                                    invoicePdfData.invoice.gst_amount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            fontSize: 11,
                                            marginBottom: 2
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "GST (",
                                                    invoicePdfData.invoice.gst_pct,
                                                    "%)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1750,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "monospace"
                                                },
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(invoicePdfData.invoice.gst_amount)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1751,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1749,
                                        columnNumber: 19
                                    }, this),
                                    invoicePdfData.invoice.stax_amount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            fontSize: 11,
                                            marginBottom: 2
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Sales Tax (",
                                                    invoicePdfData.invoice.stax_pct,
                                                    "%)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1756,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "monospace"
                                                },
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(invoicePdfData.invoice.stax_amount)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1757,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1755,
                                        columnNumber: 19
                                    }, this),
                                    invoicePdfData.invoice.bra_amount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            fontSize: 11,
                                            marginBottom: 2
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "BRA (",
                                                    invoicePdfData.invoice.bra_pct,
                                                    "%)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1762,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "monospace"
                                                },
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(invoicePdfData.invoice.bra_amount)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1763,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1761,
                                        columnNumber: 19
                                    }, this),
                                    invoicePdfData.invoice.previous_balance > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            fontSize: 11,
                                            fontWeight: 700,
                                            marginBottom: 2,
                                            borderTop: "1px dashed #000",
                                            paddingTop: 3
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Total Due"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1768,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "monospace"
                                                },
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(invoicePdfData.invoice.grand_total + invoicePdfData.invoice.previous_balance)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1769,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1767,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            fontSize: 11,
                                            marginBottom: 2
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Received"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1773,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "monospace"
                                                },
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(invoicePdfData.invoice.amount_received)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1774,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1772,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            fontSize: 11,
                                            fontWeight: 700
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Balance Due"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1777,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "monospace"
                                                },
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(invoicePdfData.invoice.grand_total + invoicePdfData.invoice.previous_balance - invoicePdfData.invoice.amount_received)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1778,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1776,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                lineNumber: 1737,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: "6px 4px",
                                    borderBottom: "1px dashed #000",
                                    fontSize: 9,
                                    lineHeight: 1.6
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontWeight: 900,
                                            fontSize: 10,
                                            marginBottom: 2
                                        },
                                        children: "Easypaisa"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1784,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            "Account No: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontWeight: 900,
                                                    fontSize: 11
                                                },
                                                children: "03148155559"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1785,
                                                columnNumber: 34
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1785,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            "Account Title: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontWeight: 900,
                                                    fontSize: 11
                                                },
                                                children: "Ahmad ullah"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1786,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1786,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontWeight: 900,
                                            fontSize: 10,
                                            marginTop: 6,
                                            marginBottom: 2
                                        },
                                        children: "Meezan Bank"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1787,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            "Account Title: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontWeight: 900,
                                                    fontSize: 11
                                                },
                                                children: "STAR SIGN"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1788,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1788,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            "Current A/C: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontWeight: 900,
                                                    fontSize: 11
                                                },
                                                children: "11100110198383"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1789,
                                                columnNumber: 35
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1789,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "Branch: Suraj Ganj Bazar, Quetta"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1790,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: 6
                                        },
                                        children: [
                                            "Ph: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontWeight: 900,
                                                    fontSize: 11
                                                },
                                                children: "081-2840139"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1791,
                                                columnNumber: 51
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1791,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            "Cell: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontWeight: 900,
                                                    fontSize: 11
                                                },
                                                children: "0300-3878358"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 1792,
                                                columnNumber: 28
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1792,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                lineNumber: 1783,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: "center",
                                    padding: "8px 4px 6px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 12,
                                            fontWeight: 900
                                        },
                                        children: "Thank You!"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1797,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 9,
                                            marginTop: 3
                                        },
                                        children: "Auto Generated Invoice"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1798,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 11,
                                            marginTop: 6,
                                            fontWeight: 700,
                                            color: "#333"
                                        },
                                        children: "Software Developed by Addsmint.com"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1799,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                lineNumber: 1796,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true);
                })() : null
            }, void 0, false, {
                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                lineNumber: 1674,
                columnNumber: 7
            }, this),
            draft && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WalkInInvoiceModal, {
                draft: draft,
                setDraft: setDraft,
                products: products,
                paymentMethods: paymentMethods,
                onClose: closeModal,
                onSave: handleSave,
                saving: saving,
                draftPdfBusy: draftPdfBusy,
                onPrintDraft: ()=>requestPrint(()=>printDraftInvoice()),
                onDownloadDraft: ()=>void downloadDraftInvoice(),
                onRequestCreateProduct: (idx, q)=>setProductCreate({
                        idx,
                        initialName: q
                    })
            }, void 0, false, {
                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                lineNumber: 1807,
                columnNumber: 9
            }, this),
            productCreate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$ProductCreateModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductCreateModal"], {
                initialName: productCreate.initialName,
                existingProducts: products,
                onClose: ()=>setProductCreate(null),
                onCreated: handleProductCreated
            }, void 0, false, {
                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                lineNumber: 1823,
                columnNumber: 9
            }, this),
            showPrintTypeModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[900] flex items-center justify-center backdrop-blur-sm px-4",
                style: {
                    background: "rgba(10,30,50,.45)"
                },
                onClick: ()=>{
                    setShowPrintTypeModal(false);
                    pendingPrintFnRef.current = null;
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-[20px] w-[min(420px,100%)] overflow-hidden animate-slide-up",
                    style: {
                        boxShadow: "var(--shadow-lg)"
                    },
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-5 py-4 border-b border-[var(--gray-100)]",
                            style: {
                                background: "linear-gradient(90deg, var(--blue-deeper), var(--blue-dark))"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-[15px] font-bold text-white",
                                            children: "Select Print Format"
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                            lineNumber: 1849,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] mt-0.5 text-white/60",
                                            children: "Choose how you want to print this invoice"
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                            lineNumber: 1850,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                    lineNumber: 1848,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        setShowPrintTypeModal(false);
                                        pendingPrintFnRef.current = null;
                                    },
                                    className: "w-7 h-7 rounded-full flex items-center justify-center border-none cursor-pointer",
                                    style: {
                                        background: "rgba(255,255,255,0.15)",
                                        color: "white"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 1858,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                    lineNumber: 1852,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                            lineNumber: 1844,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-5 grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>void confirmPrint("thermal"),
                                    className: "flex flex-col items-center gap-3 p-5 rounded-[14px] border-2 cursor-pointer transition-all hover:border-[var(--blue-deeper)] hover:bg-[var(--blue-pale)] group",
                                    style: {
                                        borderColor: "var(--gray-200)",
                                        background: "var(--gray-50)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-14 rounded-[6px] flex flex-col items-center justify-end pb-1 gap-[3px]",
                                            style: {
                                                background: "white",
                                                boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                                                border: "1.5px solid var(--gray-200)"
                                            },
                                            children: [
                                                [
                                                    40,
                                                    60,
                                                    50,
                                                    40,
                                                    55
                                                ].map((w, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-full",
                                                        style: {
                                                            width: `${w}%`,
                                                            height: 2,
                                                            background: "var(--gray-300)"
                                                        }
                                                    }, i, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                        lineNumber: 1877,
                                                        columnNumber: 21
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-full mt-1",
                                                    style: {
                                                        width: "70%",
                                                        height: 2.5,
                                                        background: "var(--blue-deeper)"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                    lineNumber: 1879,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                            lineNumber: 1872,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[13px] font-bold",
                                                    style: {
                                                        color: "var(--gray-900)"
                                                    },
                                                    children: "Thermal"
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                    lineNumber: 1882,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[11px] mt-0.5",
                                                    style: {
                                                        color: "var(--gray-500)"
                                                    },
                                                    children: "Narrow receipt roll"
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                    lineNumber: 1883,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                            lineNumber: 1881,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                    lineNumber: 1865,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>void confirmPrint("a4"),
                                    className: "flex flex-col items-center gap-3 p-5 rounded-[14px] border-2 cursor-pointer transition-all hover:border-[var(--blue-deeper)] hover:bg-[var(--blue-pale)] group",
                                    style: {
                                        borderColor: "var(--gray-200)",
                                        background: "var(--gray-50)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-14 rounded-[4px] flex flex-col items-start justify-start p-1.5 gap-[3px]",
                                            style: {
                                                background: "white",
                                                boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                                                border: "1.5px solid var(--gray-200)"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-full w-full",
                                                    style: {
                                                        height: 2.5,
                                                        background: "var(--blue-deeper)"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                    lineNumber: 1899,
                                                    columnNumber: 19
                                                }, this),
                                                [
                                                    100,
                                                    80,
                                                    90,
                                                    70,
                                                    85,
                                                    75,
                                                    60
                                                ].map((w, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-full",
                                                        style: {
                                                            width: `${w}%`,
                                                            height: 2,
                                                            background: "var(--gray-300)"
                                                        }
                                                    }, i, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                        lineNumber: 1901,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                            lineNumber: 1895,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[13px] font-bold",
                                                    style: {
                                                        color: "var(--gray-900)"
                                                    },
                                                    children: "A4 Page"
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                    lineNumber: 1905,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[11px] mt-0.5",
                                                    style: {
                                                        color: "var(--gray-500)"
                                                    },
                                                    children: "Full-page invoice"
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                    lineNumber: 1906,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                            lineNumber: 1904,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                    lineNumber: 1888,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                            lineNumber: 1863,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-[11px] pb-4",
                            style: {
                                color: "var(--gray-400)"
                            },
                            children: "Custom layouts coming soon — both options use the current design for now"
                        }, void 0, false, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                            lineNumber: 1911,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                    lineNumber: 1838,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                lineNumber: 1833,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(InvoicePage, "hWVUWgMzCsy8kO9qqNaBgZBF9U8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$UserContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$paymentMethods$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePaymentMethods"]
    ];
});
_c = InvoicePage;
function WalkInInvoiceModal({ draft, setDraft, products, paymentMethods, onClose, onSave, saving, draftPdfBusy, onPrintDraft, onDownloadDraft, onRequestCreateProduct }) {
    _s1();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WalkInInvoiceModal.useEffect": ()=>{
            function onKey(e) {
                if (e.key === "Escape" && !saving) onClose();
            }
            window.addEventListener("keydown", onKey);
            return ({
                "WalkInInvoiceModal.useEffect": ()=>window.removeEventListener("keydown", onKey)
            })["WalkInInvoiceModal.useEffect"];
        }
    }["WalkInInvoiceModal.useEffect"], [
        onClose,
        saving
    ]);
    const setClientName = (name)=>{
        setDraft((d)=>d ? {
                ...d,
                clientName: name
            } : null);
    };
    const setClientPhone = (phone)=>{
        setDraft((d)=>d ? {
                ...d,
                clientPhone: phone
            } : null);
    };
    const updateItem = (idx, field, value)=>{
        setDraft((d)=>{
            if (!d) return null;
            const items = [
                ...d.items
            ];
            let item = {
                ...items[idx],
                [field]: value
            };
            if (field === "product") {
                const dbProd = products.find((p)=>p.name === value);
                if (dbProd) {
                    const isStandalone = dbProd.pricing_type === "standalone";
                    item = {
                        ...item,
                        rate: dbProd.sale_price,
                        pricingType: isStandalone ? "standalone" : "sqft"
                    };
                    if (isStandalone) item = {
                        ...item,
                        width: 0,
                        height: 0,
                        sqft: 0
                    };
                    if (!item.description.trim() && dbProd.description?.trim()) {
                        item = {
                            ...item,
                            description: dbProd.description.trim()
                        };
                    }
                }
            }
            if (field === "lineType" && value === "labor") {
                item = {
                    ...item,
                    product: "",
                    width: 0,
                    height: 0,
                    sqft: 1,
                    pricingType: "sqft"
                };
            }
            items[idx] = calcItem(item);
            return {
                ...d,
                items
            };
        });
    };
    const addItem = ()=>{
        setDraft((d)=>d ? {
                ...d,
                items: [
                    ...d.items,
                    blankItem()
                ]
            } : null);
    };
    const deleteItem = (idx)=>{
        setDraft((d)=>{
            if (!d || d.items.length <= 1) return d;
            return {
                ...d,
                items: d.items.filter((_, i)=>i !== idx)
            };
        });
    };
    const subtotal = draft.items.reduce((s, it)=>s + it.total, 0);
    const discountRaw = parseFloat(String(draft.discountValue).replace(/,/g, "")) || 0;
    const discountAmount = draft.discountType === "pct" ? Math.min(Math.max(0, discountRaw), 100) * (subtotal / 100) : Math.min(Math.max(0, discountRaw), subtotal);
    const grandTotal = Math.max(0, Math.round((subtotal - discountAmount) * 100) / 100);
    const lastItemIdx = draft.items.length - 1;
    const { amountReceived: paidPreview, balanceDue: balanceDuePreview } = computeWalkInPayment(draft);
    const sm = "border border-[var(--gray-200)] rounded-[6px] px-2 py-1.5 text-[12px] outline-none bg-white focus:border-[var(--blue)] focus:ring-1 focus:ring-[var(--blue-light)] w-full transition-all";
    const lg = "border-2 border-[var(--gray-200)] rounded-[8px] px-2 py-2.5 text-[17px] font-bold outline-none bg-white focus:border-[var(--blue)] focus:ring-2 focus:ring-[var(--blue-light)] w-full transition-all text-[#0C2433]";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[800] flex items-start justify-center backdrop-blur-sm pt-6 sm:pt-10 px-3 pb-8 overflow-y-auto no-print",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                "aria-label": "Close",
                className: "absolute inset-0 bg-black/35 no-print cursor-default border-none",
                onClick: ()=>{
                    if (!saving) onClose();
                }
            }, void 0, false, {
                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                lineNumber: 2014,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full max-w-[1100px] bg-white rounded-[14px] border border-[var(--gray-100)] overflow-hidden",
                style: {
                    boxShadow: "var(--shadow-lg)"
                },
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-3 px-5 py-4 border-b border-[var(--gray-100)] no-print",
                        style: {
                            background: "var(--blue-deeper)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[15px] font-extrabold text-white tracking-tight",
                                        children: draft.editingInvoiceId ? "Edit invoice" : "New walk-in invoice"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 2030,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-white/75 mt-0.5 font-mono font-bold",
                                        children: draft.invoiceNumber
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 2033,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                lineNumber: 2029,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: onPrintDraft,
                                        disabled: saving || draftPdfBusy,
                                        title: "Print preview",
                                        className: "inline-flex items-center gap-1.5 px-3 py-2 rounded-[8px] border-[1.5px] text-[11px] font-bold cursor-pointer text-white hover:bg-white/10 transition-all disabled:opacity-40",
                                        style: {
                                            borderColor: "rgba(255,255,255,0.35)"
                                        },
                                        children: [
                                            draftPdfBusy ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                size: 14,
                                                className: "animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 2044,
                                                columnNumber: 31
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 2044,
                                                columnNumber: 80
                                            }, this),
                                            "Print"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 2036,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: onDownloadDraft,
                                        disabled: saving || draftPdfBusy,
                                        title: "Download PDF",
                                        className: "inline-flex items-center gap-1.5 px-3 py-2 rounded-[8px] border-[1.5px] text-[11px] font-bold cursor-pointer text-white hover:bg-white/10 transition-all disabled:opacity-40",
                                        style: {
                                            borderColor: "rgba(255,255,255,0.35)"
                                        },
                                        children: [
                                            draftPdfBusy ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                size: 14,
                                                className: "animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 2055,
                                                columnNumber: 31
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 2055,
                                                columnNumber: 80
                                            }, this),
                                            "PDF"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 2047,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            if (!saving) onClose();
                                        },
                                        disabled: saving,
                                        className: "w-9 h-9 rounded-[8px] flex items-center justify-center border-none cursor-pointer text-white hover:bg-white/10 transition-all disabled:opacity-40",
                                        "aria-label": "Close",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                            lineNumber: 2065,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 2058,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                lineNumber: 2035,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                        lineNumber: 2025,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 sm:px-5 py-4 border-b border-[var(--gray-100)] bg-[var(--gray-50)] no-print grid grid-cols-1 sm:grid-cols-2 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-[10px] font-bold tracking-[1px] uppercase mb-1.5",
                                        style: {
                                            color: "var(--gray-700)"
                                        },
                                        children: "Name (optional)"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 2072,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: draft.clientName,
                                        onChange: (e)=>setClientName(e.target.value),
                                        className: sm,
                                        placeholder: "Walk-in (optional)",
                                        style: {
                                            color: "#0C2433"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 2075,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                lineNumber: 2071,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-[10px] font-bold tracking-[1px] uppercase mb-1.5",
                                        style: {
                                            color: "var(--gray-700)"
                                        },
                                        children: "WhatsApp / mobile (optional)"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 2084,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: draft.clientPhone,
                                        onChange: (e)=>setClientPhone(e.target.value),
                                        className: sm,
                                        placeholder: "03001234567 — opens chat to this number when set",
                                        inputMode: "tel",
                                        style: {
                                            color: "#0C2433"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 2087,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                lineNumber: 2083,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                        lineNumber: 2070,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto px-2 sm:px-4 py-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].table}`,
                            style: {
                                minWidth: 860
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            "Product",
                                            "W (ft)",
                                            "H (ft)",
                                            "Qty",
                                            "Total Sq.ft",
                                            "Rate/sqft",
                                            "Total",
                                            "Actions"
                                        ].map((h)=>{
                                            const num = h === "W (ft)" || h === "H (ft)" || h === "Qty" || h === "Total Sq.ft" || h === "Rate/sqft" || h === "Total";
                                            const align = h === "Actions" ? "text-center" : num ? "text-center" : "text-left";
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].thDense} ${align}`,
                                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].thStyle,
                                                children: h
                                            }, h, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 2106,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 2101,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                    lineNumber: 2100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: draft.items.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "transition-colors hover:bg-[var(--blue-pale)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-2 py-3 border-b border-[var(--gray-100)]",
                                                    style: {
                                                        minWidth: 150
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$SearchableSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchableSelect"], {
                                                            value: item.product,
                                                            onChange: (v)=>updateItem(idx, "product", v),
                                                            options: products.map((p)=>({
                                                                    value: p.name,
                                                                    label: p.code ? `#${p.code} — ${p.name}` : p.name
                                                                })),
                                                            placeholder: "— Product —",
                                                            inputClassName: sm,
                                                            inputStyle: {
                                                                color: "#0C2433"
                                                            },
                                                            onCreate: (q)=>onRequestCreateProduct(idx, q),
                                                            createLabel: "+ Add new product"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                            lineNumber: 2117,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            value: item.description,
                                                            onChange: (e)=>updateItem(idx, "description", e.target.value),
                                                            placeholder: "Description (optional)",
                                                            rows: 2,
                                                            className: `${sm} mt-1.5 resize-y min-h-[48px] py-1.5`,
                                                            style: {
                                                                color: "#0C2433"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                            lineNumber: 2127,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                    lineNumber: 2116,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-1.5 py-3 border-b border-[var(--gray-100)]",
                                                    style: {
                                                        minWidth: 132,
                                                        width: 132
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        min: "0",
                                                        step: "0.1",
                                                        value: item.width || "",
                                                        disabled: item.pricingType === "standalone",
                                                        onChange: (e)=>updateItem(idx, "width", parseFloat(e.target.value) || 0),
                                                        onWheel: (e)=>e.currentTarget.blur(),
                                                        className: `${lg} text-center disabled:opacity-30 disabled:cursor-not-allowed`,
                                                        placeholder: "0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                        lineNumber: 2137,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                    lineNumber: 2136,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-1.5 py-3 border-b border-[var(--gray-100)]",
                                                    style: {
                                                        minWidth: 132,
                                                        width: 132
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        min: "0",
                                                        step: "0.1",
                                                        value: item.height || "",
                                                        disabled: item.pricingType === "standalone",
                                                        onChange: (e)=>updateItem(idx, "height", parseFloat(e.target.value) || 0),
                                                        onWheel: (e)=>e.currentTarget.blur(),
                                                        className: `${lg} text-center disabled:opacity-30 disabled:cursor-not-allowed`,
                                                        placeholder: "0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                        lineNumber: 2150,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                    lineNumber: 2149,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-2 py-3 border-b border-[var(--gray-100)]",
                                                    style: {
                                                        width: 80
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        min: "1",
                                                        value: item.qty,
                                                        onChange: (e)=>updateItem(idx, "qty", parseInt(e.target.value) || 0),
                                                        onWheel: (e)=>e.currentTarget.blur(),
                                                        className: `${lg} text-center`,
                                                        style: item.qty < 1 ? {
                                                            borderColor: "var(--red)",
                                                            color: "var(--red)"
                                                        } : undefined,
                                                        "aria-invalid": item.qty < 1,
                                                        title: item.qty < 1 ? "Quantity must be at least 1" : undefined
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                        lineNumber: 2163,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                    lineNumber: 2162,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-2.5 py-3 border-b border-[var(--gray-100)] text-center font-mono font-extrabold",
                                                    style: {
                                                        color: item.pricingType === "standalone" ? "var(--gray-300)" : item.sqft > 0 ? "#0C2433" : "var(--gray-300)",
                                                        width: 88,
                                                        fontSize: 16
                                                    },
                                                    children: item.pricingType === "standalone" ? "—" : item.sqft > 0 ? Math.round(item.sqft * item.qty * 100) / 100 : "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                    lineNumber: 2175,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-2 py-3 border-b border-[var(--gray-100)]",
                                                    style: {
                                                        width: 110
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        min: "0",
                                                        value: item.rate || "",
                                                        onChange: (e)=>updateItem(idx, "rate", parseFloat(e.target.value) || 0),
                                                        onWheel: (e)=>e.currentTarget.blur(),
                                                        className: `${lg} text-right`,
                                                        placeholder: "0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                        lineNumber: 2182,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                    lineNumber: 2181,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-2.5 py-3 border-b border-[var(--gray-100)] text-right font-mono font-extrabold whitespace-nowrap",
                                                    style: {
                                                        color: "var(--blue-deeper)",
                                                        width: 120,
                                                        fontSize: 16
                                                    },
                                                    children: item.total > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(item.total) : "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                    lineNumber: 2192,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-2 py-3 border-b border-[var(--gray-100)]",
                                                    style: {
                                                        width: 130
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1.5 flex-wrap justify-end no-print",
                                                        children: [
                                                            draft.items.length > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>deleteItem(idx),
                                                                className: "w-7 h-7 rounded-[6px] flex items-center justify-center border-none cursor-pointer shrink-0",
                                                                style: {
                                                                    background: "var(--red-light)",
                                                                    color: "var(--red)"
                                                                },
                                                                "aria-label": "Remove line",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                    size: 11
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                                    lineNumber: 2208,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                                lineNumber: 2201,
                                                                columnNumber: 25
                                                            }, this) : null,
                                                            idx === lastItemIdx ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModalActionBtn, {
                                                                        onClick: addItem,
                                                                        bg: "var(--green-light)",
                                                                        color: "var(--green)",
                                                                        border: "rgba(14,173,106,.2)",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                size: 10
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                                                lineNumber: 2214,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            " Add"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                                        lineNumber: 2213,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    draft.items.length > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[11px] font-bold font-mono w-full mt-0.5 text-right",
                                                                        style: {
                                                                            color: "var(--blue-deeper)"
                                                                        },
                                                                        children: [
                                                                            "= ",
                                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(grandTotal)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                                        lineNumber: 2217,
                                                                        columnNumber: 29
                                                                    }, this) : null
                                                                ]
                                                            }, void 0, true) : null
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                        lineNumber: 2199,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                    lineNumber: 2198,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                            lineNumber: 2115,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                    lineNumber: 2113,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                            lineNumber: 2099,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                        lineNumber: 2098,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 sm:px-5 py-4 border-t border-[var(--gray-100)] bg-[var(--gray-50)] no-print",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[10px] font-bold tracking-[1px] uppercase mb-1.5",
                                style: {
                                    color: "var(--gray-700)"
                                },
                                children: "Invoice description (optional)"
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                lineNumber: 2232,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: draft.description,
                                onChange: (e)=>setDraft((d)=>d ? {
                                            ...d,
                                            description: e.target.value
                                        } : null),
                                className: `${sm} min-h-[52px] resize-y py-2`,
                                placeholder: "e.g. Shop front flex, delivery address, job notes…",
                                rows: 2,
                                style: {
                                    color: "#0C2433"
                                }
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                lineNumber: 2235,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                        lineNumber: 2231,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 sm:px-5 py-3 border-t border-[var(--gray-100)] no-print bg-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-[10px] font-bold tracking-[1px] uppercase",
                                                style: {
                                                    color: "var(--gray-700)"
                                                },
                                                children: [
                                                    "Paid now ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-normal normal-case opacity-80",
                                                        children: "(optional)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                        lineNumber: 2251,
                                                        columnNumber: 26
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 2250,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: 0,
                                                step: 1,
                                                value: draft.amountPaid,
                                                onChange: (e)=>setDraft((d)=>d ? {
                                                            ...d,
                                                            amountPaid: e.target.value
                                                        } : null),
                                                onWheel: (e)=>e.currentTarget.blur(),
                                                placeholder: "0",
                                                className: sm,
                                                style: {
                                                    color: "#0C2433"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 2253,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] m-0",
                                                style: {
                                                    color: "var(--gray-600)"
                                                },
                                                children: "Amount collected now is saved on the invoice; see total, payment, and remaining below."
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 2266,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 2249,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-[10px] font-bold tracking-[1px] uppercase",
                                                style: {
                                                    color: "var(--gray-700)"
                                                },
                                                children: "How paid"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 2271,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap border-[1.5px] rounded-[9px] overflow-hidden",
                                                style: {
                                                    borderColor: "var(--gray-200)"
                                                },
                                                children: paymentMethods.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setDraft((d)=>d ? {
                                                                    ...d,
                                                                    payMethod: m.name
                                                                } : null),
                                                        className: "flex-1 min-w-[80px] py-2 text-[11px] font-semibold border-none cursor-pointer transition-all",
                                                        style: {
                                                            background: draft.payMethod === m.name ? "var(--blue-deeper)" : "var(--gray-50)",
                                                            color: draft.payMethod === m.name ? "#fff" : "var(--gray-500)"
                                                        },
                                                        children: m.name
                                                    }, m.id, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                        lineNumber: 2276,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 2274,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 2270,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-[10px] font-bold tracking-[1px] uppercase",
                                                style: {
                                                    color: "var(--gray-700)"
                                                },
                                                children: "Discount"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 2292,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: draft.discountType,
                                                        onChange: (e)=>setDraft((d)=>d ? {
                                                                    ...d,
                                                                    discountType: e.target.value
                                                                } : null),
                                                        className: sm,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "pct",
                                                                children: "%"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                                lineNumber: 2301,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "flat",
                                                                children: "Fixed"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                                lineNumber: 2302,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                        lineNumber: 2296,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        min: 0,
                                                        step: 1,
                                                        value: draft.discountValue,
                                                        onChange: (e)=>setDraft((d)=>d ? {
                                                                    ...d,
                                                                    discountValue: e.target.value
                                                                } : null),
                                                        onWheel: (e)=>e.currentTarget.blur(),
                                                        placeholder: draft.discountType === "pct" ? "0-100" : "Amount",
                                                        className: sm,
                                                        style: {
                                                            color: "#0C2433"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                        lineNumber: 2304,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 2295,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 2291,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                lineNumber: 2248,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "mt-4 flex items-center gap-2.5 cursor-pointer select-none rounded-[10px] border border-[var(--gray-200)] bg-[var(--gray-50)] px-4 py-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: draft.addToExpense,
                                        onChange: (e)=>setDraft((d)=>d ? {
                                                    ...d,
                                                    addToExpense: e.target.checked
                                                } : null),
                                        className: "w-4 h-4 cursor-pointer accent-[var(--blue-deeper)]"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 2321,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[12px] font-bold",
                                        style: {
                                            color: "var(--gray-800)"
                                        },
                                        children: "Add expense for this invoice"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 2327,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-normal",
                                        style: {
                                            color: "var(--gray-600)"
                                        },
                                        children: "opens the Expense module after saving so you can enter the amount"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 2330,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                lineNumber: 2320,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                        lineNumber: 2247,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-end justify-between gap-4 px-5 py-4 border-t border-[var(--gray-100)] no-print",
                        style: {
                            background: "var(--gray-50)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-[10px] border border-[var(--gray-200)] bg-white px-4 py-3 min-w-[min(100%,240px)]",
                                style: {
                                    boxShadow: "var(--shadow-sm)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[9px] font-bold tracking-[1px] uppercase mb-2",
                                        style: {
                                            color: "var(--gray-600)"
                                        },
                                        children: "Summary"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 2344,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1.5 font-mono text-[13px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between gap-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: "var(--gray-700)"
                                                        },
                                                        children: "New Bill"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                        lineNumber: 2349,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-extrabold",
                                                        style: {
                                                            color: "var(--blue-deeper)"
                                                        },
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(subtotal)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                        lineNumber: 2350,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 2348,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between gap-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: "var(--gray-700)"
                                                        },
                                                        children: "Discount"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                        lineNumber: 2353,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-extrabold",
                                                        style: {
                                                            color: "var(--orange)"
                                                        },
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(discountAmount)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                        lineNumber: 2354,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 2352,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between gap-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: "var(--gray-700)"
                                                        },
                                                        children: "Total"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                        lineNumber: 2357,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-extrabold",
                                                        style: {
                                                            color: "var(--blue-deeper)"
                                                        },
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(grandTotal)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                        lineNumber: 2358,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 2356,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between gap-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: "var(--gray-700)"
                                                        },
                                                        children: "Payment"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                        lineNumber: 2361,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-extrabold",
                                                        style: {
                                                            color: "var(--green)"
                                                        },
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(paidPreview)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                        lineNumber: 2362,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 2360,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between gap-8 pt-1.5 border-t border-[var(--gray-100)]",
                                                style: {
                                                    marginTop: 2
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold",
                                                        style: {
                                                            color: "var(--gray-800)"
                                                        },
                                                        children: "Remaining"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                        lineNumber: 2368,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-extrabold",
                                                        style: {
                                                            color: balanceDuePreview > 0 ? "var(--red)" : "var(--green)"
                                                        },
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(balanceDuePreview)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                        lineNumber: 2369,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 2364,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 2347,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                lineNumber: 2340,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: onClose,
                                        disabled: saving,
                                        className: "px-4 py-2.5 rounded-[9px] text-[12.5px] font-semibold cursor-pointer border-[1.5px] bg-white transition-all disabled:opacity-50",
                                        style: {
                                            borderColor: "var(--gray-200)",
                                            color: "var(--gray-900)"
                                        },
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 2379,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>void onSave(),
                                        disabled: saving,
                                        className: "inline-flex items-center gap-1.5 px-4 py-2.5 rounded-[9px] border-none text-[12.5px] font-semibold cursor-pointer text-white disabled:opacity-60",
                                        style: {
                                            background: "linear-gradient(135deg, var(--blue-deeper), var(--blue))",
                                            boxShadow: "0 2px 10px rgba(204,17,17,.28)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                                lineNumber: 2395,
                                                columnNumber: 15
                                            }, this),
                                            saving ? "Saving…" : draft.editingInvoiceId ? "Update invoice" : "Save invoice"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                        lineNumber: 2388,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                                lineNumber: 2378,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                        lineNumber: 2336,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
                lineNumber: 2020,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
        lineNumber: 2013,
        columnNumber: 5
    }, this);
}
_s1(WalkInInvoiceModal, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c1 = WalkInInvoiceModal;
function WhatsAppGlyph({ size = 16 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
        }, void 0, false, {
            fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
            lineNumber: 2408,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
        lineNumber: 2407,
        columnNumber: 5
    }, this);
}
_c2 = WhatsAppGlyph;
function ModalActionBtn({ children, onClick, bg, color, border }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-[5px] text-[10.5px] font-semibold cursor-pointer border-[1.5px] whitespace-nowrap",
        style: {
            background: bg,
            color,
            borderColor: border
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Star-Panaflex/app/(dashboard)/quick-invoice/page.tsx",
        lineNumber: 2415,
        columnNumber: 5
    }, this);
}
_c3 = ModalActionBtn;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "InvoicePage");
__turbopack_context__.k.register(_c1, "WalkInInvoiceModal");
__turbopack_context__.k.register(_c2, "WhatsAppGlyph");
__turbopack_context__.k.register(_c3, "ModalActionBtn");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Star-Panaflex_09hilg7._.js.map