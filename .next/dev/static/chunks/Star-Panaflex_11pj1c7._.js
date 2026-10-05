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
"[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PurchaseOrderPdfDocument",
    ()=>PurchaseOrderPdfDocument
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/helpers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$PrintFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/components/PrintFooter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$PrintHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/components/PrintHeader.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
const STATUS_COLOR = {
    paid: "#16a34a",
    partial: "#ea580c",
    unpaid: "#dc2626"
};
function PurchaseOrderPdfDocument({ data }) {
    const { po, items } = data;
    const statusColor = STATUS_COLOR[po.payment_status] ?? "#dc2626";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            fontFamily: "Arial, Helvetica, sans-serif",
            color: "#111",
            fontSize: 11
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$PrintHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrintHeader"], {}, void 0, false, {
                fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "6px 12px",
                    background: "#b91c1c",
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
                        children: "Purchase Order"
                    }, void 0, false, {
                        fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "monospace",
                            fontWeight: 800,
                            fontSize: 13
                        },
                        children: po.po_number
                    }, void 0, false, {
                        fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                lineNumber: 40,
                columnNumber: 7
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
                                    color: "#666",
                                    textTransform: "uppercase",
                                    letterSpacing: 1,
                                    marginBottom: 2
                                },
                                children: "Supplier"
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontWeight: 900,
                                    color: "#b91c1c",
                                    fontSize: 16,
                                    lineHeight: 1.2
                                },
                                children: po.supplier_name
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            po.supplier_phone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 11,
                                    color: "#333",
                                    marginTop: 3
                                },
                                children: po.supplier_phone
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this) : null,
                            po.notes ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 10,
                                    color: "#444",
                                    marginTop: 6,
                                    lineHeight: 1.5
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontWeight: 700
                                        },
                                        children: "Notes: "
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this),
                                    po.notes
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "right",
                            minWidth: 130
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: 5
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 8,
                                            color: "#666",
                                            textTransform: "uppercase",
                                            letterSpacing: 1
                                        },
                                        children: "Date"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontWeight: 700,
                                            fontSize: 12
                                        },
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(po.order_date)
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: 5
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 8,
                                            color: "#666",
                                            textTransform: "uppercase",
                                            letterSpacing: 1
                                        },
                                        children: "Payment"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontWeight: 700,
                                            fontSize: 11
                                        },
                                        children: po.payment_method
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 8,
                                            color: "#666",
                                            textTransform: "uppercase",
                                            letterSpacing: 1
                                        },
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "inline-block",
                                            marginTop: 2,
                                            padding: "2px 8px",
                                            borderRadius: 4,
                                            fontSize: 10,
                                            fontWeight: 800,
                                            textTransform: "capitalize",
                                            background: statusColor + "1a",
                                            color: statusColor,
                                            border: `1px solid ${statusColor}40`
                                        },
                                        children: po.payment_status
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "0 12px",
                    marginBottom: 12
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    style: {
                        width: "100%",
                        borderCollapse: "collapse",
                        fontSize: 10.5
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    "#",
                                    "Description",
                                    "Unit",
                                    "Qty",
                                    "Rate",
                                    "Amount"
                                ].map((h)=>{
                                    const align = h === "Description" ? "left" : h === "Rate" || h === "Amount" ? "right" : "center";
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: {
                                            background: "#b91c1c",
                                            color: "#fff",
                                            fontWeight: 700,
                                            textAlign: align,
                                            padding: "7px 8px",
                                            fontSize: 9,
                                            letterSpacing: 0.8,
                                            textTransform: "uppercase"
                                        },
                                        children: h
                                    }, h, false, {
                                        fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                                        lineNumber: 125,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: items.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 6,
                                    style: {
                                        padding: 16,
                                        textAlign: "center",
                                        color: "#666",
                                        border: "1px solid #e5e7eb"
                                    },
                                    children: "No line items"
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                                    lineNumber: 147,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                                lineNumber: 146,
                                columnNumber: 15
                            }, this) : items.map((it, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    style: {
                                        background: idx % 2 === 0 ? "#fff" : "#f8fafc",
                                        borderBottom: "1px solid #e5e7eb"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: "6px 8px",
                                                textAlign: "center",
                                                color: "#666",
                                                borderLeft: "1px solid #e5e7eb"
                                            },
                                            children: idx + 1
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                                            lineNumber: 163,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: "6px 8px",
                                                fontWeight: 600,
                                                color: "#111",
                                                borderLeft: "1px solid #e5e7eb"
                                            },
                                            children: it.description || "—"
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                                            lineNumber: 166,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: "6px 8px",
                                                textAlign: "center",
                                                fontFamily: "monospace",
                                                borderLeft: "1px solid #e5e7eb"
                                            },
                                            children: it.unit || "—"
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                                            lineNumber: 169,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: "6px 8px",
                                                textAlign: "center",
                                                fontFamily: "monospace",
                                                fontWeight: 700,
                                                borderLeft: "1px solid #e5e7eb"
                                            },
                                            children: it.qty
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                                            lineNumber: 172,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: "6px 8px",
                                                textAlign: "right",
                                                fontFamily: "monospace",
                                                fontWeight: 600,
                                                borderLeft: "1px solid #e5e7eb"
                                            },
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(it.rate)
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                                            lineNumber: 175,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: "6px 8px",
                                                textAlign: "right",
                                                fontFamily: "monospace",
                                                fontWeight: 800,
                                                color: "#b91c1c",
                                                borderLeft: "1px solid #e5e7eb",
                                                borderRight: "1px solid #e5e7eb"
                                            },
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(it.amount)
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                                            lineNumber: 178,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                                    lineNumber: 156,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    justifyContent: "flex-end",
                    padding: "0 12px",
                    marginBottom: 16
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: 220
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                justifyContent: "space-between",
                                padding: "6px 10px",
                                background: "#f8fafc",
                                borderTop: "2px solid #b91c1c"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 10,
                                        fontWeight: 700,
                                        textTransform: "uppercase",
                                        letterSpacing: 0.5
                                    },
                                    children: "Grand Total"
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                                    lineNumber: 200,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: "monospace",
                                        fontWeight: 900,
                                        fontSize: 14,
                                        color: "#b91c1c"
                                    },
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(po.grand_total)
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                justifyContent: "space-between",
                                padding: "5px 10px",
                                borderTop: "1px solid #e5e7eb"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 10,
                                        fontWeight: 600,
                                        color: "#555"
                                    },
                                    children: "Amount Paid"
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                                    lineNumber: 206,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: "monospace",
                                        fontWeight: 700,
                                        color: "#16a34a"
                                    },
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(po.amount_paid)
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                            lineNumber: 205,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                justifyContent: "space-between",
                                padding: "5px 10px",
                                borderTop: "1px solid #e5e7eb",
                                borderBottom: "2px solid #b91c1c"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 10,
                                        fontWeight: 600,
                                        color: "#555"
                                    },
                                    children: "Remaining"
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                                    lineNumber: 220,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: "monospace",
                                        fontWeight: 700,
                                        color: po.balance_due > 0 ? "#dc2626" : "#16a34a"
                                    },
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(po.balance_due)
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                                    lineNumber: 221,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                            lineNumber: 211,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                    lineNumber: 190,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$PrintFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrintFooter"], {}, void 0, false, {
                fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c = PurchaseOrderPdfDocument;
var _c;
__turbopack_context__.k.register(_c, "PurchaseOrderPdfDocument");
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
"[project]/Star-Panaflex/components/PurchaseProductCreateModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PurchaseProductCreateModal",
    ()=>PurchaseProductCreateModal,
    "nextPurchaseProductCode",
    ()=>nextPurchaseProductCode
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
function nextPurchaseProductCode(existing) {
    let max = 0;
    for (const p of existing){
        const m = String(p.code ?? "").match(/(\d+)/);
        if (m) max = Math.max(max, parseInt(m[1], 10));
    }
    return String(max + 1).padStart(3, "0");
}
function PurchaseProductCreateModal({ initialName, existingProducts, onClose, onCreated }) {
    _s();
    const [fName, setFName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialName);
    const [fCode, setFCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "PurchaseProductCreateModal.useState": ()=>nextPurchaseProductCode(existingProducts)
    }["PurchaseProductCreateModal.useState"]);
    const [fCost, setFCost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [fGram, setFGram] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [fMeter, setFMeter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PurchaseProductCreateModal.useEffect": ()=>{
            function onKey(e) {
                if (e.key === "Escape" && !saving) onClose();
            }
            window.addEventListener("keydown", onKey);
            return ({
                "PurchaseProductCreateModal.useEffect": ()=>window.removeEventListener("keydown", onKey)
            })["PurchaseProductCreateModal.useEffect"];
        }
    }["PurchaseProductCreateModal.useEffect"], [
        onClose,
        saving
    ]);
    async function handleSave() {
        const trimmed = fName.trim();
        if (!trimmed) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Enter product name", "err");
            return;
        }
        setSaving(true);
        const payload = {
            code: fCode || nextPurchaseProductCode(existingProducts),
            name: trimmed,
            cost_price: parseFloat(fCost) || 0,
            gram: fGram.trim() === "" ? null : parseFloat(fGram),
            meter: fMeter.trim() === "" ? null : parseFloat(fMeter)
        };
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("purchase_products").insert(payload).select("id").single();
        setSaving(false);
        if (error || !data?.id) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(error?.message || "Could not save product", "err");
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Product saved", "ok");
        onCreated({
            id: String(data.id),
            code: payload.code,
            name: payload.name,
            cost_price: payload.cost_price,
            gram: payload.gram,
            meter: payload.meter
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
                            children: "Add Supplier Product"
                        }, void 0, false, {
                            fileName: "[project]/Star-Panaflex/components/PurchaseProductCreateModal.tsx",
                            lineNumber: 84,
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
                                fileName: "[project]/Star-Panaflex/components/PurchaseProductCreateModal.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Star-Panaflex/components/PurchaseProductCreateModal.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Star-Panaflex/components/PurchaseProductCreateModal.tsx",
                    lineNumber: 83,
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
                                            fileName: "[project]/Star-Panaflex/components/PurchaseProductCreateModal.tsx",
                                            lineNumber: 94,
                                            columnNumber: 28
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/components/PurchaseProductCreateModal.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: fName,
                                    onChange: (e)=>setFName(e.target.value),
                                    placeholder: "e.g. Flex Banner 13oz, Vinyl Roll",
                                    className: "border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none",
                                    style: inputStyle,
                                    autoFocus: true
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/components/PurchaseProductCreateModal.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Star-Panaflex/components/PurchaseProductCreateModal.tsx",
                            lineNumber: 92,
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
                                    fileName: "[project]/Star-Panaflex/components/PurchaseProductCreateModal.tsx",
                                    lineNumber: 102,
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
                                    fileName: "[project]/Star-Panaflex/components/PurchaseProductCreateModal.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Star-Panaflex/components/PurchaseProductCreateModal.tsx",
                            lineNumber: 101,
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
                                    children: "Cost Price (Rs)"
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/components/PurchaseProductCreateModal.tsx",
                                    lineNumber: 110,
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
                                    fileName: "[project]/Star-Panaflex/components/PurchaseProductCreateModal.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Star-Panaflex/components/PurchaseProductCreateModal.tsx",
                            lineNumber: 109,
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
                                        "Gram ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-normal normal-case",
                                            style: {
                                                color: "var(--gray-800)"
                                            },
                                            children: "(optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/components/PurchaseProductCreateModal.tsx",
                                            lineNumber: 118,
                                            columnNumber: 20
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/components/PurchaseProductCreateModal.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    value: fGram,
                                    onChange: (e)=>setFGram(e.target.value),
                                    placeholder: "—",
                                    min: "0",
                                    className: "border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none font-mono",
                                    style: inputStyle
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/components/PurchaseProductCreateModal.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Star-Panaflex/components/PurchaseProductCreateModal.tsx",
                            lineNumber: 116,
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
                                        "MM (meter) ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-normal normal-case",
                                            style: {
                                                color: "var(--gray-800)"
                                            },
                                            children: "(optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/components/PurchaseProductCreateModal.tsx",
                                            lineNumber: 127,
                                            columnNumber: 26
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/components/PurchaseProductCreateModal.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    value: fMeter,
                                    onChange: (e)=>setFMeter(e.target.value),
                                    placeholder: "—",
                                    min: "0",
                                    className: "border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none font-mono",
                                    style: inputStyle
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/components/PurchaseProductCreateModal.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Star-Panaflex/components/PurchaseProductCreateModal.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Star-Panaflex/components/PurchaseProductCreateModal.tsx",
                    lineNumber: 91,
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
                            fileName: "[project]/Star-Panaflex/components/PurchaseProductCreateModal.tsx",
                            lineNumber: 135,
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
                                    fileName: "[project]/Star-Panaflex/components/PurchaseProductCreateModal.tsx",
                                    lineNumber: 143,
                                    columnNumber: 23
                                }, this) : null,
                                saving ? "Saving…" : "Save Product"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Star-Panaflex/components/PurchaseProductCreateModal.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Star-Panaflex/components/PurchaseProductCreateModal.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Star-Panaflex/components/PurchaseProductCreateModal.tsx",
            lineNumber: 79,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Star-Panaflex/components/PurchaseProductCreateModal.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_s(PurchaseProductCreateModal, "ZWvRbqCvrWAgAqOb4k1SbKqkwaA=");
