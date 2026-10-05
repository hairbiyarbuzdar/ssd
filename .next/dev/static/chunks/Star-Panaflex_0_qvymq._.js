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
    "createExpense",
    ()=>createExpense,
    "expenseCashbookDesc",
    ()=>expenseCashbookDesc,
    "nextExpenseNumber",
    ()=>nextExpenseNumber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/db.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/helpers.ts [app-client] (ecmascript)");
;
;
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
    if (input.amount > 0) {
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
"[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExpensePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/db.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/components/Toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/helpers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/dataTableStyles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$ConfirmModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/components/ConfirmModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$activityLog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/activityLog.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$useSaving$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/useSaving.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$paymentMethods$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/paymentMethods.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$expenses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/expenses.ts [app-client] (ecmascript)");
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
function thisMonthPrefix() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}
// ── KPI card (matches reference: filled icon chip + big mono value) ──
function Kpi({ label, value, color, icon }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative overflow-hidden bg-white rounded-[16px] border border-[var(--gray-100)] p-5",
        style: {
            boxShadow: "var(--shadow-sm)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-12 h-12 rounded-[12px] flex items-center justify-center mb-3",
                style: {
                    background: color
                },
                children: icon
            }, void 0, false, {
                fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[24px] font-extrabold leading-tight",
                style: {
                    color: "var(--gray-900)"
                },
                children: value
            }, void 0, false, {
                fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[12px] font-semibold mt-0.5",
                style: {
                    color: "var(--gray-600)"
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = Kpi;
function ExpensePage() {
    _s();
    const { saving, run } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$useSaving$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSaving"])();
    const { methods: paymentMethods } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$paymentMethods$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePaymentMethods"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [expenses, setExpenses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [totalIncome, setTotalIncome] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Add / edit modal
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [fCategory, setFCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [fAmount, setFAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [fMethod, setFMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Cash");
    const [fDate, setFDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["todayISO"])());
    const [fDesc, setFDesc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const fetchData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ExpensePage.useCallback[fetchData]": async ()=>{
            setLoading(true);
            const [{ data: expData }, { data: invData }] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("expenses").select("*").order("date", {
                    ascending: false
                }).order("created_at", {
                    ascending: false
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("invoices").select("grand_total")
            ]);
            if (expData) setExpenses(expData);
            setTotalIncome((invData ?? []).reduce({
                "ExpensePage.useCallback[fetchData]": (s, i)=>s + Number(i.grand_total)
            }["ExpensePage.useCallback[fetchData]"], 0));
            setLoading(false);
        }
    }["ExpensePage.useCallback[fetchData]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExpensePage.useEffect": ()=>{
            void fetchData();
        }
    }["ExpensePage.useEffect"], [
        fetchData
    ]);
    const totalExpenses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ExpensePage.useMemo[totalExpenses]": ()=>expenses.reduce({
                "ExpensePage.useMemo[totalExpenses]": (s, e)=>s + Number(e.amount)
            }["ExpensePage.useMemo[totalExpenses]"], 0)
    }["ExpensePage.useMemo[totalExpenses]"], [
        expenses
    ]);
    const thisMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ExpensePage.useMemo[thisMonth]": ()=>{
            const ym = thisMonthPrefix();
            return expenses.filter({
                "ExpensePage.useMemo[thisMonth]": (e)=>String(e.date).startsWith(ym)
            }["ExpensePage.useMemo[thisMonth]"]).reduce({
                "ExpensePage.useMemo[thisMonth]": (s, e)=>s + Number(e.amount)
            }["ExpensePage.useMemo[thisMonth]"], 0);
        }
    }["ExpensePage.useMemo[thisMonth]"], [
        expenses
    ]);
    const netProfit = totalIncome - totalExpenses;
    function openAdd() {
        setEditing(null);
        setFCategory("");
        setFAmount("");
        setFMethod(paymentMethods[0]?.name ?? "Cash");
        setFDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["todayISO"])());
        setFDesc("");
        setShowModal(true);
    }
    function openEdit(exp) {
        setEditing(exp);
        setFCategory(exp.category ?? "");
        setFAmount(String(Number(exp.amount) || ""));
        setFMethod(exp.method || "Cash");
        setFDate(String(exp.date).slice(0, 10) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["todayISO"])());
        setFDesc(exp.description ?? "");
        setShowModal(true);
    }
    async function handleSubmit() {
        const amt = parseFloat(String(fAmount).replace(/,/g, "")) || 0;
        if (amt <= 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Enter an amount greater than 0", "err");
            return;
        }
        if (!fMethod || !paymentMethods.some((m)=>m.name === fMethod)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Select a valid payment method", "err");
            return;
        }
        await run(async ()=>{
            // Funds check — ignore this expense's own existing cash impact when editing.
            const { data: cbAll } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("cashbook").select("id, type, amount, method, description");
            const entries = (cbAll ?? []).filter((e)=>!editing?.cashbook_entry_id || e.id !== editing.cashbook_entry_id);
            const balances = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$paymentMethods$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeMethodBalances"])(entries, paymentMethods);
            const available = balances[fMethod] ?? 0;
            if (amt > available) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(`Not enough funds in "${fMethod}" (available ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(available)}).`, "err");
                return;
            }
            const category = fCategory.trim();
            const description = fDesc.trim();
            if (editing) {
                const cbDesc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$expenses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expenseCashbookDesc"])(category, editing.invoice_number);
                // Reconcile the linked cash-out: create it if this was a pending (0)
                // expense now getting an amount, update it if it already exists.
                let cashbookEntryId = editing.cashbook_entry_id ?? null;
                if (cashbookEntryId) {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("cashbook").update({
                        amount: amt,
                        method: fMethod,
                        date: fDate,
                        description: cbDesc
                    }).eq("id", cashbookEntryId);
                } else {
                    const { data: cbOut, error: cbErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("cashbook").insert({
                        type: "out",
                        description: cbDesc,
                        amount: amt,
                        date: fDate,
                        account_name: "",
                        method: fMethod,
                        reference: editing.invoice_id ?? ""
                    }).select().single();
                    if (cbErr) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(cbErr.message, "err");
                        return;
                    }
                    cashbookEntryId = cbOut?.id ?? null;
                }
                const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("expenses").update({
                    category,
                    description,
                    amount: amt,
                    method: fMethod,
                    date: fDate,
                    cashbook_entry_id: cashbookEntryId
                }).eq("id", editing.id);
                if (error) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(error.message, "err");
                    return;
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Expense updated", "ok");
            } else {
                const { error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$expenses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createExpense"])({
                    category,
                    description,
                    amount: amt,
                    method: fMethod,
                    date: fDate
                });
                if (error) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(error, "err");
                    return;
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Expense added", "ok");
            }
            setShowModal(false);
            void fetchData();
        });
    }
    async function handleDelete(exp) {
        const ok = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$ConfirmModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["confirmDialog"])({
            title: "Delete expense?",
            message: `Delete this expense of ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(Number(exp.amount))}? The linked cash-out will be reversed and the amount returned to "${exp.method}".`,
            details: [
                exp.expense_number ? `No: ${exp.expense_number}` : "",
                exp.category ? `Category: ${exp.category}` : ""
            ].filter(Boolean).join("\n") || undefined,
            tone: "danger"
        });
        if (!ok) return;
        await run(async ()=>{
            if (exp.cashbook_entry_id) await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("cashbook").delete().eq("id", exp.cashbook_entry_id);
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("expenses").delete().eq("id", exp.id);
            if (error) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(error.message, "err");
                return;
            }
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$activityLog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logActivity"])({
                action: "delete",
                entityType: "expense",
                entityId: exp.id,
                title: "Expense Deleted",
                subtitle: `${exp.expense_number || ""} ${exp.category || exp.description || "Expense"}`.trim(),
                amount: Number(exp.amount),
                metadata: {
                    method: exp.method,
                    invoice_number: exp.invoice_number
                }
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Expense deleted", "ok");
            void fetchData();
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "no-print animate-fade-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-3 mb-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-extrabold",
                                style: {
                                    color: "var(--gray-900)"
                                },
                                children: "Expense"
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs mt-0.5",
                                style: {
                                    color: "var(--gray-800)"
                                },
                                children: "Track business costs. Each expense is a real cash-out from a payment method."
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: openAdd,
                        className: "inline-flex items-center gap-1.5 px-5 py-2.5 rounded-[9px] text-[12.5px] font-semibold border-none cursor-pointer text-white shrink-0",
                        style: {
                            background: "linear-gradient(135deg, var(--blue-deeper), var(--blue))",
                            boxShadow: "0 2px 10px rgba(220,38,38,.28)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this),
                            " Add Expense"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Kpi, {
                        label: "Total Income",
                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(totalIncome),
                        color: "var(--blue)",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                            size: 22,
                            color: "#fff"
                        }, void 0, false, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                            lineNumber: 186,
                            columnNumber: 97
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Kpi, {
                        label: "Total Expenses",
                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(totalExpenses),
                        color: "var(--red)",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                            size: 22,
                            color: "#fff"
                        }, void 0, false, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                            lineNumber: 187,
                            columnNumber: 100
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Kpi, {
                        label: "This Month",
                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(thisMonth),
                        color: "var(--orange)",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                            size: 22,
                            color: "#fff"
                        }, void 0, false, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                            lineNumber: 188,
                            columnNumber: 95
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Kpi, {
                        label: "Net Profit",
                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(netProfit),
                        color: "var(--green)",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                            size: 22,
                            color: "#fff"
                        }, void 0, false, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                            lineNumber: 189,
                            columnNumber: 94
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-[14px] border border-[var(--gray-100)] overflow-hidden",
                style: {
                    boxShadow: "var(--shadow-sm)"
                },
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-10 text-[13px]",
                    style: {
                        color: "var(--gray-800)"
                    },
                    children: "Loading…"
                }, void 0, false, {
                    fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                    lineNumber: 195,
                    columnNumber: 11
                }, this) : expenses.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-14 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                            size: 32,
                            className: "mx-auto mb-2",
                            style: {
                                color: "var(--gray-200)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                            lineNumber: 198,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[13px] font-medium",
                            style: {
                                color: "var(--gray-800)"
                            },
                            children: "No expenses yet."
                        }, void 0, false, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                            lineNumber: 199,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[12px] mt-1",
                            style: {
                                color: "var(--gray-600)"
                            },
                            children: "Add one above, or tick “Add expense for this invoice” when creating a walk-in invoice."
                        }, void 0, false, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                            lineNumber: 200,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                    lineNumber: 197,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-x-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].table} min-w-[900px]`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        "#",
                                        "Expense No",
                                        "Category",
                                        "Payment",
                                        "Date",
                                        "Description",
                                        "Amount",
                                        ""
                                    ].map((h)=>{
                                        const right = h === "Amount";
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].thDense} ${right ? "text-right" : "text-left"}`,
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].thStyle,
                                            children: h
                                        }, h, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                            lineNumber: 211,
                                            columnNumber: 28
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                    lineNumber: 208,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                lineNumber: 207,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: expenses.map((exp, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].row,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].tdDense} ${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].cellBody}`,
                                                style: {
                                                    color: "var(--gray-800)"
                                                },
                                                children: idx + 1
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                                lineNumber: 218,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].tdDense} ${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].cellBody} font-mono`,
                                                style: {
                                                    color: "var(--blue-deeper)"
                                                },
                                                children: exp.expense_number || "—"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                                lineNumber: 219,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].tdDense} ${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].cellPrimary}`,
                                                style: {
                                                    color: "var(--gray-900)"
                                                },
                                                children: exp.category || "—"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                                lineNumber: 220,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].tdDense}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-2.5 py-0.5 rounded-full text-[10.5px] font-bold uppercase tracking-wide",
                                                    style: {
                                                        background: "var(--blue-pale)",
                                                        color: "var(--blue-deeper)"
                                                    },
                                                    children: exp.method
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                                lineNumber: 221,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].tdDense} ${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].cellBody} whitespace-nowrap`,
                                                style: {
                                                    color: "var(--gray-800)"
                                                },
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(exp.date)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                                lineNumber: 224,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].tdDense} ${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].cellBody}`,
                                                style: {
                                                    color: "var(--gray-700)"
                                                },
                                                children: exp.description || "—"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                                lineNumber: 225,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right font-extrabold text-[15px]`,
                                                style: {
                                                    color: "var(--red)"
                                                },
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(exp.amount)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                                lineNumber: 226,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].tdDense}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-end gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>openEdit(exp),
                                                            disabled: saving,
                                                            title: "Edit",
                                                            className: "inline-flex items-center justify-center w-8 h-8 rounded-[8px] border-none bg-transparent cursor-pointer transition-all hover:bg-[var(--blue-pale)] disabled:opacity-50",
                                                            style: {
                                                                color: "var(--blue-deeper)"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                                                lineNumber: 232,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                                            lineNumber: 229,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>void handleDelete(exp),
                                                            disabled: saving,
                                                            title: "Delete",
                                                            className: "inline-flex items-center justify-center w-8 h-8 rounded-[8px] border-none bg-transparent cursor-pointer transition-all hover:bg-[var(--red-light)] disabled:opacity-50",
                                                            style: {
                                                                color: "var(--red)"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                                                lineNumber: 237,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                                            lineNumber: 234,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                                lineNumber: 227,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, exp.id, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                        lineNumber: 217,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                lineNumber: 215,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    style: {
                                        background: "var(--gray-50)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            colSpan: 6,
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].tdDense} text-[13.5px] font-bold border-t-2 border-[var(--gray-200)]`,
                                            style: {
                                                color: "var(--gray-700)"
                                            },
                                            children: [
                                                "Total — ",
                                                expenses.length,
                                                " ",
                                                expenses.length !== 1 ? "entries" : "entry"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                            lineNumber: 246,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right text-[15px] font-extrabold border-t-2 border-[var(--gray-200)]`,
                                            style: {
                                                color: "var(--red)"
                                            },
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(totalExpenses)
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                            lineNumber: 249,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "border-t-2 border-[var(--gray-200)]"
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                            lineNumber: 250,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                    lineNumber: 245,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                lineNumber: 244,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                        lineNumber: 206,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                    lineNumber: 205,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this),
            showModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[800] flex items-start justify-center backdrop-blur-sm pt-10 px-3 pb-8 overflow-y-auto no-print",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-label": "Close",
                        className: "absolute inset-0 bg-black/35 cursor-default border-none",
                        onClick: ()=>{
                            if (!saving) setShowModal(false);
                        }
                    }, void 0, false, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                        lineNumber: 261,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 w-full max-w-[460px] bg-white rounded-[14px] border border-[var(--gray-100)] overflow-hidden",
                        style: {
                            boxShadow: "var(--shadow-lg)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between gap-3 px-5 py-4 border-b border-[var(--gray-100)]",
                                style: {
                                    background: "var(--blue-deeper)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[15px] font-extrabold text-white",
                                        children: editing ? `Edit expense ${editing.expense_number || ""}` : "Add expense"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                        lineNumber: 264,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            if (!saving) setShowModal(false);
                                        },
                                        className: "text-white/80 hover:text-white border-none bg-transparent cursor-pointer p-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                            lineNumber: 266,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                        lineNumber: 265,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                lineNumber: 263,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5 flex flex-col gap-3.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-[10px] font-bold tracking-[1px] uppercase",
                                                style: {
                                                    color: "var(--gray-700)"
                                                },
                                                children: "Category"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                                lineNumber: 272,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: fCategory,
                                                onChange: (e)=>setFCategory(e.target.value),
                                                placeholder: "e.g. Material, Printing, Gas Bill",
                                                className: "border border-[var(--gray-200)] rounded-[8px] px-3 py-2 text-[13px] outline-none bg-white focus:border-[var(--blue)]",
                                                style: {
                                                    color: "#0C2433"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                                lineNumber: 273,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                        lineNumber: 271,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[10px] font-bold tracking-[1px] uppercase",
                                                        style: {
                                                            color: "var(--gray-700)"
                                                        },
                                                        children: "Amount"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                                        lineNumber: 278,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        min: 0,
                                                        step: 1,
                                                        value: fAmount,
                                                        onChange: (e)=>setFAmount(e.target.value),
                                                        onWheel: (e)=>e.currentTarget.blur(),
                                                        placeholder: "0",
                                                        className: "border border-[var(--gray-200)] rounded-[8px] px-3 py-2 text-[13px] outline-none bg-white focus:border-[var(--blue)]",
                                                        style: {
                                                            color: "#0C2433"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                                        lineNumber: 279,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                                lineNumber: 277,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[10px] font-bold tracking-[1px] uppercase",
                                                        style: {
                                                            color: "var(--gray-700)"
                                                        },
                                                        children: "Paid from"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                                        lineNumber: 283,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: fMethod,
                                                        onChange: (e)=>setFMethod(e.target.value),
                                                        className: "border border-[var(--gray-200)] rounded-[8px] px-3 py-2 text-[13px] outline-none bg-white focus:border-[var(--blue)]",
                                                        children: paymentMethods.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: m.name,
                                                                children: m.name
                                                            }, m.id, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                                                lineNumber: 286,
                                                                columnNumber: 48
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                                lineNumber: 282,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                        lineNumber: 276,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-[10px] font-bold tracking-[1px] uppercase",
                                                style: {
                                                    color: "var(--gray-700)"
                                                },
                                                children: "Date"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                                lineNumber: 291,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                value: fDate,
                                                onChange: (e)=>setFDate(e.target.value),
                                                className: "border border-[var(--gray-200)] rounded-[8px] px-3 py-2 text-[13px] outline-none bg-white focus:border-[var(--blue)]"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                                lineNumber: 292,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                        lineNumber: 290,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-[10px] font-bold tracking-[1px] uppercase",
                                                style: {
                                                    color: "var(--gray-700)"
                                                },
                                                children: [
                                                    "Description ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-normal normal-case opacity-80",
                                                        children: "(optional)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                                        lineNumber: 297,
                                                        columnNumber: 31
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                                lineNumber: 296,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: fDesc,
                                                onChange: (e)=>setFDesc(e.target.value),
                                                placeholder: "Notes / reference",
                                                className: "border border-[var(--gray-200)] rounded-[8px] px-3 py-2 text-[13px] outline-none bg-white focus:border-[var(--blue)]",
                                                style: {
                                                    color: "#0C2433"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                                lineNumber: 299,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                        lineNumber: 295,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                lineNumber: 270,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-end gap-2 px-5 py-4 border-t border-[var(--gray-100)]",
                                style: {
                                    background: "var(--gray-50)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            if (!saving) setShowModal(false);
                                        },
                                        disabled: saving,
                                        className: "px-4 py-2.5 rounded-[9px] text-[12.5px] font-semibold border-[1.5px] bg-white cursor-pointer disabled:opacity-50",
                                        style: {
                                            borderColor: "var(--gray-200)",
                                            color: "var(--gray-700)"
                                        },
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                        lineNumber: 305,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>void handleSubmit(),
                                        disabled: saving,
                                        className: "px-5 py-2.5 rounded-[9px] text-[12.5px] font-semibold border-none cursor-pointer text-white disabled:opacity-60",
                                        style: {
                                            background: "linear-gradient(135deg, var(--blue-deeper), var(--blue))"
                                        },
                                        children: saving ? "Saving…" : editing ? "Update expense" : "Save expense"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                        lineNumber: 309,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                                lineNumber: 304,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                        lineNumber: 262,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
                lineNumber: 260,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Star-Panaflex/app/(dashboard)/expense/page.tsx",
        lineNumber: 165,
        columnNumber: 5
    }, this);
}
_s(ExpensePage, "/IgrEcUDm9v5DWLRqj90I+6FbAQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$useSaving$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSaving"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$paymentMethods$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePaymentMethods"]
    ];
});
_c1 = ExpensePage;
var _c, _c1;
__turbopack_context__.k.register(_c, "Kpi");
__turbopack_context__.k.register(_c1, "ExpensePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>DollarSign
]);
/**
 * @license lucide-react v1.0.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "2",
            y2: "22",
            key: "7eqyqh"
        }
    ],
    [
        "path",
        {
            d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
            key: "1b0p4s"
        }
    ]
];
const DollarSign = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("dollar-sign", __iconNode);
;
}),
"[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DollarSign",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript)");
}),
"[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Plus
]);
/**
 * @license lucide-react v1.0.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "M12 5v14",
            key: "s699le"
        }
    ]
];
const Plus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("plus", __iconNode);
;
}),
"[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Plus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript)");
}),
"[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Trash2
]);
/**
 * @license lucide-react v1.0.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M10 11v6",
            key: "nco0om"
        }
    ],
    [
        "path",
        {
            d: "M14 11v6",
            key: "outv1u"
        }
    ],
    [
        "path",
        {
            d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
            key: "miytrc"
        }
    ],
    [
        "path",
        {
            d: "M3 6h18",
            key: "d0wm0j"
        }
    ],
    [
        "path",
        {
            d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
            key: "e791ji"
        }
    ]
];
const Trash2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("trash-2", __iconNode);
;
}),
"[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Trash2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript)");
}),
"[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Pencil
]);
/**
 * @license lucide-react v1.0.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
            key: "1a8usu"
        }
    ],
    [
        "path",
        {
            d: "m15 5 4 4",
            key: "1mk7zo"
        }
    ]
];
const Pencil = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("pencil", __iconNode);
;
}),
"[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Pencil",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript)");
}),
"[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Wallet
]);
/**
 * @license lucide-react v1.0.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
            key: "18etb6"
        }
    ],
    [
        "path",
        {
            d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",
            key: "xoc0q4"
        }
    ]
];
const Wallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("wallet", __iconNode);
;
}),
"[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Wallet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Star-Panaflex_0_qvymq._.js.map