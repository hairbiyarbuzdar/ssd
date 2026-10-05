(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/Star-Panaflex/lib/ledger.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Shared ledger math used by both the customer (accounts) and supplier ledgers.
 *  Each consumer builds its own LedgerRow[] from the relevant data sources, then
 *  feeds them through these helpers for date filtering and running-balance calc. */ __turbopack_context__.s([
    "ledgerRowsForDateRange",
    ()=>ledgerRowsForDateRange,
    "ledgerWithRunningBalance",
    ()=>ledgerWithRunningBalance,
    "openingBalanceBeforeDate",
    ()=>openingBalanceBeforeDate
]);
function ledgerWithRunningBalance(rows) {
    let bal = 0;
    return rows.map((r)=>{
        bal += r.debit - r.credit;
        // Clean sub-cent FP residuals so the closing balance can settle to a clean 0
        // instead of something like -4.5e-13 that renders as a spurious "Rs -0".
        const balance = Math.round(bal * 100) / 100;
        return {
            ...r,
            balance
        };
    });
}
function ledgerRowsForDateRange(allRows, fromISO, toISO) {
    const sorted = [
        ...allRows
    ].sort((a, b)=>a.sortAt.localeCompare(b.sortAt));
    const from = fromISO.trim();
    const to = toISO.trim();
    if (!from && !to) return ledgerWithRunningBalance(sorted);
    let opening = 0;
    if (from) {
        opening = Math.round(sorted.filter((r)=>r.date < from).reduce((s, r)=>s + r.debit - r.credit, 0) * 100) / 100;
    }
    const inRange = sorted.filter((r)=>(!from || r.date >= from) && (!to || r.date <= to));
    let bal = opening;
    return inRange.map((r)=>{
        bal += r.debit - r.credit;
        const balance = Math.round(bal * 100) / 100;
        return {
            ...r,
            balance
        };
    });
}
function openingBalanceBeforeDate(allRows, fromISO) {
    if (!fromISO.trim()) return 0;
    const sorted = [
        ...allRows
    ].sort((a, b)=>a.sortAt.localeCompare(b.sortAt));
    const sum = sorted.filter((r)=>r.date < fromISO.trim()).reduce((s, r)=>s + r.debit - r.credit, 0);
    return Math.round(sum * 100) / 100;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Star-Panaflex/lib/partyBalance.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildLedgerRows",
    ()=>buildLedgerRows,
    "computePartySignedBalance",
    ()=>computePartySignedBalance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$paymentMethods$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/paymentMethods.ts [app-client] (ecmascript)");
;
/**
 * Business operates in whole rupees: rates × sqft can produce fractional
 * totals (e.g. 4,102.50) that display rounded as "Rs 4,103", while the
 * user enters the matching payment as the round figure 4,103 — leaving
 * a hidden -0.50 per invoice that compounds across the ledger. Rounding
 * each row's amount to whole rupees here makes the ledger arithmetic
 * match what the user sees row by row, and keeps the closing balance
 * honest to the whole-rupee view of the account.
 */ const wholeRupees = (n)=>n < 0 ? -Math.round(-n) : Math.round(n);
/** Invoices belonging to a named party (excludes walk-ins). */ function partyInvoicesFor(accountName, invoices) {
    return invoices.filter((i)=>i.client_name === accountName && !i.is_walk_in);
}
function buildLedgerRows(accountName, invoices, cashbook) {
    const rows = [];
    const nameLower = accountName.toLowerCase();
    /** Invoice IDs that already have a cashbook line (reference = invoice id) — avoids double-counting payment. */ const invoiceIdsWithCashbookPayment = new Set(cashbook.filter((c)=>(c.account_name || "").toLowerCase() === nameLower).map((c)=>(c.reference || "").trim()).filter(Boolean));
    partyInvoicesFor(accountName, invoices).forEach((inv)=>{
        rows.push({
            date: inv.invoice_date,
            sortAt: `${inv.invoice_date}T${inv.created_at || "1970-01-01"}`,
            doc: inv.invoice_number,
            desc: (()=>{
                const detail = [
                    inv.job_notes,
                    inv.job_name
                ].map((s)=>String(s || "").trim()).find(Boolean);
                return detail ? `Invoice — ${detail}` : "Invoice";
            })(),
            debit: wholeRupees(Number(inv.grand_total)),
            credit: 0,
            method: inv.payment_method || "—",
            invoiceId: inv.id
        });
        if (Number(inv.amount_received) > 0 && !invoiceIdsWithCashbookPayment.has(inv.id)) {
            rows.push({
                date: inv.invoice_date,
                sortAt: `${inv.invoice_date}T${inv.created_at || "1970-01-01"}_recv`,
                doc: inv.invoice_number,
                desc: "Payment received (on invoice)",
                debit: 0,
                credit: wholeRupees(Number(inv.amount_received)),
                method: inv.payment_method || "—"
            });
        }
    });
    cashbook.filter((c)=>(c.account_name || "").toLowerCase() === nameLower).forEach((c)=>{
        const amt = wholeRupees(Number(c.amount));
        const isOpening = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$paymentMethods$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOpeningBalanceEntry"])(c);
        // Balance-adjustment rows (created when an account's opening balance is
        // edited) are also bookkeeping-only — their `type` carries the direction
        // and must be honored, same as opening balance. Treating them as a plain
        // "payment received" silently flips the sign of the cached balance.
        const isLedgerOnly = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$paymentMethods$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLedgerOnlyEntry"])(c);
        let debit = 0;
        let credit = 0;
        if (isLedgerOnly) {
            // "in"  = party owes us more  → debit side
            // "out" = we owe the party more → credit side
            debit = c.type === "in" ? amt : 0;
            credit = c.type === "out" ? amt : 0;
        } else {
            // Real cashbook entries linked to a party are payments — they reduce
            // what the party owes us.
            credit = amt;
        }
        rows.push({
            date: c.date,
            sortAt: `${c.date}T${c.created_at || "1970-01-01"}_${c.id}`,
            doc: isOpening ? "Opening" : isLedgerOnly ? "Adjustment" : "Cashbook",
            desc: c.description || (c.type === "in" ? "Cashbook entry (in)" : "Cashbook entry (out)"),
            debit,
            credit,
            method: c.method || "—"
        });
    });
    rows.sort((a, b)=>a.sortAt.localeCompare(b.sortAt));
    return rows;
}
function computePartySignedBalance(accountName, invoices, cashbook) {
    const rows = buildLedgerRows(accountName, invoices, cashbook);
    const sum = rows.reduce((s, r)=>s + r.debit - r.credit, 0);
    // Amounts are stored at 2-decimal precision; summing many can leave tiny
    // FP residuals (e.g. ...e-13) that render as spurious "Rs -0" values.
    return Math.round(sum * 100) / 100;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Star-Panaflex/lib/partyBalanceLive.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchPartySignedBalance",
    ()=>fetchPartySignedBalance,
    "recomputeCachedBalance",
    ()=>recomputeCachedBalance,
    "syncCachedAccountBalance",
    ()=>syncCachedAccountBalance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/db.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$partyBalance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/partyBalance.ts [app-client] (ecmascript)");
;
;
async function fetchPartySignedBalance(accountName) {
    const [invRes, cbRes, acctRes] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("invoices").select("*").eq("client_name", accountName).eq("is_walk_in", false),
        __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("cashbook").select("*").ilike("account_name", accountName),
        __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("accounts").select("balance, bal_type").eq("name", accountName).single()
    ]);
    const invoices = invRes.data ?? [];
    const cashbook = cbRes.data ?? [];
    const acct = acctRes.data;
    const signed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$partyBalance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computePartySignedBalance"])(accountName, invoices, cashbook);
    let cachedSigned = null;
    if (acct) {
        cachedSigned = acct.bal_type === "credit" ? Number(acct.balance) : -Number(acct.balance);
        cachedSigned = Math.round(cachedSigned * 100) / 100;
    }
    const drift = cachedSigned == null ? 0 : Math.round(Math.abs(signed - cachedSigned) * 100) / 100;
    return {
        signed,
        invoices,
        cashbook,
        cachedSigned,
        drift
    };
}
async function syncCachedAccountBalance(accountName, signed) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("accounts").update({
        balance: Math.abs(signed),
        bal_type: signed >= 0 ? "credit" : "debit"
    }).eq("name", accountName);
}
async function recomputeCachedBalance(accountName) {
    const fresh = await fetchPartySignedBalance(accountName);
    await syncCachedAccountBalance(accountName, fresh.signed);
    return fresh.signed;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/Star-Panaflex/lib/useSaving.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSaving",
    ()=>useSaving
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useSaving() {
    _s();
    const runningRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const run = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSaving.useCallback[run]": async (fn)=>{
            if (runningRef.current) return undefined;
            runningRef.current = true;
            setSaving(true);
            try {
                return await fn();
            } finally{
                runningRef.current = false;
                setSaving(false);
            }
        }
    }["useSaving.useCallback[run]"], []);
    return {
        saving,
        run
    };
}
_s(useSaving, "5eIiMu6sTa7GRi6xp3U1q2T82GM=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AccountsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$html2canvas$2f$dist$2f$html2canvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/html2canvas/dist/html2canvas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/db.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/components/Toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/helpers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$banknote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Banknote$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/banknote.js [app-client] (ecmascript) <export default as Banknote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$paymentMethods$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/paymentMethods.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$ledger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/ledger.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$partyBalance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/partyBalance.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$partyBalanceLive$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/partyBalanceLive.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/dataTableStyles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$PrintFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/components/PrintFooter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$PrintHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/components/PrintHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$ThermalHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/components/ThermalHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$whatsappWaMe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/whatsappWaMe.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$UserContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/UserContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$SearchableSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/components/SearchableSelect.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$ConfirmModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/components/ConfirmModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$activityLog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/activityLog.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$ProductCreateModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/components/ProductCreateModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$expenses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/expenses.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$useSaving$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/useSaving.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
;
;
;
;
function WhatsAppIcon({ size = 18, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
        }, void 0, false, {
            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c = WhatsAppIcon;
function blankInvItem() {
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
function calcInvItem(item) {
    if (item.pricingType === "standalone") {
        return {
            ...item,
            sqft: 0,
            total: Math.round(Number(item.rate) * Number(item.qty) * 100) / 100
        };
    }
    const sqft = Math.round(Number(item.width) * Number(item.height) * 100) / 100;
    return {
        ...item,
        sqft,
        total: Math.round(sqft * Number(item.rate) * Number(item.qty) * 100) / 100
    };
}
function AccountsPage() {
    _s();
    const userProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$UserContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { methods: paymentMethods } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$paymentMethods$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePaymentMethods"])();
    const { saving, run } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$useSaving$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSaving"])();
    const [accounts, setAccounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [heads, setHeads] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedHead, setSelectedHead] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Party Invoices modal state
    const [showPartyInvoicesModal, setShowPartyInvoicesModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [partyInvoicesAccount, setPartyInvoicesAccount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [partyInvoicesList, setPartyInvoicesList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [partyInvoicesLoading, setPartyInvoicesLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [viewingInvoice, setViewingInvoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [viewingInvoiceItems, setViewingInvoiceItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [viewingInvoiceItemsLoading, setViewingInvoiceItemsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingOriginalName, setEditingOriginalName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editingOriginalBal, setEditingOriginalBal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [editingOriginalBalType, setEditingOriginalBalType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("debit");
    // Form state — ordered: Head Account, Name*, WhatsApp*, Address, Balance, Bal Type
    const [fHead, setFHead] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [fName, setFName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [fWa, setFWa] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [fAddr, setFAddr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [fBal, setFBal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("0");
    const [fBalType, setFBalType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("debit");
    // Validation errors
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // Receive Payment modal state
    const [showReceiveModal, setShowReceiveModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [receiveAccount, setReceiveAccount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [rDate, setRDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["todayISO"])());
    const [rDesc, setRDesc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [rAmount, setRAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [rMethod, setRMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Cash");
    const [receivingSaving, setReceivingSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Invoice modal state
    const [showInvoiceModal, setShowInvoiceModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [invoiceAccount, setInvoiceAccount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [invItems, setInvItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        blankInvItem()
    ]);
    const [invProducts, setInvProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [invNextNum, setInvNextNum] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("SSP001");
    const [invSaving, setInvSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [invAmountPaid, setInvAmountPaid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [invPayMethod, setInvPayMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Cash");
    const [invDiscountType, setInvDiscountType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("pct");
    const [invDiscountValue, setInvDiscountValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [invDescription, setInvDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [invAddToExpense, setInvAddToExpense] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [invGstPct, setInvGstPct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""); // GST (was EST)
    const [invSalesTaxPct, setInvSalesTaxPct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""); // Sales Tax (was BRA/stax)
    const [invBraPct, setInvBraPct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""); // BRA (new)
    const [showHeadsDropdown, setShowHeadsDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingInvoiceId, setEditingInvoiceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingInvoiceOldBalanceDue, setEditingInvoiceOldBalanceDue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [editingInvoiceOldAmountReceived, setEditingInvoiceOldAmountReceived] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Inline product-create modal state (triggered from product picker rows)
    const [productCreate, setProductCreate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Tracks products inserted via the inline modal during this invoice session.
    // Deleted if the user cancels the invoice; cleared (kept) on successful save.
    const pendingProductIdsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [showLedgerModal, setShowLedgerModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ledgerAccount, setLedgerAccount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [ledgerInvoices, setLedgerInvoices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [ledgerCashbook, setLedgerCashbook] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Line items for each invoice in the ledger, keyed by invoice id — lets the
    // ledger show the products that make up each invoice row.
    const [ledgerItemsByInvoice, setLedgerItemsByInvoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [ledgerLoading, setLedgerLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ledgerDateFrom, setLedgerDateFrom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [ledgerDateTo, setLedgerDateTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [ledgerMonth, setLedgerMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [ledgerDownloading, setLedgerDownloading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ledgerPdfRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Invoice print state
    const [invPrinting, setInvPrinting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [partyInvoices, setPartyInvoices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [partyCashbook, setPartyCashbook] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const ledgerAllRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AccountsPage.useMemo[ledgerAllRows]": ()=>{
            if (!ledgerAccount) return [];
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$partyBalance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildLedgerRows"])(ledgerAccount.name, ledgerInvoices, ledgerCashbook);
        }
    }["AccountsPage.useMemo[ledgerAllRows]"], [
        ledgerAccount,
        ledgerInvoices,
        ledgerCashbook
    ]);
    const ledgerDisplayWithBal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AccountsPage.useMemo[ledgerDisplayWithBal]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$ledger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ledgerRowsForDateRange"])(ledgerAllRows, ledgerDateFrom, ledgerDateTo)
    }["AccountsPage.useMemo[ledgerDisplayWithBal]"], [
        ledgerAllRows,
        ledgerDateFrom,
        ledgerDateTo
    ]);
    const ledgerOpeningBefore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AccountsPage.useMemo[ledgerOpeningBefore]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$ledger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openingBalanceBeforeDate"])(ledgerAllRows, ledgerDateFrom)
    }["AccountsPage.useMemo[ledgerOpeningBefore]"], [
        ledgerAllRows,
        ledgerDateFrom
    ]);
    // Credit column is derived from the ledger (invoices + cashbook), NOT from the
    // cached `accounts.balance` column. The cached column has historically drifted
    // from the ledger because some write paths updated one side but not the other,
    // and rate × sqft fractional totals (e.g. 4,102.50 displayed as Rs 4,103) leave
    // hidden sub-rupee residuals. Computing from the ledger here makes the Credit
    // column and the ledger modal's closing balance always agree.
    const effectivePartySigned = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AccountsPage.useMemo[effectivePartySigned]": ()=>{
            const map = new Map();
            for (const a of accounts){
                map.set(a.id, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$partyBalance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computePartySignedBalance"])(a.name, partyInvoices, partyCashbook));
            }
            return map;
        }
    }["AccountsPage.useMemo[effectivePartySigned]"], [
        accounts,
        partyInvoices,
        partyCashbook
    ]);
    const fetchData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AccountsPage.useCallback[fetchData]": async ()=>{
            const [{ data: acctData }, { data: headData }, { data: invData }, { data: cbData }] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("accounts").select("*, head_accounts(*)").order("name"),
                __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("head_accounts").select("*").order("code"),
                __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("invoices").select("*").order("invoice_date", {
                    ascending: true
                }).order("created_at", {
                    ascending: true
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("cashbook").select("*").order("date", {
                    ascending: true
                }).order("created_at", {
                    ascending: true
                })
            ]);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (acctData) setAccounts(acctData);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (headData) setHeads(headData);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (invData) setPartyInvoices(invData);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (cbData) setPartyCashbook(cbData);
        }
    }["AccountsPage.useCallback[fetchData]"], []);
    // One-shot background sweep: when the accounts page loads, walk the in-memory
    // accounts/invoices/cashbook and silently repair any cached `accounts.balance`
    // rows that disagree with the ledger by more than a rupee. New write paths
    // already keep the cache in lock-step with the ledger, so this only matters
    // for historical drift that landed before this fix shipped.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AccountsPage.useEffect": ()=>{
            if (accounts.length === 0 || partyInvoices.length === 0) return;
            let cancelled = false;
            ({
                "AccountsPage.useEffect": async ()=>{
                    for (const a of accounts){
                        if (cancelled) return;
                        const ledgerSigned = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$partyBalance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computePartySignedBalance"])(a.name, partyInvoices, partyCashbook);
                        const cachedSigned = a.bal_type === "credit" ? Number(a.balance) : -Number(a.balance);
                        if (Math.abs(ledgerSigned - cachedSigned) > 0.5) {
                            console.warn(`[accounts] historical drift for ${a.name}: ledger=${ledgerSigned} cached=${cachedSigned} — repairing`);
                            try {
                                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$partyBalanceLive$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syncCachedAccountBalance"])(a.name, ledgerSigned);
                            } catch (e) {
                                console.error(e);
                            }
                        }
                    }
                }
            })["AccountsPage.useEffect"]();
            return ({
                "AccountsPage.useEffect": ()=>{
                    cancelled = true;
                }
            })["AccountsPage.useEffect"];
        // Run once when the data first arrives. Subsequent writes are kept consistent
        // by recomputeCachedBalance in the affected mutation paths.
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["AccountsPage.useEffect"], [
        accounts.length,
        partyInvoices.length,
        partyCashbook.length
    ]);
    const fetchInvProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AccountsPage.useCallback[fetchInvProducts]": async ()=>{
            const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("products").select("id, code, name, sale_price, description, pricing_type");
            if (!data) return;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const arr = data;
            arr.sort({
                "AccountsPage.useCallback[fetchInvProducts]": (a, b)=>{
                    const an = parseInt(String(a.code ?? ""), 10);
                    const bn = parseInt(String(b.code ?? ""), 10);
                    if (Number.isNaN(an) && Number.isNaN(bn)) return String(a.code ?? "").localeCompare(String(b.code ?? ""));
                    if (Number.isNaN(an)) return 1;
                    if (Number.isNaN(bn)) return -1;
                    return an - bn;
                }
            }["AccountsPage.useCallback[fetchInvProducts]"]);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            setInvProducts(arr);
        }
    }["AccountsPage.useCallback[fetchInvProducts]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AccountsPage.useEffect": ()=>{
            fetchData();
            void fetchInvProducts();
            refreshInvNum();
        }
    }["AccountsPage.useEffect"], [
        fetchData,
        fetchInvProducts
    ]);
    async function refreshInvNum() {
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
        ].forEach((row)=>{
            if (row?.invoice_number) {
                const m = row.invoice_number.match(/(\d+)$/);
                if (m) maxNum = Math.max(maxNum, parseInt(m[1], 10));
            }
        });
        setInvNextNum(`SSP${String(maxNum + 1).padStart(3, "0")}`);
    }
    const filtered = accounts.filter((a)=>{
        const matchesSearch = a.name.toLowerCase().includes(search.toLowerCase());
        const matchesHead = !selectedHead || a.head_id === selectedHead;
        return matchesSearch && matchesHead;
    });
    // WhatsApp number: only numbers, exactly 11 digits
    function validatePhone(val) {
        const digits = val.replace(/\D/g, "");
        return digits.slice(0, 11);
    }
    function validate() {
        const errs = {};
        if (!fName.trim()) errs.name = "Account name is required";
        if (!fWa || fWa.length !== 11) errs.wa = "WhatsApp must be 11 digits";
        setErrors(errs);
        return Object.keys(errs).length === 0;
    }
    async function handleSave() {
        if (!validate()) return;
        const payload = {
            name: fName.trim(),
            type: "Client",
            head_id: fHead || null,
            phone: fWa,
            whatsapp: fWa,
            address: fAddr,
            balance: parseFloat(fBal) || 0,
            bal_type: fBalType,
            status: "Active"
        };
        if (editingId) {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("accounts").update(payload).eq("id", editingId);
            if (error) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(error.message, "err");
                return;
            }
            // Cashbook ledger sync — best-effort, must never block the primary save
            try {
                const newAmt = parseFloat(fBal) || 0;
                const newName = fName.trim();
                const renamed = editingOriginalName && editingOriginalName !== newName;
                // Keep the original opening-balance row's name/description in sync if the
                // account was renamed, so the ledger groups under the current name.
                if (renamed) {
                    const oldDesc = `Opening balance — ${editingOriginalName}`;
                    const { data: existingCbRows } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("cashbook").select("id").eq("description", oldDesc).eq("account_name", editingOriginalName).limit(1);
                    const existingCb = Array.isArray(existingCbRows) ? existingCbRows[0] : null;
                    if (existingCb) {
                        await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("cashbook").update({
                            account_name: newName,
                            description: `Opening balance — ${newName}`
                        }).eq("id", existingCb.id);
                    }
                }
                // Compute signed delta (credit = +, debit = -). If non-zero, log a
                // ledger-only "Balance adjustment" entry — excluded from Cash in Hand.
                const oldSigned = (editingOriginalBalType === "credit" ? 1 : -1) * editingOriginalBal;
                const newSigned = (fBalType === "credit" ? 1 : -1) * newAmt;
                const delta = newSigned - oldSigned;
                if (delta !== 0) {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("cashbook").insert({
                        type: delta > 0 ? "in" : "out",
                        description: `Balance adjustment — ${newName} (was ${editingOriginalBalType === "credit" ? "Cr" : "Dr"} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(editingOriginalBal)}, now ${fBalType === "credit" ? "Cr" : "Dr"} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(newAmt)})`,
                        amount: Math.abs(delta),
                        date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["todayISO"])(),
                        account_name: newName,
                        method: "Adjustment",
                        reference: ""
                    });
                }
            } catch (e) {
                console.error("Cashbook sync failed (non-fatal):", e);
            }
            // Recompute the cached column from the ledger so the form-entered balance,
            // the adjustment cashbook row, and the cached column all settle to the
            // same whole-rupee value.
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$partyBalanceLive$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recomputeCachedBalance"])(fName.trim());
            } catch (e) {
                console.error("recompute failed (non-fatal):", e);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Account updated", "ok");
        } else {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("accounts").insert(payload);
            if (error) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(error.message, "err");
                return;
            }
            // Create a cashbook entry for the opening balance so it appears in the
            // ledger, in Cash in Hand totals, and is not lost when transactions start.
            const openingAmt = parseFloat(fBal) || 0;
            if (openingAmt > 0) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("cashbook").insert({
                    // credit opening (party owes us) = money "in"; debit (we owe them) = money "out"
                    type: fBalType === "credit" ? "in" : "out",
                    description: `Opening balance — ${fName.trim()}`,
                    amount: openingAmt,
                    date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["todayISO"])(),
                    account_name: fName.trim(),
                    method: "Cash",
                    reference: ""
                });
            }
            // Reseed the cached balance from the ledger (the opening-balance row).
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$partyBalanceLive$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recomputeCachedBalance"])(fName.trim());
            } catch (e) {
                console.error("recompute failed (non-fatal):", e);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Account saved", "ok");
        }
        setShowModal(false);
        resetForm();
        fetchData();
    }
    function openEdit(a) {
        setEditingId(a.id);
        setEditingOriginalName(a.name);
        setEditingOriginalBal(Number(a.balance ?? 0) || 0);
        setEditingOriginalBalType(a.bal_type);
        setFHead(a.head_id || "");
        setFName(a.name);
        setFWa(a.whatsapp || a.phone || "");
        setFAddr(a.address || "");
        setFBal(String(a.balance ?? 0));
        setFBalType(a.bal_type);
        setErrors({});
        setShowModal(true);
    }
    async function handleDelete(id) {
        const account = accounts.find((a)=>a.id === id);
        if (!account) return;
        // Pre-count linked records so the confirmation lists what will be removed.
        const [{ data: invList }, { data: cbList }, { data: quoteList }, { data: qInvList }] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("invoices").select("id, invoice_number, grand_total").eq("client_name", account.name),
            __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("cashbook").select("id, amount, type").eq("account_name", account.name),
            __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("quotations").select("id, quote_number, grand_total").eq("party_name", account.name),
            __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("quick_invoices").select("id, invoice_number, grand_total").eq("client_name", account.name)
        ]);
        const invCount = invList?.length ?? 0;
        const cbCount = cbList?.length ?? 0;
        const quoteCount = quoteList?.length ?? 0;
        const qInvCount = qInvList?.length ?? 0;
        const totalLinked = invCount + cbCount + quoteCount + qInvCount;
        const detailLines = [];
        if (invCount) detailLines.push(`• ${invCount} invoice${invCount === 1 ? "" : "s"} (and their items)`);
        if (qInvCount) detailLines.push(`• ${qInvCount} walk-in invoice${qInvCount === 1 ? "" : "s"} (and their items)`);
        if (cbCount) detailLines.push(`• ${cbCount} cashbook entr${cbCount === 1 ? "y" : "ies"}`);
        if (quoteCount) detailLines.push(`• ${quoteCount} quotation${quoteCount === 1 ? "" : "s"} (and their items)`);
        const ok = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$ConfirmModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["confirmDialog"])({
            title: "Delete account?",
            message: totalLinked > 0 ? `This will permanently delete "${account.name}" and every record linked to this party. This cannot be undone.` : `Delete "${account.name}"? This cannot be undone.`,
            details: detailLines.length ? `Linked records that will also be deleted:\n${detailLines.join("\n")}` : undefined,
            confirmText: totalLinked > 0 ? "Delete everything" : "Delete account",
            tone: "danger"
        });
        if (!ok) return;
        // Cascade — invoices/cashbook/quotations/quick_invoices don't have FK to
        // account, so we delete them by client_name / account_name / party_name
        // match. Without this, recreating a same-named account inherits old
        // ledger rows from before the delete.
        const invoiceIds = (invList ?? []).map((r)=>r.id);
        if (invoiceIds.length) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("invoice_items").delete().in("invoice_id", invoiceIds);
            await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("invoices").delete().in("id", invoiceIds);
        }
        const qInvoiceIds = (qInvList ?? []).map((r)=>r.id);
        if (qInvoiceIds.length) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("quick_invoice_items").delete().in("quick_invoice_id", qInvoiceIds);
            await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("quick_invoices").delete().in("id", qInvoiceIds);
        }
        const quoteIds = (quoteList ?? []).map((r)=>r.id);
        if (quoteIds.length) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("quotation_items").delete().in("quotation_id", quoteIds);
            await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("quotations").delete().in("id", quoteIds);
        }
        if (cbCount) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("cashbook").delete().eq("account_name", account.name);
        }
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("accounts").delete().eq("id", id);
        if (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(error.message, "err");
            return;
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$activityLog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logActivity"])({
            action: "delete",
            entityType: "account",
            entityId: id,
            title: "Account Deleted",
            subtitle: account.name,
            amount: Number(account.balance ?? 0) || null,
            metadata: {
                head_id: account.head_id,
                type: account.type,
                cascaded: {
                    invoices: invCount,
                    cashbook: cbCount,
                    quotations: quoteCount
                }
            }
        });
        const summary = totalLinked > 0 ? `Account deleted along with ${totalLinked} linked record${totalLinked === 1 ? "" : "s"}` : "Account deleted";
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(summary, "ok");
        fetchData();
    }
    function openInvoiceModal(account) {
        setInvoiceAccount(account);
        setInvItems([
            blankInvItem()
        ]);
        setInvAmountPaid("");
        setInvPayMethod("Cash");
        setInvDiscountType("pct");
        setInvDiscountValue("");
        setInvDescription("");
        setInvAddToExpense(false);
        setInvGstPct("");
        setInvSalesTaxPct("");
        setInvBraPct("");
        setEditingInvoiceId(null);
        setEditingInvoiceOldBalanceDue(0);
        setEditingInvoiceOldAmountReceived(0);
        refreshInvNum();
        setShowInvoiceModal(true);
    }
    async function openEditInvoiceModal(inv) {
        const account = accounts.find((a)=>a.name === inv.client_name);
        if (!account) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Party account not found", "err");
            return;
        }
        const { data: itemRows, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("invoice_items").select("*").eq("invoice_id", inv.id).order("id", {
            ascending: true
        });
        if (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(error.message, "err");
            return;
        }
        const mappedItems = (itemRows ?? []).map((it)=>{
            const productName = String(it.category || "");
            const dbProd = invProducts.find((p)=>p.name === productName);
            const pricingType = dbProd?.pricing_type === "standalone" ? "standalone" : "sqft";
            return calcInvItem({
                lineType: "product",
                product: productName,
                laborType: "",
                description: String(it.description ?? ""),
                width: Number(it.width),
                height: Number(it.height),
                sqft: Number(it.sqft),
                rate: Number(it.rate),
                qty: Number(it.qty),
                total: Number(it.amount),
                pricingType
            });
        });
        // Close the party invoices modal first so the edit modal opens on top
        closePartyInvoicesModal();
        setInvoiceAccount(account);
        setInvItems(mappedItems.length > 0 ? mappedItems : [
            blankInvItem()
        ]);
        setInvAmountPaid(inv.amount_received > 0 ? String(inv.amount_received) : "");
        setInvPayMethod(inv.payment_method || "Cash");
        setInvDiscountType(inv.discount_type ?? "pct");
        setInvDiscountValue(inv.discount_value > 0 ? String(inv.discount_value) : "");
        setInvDescription(inv.job_notes || "");
        setInvAddToExpense(false);
        setInvGstPct(inv.gst_pct > 0 ? String(inv.gst_pct) : "");
        setInvSalesTaxPct(inv.stax_pct > 0 ? String(inv.stax_pct) : "");
        setInvBraPct(inv.bra_pct > 0 ? String(inv.bra_pct) : "");
        setInvNextNum(inv.invoice_number);
        setEditingInvoiceId(inv.id);
        setEditingInvoiceOldBalanceDue(inv.balance_due);
        setEditingInvoiceOldAmountReceived(inv.amount_received);
        setShowInvoiceModal(true);
    }
    function applyLedgerMonth(ym) {
        if (!ym) {
            setLedgerDateFrom("");
            setLedgerDateTo("");
            return;
        }
        const [y, m] = ym.split("-");
        const yi = parseInt(y, 10);
        const mi = parseInt(m, 10);
        const from = `${y}-${m}-01`;
        const lastD = new Date(yi, mi, 0).getDate();
        const to = `${y}-${m}-${String(lastD).padStart(2, "0")}`;
        setLedgerDateFrom(from);
        setLedgerDateTo(to);
    }
    async function openLedgerModal(account) {
        setLedgerAccount(account);
        setShowLedgerModal(true);
        setLedgerLoading(true);
        setLedgerDateFrom("");
        setLedgerDateTo("");
        setLedgerMonth("");
        setLedgerInvoices([]);
        setLedgerCashbook([]);
        setLedgerItemsByInvoice({});
        const [{ data: invData, error: invErr }, { data: cbData, error: cbErr }] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("invoices").select("*").eq("client_name", account.name).eq("is_walk_in", false).order("invoice_date", {
                ascending: true
            }).order("created_at", {
                ascending: true
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("cashbook").select("*").ilike("account_name", account.name).order("date", {
                ascending: true
            }).order("created_at", {
                ascending: true
            })
        ]);
        if (invErr) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(invErr.message, "err");
        if (cbErr) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(cbErr.message, "err");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (invData) setLedgerInvoices(invData);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (cbData) setLedgerCashbook(cbData);
        // Fetch the line items for every invoice in one query, then group by
        // invoice id so each ledger invoice row can list its products.
        const invoiceIds = (invData ?? []).map((i)=>i.id);
        if (invoiceIds.length) {
            const { data: itemData, error: itemErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("invoice_items").select("*").in("invoice_id", invoiceIds).order("id", {
                ascending: true
            });
            if (itemErr) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(itemErr.message, "err");
            if (itemData) {
                const grouped = {};
                for (const it of itemData){
                    (grouped[it.invoice_id] ||= []).push(it);
                }
                setLedgerItemsByInvoice(grouped);
            }
        }
        setLedgerLoading(false);
    }
    function closeLedgerModal() {
        setShowLedgerModal(false);
        setLedgerAccount(null);
        setLedgerInvoices([]);
        setLedgerCashbook([]);
        setLedgerItemsByInvoice({});
        setLedgerDateFrom("");
        setLedgerDateTo("");
        setLedgerMonth("");
    }
    async function openPartyInvoicesModal(a) {
        setPartyInvoicesAccount(a);
        setShowPartyInvoicesModal(true);
        setPartyInvoicesLoading(true);
        setPartyInvoicesList([]);
        setViewingInvoice(null);
        setViewingInvoiceItems([]);
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("invoices").select("*").eq("client_name", a.name).eq("is_walk_in", false).order("invoice_date", {
            ascending: false
        }).order("created_at", {
            ascending: false
        });
        if (error) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(error.message, "err");
        if (data) setPartyInvoicesList(data);
        setPartyInvoicesLoading(false);
    }
    function closePartyInvoicesModal() {
        setShowPartyInvoicesModal(false);
        setPartyInvoicesAccount(null);
        setPartyInvoicesList([]);
        setViewingInvoice(null);
        setViewingInvoiceItems([]);
    }
    async function openInvoiceDetail(inv) {
        setViewingInvoice(inv);
        setViewingInvoiceItemsLoading(true);
        setViewingInvoiceItems([]);
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("invoice_items").select("*").eq("invoice_id", inv.id).order("id", {
            ascending: true
        });
        if (error) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(error.message, "err");
        if (data) setViewingInvoiceItems(data);
        setViewingInvoiceItemsLoading(false);
    }
    // ── Invoice print helpers ──────────────────────────────────────────────────
    function scheduleAfterInvPrint(cleanup) {
        let ran = false;
        const run = ()=>{
            if (ran) return;
            ran = true;
            window.removeEventListener("afterprint", run);
            cleanup();
        };
        window.addEventListener("afterprint", run);
        window.setTimeout(run, 3500);
    }
    function applyInvPrintMode(type) {
        const a4El = document.querySelector(".inv-a4-print-only");
        const thEl = document.querySelector(".inv-thermal-print-only");
        if (type === "thermal") {
            if (a4El) a4El.style.setProperty("display", "none", "important");
            if (thEl) thEl.style.setProperty("display", "block", "important");
            const el = document.createElement("style");
            el.id = "__inv_thermal_page_style";
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
            el.id = "__inv_a4_page_style";
            el.textContent = "@page { size: A4 portrait; margin: 12mm 14mm; }";
            document.head.appendChild(el);
        }
    }
    function restoreInvPrintMode() {
        document.getElementById("__inv_thermal_page_style")?.remove();
        document.getElementById("__inv_a4_page_style")?.remove();
        document.body.classList.remove("thermal-mode");
        const a4El = document.querySelector(".inv-a4-print-only");
        const thEl = document.querySelector(".inv-thermal-print-only");
        // Remove the inline override — CSS class (.inv-a4/thermal-print-only { display: none }) takes back over
        if (a4El) {
            a4El.style.removeProperty("display");
            a4El.style.removeProperty("flex-direction");
            a4El.style.removeProperty("min-height");
        }
        if (thEl) thEl.style.removeProperty("display");
    }
    async function printViewingInvoice(type) {
        if (!viewingInvoice || invPrinting) return;
        setInvPrinting(true);
        try {
            applyInvPrintMode(type);
            scheduleAfterInvPrint(()=>{
                restoreInvPrintMode();
                setInvPrinting(false);
            });
            window.print();
        } catch  {
            restoreInvPrintMode();
            setInvPrinting(false);
        }
    }
    async function downloadInvoicePdf() {
        if (!viewingInvoice || invPrinting) return;
        setInvPrinting(true);
        try {
            const a4El = document.querySelector(".inv-a4-print-only");
            if (!a4El) {
                setInvPrinting(false);
                return;
            }
            // Temporarily make visible for capture — flex column with A4 min-height
            // matches the print layout so the footer sits at the bottom of the page.
            a4El.style.setProperty("display", "flex", "important");
            a4El.style.setProperty("flex-direction", "column", "important");
            a4El.style.setProperty("min-height", "1031px", "important"); // 273mm @ 96dpi
            a4El.style.position = "fixed";
            a4El.style.top = "-9999px";
            a4El.style.left = "0";
            a4El.style.width = "794px"; // A4 width at 96dpi
            await new Promise((r)=>setTimeout(r, 120));
            const canvas = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$html2canvas$2f$dist$2f$html2canvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(a4El, {
                scale: 2,
                useCORS: true,
                backgroundColor: "#ffffff"
            });
            a4El.style.removeProperty("display");
            a4El.style.removeProperty("flex-direction");
            a4El.style.removeProperty("min-height");
            a4El.style.position = "";
            a4El.style.top = "";
            a4El.style.left = "";
            a4El.style.width = "";
            const imgData = canvas.toDataURL("image/jpeg", 0.95);
            const pdf = new __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                orientation: "portrait",
                unit: "mm",
                format: "a4"
            });
            const pageW = pdf.internal.pageSize.getWidth();
            const pageH = pdf.internal.pageSize.getHeight();
            const imgW = pageW;
            const imgH = canvas.height * pageW / canvas.width;
            let y = 0;
            let remaining = imgH;
            let first = true;
            while(remaining > 0){
                if (!first) pdf.addPage();
                pdf.addImage(imgData, "JPEG", 0, -y, imgW, imgH);
                y += pageH;
                remaining -= pageH;
                first = false;
            }
            const clientName = viewingInvoice.client_name.replace(/[^a-zA-Z0-9 ]/g, "").trim();
            const invNum = viewingInvoice.invoice_number;
            const date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(viewingInvoice.invoice_date).replace(/\s+/g, "-");
            pdf.save(`${clientName} ${invNum} ${date}.pdf`);
        } catch (e) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("PDF download failed", "err");
            console.error(e);
        } finally{
            setInvPrinting(false);
        }
    }
    // ─────────────────────────────────────────────────────────────────────────
    const handleProductCreated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AccountsPage.useCallback[handleProductCreated]": async (newProduct)=>{
            pendingProductIdsRef.current.push(newProduct.id);
            await fetchInvProducts();
            const idx = productCreate?.idx;
            setProductCreate(null);
            if (typeof idx !== "number") return;
            setInvItems({
                "AccountsPage.useCallback[handleProductCreated]": (prev)=>{
                    const items = [
                        ...prev
                    ];
                    const cur = items[idx];
                    if (!cur) return prev;
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
                    items[idx] = calcInvItem(item);
                    return items;
                }
            }["AccountsPage.useCallback[handleProductCreated]"]);
        }
    }["AccountsPage.useCallback[handleProductCreated]"], [
        fetchInvProducts,
        productCreate
    ]);
    function updateInvItem(idx, field, value) {
        setInvItems((prev)=>{
            const items = [
                ...prev
            ];
            let item = {
                ...items[idx],
                [field]: value
            };
            if (field === "product") {
                const dbProd = invProducts.find((p)=>p.name === value);
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
            items[idx] = calcInvItem(item);
            return items;
        });
    }
    async function closeInvoiceModal() {
        const pending = pendingProductIdsRef.current;
        if (pending.length > 0) {
            pendingProductIdsRef.current = [];
            await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("products").delete().in("id", pending);
            void fetchInvProducts();
        }
        setShowInvoiceModal(false);
        setInvoiceAccount(null);
        setInvAmountPaid("");
        setInvPayMethod("Cash");
        setInvDiscountType("pct");
        setInvDiscountValue("");
        setInvDescription("");
        setInvAddToExpense(false);
        setInvGstPct("");
        setInvSalesTaxPct("");
        setInvBraPct("");
        setEditingInvoiceId(null);
        setEditingInvoiceOldBalanceDue(0);
        setEditingInvoiceOldAmountReceived(0);
    }
    async function handleSaveInvoice(printType) {
        if (!invoiceAccount) return;
        const subtotal = invItems.reduce((s, it)=>s + it.total, 0);
        const rawDiscount = parseFloat(String(invDiscountValue).replace(/,/g, "")) || 0;
        const discountAmount = invDiscountType === "pct" ? Math.min(Math.max(0, rawDiscount), 100) * (subtotal / 100) : Math.min(Math.max(0, rawDiscount), subtotal);
        const afterDiscount = Math.max(0, subtotal - discountAmount);
        const gstPct = Math.max(0, parseFloat(invGstPct) || 0);
        const salesTaxPct = Math.max(0, parseFloat(invSalesTaxPct) || 0);
        const braPct = Math.max(0, parseFloat(invBraPct) || 0);
        const gstAmount = Math.round(afterDiscount * gstPct / 100 * 100) / 100;
        const salesTaxAmount = Math.round(afterDiscount * salesTaxPct / 100 * 100) / 100;
        const braAmount = Math.round(afterDiscount * braPct / 100 * 100) / 100;
        const grandTotal = Math.max(0, Math.round((afterDiscount + gstAmount + salesTaxAmount + braAmount) * 100) / 100);
        if (invItems.some((it)=>Number(it.qty) < 1)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Each item must have a quantity of at least 1", "err");
            return;
        }
        if (grandTotal <= 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Add at least one item with a total", "err");
            return;
        }
        setInvSaving(true);
        // ── EDIT MODE ──────────────────────────────────────────────────────────────
        if (editingInvoiceId) {
            const amountReceived = editingInvoiceOldAmountReceived;
            const balanceDue = Math.round((grandTotal - amountReceived) * 100) / 100;
            const paymentStatus = balanceDue <= 0 ? "paid" : amountReceived > 0 ? "partial" : "unpaid";
            // 1. Update the invoices record
            const { error: invUpdErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("invoices").update({
                subtotal,
                grand_total: grandTotal,
                balance_due: balanceDue,
                payment_status: paymentStatus,
                discount_type: invDiscountType,
                discount_value: parseFloat(invDiscountValue) || 0,
                discount_amount: discountAmount,
                gst_pct: gstPct,
                gst_amount: gstAmount,
                stax_pct: salesTaxPct,
                stax_amount: salesTaxAmount,
                bra_pct: braPct,
                bra_amount: braAmount,
                job_notes: invDescription.trim()
            }).eq("id", editingInvoiceId);
            if (invUpdErr) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(invUpdErr.message, "err");
                setInvSaving(false);
                return;
            }
            // 2. Replace invoice_items
            await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("invoice_items").delete().eq("invoice_id", editingInvoiceId);
            await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("invoice_items").insert(invItems.map((it)=>({
                    invoice_id: editingInvoiceId,
                    category: it.lineType === "labor" ? "Labor" : it.product,
                    description: it.lineType === "labor" ? it.laborType : it.description.trim(),
                    width: it.width,
                    height: it.height,
                    sqft: it.sqft,
                    rate: it.rate,
                    qty: it.qty,
                    amount: it.total
                })));
            // 3. Sync quick_invoices / quick_invoice_items (best-effort)
            const { data: qiRows } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("quick_invoices").select("id").eq("invoice_number", invNextNum).limit(1);
            const qiRow = Array.isArray(qiRows) ? qiRows[0] : null;
            if (qiRow) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("quick_invoices").update({
                    grand_total: grandTotal
                }).eq("id", qiRow.id);
                await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("quick_invoice_items").delete().eq("quick_invoice_id", qiRow.id);
                await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("quick_invoice_items").insert(invItems.map((it)=>({
                        quick_invoice_id: qiRow.id,
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
            // 4. Recompute the cached `accounts.balance` from the ledger so it stays
            //    in lock-step with the Credit column (which is also ledger-derived).
            //    Doing this from ground truth — instead of incrementing the cached
            //    column by the balance_due delta — means the cache cannot drift even
            //    if a previous write left it stale.
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$partyBalanceLive$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recomputeCachedBalance"])(invoiceAccount.name);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(`Invoice ${invNextNum} updated!`, "ok");
            pendingProductIdsRef.current = [];
            closeInvoiceModal();
            setInvSaving(false);
            fetchData();
            return;
        }
        // ── CREATE MODE ────────────────────────────────────────────────────────────
        const previousSigned = effectivePartySigned.get(invoiceAccount.id) ?? 0;
        // Total the party owes including this new bill (previousSigned > 0 = they owe us)
        const totalDueSave = Math.max(0, Math.round((previousSigned + grandTotal) * 100) / 100);
        const paidParsed = parseFloat(String(invAmountPaid).replace(/,/g, "")) || 0;
        // Payment can cover previous balance + new bill, not just the new bill
        const amountReceived = Math.min(Math.max(0, paidParsed), totalDueSave);
        // balance_due = new bill minus payment received (can be negative = extra paid off old balance)
        const balanceDue = Math.round((grandTotal - amountReceived) * 100) / 100;
        const paymentStatus = totalDueSave - amountReceived <= 0 ? "paid" : amountReceived > 0 ? "partial" : "unpaid";
        const today = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["todayISO"])();
        // Insert `invoices` FIRST — the server assigns invoice_number atomically
        // (with retry on collision, see createInvoiceWithUniqueNumber in
        // app/api/db/route.ts), so this is the single source of truth for the
        // number. `invNextNum` on screen is only a preview before this resolves.
        const { data: invData, error: invErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("invoices").insert({
            invoice_number: invNextNum,
            client_name: invoiceAccount.name,
            invoice_date: today,
            subtotal,
            grand_total: grandTotal,
            previous_balance: Math.max(0, previousSigned),
            amount_received: amountReceived,
            balance_due: balanceDue,
            payment_status: paymentStatus,
            payment_method: invPayMethod,
            discount_type: invDiscountType,
            discount_value: parseFloat(invDiscountValue) || 0,
            discount_amount: discountAmount,
            gst_pct: gstPct,
            gst_amount: gstAmount,
            stax_pct: salesTaxPct,
            stax_amount: salesTaxAmount,
            bra_pct: braPct,
            bra_amount: braAmount,
            job_notes: invDescription.trim()
        }).select().single();
        if (invErr) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(invErr.message, "err");
            setInvSaving(false);
            return;
        }
        const confirmedNum = invData.invoice_number;
        await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("invoice_items").insert(invItems.map((it)=>({
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
        const { data: qiData } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("quick_invoices").insert({
            invoice_number: confirmedNum,
            client_name: invoiceAccount.name,
            grand_total: grandTotal
        }).select().single();
        if (qiData) await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("quick_invoice_items").insert(invItems.map((it)=>({
                quick_invoice_id: qiData.id,
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
        if (amountReceived > 0) {
            const { error: cbInvErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("cashbook").insert({
                type: "in",
                description: `Payment on invoice ${confirmedNum} — ${invoiceAccount.name}`,
                amount: amountReceived,
                date: today,
                account_name: invoiceAccount.name,
                method: invPayMethod,
                reference: invData.id
            });
            if (cbInvErr) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(cbInvErr.message, "err");
                setInvSaving(false);
                return;
            }
        }
        // Recompute the cached `accounts.balance` from the ledger (invoice +
        // optional cashbook payment row are now in the DB) so it agrees with the
        // ledger-derived Credit column.
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$partyBalanceLive$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recomputeCachedBalance"])(invoiceAccount.name);
        // If flagged, create a PENDING expense (amount 0, no cash entry yet) linked
        // to this invoice so it appears under Expense → Project Expense, then send
        // the user there to fill in the amounts.
        let goToExpense = false;
        if (invAddToExpense) {
            const { error: expErr } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$expenses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createExpense"])({
                category: "",
                description: `${confirmedNum} · ${invoiceAccount.name}`,
                amount: 0,
                method: invPayMethod,
                date: today,
                invoiceId: invData.id,
                invoiceNumber: confirmedNum
            });
            if (expErr) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(expErr, "err");
                setInvSaving(false);
                return;
            }
            goToExpense = true;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(`Invoice ${confirmedNum} saved!`, "ok");
        if (printType && invData) {
            // Populate the print template with the saved invoice before closing
            setViewingInvoice(invData);
            setViewingInvoiceItems(invItems.map((it)=>({
                    id: "",
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
            pendingProductIdsRef.current = [];
            closeInvoiceModal();
            setInvSaving(false);
            fetchData();
            refreshInvNum();
            // Give React one tick to render the template, then print
            await new Promise((r)=>setTimeout(r, 150));
            await printViewingInvoice(printType);
        } else {
            pendingProductIdsRef.current = [];
            closeInvoiceModal();
            setInvSaving(false);
            fetchData();
            refreshInvNum();
        }
        if (goToExpense) router.push("/expense");
    }
    function resetForm() {
        setEditingId(null);
        setEditingOriginalName("");
        setEditingOriginalBal(0);
        setEditingOriginalBalType("debit");
        setFHead("");
        setFName("");
        setFWa("");
        setFAddr("");
        setFBal("0");
        setFBalType("debit");
        setErrors({});
    }
    function openReceiveModal(account) {
        setReceiveAccount(account);
        setRDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["todayISO"])());
        setRDesc("");
        setRAmount("");
        setRMethod("Cash");
        setShowReceiveModal(true);
    }
    async function openPartyLastTransactionWhatsApp(account) {
        // Re-query the ledger so the WhatsApp message reflects the DB right now,
        // not whatever stale `partyInvoices`/`partyCashbook` happen to be in memory.
        // Auto-repair the cached `accounts.balance` if it has drifted from the ledger
        // (otherwise the Credit column on this page would still show the stale value).
        const fresh = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$partyBalanceLive$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPartySignedBalance"])(account.name);
        if (fresh.drift > 0.5) {
            console.warn(`[accounts] cached balance drift for ${account.name}: ledger=${fresh.signed} cached=${fresh.cachedSigned} — repairing`);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$partyBalanceLive$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syncCachedAccountBalance"])(account.name, fresh.signed);
        }
        const rows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$partyBalance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildLedgerRows"])(account.name, fresh.invoices, fresh.cashbook);
        if (rows.length === 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("No transactions for this party yet", "err");
            return;
        }
        const last = rows[rows.length - 1];
        const remainingSigned = fresh.signed;
        // If last transaction is an invoice, enrich the message with full invoice details + line items
        let invoiceExtra;
        if (last.debit > 0) {
            const matchedInv = partyInvoices.find((inv)=>inv.invoice_number === last.doc && inv.client_name === account.name);
            if (matchedInv) {
                const { data: itemRows } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("invoice_items").select("category, description, width, height, sqft, rate, qty, amount").eq("invoice_id", matchedInv.id).order("id", {
                    ascending: true
                });
                invoiceExtra = {
                    grandTotal: Number(matchedInv.grand_total),
                    amountReceived: Number(matchedInv.amount_received),
                    paymentStatus: matchedInv.payment_status,
                    description: [
                        matchedInv.job_notes,
                        matchedInv.job_name
                    ].map((s)=>String(s || "").trim()).find(Boolean),
                    items: (itemRows ?? []).map((r)=>({
                            category: String(r.category ?? ""),
                            description: String(r.description ?? ""),
                            width: Number(r.width),
                            height: Number(r.height),
                            sqft: Number(r.sqft),
                            rate: Number(r.rate),
                            qty: Number(r.qty),
                            amount: Number(r.amount)
                        }))
                };
            }
        }
        const msg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$whatsappWaMe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildLastTransactionWhatsAppMessage"])(account.name, last, remainingSigned, invoiceExtra);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$whatsappWaMe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openWhatsAppNewTab"])(account.whatsapp || account.phone || "", msg)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Add a valid WhatsApp number for this party", "err");
        }
    }
    function sendViewingInvoiceWhatsApp() {
        if (!viewingInvoice || !partyInvoicesAccount) return;
        const msg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$whatsappWaMe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildInvoiceShareWhatsAppMessage"])({
            invoiceNumber: viewingInvoice.invoice_number,
            clientName: viewingInvoice.client_name,
            invoiceDate: viewingInvoice.invoice_date,
            grandTotal: viewingInvoice.grand_total,
            amountReceived: viewingInvoice.amount_received,
            balanceDue: viewingInvoice.balance_due,
            paymentStatus: viewingInvoice.payment_status,
            invoiceDescription: viewingInvoice.job_notes || undefined,
            items: viewingInvoiceItems.map((it)=>({
                    category: it.category || "",
                    description: it.description || undefined,
                    width: Number(it.width) || 0,
                    height: Number(it.height) || 0,
                    sqft: Number(it.sqft) || 0,
                    rate: Number(it.rate) || 0,
                    qty: Number(it.qty) || 1,
                    amount: Number(it.amount) || 0
                }))
        });
        const phone = partyInvoicesAccount.whatsapp || partyInvoicesAccount.phone || "";
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$whatsappWaMe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openWhatsAppNewTab"])(phone, msg)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("WhatsApp opened", "ok");
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$whatsappWaMe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openWhatsAppMessageOnlyNewTab"])(msg);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("WhatsApp opened — pick a contact to send", "ok");
        }
    }
    async function handleReceivePayment() {
        const amtRaw = parseFloat(rAmount);
        if (!amtRaw || amtRaw <= 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Enter a valid amount", "err");
            return;
        }
        if (!receiveAccount) return;
        if (!rMethod || !rMethod.trim()) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Please select a payment method", "err");
            return;
        }
        if (!paymentMethods.some((m)=>m.name === rMethod)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Select a valid payment method", "err");
            return;
        }
        // Business operates in whole rupees. Round at write time so the cashbook row,
        // the recomputed balance, and the WhatsApp message all use the identical
        // integer — no off-by-rupee drift between the Credit column and the ledger.
        const amt = Math.round(amtRaw);
        setReceivingSaving(true);
        // Re-query the ledger BEFORE we insert the payment. This pinning of the
        // pre-payment balance is what the WhatsApp message will say, and we want
        // it to match the Credit column the user just looked at. Auto-repair the
        // cached `accounts.balance` if it has drifted from the ledger.
        const preFresh = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$partyBalanceLive$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPartySignedBalance"])(receiveAccount.name);
        if (preFresh.drift > 0.5) {
            console.warn(`[accounts] cached balance drift for ${receiveAccount.name}: ledger=${preFresh.signed} cached=${preFresh.cachedSigned} — repairing`);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$partyBalanceLive$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syncCachedAccountBalance"])(receiveAccount.name, preFresh.signed);
        }
        // Create cashbook entry — type "in" = cash received → increases cash in hand
        // Always guarantee description contains "Payment received from {name}" so
        // the ledger regex /payment/i always classifies this as a credit (balance decreases).
        const receiveDesc = rDesc.trim() ? `Payment received from ${receiveAccount.name} — ${rDesc.trim()}` : `Payment received from ${receiveAccount.name}`;
        const { error: cbError } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("cashbook").insert({
            type: "in",
            description: receiveDesc,
            amount: amt,
            date: rDate,
            account_name: receiveAccount.name,
            method: rMethod,
            reference: ""
        });
        if (cbError) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(cbError.message, "err");
            setReceivingSaving(false);
            return;
        }
        // Re-derive the post-payment balance from the ledger (now that the cashbook
        // row has landed) and write the cached column from the freshly computed value.
        const postSigned = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$partyBalanceLive$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recomputeCachedBalance"])(receiveAccount.name);
        const party = receiveAccount;
        const descTrim = rDesc.trim();
        const msg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$whatsappWaMe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildPaymentReceivedWhatsAppMessage"])({
            partyName: party.name,
            amount: amt,
            dateISO: rDate,
            method: rMethod,
            description: descTrim || undefined,
            remainingBalanceSigned: postSigned
        });
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$whatsappWaMe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openWhatsAppNewTab"])(party.whatsapp || party.phone || "", msg)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Payment saved. Add a valid WhatsApp number on the party to open chat.", "err");
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Payment received — WhatsApp opened", "ok");
        }
        setShowReceiveModal(false);
        setReceiveAccount(null);
        setReceivingSaving(false);
        fetchData();
    }
    async function downloadLedgerPdf() {
        if (ledgerDownloading || ledgerLoading || !ledgerAccount) return;
        const node = ledgerPdfRef.current;
        if (!node) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Report layout not ready", "err");
            return;
        }
        setLedgerDownloading(true);
        const prevDisplay = node.style.display;
        const prevPosition = node.style.position;
        const prevLeft = node.style.left;
        const prevTop = node.style.top;
        const prevWidth = node.style.width;
        const prevFlexDir = node.style.flexDirection;
        const prevMinHeight = node.style.minHeight;
        // Flex column + A4 content-area min-height (273mm @ 96dpi ≈ 1031px)
        // pins the footer to the bottom of the page even with few entries.
        node.style.setProperty("display", "flex", "important");
        node.style.setProperty("flex-direction", "column", "important");
        node.style.setProperty("min-height", "1031px", "important");
        node.style.position = "absolute";
        node.style.left = "-99999px";
        node.style.top = "0";
        node.style.width = "210mm";
        try {
            await new Promise((r)=>setTimeout(r, 80));
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
                pdf.addImage(imgData, "PNG", 0, -pageHeight * i, imgWidth, imgHeight);
            }
            const safe = ledgerAccount.name.replace(/[/\\?%*:|"<>]/g, "-").trim().slice(0, 80) || "Party";
            pdf.save(`Ledger-${safe}.pdf`);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Ledger PDF downloaded", "ok");
        } catch (e) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(e instanceof Error ? e.message : "Could not create PDF", "err");
        } finally{
            node.style.removeProperty("display");
            node.style.removeProperty("flex-direction");
            node.style.removeProperty("min-height");
            node.style.display = prevDisplay;
            node.style.flexDirection = prevFlexDir;
            node.style.minHeight = prevMinHeight;
            node.style.position = prevPosition;
            node.style.left = prevLeft;
            node.style.top = prevTop;
            node.style.width = prevWidth;
            setLedgerDownloading(false);
        }
    }
    const inputStyle = {
        borderColor: "var(--gray-200)",
        background: "var(--gray-50)",
        color: "var(--gray-900)"
    };
    const errorInputStyle = {
        borderColor: "var(--red)",
        background: "var(--red-light)",
        color: "var(--gray-900)"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "no-print animate-fade-in",
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
                                        children: "Accounts"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 1399,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs mt-0.5",
                                        style: {
                                            color: "var(--gray-800)"
                                        },
                                        children: "Account ledger management"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 1400,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                lineNumber: 1398,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 items-center flex-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-[9px] text-[12.5px] font-semibold cursor-pointer bg-white border-[1.5px] transition-all",
                                        style: {
                                            borderColor: "var(--gray-200)",
                                            color: "var(--blue-deeper)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                size: 13
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 1405,
                                                columnNumber: 13
                                            }, this),
                                            " Export"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 1403,
                                        columnNumber: 11
                                    }, this),
                                    userProfile?.isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            resetForm();
                                            setShowModal(true);
                                        },
                                        className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-[9px] border-none text-[12.5px] font-semibold cursor-pointer text-white transition-all",
                                        style: {
                                            background: "linear-gradient(135deg, var(--blue-deeper), var(--blue))",
                                            boxShadow: "0 2px 10px rgba(204,17,17,.28)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 1411,
                                                columnNumber: 15
                                            }, this),
                                            " Add Account"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 1408,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                lineNumber: 1402,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                        lineNumber: 1397,
                        columnNumber: 7
                    }, this),
                    userProfile?.isAdmin && (()=>{
                        const totalCredit = accounts.reduce((sum, a)=>{
                            const s = effectivePartySigned.get(a.id) ?? 0;
                            return s > 0 ? sum + s : sum;
                        }, 0);
                        const totalAccounts = accounts.length;
                        const countByHead = heads.map((h)=>({
                                name: h.name,
                                code: h.code,
                                count: accounts.filter((a)=>a.head_id === h.id).length
                            }));
                        const unassigned = accounts.filter((a)=>!a.head_id).length;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-[14px] border-[1.5px] px-5 py-4 flex items-center gap-4 min-h-[100px]",
                                    style: {
                                        background: "linear-gradient(145deg, var(--green-light) 0%, #d4f5e8 100%)",
                                        borderColor: "rgba(14, 173, 106, 0.35)",
                                        boxShadow: "0 4px 16px rgba(14, 173, 106, 0.12)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
                                            style: {
                                                background: "var(--green)",
                                                color: "white",
                                                boxShadow: "0 4px 12px rgba(14, 173, 106, 0.35)"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                size: 24,
                                                strokeWidth: 2.25
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 1445,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 1441,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10.5px] font-bold tracking-[1.2px] uppercase leading-none mb-1.5",
                                                    style: {
                                                        color: "var(--gray-700)"
                                                    },
                                                    children: "Total Credit"
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 1448,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[1.35rem] sm:text-[1.5rem] font-extrabold font-mono leading-tight tracking-tight",
                                                    style: {
                                                        color: "var(--green)"
                                                    },
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(totalCredit)
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 1451,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 1447,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                    lineNumber: 1433,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-[14px] border-[1.5px] px-5 py-4 flex items-center gap-4 min-h-[100px]",
                                    style: {
                                        background: "linear-gradient(145deg, var(--blue-light) 0%, #fce8e8 100%)",
                                        borderColor: "rgba(204, 17, 17, 0.22)",
                                        boxShadow: "0 4px 16px rgba(204, 17, 17, 0.08)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
                                            style: {
                                                background: "var(--blue-deeper)",
                                                color: "white",
                                                boxShadow: "0 4px 12px rgba(139, 0, 0, 0.28)"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                size: 24,
                                                strokeWidth: 2.25
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 1470,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 1466,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10.5px] font-bold tracking-[1.2px] uppercase leading-none mb-1.5",
                                                    style: {
                                                        color: "var(--gray-700)"
                                                    },
                                                    children: "Total Accounts"
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 1473,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[1.35rem] sm:text-[1.5rem] font-extrabold font-mono leading-tight tracking-tight",
                                                    style: {
                                                        color: "var(--blue-deeper)"
                                                    },
                                                    children: totalAccounts
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 1476,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 1472,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                    lineNumber: 1458,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative sm:col-span-2 lg:col-span-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowHeadsDropdown((v)=>!v),
                                            className: "w-full rounded-[14px] border-[1.5px] px-5 py-4 flex items-center gap-4 cursor-pointer transition-all min-h-[100px] text-left",
                                            style: {
                                                background: "linear-gradient(145deg, var(--orange-light) 0%, #ffefd0 100%)",
                                                borderColor: showHeadsDropdown ? "var(--orange)" : "rgba(245, 158, 11, 0.4)",
                                                boxShadow: showHeadsDropdown ? "0 6px 20px rgba(245, 158, 11, 0.2)" : "0 4px 16px rgba(245, 158, 11, 0.1)"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
                                                    style: {
                                                        background: "var(--orange)",
                                                        color: "white",
                                                        boxShadow: "0 4px 12px rgba(245, 158, 11, 0.35)"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                                        size: 24,
                                                        strokeWidth: 2.25
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 1497,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 1493,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-left flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10.5px] font-bold tracking-[1.2px] uppercase leading-none mb-1.5",
                                                            style: {
                                                                color: "var(--gray-700)"
                                                            },
                                                            children: "Accounts per Head"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 1500,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[1.35rem] sm:text-[1.5rem] font-extrabold font-mono leading-tight tracking-tight",
                                                            style: {
                                                                color: "#B45309"
                                                            },
                                                            children: [
                                                                countByHead.filter((h)=>h.count > 0).length,
                                                                " heads"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 1503,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 1499,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    size: 22,
                                                    className: "flex-shrink-0",
                                                    style: {
                                                        color: "var(--orange)",
                                                        transform: showHeadsDropdown ? "rotate(180deg)" : "rotate(0deg)",
                                                        transition: "transform 0.2s"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 1507,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 1484,
                                            columnNumber: 15
                                        }, this),
                                        showHeadsDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-full left-0 mt-1 bg-white rounded-[10px] border border-[var(--gray-100)] py-1.5 z-50 min-w-[220px]",
                                            style: {
                                                boxShadow: "var(--shadow-lg)"
                                            },
                                            children: [
                                                countByHead.filter((h)=>h.count > 0).map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between px-3.5 py-1.5 hover:bg-[var(--gray-50)] transition-colors",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-mono text-[10px] font-bold px-1.5 py-0.5 rounded",
                                                                        style: {
                                                                            background: "var(--orange-light)",
                                                                            color: "var(--orange)"
                                                                        },
                                                                        children: h.code
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 1520,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[12.5px] font-semibold",
                                                                        style: {
                                                                            color: "var(--gray-900)"
                                                                        },
                                                                        children: h.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 1521,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 1519,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[13px] font-extrabold font-mono ml-3",
                                                                style: {
                                                                    color: "var(--orange)"
                                                                },
                                                                children: h.count
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 1523,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, h.code, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 1518,
                                                        columnNumber: 21
                                                    }, this)),
                                                unassigned > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between px-3.5 py-1.5 hover:bg-[var(--gray-50)] transition-colors border-t border-[var(--gray-100)] mt-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[12.5px] font-semibold",
                                                            style: {
                                                                color: "var(--gray-800)"
                                                            },
                                                            children: "Unassigned"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 1528,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[13px] font-extrabold font-mono ml-3",
                                                            style: {
                                                                color: "var(--gray-800)"
                                                            },
                                                            children: unassigned
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 1529,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 1527,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 1515,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                    lineNumber: 1483,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                            lineNumber: 1431,
                            columnNumber: 11
                        }, this);
                    })(),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-[14px] border border-[var(--gray-100)] overflow-hidden",
                        style: {
                            boxShadow: "var(--shadow-sm)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between px-5 py-4 border-b border-[var(--gray-100)] flex-wrap gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg sm:text-xl font-extrabold tracking-tight",
                                        style: {
                                            color: "var(--gray-900)"
                                        },
                                        children: "Account List"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 1542,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 flex-wrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: selectedHead,
                                                onChange: (e)=>setSelectedHead(e.target.value),
                                                className: "border-[1.5px] rounded-full py-1.5 px-3 text-[12.5px] outline-none",
                                                style: {
                                                    ...inputStyle,
                                                    minWidth: 140
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "All Heads"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 1550,
                                                        columnNumber: 15
                                                    }, this),
                                                    heads.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: h.id,
                                                            children: h.name
                                                        }, h.id, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 1552,
                                                            columnNumber: 17
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 1544,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative max-w-[200px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute left-2.5 top-1/2 -translate-y-1/2",
                                                        style: {
                                                            color: "var(--gray-700)"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                            size: 13
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 1557,
                                                            columnNumber: 17
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 1556,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: search,
                                                        onChange: (e)=>setSearch(e.target.value),
                                                        placeholder: "Search accounts...",
                                                        className: "w-full border-[1.5px] rounded-full py-1.5 pl-8 pr-3 text-[12.5px] outline-none",
                                                        style: {
                                                            ...inputStyle
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 1559,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 1555,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 1543,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                lineNumber: 1541,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].table} min-w-[1020px]`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    [
                                                        "#",
                                                        "Name",
                                                        "WhatsApp",
                                                        "Credit",
                                                        "Ledger",
                                                        "Receive",
                                                        "Invoice",
                                                        "View Invoices",
                                                        "Status",
                                                        ""
                                                    ].map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].th} ${i === 0 ? "text-center w-12" : "text-left"}`,
                                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].thStyle,
                                                            children: h
                                                        }, `${h}-${i}`, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 1575,
                                                            columnNumber: 19
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].th} text-center w-12 px-2`,
                                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].thStyle,
                                                        title: "WhatsApp — send message about last transaction",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-flex justify-center w-full",
                                                            style: {
                                                                color: "white"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhatsAppIcon, {
                                                                size: 15
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 1585,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 1584,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 1579,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 1573,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 1572,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    colSpan: userProfile?.isAdmin ? 12 : 11,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].empty,
                                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].emptyStyle,
                                                    children: "No accounts found"
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 1592,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 1592,
                                                columnNumber: 17
                                            }, this) : filtered.map((a, idx)=>{
                                                const signed = effectivePartySigned.get(a.id) ?? 0;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].row,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td} text-center font-mono text-[13px] font-semibold tabular-nums`,
                                                            style: {
                                                                color: "var(--gray-600)"
                                                            },
                                                            children: idx + 1
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 1598,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td} ${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].cellPrimary}`,
                                                            style: {
                                                                color: "var(--gray-900)"
                                                            },
                                                            children: a.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 1601,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td} ${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].cellMono}`,
                                                            style: {
                                                                color: "var(--gray-900)"
                                                            },
                                                            children: a.whatsapp || a.phone || "—"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 1602,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td} font-mono font-bold text-[15px]`,
                                                            style: {
                                                                color: signed > 0 ? "var(--green)" : signed < 0 ? "var(--red)" : "var(--gray-500)"
                                                            },
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(Math.abs(signed))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 1603,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>void openLedgerModal(a),
                                                                className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-[8px] text-[12px] font-semibold border-[1.5px] bg-white cursor-pointer transition-all hover:bg-[var(--orange-light)]",
                                                                style: {
                                                                    borderColor: "var(--orange)",
                                                                    color: "#B45309"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                                        size: 12
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 1618,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    " See ledger"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 1612,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 1611,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>openReceiveModal(a),
                                                                className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-[8px] text-[12px] font-semibold border-[1.5px] bg-white cursor-pointer transition-all hover:bg-green-50",
                                                                style: {
                                                                    borderColor: "var(--green)",
                                                                    color: "var(--green)"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$banknote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Banknote$3e$__["Banknote"], {
                                                                        size: 12
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 1626,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    " Receive"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 1622,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 1621,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>openInvoiceModal(a),
                                                                className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-[8px] text-[12px] font-semibold border-[1.5px] bg-white cursor-pointer transition-all",
                                                                style: {
                                                                    borderColor: "var(--blue)",
                                                                    color: "var(--blue-deeper)"
                                                                },
                                                                onMouseEnter: (e)=>e.currentTarget.style.background = "var(--blue-pale)",
                                                                onMouseLeave: (e)=>e.currentTarget.style.background = "white",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                        size: 12
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 1637,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    " Invoice"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 1630,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 1629,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>void openPartyInvoicesModal(a),
                                                                className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-[8px] text-[12px] font-semibold border-[1.5px] bg-white cursor-pointer transition-all",
                                                                style: {
                                                                    borderColor: "#7C3AED",
                                                                    color: "#7C3AED"
                                                                },
                                                                onMouseEnter: (e)=>e.currentTarget.style.background = "#F5F3FF",
                                                                onMouseLeave: (e)=>e.currentTarget.style.background = "white",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                        size: 12
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 1649,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    " View Invoices"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 1641,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 1640,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].badge,
                                                                style: {
                                                                    background: "var(--green-light)",
                                                                    color: "var(--green)"
                                                                },
                                                                children: a.status
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 1653,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 1652,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1.5",
                                                                children: [
                                                                    userProfile?.isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>openEdit(a),
                                                                        className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-[8px] text-[12px] font-semibold border-[1.5px] bg-white cursor-pointer",
                                                                        style: {
                                                                            borderColor: "var(--gray-200)",
                                                                            color: "var(--blue-deeper)"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                                                size: 12
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                                lineNumber: 1663,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            " Edit"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 1660,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    userProfile?.isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handleDelete(a.id),
                                                                        className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-[8px] text-[12px] font-semibold border-[1.5px] bg-white cursor-pointer",
                                                                        style: {
                                                                            borderColor: "rgba(220,38,38,.2)",
                                                                            color: "var(--red)"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                size: 12
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                                lineNumber: 1670,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            " Delete"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 1667,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 1658,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 1657,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td} text-center`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>void openPartyLastTransactionWhatsApp(a),
                                                                className: "inline-flex items-center justify-center w-9 h-9 rounded-[9px] border-[1.5px] bg-white cursor-pointer transition-colors hover:opacity-90",
                                                                style: {
                                                                    borderColor: "#25D366",
                                                                    color: "#25D366"
                                                                },
                                                                title: "WhatsApp: last transaction",
                                                                "aria-label": "WhatsApp last transaction",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhatsAppIcon, {
                                                                    size: 18
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                    lineNumber: 1684,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 1676,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 1675,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, a.id, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 1597,
                                                    columnNumber: 21
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 1590,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                    lineNumber: 1571,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                lineNumber: 1570,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                        lineNumber: 1540,
                        columnNumber: 7
                    }, this),
                    showLedgerModal && ledgerAccount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-[800] flex items-start justify-center backdrop-blur-sm pt-6 px-4 pb-8 overflow-y-auto",
                        style: {
                            background: "rgba(10,30,50,.35)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-[20px] w-[min(920px,100%)] max-w-full overflow-hidden animate-slide-up",
                            style: {
                                boxShadow: "var(--shadow-lg)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between px-5 py-4 border-b border-[var(--gray-100)]",
                                    style: {
                                        background: "linear-gradient(90deg, #B45309, var(--orange))"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-[15px] font-bold text-white",
                                                    children: "Account ledger"
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 1705,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] mt-0.5 text-white/80",
                                                    children: ledgerAccount.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 1706,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 1704,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: closeLedgerModal,
                                            className: "w-7 h-7 rounded-full flex items-center justify-center border-none cursor-pointer",
                                            style: {
                                                background: "rgba(255,255,255,0.2)",
                                                color: "white"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 1711,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 1708,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                    lineNumber: 1702,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-5 py-3 flex flex-wrap items-center justify-between gap-3 border-b border-[var(--gray-100)]",
                                    style: {
                                        background: "var(--gray-50)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] font-semibold m-0",
                                            style: {
                                                color: "var(--gray-800)"
                                            },
                                            children: "Invoices and cashbook lines for this party"
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 1717,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>void downloadLedgerPdf(),
                                                    disabled: ledgerLoading || ledgerDownloading,
                                                    className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-[9px] text-[12.5px] font-semibold border-[1.5px] bg-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
                                                    style: {
                                                        borderColor: "var(--gray-200)",
                                                        color: "var(--blue-deeper)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 1728,
                                                            columnNumber: 19
                                                        }, this),
                                                        " ",
                                                        ledgerDownloading ? "Saving…" : "Download PDF"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 1721,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>window.print(),
                                                    disabled: ledgerLoading || ledgerDownloading,
                                                    className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-[9px] text-[12.5px] font-semibold border-[1.5px] bg-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
                                                    style: {
                                                        borderColor: "var(--gray-200)",
                                                        color: "var(--blue-deeper)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 1737,
                                                            columnNumber: 19
                                                        }, this),
                                                        " Print report"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 1730,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 1720,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                    lineNumber: 1715,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-5 py-3 flex flex-wrap items-end gap-3 border-b border-[var(--gray-100)]",
                                    style: {
                                        background: "var(--gray-50)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[9px] font-bold tracking-[1px] uppercase",
                                                    style: {
                                                        color: "var(--gray-700)"
                                                    },
                                                    children: "Month"
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 1745,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "month",
                                                    value: ledgerMonth,
                                                    onChange: (e)=>{
                                                        const v = e.target.value;
                                                        setLedgerMonth(v);
                                                        applyLedgerMonth(v);
                                                    },
                                                    className: "border-[1.5px] rounded-[9px] px-2.5 py-1.5 text-[12px] outline-none min-w-[150px]",
                                                    style: inputStyle
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 1746,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 1744,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[9px] font-bold tracking-[1px] uppercase",
                                                    style: {
                                                        color: "var(--gray-700)"
                                                    },
                                                    children: "From"
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 1759,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    value: ledgerDateFrom,
                                                    onChange: (e)=>{
                                                        setLedgerDateFrom(e.target.value);
                                                        setLedgerMonth("");
                                                    },
                                                    className: "border-[1.5px] rounded-[9px] px-2.5 py-1.5 text-[12px] outline-none",
                                                    style: inputStyle
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 1760,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 1758,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[9px] font-bold tracking-[1px] uppercase",
                                                    style: {
                                                        color: "var(--gray-700)"
                                                    },
                                                    children: "To"
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 1772,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    value: ledgerDateTo,
                                                    onChange: (e)=>{
                                                        setLedgerDateTo(e.target.value);
                                                        setLedgerMonth("");
                                                    },
                                                    className: "border-[1.5px] rounded-[9px] px-2.5 py-1.5 text-[12px] outline-none",
                                                    style: inputStyle
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 1773,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 1771,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                setLedgerDateFrom("");
                                                setLedgerDateTo("");
                                                setLedgerMonth("");
                                            },
                                            className: "px-3 py-1.5 rounded-[9px] text-[11.5px] font-semibold border-[1.5px] bg-white cursor-pointer mb-0.5",
                                            style: {
                                                borderColor: "var(--gray-200)",
                                                color: "var(--gray-700)"
                                            },
                                            children: "All dates"
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 1784,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                    lineNumber: 1742,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-5 max-h-[min(60vh,520px)] overflow-auto",
                                    children: ledgerLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[13px] m-0",
                                        style: {
                                            color: "var(--gray-600)"
                                        },
                                        children: "Loading…"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 1800,
                                        columnNumber: 17
                                    }, this) : ledgerAllRows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[13px] m-0",
                                        style: {
                                            color: "var(--gray-600)"
                                        },
                                        children: "No ledger entries yet for this account."
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 1802,
                                        columnNumber: 17
                                    }, this) : ledgerDisplayWithBal.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[13px] m-0",
                                        style: {
                                            color: "var(--gray-600)"
                                        },
                                        children: "No entries in the selected date range."
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 1804,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            ledgerDateFrom.trim() && ledgerOpeningBefore !== 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] font-semibold m-0 mb-2",
                                                style: {
                                                    color: "var(--gray-700)"
                                                },
                                                children: [
                                                    "Opening balance (before ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(ledgerDateFrom),
                                                    "):",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono",
                                                        style: {
                                                            color: "var(--blue-deeper)"
                                                        },
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(Math.abs(ledgerOpeningBefore))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 1810,
                                                        columnNumber: 23
                                                    }, this),
                                                    ledgerOpeningBefore > 0 ? " receivable" : ledgerOpeningBefore < 0 ? " payable" : ""
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 1808,
                                                columnNumber: 21
                                            }, this) : null,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].table} min-w-[720px]`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: [
                                                                "Date",
                                                                "Invoice # / Ref",
                                                                "Description",
                                                                "Debit",
                                                                "Credit",
                                                                "Balance",
                                                                "Method"
                                                            ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].thDense} text-left`,
                                                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].thStyle,
                                                                    children: h
                                                                }, h, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                    lineNumber: 1820,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 1818,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 1817,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                        children: ledgerDisplayWithBal.map((r, idx)=>{
                                                            const items = r.invoiceId ? ledgerItemsByInvoice[r.invoiceId] ?? [] : [];
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].row,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].tdDense} ${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].cellPrimary}`,
                                                                                style: {
                                                                                    color: "var(--gray-900)"
                                                                                },
                                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(r.date)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                                lineNumber: 1830,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-[12px]`,
                                                                                style: {
                                                                                    color: "var(--gray-900)"
                                                                                },
                                                                                children: r.doc
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                                lineNumber: 1831,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].tdDense,
                                                                                style: {
                                                                                    color: "var(--gray-800)"
                                                                                },
                                                                                children: r.desc
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                                lineNumber: 1832,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right`,
                                                                                style: {
                                                                                    color: "var(--gray-900)"
                                                                                },
                                                                                children: r.debit > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(r.debit) : "—"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                                lineNumber: 1833,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right`,
                                                                                style: {
                                                                                    color: r.credit > 0 ? "var(--green)" : "var(--gray-300)"
                                                                                },
                                                                                children: r.credit > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(r.credit) : "—"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                                lineNumber: 1836,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono font-bold text-right`,
                                                                                style: {
                                                                                    color: r.balance > 0 ? "var(--green)" : r.balance < 0 ? "var(--red)" : "var(--gray-600)"
                                                                                },
                                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(r.balance)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                                lineNumber: 1839,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].tdDense,
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "px-2 py-0.5 rounded-full text-[10.5px] font-semibold",
                                                                                    style: {
                                                                                        background: "var(--gray-100)",
                                                                                        color: "var(--gray-900)"
                                                                                    },
                                                                                    children: r.method || "—"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                                    lineNumber: 1848,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                                lineNumber: 1847,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 1829,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    items.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            colSpan: 7,
                                                                            className: "p-0",
                                                                            style: {
                                                                                background: "var(--gray-50, #f8fafc)"
                                                                            },
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                                                className: "w-full border-collapse",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                                            children: [
                                                                                                "Product",
                                                                                                "W (ft)",
                                                                                                "H (ft)",
                                                                                                "Sq.ft",
                                                                                                "Qty",
                                                                                                "Rate",
                                                                                                "Amount"
                                                                                            ].map((h, hi)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                                    className: "px-2 py-1 text-[10px] font-semibold uppercase tracking-wide",
                                                                                                    style: {
                                                                                                        color: "var(--gray-500)",
                                                                                                        textAlign: hi === 0 ? "left" : "right"
                                                                                                    },
                                                                                                    children: h
                                                                                                }, h, false, {
                                                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                                                    lineNumber: 1858,
                                                                                                    columnNumber: 37
                                                                                                }, this))
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                                            lineNumber: 1856,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                                        lineNumber: 1855,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                                        children: items.map((it)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                        className: "px-2 py-1 text-[11px]",
                                                                                                        style: {
                                                                                                            color: "var(--gray-700)"
                                                                                                        },
                                                                                                        children: String(it.description || it.category || "Item").trim() || "Item"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                                                        lineNumber: 1871,
                                                                                                        columnNumber: 37
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                        className: "px-2 py-1 text-[11px] font-mono text-right",
                                                                                                        style: {
                                                                                                            color: "var(--gray-700)"
                                                                                                        },
                                                                                                        children: Number(it.width) || "—"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                                                        lineNumber: 1874,
                                                                                                        columnNumber: 37
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                        className: "px-2 py-1 text-[11px] font-mono text-right",
                                                                                                        style: {
                                                                                                            color: "var(--gray-700)"
                                                                                                        },
                                                                                                        children: Number(it.height) || "—"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                                                        lineNumber: 1875,
                                                                                                        columnNumber: 37
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                        className: "px-2 py-1 text-[11px] font-mono text-right",
                                                                                                        style: {
                                                                                                            color: "var(--gray-700)"
                                                                                                        },
                                                                                                        children: Number(it.sqft) ? Number(it.sqft).toLocaleString() : "—"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                                                        lineNumber: 1876,
                                                                                                        columnNumber: 37
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                        className: "px-2 py-1 text-[11px] font-mono text-right",
                                                                                                        style: {
                                                                                                            color: "var(--gray-700)"
                                                                                                        },
                                                                                                        children: Number(it.qty) || "—"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                                                        lineNumber: 1877,
                                                                                                        columnNumber: 37
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                        className: "px-2 py-1 text-[11px] font-mono text-right",
                                                                                                        style: {
                                                                                                            color: "var(--gray-700)"
                                                                                                        },
                                                                                                        children: Number(it.rate) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(Number(it.rate)) : "—"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                                                        lineNumber: 1878,
                                                                                                        columnNumber: 37
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                        className: "px-2 py-1 text-[11px] font-mono text-right",
                                                                                                        style: {
                                                                                                            color: "var(--gray-900)"
                                                                                                        },
                                                                                                        children: Number(it.amount) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(Number(it.amount)) : "—"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                                                        lineNumber: 1879,
                                                                                                        columnNumber: 37
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, it.id, true, {
                                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                                                lineNumber: 1870,
                                                                                                columnNumber: 35
                                                                                            }, this))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                                        lineNumber: 1868,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                                lineNumber: 1854,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                            lineNumber: 1853,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 1852,
                                                                        columnNumber: 25
                                                                    }, this) : null
                                                                ]
                                                            }, `${r.sortAt}-${idx}`, true, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 1828,
                                                                columnNumber: 23
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 1824,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    colSpan: 5,
                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].tdDense} font-bold text-right border-t-2 border-[var(--gray-200)]`,
                                                                    style: {
                                                                        color: "var(--gray-700)"
                                                                    },
                                                                    children: [
                                                                        "Closing balance",
                                                                        ledgerDateFrom.trim() || ledgerDateTo.trim() ? " (period)" : ""
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                    lineNumber: 1893,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono font-extrabold text-right border-t-2 border-[var(--gray-200)]`,
                                                                    style: {
                                                                        color: (()=>{
                                                                            const b = ledgerDisplayWithBal.at(-1)?.balance ?? 0;
                                                                            if (b > 0) return "var(--green)";
                                                                            if (b < 0) return "var(--red)";
                                                                            return "var(--gray-600)";
                                                                        })()
                                                                    },
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(ledgerDisplayWithBal.at(-1)?.balance ?? 0)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                    lineNumber: 1901,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].tdDense} border-t-2 border-[var(--gray-200)]`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                    lineNumber: 1913,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 1892,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 1891,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 1816,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                    lineNumber: 1798,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end px-5 py-3.5 border-t border-[var(--gray-100)]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: closeLedgerModal,
                                        className: "px-4 py-2 rounded-[9px] text-[12.5px] font-semibold border-[1.5px] cursor-pointer bg-white",
                                        style: {
                                            borderColor: "var(--gray-200)",
                                            color: "var(--blue-deeper)"
                                        },
                                        children: "Close"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 1922,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                    lineNumber: 1921,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                            lineNumber: 1700,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                        lineNumber: 1698,
                        columnNumber: 9
                    }, this),
                    showInvoiceModal && invoiceAccount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-[800] flex items-start justify-center backdrop-blur-sm pt-8 px-4 pb-8 overflow-y-auto",
                        style: {
                            background: "rgba(10,30,50,.35)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-[20px] w-[1060px] max-w-full overflow-hidden animate-slide-up",
                            style: {
                                boxShadow: "var(--shadow-lg)"
                            },
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
                                                    children: editingInvoiceId ? "Edit Invoice" : "New Invoice"
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 1943,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] mt-0.5 text-white/60",
                                                    children: [
                                                        invoiceAccount.name,
                                                        " — ",
                                                        invNextNum
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 1944,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 1942,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: closeInvoiceModal,
                                            className: "w-7 h-7 rounded-full flex items-center justify-center border-none cursor-pointer",
                                            style: {
                                                background: "rgba(255,255,255,0.15)",
                                                color: "white"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 1949,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 1946,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                    lineNumber: 1940,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-[10px] border border-[var(--gray-100)] overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                className: "w-full border-collapse",
                                                style: {
                                                    minWidth: 580
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
                                                                ""
                                                            ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].thDense} text-left`,
                                                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].thStyle,
                                                                    children: h
                                                                }, h, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                    lineNumber: 1960,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 1958,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 1957,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                        children: invItems.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                className: "hover:bg-[var(--blue-pale)] transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-2 py-2 border-b border-[var(--gray-100)]",
                                                                        style: {
                                                                            minWidth: 160
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$SearchableSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchableSelect"], {
                                                                                value: item.product,
                                                                                onChange: (v)=>updateInvItem(idx, "product", v),
                                                                                options: invProducts.map((p)=>({
                                                                                        value: p.name,
                                                                                        label: p.code ? `#${p.code} — ${p.name}` : p.name
                                                                                    })),
                                                                                placeholder: "— Product —",
                                                                                inputClassName: "border border-[var(--gray-200)] rounded-[6px] px-2 py-1.5 text-[12px] outline-none bg-white focus:border-[var(--blue)] w-full",
                                                                                onCreate: (q)=>setProductCreate({
                                                                                        idx,
                                                                                        initialName: q
                                                                                    }),
                                                                                createLabel: "+ Add new product"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                                lineNumber: 1971,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                                value: item.description,
                                                                                onChange: (e)=>updateInvItem(idx, "description", e.target.value),
                                                                                placeholder: "Description (optional)",
                                                                                rows: 2,
                                                                                className: "mt-1.5 border border-[var(--gray-200)] rounded-[6px] px-2 py-1.5 text-[12px] outline-none bg-white focus:border-[var(--blue)] w-full resize-y min-h-[44px]"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                                lineNumber: 1980,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 1970,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-2 py-2 border-b border-[var(--gray-100)]",
                                                                        style: {
                                                                            width: 82
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "number",
                                                                            min: "0",
                                                                            step: "0.1",
                                                                            value: item.width || "",
                                                                            disabled: item.pricingType === "standalone",
                                                                            onChange: (e)=>updateInvItem(idx, "width", parseFloat(e.target.value) || 0),
                                                                            className: "border-2 border-[var(--gray-200)] rounded-[7px] px-2 py-2 text-[16px] font-bold outline-none bg-white focus:border-[var(--blue)] w-full text-center disabled:opacity-30 disabled:cursor-not-allowed",
                                                                            placeholder: "0"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                            lineNumber: 1990,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 1989,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-2 py-2 border-b border-[var(--gray-100)]",
                                                                        style: {
                                                                            width: 82
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "number",
                                                                            min: "0",
                                                                            step: "0.1",
                                                                            value: item.height || "",
                                                                            disabled: item.pricingType === "standalone",
                                                                            onChange: (e)=>updateInvItem(idx, "height", parseFloat(e.target.value) || 0),
                                                                            className: "border-2 border-[var(--gray-200)] rounded-[7px] px-2 py-2 text-[16px] font-bold outline-none bg-white focus:border-[var(--blue)] w-full text-center disabled:opacity-30 disabled:cursor-not-allowed",
                                                                            placeholder: "0"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                            lineNumber: 1999,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 1998,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-2 py-2 border-b border-[var(--gray-100)]",
                                                                        style: {
                                                                            width: 90
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "number",
                                                                            min: "1",
                                                                            value: item.qty,
                                                                            onChange: (e)=>updateInvItem(idx, "qty", parseInt(e.target.value) || 0),
                                                                            className: "border-2 border-[var(--gray-200)] rounded-[7px] px-2 py-2 text-[16px] font-bold outline-none bg-white focus:border-[var(--blue)] w-full text-center",
                                                                            style: item.qty < 1 ? {
                                                                                borderColor: "var(--red)",
                                                                                color: "var(--red)"
                                                                            } : undefined,
                                                                            "aria-invalid": item.qty < 1,
                                                                            title: item.qty < 1 ? "Quantity must be at least 1" : undefined
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                            lineNumber: 2008,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2007,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-3 py-2 border-b border-[var(--gray-100)] font-mono font-extrabold text-center",
                                                                        style: {
                                                                            color: item.pricingType === "standalone" ? "var(--gray-300)" : item.sqft > 0 ? "var(--gray-800)" : "var(--gray-300)",
                                                                            fontSize: 15,
                                                                            width: 72
                                                                        },
                                                                        children: item.pricingType === "standalone" ? "—" : item.sqft > 0 ? Math.round(item.sqft * item.qty * 100) / 100 : "—"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2017,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-2 py-2 border-b border-[var(--gray-100)]",
                                                                        style: {
                                                                            width: 100
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "number",
                                                                            min: "0",
                                                                            value: item.rate || "",
                                                                            onChange: (e)=>updateInvItem(idx, "rate", parseFloat(e.target.value) || 0),
                                                                            className: "border-2 border-[var(--gray-200)] rounded-[7px] px-2 py-2 text-[16px] font-bold outline-none bg-white focus:border-[var(--blue)] w-full text-right",
                                                                            placeholder: "0"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                            lineNumber: 2023,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2022,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-3 py-2 border-b border-[var(--gray-100)] font-mono font-extrabold text-right whitespace-nowrap",
                                                                        style: {
                                                                            color: "var(--blue-deeper)",
                                                                            fontSize: 15,
                                                                            width: 110
                                                                        },
                                                                        children: item.total > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(item.total) : "—"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2030,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-2 py-2 border-b border-[var(--gray-100)]",
                                                                        style: {
                                                                            width: 36
                                                                        },
                                                                        children: invItems.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>setInvItems((prev)=>prev.filter((_, i)=>i !== idx)),
                                                                            className: "w-6 h-6 rounded-[5px] flex items-center justify-center border-none cursor-pointer",
                                                                            style: {
                                                                                background: "var(--red-light)",
                                                                                color: "var(--red)"
                                                                            },
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                size: 10
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                                lineNumber: 2040,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                            lineNumber: 2037,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2035,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 1968,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 1966,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 1956,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 1955,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mt-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setInvItems((prev)=>[
                                                                ...prev,
                                                                blankInvItem()
                                                            ]),
                                                    className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[7px] text-[12px] font-semibold border-[1.5px] cursor-pointer transition-all",
                                                    style: {
                                                        borderColor: "rgba(14,173,106,.3)",
                                                        color: "var(--green)",
                                                        background: "var(--green-light)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            size: 12
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 2057,
                                                            columnNumber: 19
                                                        }, this),
                                                        " Add Row"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 2052,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[11px] font-semibold mr-2",
                                                            style: {
                                                                color: "var(--gray-800)"
                                                            },
                                                            children: "Grand Total"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 2060,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[20px] font-extrabold font-mono",
                                                            style: {
                                                                color: "var(--blue-deeper)"
                                                            },
                                                            children: (()=>{
                                                                const st = invItems.reduce((s, it)=>s + it.total, 0);
                                                                const rawD = parseFloat(String(invDiscountValue).replace(/,/g, "")) || 0;
                                                                const dAmt = invDiscountType === "pct" ? Math.min(Math.max(0, rawD), 100) * st / 100 : Math.min(Math.max(0, rawD), st);
                                                                const aft = Math.max(0, st - dAmt);
                                                                const gP = Math.max(0, parseFloat(invGstPct) || 0);
                                                                const sP = Math.max(0, parseFloat(invSalesTaxPct) || 0);
                                                                const bP = Math.max(0, parseFloat(invBraPct) || 0);
                                                                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(Math.max(0, Math.round((aft + aft * gP / 100 + aft * sP / 100 + aft * bP / 100) * 100) / 100));
                                                            })()
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 2061,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 2059,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 2051,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1 mt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[10px] font-bold tracking-[1.2px] uppercase",
                                                    style: {
                                                        color: "var(--blue-deeper)"
                                                    },
                                                    children: [
                                                        "Description ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-normal normal-case opacity-70",
                                                            children: "(optional)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 2079,
                                                            columnNumber: 31
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 2078,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    value: invDescription,
                                                    onChange: (e)=>setInvDescription(e.target.value),
                                                    placeholder: "Order details, special instructions, internal notes…",
                                                    rows: 2,
                                                    className: "border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none resize-y min-h-[52px] w-full",
                                                    style: {
                                                        borderColor: "var(--gray-200)",
                                                        color: "var(--gray-900)"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 2081,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 2077,
                                            columnNumber: 15
                                        }, this),
                                        !editingInvoiceId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "mt-4 flex items-center gap-2.5 cursor-pointer select-none rounded-[10px] border border-[var(--gray-200)] bg-[var(--gray-50)] px-4 py-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: invAddToExpense,
                                                    onChange: (e)=>setInvAddToExpense(e.target.checked),
                                                    className: "w-4 h-4 cursor-pointer accent-[var(--blue-deeper)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 2094,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[12px] font-bold",
                                                    style: {
                                                        color: "var(--gray-800)"
                                                    },
                                                    children: "Add expense for this invoice"
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 2100,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-normal",
                                                    style: {
                                                        color: "var(--gray-600)"
                                                    },
                                                    children: "opens Expense → Project Expense after saving so you can enter the amount"
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 2103,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 2093,
                                            columnNumber: 17
                                        }, this),
                                        (()=>{
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-[10px] font-bold tracking-[1.2px] uppercase",
                                                                style: {
                                                                    color: "var(--blue-deeper)"
                                                                },
                                                                children: [
                                                                    editingInvoiceId ? "Already received" : "Paid now",
                                                                    " ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-normal normal-case opacity-80",
                                                                        children: "(optional)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2114,
                                                                        columnNumber: 78
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2113,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                min: 0,
                                                                step: 1,
                                                                value: invAmountPaid,
                                                                onChange: (e)=>{
                                                                    if (!editingInvoiceId) setInvAmountPaid(e.target.value);
                                                                },
                                                                readOnly: !!editingInvoiceId,
                                                                placeholder: "0",
                                                                className: "border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none",
                                                                style: {
                                                                    borderColor: "var(--gray-200)",
                                                                    color: "var(--gray-900)",
                                                                    background: editingInvoiceId ? "var(--gray-50)" : "white"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2116,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] m-0",
                                                                style: {
                                                                    color: "var(--gray-600)"
                                                                },
                                                                children: editingInvoiceId ? "Amount already received on this invoice — cannot be changed here." : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        "Only ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                            children: "remaining"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                            lineNumber: 2130,
                                                                            columnNumber: 36
                                                                        }, this),
                                                                        " is added to what they owe on the account. Full payment at issue adds nothing extra to the balance."
                                                                    ]
                                                                }, void 0, true)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2127,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2112,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-[10px] font-bold tracking-[1.2px] uppercase",
                                                                style: {
                                                                    color: "var(--blue-deeper)"
                                                                },
                                                                children: "How paid"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2134,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap border-[1.5px] rounded-[9px] overflow-hidden",
                                                                style: {
                                                                    borderColor: "var(--gray-200)"
                                                                },
                                                                children: paymentMethods.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>setInvPayMethod(m.name),
                                                                        className: "flex-1 min-w-[80px] py-2 text-[11px] font-semibold border-none cursor-pointer transition-all",
                                                                        style: {
                                                                            background: invPayMethod === m.name ? "var(--blue-deeper)" : "var(--gray-50)",
                                                                            color: invPayMethod === m.name ? "#fff" : "var(--gray-500)"
                                                                        },
                                                                        children: m.name
                                                                    }, m.id, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2139,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2137,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] m-0",
                                                                style: {
                                                                    color: "var(--gray-600)"
                                                                },
                                                                children: "Stored on the invoice for your records (same options as Receive payment)."
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2153,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2133,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-[10px] font-bold tracking-[1.2px] uppercase",
                                                                style: {
                                                                    color: "var(--blue-deeper)"
                                                                },
                                                                children: "Discount"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2158,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        value: invDiscountType,
                                                                        onChange: (e)=>setInvDiscountType(e.target.value),
                                                                        className: "border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none bg-white",
                                                                        style: {
                                                                            borderColor: "var(--gray-200)",
                                                                            color: "var(--gray-900)"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "pct",
                                                                                children: "%"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                                lineNumber: 2168,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "flat",
                                                                                children: "Fixed"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                                lineNumber: 2169,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2162,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        min: 0,
                                                                        step: 1,
                                                                        value: invDiscountValue,
                                                                        onChange: (e)=>setInvDiscountValue(e.target.value),
                                                                        placeholder: invDiscountType === "pct" ? "0-100" : "Amount",
                                                                        className: "border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none bg-white w-full",
                                                                        style: {
                                                                            borderColor: "var(--gray-200)",
                                                                            color: "var(--gray-900)"
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2171,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2161,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2157,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-[10px] font-bold tracking-[1.2px] uppercase",
                                                                style: {
                                                                    color: "#B45309"
                                                                },
                                                                children: [
                                                                    "GST % ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-normal normal-case opacity-70",
                                                                        children: "(optional)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2186,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2185,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                min: 0,
                                                                max: 100,
                                                                step: 0.1,
                                                                value: invGstPct,
                                                                onChange: (e)=>setInvGstPct(e.target.value),
                                                                placeholder: "e.g. 5",
                                                                className: "border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none bg-white",
                                                                style: {
                                                                    borderColor: "var(--orange)",
                                                                    color: "var(--gray-900)"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2188,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2184,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-[10px] font-bold tracking-[1.2px] uppercase",
                                                                style: {
                                                                    color: "#B45309"
                                                                },
                                                                children: [
                                                                    "Sales Tax % ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-normal normal-case opacity-70",
                                                                        children: "(optional)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2203,
                                                                        columnNumber: 37
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2202,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                min: 0,
                                                                max: 100,
                                                                step: 0.1,
                                                                value: invSalesTaxPct,
                                                                onChange: (e)=>setInvSalesTaxPct(e.target.value),
                                                                placeholder: "e.g. 2",
                                                                className: "border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none bg-white",
                                                                style: {
                                                                    borderColor: "var(--orange)",
                                                                    color: "var(--gray-900)"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2205,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2201,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-[10px] font-bold tracking-[1.2px] uppercase",
                                                                style: {
                                                                    color: "#B45309"
                                                                },
                                                                children: [
                                                                    "BRA % ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-normal normal-case opacity-70",
                                                                        children: "(optional)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2220,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2219,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                min: 0,
                                                                max: 100,
                                                                step: 0.1,
                                                                value: invBraPct,
                                                                onChange: (e)=>setInvBraPct(e.target.value),
                                                                placeholder: "e.g. 2",
                                                                className: "border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none bg-white",
                                                                style: {
                                                                    borderColor: "var(--orange)",
                                                                    color: "var(--gray-900)"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2222,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2218,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 2111,
                                                columnNumber: 19
                                            }, this);
                                        })()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                    lineNumber: 1954,
                                    columnNumber: 13
                                }, this),
                                (()=>{
                                    const subtotal = invItems.reduce((s, it)=>s + it.total, 0);
                                    const rawDiscount = parseFloat(String(invDiscountValue).replace(/,/g, "")) || 0;
                                    const discountAmount = invDiscountType === "pct" ? Math.min(Math.max(0, rawDiscount), 100) * (subtotal / 100) : Math.min(Math.max(0, rawDiscount), subtotal);
                                    const afterDiscount = Math.max(0, subtotal - discountAmount);
                                    const gP = Math.max(0, parseFloat(invGstPct) || 0);
                                    const sP = Math.max(0, parseFloat(invSalesTaxPct) || 0);
                                    const bP = Math.max(0, parseFloat(invBraPct) || 0);
                                    const gstAmt = Math.round(afterDiscount * gP / 100 * 100) / 100;
                                    const stAmt = Math.round(afterDiscount * sP / 100 * 100) / 100;
                                    const braAmt = Math.round(afterDiscount * bP / 100 * 100) / 100;
                                    const gt = Math.max(0, Math.round((afterDiscount + gstAmt + stAmt + braAmt) * 100) / 100);
                                    const partySigned = invoiceAccount ? effectivePartySigned.get(invoiceAccount.id) ?? 0 : 0;
                                    // partySigned > 0 = party owes us; < 0 = party has credit with us
                                    // Total the party owes after this new bill
                                    const totalDue = Math.max(0, Math.round((partySigned + gt) * 100) / 100);
                                    const paid = Math.min(Math.max(0, parseFloat(String(invAmountPaid).replace(/,/g, "")) || 0), totalDue);
                                    const due = Math.round((totalDue - paid) * 100) / 100;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-end justify-between gap-4 px-5 py-3.5 border-t border-[var(--gray-100)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-[10px] border border-[var(--gray-200)] bg-[var(--gray-50)] px-4 py-3 min-w-[min(100%,240px)]",
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
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2267,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-1.5 font-mono text-[13px]",
                                                        children: [
                                                            partySigned !== 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between gap-8",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            color: "var(--gray-600)"
                                                                        },
                                                                        children: "Previous Balance"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2274,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-extrabold",
                                                                        style: {
                                                                            color: partySigned > 0 ? "var(--red)" : "var(--green)"
                                                                        },
                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(Math.abs(partySigned))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2275,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2273,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between gap-8",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            color: "var(--gray-700)"
                                                                        },
                                                                        children: "New Bill"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2281,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-extrabold",
                                                                        style: {
                                                                            color: "var(--blue-deeper)"
                                                                        },
                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(subtotal)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2282,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2280,
                                                                columnNumber: 19
                                                            }, this),
                                                            discountAmount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between gap-8",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            color: "var(--gray-700)"
                                                                        },
                                                                        children: "Discount"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2286,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-extrabold",
                                                                        style: {
                                                                            color: "var(--orange)"
                                                                        },
                                                                        children: [
                                                                            "− ",
                                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(discountAmount)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2287,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2285,
                                                                columnNumber: 21
                                                            }, this),
                                                            gstAmt > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between gap-8",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            color: "#B45309"
                                                                        },
                                                                        children: [
                                                                            "GST (",
                                                                            gP,
                                                                            "%)"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2292,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-extrabold",
                                                                        style: {
                                                                            color: "#B45309"
                                                                        },
                                                                        children: [
                                                                            "+ ",
                                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(gstAmt)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2293,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2291,
                                                                columnNumber: 21
                                                            }, this),
                                                            stAmt > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between gap-8",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            color: "#B45309"
                                                                        },
                                                                        children: [
                                                                            "Sales Tax (",
                                                                            sP,
                                                                            "%)"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2298,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-extrabold",
                                                                        style: {
                                                                            color: "#B45309"
                                                                        },
                                                                        children: [
                                                                            "+ ",
                                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(stAmt)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2299,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2297,
                                                                columnNumber: 21
                                                            }, this),
                                                            braAmt > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between gap-8",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            color: "#B45309"
                                                                        },
                                                                        children: [
                                                                            "BRA (",
                                                                            bP,
                                                                            "%)"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2304,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-extrabold",
                                                                        style: {
                                                                            color: "#B45309"
                                                                        },
                                                                        children: [
                                                                            "+ ",
                                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(braAmt)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2305,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2303,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between gap-8 pt-1 border-t border-dashed border-[var(--gray-200)]",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-bold",
                                                                        style: {
                                                                            color: "var(--gray-800)"
                                                                        },
                                                                        children: "Total Due"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2309,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-extrabold",
                                                                        style: {
                                                                            color: "var(--red)"
                                                                        },
                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(totalDue)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2310,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2308,
                                                                columnNumber: 19
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
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2313,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-extrabold",
                                                                        style: {
                                                                            color: "var(--green)"
                                                                        },
                                                                        children: [
                                                                            "− ",
                                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(paid)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2314,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2312,
                                                                columnNumber: 19
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
                                                                        children: "Remaining Balance"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2317,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-extrabold",
                                                                        style: {
                                                                            color: due > 0 ? "var(--red)" : "var(--green)"
                                                                        },
                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(due)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2318,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2316,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2270,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 2263,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between gap-2 w-full flex-wrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: closeInvoiceModal,
                                                        disabled: invSaving,
                                                        className: "px-4 py-2 rounded-[9px] text-[12.5px] font-semibold border-[1.5px] cursor-pointer bg-white disabled:opacity-50",
                                                        style: {
                                                            borderColor: "var(--gray-200)",
                                                            color: "var(--gray-700)"
                                                        },
                                                        children: "Cancel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2323,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2 flex-wrap",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>void handleSaveInvoice("a4"),
                                                                disabled: invSaving,
                                                                className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-[9px] text-[12.5px] font-semibold border-[1.5px] bg-white cursor-pointer transition-all disabled:opacity-50",
                                                                style: {
                                                                    borderColor: "var(--blue)",
                                                                    color: "var(--blue)"
                                                                },
                                                                onMouseEnter: (e)=>e.currentTarget.style.background = "var(--blue-pale)",
                                                                onMouseLeave: (e)=>e.currentTarget.style.background = "white",
                                                                title: "Save and print A4",
                                                                children: [
                                                                    invSaving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                        size: 13,
                                                                        className: "animate-spin"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2335,
                                                                        columnNumber: 32
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                                                        size: 13
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2335,
                                                                        columnNumber: 81
                                                                    }, this),
                                                                    " A4"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2329,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>void handleSaveInvoice("thermal"),
                                                                disabled: invSaving,
                                                                className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-[9px] text-[12.5px] font-semibold border-[1.5px] bg-white cursor-pointer transition-all disabled:opacity-50",
                                                                style: {
                                                                    borderColor: "var(--gray-500)",
                                                                    color: "var(--gray-700)"
                                                                },
                                                                onMouseEnter: (e)=>e.currentTarget.style.background = "var(--gray-50)",
                                                                onMouseLeave: (e)=>e.currentTarget.style.background = "white",
                                                                title: "Save and print Thermal",
                                                                children: [
                                                                    invSaving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                        size: 13,
                                                                        className: "animate-spin"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2343,
                                                                        columnNumber: 32
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                                                        size: 13
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2343,
                                                                        columnNumber: 81
                                                                    }, this),
                                                                    " Thermal"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2337,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>void handleSaveInvoice(),
                                                                disabled: invSaving,
                                                                className: "inline-flex items-center gap-1.5 px-5 py-2 rounded-[9px] text-[12.5px] font-semibold border-none cursor-pointer text-white disabled:opacity-60",
                                                                style: {
                                                                    background: "linear-gradient(135deg, var(--blue-deeper), var(--blue))",
                                                                    boxShadow: "0 2px 10px rgba(204,17,17,.28)"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                        size: 13
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2348,
                                                                        columnNumber: 19
                                                                    }, this),
                                                                    " ",
                                                                    invSaving ? "Saving…" : editingInvoiceId ? `Update Invoice ${invNextNum}` : `Save Invoice ${invNextNum}`
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2345,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2328,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 2322,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 2262,
                                        columnNumber: 13
                                    }, this);
                                })()
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                            lineNumber: 1936,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                        lineNumber: 1934,
                        columnNumber: 9
                    }, this),
                    productCreate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$ProductCreateModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductCreateModal"], {
                        initialName: productCreate.initialName,
                        existingProducts: invProducts,
                        onClose: ()=>setProductCreate(null),
                        onCreated: handleProductCreated
                    }, void 0, false, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                        lineNumber: 2360,
                        columnNumber: 9
                    }, this),
                    showReceiveModal && receiveAccount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-[800] flex items-start justify-center backdrop-blur-sm pt-10 px-4 overflow-y-auto",
                        style: {
                            background: "rgba(10,30,50,.3)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-[20px] w-[420px] max-w-full overflow-hidden animate-slide-up",
                            style: {
                                boxShadow: "var(--shadow-lg)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between px-5 py-4 border-b border-[var(--gray-100)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-[15px] font-bold",
                                                    style: {
                                                        color: "var(--gray-900)"
                                                    },
                                                    children: "Receive Payment"
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 2376,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] mt-0.5",
                                                    style: {
                                                        color: "var(--gray-800)"
                                                    },
                                                    children: receiveAccount.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 2377,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 2375,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setShowReceiveModal(false);
                                                setReceiveAccount(null);
                                            },
                                            className: "w-7 h-7 rounded-full flex items-center justify-center border-none cursor-pointer",
                                            style: {
                                                background: "var(--gray-100)",
                                                color: "var(--gray-800)"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 2382,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 2379,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                    lineNumber: 2374,
                                    columnNumber: 13
                                }, this),
                                (()=>{
                                    const recvSigned = effectivePartySigned.get(receiveAccount.id) ?? 0;
                                    const bg = recvSigned > 0 ? "var(--green-light)" : recvSigned < 0 ? "var(--red-light)" : "var(--gray-100)";
                                    const fg = recvSigned > 0 ? "var(--green)" : recvSigned < 0 ? "var(--red)" : "var(--gray-600)";
                                    const label = recvSigned > 0 ? "credit" : recvSigned < 0 ? "debit" : "settled";
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mx-5 mt-4 px-4 py-3 rounded-[10px] flex flex-col gap-1",
                                        style: {
                                            background: bg
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] font-semibold",
                                                        style: {
                                                            color: "var(--gray-800)"
                                                        },
                                                        children: "Current balance"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2398,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[13px] font-extrabold font-mono",
                                                        style: {
                                                            color: fg
                                                        },
                                                        children: [
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(Math.abs(recvSigned)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] font-bold ml-1 uppercase",
                                                                children: label
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2401,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2399,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 2397,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[9px] font-medium m-0",
                                                style: {
                                                    color: "var(--gray-600)"
                                                },
                                                children: "Same total as the account ledger (invoices and cashbook)."
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 2404,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 2395,
                                        columnNumber: 13
                                    }, this);
                                })(),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-3.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[10px] font-bold tracking-[1.2px] uppercase",
                                                        style: {
                                                            color: "var(--blue-deeper)"
                                                        },
                                                        children: "Date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2415,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        value: rDate,
                                                        onChange: (e)=>setRDate(e.target.value),
                                                        className: "border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none",
                                                        style: inputStyle
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2416,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 2414,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[10px] font-bold tracking-[1.2px] uppercase",
                                                        style: {
                                                            color: "var(--blue-deeper)"
                                                        },
                                                        children: "Payment Method"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2423,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap border-[1.5px] rounded-[9px] overflow-hidden",
                                                        style: {
                                                            borderColor: "var(--gray-200)"
                                                        },
                                                        children: paymentMethods.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setRMethod(m.name),
                                                                className: "flex-1 min-w-[80px] py-2 text-[11.5px] font-semibold border-none cursor-pointer transition-all",
                                                                style: {
                                                                    background: rMethod === m.name ? "var(--blue-deeper)" : "var(--gray-50)",
                                                                    color: rMethod === m.name ? "#fff" : "var(--gray-500)"
                                                                },
                                                                children: m.name
                                                            }, m.id, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2426,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2424,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 2422,
                                                columnNumber: 17
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
                                                            "Description ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: "var(--gray-700)"
                                                                },
                                                                children: "(optional)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2441,
                                                                columnNumber: 33
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2440,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: rDesc,
                                                        onChange: (e)=>setRDesc(e.target.value),
                                                        placeholder: `Payment received from ${receiveAccount.name}`,
                                                        className: "border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none",
                                                        style: inputStyle
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2443,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 2439,
                                                columnNumber: 17
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
                                                            "Amount ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: "var(--red)"
                                                                },
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2452,
                                                                columnNumber: 28
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2451,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: rAmount,
                                                        onChange: (e)=>setRAmount(e.target.value),
                                                        type: "number",
                                                        min: "1",
                                                        placeholder: "0",
                                                        className: "border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none font-mono",
                                                        style: inputStyle
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2454,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 2450,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 2412,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                    lineNumber: 2411,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap justify-end gap-2 px-5 py-3.5 border-t border-[var(--gray-100)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setShowReceiveModal(false);
                                                setReceiveAccount(null);
                                            },
                                            className: "px-4 py-2 rounded-[9px] text-[12.5px] font-semibold border-[1.5px] cursor-pointer bg-white",
                                            style: {
                                                borderColor: "var(--gray-200)",
                                                color: "var(--blue-deeper)"
                                            },
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 2463,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>void handleReceivePayment(),
                                            disabled: receivingSaving,
                                            className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-[9px] text-[12.5px] font-semibold border-none cursor-pointer text-white disabled:opacity-60",
                                            style: {
                                                background: "#25D366",
                                                boxShadow: "0 2px 10px rgba(37, 211, 102, 0.35)"
                                            },
                                            title: "Save payment and open WhatsApp with receipt message",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhatsAppIcon, {
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 2473,
                                                    columnNumber: 17
                                                }, this),
                                                " ",
                                                receivingSaving ? "Saving…" : "Receive"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 2468,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                    lineNumber: 2462,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                            lineNumber: 2372,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                        lineNumber: 2370,
                        columnNumber: 9
                    }, this),
                    showPartyInvoicesModal && partyInvoicesAccount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "no-print fixed inset-0 z-[800] flex items-start justify-center backdrop-blur-sm pt-6 px-4 pb-8 overflow-y-auto",
                        style: {
                            background: "rgba(10,30,50,.35)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-[20px] w-[min(860px,100%)] max-w-full overflow-hidden animate-slide-up",
                            style: {
                                boxShadow: "var(--shadow-lg)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between px-5 py-4 border-b border-[var(--gray-100)]",
                                    style: {
                                        background: "linear-gradient(90deg, #6D28D9, #7C3AED)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                viewingInvoice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        setViewingInvoice(null);
                                                        setViewingInvoiceItems([]);
                                                    },
                                                    className: "w-7 h-7 rounded-full flex items-center justify-center border-none cursor-pointer",
                                                    style: {
                                                        background: "rgba(255,255,255,0.2)",
                                                        color: "white"
                                                    },
                                                    title: "Back to list",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                        size: 13
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2504,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 2497,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-[15px] font-bold text-white",
                                                            children: viewingInvoice ? `Invoice ${viewingInvoice.invoice_number}` : "Invoices"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 2508,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] mt-0.5 text-white/70",
                                                            children: partyInvoicesAccount.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 2511,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 2507,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 2495,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: closePartyInvoicesModal,
                                            className: "w-7 h-7 rounded-full flex items-center justify-center border-none cursor-pointer",
                                            style: {
                                                background: "rgba(255,255,255,0.2)",
                                                color: "white"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 2520,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 2514,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                    lineNumber: 2491,
                                    columnNumber: 13
                                }, this),
                                !viewingInvoice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-x-auto",
                                    children: partyInvoicesLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center py-12 gap-2",
                                        style: {
                                            color: "#7C3AED"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                size: 18,
                                                className: "animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 2529,
                                                columnNumber: 21
                                            }, this),
                                            " Loading invoices…"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 2528,
                                        columnNumber: 19
                                    }, this) : partyInvoicesList.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-center py-12 text-[13px]",
                                        style: {
                                            color: "var(--gray-500)"
                                        },
                                        children: "No invoices found for this party."
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 2532,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].table} min-w-[600px]`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        "#",
                                                        "Invoice #",
                                                        "Date",
                                                        "Description",
                                                        "Total",
                                                        "Received",
                                                        "Status",
                                                        ""
                                                    ].map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].th} ${i === 0 ? "text-center w-10" : "text-left"}`,
                                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].thStyle,
                                                            children: h
                                                        }, `pi-h-${i}`, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 2540,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 2538,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 2537,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: partyInvoicesList.map((inv, idx)=>{
                                                    const statusColor = inv.payment_status === "paid" ? {
                                                        bg: "var(--green-light)",
                                                        color: "var(--green)"
                                                    } : inv.payment_status === "partial" ? {
                                                        bg: "#FEF3C7",
                                                        color: "#B45309"
                                                    } : {
                                                        bg: "var(--red-light)",
                                                        color: "var(--red)"
                                                    };
                                                    const desc = [
                                                        inv.job_notes,
                                                        inv.job_name
                                                    ].map((s)=>String(s || "").trim()).find(Boolean) || "—";
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].row,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td} text-center font-mono text-[13px] font-semibold tabular-nums`,
                                                                style: {
                                                                    color: "var(--gray-600)"
                                                                },
                                                                children: idx + 1
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2561,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td} font-mono font-bold text-[13px]`,
                                                                style: {
                                                                    color: "#6D28D9"
                                                                },
                                                                children: inv.invoice_number
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2564,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td} text-[12.5px]`,
                                                                style: {
                                                                    color: "var(--gray-800)",
                                                                    whiteSpace: "nowrap"
                                                                },
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(inv.invoice_date)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2567,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td} text-[12.5px] max-w-[200px] truncate`,
                                                                style: {
                                                                    color: "var(--gray-700)"
                                                                },
                                                                title: desc,
                                                                children: desc
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2570,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td} font-mono font-bold text-[14px] text-right`,
                                                                style: {
                                                                    color: "var(--gray-900)"
                                                                },
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(inv.grand_total)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2573,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td} font-mono font-semibold text-[13px] text-right`,
                                                                style: {
                                                                    color: "var(--green)"
                                                                },
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(inv.amount_received)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2576,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].badge,
                                                                    style: {
                                                                        background: statusColor.bg,
                                                                        color: statusColor.color
                                                                    },
                                                                    children: inv.payment_status
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                    lineNumber: 2580,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2579,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>void openInvoiceDetail(inv),
                                                                    className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-[8px] text-[12px] font-semibold border-[1.5px] bg-white cursor-pointer transition-all",
                                                                    style: {
                                                                        borderColor: "#7C3AED",
                                                                        color: "#7C3AED"
                                                                    },
                                                                    onMouseEnter: (e)=>e.currentTarget.style.background = "#F5F3FF",
                                                                    onMouseLeave: (e)=>e.currentTarget.style.background = "white",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                            size: 11
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                            lineNumber: 2593,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        " View"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                    lineNumber: 2585,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2584,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, inv.id, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2560,
                                                        columnNumber: 27
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 2550,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 2536,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                    lineNumber: 2526,
                                    columnNumber: 15
                                }, this),
                                viewingInvoice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5",
                                            children: [
                                                {
                                                    label: "Invoice #",
                                                    value: viewingInvoice.invoice_number
                                                },
                                                {
                                                    label: "Date",
                                                    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(viewingInvoice.invoice_date)
                                                },
                                                {
                                                    label: "Party",
                                                    value: viewingInvoice.client_name
                                                },
                                                {
                                                    label: "Phone",
                                                    value: viewingInvoice.client_phone || "—"
                                                },
                                                {
                                                    label: "Payment Method",
                                                    value: viewingInvoice.payment_method || "—"
                                                },
                                                {
                                                    label: "Balance Due",
                                                    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(viewingInvoice.balance_due)
                                                }
                                            ].map(({ label, value })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-[var(--gray-50)] rounded-[10px] px-3 py-2.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[10px] font-bold tracking-[1px] uppercase mb-0.5",
                                                            style: {
                                                                color: "#6D28D9"
                                                            },
                                                            children: label
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 2619,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[13px] font-semibold",
                                                            style: {
                                                                color: "var(--gray-900)"
                                                            },
                                                            children: value
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 2620,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, label, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 2618,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 2609,
                                            columnNumber: 17
                                        }, this),
                                        viewingInvoice.job_notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4 px-3.5 py-2.5 rounded-[10px] border border-[var(--gray-100)] text-[12.5px]",
                                            style: {
                                                color: "var(--gray-700)",
                                                background: "var(--gray-50)"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold",
                                                    style: {
                                                        color: "#6D28D9"
                                                    },
                                                    children: "Description: "
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 2627,
                                                    columnNumber: 21
                                                }, this),
                                                viewingInvoice.job_notes
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 2626,
                                            columnNumber: 19
                                        }, this),
                                        viewingInvoiceItemsLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center py-8 gap-2",
                                            style: {
                                                color: "#7C3AED"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    size: 16,
                                                    className: "animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 2634,
                                                    columnNumber: 21
                                                }, this),
                                                " Loading items…"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 2633,
                                            columnNumber: 19
                                        }, this) : viewingInvoiceItems.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-[10px] border border-[var(--gray-100)] overflow-hidden mb-5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                className: "w-full border-collapse",
                                                style: {
                                                    minWidth: 500
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: [
                                                                "SN",
                                                                "Description",
                                                                "Qty",
                                                                "W (ft)",
                                                                "H (ft)",
                                                                "Sq.ft",
                                                                "Rate",
                                                                "Amount"
                                                            ].map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].thDense} ${i === 0 ? "text-center" : i >= 2 ? "text-right" : "text-left"}`,
                                                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].thStyle,
                                                                    children: h
                                                                }, `ii-h-${i}`, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                    lineNumber: 2642,
                                                                    columnNumber: 29
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 2640,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2639,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                        children: viewingInvoiceItems.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].row,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].tdDense} text-center font-mono text-[12px]`,
                                                                        style: {
                                                                            color: "var(--gray-500)"
                                                                        },
                                                                        children: i + 1
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2655,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].tdDense} text-[12.5px]`,
                                                                        style: {
                                                                            color: "var(--gray-900)"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "font-semibold",
                                                                                children: item.category || item.description || "—"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                                lineNumber: 2657,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            item.category && item.description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-[11px] whitespace-pre-wrap",
                                                                                style: {
                                                                                    color: "var(--gray-500)"
                                                                                },
                                                                                children: item.description
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                                lineNumber: 2659,
                                                                                columnNumber: 33
                                                                            }, this) : null
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2656,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right text-[12.5px]`,
                                                                        style: {
                                                                            color: "var(--gray-700)"
                                                                        },
                                                                        children: item.qty
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2662,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right text-[12.5px]`,
                                                                        style: {
                                                                            color: "var(--gray-700)"
                                                                        },
                                                                        children: item.width || "—"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2663,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right text-[12.5px]`,
                                                                        style: {
                                                                            color: "var(--gray-700)"
                                                                        },
                                                                        children: item.height || "—"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2664,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right text-[12.5px]`,
                                                                        style: {
                                                                            color: "var(--gray-700)"
                                                                        },
                                                                        children: item.sqft || "—"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2665,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right text-[12.5px]`,
                                                                        style: {
                                                                            color: "var(--gray-700)"
                                                                        },
                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(item.rate)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2666,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right font-bold text-[13px]`,
                                                                        style: {
                                                                            color: "var(--gray-900)"
                                                                        },
                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(item.amount)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 2667,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, item.id, true, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2654,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2652,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 2638,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 2637,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[12.5px] mb-5 text-center py-4",
                                            style: {
                                                color: "var(--gray-500)"
                                            },
                                            children: "No line items recorded for this invoice."
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 2674,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-end",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-[min(280px,100%)] flex flex-col gap-1.5",
                                                children: [
                                                    {
                                                        label: "New Bill",
                                                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(viewingInvoice.subtotal),
                                                        bold: false,
                                                        color: undefined
                                                    },
                                                    ...viewingInvoice.discount_amount > 0 ? [
                                                        {
                                                            label: `Discount`,
                                                            value: `− ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(viewingInvoice.discount_amount)}`,
                                                            bold: false,
                                                            color: undefined
                                                        }
                                                    ] : [],
                                                    ...viewingInvoice.gst_amount > 0 ? [
                                                        {
                                                            label: `GST (${viewingInvoice.gst_pct}%)`,
                                                            value: `+ ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(viewingInvoice.gst_amount)}`,
                                                            bold: false,
                                                            color: "#B45309"
                                                        }
                                                    ] : [],
                                                    ...viewingInvoice.stax_amount > 0 ? [
                                                        {
                                                            label: `Sales Tax (${viewingInvoice.stax_pct}%)`,
                                                            value: `+ ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(viewingInvoice.stax_amount)}`,
                                                            bold: false,
                                                            color: "#B45309"
                                                        }
                                                    ] : [],
                                                    ...viewingInvoice.bra_amount > 0 ? [
                                                        {
                                                            label: `BRA (${viewingInvoice.bra_pct}%)`,
                                                            value: `+ ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(viewingInvoice.bra_amount)}`,
                                                            bold: false,
                                                            color: "#B45309"
                                                        }
                                                    ] : [],
                                                    {
                                                        label: "Grand Total",
                                                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(viewingInvoice.grand_total),
                                                        bold: true,
                                                        color: undefined
                                                    },
                                                    {
                                                        label: "Amount Received",
                                                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(viewingInvoice.amount_received),
                                                        bold: false,
                                                        color: undefined
                                                    },
                                                    {
                                                        label: "Balance Due",
                                                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(viewingInvoice.balance_due),
                                                        bold: true,
                                                        color: undefined
                                                    }
                                                ].map(({ label, value, bold, color })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between px-3 py-1.5 rounded-[8px]",
                                                        style: {
                                                            background: bold ? "#F5F3FF" : "transparent"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[12px]",
                                                                style: {
                                                                    color: color ?? (bold ? "#6D28D9" : "var(--gray-600)"),
                                                                    fontWeight: bold ? 700 : 500
                                                                },
                                                                children: label
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2699,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono text-[13px]",
                                                                style: {
                                                                    color: color ?? (bold ? "#6D28D9" : "var(--gray-800)"),
                                                                    fontWeight: bold ? 800 : 600
                                                                },
                                                                children: value
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2700,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, label, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2698,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 2679,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 2678,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                    lineNumber: 2607,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between px-5 py-3.5 border-t border-[var(--gray-100)]",
                                    children: [
                                        viewingInvoice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>void openEditInvoiceModal(viewingInvoice),
                                                    className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-[9px] text-[12.5px] font-semibold border-[1.5px] bg-white cursor-pointer transition-all",
                                                    style: {
                                                        borderColor: "#7C3AED",
                                                        color: "#7C3AED"
                                                    },
                                                    onMouseEnter: (e)=>e.currentTarget.style.background = "#F5F3FF",
                                                    onMouseLeave: (e)=>e.currentTarget.style.background = "white",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                            size: 13
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 2719,
                                                            columnNumber: 21
                                                        }, this),
                                                        " Edit Invoice"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 2711,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    disabled: invPrinting || viewingInvoiceItemsLoading,
                                                    onClick: ()=>void printViewingInvoice("a4"),
                                                    className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-[9px] text-[12.5px] font-semibold border-[1.5px] bg-white cursor-pointer transition-all disabled:opacity-50",
                                                    style: {
                                                        borderColor: "var(--blue)",
                                                        color: "var(--blue)"
                                                    },
                                                    onMouseEnter: (e)=>e.currentTarget.style.background = "var(--blue-pale)",
                                                    onMouseLeave: (e)=>e.currentTarget.style.background = "white",
                                                    children: [
                                                        invPrinting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            size: 13,
                                                            className: "animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 2730,
                                                            columnNumber: 36
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                                            size: 13
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 2730,
                                                            columnNumber: 85
                                                        }, this),
                                                        "A4"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 2721,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    disabled: invPrinting || viewingInvoiceItemsLoading,
                                                    onClick: ()=>void printViewingInvoice("thermal"),
                                                    className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-[9px] text-[12.5px] font-semibold border-[1.5px] bg-white cursor-pointer transition-all disabled:opacity-50",
                                                    style: {
                                                        borderColor: "var(--gray-500)",
                                                        color: "var(--gray-700)"
                                                    },
                                                    onMouseEnter: (e)=>e.currentTarget.style.background = "var(--gray-50)",
                                                    onMouseLeave: (e)=>e.currentTarget.style.background = "white",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                                            size: 13
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 2742,
                                                            columnNumber: 21
                                                        }, this),
                                                        " Thermal"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 2733,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    disabled: invPrinting || viewingInvoiceItemsLoading,
                                                    onClick: ()=>void downloadInvoicePdf(),
                                                    className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-[9px] text-[12.5px] font-semibold border-[1.5px] bg-white cursor-pointer transition-all disabled:opacity-50",
                                                    style: {
                                                        borderColor: "#059669",
                                                        color: "#059669"
                                                    },
                                                    onMouseEnter: (e)=>e.currentTarget.style.background = "#F0FDF4",
                                                    onMouseLeave: (e)=>e.currentTarget.style.background = "white",
                                                    children: [
                                                        invPrinting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            size: 13,
                                                            className: "animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 2753,
                                                            columnNumber: 36
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                            size: 13
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 2753,
                                                            columnNumber: 85
                                                        }, this),
                                                        "Download PDF"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 2744,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    disabled: viewingInvoiceItemsLoading,
                                                    onClick: sendViewingInvoiceWhatsApp,
                                                    className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-[9px] text-[12.5px] font-semibold border-[1.5px] bg-white cursor-pointer transition-all disabled:opacity-50",
                                                    style: {
                                                        borderColor: "#128C7E",
                                                        color: "#128C7E"
                                                    },
                                                    onMouseEnter: (e)=>e.currentTarget.style.background = "#F0FDF9",
                                                    onMouseLeave: (e)=>e.currentTarget.style.background = "white",
                                                    title: "Send invoice details to customer on WhatsApp",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhatsAppIcon, {
                                                            size: 13
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 2766,
                                                            columnNumber: 21
                                                        }, this),
                                                        " WhatsApp"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 2756,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 2710,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 2770,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: closePartyInvoicesModal,
                                            className: "px-4 py-2 rounded-[9px] text-[12.5px] font-semibold border-[1.5px] cursor-pointer bg-white",
                                            style: {
                                                borderColor: "var(--gray-200)",
                                                color: "var(--blue-deeper)"
                                            },
                                            children: "Close"
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 2772,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                    lineNumber: 2708,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                            lineNumber: 2486,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                        lineNumber: 2482,
                        columnNumber: 9
                    }, this),
                    showModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-[800] flex items-start justify-center backdrop-blur-sm pt-10 px-4 overflow-y-auto",
                        style: {
                            background: "rgba(10,30,50,.3)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-[20px] w-[500px] max-w-full overflow-hidden animate-slide-up",
                            style: {
                                boxShadow: "var(--shadow-lg)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between px-5 py-4 border-b border-[var(--gray-100)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-[15px] font-bold",
                                            children: editingId ? "Edit Account" : "Add Account"
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 2793,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setShowModal(false);
                                                resetForm();
                                            },
                                            className: "w-7 h-7 rounded-full flex items-center justify-center border-none cursor-pointer",
                                            style: {
                                                background: "var(--gray-100)",
                                                color: "var(--gray-800)"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 2795,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 2794,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                    lineNumber: 2792,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-3.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-1 col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[10px] font-bold tracking-[1.2px] uppercase",
                                                        style: {
                                                            color: "var(--blue-deeper)"
                                                        },
                                                        children: "Head Account"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2802,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: fHead,
                                                        onChange: (e)=>setFHead(e.target.value),
                                                        className: "border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none cursor-pointer",
                                                        style: inputStyle,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "— Select Head —"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2805,
                                                                columnNumber: 21
                                                            }, this),
                                                            heads.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: h.id,
                                                                    children: [
                                                                        h.code,
                                                                        " — ",
                                                                        h.name
                                                                    ]
                                                                }, h.id, true, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                    lineNumber: 2806,
                                                                    columnNumber: 39
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2803,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 2801,
                                                columnNumber: 17
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
                                                            "Account Name ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: "var(--red)"
                                                                },
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2813,
                                                                columnNumber: 34
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2812,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: fName,
                                                        onChange: (e)=>setFName(e.target.value),
                                                        placeholder: "e.g. Paktel Pvt Ltd",
                                                        className: "border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none",
                                                        style: errors.name ? errorInputStyle : inputStyle
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2815,
                                                        columnNumber: 19
                                                    }, this),
                                                    errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-medium",
                                                        style: {
                                                            color: "var(--red)"
                                                        },
                                                        children: errors.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2818,
                                                        columnNumber: 35
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 2811,
                                                columnNumber: 17
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
                                                            "WhatsApp No ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: "var(--red)"
                                                                },
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2824,
                                                                columnNumber: 33
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2823,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: fWa,
                                                        onChange: (e)=>setFWa(validatePhone(e.target.value)),
                                                        placeholder: "03001234567",
                                                        maxLength: 11,
                                                        inputMode: "numeric",
                                                        className: "border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none font-mono",
                                                        style: errors.wa ? errorInputStyle : inputStyle
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2826,
                                                        columnNumber: 19
                                                    }, this),
                                                    errors.wa && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-medium",
                                                        style: {
                                                            color: "var(--red)"
                                                        },
                                                        children: errors.wa
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2830,
                                                        columnNumber: 33
                                                    }, this),
                                                    fWa && fWa.length < 11 && !errors.wa && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-medium",
                                                        style: {
                                                            color: "var(--orange)"
                                                        },
                                                        children: [
                                                            fWa.length,
                                                            "/11 digits"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2832,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 2822,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-1 col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[10px] font-bold tracking-[1.2px] uppercase",
                                                        style: {
                                                            color: "var(--blue-deeper)"
                                                        },
                                                        children: "Address"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2838,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: fAddr,
                                                        onChange: (e)=>setFAddr(e.target.value),
                                                        placeholder: "Full address",
                                                        className: "border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none",
                                                        style: inputStyle
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2839,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 2837,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[10px] font-bold tracking-[1.2px] uppercase",
                                                        style: {
                                                            color: "var(--blue-deeper)"
                                                        },
                                                        children: "Opening Balance"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2845,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: fBal,
                                                        onChange: (e)=>setFBal(e.target.value),
                                                        type: "number",
                                                        placeholder: "0",
                                                        className: "border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none",
                                                        style: inputStyle
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2846,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 2844,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[10px] font-bold tracking-[1.2px] uppercase",
                                                        style: {
                                                            color: "var(--blue-deeper)"
                                                        },
                                                        children: "Balance Type"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2852,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex border-[1.5px] rounded-[9px] overflow-hidden",
                                                        style: {
                                                            borderColor: "var(--gray-200)"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setFBalType("credit"),
                                                                className: "flex-1 py-2 text-[12.5px] font-semibold border-none cursor-pointer transition-all",
                                                                style: {
                                                                    background: fBalType === "credit" ? "var(--green)" : "var(--gray-50)",
                                                                    color: fBalType === "credit" ? "#fff" : "var(--gray-500)"
                                                                },
                                                                children: "Credit"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2854,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setFBalType("debit"),
                                                                className: "flex-1 py-2 text-[12.5px] font-semibold border-none cursor-pointer transition-all",
                                                                style: {
                                                                    background: fBalType === "debit" ? "var(--red)" : "var(--gray-50)",
                                                                    color: fBalType === "debit" ? "#fff" : "var(--gray-500)"
                                                                },
                                                                children: "Debit"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2863,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2853,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 2851,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 2799,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                    lineNumber: 2798,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end gap-2 px-5 py-3.5 border-t border-[var(--gray-100)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowModal(false),
                                            className: "px-4 py-2 rounded-[9px] text-[12.5px] font-semibold border-[1.5px] cursor-pointer bg-white",
                                            style: {
                                                borderColor: "var(--gray-200)",
                                                color: "var(--blue-deeper)"
                                            },
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 2877,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>run(handleSave),
                                            disabled: saving,
                                            className: "px-4 py-2 rounded-[9px] text-[12.5px] font-semibold border-none cursor-pointer text-white disabled:opacity-60 disabled:cursor-not-allowed",
                                            style: {
                                                background: "linear-gradient(135deg, var(--blue-deeper), var(--blue))"
                                            },
                                            children: saving ? "Saving…" : editingId ? "Update Account" : "Save Account"
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 2882,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                    lineNumber: 2876,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                            lineNumber: 2790,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                        lineNumber: 2787,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                lineNumber: 1395,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "inv-a4-print-only",
                style: {
                    background: "#fff",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    color: "#111",
                    fontSize: 11
                },
                children: viewingInvoice ? (()=>{
                    const inv = viewingInvoice;
                    const items = viewingInvoiceItems;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$PrintHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrintHeader"], {}, void 0, false, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                lineNumber: 2900,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "4px 12px",
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
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 2902,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: "monospace",
                                            fontWeight: 800,
                                            fontSize: 13
                                        },
                                        children: inv.invoice_number
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 2903,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                lineNumber: 2901,
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
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 2907,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontWeight: 900,
                                                    color: "#111",
                                                    fontSize: 16,
                                                    lineHeight: 1.2
                                                },
                                                children: inv.client_name
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 2908,
                                                columnNumber: 17
                                            }, this),
                                            inv.client_phone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 11,
                                                    color: "#111",
                                                    marginTop: 3
                                                },
                                                children: inv.client_phone
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 2909,
                                                columnNumber: 37
                                            }, this) : null,
                                            inv.job_notes || inv.job_name ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                        children: "Description: "
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2912,
                                                        columnNumber: 21
                                                    }, this),
                                                    inv.job_notes || inv.job_name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 2911,
                                                columnNumber: 19
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 2906,
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
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2918,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontWeight: 700,
                                                            fontSize: 12
                                                        },
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(inv.invoice_date)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2919,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 2917,
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
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 2922,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 2921,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 2916,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                lineNumber: 2905,
                                columnNumber: 13
                            }, this),
                            (()=>{
                                // CSS-grid layout (instead of <table>) so the items area can flex-grow
                                // and the filler block stretches the column lines to the totals block.
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
                                                    label: "Sq.ft",
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
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 2945,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 2934,
                                            columnNumber: 19
                                        }, this),
                                        items.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                padding: 16,
                                                textAlign: "center",
                                                color: "#111",
                                                border: "1px solid #000"
                                            },
                                            children: "No line items"
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 2952,
                                            columnNumber: 21
                                        }, this) : items.map((it, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2955,
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
                                                                children: it.category || it.description || "—"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2957,
                                                                columnNumber: 25
                                                            }, this),
                                                            it.category && it.description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontWeight: 400,
                                                                    fontSize: 11,
                                                                    color: "#444",
                                                                    marginTop: 2,
                                                                    whiteSpace: "pre-wrap"
                                                                },
                                                                children: it.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 2959,
                                                                columnNumber: 27
                                                            }, this) : null
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2956,
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
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2962,
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
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2963,
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
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2964,
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
                                                        children: it.sqft || "—"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2965,
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
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2966,
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
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 2967,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 2954,
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
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 2972,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        borderLeft: "1px solid #000"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 2973,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        borderLeft: "1px solid #000"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 2974,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        borderLeft: "1px solid #000"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 2975,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        borderLeft: "1px solid #000"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 2976,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        borderLeft: "1px solid #000"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 2977,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        borderLeft: "1px solid #000"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 2978,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        borderLeft: "1px solid #000",
                                                        borderRight: "1px solid #000"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 2979,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 2971,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                    lineNumber: 2932,
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
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 2987,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: "monospace",
                                                        fontWeight: 700,
                                                        color: "#111"
                                                    },
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(inv.previous_balance)
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 2988,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 2986,
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
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 2991,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: "monospace",
                                                        fontWeight: 900,
                                                        fontSize: 14,
                                                        color: "#111"
                                                    },
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(inv.grand_total)
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 2992,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 2990,
                                            columnNumber: 17
                                        }, this),
                                        inv.gst_amount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                        inv.gst_pct,
                                                        "%)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 2996,
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
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(inv.gst_amount)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 2997,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 2995,
                                            columnNumber: 19
                                        }, this),
                                        inv.stax_amount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                        inv.stax_pct,
                                                        "%)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 3002,
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
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(inv.stax_amount)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 3003,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 3001,
                                            columnNumber: 19
                                        }, this),
                                        inv.bra_amount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                        inv.bra_pct,
                                                        "%)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 3008,
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
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(inv.bra_amount)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 3009,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 3007,
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
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 3013,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: "monospace",
                                                        fontWeight: 700,
                                                        color: "#111"
                                                    },
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(inv.amount_received)
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 3014,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 3012,
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
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 3017,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: "monospace",
                                                        fontWeight: 900,
                                                        fontSize: 14,
                                                        color: "#111"
                                                    },
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(inv.grand_total + inv.previous_balance - inv.amount_received)
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 3018,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 3016,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                    lineNumber: 2985,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                lineNumber: 2984,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$PrintFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrintFooter"], {}, void 0, false, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                lineNumber: 3022,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true);
                })() : null
            }, void 0, false, {
                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                lineNumber: 2894,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "inv-thermal-print-only",
                style: {
                    background: "#fff",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    color: "#000",
                    fontSize: 11,
                    width: "72mm",
                    margin: "0 auto"
                },
                children: viewingInvoice ? (()=>{
                    const inv = viewingInvoice;
                    const items = viewingInvoiceItems;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$ThermalHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThermalHeader"], {}, void 0, false, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                lineNumber: 3035,
                                columnNumber: 13
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
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 3038,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "monospace",
                                                    fontWeight: 800
                                                },
                                                children: inv.invoice_number
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 3039,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 3037,
                                        columnNumber: 15
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
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 3042,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(inv.invoice_date)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 3043,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 3041,
                                        columnNumber: 15
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
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 3046,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: inv.payment_method || "—"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 3047,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 3045,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                lineNumber: 3036,
                                columnNumber: 13
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
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 3051,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontWeight: 900,
                                            fontSize: 13
                                        },
                                        children: inv.client_name
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 3052,
                                        columnNumber: 15
                                    }, this),
                                    inv.client_phone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 10,
                                            marginTop: 2
                                        },
                                        children: inv.client_phone
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 3053,
                                        columnNumber: 35
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                lineNumber: 3050,
                                columnNumber: 13
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
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 3059,
                                                        columnNumber: 21
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
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 3060,
                                                        columnNumber: 21
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
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 3061,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 3058,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 3057,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: items.map((it, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
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
                                                                    children: it.category || it.description || "—"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                    lineNumber: 3068,
                                                                    columnNumber: 25
                                                                }, this),
                                                                it.category && it.description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: 9,
                                                                        color: "#333",
                                                                        whiteSpace: "pre-wrap"
                                                                    },
                                                                    children: it.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                    lineNumber: 3070,
                                                                    columnNumber: 27
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
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                    lineNumber: 3072,
                                                                    columnNumber: 52
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
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                    lineNumber: 3073,
                                                                    columnNumber: 36
                                                                }, this) : null
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 3067,
                                                            columnNumber: 23
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
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 3075,
                                                            columnNumber: 23
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
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                            lineNumber: 3076,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                    lineNumber: 3066,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 3064,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                    lineNumber: 3056,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                lineNumber: 3055,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: "5px 4px",
                                    borderBottom: "1px dashed #000"
                                },
                                children: [
                                    inv.previous_balance > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 3085,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "monospace"
                                                },
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(inv.previous_balance)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 3086,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 3084,
                                        columnNumber: 17
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
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 3090,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "monospace"
                                                },
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(inv.grand_total)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 3091,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 3089,
                                        columnNumber: 15
                                    }, this),
                                    inv.gst_amount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                    inv.gst_pct,
                                                    "%)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 3095,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "monospace"
                                                },
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(inv.gst_amount)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 3096,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 3094,
                                        columnNumber: 17
                                    }, this),
                                    inv.stax_amount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                    inv.stax_pct,
                                                    "%)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 3101,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "monospace"
                                                },
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(inv.stax_amount)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 3102,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 3100,
                                        columnNumber: 17
                                    }, this),
                                    inv.bra_amount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                    inv.bra_pct,
                                                    "%)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 3107,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "monospace"
                                                },
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(inv.bra_amount)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 3108,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 3106,
                                        columnNumber: 17
                                    }, this),
                                    inv.previous_balance > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 3113,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "monospace"
                                                },
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(inv.grand_total + inv.previous_balance)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 3114,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 3112,
                                        columnNumber: 17
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
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 3118,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "monospace"
                                                },
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(inv.amount_received)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 3119,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 3117,
                                        columnNumber: 15
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
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 3122,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "monospace"
                                                },
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(inv.grand_total + inv.previous_balance - inv.amount_received)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 3123,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 3121,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                lineNumber: 3082,
                                columnNumber: 13
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
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 3127,
                                        columnNumber: 15
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
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 3128,
                                                columnNumber: 32
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 3128,
                                        columnNumber: 15
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
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 3129,
                                                columnNumber: 35
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 3129,
                                        columnNumber: 15
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
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 3130,
                                        columnNumber: 15
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
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 3131,
                                                columnNumber: 35
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 3131,
                                        columnNumber: 15
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
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 3132,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 3132,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "Branch: Suraj Ganj Bazar, Quetta"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 3133,
                                        columnNumber: 15
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
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 3134,
                                                columnNumber: 49
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 3134,
                                        columnNumber: 15
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
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 3135,
                                                columnNumber: 26
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 3135,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                lineNumber: 3126,
                                columnNumber: 13
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
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 3138,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 9,
                                            marginTop: 3
                                        },
                                        children: "Auto Generated Invoice"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 3139,
                                        columnNumber: 15
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
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 3140,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                lineNumber: 3137,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true);
                })() : null
            }, void 0, false, {
                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                lineNumber: 3029,
                columnNumber: 5
            }, this),
            ledgerAccount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ledgerPdfRef,
                className: "ledger-a4-print-only",
                style: {
                    background: "#fff",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    color: "#111",
                    fontSize: 11
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$PrintHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrintHeader"], {}, void 0, false, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                        lineNumber: 3150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "4px 12px",
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
                                children: "Account Ledger"
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                lineNumber: 3154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "monospace",
                                    fontWeight: 800,
                                    fontSize: 13
                                },
                                children: ledgerDateFrom.trim() || ledgerDateTo.trim() ? `${ledgerDateFrom.trim() ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(ledgerDateFrom.trim()) : "Start"} — ${ledgerDateTo.trim() ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(ledgerDateTo.trim()) : "End"}` : "All Transactions"
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                lineNumber: 3155,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                        lineNumber: 3153,
                        columnNumber: 9
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
                                        children: "Statement For"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 3165,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontWeight: 900,
                                            color: "#111",
                                            fontSize: 16,
                                            lineHeight: 1.2
                                        },
                                        children: ledgerAccount.name
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 3166,
                                        columnNumber: 13
                                    }, this),
                                    ledgerAccount.phone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 11,
                                            color: "#111",
                                            marginTop: 3
                                        },
                                        children: ledgerAccount.phone
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 3167,
                                        columnNumber: 36
                                    }, this) : null,
                                    ledgerDateFrom.trim() && ledgerOpeningBefore !== 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                children: [
                                                    "Opening balance (before ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(ledgerDateFrom.trim()),
                                                    "): "
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 3170,
                                                columnNumber: 17
                                            }, this),
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(Math.abs(ledgerOpeningBefore)),
                                            ledgerOpeningBefore > 0 ? " receivable" : " payable"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 3169,
                                        columnNumber: 15
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                lineNumber: 3164,
                                columnNumber: 11
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
                                                children: "Printed:"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 3177,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontWeight: 700,
                                                    fontSize: 12
                                                },
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["todayISO"])())
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 3178,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 3176,
                                        columnNumber: 13
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
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 3181,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 3180,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                lineNumber: 3175,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                        lineNumber: 3163,
                        columnNumber: 9
                    }, this),
                    ledgerAllRows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            display: "flex",
                            flexDirection: "column"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                padding: "12px 12px",
                                fontSize: 12,
                                color: "#111",
                                margin: 0
                            },
                            children: "No ledger entries for this account."
                        }, void 0, false, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                            lineNumber: 3188,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                        lineNumber: 3187,
                        columnNumber: 11
                    }, this) : ledgerDisplayWithBal.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            display: "flex",
                            flexDirection: "column"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                padding: "12px 12px",
                                fontSize: 12,
                                color: "#111",
                                margin: 0
                            },
                            children: "No entries in the selected date range."
                        }, void 0, false, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                            lineNumber: 3192,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                        lineNumber: 3191,
                        columnNumber: 11
                    }, this) : (()=>{
                        // CSS-grid layout (mirrors A4 invoice items table) so column lines extend to the totals.
                        const gridCols = "11% 17% 33% 10% 10% 10% 9%";
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
                                            label: "Date",
                                            align: "left"
                                        },
                                        {
                                            label: "Invoice # / Ref",
                                            align: "left"
                                        },
                                        {
                                            label: "Description",
                                            align: "left"
                                        },
                                        {
                                            label: "Debit",
                                            align: "right"
                                        },
                                        {
                                            label: "Credit",
                                            align: "right"
                                        },
                                        {
                                            label: "Balance",
                                            align: "right"
                                        },
                                        {
                                            label: "Method",
                                            align: "left"
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
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 3211,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                    lineNumber: 3201,
                                    columnNumber: 15
                                }, this),
                                ledgerDisplayWithBal.map((r, idx)=>{
                                    const items = r.invoiceId ? ledgerItemsByInvoice[r.invoiceId] ?? [] : [];
                                    const rowBg = idx % 2 === 0 ? "#fff" : "#f8fafc";
                                    // The product detail strip keeps the first two outer columns (Date,
                                    // Invoice#) as empty bordered cells so the main table's vertical lines
                                    // run unbroken; the products table fills the remaining width (aligned to
                                    // the Description column's left edge through the right border).
                                    const detailCols = "11% 17% 72%";
                                    const itemCols = "37% 10% 10% 13% 8% 11% 11%";
                                    const itemHeads = [
                                        {
                                            label: "Product",
                                            align: "left"
                                        },
                                        {
                                            label: "W (ft)",
                                            align: "right"
                                        },
                                        {
                                            label: "H (ft)",
                                            align: "right"
                                        },
                                        {
                                            label: "Sq.ft",
                                            align: "right"
                                        },
                                        {
                                            label: "Qty",
                                            align: "right"
                                        },
                                        {
                                            label: "Rate",
                                            align: "right"
                                        },
                                        {
                                            label: "Amount",
                                            align: "right"
                                        }
                                    ];
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "grid",
                                                    gridTemplateColumns: gridCols,
                                                    background: rowBg,
                                                    borderBottom: "1px solid #000"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            padding: cellPad,
                                                            color: "#111",
                                                            borderLeft: "1px solid #000"
                                                        },
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(r.date)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 3253,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            padding: cellPad,
                                                            fontWeight: 800,
                                                            color: "#7f1d1d",
                                                            fontFamily: "monospace",
                                                            borderLeft: "1px solid #000"
                                                        },
                                                        children: r.doc
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 3254,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            padding: cellPad,
                                                            color: "#111",
                                                            borderLeft: "1px solid #000"
                                                        },
                                                        children: r.desc
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 3255,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            padding: cellPad,
                                                            textAlign: "right",
                                                            fontFamily: "monospace",
                                                            fontWeight: 700,
                                                            color: r.debit > 0 ? "#111" : "#ccc",
                                                            borderLeft: "1px solid #000"
                                                        },
                                                        children: r.debit > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(r.debit) : "—"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 3256,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            padding: cellPad,
                                                            textAlign: "right",
                                                            fontFamily: "monospace",
                                                            fontWeight: 700,
                                                            color: r.credit > 0 ? "#111" : "#ccc",
                                                            borderLeft: "1px solid #000"
                                                        },
                                                        children: r.credit > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(r.credit) : "—"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 3259,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            padding: cellPad,
                                                            textAlign: "right",
                                                            fontFamily: "monospace",
                                                            fontWeight: 800,
                                                            color: "#111",
                                                            borderLeft: "1px solid #000"
                                                        },
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(r.balance)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 3262,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            padding: cellPad,
                                                            color: "#333",
                                                            borderLeft: "1px solid #000",
                                                            borderRight: "1px solid #000"
                                                        },
                                                        children: r.method || "—"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 3265,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 3250,
                                                columnNumber: 17
                                            }, this),
                                            items.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "grid",
                                                    gridTemplateColumns: detailCols,
                                                    background: rowBg,
                                                    borderBottom: "1px solid #000"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            borderLeft: "1px solid #000"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 3271,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            borderLeft: "1px solid #000"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 3272,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            borderLeft: "1px solid #000",
                                                            borderRight: "1px solid #000"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: "grid",
                                                                    gridTemplateColumns: itemCols,
                                                                    background: "#f1d6d6",
                                                                    borderBottom: "1px solid #000"
                                                                },
                                                                children: itemHeads.map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: 8.5,
                                                                            fontWeight: 700,
                                                                            textTransform: "uppercase",
                                                                            letterSpacing: 0.3,
                                                                            color: "#7f1d1d",
                                                                            textAlign: h.align,
                                                                            padding: "2px 5px",
                                                                            borderLeft: i === 0 ? "none" : "1px solid #c98a8a"
                                                                        },
                                                                        children: h.label
                                                                    }, h.label, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                        lineNumber: 3277,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                lineNumber: 3275,
                                                                columnNumber: 23
                                                            }, this),
                                                            items.map((it, ii)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: "grid",
                                                                        gridTemplateColumns: itemCols,
                                                                        fontSize: 10,
                                                                        borderBottom: ii === items.length - 1 ? "none" : "1px solid #ddd"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                padding: "2px 5px",
                                                                                color: "#222"
                                                                            },
                                                                            children: String(it.description || it.category || "Item").trim() || "Item"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                            lineNumber: 3285,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                padding: "2px 5px",
                                                                                textAlign: "right",
                                                                                fontFamily: "monospace",
                                                                                color: "#222",
                                                                                borderLeft: "1px solid #eee"
                                                                            },
                                                                            children: Number(it.width) || "—"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                            lineNumber: 3286,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                padding: "2px 5px",
                                                                                textAlign: "right",
                                                                                fontFamily: "monospace",
                                                                                color: "#222",
                                                                                borderLeft: "1px solid #eee"
                                                                            },
                                                                            children: Number(it.height) || "—"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                            lineNumber: 3287,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                padding: "2px 5px",
                                                                                textAlign: "right",
                                                                                fontFamily: "monospace",
                                                                                color: "#222",
                                                                                borderLeft: "1px solid #eee"
                                                                            },
                                                                            children: Number(it.sqft) ? Number(it.sqft).toLocaleString() : "—"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                            lineNumber: 3288,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                padding: "2px 5px",
                                                                                textAlign: "right",
                                                                                fontFamily: "monospace",
                                                                                color: "#222",
                                                                                borderLeft: "1px solid #eee"
                                                                            },
                                                                            children: Number(it.qty) || "—"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                            lineNumber: 3289,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                padding: "2px 5px",
                                                                                textAlign: "right",
                                                                                fontFamily: "monospace",
                                                                                color: "#222",
                                                                                borderLeft: "1px solid #eee"
                                                                            },
                                                                            children: Number(it.rate) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(Number(it.rate)) : "—"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                            lineNumber: 3290,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                padding: "2px 5px",
                                                                                textAlign: "right",
                                                                                fontFamily: "monospace",
                                                                                color: "#111",
                                                                                fontWeight: 700,
                                                                                borderLeft: "1px solid #eee"
                                                                            },
                                                                            children: Number(it.amount) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(Number(it.amount)) : "—"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                            lineNumber: 3291,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, it.id, true, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                                    lineNumber: 3284,
                                                                    columnNumber: 25
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                        lineNumber: 3273,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                                lineNumber: 3270,
                                                columnNumber: 19
                                            }, this) : null
                                        ]
                                    }, `${r.sortAt}-p-${idx}`, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 3249,
                                        columnNumber: 17
                                    }, this);
                                }),
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
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 3303,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                borderLeft: "1px solid #000"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 3304,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                borderLeft: "1px solid #000"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 3305,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                borderLeft: "1px solid #000"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 3306,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                borderLeft: "1px solid #000"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 3307,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                borderLeft: "1px solid #000"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 3308,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                borderLeft: "1px solid #000",
                                                borderRight: "1px solid #000"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                            lineNumber: 3309,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                    lineNumber: 3302,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                            lineNumber: 3199,
                            columnNumber: 13
                        }, this);
                    })(),
                    ledgerDisplayWithBal.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "flex-end",
                            padding: "0 12px",
                            marginBottom: 16
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: 260
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        children: [
                                            "Closing Balance",
                                            ledgerDateFrom.trim() || ledgerDateTo.trim() ? " (period)" : ""
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 3320,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: "monospace",
                                            fontWeight: 900,
                                            fontSize: 14,
                                            color: "#111"
                                        },
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(ledgerDisplayWithBal.at(-1)?.balance ?? 0)
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                        lineNumber: 3323,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                                lineNumber: 3319,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                            lineNumber: 3318,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                        lineNumber: 3317,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$PrintFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrintFooter"], {}, void 0, false, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                        lineNumber: 3331,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Star-Panaflex/app/(dashboard)/accounts/page.tsx",
                lineNumber: 3149,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(AccountsPage, "fM4BvigcsSys7C9mPkglQaID7is=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$UserContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$paymentMethods$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePaymentMethods"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$useSaving$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSaving"]
    ];
});
_c1 = AccountsPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "WhatsAppIcon");
__turbopack_context__.k.register(_c1, "AccountsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Star-Panaflex_0xly_9b._.js.map