_c = PurchaseProductCreateModal;
var _c;
__turbopack_context__.k.register(_c, "PurchaseProductCreateModal");
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
"[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SupplierPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/db.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/components/Toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/helpers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/dataTableStyles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$html2canvas$2f$dist$2f$html2canvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/html2canvas/dist/html2canvas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$PurchaseOrderPdfDocument$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/components/PurchaseOrderPdfDocument.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$paymentMethods$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/paymentMethods.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$ledger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/ledger.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$UserContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/UserContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$ConfirmModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/components/ConfirmModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$activityLog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/activityLog.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$SearchableSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/components/SearchableSelect.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$PurchaseProductCreateModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/components/PurchaseProductCreateModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$whatsappWaMe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/whatsappWaMe.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$PrintHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/components/PrintHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$PrintFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/components/PrintFooter.tsx [app-client] (ecmascript)");
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
function blankLine() {
    return {
        description: "",
        qty: 1,
        rate: 0,
        amount: 0,
        gram: null,
        meter: null
    };
}
function calcLine(line) {
    const qty = Math.max(1, Number(line.qty) || 1);
    const rate = Number(line.rate) || 0;
    const amount = Math.round(qty * rate * 100) / 100;
    return {
        ...line,
        qty,
        rate,
        amount
    };
}
function computePoPayment(grandTotal, amountPaidStr) {
    const paidParsed = parseFloat(String(amountPaidStr).replace(/,/g, "")) || 0;
    const amountPaid = Math.min(Math.max(0, paidParsed), grandTotal);
    const balanceDue = Math.round((grandTotal - amountPaid) * 100) / 100;
    const paymentStatus = balanceDue <= 0 ? "paid" : amountPaid > 0 ? "partial" : "unpaid";
    return {
        amountPaid,
        balanceDue,
        paymentStatus
    };
}
/** Opening payable + remaining PO balances for this supplier (estimate). */ function estimatedSupplierPayable(supplierId, openingBalance, pos) {
    const opening = Math.max(0, Number(openingBalance) || 0);
    const poRemain = pos.filter((p)=>p.supplier_id === supplierId).reduce((s, p)=>s + Math.max(0, Number(p.balance_due) || 0), 0);
    return Math.round((opening + poRemain) * 100) / 100;
}
/** Sign convention mirrors the customer ledger so the same UI/print template renders cleanly:
 *    debit = adds to what we owe the supplier  (opening balance, PO grand totals)
 *    credit = reduces what we owe the supplier (cashbook payments / refunds)
 *    closing balance > 0 = payable to supplier */ function buildSupplierLedgerRows(supplierName, supplierCreatedAt, openingBalance, pos, cashbook) {
    const rows = [];
    const nameLower = supplierName.toLowerCase();
    const opening = Math.max(0, Number(openingBalance) || 0);
    // Opening balance row — anchored to the supplier's creation date so it sorts first.
    if (opening > 0) {
        const openDate = (supplierCreatedAt || "").slice(0, 10) || "1970-01-01";
        rows.push({
            date: openDate,
            sortAt: `${openDate}T00:00:00_opening`,
            doc: "Opening",
            desc: "Opening balance",
            debit: opening,
            credit: 0,
            method: "—"
        });
    }
    pos.forEach((po)=>{
        const date = po.order_date;
        rows.push({
            date,
            sortAt: `${date}T${po.created_at || "1970-01-01"}_po`,
            doc: po.po_number,
            desc: "Purchase order",
            debit: Number(po.grand_total) || 0,
            credit: 0,
            method: po.payment_method || "—"
        });
    });
    cashbook.filter((c)=>(c.account_name || "").toLowerCase() === nameLower).forEach((c)=>{
        rows.push({
            date: c.date,
            sortAt: `${c.date}T${c.created_at || "1970-01-01"}_${c.id}`,
            doc: "Cashbook",
            desc: c.description || (c.type === "in" ? "Cashbook entry (in)" : "Cashbook entry (out)"),
            // Both "in" and "out" against a supplier reduce what we owe them.
            // (out = we paid the supplier; in = supplier refunded us.)
            debit: 0,
            credit: Number(c.amount) || 0,
            method: c.method || "—"
        });
    });
    rows.sort((a, b)=>a.sortAt.localeCompare(b.sortAt));
    return rows;
}
function SupplierPage() {
    _s();
    const userProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$UserContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"])();
    const { methods: paymentMethods } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$paymentMethods$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePaymentMethods"])();
    const [suppliers, setSuppliers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [savedPOs, setSavedPOs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [poDraft, setPoDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editPoId, setEditPoId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [savingPo, setSavingPo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [supplierModal, setSupplierModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [supplierSaving, setSupplierSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deletingSupplierId, setDeletingSupplierId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    /** Pay supplier (like Receive payment on accounts): cash out + reduce opening / PO balances. */ const [showPaySupplierModal, setShowPaySupplierModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [paySupplierTarget, setPaySupplierTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [paySupplierLoading, setPaySupplierLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [payOpeningSnapshot, setPayOpeningSnapshot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [paySupplierUnpaid, setPaySupplierUnpaid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [spDate, setSpDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["todayISO"])());
    const [spMethod, setSpMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Cash");
    const [spDesc, setSpDesc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [spAmount, setSpAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [spSaving, setSpSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Ledger modal state — mirrors the Parties ledger so PDF/print parity is straightforward.
    const [showLedgerModal, setShowLedgerModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ledgerSupplier, setLedgerSupplier] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [ledgerLoading, setLedgerLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ledgerPos, setLedgerPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [ledgerCashbook, setLedgerCashbook] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [ledgerOpeningSnapshot, setLedgerOpeningSnapshot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [ledgerSupplierCreatedAt, setLedgerSupplierCreatedAt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [ledgerDateFrom, setLedgerDateFrom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [ledgerDateTo, setLedgerDateTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [ledgerMonth, setLedgerMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [ledgerDownloading, setLedgerDownloading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ledgerPdfRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [supplierProds, setSupplierProds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [supplierProdsLoading, setSupplierProdsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newProdName, setNewProdName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newProdGram, setNewProdGram] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newProdMeter, setNewProdMeter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [addingProd, setAddingProd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Universal purchase products modal
    const [showPurchaseProdsModal, setShowPurchaseProdsModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pdfRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [pdfData, setPdfData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [generatingPdfFor, setGeneratingPdfFor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [printingPdfFor, setPrintingPdfFor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [draftPdfBusy, setDraftPdfBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fetchSuppliers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SupplierPage.useCallback[fetchSuppliers]": async ()=>{
            const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("suppliers").select("id, name, phone, address, notes, opening_balance").order("name");
            if (data) {
                setSuppliers(data.map({
                    "SupplierPage.useCallback[fetchSuppliers]": (r)=>({
                            ...r,
                            opening_balance: Number(r.opening_balance) || 0
                        })
                }["SupplierPage.useCallback[fetchSuppliers]"]));
            }
        }
    }["SupplierPage.useCallback[fetchSuppliers]"], []);
    const fetchPOs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SupplierPage.useCallback[fetchPOs]": async ()=>{
            const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("purchase_orders").select("id, po_number, supplier_id, supplier_name, supplier_phone, order_date, grand_total, amount_paid, balance_due, payment_status").order("created_at", {
                ascending: false
            }).limit(80);
            if (data) {
                setSavedPOs(data.map({
                    "SupplierPage.useCallback[fetchPOs]": (r)=>({
                            ...r,
                            balance_due: Number(r.balance_due) || 0,
                            grand_total: Number(r.grand_total) || 0,
                            amount_paid: Number(r.amount_paid) || 0
                        })
                }["SupplierPage.useCallback[fetchPOs]"]));
            }
        }
    }["SupplierPage.useCallback[fetchPOs]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SupplierPage.useEffect": ()=>{
            void fetchSuppliers();
            void fetchPOs();
        }
    }["SupplierPage.useEffect"], [
        fetchSuppliers,
        fetchPOs
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SupplierPage.useEffect": ()=>{
            if (!showPurchaseProdsModal) {
                setSupplierProds([]);
                setNewProdName("");
                setNewProdGram("");
                setNewProdMeter("");
                return;
            }
            setSupplierProdsLoading(true);
            __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("purchase_products").select("id, code, name, gram, meter").order("code").then({
                "SupplierPage.useEffect": ({ data })=>{
                    setSupplierProds(data ?? []);
                    setSupplierProdsLoading(false);
                }
            }["SupplierPage.useEffect"]);
        }
    }["SupplierPage.useEffect"], [
        showPurchaseProdsModal
    ]);
    const scheduleAfterPrint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SupplierPage.useCallback[scheduleAfterPrint]": (cleanup)=>{
            let ran = false;
            const run = {
                "SupplierPage.useCallback[scheduleAfterPrint].run": ()=>{
                    if (ran) return;
                    ran = true;
                    window.removeEventListener("afterprint", run);
                    cleanup();
                }
            }["SupplierPage.useCallback[scheduleAfterPrint].run"];
            window.addEventListener("afterprint", run);
            window.setTimeout(run, 3500);
        }
    }["SupplierPage.useCallback[scheduleAfterPrint]"], []);
    function openNewSupplier() {
        setSupplierModal({
            id: "",
            name: "",
            phone: "",
            address: "",
            notes: "",
            opening_balance: 0
        });
    }
    function openEditSupplier(s) {
        setSupplierModal({
            ...s
        });
    }
    async function saveSupplier() {
        if (!supplierModal || !supplierModal.name.trim()) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Supplier name is required", "err");
            return;
        }
        setSupplierSaving(true);
        try {
            const ob = Math.max(0, parseFloat(String(supplierModal.opening_balance)) || 0);
            if (supplierModal.id) {
                const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("suppliers").update({
                    name: supplierModal.name.trim(),
                    phone: supplierModal.phone.trim(),
                    address: supplierModal.address.trim(),
                    notes: supplierModal.notes.trim(),
                    opening_balance: ob
                }).eq("id", supplierModal.id);
                if (error) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(error.message, "err");
                    return;
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Supplier updated", "ok");
            } else {
                const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("suppliers").insert({
                    name: supplierModal.name.trim(),
                    phone: supplierModal.phone.trim(),
                    address: supplierModal.address.trim(),
                    notes: supplierModal.notes.trim(),
                    opening_balance: ob
                });
                if (error) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(error.message, "err");
                    return;
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Supplier added", "ok");
            }
            setSupplierModal(null);
            void fetchSuppliers();
        } finally{
            setSupplierSaving(false);
        }
    }
    async function deleteSupplier(s) {
        if (deletingSupplierId) return;
        const { count, error: cErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("purchase_orders").select("id", {
            count: "exact",
            head: true
        }).eq("supplier_id", s.id);
        if (cErr) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(cErr.message, "err");
            return;
        }
        if ((count ?? 0) > 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Cannot delete: this supplier has purchase orders", "err");
            return;
        }
        const ok = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$ConfirmModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["confirmDialog"])({
            title: "Delete supplier?",
            message: `Delete supplier "${s.name}"? This cannot be undone.`,
            tone: "danger"
        });
        if (!ok) return;
        setDeletingSupplierId(s.id);
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("suppliers").delete().eq("id", s.id);
            if (error) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(error.message, "err");
                return;
            }
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$activityLog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logActivity"])({
                action: "delete",
                entityType: "supplier",
                entityId: s.id,
                title: "Supplier Deleted",
                subtitle: s.name,
                amount: Number(s.opening_balance ?? 0) || null
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Supplier removed", "ok");
            void fetchSuppliers();
        } finally{
            setDeletingSupplierId(null);
        }
    }
    async function addSupplierProduct() {
        if (!newProdName.trim()) return;
        setAddingProd(true);
        const gram = parseFloat(newProdGram) || null;
        const meter = parseFloat(newProdMeter) || null;
        // CR-16 — sequential numeric code so it's easy to type when picking on a PO line.
        let max = 0;
        for (const p of supplierProds){
            const m = String(p.code ?? "").match(/(\d+)/);
            if (m) max = Math.max(max, parseInt(m[1], 10));
        }
        const code = String(max + 1).padStart(3, "0");
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("purchase_products").insert({
            name: newProdName.trim(),
            gram,
            meter,
            code
        }).select().single();
        setAddingProd(false);
        if (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(error.message, "err");
            return;
        }
        setSupplierProds((prev)=>[
                ...prev,
                data
            ].sort((a, b)=>(a.code ?? "").localeCompare(b.code ?? "")));
        setNewProdName("");
        setNewProdGram("");
        setNewProdMeter("");
    }
    async function removeSupplierProduct(id) {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("purchase_products").delete().eq("id", id);
        if (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(error.message, "err");
            return;
        }
        setSupplierProds((prev)=>prev.filter((p)=>p.id !== id));
    }
    function openPoModal() {
        if (suppliers.length === 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Add at least one supplier first", "err");
            return;
        }
        setPoDraft({
            poNumber: "",
            supplierId: suppliers[0]?.id ?? "",
            orderDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["todayISO"])(),
            notes: "",
            amountPaid: "",
            payMethod: "Cash",
            items: [
                blankLine()
            ]
        });
    }
    function openPoModalForSupplier(s) {
        if (suppliers.length === 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Add at least one supplier first", "err");
            return;
        }
        setPoDraft({
            poNumber: "",
            supplierId: s.id,
            orderDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["todayISO"])(),
            notes: "",
            amountPaid: "",
            payMethod: "Cash",
            items: [
                blankLine()
            ]
        });
    }
    async function openEditPo(po) {
        const { data: poRow, error: poErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("purchase_orders").select("*").eq("id", po.id).single();
        if (poErr || !poRow) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(poErr?.message || "Could not load PO", "err");
            return;
        }
        const { data: itemRows, error: itemErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("purchase_order_items").select("description, qty, rate, amount").eq("purchase_order_id", po.id).order("id", {
            ascending: true
        });
        if (itemErr) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(itemErr.message, "err");
            return;
        }
        const items = (itemRows ?? []).map((it)=>({
                description: String(it.description ?? ""),
                qty: Number(it.qty),
                rate: Number(it.rate),
                amount: Number(it.amount),
                gram: null,
                meter: null
            }));
        setEditPoId(po.id);
        setPoDraft({
            poNumber: poRow.po_number,
            supplierId: poRow.supplier_id ?? "",
            orderDate: poRow.order_date ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["todayISO"])(),
            notes: String(poRow.notes ?? ""),
            amountPaid: String(Number(poRow.amount_paid) || 0),
            payMethod: poRow.payment_method ?? "Cash",
            items: items.length > 0 ? items : [
                blankLine()
            ]
        });
    }
    async function openPaySupplierModal(s) {
        setPaySupplierTarget(s);
        setSpDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["todayISO"])());
        setSpMethod("Cash");
        setSpDesc("");
        setSpAmount("");
        setPaySupplierUnpaid([]);
        setPayOpeningSnapshot(0);
        setShowPaySupplierModal(true);
        setPaySupplierLoading(true);
        try {
            const [{ data: sup }, { data: pos }] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("suppliers").select("opening_balance").eq("id", s.id).single(),
                __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("purchase_orders").select("id, po_number, order_date, grand_total, amount_paid, balance_due").eq("supplier_id", s.id).order("order_date", {
                    ascending: true
                })
            ]);
            const opening = Math.max(0, Number(sup?.opening_balance) || 0);
            const rows = pos ?? [];
            const unpaid = rows.filter((p)=>Number(p.balance_due) > 0.005);
            setPayOpeningSnapshot(opening);
            setPaySupplierUnpaid(unpaid);
            const poOwed = unpaid.reduce((acc, p)=>acc + Math.max(0, Number(p.balance_due) || 0), 0);
            const out = Math.round((opening + poOwed) * 100) / 100;
            setSpAmount(out > 0 ? String(out) : "");
        } catch  {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Could not load supplier balances", "err");
            setShowPaySupplierModal(false);
            setPaySupplierTarget(null);
        } finally{
            setPaySupplierLoading(false);
        }
    }
    function closePaySupplierModal() {
        if (spSaving) return;
        setShowPaySupplierModal(false);
        setPaySupplierTarget(null);
        setPaySupplierUnpaid([]);
        setPayOpeningSnapshot(0);
    }
    async function openLedgerModal(s) {
        setLedgerSupplier(s);
        setShowLedgerModal(true);
        setLedgerLoading(true);
        setLedgerDateFrom("");
        setLedgerDateTo("");
        setLedgerMonth("");
        setLedgerPos([]);
        setLedgerCashbook([]);
        setLedgerOpeningSnapshot(Number(s.opening_balance) || 0);
        setLedgerSupplierCreatedAt("");
        const [{ data: supRow }, { data: poRows }, { data: cbRows }] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("suppliers").select("opening_balance, created_at").eq("id", s.id).single(),
            __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("purchase_orders").select("id, po_number, order_date, created_at, grand_total, payment_method").eq("supplier_id", s.id).order("order_date", {
                ascending: true
            }).order("created_at", {
                ascending: true
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("cashbook").select("id, date, created_at, description, amount, type, method, account_name, reference").ilike("account_name", s.name).order("date", {
                ascending: true
            }).order("created_at", {
                ascending: true
            })
        ]);
        if (supRow) {
            setLedgerOpeningSnapshot(Number(supRow.opening_balance) || 0);
            setLedgerSupplierCreatedAt(String(supRow.created_at || ""));
        }
        if (poRows) setLedgerPos(poRows);
        if (cbRows) setLedgerCashbook(cbRows);
        setLedgerLoading(false);
    }
    function closeLedgerModal() {
        setShowLedgerModal(false);
        setLedgerSupplier(null);
        setLedgerPos([]);
        setLedgerCashbook([]);
        setLedgerDateFrom("");
        setLedgerDateTo("");
        setLedgerMonth("");
    }
    function applyLedgerMonth(ym) {
        if (!ym) {
            setLedgerDateFrom("");
            setLedgerDateTo("");
            return;
        }
        const [y, m] = ym.split("-").map((v)=>parseInt(v, 10));
        if (!y || !m) return;
        const last = new Date(y, m, 0).getDate();
        const from = `${y}-${String(m).padStart(2, "0")}-01`;
        const to = `${y}-${String(m).padStart(2, "0")}-${String(last).padStart(2, "0")}`;
        setLedgerDateFrom(from);
        setLedgerDateTo(to);
    }
    async function downloadLedgerPdf() {
        if (ledgerDownloading || ledgerLoading || !ledgerSupplier) return;
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
            const safe = ledgerSupplier.name.replace(/[/\\?%*:|"<>]/g, "-").trim().slice(0, 80) || "Supplier";
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
    // Memo-equivalents inlined; small data so re-derivation per render is fine.
    const ledgerAllRows = ledgerSupplier ? buildSupplierLedgerRows(ledgerSupplier.name, ledgerSupplierCreatedAt, ledgerOpeningSnapshot, ledgerPos, ledgerCashbook) : [];
    const ledgerDisplayWithBal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$ledger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ledgerRowsForDateRange"])(ledgerAllRows, ledgerDateFrom, ledgerDateTo);
    const ledgerOpeningBefore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$ledger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openingBalanceBeforeDate"])(ledgerAllRows, ledgerDateFrom);
    async function handlePaySupplier() {
        if (!paySupplierTarget) return;
        const amt = parseFloat(String(spAmount).replace(/,/g, ""));
        if (!Number.isFinite(amt) || amt <= 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Enter a valid amount", "err");
            return;
        }
        if (!spMethod || !spMethod.trim()) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Please select a payment method", "err");
            return;
        }
        if (!paymentMethods.some((m)=>m.name === spMethod)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Select a valid payment method", "err");
            return;
        }
        const available = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$paymentMethods$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMethodBalance"])(spMethod);
        if (amt > available) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(`Not enough funds in "${spMethod}" (available ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(available)}). Choose a different payment method.`, "err");
            return;
        }
        setSpSaving(true);
        try {
            const [{ data: supFresh, error: supErr }, { data: poRows, error: poErr }] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("suppliers").select("opening_balance").eq("id", paySupplierTarget.id).single(),
                __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("purchase_orders").select("id, grand_total, amount_paid, balance_due, order_date").eq("supplier_id", paySupplierTarget.id).order("order_date", {
                    ascending: true
                })
            ]);
            if (supErr) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(supErr.message, "err");
                return;
            }
            if (poErr) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(poErr.message, "err");
                return;
            }
            const opening = Math.max(0, Number(supFresh?.opening_balance) || 0);
            const unpaidList = (poRows ?? []).filter((p)=>Number(p.balance_due) > 0.005);
            const poOwed = unpaidList.reduce((s, p)=>s + Math.max(0, Number(p.balance_due) || 0), 0);
            const outstanding = Math.round((opening + poOwed) * 100) / 100;
            if (outstanding <= 0) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Nothing owed to this supplier", "err");
                return;
            }
            if (amt > outstanding + 0.01) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(`Maximum payable is ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(outstanding)}`, "err");
                return;
            }
            const name = paySupplierTarget.name.trim();
            const cbDesc = spDesc.trim() ? `Supplier payment — ${name} — ${spDesc.trim()}` : `Supplier payment — ${name}`;
            const { error: cbErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("cashbook").insert({
                type: "out",
                description: cbDesc,
                amount: amt,
                date: spDate,
                account_name: name,
                method: spMethod,
                reference: paySupplierTarget.id
            });
            if (cbErr) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(cbErr.message, "err");
                return;
            }
            let rem = Math.round(amt * 100) / 100;
            let newOpening = opening;
            const toOpening = Math.min(rem, newOpening);
            newOpening = Math.round((newOpening - toOpening) * 100) / 100;
            rem = Math.round((rem - toOpening) * 100) / 100;
            const { error: obErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("suppliers").update({
                opening_balance: Math.max(0, newOpening)
            }).eq("id", paySupplierTarget.id);
            if (obErr) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(`Cash recorded but opening balance not updated: ${obErr.message}`, "err");
                void fetchSuppliers();
                void fetchPOs();
                closePaySupplierModal();
                return;
            }
            for (const po of unpaidList){
                if (rem <= 0.005) break;
                const bd = Math.max(0, Number(po.balance_due) || 0);
                const pay = Math.min(rem, bd);
                const newPaid = Math.round((Number(po.amount_paid) + pay) * 100) / 100;
                const gt = Number(po.grand_total) || 0;
                const newBal = Math.round((gt - newPaid) * 100) / 100;
                const paymentStatus = newBal <= 0 ? "paid" : newPaid > 0 ? "partial" : "unpaid";
                const { error: updErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("purchase_orders").update({
                    amount_paid: newPaid,
                    balance_due: Math.max(0, newBal),
                    payment_status: paymentStatus
                }).eq("id", po.id);
                if (updErr) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(`Cash recorded; PO ${po.id} update failed: ${updErr.message}`, "err");
                    void fetchSuppliers();
                    void fetchPOs();
                    closePaySupplierModal();
                    return;
                }
                rem = Math.round((rem - pay) * 100) / 100;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(`Paid ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(amt)} to ${name}`, "ok");
            const remainingPayable = Math.max(0, Math.round((outstanding - amt) * 100) / 100);
            const waMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$whatsappWaMe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildSupplierPaymentWhatsAppMessage"])({
                supplierName: name,
                amount: amt,
                dateISO: spDate,
                method: spMethod,
                description: spDesc.trim() || undefined,
                remainingPayable
            });
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$whatsappWaMe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openWhatsAppNewTab"])(paySupplierTarget.phone || "", waMsg)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Payment saved. Add supplier phone to open WhatsApp notification.", "info");
            }
            closePaySupplierModal();
            void fetchSuppliers();
            void fetchPOs();
        } finally{
            setSpSaving(false);
        }
    }
    function draftToPdfPayload(d) {
        const sup = suppliers.find((x)=>x.id === d.supplierId);
        if (!sup) return null;
        const items = d.items.map((it)=>calcLine(it));
        const grandTotal = items.reduce((s, it)=>s + it.amount, 0);
        const { amountPaid, balanceDue, paymentStatus } = computePoPayment(grandTotal, d.amountPaid);
        return {
            po: {
                po_number: d.poNumber,
                supplier_name: sup.name,
                supplier_phone: sup.phone,
                order_date: d.orderDate,
                payment_status: paymentStatus,
                grand_total: grandTotal,
                amount_paid: amountPaid,
                balance_due: balanceDue,
                payment_method: d.payMethod,
                notes: d.notes.trim()
            },
            items: items.map((it)=>({
                    description: it.description,
                    unit: "qty",
                    qty: it.qty,
                    rate: it.rate,
                    amount: it.amount
                }))
        };
    }
    async function fetchPoPdfPayload(poId) {
        const { data: po, error: poErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("purchase_orders").select("*").eq("id", poId).single();
        if (poErr || !po) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(poErr?.message || "Purchase order not found", "err");
            return null;
        }
        const { data: rows, error: itemErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("purchase_order_items").select("description, unit, qty, rate, amount").eq("purchase_order_id", poId).order("id", {
            ascending: true
        });
        if (itemErr) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(itemErr.message, "err");
            return null;
        }
        return {
            po: {
                po_number: po.po_number,
                supplier_name: po.supplier_name,
                supplier_phone: po.supplier_phone || "",
                order_date: po.order_date,
                payment_status: po.payment_status,
                grand_total: Number(po.grand_total),
                amount_paid: Number(po.amount_paid),
                balance_due: Number(po.balance_due),
                payment_method: po.payment_method || "Cash",
                notes: String(po.notes ?? "").trim()
            },
            items: (rows ?? []).map((it)=>({
                    description: String(it.description ?? ""),
                    unit: "sqft",
                    qty: Number(it.qty),
                    rate: Number(it.rate),
                    amount: Number(it.amount)
                }))
        };
    }
    async function generatePdfBlob() {
        const node = pdfRef.current;
        if (!node) throw new Error("PDF template not found");
        const prevDisplay = node.style.display;
        const prevPosition = node.style.position;
        const prevLeft = node.style.left;
        const prevTop = node.style.top;
        const prevWidth = node.style.width;
        node.style.display = "block";
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
                pdf.addImage(imgData, "PNG", 0, -pageHeight * i, imgWidth, imgHeight);
            }
            return pdf.output("blob");
        } finally{
            node.style.display = prevDisplay;
            node.style.position = prevPosition;
            node.style.left = prevLeft;
            node.style.top = prevTop;
            node.style.width = prevWidth;
        }
    }
    async function updatePurchaseOrder() {
        if (!poDraft || !editPoId) return;
        const items = poDraft.items.map((it)=>calcLine(it));
        const grandTotal = items.reduce((s, it)=>s + it.amount, 0);
        if (grandTotal <= 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Add at least one line with an amount", "err");
            return;
        }
        const { data: existing } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("purchase_orders").select("amount_paid").eq("id", editPoId).single();
        const existingPaid = Number(existing?.amount_paid) || 0;
        const balanceDue = Math.max(0, Math.round((grandTotal - existingPaid) * 100) / 100);
        const paymentStatus = balanceDue <= 0 ? "paid" : existingPaid > 0 ? "partial" : "unpaid";
        setSavingPo(true);
        try {
            const { error: poErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("purchase_orders").update({
                order_date: poDraft.orderDate,
                notes: poDraft.notes.trim(),
                subtotal: grandTotal,
                grand_total: grandTotal,
                balance_due: balanceDue,
                payment_status: paymentStatus
            }).eq("id", editPoId);
            if (poErr) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(poErr.message, "err");
                return;
            }
            await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("purchase_order_items").delete().eq("purchase_order_id", editPoId);
            const { error: itemErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("purchase_order_items").insert(items.map((it)=>({
                    purchase_order_id: editPoId,
                    description: it.description.trim() || "Item",
                    unit: "qty",
                    qty: it.qty,
                    rate: it.rate,
                    amount: it.amount
                })));
            if (itemErr) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(itemErr.message, "err");
                return;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(`Purchase order ${poDraft.poNumber} updated`, "ok");
            setPoDraft(null);
            setEditPoId(null);
            void fetchPOs();
        } finally{
            setSavingPo(false);
        }
    }
    async function savePurchaseOrder() {
        if (!poDraft) return;
        if (editPoId) {
            await updatePurchaseOrder();
            return;
        }
        const sup = suppliers.find((x)=>x.id === poDraft.supplierId);
        if (!sup) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Select a supplier", "err");
            return;
        }
        const items = poDraft.items.map((it)=>calcLine(it));
        const grandTotal = items.reduce((s, it)=>s + it.amount, 0);
        if (grandTotal <= 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Add at least one line with an amount", "err");
            return;
        }
        const { amountPaid, balanceDue, paymentStatus } = computePoPayment(grandTotal, poDraft.amountPaid);
        if (amountPaid > 0) {
            if (!poDraft.payMethod || !poDraft.payMethod.trim()) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Please select a payment method", "err");
                return;
            }
            if (!paymentMethods.some((m)=>m.name === poDraft.payMethod)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Select a valid payment method", "err");
                return;
            }
            const available = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$paymentMethods$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMethodBalance"])(poDraft.payMethod);
            if (amountPaid > available) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(`Not enough funds in "${poDraft.payMethod}" (available ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(available)}). Choose a different payment method.`, "err");
                return;
            }
        }
        setSavingPo(true);
        try {
            const { data: poRow, error: poErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("purchase_orders").insert({
                supplier_id: sup.id,
                supplier_name: sup.name,
                supplier_phone: sup.phone.trim(),
                order_date: poDraft.orderDate,
                notes: poDraft.notes.trim(),
                subtotal: grandTotal,
                grand_total: grandTotal,
                amount_paid: amountPaid,
                balance_due: balanceDue,
                payment_status: paymentStatus,
                payment_method: poDraft.payMethod
            }).select().single();
            if (poErr || !poRow) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(poErr?.message || "Could not save purchase order", "err");
                return;
            }
            const assignedPoNumber = String(poRow.po_number);
            const { error: itemErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("purchase_order_items").insert(items.map((it)=>({
                    purchase_order_id: poRow.id,
                    description: it.description.trim() || "Item",
                    unit: "qty",
                    qty: it.qty,
                    rate: it.rate,
                    amount: it.amount
                })));
            if (itemErr) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(itemErr.message, "err");
                return;
            }
            if (amountPaid > 0) {
                const { data: cb, error: cbErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("cashbook").insert({
                    type: "out",
                    description: `Purchase order ${assignedPoNumber} — ${sup.name}`,
                    amount: amountPaid,
                    date: poDraft.orderDate,
                    method: poDraft.payMethod,
                    reference: String(poRow.id),
                    account_name: sup.name
                }).select().single();
                if (cbErr) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(`PO saved but cashbook error: ${cbErr.message}`, "err");
                } else if (cb) {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("purchase_orders").update({
                        cashbook_entry_id: cb.id
                    }).eq("id", poRow.id);
                    const waMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$whatsappWaMe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildSupplierPaymentWhatsAppMessage"])({
                        supplierName: sup.name,
                        amount: amountPaid,
                        dateISO: poDraft.orderDate,
                        method: poDraft.payMethod,
                        description: `Advance/paid amount for PO ${assignedPoNumber}`,
                        remainingPayable: Math.max(0, balanceDue)
                    });
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$whatsappWaMe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openWhatsAppNewTab"])(sup.phone || "", waMsg)) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("PO saved. Add supplier phone to send WhatsApp payment notice.", "info");
                    }
                }
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(`Purchase order ${assignedPoNumber} saved`, "ok");
            setPoDraft(null);
            void fetchPOs();
        } finally{
            setSavingPo(false);
        }
    }
    async function downloadPoPdf(po) {
        if (generatingPdfFor || printingPdfFor || draftPdfBusy) return;
        setGeneratingPdfFor(po.id);
        try {
            const payload = await fetchPoPdfPayload(po.id);
            if (!payload) return;
            setPdfData(payload);
            await new Promise((r)=>setTimeout(r, 150));
            const blob = await generatePdfBlob();
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            const safe = (s)=>s.replace(/[/\\?%*:|"<>]/g, "-").trim();
            const poSupplier = safe(payload.po.supplier_name || "Supplier");
            const poNum = safe(payload.po.po_number);
            const poDate = safe(payload.po.order_date?.slice(0, 10) ?? "");
            a.download = `${poSupplier} - ${poNum} - ${poDate}.pdf`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            URL.revokeObjectURL(url);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("PDF downloaded", "ok");
        } catch (e) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(e instanceof Error ? e.message : "PDF failed", "err");
        } finally{
            setPdfData(null);
            setGeneratingPdfFor(null);
        }
    }
    async function printPoPdf(po) {
        if (generatingPdfFor || printingPdfFor || draftPdfBusy) return;
        setPrintingPdfFor(po.id);
        try {
            const payload = await fetchPoPdfPayload(po.id);
            if (!payload) {
                setPrintingPdfFor(null);
                return;
            }
            setPdfData(payload);
            await new Promise((r)=>setTimeout(r, 200));
            scheduleAfterPrint(()=>{
                setPdfData(null);
                setPrintingPdfFor(null);
            });
            window.print();
        } catch (e) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(e instanceof Error ? e.message : "Print failed", "err");
            setPdfData(null);
            setPrintingPdfFor(null);
        }
    }
    async function printDraftPo() {
        if (!poDraft || draftPdfBusy || generatingPdfFor || printingPdfFor) return;
        const payload = draftToPdfPayload(poDraft);
        if (!payload) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Select a supplier", "err");
            return;
        }
        const grandTotal = payload.items.reduce((s, it)=>s + it.amount, 0);
        if (grandTotal <= 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Add lines with amounts before printing", "err");
            return;
        }
        setDraftPdfBusy(true);
        try {
            setPdfData(payload);
            await new Promise((r)=>setTimeout(r, 200));
            scheduleAfterPrint(()=>{
                setPdfData(null);
                setDraftPdfBusy(false);
            });
            window.print();
        } catch  {
            setPdfData(null);
            setDraftPdfBusy(false);
        }
    }
    async function downloadDraftPo() {
        if (!poDraft || draftPdfBusy || generatingPdfFor || printingPdfFor) return;
        const payload = draftToPdfPayload(poDraft);
        if (!payload) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Select a supplier", "err");
            return;
        }
        const grandTotal = payload.items.reduce((s, it)=>s + it.amount, 0);
        if (grandTotal <= 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Add lines with amounts before download", "err");
            return;
        }
        setDraftPdfBusy(true);
        try {
            setPdfData(payload);
            await new Promise((r)=>setTimeout(r, 150));
            const blob = await generatePdfBlob();
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            const safe = (s)=>s.replace(/[/\\?%*:|"<>]/g, "-").trim();
            const draftPoSupplier = safe(payload.po.supplier_name || "Supplier");
            const draftPoNum = safe(payload.po.po_number);
            const draftPoDate = safe(payload.po.order_date?.slice(0, 10) ?? "");
            a.download = `${draftPoSupplier} - ${draftPoNum} - ${draftPoDate}.pdf`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            URL.revokeObjectURL(url);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("PDF downloaded", "ok");
        } catch (e) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(e instanceof Error ? e.message : "PDF failed", "err");
        } finally{
            setPdfData(null);
            setDraftPdfBusy(false);
        }
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
    const payModalInputStyle = {
        borderColor: "var(--gray-200)",
        background: "var(--gray-50)",
        color: "var(--gray-900)"
    };
    const payModalOutstanding = Math.round((payOpeningSnapshot + paySupplierUnpaid.reduce((s, p)=>s + Math.max(0, Number(p.balance_due) || 0), 0)) * 100) / 100;
    const supplierTableColCount = userProfile?.isAdmin ? 10 : 9;
    const supplierTableHeaders = [
        {
            label: "Name",
            align: "left"
        },
        {
            label: "Phone",
            align: "left"
        },
        {
            label: "Opening owed",
            title: "Amount owed before POs in this app",
            align: "left"
        },
        {
            label: "Est. payable",
            title: "Opening owed + unpaid balances on all POs for this supplier",
            align: "left"
        },
        {
            label: "Address",
            align: "left"
        },
        {
            label: "Ledger",
            title: "View full transaction ledger and download/print report",
            align: "center"
        },
        {
            label: "Pay supplier",
            title: "Cash out — reduce opening balance then oldest POs first",
            align: "center"
        },
        {
            label: "New invoice",
            title: "Create supplier invoice (PO) with this supplier selected",
            align: "center"
        },
        {
            label: "Actions",
            title: "Edit or delete supplier",
            align: "center"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-fade-in",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-5 gap-3 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-11 h-11 rounded-xl flex items-center justify-center shrink-0",
                                        style: {
                                            background: "var(--blue-light)",
                                            color: "var(--blue-deeper)"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                            size: 22
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                            lineNumber: 1264,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 1260,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-xl font-extrabold",
                                                style: {
                                                    color: "var(--gray-900)"
                                                },
                                                children: "Supplier billing"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 1267,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs mt-0.5",
                                                style: {
                                                    color: "var(--gray-700)"
                                                },
                                                children: [
                                                    "Supplier invoices (PO-based) post to Cash Book as ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "money out"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 1271,
                                                        columnNumber: 67
                                                    }, this),
                                                    " (reduces cash in hand). Set supplier opening payables below; they are not cash until you pay."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 1270,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 1266,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                lineNumber: 1259,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setShowPurchaseProdsModal(true),
                                        className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-[9px] border-[1.5px] text-[12.5px] font-semibold cursor-pointer",
                                        style: {
                                            borderColor: "var(--purple)",
                                            background: "white",
                                            color: "var(--purple)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 1282,
                                                columnNumber: 15
                                            }, this),
                                            " Supplier Products"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 1276,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: openNewSupplier,
                                        className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-[9px] border border-[var(--gray-200)] text-[12.5px] font-semibold cursor-pointer",
                                        style: {
                                            background: "white",
                                            color: "var(--gray-900)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 1290,
                                                columnNumber: 15
                                            }, this),
                                            " Add supplier"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 1284,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: openPoModal,
                                        className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-[9px] border-none text-[12.5px] font-semibold cursor-pointer text-white",
                                        style: {
                                            background: "linear-gradient(135deg, var(--blue-deeper), var(--blue))",
                                            boxShadow: "0 2px 10px rgba(204,17,17,.28)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 1301,
                                                columnNumber: 15
                                            }, this),
                                            " New supplier invoice"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 1292,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                lineNumber: 1275,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                        lineNumber: 1258,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                        size: 14,
                                        style: {
                                            color: "var(--gray-700)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 1308,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold tracking-[2px] uppercase",
                                        style: {
                                            color: "var(--gray-700)"
                                        },
                                        children: "Suppliers"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 1309,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 h-px",
                                        style: {
                                            background: "var(--gray-200)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 1312,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] font-semibold",
                                        style: {
                                            color: "var(--gray-700)"
                                        },
                                        children: suppliers.length
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 1313,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                lineNumber: 1307,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-[14px] border border-[var(--gray-100)] overflow-hidden",
                                style: {
                                    boxShadow: "var(--shadow-sm)"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-x-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].table} min-w-[900px]`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: supplierTableHeaders.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            title: h.title,
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].th} ${h.align === "center" ? "text-center" : "text-left"} ${h.label === "Pay supplier" || h.label === "New invoice" ? "min-w-[108px]" : ""} ${h.label === "Actions" ? "min-w-[88px]" : ""}`,
                                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].thStyle,
                                                            children: h.label
                                                        }, h.label, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                            lineNumber: 1321,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                    lineNumber: 1319,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 1318,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: suppliers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        colSpan: supplierTableColCount,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].empty,
                                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].emptyStyle,
                                                        children: [
                                                            "No suppliers — use ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Add supplier"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                lineNumber: 1336,
                                                                columnNumber: 44
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 1335,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                    lineNumber: 1334,
                                                    columnNumber: 21
                                                }, this) : suppliers.map((s)=>{
                                                    const estPay = estimatedSupplierPayable(s.id, s.opening_balance, savedPOs);
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].row,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td} ${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].cellPrimary}`,
                                                                style: {
                                                                    color: "var(--gray-900)"
                                                                },
                                                                children: s.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                lineNumber: 1344,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td} ${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].cellBody}`,
                                                                children: s.phone || "—"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                lineNumber: 1345,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td} font-mono text-[12px]`,
                                                                style: {
                                                                    color: "var(--gray-800)"
                                                                },
                                                                children: Number(s.opening_balance) > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(Number(s.opening_balance)) : "—"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                lineNumber: 1346,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td} font-mono text-[12px] font-bold`,
                                                                style: {
                                                                    color: estPay > 0 ? "var(--red)" : "var(--gray-400)"
                                                                },
                                                                children: estPay > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(estPay) : "—"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                lineNumber: 1349,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td} ${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].cellBody} max-w-[200px] truncate`,
                                                                title: s.address,
                                                                children: s.address || "—"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                lineNumber: 1352,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td} text-center align-middle`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>void openLedgerModal(s),
                                                                    className: "inline-flex items-center justify-center gap-1.5 w-full max-w-[140px] mx-auto px-3 py-2 rounded-[9px] border-[1.5px] cursor-pointer hover:bg-[var(--orange-light)] text-[11px] font-bold",
                                                                    style: {
                                                                        borderColor: "var(--orange)",
                                                                        color: "#B45309"
                                                                    },
                                                                    title: "See full transaction ledger for this supplier",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                                            size: 14
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                            lineNumber: 1363,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        " Ledger"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                    lineNumber: 1356,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                lineNumber: 1355,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td} text-center align-middle`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>void openPaySupplierModal(s),
                                                                    className: "inline-flex items-center justify-center gap-1.5 w-full max-w-[140px] mx-auto px-3 py-2 rounded-[9px] border-[1.5px] cursor-pointer hover:bg-[var(--green-light)] text-[11px] font-bold",
                                                                    style: {
                                                                        borderColor: "var(--green)",
                                                                        color: "var(--green)"
                                                                    },
                                                                    title: "Pay supplier — cash out, reduce opening balance then oldest POs first",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                                                            size: 14
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                            lineNumber: 1374,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        " Pay"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                    lineNumber: 1367,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                lineNumber: 1366,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td} text-center align-middle`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>openPoModalForSupplier(s),
                                                                    className: "inline-flex items-center justify-center gap-1.5 w-full max-w-[140px] mx-auto px-3 py-2 rounded-[9px] border-[1.5px] cursor-pointer hover:bg-[var(--blue-pale)] text-[11px] font-bold",
                                                                    style: {
                                                                        borderColor: "var(--blue-deeper)",
                                                                        color: "var(--blue-deeper)"
                                                                    },
                                                                    title: "New supplier invoice for this supplier (PO flow)",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                            size: 14
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                            lineNumber: 1385,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        " New invoice"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                    lineNumber: 1378,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                lineNumber: 1377,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td} text-center align-middle`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "inline-flex gap-1 justify-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>openEditSupplier(s),
                                                                            className: "inline-flex items-center justify-center w-9 h-9 rounded-[8px] border-[1.5px] cursor-pointer hover:bg-[var(--gray-50)]",
                                                                            style: {
                                                                                borderColor: "var(--gray-200)",
                                                                                color: "var(--blue-deeper)"
                                                                            },
                                                                            title: "Edit",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                                size: 14
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                                lineNumber: 1397,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                            lineNumber: 1390,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        userProfile?.isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>void deleteSupplier(s),
                                                                            disabled: deletingSupplierId === s.id,
                                                                            className: "inline-flex items-center justify-center w-9 h-9 rounded-[8px] border-[1.5px] cursor-pointer hover:bg-[var(--red-light)] disabled:opacity-45",
                                                                            style: {
                                                                                borderColor: "var(--gray-200)",
                                                                                color: "var(--red)"
                                                                            },
                                                                            title: "Delete",
                                                                            children: deletingSupplierId === s.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                                size: 14,
                                                                                className: "animate-spin"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                                lineNumber: 1408,
                                                                                columnNumber: 64
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                size: 14
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                                lineNumber: 1408,
                                                                                columnNumber: 113
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                            lineNumber: 1400,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                    lineNumber: 1389,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                lineNumber: 1388,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, s.id, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 1343,
                                                        columnNumber: 23
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 1332,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 1317,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                    lineNumber: 1316,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                lineNumber: 1315,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                        lineNumber: 1306,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold tracking-[2px] uppercase",
                                        style: {
                                            color: "var(--gray-700)"
                                        },
                                        children: "Supplier invoices (PO)"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 1425,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 h-px",
                                        style: {
                                            background: "var(--gray-200)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 1428,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] font-semibold",
                                        style: {
                                            color: "var(--gray-700)"
                                        },
                                        children: savedPOs.length
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 1429,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                lineNumber: 1424,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-[14px] border border-[var(--gray-100)] overflow-hidden",
                                style: {
                                    boxShadow: "var(--shadow-sm)"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-x-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].table} min-w-[720px]`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        "PO #",
                                                        "Supplier",
                                                        "Date",
                                                        "Total",
                                                        "Paid",
                                                        "Status",
                                                        "Actions"
                                                    ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].th} ${h === "Actions" ? "text-center min-w-[100px]" : "text-left"}`,
                                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].thStyle,
                                                            children: h
                                                        }, h, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                            lineNumber: 1437,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                    lineNumber: 1435,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 1434,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: savedPOs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        colSpan: 7,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].empty,
                                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].emptyStyle,
                                                        children: "No supplier invoices yet"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 1450,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                    lineNumber: 1449,
                                                    columnNumber: 21
                                                }, this) : savedPOs.map((po)=>{
                                                    const st = STATUS[po.payment_status] ?? STATUS.unpaid;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].row,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-mono text-[11px] font-bold px-1.5 py-0.5 rounded",
                                                                    style: {
                                                                        background: "var(--blue-light)",
                                                                        color: "var(--blue-deeper)"
                                                                    },
                                                                    children: po.po_number
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                    lineNumber: 1460,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                lineNumber: 1459,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td} ${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].cellPrimary}`,
                                                                style: {
                                                                    color: "var(--gray-900)"
                                                                },
                                                                children: po.supplier_name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                lineNumber: 1467,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td} ${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].cellBody}`,
                                                                children: po.order_date
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                lineNumber: 1468,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td} font-mono font-bold text-[14px]`,
                                                                style: {
                                                                    color: "var(--blue-deeper)"
                                                                },
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(Number(po.grand_total))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                lineNumber: 1469,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td} font-mono text-[13px]`,
                                                                style: {
                                                                    color: "var(--green)"
                                                                },
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(Number(po.amount_paid))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                lineNumber: 1472,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].badge} capitalize`,
                                                                    style: {
                                                                        background: st.bg,
                                                                        color: st.color
                                                                    },
                                                                    children: po.payment_status
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                    lineNumber: 1476,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                lineNumber: 1475,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].td} text-center px-1 py-2`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "inline-flex gap-0.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>void openEditPo(po),
                                                                            disabled: generatingPdfFor !== null || printingPdfFor !== null || draftPdfBusy,
                                                                            title: "Edit purchase order",
                                                                            className: "inline-flex items-center justify-center w-8 h-8 rounded-[8px] border-[1.5px] cursor-pointer hover:bg-[var(--blue-pale)] disabled:opacity-45",
                                                                            style: {
                                                                                borderColor: "var(--gray-200)",
                                                                                color: "var(--blue-deeper)"
                                                                            },
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                                size: 14
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                                lineNumber: 1490,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                            lineNumber: 1482,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>{
                                                                                const msg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$whatsappWaMe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildSupplierPaymentWhatsAppMessage"])({
                                                                                    supplierName: po.supplier_name,
                                                                                    amount: Number(po.amount_paid) || 0,
                                                                                    dateISO: po.order_date,
                                                                                    method: "N/A",
                                                                                    description: `PO ${po.po_number} status update`,
                                                                                    remainingPayable: Number(po.balance_due) || 0
                                                                                });
                                                                                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$whatsappWaMe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openWhatsAppNewTab"])(po.supplier_phone || "", msg)) {
                                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("No valid supplier phone on this PO", "err");
                                                                                }
                                                                            },
                                                                            disabled: generatingPdfFor !== null || printingPdfFor !== null || draftPdfBusy,
                                                                            title: "Send WhatsApp update",
                                                                            className: "inline-flex items-center justify-center w-8 h-8 rounded-[8px] border-[1.5px] cursor-pointer hover:bg-[var(--gray-50)] disabled:opacity-45",
                                                                            style: {
                                                                                borderColor: "var(--gray-200)",
                                                                                color: "#128C7E"
                                                                            },
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                width: "14",
                                                                                height: "14",
                                                                                viewBox: "0 0 24 24",
                                                                                fill: "currentColor",
                                                                                "aria-hidden": true,
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                                    lineNumber: 1513,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                                lineNumber: 1512,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                            lineNumber: 1492,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>void printPoPdf(po),
                                                                            disabled: generatingPdfFor !== null || printingPdfFor !== null || draftPdfBusy,
                                                                            title: "Print",
                                                                            className: "inline-flex items-center justify-center w-8 h-8 rounded-[8px] border-[1.5px] cursor-pointer hover:bg-[var(--gray-50)] disabled:opacity-45",
                                                                            style: {
                                                                                borderColor: "var(--gray-200)",
                                                                                color: "var(--blue-deeper)"
                                                                            },
                                                                            children: printingPdfFor === po.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                                size: 14,
                                                                                className: "animate-spin"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                                lineNumber: 1524,
                                                                                columnNumber: 61
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                                                                size: 14
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                                lineNumber: 1524,
                                                                                columnNumber: 110
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                            lineNumber: 1516,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>void downloadPoPdf(po),
                                                                            disabled: generatingPdfFor !== null || printingPdfFor !== null || draftPdfBusy,
                                                                            title: "Download PDF",
                                                                            className: "inline-flex items-center justify-center w-8 h-8 rounded-[8px] border-[1.5px] cursor-pointer hover:bg-[var(--gray-50)] disabled:opacity-45",
                                                                            style: {
                                                                                borderColor: "var(--gray-200)",
                                                                                color: "var(--blue-deeper)"
                                                                            },
                                                                            children: generatingPdfFor === po.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                                size: 14,
                                                                                className: "animate-spin"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                                lineNumber: 1534,
                                                                                columnNumber: 63
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                                size: 14
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                                lineNumber: 1534,
                                                                                columnNumber: 112
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                            lineNumber: 1526,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                    lineNumber: 1481,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                lineNumber: 1480,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, po.id, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 1458,
                                                        columnNumber: 25
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 1447,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 1433,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                    lineNumber: 1432,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                lineNumber: 1431,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                        lineNumber: 1423,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                lineNumber: 1257,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: pdfRef,
                className: "print-only",
                style: {
                    background: "#fff"
                },
                children: pdfData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$PurchaseOrderPdfDocument$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PurchaseOrderPdfDocument"], {
                    data: pdfData
                }, void 0, false, {
                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                    lineNumber: 1550,
                    columnNumber: 20
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                lineNumber: 1549,
                columnNumber: 7
            }, this),
            showPaySupplierModal && paySupplierTarget && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[800] flex items-start justify-center backdrop-blur-sm pt-10 px-4 overflow-y-auto no-print",
                style: {
                    background: "rgba(10,30,50,.3)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-[20px] w-[440px] max-w-full overflow-hidden animate-slide-up",
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
                                            children: "Pay supplier"
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                            lineNumber: 1565,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] mt-0.5",
                                            style: {
                                                color: "var(--gray-800)"
                                            },
                                            children: paySupplierTarget.name
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                            lineNumber: 1566,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                    lineNumber: 1564,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: closePaySupplierModal,
                                    disabled: spSaving,
                                    className: "w-7 h-7 rounded-full flex items-center justify-center border-none cursor-pointer disabled:opacity-50",
                                    style: {
                                        background: "var(--gray-100)",
                                        color: "var(--gray-800)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 1575,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                    lineNumber: 1568,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                            lineNumber: 1563,
                            columnNumber: 13
                        }, this),
                        paySupplierLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center gap-2 py-16 text-[13px]",
                            style: {
                                color: "var(--gray-700)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    size: 18,
                                    className: "animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                    lineNumber: 1581,
                                    columnNumber: 17
                                }, this),
                                " Loading balances…"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                            lineNumber: 1580,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-5 mt-4 px-4 py-3 rounded-[10px] flex flex-col gap-1",
                                    style: {
                                        background: payModalOutstanding > 0 ? "var(--red-light)" : "var(--gray-100)"
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
                                                    children: "Outstanding payable"
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                    lineNumber: 1592,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[13px] font-extrabold font-mono",
                                                    style: {
                                                        color: payModalOutstanding > 0 ? "var(--red)" : "var(--gray-600)"
                                                    },
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(payModalOutstanding)
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                    lineNumber: 1593,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                            lineNumber: 1591,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[9px] font-medium m-0 leading-snug",
                                            style: {
                                                color: "var(--gray-600)"
                                            },
                                            children: [
                                                "Payment applies to ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: "opening balance"
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                    lineNumber: 1601,
                                                    columnNumber: 40
                                                }, this),
                                                " first, then ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: "purchase orders"
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                    lineNumber: 1601,
                                                    columnNumber: 75
                                                }, this),
                                                " by date (oldest first). Posts to Cash Book as money out."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                            lineNumber: 1600,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                    lineNumber: 1585,
                                    columnNumber: 17
                                }, this),
                                payModalOutstanding <= 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "px-5 py-6 text-[13px] m-0",
                                    style: {
                                        color: "var(--gray-600)"
                                    },
                                    children: [
                                        "Nothing owed to this supplier. Use ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: "New supplier invoice"
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                            lineNumber: 1607,
                                            columnNumber: 56
                                        }, this),
                                        " to record new purchases."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                    lineNumber: 1606,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-5 py-3 max-h-[160px] overflow-y-auto border-b border-[var(--gray-100)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] font-bold uppercase tracking-wide mb-2",
                                            style: {
                                                color: "var(--gray-700)"
                                            },
                                            children: "Breakdown"
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                            lineNumber: 1611,
                                            columnNumber: 21
                                        }, this),
                                        payOpeningSnapshot > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-[12px] py-1 font-mono",
                                            style: {
                                                color: "var(--gray-800)"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Opening owed"
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                    lineNumber: 1616,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(payOpeningSnapshot)
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                    lineNumber: 1617,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                            lineNumber: 1615,
                                            columnNumber: 23
                                        }, this),
                                        paySupplierUnpaid.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-[12px] py-1 font-mono",
                                                style: {
                                                    color: "var(--gray-800)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "truncate pr-2",
                                                        title: p.po_number,
                                                        children: [
                                                            p.po_number,
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] opacity-80",
                                                                children: [
                                                                    "(",
                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(p.order_date),
                                                                    ")"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                lineNumber: 1623,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 1622,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(Math.max(0, Number(p.balance_due) || 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 1625,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, p.id, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 1621,
                                                columnNumber: 23
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                    lineNumber: 1610,
                                    columnNumber: 19
                                }, this),
                                payModalOutstanding > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 1635,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        value: spDate,
                                                        onChange: (e)=>setSpDate(e.target.value),
                                                        className: "border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none",
                                                        style: payModalInputStyle
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 1638,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 1634,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[10px] font-bold tracking-[1.2px] uppercase",
                                                        style: {
                                                            color: "var(--blue-deeper)"
                                                        },
                                                        children: "Payment method"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 1647,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap border-[1.5px] rounded-[9px] overflow-hidden",
                                                        style: {
                                                            borderColor: "var(--gray-200)"
                                                        },
                                                        children: paymentMethods.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setSpMethod(m.name),
                                                                className: "flex-1 min-w-[80px] py-2 text-[10px] font-semibold border-none cursor-pointer transition-all",
                                                                style: {
                                                                    background: spMethod === m.name ? "var(--blue-deeper)" : "var(--gray-50)",
                                                                    color: spMethod === m.name ? "#fff" : "var(--gray-500)"
                                                                },
                                                                children: m.name
                                                            }, m.id, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                lineNumber: 1652,
                                                                columnNumber: 29
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 1650,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 1646,
                                                columnNumber: 23
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
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                lineNumber: 1669,
                                                                columnNumber: 39
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 1668,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: spDesc,
                                                        onChange: (e)=>setSpDesc(e.target.value),
                                                        placeholder: `Supplier payment — ${paySupplierTarget.name}`,
                                                        className: "border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none",
                                                        style: payModalInputStyle
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 1671,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 1667,
                                                columnNumber: 23
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
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                lineNumber: 1681,
                                                                columnNumber: 34
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 1680,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: spAmount,
                                                        onChange: (e)=>setSpAmount(e.target.value),
                                                        type: "number",
                                                        min: "0",
                                                        step: "1",
                                                        placeholder: "0",
                                                        className: "border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none font-mono",
                                                        style: payModalInputStyle
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 1683,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 1679,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 1633,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                    lineNumber: 1632,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap justify-end gap-2 px-5 py-3.5 border-t border-[var(--gray-100)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: closePaySupplierModal,
                                            disabled: spSaving,
                                            className: "px-4 py-2 rounded-[9px] text-[12.5px] font-semibold border-[1.5px] cursor-pointer bg-white disabled:opacity-50",
                                            style: {
                                                borderColor: "var(--gray-200)",
                                                color: "var(--blue-deeper)"
                                            },
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                            lineNumber: 1699,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>void handlePaySupplier(),
                                            disabled: spSaving || paySupplierLoading || payModalOutstanding <= 0,
                                            className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-[9px] text-[12.5px] font-semibold border-none cursor-pointer text-white disabled:opacity-50",
                                            style: {
                                                background: "var(--green)",
                                                boxShadow: "0 2px 10px rgba(14,173,106,.25)"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                    lineNumber: 1715,
                                                    columnNumber: 21
                                                }, this),
                                                spSaving ? "Saving…" : "Record payment"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                            lineNumber: 1708,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                    lineNumber: 1698,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                    lineNumber: 1559,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                lineNumber: 1555,
                columnNumber: 9
            }, this),
            supplierModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[800] flex items-start justify-center backdrop-blur-sm pt-16 px-3 pb-8 overflow-y-auto no-print",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-label": "Close",
                        className: "absolute inset-0 bg-black/35 border-none cursor-default",
                        onClick: ()=>{
                            if (!supplierSaving) setSupplierModal(null);
                        }
                    }, void 0, false, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                        lineNumber: 1727,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 w-full max-w-md bg-white rounded-[14px] border border-[var(--gray-100)] overflow-hidden",
                        style: {
                            boxShadow: "var(--shadow-lg)"
                        },
                        onClick: (e)=>e.stopPropagation(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between px-4 py-3 border-b border-[var(--gray-100)]",
                                style: {
                                    background: "var(--blue-deeper)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[14px] font-extrabold text-white",
                                        children: supplierModal.id ? "Edit supplier" : "New supplier"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 1739,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            if (!supplierSaving) setSupplierModal(null);
                                        },
                                        className: "w-8 h-8 rounded-lg border-none bg-white/10 text-white cursor-pointer flex items-center justify-center hover:bg-white/20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                            lineNumber: 1745,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 1740,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                lineNumber: 1738,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-[11px] font-bold uppercase tracking-wide",
                                        style: {
                                            color: "var(--gray-700)"
                                        },
                                        children: [
                                            "Name *",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "mt-1 w-full border border-[var(--gray-200)] rounded-lg px-3 py-2 text-[14px]",
                                                value: supplierModal.name,
                                                onChange: (e)=>setSupplierModal({
                                                        ...supplierModal,
                                                        name: e.target.value
                                                    }),
                                                placeholder: "e.g. ABC Materials"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 1751,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 1749,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-[11px] font-bold uppercase tracking-wide",
                                        style: {
                                            color: "var(--gray-700)"
                                        },
                                        children: [
                                            "Phone",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "mt-1 w-full border border-[var(--gray-200)] rounded-lg px-3 py-2 text-[14px]",
                                                value: supplierModal.phone,
                                                onChange: (e)=>setSupplierModal({
                                                        ...supplierModal,
                                                        phone: e.target.value
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 1760,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 1758,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-[11px] font-bold uppercase tracking-wide",
                                        style: {
                                            color: "var(--gray-700)"
                                        },
                                        children: [
                                            "Address",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "mt-1 w-full border border-[var(--gray-200)] rounded-lg px-3 py-2 text-[14px]",
                                                value: supplierModal.address,
                                                onChange: (e)=>setSupplierModal({
                                                        ...supplierModal,
                                                        address: e.target.value
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 1768,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 1766,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-[11px] font-bold uppercase tracking-wide",
                                        style: {
                                            color: "var(--gray-700)"
                                        },
                                        children: [
                                            "Notes",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                className: "mt-1 w-full border border-[var(--gray-200)] rounded-lg px-3 py-2 text-[13px] min-h-[72px] resize-y",
                                                value: supplierModal.notes,
                                                onChange: (e)=>setSupplierModal({
                                                        ...supplierModal,
                                                        notes: e.target.value
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 1776,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 1774,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-[11px] font-bold uppercase tracking-wide",
                                        style: {
                                            color: "var(--gray-700)"
                                        },
                                        children: [
                                            "Opening balance owed (Rs)",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: 0,
                                                step: "1",
                                                className: "mt-1 w-full border border-[var(--gray-200)] rounded-lg px-3 py-2 text-[14px] font-mono",
                                                value: supplierModal.opening_balance === 0 ? "" : supplierModal.opening_balance,
                                                onChange: (e)=>setSupplierModal({
                                                        ...supplierModal,
                                                        opening_balance: Math.max(0, parseFloat(e.target.value) || 0)
                                                    }),
                                                placeholder: "0"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 1784,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block mt-1 text-[10px] font-normal normal-case",
                                                style: {
                                                    color: "var(--gray-600)"
                                                },
                                                children: 'What you already owed this supplier before purchase orders here. Does not change cash until you pay (e.g. via PO "Paid now" or Cash Book).'
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 1798,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 1782,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                lineNumber: 1748,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end gap-2 px-4 py-3 border-t border-[var(--gray-100)] bg-[var(--gray-50)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            if (!supplierSaving) setSupplierModal(null);
                                        },
                                        className: "px-4 py-2 rounded-lg border border-[var(--gray-200)] text-[12px] font-semibold cursor-pointer bg-white",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 1805,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>void saveSupplier(),
                                        disabled: supplierSaving,
                                        className: "px-4 py-2 rounded-lg border-none text-[12px] font-semibold cursor-pointer text-white disabled:opacity-50",
                                        style: {
                                            background: "var(--blue)"
                                        },
                                        children: supplierSaving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            size: 14,
                                            className: "animate-spin inline"
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                            lineNumber: 1819,
                                            columnNumber: 35
                                        }, this) : "Save"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 1812,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                lineNumber: 1804,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                        lineNumber: 1733,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                lineNumber: 1726,
                columnNumber: 9
            }, this),
            showPurchaseProdsModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[900] flex items-start justify-center backdrop-blur-sm pt-8 px-3 pb-8 overflow-y-auto no-print",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-label": "Close",
                        className: "absolute inset-0 bg-black/35 border-none cursor-default",
                        onClick: ()=>setShowPurchaseProdsModal(false)
                    }, void 0, false, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                        lineNumber: 1829,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl",
                        style: {
                            background: "white",
                            zIndex: 1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between px-5 py-4",
                                style: {
                                    background: "var(--purple)",
                                    color: "white"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 1834,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[15px] font-bold",
                                                        children: "Supplier Products"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 1836,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] text-white/75 mt-0.5",
                                                        children: "Universal catalog — available for all suppliers when creating a purchase order"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 1837,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 1835,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 1833,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setShowPurchaseProdsModal(false),
                                        className: "w-8 h-8 rounded-full flex items-center justify-center border-none cursor-pointer hover:bg-white/15",
                                        style: {
                                            color: "white"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                            lineNumber: 1846,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 1840,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                lineNumber: 1832,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5 space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-[1fr_auto_auto_auto] gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "border border-[var(--gray-200)] rounded-lg px-3 py-2 text-[13px] outline-none focus:border-[var(--purple)]",
                                                placeholder: "Product name",
                                                value: newProdName,
                                                onChange: (e)=>setNewProdName(e.target.value),
                                                onKeyDown: (e)=>{
                                                    if (e.key === "Enter") void addSupplierProduct();
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 1853,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                className: "w-20 border border-[var(--gray-200)] rounded-lg px-3 py-2 text-[13px] outline-none focus:border-[var(--purple)]",
                                                placeholder: "Gram",
                                                value: newProdGram,
                                                onChange: (e)=>setNewProdGram(e.target.value),
                                                onKeyDown: (e)=>{
                                                    if (e.key === "Enter") void addSupplierProduct();
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 1860,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                className: "w-20 border border-[var(--gray-200)] rounded-lg px-3 py-2 text-[13px] outline-none focus:border-[var(--purple)]",
                                                placeholder: "MM",
                                                value: newProdMeter,
                                                onChange: (e)=>setNewProdMeter(e.target.value),
                                                onKeyDown: (e)=>{
                                                    if (e.key === "Enter") void addSupplierProduct();
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 1868,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>void addSupplierProduct(),
                                                disabled: addingProd || !newProdName.trim(),
                                                className: "px-4 py-2 rounded-lg border-none text-[12px] font-semibold cursor-pointer text-white disabled:opacity-50 flex items-center gap-1",
                                                style: {
                                                    background: "var(--purple)"
                                                },
                                                children: [
                                                    addingProd ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                        size: 14,
                                                        className: "animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 1883,
                                                        columnNumber: 33
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 1883,
                                                        columnNumber: 82
                                                    }, this),
                                                    "Add"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 1876,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 1852,
                                        columnNumber: 15
                                    }, this),
                                    supplierProdsLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-center py-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            size: 20,
                                            className: "animate-spin",
                                            style: {
                                                color: "var(--purple)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                            lineNumber: 1890,
                                            columnNumber: 59
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 1890,
                                        columnNumber: 17
                                    }, this) : supplierProds.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-center text-[13px] py-6",
                                        style: {
                                            color: "var(--gray-500)"
                                        },
                                        children: "No products yet. Add one above."
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 1892,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-[var(--gray-100)] rounded-xl overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                className: "w-full text-[13px]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        style: {
                                                            background: "var(--gray-50)"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "text-left px-3 py-2 font-bold text-[10px] uppercase tracking-wide",
                                                                style: {
                                                                    color: "var(--gray-600)"
                                                                },
                                                                children: "Product"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                lineNumber: 1898,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "text-center px-3 py-2 font-bold text-[10px] uppercase tracking-wide",
                                                                style: {
                                                                    color: "var(--gray-600)"
                                                                },
                                                                children: "Gram"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                lineNumber: 1899,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "text-center px-3 py-2 font-bold text-[10px] uppercase tracking-wide",
                                                                style: {
                                                                    color: "var(--gray-600)"
                                                                },
                                                                children: "MM"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                lineNumber: 1900,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "w-10"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                lineNumber: 1901,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 1897,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                    lineNumber: 1896,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 1895,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    maxHeight: "calc(10 * 41px)",
                                                    overflowY: "auto"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                    className: "w-full text-[13px]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                        children: supplierProds.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                className: "border-t border-[var(--gray-100)]",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-3 py-2 font-medium",
                                                                        children: [
                                                                            p.code && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-mono text-[11px] font-bold px-1.5 py-0.5 rounded mr-2",
                                                                                style: {
                                                                                    background: "var(--blue-light)",
                                                                                    color: "var(--blue-deeper)"
                                                                                },
                                                                                children: p.code
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                                lineNumber: 1912,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            p.name
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                        lineNumber: 1910,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-3 py-2 text-center font-mono text-[12px]",
                                                                        style: {
                                                                            color: "var(--gray-600)"
                                                                        },
                                                                        children: p.gram != null ? `${p.gram}g` : "—"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                        lineNumber: 1918,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-3 py-2 text-center font-mono text-[12px]",
                                                                        style: {
                                                                            color: "var(--gray-600)"
                                                                        },
                                                                        children: p.meter != null ? `${p.meter}mm` : "—"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                        lineNumber: 1921,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-2 py-2 text-center",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>void removeSupplierProduct(p.id),
                                                                            className: "p-1 rounded-md text-[var(--red)] hover:bg-[var(--red-light)]",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                size: 14
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                                lineNumber: 1930,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                            lineNumber: 1925,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                        lineNumber: 1924,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, p.id, true, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                lineNumber: 1909,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 1907,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                    lineNumber: 1906,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 1905,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 1894,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                lineNumber: 1850,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                        lineNumber: 1830,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                lineNumber: 1828,
                columnNumber: 9
            }, this),
            poDraft && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PoModal, {
                draft: poDraft,
                setDraft: setPoDraft,
                suppliers: suppliers,
                savedPOs: savedPOs,
                excludePoId: editPoId,
                paymentMethods: paymentMethods,
                onClose: ()=>{
                    setPoDraft(null);
                    setEditPoId(null);
                },
                onSave: ()=>void savePurchaseOrder(),
                saving: savingPo,
                draftPdfBusy: draftPdfBusy,
                onPrintDraft: ()=>void printDraftPo(),
                onDownloadDraft: ()=>void downloadDraftPo(),
                isEdit: !!editPoId
            }, void 0, false, {
                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                lineNumber: 1946,
                columnNumber: 9
            }, this),
            showLedgerModal && ledgerSupplier && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[800] flex items-start justify-center backdrop-blur-sm pt-6 px-4 pb-8 overflow-y-auto no-print",
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
                                            children: "Supplier ledger"
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                            lineNumber: 1972,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] mt-0.5 text-white/80",
                                            children: ledgerSupplier.name
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                            lineNumber: 1973,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                    lineNumber: 1971,
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
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 1978,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                    lineNumber: 1975,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                            lineNumber: 1969,
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
                                    children: "Opening balance, purchase orders and cashbook lines for this supplier"
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                    lineNumber: 1984,
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
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                    lineNumber: 1992,
                                                    columnNumber: 19
                                                }, this),
                                                " ",
                                                ledgerDownloading ? "Saving…" : "Download PDF"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                            lineNumber: 1988,
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
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                    lineNumber: 1998,
                                                    columnNumber: 19
                                                }, this),
                                                " Print report"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                            lineNumber: 1994,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                    lineNumber: 1987,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                            lineNumber: 1982,
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
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                            lineNumber: 2006,
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
                                            style: {
                                                borderColor: "var(--gray-200)",
                                                background: "var(--gray-50)",
                                                color: "var(--gray-900)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                            lineNumber: 2007,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                    lineNumber: 2005,
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
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                            lineNumber: 2013,
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
                                            style: {
                                                borderColor: "var(--gray-200)",
                                                background: "var(--gray-50)",
                                                color: "var(--gray-900)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                            lineNumber: 2014,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                    lineNumber: 2012,
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
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                            lineNumber: 2020,
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
                                            style: {
                                                borderColor: "var(--gray-200)",
                                                background: "var(--gray-50)",
                                                color: "var(--gray-900)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                            lineNumber: 2021,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                    lineNumber: 2019,
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
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                    lineNumber: 2026,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                            lineNumber: 2003,
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
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                lineNumber: 2036,
                                columnNumber: 17
                            }, this) : ledgerAllRows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[13px] m-0",
                                style: {
                                    color: "var(--gray-600)"
                                },
                                children: "No ledger entries yet for this supplier."
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                lineNumber: 2038,
                                columnNumber: 17
                            }, this) : ledgerDisplayWithBal.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[13px] m-0",
                                style: {
                                    color: "var(--gray-600)"
                                },
                                children: "No entries in the selected date range."
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                lineNumber: 2040,
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
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 2046,
                                                columnNumber: 23
                                            }, this),
                                            ledgerOpeningBefore > 0 ? " payable" : ledgerOpeningBefore < 0 ? " receivable" : ""
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 2044,
                                        columnNumber: 21
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].table} min-w-[720px]`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        "Date",
                                                        "Doc / Ref",
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
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                            lineNumber: 2056,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                    lineNumber: 2054,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 2053,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: ledgerDisplayWithBal.map((r, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].row,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].tdDense} ${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].cellPrimary}`,
                                                                style: {
                                                                    color: "var(--gray-900)"
                                                                },
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(r.date)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                lineNumber: 2063,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-[12px]`,
                                                                style: {
                                                                    color: "var(--gray-900)"
                                                                },
                                                                children: r.doc
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                lineNumber: 2064,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].tdDense,
                                                                style: {
                                                                    color: "var(--gray-800)"
                                                                },
                                                                children: r.desc
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                lineNumber: 2065,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right`,
                                                                style: {
                                                                    color: r.debit > 0 ? "var(--red)" : "var(--gray-300)"
                                                                },
                                                                children: r.debit > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(r.debit) : "—"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                lineNumber: 2066,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right`,
                                                                style: {
                                                                    color: r.credit > 0 ? "var(--green)" : "var(--gray-300)"
                                                                },
                                                                children: r.credit > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(r.credit) : "—"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                lineNumber: 2069,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono font-bold text-right`,
                                                                style: {
                                                                    color: r.balance > 0 ? "var(--red)" : r.balance < 0 ? "var(--green)" : "var(--gray-600)"
                                                                },
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(r.balance)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                lineNumber: 2072,
                                                                columnNumber: 27
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
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                    lineNumber: 2077,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                lineNumber: 2076,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, `${r.sortAt}-${idx}`, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 2062,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 2060,
                                                columnNumber: 21
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
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                            lineNumber: 2084,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono font-extrabold text-right border-t-2 border-[var(--gray-200)]`,
                                                            style: {
                                                                color: (()=>{
                                                                    const b = ledgerDisplayWithBal.at(-1)?.balance ?? 0;
                                                                    if (b > 0) return "var(--red)";
                                                                    if (b < 0) return "var(--green)";
                                                                    return "var(--gray-600)";
                                                                })()
                                                            },
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(ledgerDisplayWithBal.at(-1)?.balance ?? 0)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                            lineNumber: 2088,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DT"].tdDense} border-t-2 border-[var(--gray-200)]`
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                            lineNumber: 2099,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                    lineNumber: 2083,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 2082,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 2052,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                            lineNumber: 2034,
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
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                lineNumber: 2108,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                            lineNumber: 2107,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                    lineNumber: 1967,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                lineNumber: 1965,
                columnNumber: 9
            }, this),
            ledgerSupplier && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                        lineNumber: 2121,
                        columnNumber: 11
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
                                children: "Supplier Ledger"
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                lineNumber: 2125,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "monospace",
                                    fontWeight: 800,
                                    fontSize: 13
                                },
                                children: ledgerDateFrom.trim() || ledgerDateTo.trim() ? `${ledgerDateFrom.trim() ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(ledgerDateFrom.trim()) : "Start"} — ${ledgerDateTo.trim() ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(ledgerDateTo.trim()) : "End"}` : "All Transactions"
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                lineNumber: 2126,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                        lineNumber: 2124,
                        columnNumber: 11
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
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 2136,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontWeight: 900,
                                            color: "#111",
                                            fontSize: 16,
                                            lineHeight: 1.2
                                        },
                                        children: ledgerSupplier.name
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 2137,
                                        columnNumber: 15
                                    }, this),
                                    ledgerSupplier.phone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 11,
                                            color: "#111",
                                            marginTop: 3
                                        },
                                        children: ledgerSupplier.phone
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 2138,
                                        columnNumber: 39
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
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 2141,
                                                columnNumber: 19
                                            }, this),
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(Math.abs(ledgerOpeningBefore)),
                                            ledgerOpeningBefore > 0 ? " payable" : " receivable"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 2140,
                                        columnNumber: 17
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                lineNumber: 2135,
                                columnNumber: 13
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
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 2148,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontWeight: 700,
                                                    fontSize: 12
                                                },
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["todayISO"])())
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 2149,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 2147,
                                        columnNumber: 15
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
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                            lineNumber: 2152,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 2151,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                lineNumber: 2146,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                        lineNumber: 2134,
                        columnNumber: 11
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
                            children: "No ledger entries for this supplier."
                        }, void 0, false, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                            lineNumber: 2159,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                        lineNumber: 2158,
                        columnNumber: 13
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
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                            lineNumber: 2163,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                        lineNumber: 2162,
                        columnNumber: 13
                    }, this) : (()=>{
                        const gridCols = "11% 16% 32% 10% 10% 10% 11%";
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
                                            label: "Doc / Ref",
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
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                            lineNumber: 2180,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                    lineNumber: 2170,
                                    columnNumber: 17
                                }, this),
                                ledgerDisplayWithBal.map((r, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                    color: "#111",
                                                    borderLeft: "1px solid #000"
                                                },
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(r.date)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 2203,
                                                columnNumber: 21
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
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 2204,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    padding: cellPad,
                                                    color: "#111",
                                                    borderLeft: "1px solid #000"
                                                },
                                                children: r.desc
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 2205,
                                                columnNumber: 21
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
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 2206,
                                                columnNumber: 21
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
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 2209,
                                                columnNumber: 21
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
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 2212,
                                                columnNumber: 21
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
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 2215,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, `${r.sortAt}-p-${idx}`, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 2199,
                                        columnNumber: 19
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
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                            lineNumber: 2222,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                borderLeft: "1px solid #000"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                            lineNumber: 2223,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                borderLeft: "1px solid #000"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                            lineNumber: 2224,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                borderLeft: "1px solid #000"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                            lineNumber: 2225,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                borderLeft: "1px solid #000"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                            lineNumber: 2226,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                borderLeft: "1px solid #000"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                            lineNumber: 2227,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                borderLeft: "1px solid #000",
                                                borderRight: "1px solid #000"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                            lineNumber: 2228,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                    lineNumber: 2221,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                            lineNumber: 2169,
                            columnNumber: 15
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
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 2239,
                                        columnNumber: 19
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
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 2242,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                lineNumber: 2238,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                            lineNumber: 2237,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                        lineNumber: 2236,
                        columnNumber: 13
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$PrintFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrintFooter"], {}, void 0, false, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                        lineNumber: 2250,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                lineNumber: 2120,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(SupplierPage, "JNhFruy56LTNGtVXh73OOB47G7M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$UserContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$paymentMethods$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePaymentMethods"]
    ];
});
_c = SupplierPage;
function PoModal({ draft, setDraft, suppliers, savedPOs, excludePoId, paymentMethods, onClose, onSave, saving, draftPdfBusy, onPrintDraft, onDownloadDraft, isEdit }) {
    _s1();
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Inline product-create modal state (triggered from a PO product picker row).
    const [productCreate, setProductCreate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PoModal.useCallback[fetchProducts]": async ()=>{
            const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from("purchase_products").select("id, code, name, cost_price, gram, meter").order("code");
            setProducts(data ?? []);
        }
    }["PoModal.useCallback[fetchProducts]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PoModal.useEffect": ()=>{
            void fetchProducts();
        }
    }["PoModal.useEffect"], [
        fetchProducts
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PoModal.useEffect": ()=>{
            function onKey(e) {
                if (e.key === "Escape" && !saving) onClose();
            }
            window.addEventListener("keydown", onKey);
            return ({
                "PoModal.useEffect": ()=>window.removeEventListener("keydown", onKey)
            })["PoModal.useEffect"];
        }
    }["PoModal.useEffect"], [
        onClose,
        saving
    ]);
    const updateLine = (idx, field, value)=>{
        setDraft((d)=>{
            if (!d) return null;
            const items = [
                ...d.items
            ];
            let line = {
                ...items[idx],
                [field]: value
            };
            line = calcLine(line);
            items[idx] = line;
            return {
                ...d,
                items
            };
        });
    };
    const selectProduct = (idx, productName)=>{
        const prod = products.find((p)=>p.name === productName);
        setDraft((d)=>{
            if (!d) return null;
            const items = [
                ...d.items
            ];
            let line = {
                ...items[idx],
                description: productName
            };
            if (prod) line = {
                ...line,
                rate: prod.cost_price,
                gram: prod.gram ?? null,
                meter: prod.meter ?? null
            };
            else line = {
                ...line,
                gram: null,
                meter: null
            };
            line = calcLine(line);
            items[idx] = line;
            return {
                ...d,
                items
            };
        });
    };
    const handleProductCreated = async (newProduct)=>{
        await fetchProducts();
        const idx = productCreate?.idx;
        setProductCreate(null);
        if (typeof idx !== "number") return;
        setDraft((d)=>{
            if (!d) return null;
            const items = [
                ...d.items
            ];
            const cur = items[idx];
            if (!cur) return d;
            let line = {
                ...cur,
                description: newProduct.name,
                rate: newProduct.cost_price,
                gram: newProduct.gram,
                meter: newProduct.meter
            };
            line = calcLine(line);
            items[idx] = line;
            return {
                ...d,
                items
            };
        });
    };
    const addLine = ()=>{
        setDraft((d)=>d ? {
                ...d,
                items: [
                    ...d.items,
                    blankLine()
                ]
            } : null);
    };
    const removeLine = (idx)=>{
        setDraft((d)=>{
            if (!d || d.items.length <= 1) return d;
            return {
                ...d,
                items: d.items.filter((_, i)=>i !== idx)
            };
        });
    };
    const items = draft.items.map((it)=>calcLine(it));
    const grandTotal = items.reduce((s, it)=>s + it.amount, 0);
    const { amountPaid: paidPreview } = computePoPayment(grandTotal, draft.amountPaid);
    const sup = suppliers.find((x)=>x.id === draft.supplierId);
    const filteredPos = excludePoId ? savedPOs.filter((p)=>p.id !== excludePoId) : savedPOs;
    const previousBalance = sup ? estimatedSupplierPayable(sup.id, sup.opening_balance, filteredPos) : 0;
    const totalRemaining = Math.round((previousBalance + grandTotal - paidPreview) * 100) / 100;
    const sm = "border border-[var(--gray-200)] rounded-[6px] px-2 py-1.5 text-[12px] outline-none bg-white focus:border-[var(--blue)] w-full";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[800] flex items-start justify-center backdrop-blur-sm pt-4 sm:pt-8 px-3 pb-8 overflow-y-auto no-print",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-label": "Close",
                        className: "absolute inset-0 bg-black/35 border-none cursor-default",
                        onClick: ()=>{
                            if (!saving) onClose();
                        }
                    }, void 0, false, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                        lineNumber: 2377,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 w-full max-w-[1000px] bg-white rounded-[14px] border border-[var(--gray-100)] overflow-hidden",
                        style: {
                            boxShadow: "var(--shadow-lg)"
                        },
                        onClick: (e)=>e.stopPropagation(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between gap-3 px-5 py-4 border-b border-[var(--gray-100)]",
                                style: {
                                    background: "var(--blue-deeper)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-[15px] font-extrabold text-white tracking-tight",
                                                children: isEdit ? "Edit supplier invoice" : "New supplier invoice"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 2388,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-white/75 mt-0.5 font-mono font-bold",
                                                children: draft.poNumber || "Auto-assigned on save"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 2389,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 2387,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5 shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: onPrintDraft,
                                                disabled: saving || draftPdfBusy,
                                                className: "inline-flex items-center gap-1.5 px-3 py-2 rounded-[8px] border-[1.5px] text-[11px] font-bold cursor-pointer text-white hover:bg-white/10 disabled:opacity-40",
                                                style: {
                                                    borderColor: "rgba(255,255,255,0.35)"
                                                },
                                                children: [
                                                    draftPdfBusy ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                        size: 14,
                                                        className: "animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 2399,
                                                        columnNumber: 31
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 2399,
                                                        columnNumber: 80
                                                    }, this),
                                                    "Print"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 2392,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: onDownloadDraft,
                                                disabled: saving || draftPdfBusy,
                                                className: "inline-flex items-center gap-1.5 px-3 py-2 rounded-[8px] border-[1.5px] text-[11px] font-bold cursor-pointer text-white hover:bg-white/10 disabled:opacity-40",
                                                style: {
                                                    borderColor: "rgba(255,255,255,0.35)"
                                                },
                                                children: [
                                                    draftPdfBusy ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                        size: 14,
                                                        className: "animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 2409,
                                                        columnNumber: 31
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 2409,
                                                        columnNumber: 80
                                                    }, this),
                                                    "PDF"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 2402,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    if (!saving) onClose();
                                                },
                                                disabled: saving,
                                                className: "w-9 h-9 rounded-[8px] flex items-center justify-center border-none cursor-pointer text-white hover:bg-white/10 disabled:opacity-40",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                    lineNumber: 2418,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 2412,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 2391,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                lineNumber: 2383,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 sm:p-5 space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-[11px] font-bold uppercase tracking-wide",
                                                style: {
                                                    color: "var(--gray-700)"
                                                },
                                                children: [
                                                    "Supplier *",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: `mt-1 ${sm}`,
                                                        value: draft.supplierId,
                                                        disabled: isEdit,
                                                        onChange: (e)=>setDraft((d)=>d ? {
                                                                    ...d,
                                                                    supplierId: e.target.value
                                                                } : null),
                                                        children: suppliers.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: s.id,
                                                                children: s.name
                                                            }, s.id, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                lineNumber: 2434,
                                                                columnNumber: 19
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 2427,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 2425,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-[11px] font-bold uppercase tracking-wide",
                                                style: {
                                                    color: "var(--gray-700)"
                                                },
                                                children: [
                                                    "Order date",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        className: `mt-1 ${sm}`,
                                                        value: draft.orderDate,
                                                        onChange: (e)=>setDraft((d)=>d ? {
                                                                    ...d,
                                                                    orderDate: e.target.value
                                                                } : null)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 2440,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 2438,
                                                columnNumber: 13
                                            }, this),
                                            !isEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-[11px] font-bold uppercase tracking-wide col-span-2",
                                                style: {
                                                    color: "var(--gray-700)"
                                                },
                                                children: [
                                                    "Paid now (optional)",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: `mt-1 ${sm}`,
                                                        inputMode: "decimal",
                                                        placeholder: "0",
                                                        value: draft.amountPaid,
                                                        onChange: (e)=>setDraft((d)=>d ? {
                                                                    ...d,
                                                                    amountPaid: e.target.value
                                                                } : null)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 2450,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block mt-1 text-[10px] font-normal normal-case font-sans",
                                                        style: {
                                                            color: "var(--gray-600)"
                                                        },
                                                        children: [
                                                            "Recorded as ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                children: "Debit (out)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                lineNumber: 2458,
                                                                columnNumber: 31
                                                            }, this),
                                                            " in Cash Book — reduces ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                children: "cash in hand"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                lineNumber: 2458,
                                                                columnNumber: 73
                                                            }, this),
                                                            " by this amount."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 2457,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 2448,
                                                columnNumber: 15
                                            }, this),
                                            isEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "col-span-2 rounded-[9px] px-3 py-2.5 text-[12px]",
                                                style: {
                                                    background: "var(--blue-pale)",
                                                    color: "var(--gray-800)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "Payments are not changed when editing."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 2464,
                                                        columnNumber: 17
                                                    }, this),
                                                    " Use ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                        children: "Pay supplier"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 2464,
                                                        columnNumber: 67
                                                    }, this),
                                                    " to record additional payments."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 2463,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 2424,
                                        columnNumber: 11
                                    }, this),
                                    !isEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] font-bold uppercase tracking-wide",
                                                style: {
                                                    color: "var(--gray-700)"
                                                },
                                                children: "How paid"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 2471,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2 mt-1.5",
                                                children: paymentMethods.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setDraft((d)=>d ? {
                                                                    ...d,
                                                                    payMethod: m.name
                                                                } : null),
                                                        className: "px-3 py-1.5 rounded-lg text-[11px] font-bold border-[1.5px] transition-all",
                                                        style: {
                                                            borderColor: draft.payMethod === m.name ? "var(--blue)" : "var(--gray-200)",
                                                            background: draft.payMethod === m.name ? "var(--blue-light)" : "white",
                                                            color: draft.payMethod === m.name ? "var(--blue-deeper)" : "var(--gray-800)"
                                                        },
                                                        children: m.name
                                                    }, m.id, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 2474,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 2472,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 2470,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-[11px] font-bold uppercase tracking-wide",
                                        style: {
                                            color: "var(--gray-700)"
                                        },
                                        children: [
                                            "Notes (optional)",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                className: "mt-1 w-full border border-[var(--gray-200)] rounded-lg px-3 py-2 text-[13px] min-h-[64px]",
                                                value: draft.notes,
                                                onChange: (e)=>setDraft((d)=>d ? {
                                                            ...d,
                                                            notes: e.target.value
                                                        } : null),
                                                placeholder: "Order / delivery notes"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 2494,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 2492,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] font-bold uppercase tracking-wide",
                                                        style: {
                                                            color: "var(--gray-700)"
                                                        },
                                                        children: "Line items"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 2504,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: addLine,
                                                        className: "text-[11px] font-bold text-[var(--blue)] flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                size: 12
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                lineNumber: 2506,
                                                                columnNumber: 17
                                                            }, this),
                                                            " Add line"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 2505,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 2503,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "overflow-x-auto border border-[var(--gray-100)] rounded-xl",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                    className: "w-full text-[12px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                style: {
                                                                    background: "var(--gray-50)"
                                                                },
                                                                children: [
                                                                    "#",
                                                                    "Product",
                                                                    "Gram",
                                                                    "MM",
                                                                    "Qty",
                                                                    "Rate",
                                                                    "Amount",
                                                                    ""
                                                                ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "text-left px-2 py-2 font-bold text-[10px] uppercase tracking-wide",
                                                                        style: {
                                                                            color: "var(--gray-600)"
                                                                        },
                                                                        children: h
                                                                    }, h, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                        lineNumber: 2514,
                                                                        columnNumber: 23
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                lineNumber: 2512,
                                                                columnNumber: 19
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                            lineNumber: 2511,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                            children: draft.items.map((it, idx)=>{
                                                                const calc = calcLine(it);
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    className: "border-t border-[var(--gray-100)]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "px-2 py-2 text-[var(--gray-500)] w-8",
                                                                            children: idx + 1
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                            lineNumber: 2525,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "px-2 py-2 min-w-[160px]",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$SearchableSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchableSelect"], {
                                                                                value: it.description,
                                                                                onChange: (v)=>selectProduct(idx, v),
                                                                                options: products.map((p)=>{
                                                                                    const tags = [
                                                                                        p.gram != null ? `${p.gram}g` : null,
                                                                                        p.meter != null ? `${p.meter}mm` : null
                                                                                    ].filter(Boolean);
                                                                                    const base = tags.length ? `${p.name} (${tags.join(", ")})` : p.name;
                                                                                    return {
                                                                                        value: p.name,
                                                                                        label: p.code ? `#${p.code} — ${base}` : base
                                                                                    };
                                                                                }),
                                                                                placeholder: "— Product —",
                                                                                inputClassName: sm,
                                                                                onCreate: (q)=>setProductCreate({
                                                                                        idx,
                                                                                        initialName: q
                                                                                    }),
                                                                                createLabel: "+ Add new product"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                                lineNumber: 2527,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                            lineNumber: 2526,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "px-2 py-2 w-20",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "number",
                                                                                className: sm,
                                                                                value: it.gram ?? "",
                                                                                placeholder: "—",
                                                                                min: 0,
                                                                                onChange: (e)=>{
                                                                                    const v = e.target.value;
                                                                                    const parsed = v === "" ? null : Number(v);
                                                                                    updateLine(idx, "gram", parsed);
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                                lineNumber: 2542,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                            lineNumber: 2541,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "px-2 py-2 w-20",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "number",
                                                                                className: sm,
                                                                                value: it.meter ?? "",
                                                                                placeholder: "—",
                                                                                min: 0,
                                                                                onChange: (e)=>{
                                                                                    const v = e.target.value;
                                                                                    const parsed = v === "" ? null : Number(v);
                                                                                    updateLine(idx, "meter", parsed);
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                                lineNumber: 2556,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                            lineNumber: 2555,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "px-2 py-2 w-20",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "number",
                                                                                className: sm,
                                                                                value: it.qty || "",
                                                                                placeholder: "Qty",
                                                                                onChange: (e)=>updateLine(idx, "qty", parseFloat(e.target.value) || 1)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                                lineNumber: 2570,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                            lineNumber: 2569,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "px-2 py-2 w-28",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "number",
                                                                                className: sm,
                                                                                value: it.rate || "",
                                                                                onChange: (e)=>updateLine(idx, "rate", parseFloat(e.target.value) || 0)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                                lineNumber: 2579,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                            lineNumber: 2578,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "px-2 py-2 font-mono font-bold w-28",
                                                                            style: {
                                                                                color: "var(--blue-deeper)"
                                                                            },
                                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(calc.amount)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                            lineNumber: 2586,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "px-1 py-2 w-10",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>removeLine(idx),
                                                                                disabled: draft.items.length <= 1,
                                                                                className: "p-1.5 rounded-lg text-[var(--red)] disabled:opacity-30",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                    size: 14
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                                    lineNumber: 2596,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                                lineNumber: 2590,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                            lineNumber: 2589,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, idx, true, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                                    lineNumber: 2524,
                                                                    columnNumber: 23
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                            lineNumber: 2520,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                    lineNumber: 2510,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 2509,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 2502,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-[var(--gray-100)] p-4 space-y-2",
                                        style: {
                                            background: "var(--gray-50)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-[12px] font-bold",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: "var(--gray-700)"
                                                        },
                                                        children: "Previous Balance"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 2612,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono",
                                                        style: {
                                                            color: previousBalance > 0 ? "var(--red)" : "var(--gray-500)"
                                                        },
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(previousBalance)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 2613,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 2611,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-[12px] font-bold",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: "var(--gray-700)"
                                                        },
                                                        children: "Current Bill"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 2616,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono",
                                                        style: {
                                                            color: "var(--blue-deeper)"
                                                        },
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(grandTotal)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 2617,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 2615,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-[12px] font-bold",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: "var(--gray-700)"
                                                        },
                                                        children: "Payment"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 2620,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono",
                                                        style: {
                                                            color: "var(--green)"
                                                        },
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(paidPreview)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 2621,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 2619,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-[12px] font-bold",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: "var(--gray-700)"
                                                        },
                                                        children: "Remaining"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 2624,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono",
                                                        style: {
                                                            color: totalRemaining > 0 ? "var(--red)" : "var(--green)"
                                                        },
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(totalRemaining)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                        lineNumber: 2625,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                                lineNumber: 2623,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 2607,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                lineNumber: 2423,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end gap-2 px-5 py-4 border-t border-[var(--gray-100)] bg-[var(--gray-50)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            if (!saving) onClose();
                                        },
                                        disabled: saving,
                                        className: "px-5 py-2.5 rounded-[9px] border border-[var(--gray-200)] text-[12px] font-bold cursor-pointer bg-white",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 2633,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: onSave,
                                        disabled: saving || grandTotal <= 0,
                                        className: "px-5 py-2.5 rounded-[9px] border-none text-[12px] font-bold cursor-pointer text-white disabled:opacity-45",
                                        style: {
                                            background: "linear-gradient(135deg, var(--blue-deeper), var(--blue))"
                                        },
                                        children: saving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            size: 16,
                                            className: "animate-spin inline"
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                            lineNumber: 2648,
                                            columnNumber: 23
                                        }, this) : isEdit ? "Update purchase order" : "Save purchase order"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                        lineNumber: 2641,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                                lineNumber: 2632,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                        lineNumber: 2378,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                lineNumber: 2376,
                columnNumber: 5
            }, this),
            productCreate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$PurchaseProductCreateModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PurchaseProductCreateModal"], {
                initialName: productCreate.initialName,
                existingProducts: products,
                onClose: ()=>setProductCreate(null),
                onCreated: handleProductCreated
            }, void 0, false, {
                fileName: "[project]/Star-Panaflex/app/(dashboard)/supplier/page.tsx",
                lineNumber: 2655,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s1(PoModal, "3kDkSOgSIZx84SV0n4ddZWesUEk=");
_c1 = PoModal;
var _c, _c1;
__turbopack_context__.k.register(_c, "SupplierPage");
__turbopack_context__.k.register(_c1, "PoModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Star-Panaflex_11pj1c7._.js.map