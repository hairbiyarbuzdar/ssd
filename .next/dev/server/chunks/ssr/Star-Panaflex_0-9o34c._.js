module.exports = [
"[project]/Star-Panaflex/lib/dataTableStyles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/Star-Panaflex/components/PrintHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrintHeader",
    ()=>PrintHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function PrintHeader({ style } = {}) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%",
            marginBottom: 8,
            ...style
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
}),
"[project]/Star-Panaflex/components/PdfPrintBanner.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PdfPrintBanner",
    ()=>PdfPrintBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$PrintHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/components/PrintHeader.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function PdfPrintBanner({ subtitle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        style: {
            marginBottom: 10
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$PrintHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PrintHeader"], {}, void 0, false, {
                fileName: "[project]/Star-Panaflex/components/PdfPrintBanner.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 4,
                    fontSize: 11,
                    color: "#000",
                    fontWeight: 600,
                    textAlign: "center"
                },
                children: subtitle
            }, void 0, false, {
                fileName: "[project]/Star-Panaflex/components/PdfPrintBanner.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Star-Panaflex/components/PdfPrintBanner.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/Star-Panaflex/components/PrintFooter.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrintFooter",
    ()=>PrintFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function PrintFooter({ style } = {}) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%",
            marginTop: 12,
            ...style
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}),
"[project]/Star-Panaflex/components/SearchableSelect.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchableSelect",
    ()=>SearchableSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function SearchableSelect({ value, onChange, options, placeholder = "— Select —", emptyValue = "", inputClassName = "", inputStyle, onCreate, createLabel = "+ Add" }) {
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [highlight, setHighlight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [dropdownStyle, setDropdownStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const selectedLabel = options.find((o)=>o.value === value)?.label ?? "";
    const isEmpty = value === emptyValue || value === "";
    const trimmedQuery = query.trim();
    const filtered = trimmedQuery ? options.filter((o)=>o.label.toLowerCase().includes(trimmedQuery.toLowerCase())) : options;
    const hasExactMatch = trimmedQuery ? options.some((o)=>o.label.toLowerCase() === trimmedQuery.toLowerCase() || o.value.toLowerCase() === trimmedQuery.toLowerCase()) : false;
    const showCreateRow = !!onCreate && trimmedQuery.length > 0 && !hasExactMatch;
    const positionDropdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
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
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!open) return;
        positionDropdown();
        window.addEventListener("scroll", positionDropdown, true);
        window.addEventListener("resize", positionDropdown);
        return ()=>{
            window.removeEventListener("scroll", positionDropdown, true);
            window.removeEventListener("resize", positionDropdown);
        };
    }, [
        open,
        positionDropdown
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!open) return;
        function onOutside(e) {
            if (inputRef.current?.contains(e.target) || dropdownRef.current?.contains(e.target)) return;
            setOpen(false);
            setQuery("");
        }
        document.addEventListener("mousedown", onOutside);
        return ()=>document.removeEventListener("mousedown", onOutside);
    }, [
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
    const dropdown = open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    showCreateRow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    filtered.map((o, i)=>{
                        const isHighlighted = i === Math.min(highlight, filtered.length - 1);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    showCreateRow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
            ("TURBOPACK compile-time falsy", 0) ? /*#__PURE__*/ "TURBOPACK unreachable" : null
        ]
    }, void 0, true, {
        fileName: "[project]/Star-Panaflex/components/SearchableSelect.tsx",
        lineNumber: 245,
        columnNumber: 5
    }, this);
}
}),
"[project]/Star-Panaflex/lib/paymentMethods.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/db.ts [app-ssr] (ecmascript)");
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
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from("payment_methods").select("id, name, opening_balance, archived, sort_order").order("sort_order", {
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
    const [methods, setMethods] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    async function reload() {
        setLoading(true);
        const all = await fetchPaymentMethods();
        setMethods(all.filter((m)=>!m.archived));
        setLoading(false);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        void reload();
    }, []);
    return {
        methods,
        loading,
        reload
    };
}
async function getMethodBalance(methodName) {
    const [{ data: entries }, methods] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from("cashbook").select("type, amount, method, description"),
        fetchPaymentMethods()
    ]);
    const safeEntries = entries ?? [];
    const balances = computeMethodBalances(safeEntries, methods);
    return balances[normalizePaymentMethod(methodName)] ?? 0;
}
}),
"[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReportsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/db.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/helpers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/printer.js [app-ssr] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-ssr] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-ssr] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-ssr] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/receipt.js [app-ssr] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftRight$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/arrow-left-right.js [app-ssr] (ecmascript) <export default as ArrowLeftRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/lucide-react/dist/esm/icons/wallet.js [app-ssr] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/dataTableStyles.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$PdfPrintBanner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/components/PdfPrintBanner.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$PrintFooter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/components/PrintFooter.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$UserContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/UserContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$SearchableSelect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/components/SearchableSelect.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$paymentMethods$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/paymentMethods.ts [app-ssr] (ecmascript)");
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
const STATUS_STYLES = {
    paid: {
        bg: "var(--green-light)",
        color: "var(--green)",
        label: "Paid"
    },
    partial: {
        bg: "var(--orange-light)",
        color: "#B45309",
        label: "Partial"
    },
    unpaid: {
        bg: "var(--red-light)",
        color: "var(--red)",
        label: "Unpaid"
    }
};
function getPresetDates(preset) {
    const today = new Date();
    const y = today.getFullYear();
    const m = today.getMonth();
    switch(preset){
        case "thismonth":
            return {
                from: new Date(y, m, 1).toISOString().split("T")[0],
                to: new Date(y, m + 1, 0).toISOString().split("T")[0]
            };
        case "lastmonth":
            return {
                from: new Date(y, m - 1, 1).toISOString().split("T")[0],
                to: new Date(y, m, 0).toISOString().split("T")[0]
            };
        case "last3":
            return {
                from: new Date(y, m - 2, 1).toISOString().split("T")[0],
                to: today.toISOString().split("T")[0]
            };
        case "last6":
            return {
                from: new Date(y, m - 5, 1).toISOString().split("T")[0],
                to: today.toISOString().split("T")[0]
            };
        case "thisyear":
            return {
                from: new Date(y, 0, 1).toISOString().split("T")[0],
                to: new Date(y, 11, 31).toISOString().split("T")[0]
            };
        default:
            return null;
    }
}
// ── Mini KPI card ──────────────────────────────────────────
function KpiCard({ label, value, color, sub }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-[12px] border border-[var(--gray-100)] px-4 py-3",
        style: {
            boxShadow: "var(--shadow-xs)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[9.5px] font-bold tracking-[1.3px] uppercase mb-1",
                style: {
                    color: "var(--gray-800)"
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[14px] font-extrabold font-mono",
                style: {
                    color
                },
                children: value
            }, void 0, false, {
                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[10px] mt-0.5",
                style: {
                    color: "var(--gray-800)"
                },
                children: sub
            }, void 0, false, {
                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                lineNumber: 52,
                columnNumber: 15
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
const REPORT_CARDS = [
    {
        id: "overview",
        title: "Overview",
        description: "Revenue, collections, balance due, and invoice status for a period.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], {
            size: 22
        }, void 0, false, {
            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
            lineNumber: 58,
            columnNumber: 130
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: "account",
        title: "Account Statement",
        description: "Debit / credit ledger for one party between two dates.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
            size: 22
        }, void 0, false, {
            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
            lineNumber: 59,
            columnNumber: 125
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: "invoices",
        title: "Invoice Report",
        description: "Detailed invoice register with totals for a period.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"], {
            size: 22
        }, void 0, false, {
            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
            lineNumber: 60,
            columnNumber: 120
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: "cashflow",
        title: "Cash Flow",
        description: "Cashbook entries with running balance for a period.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftRight$3e$__["ArrowLeftRight"], {
            size: 22
        }, void 0, false, {
            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
            lineNumber: 61,
            columnNumber: 115
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: "dailycash",
        title: "Daily Cashbook",
        description: "All cash in and out for a single day.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
            size: 22
        }, void 0, false, {
            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
            lineNumber: 62,
            columnNumber: 107
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: "dailyparties",
        title: "Daily Parties",
        description: "Invoices issued on a selected day by party.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
            size: 22
        }, void 0, false, {
            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
            lineNumber: 63,
            columnNumber: 115
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: "paymentmethod",
        title: "Payment Method Report",
        description: "Cashbook transactions filtered by a single payment method.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
            size: 22
        }, void 0, false, {
            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
            lineNumber: 64,
            columnNumber: 139
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: "expense",
        title: "Expense Report",
        description: "All business expenses for a period, with category, method, and totals.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
            size: 22
        }, void 0, false, {
            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
            lineNumber: 65,
            columnNumber: 138
        }, ("TURBOPACK compile-time value", void 0))
    }
];
function ReportTypeCard({ title, description, icon, active, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        className: "text-left w-full rounded-[14px] border p-4 transition-all cursor-pointer flex flex-col gap-2 min-h-[128px]",
        style: {
            borderColor: active ? "var(--blue)" : "var(--gray-100)",
            background: active ? "var(--blue-pale)" : "var(--white)",
            boxShadow: active ? "var(--shadow-sm)" : "var(--shadow-xs)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-11 h-11 rounded-xl flex items-center justify-center shrink-0",
                        style: {
                            background: active ? "var(--blue-light)" : "var(--gray-50)",
                            color: "var(--blue-deeper)"
                        },
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                        size: 18,
                        className: "shrink-0 mt-1",
                        style: {
                            color: active ? "var(--blue-deeper)" : "var(--gray-300)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[13px] font-extrabold mb-1",
                        style: {
                            color: "var(--gray-900)"
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] leading-snug m-0",
                        style: {
                            color: "var(--gray-800)"
                        },
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
function ReportsPage() {
    const userProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$UserContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUser"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [reportGenerated, setReportGenerated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [generateError, setGenerateError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // ── Master filter state ───────────────────────────────────
    const [fromDate, setFromDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        const d = new Date();
        d.setDate(1);
        return d.toISOString().split("T")[0];
    });
    const [toDate, setToDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["todayISO"])());
    const [preset, setPreset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("thismonth");
    const [accountFilter, setAccountFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [methodFilter, setMethodFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const { methods: paymentMethods } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$paymentMethods$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePaymentMethods"])();
    // ── Daily tab date state ──────────────────────────────────
    const [dailyDate, setDailyDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["todayISO"])());
    // ── Data ──────────────────────────────────────────────────
    const [invoices, setInvoices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cashbook, setCashbook] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [accounts, setAccounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [dailyCashbook, setDailyCashbook] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [dailyInvoices, setDailyInvoices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [dailyLoading, setDailyLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [expenseByInvoice, setExpenseByInvoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [expenses, setExpenses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // ── Fetch main data ───────────────────────────────────────
    const fetchData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setLoading(true);
        const invoiceQuery = __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from("invoices").select("*").gte("invoice_date", fromDate).lte("invoice_date", toDate).order("invoice_date", {
            ascending: true
        });
        const cashbookQuery = __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from("cashbook").select("*").gte("date", fromDate).lte("date", toDate).order("date", {
            ascending: true
        }).order("created_at", {
            ascending: true
        });
        const expensesQuery = __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from("expenses").select("invoice_id, amount");
        const expensesPeriodQuery = __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from("expenses").select("*").gte("date", fromDate).lte("date", toDate).order("date", {
            ascending: true
        }).order("created_at", {
            ascending: true
        });
        const [{ data: invData }, { data: cbData }, { data: expData }, { data: expPeriod }] = await Promise.all([
            invoiceQuery,
            cashbookQuery,
            expensesQuery,
            expensesPeriodQuery
        ]);
        if (invData) setInvoices(invData);
        if (cbData) setCashbook(cbData);
        const map = {};
        for (const e of expData ?? []){
            if (e.invoice_id) map[e.invoice_id] = (map[e.invoice_id] ?? 0) + Number(e.amount);
        }
        setExpenseByInvoice(map);
        setExpenses(expPeriod ?? []);
        setLoading(false);
    }, [
        fromDate,
        toDate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from("accounts").select("*").order("name").then(({ data })=>{
            if (data) setAccounts(data);
        });
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setReportGenerated(false);
    }, [
        fromDate,
        toDate,
        accountFilter,
        methodFilter,
        preset,
        dailyDate,
        activeTab
    ]);
    // ── Fetch daily data ──────────────────────────────────────
    const fetchDailyData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setDailyLoading(true);
        const dailyCashbookQuery = __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from("cashbook").select("*").eq("date", dailyDate).order("created_at", {
            ascending: true
        });
        const dailyInvoiceQuery = __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from("invoices").select("*").eq("invoice_date", dailyDate).order("created_at", {
            ascending: true
        });
        const [{ data: cbData }, { data: invData }] = await Promise.all([
            dailyCashbookQuery,
            dailyInvoiceQuery
        ]);
        if (cbData) setDailyCashbook(cbData);
        if (invData) setDailyInvoices(invData);
        setDailyLoading(false);
    }, [
        dailyDate
    ]);
    async function handleGenerateReport() {
        setGenerateError(null);
        if (!activeTab) {
            setGenerateError("Choose a report type from the cards above.");
            return;
        }
        if (activeTab === "account" && accountFilter === "all") {
            setGenerateError("Select an account / party for the account statement.");
            return;
        }
        if (activeTab === "paymentmethod" && methodFilter === "all") {
            setGenerateError("Select a payment method to generate this report.");
            return;
        }
        if (activeTab === "dailycash" || activeTab === "dailyparties") {
            await fetchDailyData();
        } else {
            await fetchData();
        }
        setReportGenerated(true);
    }
    function selectReport(t) {
        setActiveTab(t);
        setGenerateError(null);
    }
    // ── Preset handler ────────────────────────────────────────
    function applyPreset(val) {
        setPreset(val);
        const dates = getPresetDates(val);
        if (dates) {
            setFromDate(dates.from);
            setToDate(dates.to);
        }
    }
    // ── Derived: invoice stats ────────────────────────────────
    const filteredInvoices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>accountFilter === "all" ? invoices : invoices.filter((i)=>i.client_name === accountFilter), [
        invoices,
        accountFilter
    ]);
    // ── Derived: expense report ───────────────────────────────
    const expenseTotal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>expenses.reduce((s, e)=>s + Number(e.amount), 0), [
        expenses
    ]);
    const totalRevenue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>filteredInvoices.reduce((s, i)=>s + Number(i.grand_total), 0), [
        filteredInvoices
    ]);
    const totalCollected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>filteredInvoices.reduce((s, i)=>s + Number(i.amount_received), 0), [
        filteredInvoices
    ]);
    const totalDue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>filteredInvoices.reduce((s, i)=>s + Number(i.balance_due), 0), [
        filteredInvoices
    ]);
    // ── Derived: cashbook stats ───────────────────────────────
    const totalCashIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>cashbook.filter((c)=>c.type === "in").reduce((s, c)=>s + Number(c.amount), 0), [
        cashbook
    ]);
    const totalCashOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>cashbook.filter((c)=>c.type === "out").reduce((s, c)=>s + Number(c.amount), 0), [
        cashbook
    ]);
    // ── Derived: account statement ────────────────────────────
    const accStatementRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (accountFilter === "all") return [];
        const rows = [];
        invoices.filter((i)=>i.client_name === accountFilter).forEach((i)=>{
            rows.push({
                date: i.invoice_date,
                doc: i.invoice_number,
                desc: `Invoice — ${i.job_name || i.client_name}`,
                debit: Number(i.grand_total),
                credit: 0,
                method: i.payment_method || "—"
            });
            if (Number(i.amount_received) > 0) {
                rows.push({
                    date: i.invoice_date,
                    doc: i.invoice_number,
                    desc: `Payment Received`,
                    debit: 0,
                    credit: Number(i.amount_received),
                    method: i.payment_method || "—"
                });
            }
        });
        rows.sort((a, b)=>a.date.localeCompare(b.date));
        return rows;
    }, [
        invoices,
        accountFilter
    ]);
    const accStatementWithBal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let bal = 0;
        return accStatementRows.map((r)=>{
            bal += r.debit - r.credit;
            return {
                ...r,
                balance: bal
            };
        });
    }, [
        accStatementRows
    ]);
    // ── Derived: cashbook with running balance ────────────────
    const cashbookWithBal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return cashbook.reduce((acc, c)=>{
            const prev = acc.length > 0 ? acc[acc.length - 1].runningBal : 0;
            const nextBal = prev + (c.type === "in" ? Number(c.amount) : -Number(c.amount));
            acc.push({
                ...c,
                runningBal: nextBal
            });
            return acc;
        }, []);
    }, [
        cashbook
    ]);
    // ── Derived: daily cashbook running bal ───────────────────
    const dailyCashWithBal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return dailyCashbook.reduce((acc, c)=>{
            const prev = acc.length > 0 ? acc[acc.length - 1].runningBal : 0;
            const nextBal = prev + (c.type === "in" ? Number(c.amount) : -Number(c.amount));
            acc.push({
                ...c,
                runningBal: nextBal
            });
            return acc;
        }, []);
    }, [
        dailyCashbook
    ]);
    // ── Derived: payment-method filtered cashbook ─────────────
    const methodCashbook = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (methodFilter === "all") return [];
        return cashbook.filter((c)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$paymentMethods$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizePaymentMethod"])(c.method) === methodFilter);
    }, [
        cashbook,
        methodFilter
    ]);
    const methodOpeningBalance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (methodFilter === "all") return 0;
        const m = paymentMethods.find((pm)=>pm.name === methodFilter);
        return m ? Number(m.opening_balance) : 0;
    }, [
        paymentMethods,
        methodFilter
    ]);
    const methodCashbookWithBal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return methodCashbook.reduce((acc, c)=>{
            const prev = acc.length > 0 ? acc[acc.length - 1].runningBal : methodOpeningBalance;
            const nextBal = prev + (c.type === "in" ? Number(c.amount) : -Number(c.amount));
            acc.push({
                ...c,
                runningBal: nextBal
            });
            return acc;
        }, []);
    }, [
        methodCashbook,
        methodOpeningBalance
    ]);
    const methodCashIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>methodCashbook.filter((c)=>c.type === "in").reduce((s, c)=>s + Number(c.amount), 0), [
        methodCashbook
    ]);
    const methodCashOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>methodCashbook.filter((c)=>c.type === "out").reduce((s, c)=>s + Number(c.amount), 0), [
        methodCashbook
    ]);
    // ── Filter label ──────────────────────────────────────────
    const filterLabel = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(fromDate)} — ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(toDate)}${accountFilter !== "all" ? ` · ${accountFilter}` : ""}${activeTab === "paymentmethod" && methodFilter !== "all" ? ` · ${methodFilter}` : ""}`;
    // ──────────────────────────────────────────────────────────
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "no-print animate-fade-in",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-extrabold",
                                style: {
                                    color: "var(--gray-900)"
                                },
                                children: "Reports"
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                lineNumber: 321,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs mt-0.5",
                                style: {
                                    color: "var(--gray-800)"
                                },
                                children: "Pick a report, set filters, then generate — no charts, export-friendly tables."
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                lineNumber: 322,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                        lineNumber: 320,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4",
                        children: REPORT_CARDS.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReportTypeCard, {
                                title: card.title,
                                description: card.description,
                                icon: card.icon,
                                active: activeTab === card.id,
                                onClick: ()=>selectReport(card.id)
                            }, card.id, false, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                lineNumber: 328,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                        lineNumber: 326,
                        columnNumber: 9
                    }, this),
                    activeTab && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-[14px] border border-[var(--gray-100)] p-4 mb-4",
                        style: {
                            boxShadow: "var(--shadow-sm)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-start justify-between gap-3 mb-4 pb-3 border-b border-[var(--gray-100)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[9.5px] font-bold tracking-[1.4px] uppercase mb-0.5",
                                                style: {
                                                    color: "var(--gray-800)"
                                                },
                                                children: "Filters"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 344,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[14px] font-extrabold",
                                                style: {
                                                    color: "var(--gray-900)"
                                                },
                                                children: REPORT_CARDS.find((c)=>c.id === activeTab)?.title
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 345,
                                                columnNumber: 17
                                            }, this),
                                            !reportGenerated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] m-0 mt-1",
                                                style: {
                                                    color: "var(--gray-800)"
                                                },
                                                children: "Adjust filters and click Generate to load this report."
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 349,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                        lineNumber: 343,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 shrink-0 flex-wrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>window.print(),
                                                disabled: !activeTab || !reportGenerated,
                                                className: "inline-flex items-center gap-1.5 px-4 py-2.5 rounded-[9px] text-[12.5px] font-semibold border-[1.5px] bg-white cursor-pointer disabled:opacity-45 disabled:cursor-not-allowed",
                                                style: {
                                                    borderColor: "var(--gray-200)",
                                                    color: "var(--blue-deeper)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                        lineNumber: 360,
                                                        columnNumber: 19
                                                    }, this),
                                                    " Print / PDF"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 353,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>void handleGenerateReport(),
                                                disabled: loading || dailyLoading,
                                                className: "inline-flex items-center gap-1.5 px-5 py-2.5 rounded-[9px] text-[12.5px] font-semibold border-none cursor-pointer text-white disabled:opacity-60",
                                                style: {
                                                    background: "linear-gradient(135deg, var(--blue-deeper), var(--blue))",
                                                    boxShadow: "0 2px 10px rgba(220,38,38,.28)"
                                                },
                                                children: loading || dailyLoading ? "Loading…" : "Generate report"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 362,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                        lineNumber: 352,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                lineNumber: 342,
                                columnNumber: 13
                            }, this),
                            generateError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-3 px-3 py-2 rounded-[8px] text-[12px] font-medium",
                                style: {
                                    background: "var(--red-light)",
                                    color: "var(--red)"
                                },
                                children: generateError
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                lineNumber: 375,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-3 items-end",
                                children: [
                                    activeTab === "dailycash" || activeTab === "dailyparties" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-[9.5px] font-bold tracking-[1.2px] uppercase",
                                                style: {
                                                    color: "var(--blue-deeper)"
                                                },
                                                children: "Report date"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 383,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                value: dailyDate,
                                                onChange: (e)=>setDailyDate(e.target.value),
                                                className: "border-[1.5px] rounded-[8px] px-2.5 py-1.5 text-[12.5px] outline-none",
                                                style: {
                                                    borderColor: "var(--gray-200)",
                                                    background: "var(--gray-50)",
                                                    color: "var(--gray-900)"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 384,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                        lineNumber: 382,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            activeTab === "paymentmethod" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-1 min-w-[200px] flex-1 max-w-[280px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[9.5px] font-bold tracking-[1.2px] uppercase",
                                                        style: {
                                                            color: "var(--blue-deeper)"
                                                        },
                                                        children: "Payment method *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                        lineNumber: 396,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$SearchableSelect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SearchableSelect"], {
                                                        value: methodFilter,
                                                        onChange: setMethodFilter,
                                                        options: paymentMethods.map((m)=>({
                                                                value: m.name,
                                                                label: m.name
                                                            })),
                                                        placeholder: "— Select payment method —",
                                                        emptyValue: "all",
                                                        inputClassName: "border-[1.5px] rounded-[8px] px-2.5 py-1.5 text-[12.5px] outline-none w-full",
                                                        inputStyle: {
                                                            borderColor: "var(--gray-200)",
                                                            background: "var(--gray-50)",
                                                            color: "var(--gray-900)"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                        lineNumber: 399,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 395,
                                                columnNumber: 21
                                            }, this) : activeTab === "expense" ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-1 min-w-[200px] flex-1 max-w-[280px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[9.5px] font-bold tracking-[1.2px] uppercase",
                                                        style: {
                                                            color: "var(--blue-deeper)"
                                                        },
                                                        children: [
                                                            "Account / Party",
                                                            activeTab === "account" ? " *" : ""
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                        lineNumber: 411,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$SearchableSelect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SearchableSelect"], {
                                                        value: accountFilter,
                                                        onChange: setAccountFilter,
                                                        options: accounts.map((a)=>({
                                                                value: a.name,
                                                                label: a.name
                                                            })),
                                                        placeholder: activeTab === "account" ? "— Select party —" : "— All parties —",
                                                        emptyValue: "all",
                                                        inputClassName: "border-[1.5px] rounded-[8px] px-2.5 py-1.5 text-[12.5px] outline-none w-full",
                                                        inputStyle: {
                                                            borderColor: "var(--gray-200)",
                                                            background: "var(--gray-50)",
                                                            color: "var(--gray-900)"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                        lineNumber: 414,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 410,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[9.5px] font-bold tracking-[1.2px] uppercase",
                                                        style: {
                                                            color: "var(--blue-deeper)"
                                                        },
                                                        children: "Date from"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                        lineNumber: 426,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        value: fromDate,
                                                        onChange: (e)=>{
                                                            setFromDate(e.target.value);
                                                            setPreset("");
                                                        },
                                                        className: "border-[1.5px] rounded-[8px] px-2.5 py-1.5 text-[12.5px] outline-none",
                                                        style: {
                                                            borderColor: "var(--gray-200)",
                                                            background: "var(--gray-50)",
                                                            color: "var(--gray-900)"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                        lineNumber: 427,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 425,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[9.5px] font-bold tracking-[1.2px] uppercase",
                                                        style: {
                                                            color: "var(--blue-deeper)"
                                                        },
                                                        children: "Date to"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                        lineNumber: 436,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        value: toDate,
                                                        onChange: (e)=>{
                                                            setToDate(e.target.value);
                                                            setPreset("");
                                                        },
                                                        className: "border-[1.5px] rounded-[8px] px-2.5 py-1.5 text-[12.5px] outline-none",
                                                        style: {
                                                            borderColor: "var(--gray-200)",
                                                            background: "var(--gray-50)",
                                                            color: "var(--gray-900)"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                        lineNumber: 437,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 435,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[9.5px] font-bold tracking-[1.2px] uppercase",
                                                        style: {
                                                            color: "var(--blue-deeper)"
                                                        },
                                                        children: "Period preset"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                        lineNumber: 446,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: preset,
                                                        onChange: (e)=>applyPreset(e.target.value),
                                                        className: "border-[1.5px] rounded-[8px] px-2.5 py-1.5 text-[12.5px] outline-none cursor-pointer",
                                                        style: {
                                                            borderColor: "var(--gray-200)",
                                                            background: "var(--gray-50)",
                                                            color: "var(--gray-900)"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "Custom range"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 453,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "thismonth",
                                                                children: "This month"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 454,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "lastmonth",
                                                                children: "Last month"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 455,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "last3",
                                                                children: "Last 3 months"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 456,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "last6",
                                                                children: "Last 6 months"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 457,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "thisyear",
                                                                children: "This year"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 458,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                        lineNumber: 447,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 445,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ml-auto text-[11px] font-medium px-3 py-1.5 rounded-[7px] border self-end",
                                        style: {
                                            color: "var(--gray-800)",
                                            background: "var(--gray-50)",
                                            borderColor: "var(--gray-100)"
                                        },
                                        children: activeTab === "dailycash" || activeTab === "dailyparties" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(dailyDate) : filterLabel
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                        lineNumber: 463,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                lineNumber: 380,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                        lineNumber: 341,
                        columnNumber: 11
                    }, this),
                    !activeTab && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-8 px-4 rounded-[14px] border border-dashed mb-4",
                        style: {
                            borderColor: "var(--gray-200)",
                            color: "var(--gray-800)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[13px] m-0",
                            children: "Select a report card above to open its filters."
                        }, void 0, false, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                            lineNumber: 475,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                        lineNumber: 474,
                        columnNumber: 11
                    }, this),
                    reportGenerated && activeTab === "overview" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-10 text-[13px]",
                            style: {
                                color: "var(--gray-800)"
                            },
                            children: "Loading..."
                        }, void 0, false, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                            lineNumber: 483,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                                            label: "Total Revenue",
                                            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(totalRevenue),
                                            color: "var(--blue-deeper)",
                                            sub: `${filteredInvoices.length} invoices`
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 488,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                                            label: "Total Collected",
                                            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(totalCollected),
                                            color: "var(--green)"
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 489,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                                            label: "Balance Due",
                                            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(totalDue),
                                            color: "var(--red)"
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 490,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                                            label: "Net Cash Flow",
                                            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(totalCashIn - totalCashOut),
                                            color: totalCashIn - totalCashOut >= 0 ? "var(--green)" : "var(--red)",
                                            sub: `In: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(totalCashIn)} / Out: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(totalCashOut)}`
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 491,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                    lineNumber: 487,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4",
                                    children: [
                                        {
                                            label: "Paid Invoices",
                                            count: filteredInvoices.filter((i)=>i.payment_status === "paid").length,
                                            amt: filteredInvoices.filter((i)=>i.payment_status === "paid").reduce((s, i)=>s + Number(i.grand_total), 0),
                                            color: "var(--green)",
                                            bg: "var(--green-light)"
                                        },
                                        {
                                            label: "Partial Invoices",
                                            count: filteredInvoices.filter((i)=>i.payment_status === "partial").length,
                                            amt: filteredInvoices.filter((i)=>i.payment_status === "partial").reduce((s, i)=>s + Number(i.grand_total), 0),
                                            color: "#B45309",
                                            bg: "var(--orange-light)"
                                        },
                                        {
                                            label: "Unpaid Invoices",
                                            count: filteredInvoices.filter((i)=>i.payment_status === "unpaid").length,
                                            amt: filteredInvoices.filter((i)=>i.payment_status === "unpaid").reduce((s, i)=>s + Number(i.grand_total), 0),
                                            color: "var(--red)",
                                            bg: "var(--red-light)"
                                        }
                                    ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-[12px] border border-[var(--gray-100)] px-4 py-3 flex justify-between items-center",
                                            style: {
                                                boxShadow: "var(--shadow-xs)"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[9.5px] font-bold tracking-[1.2px] uppercase mb-1",
                                                            style: {
                                                                color: "var(--gray-800)"
                                                            },
                                                            children: item.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 503,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[18px] font-extrabold",
                                                            style: {
                                                                color: item.color
                                                            },
                                                            children: item.count
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 504,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                    lineNumber: 502,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[10px] font-medium mb-1",
                                                            style: {
                                                                color: "var(--gray-800)"
                                                            },
                                                            children: "Total Amount"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 507,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[12.5px] font-bold font-mono",
                                                            style: {
                                                                color: item.color
                                                            },
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(item.amt)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 508,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                    lineNumber: 506,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, item.label, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 501,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                    lineNumber: 495,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                        lineNumber: 481,
                        columnNumber: 11
                    }, this),
                    reportGenerated && activeTab === "account" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: accountFilter === "all" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-[14px] border border-[var(--gray-100)] py-16 text-center",
                            style: {
                                boxShadow: "var(--shadow-sm)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                    size: 36,
                                    className: "mx-auto mb-3",
                                    style: {
                                        color: "var(--gray-200)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                    lineNumber: 523,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[13px] font-semibold mb-1",
                                    style: {
                                        color: "var(--gray-900)"
                                    },
                                    children: "Select an Account / Party"
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                    lineNumber: 524,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[12px]",
                                    style: {
                                        color: "var(--gray-800)"
                                    },
                                    children: "Choose a party in the filters panel, then generate the report."
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                    lineNumber: 525,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                            lineNumber: 522,
                            columnNumber: 15
                        }, this) : loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-10 text-[13px]",
                            style: {
                                color: "var(--gray-800)"
                            },
                            children: "Loading..."
                        }, void 0, false, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                            lineNumber: 528,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-[14px] border border-[var(--gray-100)] overflow-hidden",
                            style: {
                                boxShadow: "var(--shadow-sm)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-5 py-4 border-b border-[var(--gray-100)] flex flex-wrap items-center justify-between gap-3",
                                    style: {
                                        background: "var(--gray-50)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[13px] font-extrabold",
                                                    style: {
                                                        color: "var(--gray-900)"
                                                    },
                                                    children: accountFilter
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                    lineNumber: 534,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[11px] mt-0.5",
                                                    style: {
                                                        color: "var(--gray-800)"
                                                    },
                                                    children: [
                                                        "Account Statement · ",
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(fromDate),
                                                        " — ",
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(toDate)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                    lineNumber: 535,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 533,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-4 flex-wrap",
                                            children: [
                                                {
                                                    label: "Total Billed",
                                                    val: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(accStatementRows.reduce((s, r)=>s + r.debit, 0)),
                                                    color: "var(--blue-deeper)"
                                                },
                                                {
                                                    label: "Total Received",
                                                    val: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(accStatementRows.reduce((s, r)=>s + r.credit, 0)),
                                                    color: "var(--green)"
                                                },
                                                {
                                                    label: "Closing Balance",
                                                    val: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(accStatementWithBal.at(-1)?.balance ?? 0),
                                                    color: "var(--red)"
                                                }
                                            ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[9px] font-bold uppercase tracking-wider",
                                                            style: {
                                                                color: "var(--gray-800)"
                                                            },
                                                            children: s.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 544,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[13px] font-extrabold font-mono",
                                                            style: {
                                                                color: s.color
                                                            },
                                                            children: s.val
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 545,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, s.label, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                    lineNumber: 543,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 537,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                    lineNumber: 532,
                                    columnNumber: 17
                                }, this),
                                accStatementWithBal.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-14 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                            size: 32,
                                            className: "mx-auto mb-2",
                                            style: {
                                                color: "var(--gray-200)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 553,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[13px] font-medium",
                                            style: {
                                                color: "var(--gray-800)"
                                            },
                                            children: "No transactions found for this party in the selected period."
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 554,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                    lineNumber: 552,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-x-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].table} min-w-[700px]`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        "Date",
                                                        "Document #",
                                                        "Description",
                                                        "Debit",
                                                        "Credit",
                                                        "Balance",
                                                        "Method"
                                                    ].map((h)=>{
                                                        const right = [
                                                            "Debit",
                                                            "Credit",
                                                            "Balance"
                                                        ].includes(h);
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].thDense} ${right ? "text-right" : "text-left"}`,
                                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].thStyle,
                                                            children: h
                                                        }, h, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 564,
                                                            columnNumber: 31
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                    lineNumber: 560,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 559,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: accStatementWithBal.map((r, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].row,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} ${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].cellBody} whitespace-nowrap`,
                                                                style: {
                                                                    color: "var(--gray-900)"
                                                                },
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(r.date)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 572,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-mono text-[11px] font-bold",
                                                                    style: {
                                                                        color: "var(--blue-deeper)"
                                                                    },
                                                                    children: r.doc
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                    lineNumber: 574,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 573,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} ${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].cellBody}`,
                                                                style: {
                                                                    color: "var(--gray-700)"
                                                                },
                                                                children: r.desc
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 576,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right font-bold text-[15px]`,
                                                                style: {
                                                                    color: r.debit > 0 ? "var(--blue-deeper)" : "var(--gray-300)"
                                                                },
                                                                children: r.debit > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(r.debit) : "—"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 577,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right font-bold text-[15px]`,
                                                                style: {
                                                                    color: r.credit > 0 ? "var(--green)" : "var(--gray-300)"
                                                                },
                                                                children: r.credit > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(r.credit) : "—"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 580,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right font-extrabold text-[15px]`,
                                                                style: {
                                                                    color: r.balance > 0 ? "var(--red)" : "var(--green)"
                                                                },
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(Math.abs(r.balance))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 583,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "px-2 py-0.5 rounded-full text-[10.5px] font-semibold",
                                                                    style: {
                                                                        background: "var(--gray-100)",
                                                                        color: "var(--gray-900)"
                                                                    },
                                                                    children: r.method
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                    lineNumber: 587,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 586,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                        lineNumber: 571,
                                                        columnNumber: 27
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 569,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    style: {
                                                        background: "var(--gray-50)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            colSpan: 3,
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} text-[13.5px] font-bold border-t-2 border-[var(--gray-200)]`,
                                                            style: {
                                                                color: "var(--gray-700)"
                                                            },
                                                            children: "Closing Balance"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 594,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right text-[15px] font-extrabold border-t-2 border-[var(--gray-200)]`,
                                                            style: {
                                                                color: "var(--blue-deeper)"
                                                            },
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(accStatementRows.reduce((s, r)=>s + r.debit, 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 597,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right text-[15px] font-extrabold border-t-2 border-[var(--gray-200)]`,
                                                            style: {
                                                                color: "var(--green)"
                                                            },
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(accStatementRows.reduce((s, r)=>s + r.credit, 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 600,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right text-[15px] font-extrabold border-t-2 border-[var(--gray-200)]`,
                                                            style: {
                                                                color: (accStatementWithBal.at(-1)?.balance ?? 0) > 0 ? "var(--red)" : "var(--green)"
                                                            },
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(Math.abs(accStatementWithBal.at(-1)?.balance ?? 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 603,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} border-t-2 border-[var(--gray-200)]`
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 607,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                    lineNumber: 593,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 592,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                        lineNumber: 558,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                    lineNumber: 557,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                            lineNumber: 530,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                        lineNumber: 520,
                        columnNumber: 11
                    }, this),
                    reportGenerated && activeTab === "invoices" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-4",
                                children: [
                                    {
                                        label: "Total Invoices",
                                        val: String(filteredInvoices.length),
                                        color: "var(--blue-deeper)"
                                    },
                                    {
                                        label: "Total Amount",
                                        val: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(totalRevenue),
                                        color: "var(--gray-900)"
                                    },
                                    {
                                        label: "Received",
                                        val: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(totalCollected),
                                        color: "var(--green)"
                                    },
                                    {
                                        label: "Balance Due",
                                        val: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(totalDue),
                                        color: "var(--red)"
                                    },
                                    {
                                        label: "Paid",
                                        val: String(filteredInvoices.filter((i)=>i.payment_status === "paid").length),
                                        color: "var(--green)"
                                    },
                                    {
                                        label: "Unpaid / Partial",
                                        val: `${filteredInvoices.filter((i)=>i.payment_status === "unpaid").length} / ${filteredInvoices.filter((i)=>i.payment_status === "partial").length}`,
                                        color: "var(--red)"
                                    }
                                ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-[12px] border border-[var(--gray-100)] px-4 py-3",
                                        style: {
                                            boxShadow: "var(--shadow-xs)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] font-bold tracking-wider uppercase mb-1",
                                                style: {
                                                    color: "var(--gray-800)"
                                                },
                                                children: c.label
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 632,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[14px] font-extrabold font-mono",
                                                style: {
                                                    color: c.color
                                                },
                                                children: c.val
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 633,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, c.label, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                        lineNumber: 631,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                lineNumber: 622,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-[14px] border border-[var(--gray-100)] overflow-hidden",
                                style: {
                                    boxShadow: "var(--shadow-sm)"
                                },
                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-10 text-[13px]",
                                    style: {
                                        color: "var(--gray-800)"
                                    },
                                    children: "Loading..."
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                    lineNumber: 640,
                                    columnNumber: 17
                                }, this) : filteredInvoices.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-14 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                            size: 32,
                                            className: "mx-auto mb-2",
                                            style: {
                                                color: "var(--gray-200)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 643,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[13px] font-medium",
                                            style: {
                                                color: "var(--gray-800)"
                                            },
                                            children: "No invoices found for this period."
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 644,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                    lineNumber: 642,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-x-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].table} min-w-[900px]`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        "#",
                                                        "Invoice No",
                                                        "Date",
                                                        "Client",
                                                        "Subtotal",
                                                        "Discount",
                                                        "Grand Total",
                                                        "Received",
                                                        "Balance Due",
                                                        "Expense",
                                                        "Profit",
                                                        "Status"
                                                    ].map((h)=>{
                                                        const right = [
                                                            "Subtotal",
                                                            "Discount",
                                                            "Grand Total",
                                                            "Received",
                                                            "Balance Due",
                                                            "Expense",
                                                            "Profit"
                                                        ].includes(h);
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].thDense} ${right ? "text-right" : "text-left"} whitespace-nowrap`,
                                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].thStyle,
                                                            children: h
                                                        }, h, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 654,
                                                            columnNumber: 29
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                    lineNumber: 650,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 649,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: filteredInvoices.map((inv, idx)=>{
                                                    const st = STATUS_STYLES[inv.payment_status] || STATUS_STYLES.unpaid;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].row,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} ${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].cellBody}`,
                                                                style: {
                                                                    color: "var(--gray-800)"
                                                                },
                                                                children: idx + 1
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 666,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-mono text-[11px] font-extrabold",
                                                                    style: {
                                                                        color: "var(--blue-deeper)"
                                                                    },
                                                                    children: inv.invoice_number
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                    lineNumber: 668,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 667,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} ${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].cellBody} whitespace-nowrap`,
                                                                style: {
                                                                    color: "var(--gray-900)"
                                                                },
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(inv.invoice_date)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 670,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].cellPrimary,
                                                                        style: {
                                                                            color: "var(--gray-900)"
                                                                        },
                                                                        children: inv.client_name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                        lineNumber: 674,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    inv.client_phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].cellBody} mt-0.5`,
                                                                        style: {
                                                                            color: "var(--gray-800)"
                                                                        },
                                                                        children: inv.client_phone
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                        lineNumber: 675,
                                                                        columnNumber: 52
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 673,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right text-[13.5px] font-semibold`,
                                                                style: {
                                                                    color: "var(--gray-700)"
                                                                },
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(inv.subtotal)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 677,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right text-[13.5px] font-semibold`,
                                                                style: {
                                                                    color: "var(--red)"
                                                                },
                                                                children: inv.discount_amount > 0 ? `− ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(inv.discount_amount)}` : "—"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 678,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right font-bold text-[15px]`,
                                                                style: {
                                                                    color: "var(--gray-900)"
                                                                },
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(inv.grand_total)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 681,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right font-bold text-[15px]`,
                                                                style: {
                                                                    color: "var(--green)"
                                                                },
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(inv.amount_received)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 682,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right font-bold text-[15px]`,
                                                                style: {
                                                                    color: inv.balance_due > 0 ? "var(--red)" : "var(--green)"
                                                                },
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(inv.balance_due)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 683,
                                                                columnNumber: 29
                                                            }, this),
                                                            (()=>{
                                                                const exp = expenseByInvoice[inv.id] ?? 0;
                                                                const profit = Number(inv.grand_total) - exp;
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right font-bold text-[15px]`,
                                                                            style: {
                                                                                color: exp > 0 ? "var(--red)" : "var(--gray-300)"
                                                                            },
                                                                            children: exp > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(exp) : "—"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                            lineNumber: 692,
                                                                            columnNumber: 35
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right font-extrabold text-[15px]`,
                                                                            style: {
                                                                                color: profit >= 0 ? "var(--green)" : "var(--red)"
                                                                            },
                                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(profit)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                            lineNumber: 695,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true);
                                                            })(),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].badge,
                                                                    style: {
                                                                        background: st.bg,
                                                                        color: st.color
                                                                    },
                                                                    children: st.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                    lineNumber: 702,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 701,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, inv.id, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                        lineNumber: 665,
                                                        columnNumber: 27
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 661,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    style: {
                                                        background: "var(--gray-50)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            colSpan: 4,
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} text-[13.5px] font-bold border-t-2 border-[var(--gray-200)]`,
                                                            style: {
                                                                color: "var(--gray-700)"
                                                            },
                                                            children: [
                                                                "Total (",
                                                                filteredInvoices.length,
                                                                " invoices)"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 710,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right text-[13.5px] font-extrabold border-t-2 border-[var(--gray-200)]`,
                                                            style: {
                                                                color: "var(--gray-900)"
                                                            },
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(filteredInvoices.reduce((s, i)=>s + Number(i.subtotal), 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 713,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right text-[13.5px] font-bold border-t-2 border-[var(--gray-200)]`,
                                                            style: {
                                                                color: "var(--red)"
                                                            },
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(filteredInvoices.reduce((s, i)=>s + Number(i.discount_amount), 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 716,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right text-[15px] font-extrabold border-t-2 border-[var(--gray-200)]`,
                                                            style: {
                                                                color: "var(--gray-900)"
                                                            },
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(totalRevenue)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 719,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right text-[15px] font-extrabold border-t-2 border-[var(--gray-200)]`,
                                                            style: {
                                                                color: "var(--green)"
                                                            },
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(totalCollected)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 720,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right text-[15px] font-extrabold border-t-2 border-[var(--gray-200)]`,
                                                            style: {
                                                                color: "var(--red)"
                                                            },
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(totalDue)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 721,
                                                            columnNumber: 25
                                                        }, this),
                                                        (()=>{
                                                            const expTotal = filteredInvoices.reduce((s, i)=>s + (expenseByInvoice[i.id] ?? 0), 0);
                                                            const profitTotal = totalRevenue - expTotal;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right text-[15px] font-extrabold border-t-2 border-[var(--gray-200)]`,
                                                                        style: {
                                                                            color: "var(--red)"
                                                                        },
                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(expTotal)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                        lineNumber: 727,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right text-[15px] font-extrabold border-t-2 border-[var(--gray-200)]`,
                                                                        style: {
                                                                            color: profitTotal >= 0 ? "var(--green)" : "var(--red)"
                                                                        },
                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(profitTotal)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                        lineNumber: 728,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true);
                                                        })(),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} border-t-2 border-[var(--gray-200)]`
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 732,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                    lineNumber: 709,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 708,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                        lineNumber: 648,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                    lineNumber: 647,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                lineNumber: 638,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                        lineNumber: 620,
                        columnNumber: 11
                    }, this),
                    reportGenerated && activeTab === "cashflow" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                                        label: "Total Cash In",
                                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(totalCashIn),
                                        color: "var(--green)",
                                        sub: `${cashbook.filter((c)=>c.type === "in").length} entries`
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                        lineNumber: 747,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                                        label: "Total Cash Out",
                                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(totalCashOut),
                                        color: "var(--red)",
                                        sub: `${cashbook.filter((c)=>c.type === "out").length} entries`
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                        lineNumber: 748,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                                        label: "Net Cash Flow",
                                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(totalCashIn - totalCashOut),
                                        color: totalCashIn - totalCashOut >= 0 ? "var(--green)" : "var(--red)"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                        lineNumber: 749,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                lineNumber: 746,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-[14px] border border-[var(--gray-100)] overflow-hidden",
                                style: {
                                    boxShadow: "var(--shadow-sm)"
                                },
                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-10 text-[13px]",
                                    style: {
                                        color: "var(--gray-800)"
                                    },
                                    children: "Loading..."
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                    lineNumber: 754,
                                    columnNumber: 17
                                }, this) : cashbook.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-14 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                            size: 32,
                                            className: "mx-auto mb-2",
                                            style: {
                                                color: "var(--gray-200)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 757,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[13px] font-medium",
                                            style: {
                                                color: "var(--gray-800)"
                                            },
                                            children: "No cashbook entries for this period."
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 758,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                    lineNumber: 756,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-x-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].table} min-w-[750px]`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        "#",
                                                        "Date",
                                                        "Description",
                                                        "Invoice # / Ref",
                                                        "Method",
                                                        "Cash In",
                                                        "Cash Out",
                                                        "Running Balance"
                                                    ].map((h)=>{
                                                        const right = [
                                                            "Cash In",
                                                            "Cash Out",
                                                            "Running Balance"
                                                        ].includes(h);
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].thDense} ${right ? "text-right" : "text-left"}`,
                                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].thStyle,
                                                            children: h
                                                        }, h, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 768,
                                                            columnNumber: 29
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                    lineNumber: 764,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 763,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: cashbookWithBal.map((entry, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].row,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} ${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].cellBody}`,
                                                                style: {
                                                                    color: "var(--gray-800)"
                                                                },
                                                                children: idx + 1
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 778,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} ${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].cellBody} whitespace-nowrap`,
                                                                style: {
                                                                    color: "var(--gray-900)"
                                                                },
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(entry.date)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 779,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-1.5 h-1.5 rounded-full flex-shrink-0",
                                                                            style: {
                                                                                background: entry.type === "in" ? "var(--green)" : "var(--red)"
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                            lineNumber: 782,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].cellPrimary,
                                                                            style: {
                                                                                color: "var(--gray-900)"
                                                                            },
                                                                            children: entry.description
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                            lineNumber: 783,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                    lineNumber: 781,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 780,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} ${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].cellBody}`,
                                                                style: {
                                                                    color: "var(--gray-800)"
                                                                },
                                                                children: entry.reference || "—"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 786,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} ${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].cellBody}`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "px-2 py-0.5 rounded-full text-[10.5px] font-semibold",
                                                                    style: {
                                                                        background: "var(--gray-100)",
                                                                        color: "var(--gray-900)"
                                                                    },
                                                                    children: entry.method || "—"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                    lineNumber: 788,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 787,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right font-bold text-[15px]`,
                                                                style: {
                                                                    color: entry.type === "in" ? "var(--green)" : "var(--gray-200)"
                                                                },
                                                                children: entry.type === "in" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(entry.amount) : "—"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 790,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right font-bold text-[15px]`,
                                                                style: {
                                                                    color: entry.type === "out" ? "var(--red)" : "var(--gray-200)"
                                                                },
                                                                children: entry.type === "out" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(entry.amount) : "—"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 793,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right font-extrabold text-[15px]`,
                                                                style: {
                                                                    color: entry.runningBal >= 0 ? "var(--green)" : "var(--red)"
                                                                },
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(Math.abs(entry.runningBal))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 796,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, entry.id, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                        lineNumber: 777,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 775,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    style: {
                                                        background: "var(--gray-50)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            colSpan: 5,
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} text-[13.5px] font-bold border-t-2 border-[var(--gray-200)]`,
                                                            style: {
                                                                color: "var(--gray-700)"
                                                            },
                                                            children: [
                                                                "Total (",
                                                                cashbook.length,
                                                                " entries)"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 805,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right text-[15px] font-extrabold border-t-2 border-[var(--gray-200)]`,
                                                            style: {
                                                                color: "var(--green)"
                                                            },
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(totalCashIn)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 808,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right text-[15px] font-extrabold border-t-2 border-[var(--gray-200)]`,
                                                            style: {
                                                                color: "var(--red)"
                                                            },
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(totalCashOut)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 809,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right text-[15px] font-extrabold border-t-2 border-[var(--gray-200)]`,
                                                            style: {
                                                                color: cashbookWithBal.at(-1)?.runningBal ?? 0 >= 0 ? "var(--green)" : "var(--red)"
                                                            },
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(Math.abs(cashbookWithBal.at(-1)?.runningBal ?? 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 810,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                    lineNumber: 804,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 803,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                        lineNumber: 762,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                    lineNumber: 761,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                lineNumber: 752,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                        lineNumber: 744,
                        columnNumber: 11
                    }, this),
                    reportGenerated && activeTab === "dailycash" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                                        label: "Cash In",
                                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(dailyCashbook.filter((c)=>c.type === "in").reduce((s, c)=>s + Number(c.amount), 0)),
                                        color: "var(--green)",
                                        sub: `${dailyCashbook.filter((c)=>c.type === "in").length} entries`
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                        lineNumber: 828,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                                        label: "Cash Out",
                                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(dailyCashbook.filter((c)=>c.type === "out").reduce((s, c)=>s + Number(c.amount), 0)),
                                        color: "var(--red)",
                                        sub: `${dailyCashbook.filter((c)=>c.type === "out").length} entries`
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                        lineNumber: 834,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                                        label: "Net for Day",
                                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(dailyCashbook.filter((c)=>c.type === "in").reduce((s, c)=>s + Number(c.amount), 0) - dailyCashbook.filter((c)=>c.type === "out").reduce((s, c)=>s + Number(c.amount), 0)),
                                        color: dailyCashbook.filter((c)=>c.type === "in").reduce((s, c)=>s + Number(c.amount), 0) >= dailyCashbook.filter((c)=>c.type === "out").reduce((s, c)=>s + Number(c.amount), 0) ? "var(--green)" : "var(--red)"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                        lineNumber: 840,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                lineNumber: 827,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-[14px] border border-[var(--gray-100)] overflow-hidden",
                                style: {
                                    boxShadow: "var(--shadow-sm)"
                                },
                                children: dailyLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-10 text-[13px]",
                                    style: {
                                        color: "var(--gray-800)"
                                    },
                                    children: "Loading..."
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                    lineNumber: 856,
                                    columnNumber: 17
                                }, this) : dailyCashWithBal.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-14 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                                            size: 32,
                                            className: "mx-auto mb-2",
                                            style: {
                                                color: "var(--gray-200)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 859,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[13px] font-medium",
                                            style: {
                                                color: "var(--gray-800)"
                                            },
                                            children: [
                                                "No cashbook entries for ",
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(dailyDate),
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 860,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                    lineNumber: 858,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-x-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].table} min-w-[650px]`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        "#",
                                                        "Description",
                                                        "Invoice # / Ref",
                                                        "Method",
                                                        "Cash In",
                                                        "Cash Out",
                                                        "Running Balance"
                                                    ].map((h)=>{
                                                        const right = [
                                                            "Cash In",
                                                            "Cash Out",
                                                            "Running Balance"
                                                        ].includes(h);
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].thDense} ${right ? "text-right" : "text-left"}`,
                                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].thStyle,
                                                            children: h
                                                        }, h, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 870,
                                                            columnNumber: 29
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                    lineNumber: 866,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 865,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: dailyCashWithBal.map((entry, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].row,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} ${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].cellBody}`,
                                                                style: {
                                                                    color: "var(--gray-800)"
                                                                },
                                                                children: idx + 1
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 880,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-1.5 h-1.5 rounded-full flex-shrink-0",
                                                                            style: {
                                                                                background: entry.type === "in" ? "var(--green)" : "var(--red)"
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                            lineNumber: 883,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].cellPrimary,
                                                                            style: {
                                                                                color: "var(--gray-900)"
                                                                            },
                                                                            children: entry.description
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                            lineNumber: 884,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                    lineNumber: 882,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 881,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} ${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].cellBody}`,
                                                                style: {
                                                                    color: "var(--gray-800)"
                                                                },
                                                                children: entry.reference || "—"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 887,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} ${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].cellBody}`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "px-2 py-0.5 rounded-full text-[10.5px] font-semibold",
                                                                    style: {
                                                                        background: "var(--gray-100)",
                                                                        color: "var(--gray-900)"
                                                                    },
                                                                    children: entry.method || "—"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                    lineNumber: 889,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 888,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right font-bold text-[15px]`,
                                                                style: {
                                                                    color: entry.type === "in" ? "var(--green)" : "var(--gray-200)"
                                                                },
                                                                children: entry.type === "in" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(entry.amount) : "—"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 891,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right font-bold text-[15px]`,
                                                                style: {
                                                                    color: entry.type === "out" ? "var(--red)" : "var(--gray-200)"
                                                                },
                                                                children: entry.type === "out" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(entry.amount) : "—"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 894,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right font-extrabold text-[15px]`,
                                                                style: {
                                                                    color: entry.runningBal >= 0 ? "var(--green)" : "var(--red)"
                                                                },
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(Math.abs(entry.runningBal))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 897,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, entry.id, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                        lineNumber: 879,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 877,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    style: {
                                                        background: "var(--gray-50)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            colSpan: 4,
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} text-[13.5px] font-bold border-t-2 border-[var(--gray-200)]`,
                                                            style: {
                                                                color: "var(--gray-700)"
                                                            },
                                                            children: [
                                                                "Day Total (",
                                                                dailyCashWithBal.length,
                                                                " entries)"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 906,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right text-[15px] font-extrabold border-t-2 border-[var(--gray-200)]`,
                                                            style: {
                                                                color: "var(--green)"
                                                            },
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(dailyCashbook.filter((c)=>c.type === "in").reduce((s, c)=>s + Number(c.amount), 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 909,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right text-[15px] font-extrabold border-t-2 border-[var(--gray-200)]`,
                                                            style: {
                                                                color: "var(--red)"
                                                            },
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(dailyCashbook.filter((c)=>c.type === "out").reduce((s, c)=>s + Number(c.amount), 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 912,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right text-[15px] font-extrabold border-t-2 border-[var(--gray-200)]`,
                                                            style: {
                                                                color: (dailyCashWithBal.at(-1)?.runningBal ?? 0) >= 0 ? "var(--green)" : "var(--red)"
                                                            },
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(Math.abs(dailyCashWithBal.at(-1)?.runningBal ?? 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 915,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                    lineNumber: 905,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 904,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                        lineNumber: 864,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                    lineNumber: 863,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                lineNumber: 854,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                        lineNumber: 825,
                        columnNumber: 11
                    }, this),
                    reportGenerated && activeTab === "dailyparties" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                                        label: "Invoices Today",
                                        value: String(dailyInvoices.length),
                                        color: "var(--blue-deeper)"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                        lineNumber: 933,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                                        label: "Total Billed",
                                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(dailyInvoices.reduce((s, i)=>s + Number(i.grand_total), 0)),
                                        color: "var(--gray-900)"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                        lineNumber: 934,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                                        label: "Collected",
                                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(dailyInvoices.reduce((s, i)=>s + Number(i.amount_received), 0)),
                                        color: "var(--green)"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                        lineNumber: 935,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                                        label: "Balance Due",
                                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(dailyInvoices.reduce((s, i)=>s + Number(i.balance_due), 0)),
                                        color: "var(--red)"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                        lineNumber: 936,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                lineNumber: 932,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-[14px] border border-[var(--gray-100)] overflow-hidden",
                                style: {
                                    boxShadow: "var(--shadow-sm)"
                                },
                                children: dailyLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-10 text-[13px]",
                                    style: {
                                        color: "var(--gray-800)"
                                    },
                                    children: "Loading..."
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                    lineNumber: 941,
                                    columnNumber: 17
                                }, this) : dailyInvoices.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-14 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                            size: 32,
                                            className: "mx-auto mb-2",
                                            style: {
                                                color: "var(--gray-200)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 944,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[13px] font-medium",
                                            style: {
                                                color: "var(--gray-800)"
                                            },
                                            children: [
                                                "No invoices for ",
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(dailyDate),
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 945,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                    lineNumber: 943,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-x-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].table} min-w-[750px]`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        "#",
                                                        "Invoice No",
                                                        "Party Name",
                                                        "Job / Description",
                                                        "Invoice Amount",
                                                        "Received",
                                                        "Balance",
                                                        "Status"
                                                    ].map((h)=>{
                                                        const right = [
                                                            "Invoice Amount",
                                                            "Received",
                                                            "Balance"
                                                        ].includes(h);
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].thDense} ${right ? "text-right" : "text-left"}`,
                                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].thStyle,
                                                            children: h
                                                        }, h, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 955,
                                                            columnNumber: 29
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                    lineNumber: 951,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 950,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: dailyInvoices.map((inv, idx)=>{
                                                    const st = STATUS_STYLES[inv.payment_status] || STATUS_STYLES.unpaid;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].row,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} ${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].cellBody}`,
                                                                style: {
                                                                    color: "var(--gray-800)"
                                                                },
                                                                children: idx + 1
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 967,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-mono text-[11px] font-extrabold",
                                                                    style: {
                                                                        color: "var(--blue-deeper)"
                                                                    },
                                                                    children: inv.invoice_number
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                    lineNumber: 969,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 968,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].cellPrimary,
                                                                        style: {
                                                                            color: "var(--gray-900)"
                                                                        },
                                                                        children: inv.client_name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                        lineNumber: 972,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    inv.client_phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].cellBody} mt-0.5`,
                                                                        style: {
                                                                            color: "var(--gray-800)"
                                                                        },
                                                                        children: inv.client_phone
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                        lineNumber: 973,
                                                                        columnNumber: 52
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 971,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].cellBody,
                                                                        style: {
                                                                            color: "var(--gray-700)"
                                                                        },
                                                                        children: inv.job_name || "—"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                        lineNumber: 976,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    inv.job_location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].cellBody} mt-0.5`,
                                                                        style: {
                                                                            color: "var(--gray-800)"
                                                                        },
                                                                        children: inv.job_location
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                        lineNumber: 977,
                                                                        columnNumber: 52
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 975,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right font-bold text-[15px]`,
                                                                style: {
                                                                    color: "var(--gray-900)"
                                                                },
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(inv.grand_total)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 979,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right font-bold text-[15px]`,
                                                                style: {
                                                                    color: "var(--green)"
                                                                },
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(inv.amount_received)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 980,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right font-bold text-[15px]`,
                                                                style: {
                                                                    color: inv.balance_due > 0 ? "var(--red)" : "var(--green)"
                                                                },
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(inv.balance_due)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 981,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].badge,
                                                                    style: {
                                                                        background: st.bg,
                                                                        color: st.color
                                                                    },
                                                                    children: st.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                    lineNumber: 986,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 985,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, inv.id, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                        lineNumber: 966,
                                                        columnNumber: 27
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 962,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    style: {
                                                        background: "var(--gray-50)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            colSpan: 4,
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} text-[13.5px] font-bold border-t-2 border-[var(--gray-200)]`,
                                                            style: {
                                                                color: "var(--gray-700)"
                                                            },
                                                            children: [
                                                                "Day Total (",
                                                                dailyInvoices.length,
                                                                " invoices)"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 994,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right text-[15px] font-extrabold border-t-2 border-[var(--gray-200)]`,
                                                            style: {
                                                                color: "var(--gray-900)"
                                                            },
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(dailyInvoices.reduce((s, i)=>s + Number(i.grand_total), 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 997,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right text-[15px] font-extrabold border-t-2 border-[var(--gray-200)]`,
                                                            style: {
                                                                color: "var(--green)"
                                                            },
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(dailyInvoices.reduce((s, i)=>s + Number(i.amount_received), 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1000,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right text-[15px] font-extrabold border-t-2 border-[var(--gray-200)]`,
                                                            style: {
                                                                color: "var(--red)"
                                                            },
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(dailyInvoices.reduce((s, i)=>s + Number(i.balance_due), 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1003,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} border-t-2 border-[var(--gray-200)]`
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1006,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                    lineNumber: 993,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 992,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                        lineNumber: 949,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                    lineNumber: 948,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                lineNumber: 939,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                        lineNumber: 930,
                        columnNumber: 11
                    }, this),
                    reportGenerated && activeTab === "paymentmethod" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: methodFilter === "all" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-[14px] border border-[var(--gray-100)] py-16 text-center",
                            style: {
                                boxShadow: "var(--shadow-sm)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                    size: 36,
                                    className: "mx-auto mb-3",
                                    style: {
                                        color: "var(--gray-200)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                    lineNumber: 1021,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[13px] font-semibold mb-1",
                                    style: {
                                        color: "var(--gray-900)"
                                    },
                                    children: "Select a Payment Method"
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                    lineNumber: 1022,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[12px]",
                                    style: {
                                        color: "var(--gray-800)"
                                    },
                                    children: "Choose a payment method in the filters panel, then generate the report."
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                    lineNumber: 1023,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                            lineNumber: 1020,
                            columnNumber: 15
                        }, this) : loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-10 text-[13px]",
                            style: {
                                color: "var(--gray-800)"
                            },
                            children: "Loading..."
                        }, void 0, false, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                            lineNumber: 1026,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                                            label: "Opening Balance",
                                            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(methodOpeningBalance),
                                            color: "var(--blue-deeper)",
                                            sub: "Before this period"
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 1030,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                                            label: "Total Cash In",
                                            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(methodCashIn),
                                            color: "var(--green)",
                                            sub: `${methodCashbook.filter((c)=>c.type === "in").length} entries`
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 1031,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                                            label: "Total Cash Out",
                                            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(methodCashOut),
                                            color: "var(--red)",
                                            sub: `${methodCashbook.filter((c)=>c.type === "out").length} entries`
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 1032,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                                            label: "Closing Balance",
                                            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(methodOpeningBalance + methodCashIn - methodCashOut),
                                            color: methodOpeningBalance + methodCashIn - methodCashOut >= 0 ? "var(--green)" : "var(--red)",
                                            sub: methodFilter
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 1033,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                    lineNumber: 1029,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-[14px] border border-[var(--gray-100)] overflow-hidden",
                                    style: {
                                        boxShadow: "var(--shadow-sm)"
                                    },
                                    children: methodCashbookWithBal.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "py-14 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                                size: 32,
                                                className: "mx-auto mb-2",
                                                style: {
                                                    color: "var(--gray-200)"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 1039,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[13px] font-medium",
                                                style: {
                                                    color: "var(--gray-800)"
                                                },
                                                children: [
                                                    "No transactions for ",
                                                    methodFilter,
                                                    " in this period."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 1040,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                        lineNumber: 1038,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overflow-x-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].table} min-w-[750px]`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            "#",
                                                            "Date",
                                                            "Description",
                                                            "Invoice # / Ref",
                                                            "Method",
                                                            "Cash In",
                                                            "Cash Out",
                                                            "Running Balance"
                                                        ].map((h)=>{
                                                            const right = [
                                                                "Cash In",
                                                                "Cash Out",
                                                                "Running Balance"
                                                            ].includes(h);
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].thDense} ${right ? "text-right" : "text-left"}`,
                                                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].thStyle,
                                                                children: h
                                                            }, h, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 1050,
                                                                columnNumber: 33
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                        lineNumber: 1046,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                    lineNumber: 1045,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    children: methodCashbookWithBal.map((entry, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].row,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} ${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].cellBody}`,
                                                                    style: {
                                                                        color: "var(--gray-800)"
                                                                    },
                                                                    children: idx + 1
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                    lineNumber: 1058,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} ${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].cellBody} whitespace-nowrap`,
                                                                    style: {
                                                                        color: "var(--gray-900)"
                                                                    },
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(entry.date)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                    lineNumber: 1059,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-1.5 h-1.5 rounded-full flex-shrink-0",
                                                                                style: {
                                                                                    background: entry.type === "in" ? "var(--green)" : "var(--red)"
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                                lineNumber: 1062,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].cellPrimary,
                                                                                style: {
                                                                                    color: "var(--gray-900)"
                                                                                },
                                                                                children: entry.description
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                                lineNumber: 1063,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                        lineNumber: 1061,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                    lineNumber: 1060,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} ${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].cellBody}`,
                                                                    style: {
                                                                        color: "var(--gray-800)"
                                                                    },
                                                                    children: entry.reference || "—"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                    lineNumber: 1066,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} ${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].cellBody}`,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "px-2 py-0.5 rounded-full text-[10.5px] font-semibold",
                                                                        style: {
                                                                            background: "var(--gray-100)",
                                                                            color: "var(--gray-900)"
                                                                        },
                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$paymentMethods$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizePaymentMethod"])(entry.method)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                        lineNumber: 1068,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                    lineNumber: 1067,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right font-bold text-[15px]`,
                                                                    style: {
                                                                        color: entry.type === "in" ? "var(--green)" : "var(--gray-200)"
                                                                    },
                                                                    children: entry.type === "in" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(entry.amount) : "—"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                    lineNumber: 1070,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right font-bold text-[15px]`,
                                                                    style: {
                                                                        color: entry.type === "out" ? "var(--red)" : "var(--gray-200)"
                                                                    },
                                                                    children: entry.type === "out" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(entry.amount) : "—"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                    lineNumber: 1073,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right font-extrabold text-[15px]`,
                                                                    style: {
                                                                        color: entry.runningBal >= 0 ? "var(--green)" : "var(--red)"
                                                                    },
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(Math.abs(entry.runningBal))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                    lineNumber: 1076,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, entry.id, true, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1057,
                                                            columnNumber: 29
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                    lineNumber: 1055,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        style: {
                                                            background: "var(--gray-50)"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                colSpan: 5,
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} text-[13.5px] font-bold border-t-2 border-[var(--gray-200)]`,
                                                                style: {
                                                                    color: "var(--gray-700)"
                                                                },
                                                                children: [
                                                                    "Total (",
                                                                    methodCashbook.length,
                                                                    " entries) — ",
                                                                    methodFilter
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 1085,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right text-[15px] font-extrabold border-t-2 border-[var(--gray-200)]`,
                                                                style: {
                                                                    color: "var(--green)"
                                                                },
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(methodCashIn)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 1088,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right text-[15px] font-extrabold border-t-2 border-[var(--gray-200)]`,
                                                                style: {
                                                                    color: "var(--red)"
                                                                },
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(methodCashOut)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 1089,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right text-[15px] font-extrabold border-t-2 border-[var(--gray-200)]`,
                                                                style: {
                                                                    color: (methodCashbookWithBal.at(-1)?.runningBal ?? 0) >= 0 ? "var(--green)" : "var(--red)"
                                                                },
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(Math.abs(methodCashbookWithBal.at(-1)?.runningBal ?? 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 1090,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                        lineNumber: 1084,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                    lineNumber: 1083,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 1044,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                        lineNumber: 1043,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                    lineNumber: 1036,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                        lineNumber: 1018,
                        columnNumber: 11
                    }, this),
                    reportGenerated && activeTab === "expense" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                                        label: "Total Expenses",
                                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(expenseTotal),
                                        color: "var(--red)",
                                        sub: `${expenses.length} entries`
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                        lineNumber: 1109,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                                        label: "Entries",
                                        value: String(expenses.length),
                                        color: "var(--blue-deeper)"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                        lineNumber: 1110,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                                        label: "Period",
                                        value: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(fromDate)} — ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(toDate)}`,
                                        color: "var(--gray-900)"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                        lineNumber: 1111,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                lineNumber: 1108,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-[14px] border border-[var(--gray-100)] overflow-hidden",
                                style: {
                                    boxShadow: "var(--shadow-sm)"
                                },
                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-10 text-[13px]",
                                    style: {
                                        color: "var(--gray-800)"
                                    },
                                    children: "Loading..."
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                    lineNumber: 1115,
                                    columnNumber: 17
                                }, this) : expenses.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-14 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                                            size: 32,
                                            className: "mx-auto mb-2",
                                            style: {
                                                color: "var(--gray-200)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 1118,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[13px] font-medium",
                                            style: {
                                                color: "var(--gray-800)"
                                            },
                                            children: "No expenses found for this period."
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 1119,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                    lineNumber: 1117,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-x-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].table} min-w-[850px]`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        "#",
                                                        "Expense No",
                                                        "Date",
                                                        "Category",
                                                        "Invoice",
                                                        "Method",
                                                        "Amount"
                                                    ].map((h)=>{
                                                        const right = h === "Amount";
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].thDense} ${right ? "text-right" : "text-left"} whitespace-nowrap`,
                                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].thStyle,
                                                            children: h
                                                        }, h, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1128,
                                                            columnNumber: 34
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                    lineNumber: 1125,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 1124,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: expenses.map((e, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].row,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} ${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].cellBody}`,
                                                                style: {
                                                                    color: "var(--gray-800)"
                                                                },
                                                                children: idx + 1
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 1135,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} ${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].cellBody} font-mono`,
                                                                style: {
                                                                    color: "var(--blue-deeper)"
                                                                },
                                                                children: e.expense_number || "—"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 1136,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} ${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].cellBody} whitespace-nowrap`,
                                                                style: {
                                                                    color: "var(--gray-900)"
                                                                },
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(e.date)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 1137,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} ${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].cellPrimary}`,
                                                                style: {
                                                                    color: "var(--gray-900)"
                                                                },
                                                                children: e.category || "—"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 1138,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} ${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].cellBody}`,
                                                                style: {
                                                                    color: "var(--gray-700)"
                                                                },
                                                                children: e.invoice_number || "—"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 1139,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "px-2 py-0.5 rounded-full text-[10.5px] font-semibold",
                                                                    style: {
                                                                        background: "var(--gray-100)",
                                                                        color: "var(--gray-900)"
                                                                    },
                                                                    children: e.method
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                    lineNumber: 1140,
                                                                    columnNumber: 54
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 1140,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right font-extrabold text-[15px]`,
                                                                style: {
                                                                    color: "var(--red)"
                                                                },
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(e.amount)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 1141,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, e.id, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                        lineNumber: 1134,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 1132,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    style: {
                                                        background: "var(--gray-50)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            colSpan: 6,
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} text-[13.5px] font-bold border-t-2 border-[var(--gray-200)]`,
                                                            style: {
                                                                color: "var(--gray-700)"
                                                            },
                                                            children: [
                                                                "Total (",
                                                                expenses.length,
                                                                " entries)"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1147,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$dataTableStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DT"].tdDense} font-mono text-right text-[15px] font-extrabold border-t-2 border-[var(--gray-200)]`,
                                                            style: {
                                                                color: "var(--red)"
                                                            },
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(expenseTotal)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1148,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                    lineNumber: 1146,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 1145,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                        lineNumber: 1123,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                    lineNumber: 1122,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                lineNumber: 1113,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                        lineNumber: 1107,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                lineNumber: 317,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ledger-a4-print-only",
                style: {
                    background: "#fff",
                    fontFamily: "Arial, sans-serif"
                },
                children: reportGenerated && activeTab ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1,
                                display: "flex",
                                flexDirection: "column",
                                minHeight: 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$PdfPrintBanner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PdfPrintBanner"], {
                                    subtitle: "Reports"
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                    lineNumber: 1164,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        padding: "4px 10px 8px",
                                        marginBottom: 14
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 12,
                                                color: "#555"
                                            },
                                            children: [
                                                activeTab === "dailycash" || activeTab === "dailyparties" ? `Date: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(dailyDate)}` : `Period: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(fromDate)} — ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(toDate)}`,
                                                accountFilter !== "all" && activeTab !== "paymentmethod" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        marginLeft: 8,
                                                        color: "#888"
                                                    },
                                                    children: [
                                                        "· Party: ",
                                                        accountFilter
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                    lineNumber: 1171,
                                                    columnNumber: 74
                                                }, this),
                                                activeTab === "paymentmethod" && methodFilter !== "all" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        marginLeft: 8,
                                                        color: "#888"
                                                    },
                                                    children: [
                                                        "· Method: ",
                                                        methodFilter
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                    lineNumber: 1172,
                                                    columnNumber: 73
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 1167,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontWeight: 900,
                                                color: "#7f1d1d",
                                                fontSize: 14,
                                                letterSpacing: 2,
                                                textTransform: "uppercase"
                                            },
                                            children: {
                                                overview: "Overview Report",
                                                account: "Account Statement",
                                                invoices: "Invoice Report",
                                                cashflow: "Cash Flow Report",
                                                dailycash: "Daily Cashbook",
                                                dailyparties: "Daily Parties Report",
                                                paymentmethod: "Payment Method Report",
                                                expense: "Expense Report"
                                            }[activeTab]
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 1174,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                    lineNumber: 1166,
                                    columnNumber: 9
                                }, this),
                                (activeTab === "overview" || activeTab === "invoices") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "grid",
                                        gridTemplateColumns: "repeat(4, 1fr)",
                                        gap: 10,
                                        marginBottom: 18
                                    },
                                    children: [
                                        {
                                            label: "Total Invoices",
                                            val: String(filteredInvoices.length),
                                            color: "#7f1d1d"
                                        },
                                        {
                                            label: "Grand Total",
                                            val: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(totalRevenue),
                                            color: "#111"
                                        },
                                        {
                                            label: "Amount Received",
                                            val: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(totalCollected),
                                            color: "#16a34a"
                                        },
                                        {
                                            label: "Balance Due",
                                            val: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(totalDue),
                                            color: "#dc2626"
                                        }
                                    ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                border: "1px solid #e5e7eb",
                                                borderRadius: 8,
                                                padding: "8px 12px",
                                                textAlign: "center"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 10,
                                                        fontWeight: 700,
                                                        color: "#999",
                                                        textTransform: "uppercase",
                                                        letterSpacing: 1.2,
                                                        marginBottom: 4
                                                    },
                                                    children: c.label
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                    lineNumber: 1189,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 15,
                                                        fontWeight: 900,
                                                        color: c.color,
                                                        fontFamily: "monospace"
                                                    },
                                                    children: c.val
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                    lineNumber: 1190,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, c.label, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 1188,
                                            columnNumber: 15
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                    lineNumber: 1181,
                                    columnNumber: 11
                                }, this),
                                (activeTab === "invoices" || activeTab === "overview") && filteredInvoices.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    style: {
                                        width: "100%",
                                        borderCollapse: "collapse",
                                        fontSize: 11
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                style: {
                                                    background: "#7f1d1d"
                                                },
                                                children: [
                                                    "#",
                                                    "Invoice No",
                                                    "Date",
                                                    "Client",
                                                    "Grand Total",
                                                    "Received",
                                                    "Balance Due",
                                                    "Expense",
                                                    "Profit",
                                                    "Status"
                                                ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: {
                                                            color: "#fff",
                                                            fontWeight: 700,
                                                            textAlign: "left",
                                                            padding: "7px 8px",
                                                            fontSize: 10,
                                                            letterSpacing: 1,
                                                            textTransform: "uppercase"
                                                        },
                                                        children: h
                                                    }, h, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                        lineNumber: 1202,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 1200,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 1199,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: filteredInvoices.map((inv, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    style: {
                                                        background: idx % 2 === 0 ? "#fff" : "#fafafa",
                                                        borderBottom: "1px solid #f0f0f0"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px",
                                                                color: "#999",
                                                                fontSize: 10
                                                            },
                                                            children: idx + 1
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1209,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px",
                                                                fontWeight: 800,
                                                                color: "#7f1d1d",
                                                                fontFamily: "monospace"
                                                            },
                                                            children: inv.invoice_number
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1210,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px",
                                                                color: "#555"
                                                            },
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(inv.invoice_date)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1211,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px",
                                                                fontWeight: 600
                                                            },
                                                            children: inv.client_name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1212,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px",
                                                                fontWeight: 800,
                                                                fontFamily: "monospace",
                                                                textAlign: "right"
                                                            },
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(inv.grand_total)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1213,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px",
                                                                fontWeight: 700,
                                                                fontFamily: "monospace",
                                                                textAlign: "right",
                                                                color: "#16a34a"
                                                            },
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(inv.amount_received)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1214,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px",
                                                                fontWeight: 800,
                                                                fontFamily: "monospace",
                                                                textAlign: "right",
                                                                color: inv.balance_due > 0 ? "#dc2626" : "#16a34a"
                                                            },
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(inv.balance_due)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1215,
                                                            columnNumber: 19
                                                        }, this),
                                                        (()=>{
                                                            const exp = expenseByInvoice[inv.id] ?? 0;
                                                            const profit = Number(inv.grand_total) - exp;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            padding: "6px 8px",
                                                                            fontWeight: 800,
                                                                            fontFamily: "monospace",
                                                                            textAlign: "right",
                                                                            color: exp > 0 ? "#dc2626" : "#ccc"
                                                                        },
                                                                        children: exp > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(exp) : "—"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                        lineNumber: 1221,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            padding: "6px 8px",
                                                                            fontWeight: 900,
                                                                            fontFamily: "monospace",
                                                                            textAlign: "right",
                                                                            color: profit >= 0 ? "#16a34a" : "#dc2626"
                                                                        },
                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(profit)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                        lineNumber: 1222,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true);
                                                        })(),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 9,
                                                                    fontWeight: 800,
                                                                    padding: "2px 6px",
                                                                    borderRadius: 4,
                                                                    textTransform: "uppercase",
                                                                    background: inv.payment_status === "paid" ? "#dcfce7" : inv.payment_status === "partial" ? "#fff7ed" : "#fef2f2",
                                                                    color: inv.payment_status === "paid" ? "#16a34a" : inv.payment_status === "partial" ? "#ea580c" : "#dc2626"
                                                                },
                                                                children: inv.payment_status
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 1227,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1226,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, inv.id, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                    lineNumber: 1208,
                                                    columnNumber: 17
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 1206,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                style: {
                                                    background: "#f3f4f6",
                                                    borderTop: "2px solid #dc2626"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        colSpan: 4,
                                                        style: {
                                                            padding: "8px 8px",
                                                            fontWeight: 900,
                                                            fontSize: 12
                                                        },
                                                        children: [
                                                            "TOTAL — ",
                                                            filteredInvoices.length,
                                                            " Invoice",
                                                            filteredInvoices.length !== 1 ? "s" : ""
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                        lineNumber: 1238,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            padding: "8px 8px",
                                                            fontWeight: 900,
                                                            fontFamily: "monospace",
                                                            textAlign: "right",
                                                            fontSize: 13
                                                        },
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(totalRevenue)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                        lineNumber: 1239,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            padding: "8px 8px",
                                                            fontWeight: 900,
                                                            fontFamily: "monospace",
                                                            textAlign: "right",
                                                            fontSize: 13,
                                                            color: "#16a34a"
                                                        },
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(totalCollected)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                        lineNumber: 1240,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            padding: "8px 8px",
                                                            fontWeight: 900,
                                                            fontFamily: "monospace",
                                                            textAlign: "right",
                                                            fontSize: 13,
                                                            color: "#dc2626"
                                                        },
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(totalDue)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                        lineNumber: 1241,
                                                        columnNumber: 17
                                                    }, this),
                                                    (()=>{
                                                        const expTotal = filteredInvoices.reduce((s, i)=>s + (expenseByInvoice[i.id] ?? 0), 0);
                                                        const profitTotal = totalRevenue - expTotal;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        padding: "8px 8px",
                                                                        fontWeight: 900,
                                                                        fontFamily: "monospace",
                                                                        textAlign: "right",
                                                                        fontSize: 13,
                                                                        color: "#dc2626"
                                                                    },
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(expTotal)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                    lineNumber: 1247,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        padding: "8px 8px",
                                                                        fontWeight: 900,
                                                                        fontFamily: "monospace",
                                                                        textAlign: "right",
                                                                        fontSize: 13,
                                                                        color: profitTotal >= 0 ? "#16a34a" : "#dc2626"
                                                                    },
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(profitTotal)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                    lineNumber: 1248,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true);
                                                    })(),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {}, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                        lineNumber: 1252,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 1237,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 1236,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                    lineNumber: 1198,
                                    columnNumber: 11
                                }, this),
                                activeTab === "cashflow" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    style: {
                                        width: "100%",
                                        borderCollapse: "collapse",
                                        fontSize: 11
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                style: {
                                                    background: "#7f1d1d"
                                                },
                                                children: [
                                                    "#",
                                                    "Date",
                                                    "Description",
                                                    "Method",
                                                    "Cash In",
                                                    "Cash Out",
                                                    "Running Balance"
                                                ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: {
                                                            color: "#fff",
                                                            fontWeight: 700,
                                                            textAlign: "left",
                                                            padding: "7px 8px",
                                                            fontSize: 10,
                                                            letterSpacing: 1,
                                                            textTransform: "uppercase"
                                                        },
                                                        children: h
                                                    }, h, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                        lineNumber: 1264,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 1262,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 1261,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: cashbookWithBal.map((entry, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    style: {
                                                        background: idx % 2 === 0 ? "#fff" : "#fafafa",
                                                        borderBottom: "1px solid #f0f0f0"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px",
                                                                color: "#999"
                                                            },
                                                            children: idx + 1
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1271,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px",
                                                                color: "#555"
                                                            },
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(entry.date)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1272,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px"
                                                            },
                                                            children: entry.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1273,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px",
                                                                color: "#666"
                                                            },
                                                            children: entry.method || "—"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1274,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px",
                                                                fontFamily: "monospace",
                                                                fontWeight: 700,
                                                                color: entry.type === "in" ? "#16a34a" : "#999"
                                                            },
                                                            children: entry.type === "in" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(entry.amount) : "—"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1275,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px",
                                                                fontFamily: "monospace",
                                                                fontWeight: 700,
                                                                color: entry.type === "out" ? "#dc2626" : "#999"
                                                            },
                                                            children: entry.type === "out" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(entry.amount) : "—"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1278,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px",
                                                                fontFamily: "monospace",
                                                                fontWeight: 800,
                                                                color: entry.runningBal >= 0 ? "#16a34a" : "#dc2626"
                                                            },
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(Math.abs(entry.runningBal))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1281,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, entry.id, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                    lineNumber: 1270,
                                                    columnNumber: 17
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 1268,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                style: {
                                                    background: "#f3f4f6",
                                                    borderTop: "2px solid #dc2626"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        colSpan: 4,
                                                        style: {
                                                            padding: "8px 8px",
                                                            fontWeight: 900,
                                                            fontSize: 12
                                                        },
                                                        children: "TOTAL"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                        lineNumber: 1289,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            padding: "8px 8px",
                                                            fontWeight: 900,
                                                            fontFamily: "monospace",
                                                            color: "#16a34a",
                                                            fontSize: 13
                                                        },
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(totalCashIn)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                        lineNumber: 1290,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            padding: "8px 8px",
                                                            fontWeight: 900,
                                                            fontFamily: "monospace",
                                                            color: "#dc2626",
                                                            fontSize: 13
                                                        },
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(totalCashOut)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                        lineNumber: 1291,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            padding: "8px 8px",
                                                            fontWeight: 900,
                                                            fontFamily: "monospace",
                                                            fontSize: 13
                                                        },
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(Math.abs(cashbookWithBal.at(-1)?.runningBal ?? 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                        lineNumber: 1292,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 1288,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 1287,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                    lineNumber: 1260,
                                    columnNumber: 11
                                }, this),
                                activeTab === "dailycash" && (dailyCashWithBal.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: 12,
                                        color: "#666",
                                        padding: "12px 10px"
                                    },
                                    children: [
                                        "No cashbook entries for ",
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(dailyDate),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                    lineNumber: 1301,
                                    columnNumber: 13
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    style: {
                                        width: "100%",
                                        borderCollapse: "collapse",
                                        fontSize: 11
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                style: {
                                                    background: "#7f1d1d"
                                                },
                                                children: [
                                                    "#",
                                                    "Description",
                                                    "Invoice # / Ref",
                                                    "Method",
                                                    "Cash In",
                                                    "Cash Out",
                                                    "Running Balance"
                                                ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: {
                                                            color: "#fff",
                                                            fontWeight: 700,
                                                            textAlign: "left",
                                                            padding: "7px 8px",
                                                            fontSize: 10,
                                                            letterSpacing: 1,
                                                            textTransform: "uppercase"
                                                        },
                                                        children: h
                                                    }, h, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                        lineNumber: 1309,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 1307,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 1306,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: dailyCashWithBal.map((entry, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    style: {
                                                        background: idx % 2 === 0 ? "#fff" : "#fafafa",
                                                        borderBottom: "1px solid #f0f0f0"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px",
                                                                color: "#999"
                                                            },
                                                            children: idx + 1
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1316,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px"
                                                            },
                                                            children: entry.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1317,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px",
                                                                color: "#666"
                                                            },
                                                            children: entry.reference || "—"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1318,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px",
                                                                color: "#666"
                                                            },
                                                            children: entry.method || "—"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1319,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px",
                                                                fontFamily: "monospace",
                                                                fontWeight: 700,
                                                                color: entry.type === "in" ? "#16a34a" : "#999"
                                                            },
                                                            children: entry.type === "in" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(entry.amount) : "—"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1320,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px",
                                                                fontFamily: "monospace",
                                                                fontWeight: 700,
                                                                color: entry.type === "out" ? "#dc2626" : "#999"
                                                            },
                                                            children: entry.type === "out" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(entry.amount) : "—"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1323,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px",
                                                                fontFamily: "monospace",
                                                                fontWeight: 800,
                                                                color: entry.runningBal >= 0 ? "#16a34a" : "#dc2626"
                                                            },
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(Math.abs(entry.runningBal))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1326,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, entry.id, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                    lineNumber: 1315,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 1313,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                style: {
                                                    background: "#f3f4f6",
                                                    borderTop: "2px solid #dc2626"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        colSpan: 4,
                                                        style: {
                                                            padding: "8px 8px",
                                                            fontWeight: 900,
                                                            fontSize: 12
                                                        },
                                                        children: [
                                                            "Day total — ",
                                                            dailyCashWithBal.length,
                                                            " ",
                                                            dailyCashWithBal.length !== 1 ? "entries" : "entry"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                        lineNumber: 1334,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            padding: "8px 8px",
                                                            fontWeight: 900,
                                                            fontFamily: "monospace",
                                                            color: "#16a34a",
                                                            fontSize: 13
                                                        },
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(dailyCashbook.filter((c)=>c.type === "in").reduce((s, c)=>s + Number(c.amount), 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                        lineNumber: 1337,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            padding: "8px 8px",
                                                            fontWeight: 900,
                                                            fontFamily: "monospace",
                                                            color: "#dc2626",
                                                            fontSize: 13
                                                        },
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(dailyCashbook.filter((c)=>c.type === "out").reduce((s, c)=>s + Number(c.amount), 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                        lineNumber: 1340,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            padding: "8px 8px",
                                                            fontWeight: 900,
                                                            fontFamily: "monospace",
                                                            fontSize: 13,
                                                            color: (dailyCashWithBal.at(-1)?.runningBal ?? 0) >= 0 ? "#16a34a" : "#dc2626"
                                                        },
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(Math.abs(dailyCashWithBal.at(-1)?.runningBal ?? 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                        lineNumber: 1343,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 1333,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 1332,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                    lineNumber: 1305,
                                    columnNumber: 13
                                }, this)),
                                activeTab === "dailyparties" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    style: {
                                        width: "100%",
                                        borderCollapse: "collapse",
                                        fontSize: 11
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                style: {
                                                    background: "#7f1d1d"
                                                },
                                                children: [
                                                    "#",
                                                    "Invoice No",
                                                    "Party Name",
                                                    "Job / Description",
                                                    "Invoice Amount",
                                                    "Received",
                                                    "Balance",
                                                    "Status"
                                                ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: {
                                                            color: "#fff",
                                                            fontWeight: 700,
                                                            textAlign: "left",
                                                            padding: "7px 8px",
                                                            fontSize: 10,
                                                            letterSpacing: 1,
                                                            textTransform: "uppercase"
                                                        },
                                                        children: h
                                                    }, h, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                        lineNumber: 1358,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 1356,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 1355,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: dailyInvoices.map((inv, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    style: {
                                                        background: idx % 2 === 0 ? "#fff" : "#fafafa",
                                                        borderBottom: "1px solid #f0f0f0"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px",
                                                                color: "#999"
                                                            },
                                                            children: idx + 1
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1365,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px",
                                                                fontWeight: 800,
                                                                color: "#7f1d1d",
                                                                fontFamily: "monospace"
                                                            },
                                                            children: inv.invoice_number
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1366,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px",
                                                                fontWeight: 600
                                                            },
                                                            children: inv.client_name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1367,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px",
                                                                color: "#666"
                                                            },
                                                            children: inv.job_name || "—"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1368,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px",
                                                                fontWeight: 800,
                                                                fontFamily: "monospace",
                                                                textAlign: "right"
                                                            },
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(inv.grand_total)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1369,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px",
                                                                fontWeight: 700,
                                                                fontFamily: "monospace",
                                                                textAlign: "right",
                                                                color: "#16a34a"
                                                            },
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(inv.amount_received)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1370,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px",
                                                                fontWeight: 800,
                                                                fontFamily: "monospace",
                                                                textAlign: "right",
                                                                color: inv.balance_due > 0 ? "#dc2626" : "#16a34a"
                                                            },
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(inv.balance_due)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1371,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 9,
                                                                    fontWeight: 800,
                                                                    padding: "2px 6px",
                                                                    borderRadius: 4,
                                                                    textTransform: "uppercase",
                                                                    background: inv.payment_status === "paid" ? "#dcfce7" : inv.payment_status === "partial" ? "#fff7ed" : "#fef2f2",
                                                                    color: inv.payment_status === "paid" ? "#16a34a" : inv.payment_status === "partial" ? "#ea580c" : "#dc2626"
                                                                },
                                                                children: inv.payment_status
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 1373,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1372,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, inv.id, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                    lineNumber: 1364,
                                                    columnNumber: 17
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 1362,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                    lineNumber: 1354,
                                    columnNumber: 11
                                }, this),
                                activeTab === "account" && accStatementWithBal.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    style: {
                                        width: "100%",
                                        borderCollapse: "collapse",
                                        fontSize: 11
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                style: {
                                                    background: "#7f1d1d"
                                                },
                                                children: [
                                                    "Date",
                                                    "Document #",
                                                    "Description",
                                                    "Debit",
                                                    "Credit",
                                                    "Balance",
                                                    "Method"
                                                ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: {
                                                            color: "#fff",
                                                            fontWeight: 700,
                                                            textAlign: "left",
                                                            padding: "7px 8px",
                                                            fontSize: 10,
                                                            letterSpacing: 1,
                                                            textTransform: "uppercase"
                                                        },
                                                        children: h
                                                    }, h, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                        lineNumber: 1391,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 1389,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 1388,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: accStatementWithBal.map((r, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    style: {
                                                        background: idx % 2 === 0 ? "#fff" : "#fafafa",
                                                        borderBottom: "1px solid #f0f0f0"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px",
                                                                color: "#555"
                                                            },
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(r.date)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1398,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px",
                                                                fontWeight: 800,
                                                                color: "#7f1d1d",
                                                                fontFamily: "monospace"
                                                            },
                                                            children: r.doc
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1399,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px"
                                                            },
                                                            children: r.desc
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1400,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px",
                                                                fontFamily: "monospace",
                                                                fontWeight: 700,
                                                                textAlign: "right",
                                                                color: r.debit > 0 ? "#111" : "#ccc"
                                                            },
                                                            children: r.debit > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(r.debit) : "—"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1401,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px",
                                                                fontFamily: "monospace",
                                                                fontWeight: 700,
                                                                textAlign: "right",
                                                                color: r.credit > 0 ? "#16a34a" : "#ccc"
                                                            },
                                                            children: r.credit > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(r.credit) : "—"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1404,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px",
                                                                fontFamily: "monospace",
                                                                fontWeight: 800,
                                                                textAlign: "right",
                                                                color: r.balance > 0 ? "#dc2626" : "#16a34a"
                                                            },
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(Math.abs(r.balance))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1407,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px",
                                                                color: "#666"
                                                            },
                                                            children: r.method
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1410,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                    lineNumber: 1397,
                                                    columnNumber: 17
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 1395,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                    lineNumber: 1387,
                                    columnNumber: 11
                                }, this),
                                activeTab === "paymentmethod" && (methodCashbookWithBal.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: 12,
                                        color: "#666",
                                        padding: "12px 10px"
                                    },
                                    children: [
                                        "No transactions for ",
                                        methodFilter,
                                        " between ",
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(fromDate),
                                        " and ",
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(toDate),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                    lineNumber: 1420,
                                    columnNumber: 13
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "grid",
                                                gridTemplateColumns: "repeat(4, 1fr)",
                                                gap: 10,
                                                marginBottom: 18
                                            },
                                            children: [
                                                {
                                                    label: "Opening Balance",
                                                    val: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(methodOpeningBalance),
                                                    color: "#1d4ed8"
                                                },
                                                {
                                                    label: "Total Cash In",
                                                    val: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(methodCashIn),
                                                    color: "#16a34a"
                                                },
                                                {
                                                    label: "Total Cash Out",
                                                    val: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(methodCashOut),
                                                    color: "#dc2626"
                                                },
                                                {
                                                    label: "Closing Balance",
                                                    val: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(methodOpeningBalance + methodCashIn - methodCashOut),
                                                    color: methodOpeningBalance + methodCashIn - methodCashOut >= 0 ? "#16a34a" : "#dc2626"
                                                }
                                            ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        border: "1px solid #e5e7eb",
                                                        borderRadius: 8,
                                                        padding: "8px 12px",
                                                        textAlign: "center"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: 10,
                                                                fontWeight: 700,
                                                                color: "#999",
                                                                textTransform: "uppercase",
                                                                letterSpacing: 1.2,
                                                                marginBottom: 4
                                                            },
                                                            children: c.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1433,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: 15,
                                                                fontWeight: 900,
                                                                color: c.color,
                                                                fontFamily: "monospace"
                                                            },
                                                            children: c.val
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1434,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, c.label, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                    lineNumber: 1432,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 1425,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            style: {
                                                width: "100%",
                                                borderCollapse: "collapse",
                                                fontSize: 11
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        style: {
                                                            background: "#7f1d1d"
                                                        },
                                                        children: [
                                                            "#",
                                                            "Date",
                                                            "Description",
                                                            "Invoice # / Ref",
                                                            "Method",
                                                            "Cash In",
                                                            "Cash Out",
                                                            "Running Balance"
                                                        ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                style: {
                                                                    color: "#fff",
                                                                    fontWeight: 700,
                                                                    textAlign: "left",
                                                                    padding: "7px 8px",
                                                                    fontSize: 10,
                                                                    letterSpacing: 1,
                                                                    textTransform: "uppercase"
                                                                },
                                                                children: h
                                                            }, h, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 1442,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                        lineNumber: 1440,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                    lineNumber: 1439,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    children: methodCashbookWithBal.map((entry, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            style: {
                                                                background: idx % 2 === 0 ? "#fff" : "#fafafa",
                                                                borderBottom: "1px solid #f0f0f0"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        padding: "6px 8px",
                                                                        color: "#999"
                                                                    },
                                                                    children: idx + 1
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                    lineNumber: 1449,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        padding: "6px 8px",
                                                                        color: "#555"
                                                                    },
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(entry.date)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                    lineNumber: 1450,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        padding: "6px 8px"
                                                                    },
                                                                    children: entry.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                    lineNumber: 1451,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        padding: "6px 8px",
                                                                        color: "#666"
                                                                    },
                                                                    children: entry.reference || "—"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                    lineNumber: 1452,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        padding: "6px 8px",
                                                                        color: "#666"
                                                                    },
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$paymentMethods$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizePaymentMethod"])(entry.method)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                    lineNumber: 1453,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        padding: "6px 8px",
                                                                        fontFamily: "monospace",
                                                                        fontWeight: 700,
                                                                        textAlign: "right",
                                                                        color: entry.type === "in" ? "#16a34a" : "#999"
                                                                    },
                                                                    children: entry.type === "in" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(entry.amount) : "—"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                    lineNumber: 1454,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        padding: "6px 8px",
                                                                        fontFamily: "monospace",
                                                                        fontWeight: 700,
                                                                        textAlign: "right",
                                                                        color: entry.type === "out" ? "#dc2626" : "#999"
                                                                    },
                                                                    children: entry.type === "out" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(entry.amount) : "—"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                    lineNumber: 1457,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        padding: "6px 8px",
                                                                        fontFamily: "monospace",
                                                                        fontWeight: 800,
                                                                        textAlign: "right",
                                                                        color: entry.runningBal >= 0 ? "#16a34a" : "#dc2626"
                                                                    },
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(Math.abs(entry.runningBal))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                    lineNumber: 1460,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, entry.id, true, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1448,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                    lineNumber: 1446,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        style: {
                                                            background: "#f3f4f6",
                                                            borderTop: "2px solid #dc2626"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                colSpan: 5,
                                                                style: {
                                                                    padding: "8px 8px",
                                                                    fontWeight: 900,
                                                                    fontSize: 12
                                                                },
                                                                children: [
                                                                    "Total — ",
                                                                    methodCashbookWithBal.length,
                                                                    " ",
                                                                    methodCashbookWithBal.length !== 1 ? "entries" : "entry",
                                                                    " · ",
                                                                    methodFilter
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 1468,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: "8px 8px",
                                                                    fontWeight: 900,
                                                                    fontFamily: "monospace",
                                                                    color: "#16a34a",
                                                                    fontSize: 13,
                                                                    textAlign: "right"
                                                                },
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(methodCashIn)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 1471,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: "8px 8px",
                                                                    fontWeight: 900,
                                                                    fontFamily: "monospace",
                                                                    color: "#dc2626",
                                                                    fontSize: 13,
                                                                    textAlign: "right"
                                                                },
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(methodCashOut)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 1472,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: "8px 8px",
                                                                    fontWeight: 900,
                                                                    fontFamily: "monospace",
                                                                    fontSize: 13,
                                                                    textAlign: "right",
                                                                    color: (methodCashbookWithBal.at(-1)?.runningBal ?? 0) >= 0 ? "#16a34a" : "#dc2626"
                                                                },
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(Math.abs(methodCashbookWithBal.at(-1)?.runningBal ?? 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                                lineNumber: 1473,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                        lineNumber: 1467,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                    lineNumber: 1466,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 1438,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true)),
                                activeTab === "expense" && (expenses.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: 12,
                                        color: "#666",
                                        padding: "12px 10px"
                                    },
                                    children: [
                                        "No expenses between ",
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(fromDate),
                                        " and ",
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(toDate),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                    lineNumber: 1486,
                                    columnNumber: 13
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    style: {
                                        width: "100%",
                                        borderCollapse: "collapse",
                                        fontSize: 11
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                style: {
                                                    background: "#7f1d1d"
                                                },
                                                children: [
                                                    "#",
                                                    "Expense No",
                                                    "Date",
                                                    "Category",
                                                    "Invoice",
                                                    "Method",
                                                    "Amount"
                                                ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: {
                                                            color: "#fff",
                                                            fontWeight: 700,
                                                            textAlign: h === "Amount" ? "right" : "left",
                                                            padding: "7px 8px",
                                                            fontSize: 10,
                                                            letterSpacing: 1,
                                                            textTransform: "uppercase"
                                                        },
                                                        children: h
                                                    }, h, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                        lineNumber: 1494,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 1492,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 1491,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: expenses.map((e, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    style: {
                                                        background: idx % 2 === 0 ? "#fff" : "#fafafa",
                                                        borderBottom: "1px solid #f0f0f0"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px",
                                                                color: "#999"
                                                            },
                                                            children: idx + 1
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1501,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px",
                                                                fontFamily: "monospace",
                                                                color: "#7f1d1d",
                                                                fontWeight: 700
                                                            },
                                                            children: e.expense_number || "—"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1502,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px",
                                                                color: "#555"
                                                            },
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(e.date)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1503,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px",
                                                                fontWeight: 600
                                                            },
                                                            children: e.category || "—"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1504,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px",
                                                                color: "#666"
                                                            },
                                                            children: e.invoice_number || "—"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1505,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px",
                                                                color: "#666"
                                                            },
                                                            children: e.method
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1506,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: "6px 8px",
                                                                fontFamily: "monospace",
                                                                fontWeight: 800,
                                                                textAlign: "right",
                                                                color: "#dc2626"
                                                            },
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(e.amount)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                            lineNumber: 1507,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, e.id, true, {
                                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                    lineNumber: 1500,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 1498,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                style: {
                                                    background: "#f3f4f6",
                                                    borderTop: "2px solid #dc2626"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        colSpan: 6,
                                                        style: {
                                                            padding: "8px 8px",
                                                            fontWeight: 900,
                                                            fontSize: 12
                                                        },
                                                        children: [
                                                            "TOTAL — ",
                                                            expenses.length,
                                                            " ",
                                                            expenses.length !== 1 ? "entries" : "entry"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                        lineNumber: 1513,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            padding: "8px 8px",
                                                            fontWeight: 900,
                                                            fontFamily: "monospace",
                                                            color: "#dc2626",
                                                            fontSize: 13,
                                                            textAlign: "right"
                                                        },
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(expenseTotal)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                        lineNumber: 1514,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                                lineNumber: 1512,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                            lineNumber: 1511,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                                    lineNumber: 1490,
                                    columnNumber: 13
                                }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                            lineNumber: 1163,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$components$2f$PrintFooter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PrintFooter"], {}, void 0, false, {
                            fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                            lineNumber: 1522,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: 32,
                        textAlign: "center",
                        color: "#888",
                        fontSize: 12
                    },
                    children: "Generate a report on screen, then use Print / PDF."
                }, void 0, false, {
                    fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                    lineNumber: 1525,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Star-Panaflex/app/(dashboard)/reports/page.tsx",
                lineNumber: 1160,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=Star-Panaflex_0-9o34c._.js.map