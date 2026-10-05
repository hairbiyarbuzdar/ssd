module.exports = [
"[project]/Star-Panaflex/lib/db.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>db
]);
class QueryBuilder {
    table;
    _select;
    _filters;
    _orders;
    _limit;
    _single;
    _operation;
    _data;
    _selectAfterMutation;
    _count;
    _head;
    constructor(table, operation = "select"){
        this.table = table;
        this._select = "*";
        this._filters = [];
        this._orders = [];
        this._limit = null;
        this._single = false;
        this._data = null;
        this._selectAfterMutation = null;
        this._count = null;
        this._head = false;
        this._operation = operation;
    }
    select(fields = "*", opts) {
        if (this._operation === "select") {
            this._select = fields;
            if (opts?.count) this._count = opts.count;
            if (opts?.head) this._head = true;
        } else {
            this._selectAfterMutation = fields;
        }
        return this;
    }
    eq(col, val) {
        this._filters.push({
            type: "eq",
            col,
            val
        });
        return this;
    }
    neq(col, val) {
        this._filters.push({
            type: "neq",
            col,
            val
        });
        return this;
    }
    in(col, val) {
        this._filters.push({
            type: "in",
            col,
            val
        });
        return this;
    }
    ilike(col, val) {
        this._filters.push({
            type: "ilike",
            col,
            val
        });
        return this;
    }
    is(col, val) {
        this._filters.push({
            type: "is",
            col,
            val
        });
        return this;
    }
    gte(col, val) {
        this._filters.push({
            type: "gte",
            col,
            val
        });
        return this;
    }
    lte(col, val) {
        this._filters.push({
            type: "lte",
            col,
            val
        });
        return this;
    }
    order(col, opts) {
        this._orders.push({
            col,
            ascending: opts?.ascending ?? true
        });
        return this;
    }
    limit(n) {
        this._limit = n;
        return this;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    single() {
        this._single = true;
        return this._execute();
    }
    then(// eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolve, reject) {
        return this._execute().then(resolve, reject);
    }
    catch(reject) {
        return this._execute().catch(reject);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async _execute() {
        const payload = {
            table: this.table,
            operation: this._operation,
            select: this._select,
            filters: this._filters,
            orders: this._orders,
            limit: this._limit,
            single: this._single,
            data: this._data ?? undefined,
            selectAfterMutation: this._selectAfterMutation,
            count: this._count,
            head: this._head
        };
        const res = await fetch("/api/db", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        return res.json();
    }
}
class MutationBuilder extends QueryBuilder {
    constructor(table, operation, data){
        super(table, operation);
        if (data) this._data = data;
    }
}
function makeInsert(table, data) {
    return new MutationBuilder(table, "insert", data);
}
function makeUpdate(table, data) {
    return new MutationBuilder(table, "update", data);
}
function makeDelete(table) {
    return new MutationBuilder(table, "delete");
}
const authClient = {
    getUser: async ()=>{
        try {
            const res = await fetch("/api/auth/session");
            if (!res.ok) return {
                data: {
                    user: null
                },
                error: {
                    message: "Unauthorized"
                }
            };
            const json = await res.json();
            return {
                data: {
                    user: json.user
                },
                error: null
            };
        } catch (e) {
            return {
                data: {
                    user: null
                },
                error: e
            };
        }
    },
    getSession: async ()=>{
        try {
            const res = await fetch("/api/auth/session");
            if (!res.ok) return {
                data: {
                    session: null
                },
                error: {
                    message: "Unauthorized"
                }
            };
            const json = await res.json();
            return {
                data: {
                    session: json.session
                },
                error: null
            };
        } catch (e) {
            return {
                data: {
                    session: null
                },
                error: e
            };
        }
    },
    signInWithPassword: async ({ email, password })=>{
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            if (!res.ok) {
                const json = await res.json();
                return {
                    error: {
                        message: json.error ?? "Login failed"
                    }
                };
            }
            return {
                error: null
            };
        } catch (e) {
            return {
                error: {
                    message: e instanceof Error ? e.message : "Network error"
                }
            };
        }
    },
    signOut: async ()=>{
        try {
            await fetch("/api/auth/logout", {
                method: "POST"
            });
        } catch  {
        // ignore
        }
        return {
            error: null
        };
    }
};
const db = {
    from: (table)=>({
            select: (fields = "*", opts)=>new QueryBuilder(table).select(fields, opts),
            insert: (data)=>makeInsert(table, data),
            update: (data)=>makeUpdate(table, data),
            delete: ()=>makeDelete(table)
        }),
    auth: authClient
};
}),
"[project]/Star-Panaflex/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/db.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const LS_REMEMBER = "star_panaflex_login_remember";
const LS_EMAIL = "star_panaflex_login_email";
const LS_PASSWORD = "star_panaflex_login_password";
function LoginPage() {
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [rememberMe, setRememberMe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].auth.getSession().then(({ data })=>{
            if (data.session) router.replace("/dashboard");
        });
        const remembered = localStorage.getItem(LS_REMEMBER);
        if (remembered !== "1") return;
        setEmail(localStorage.getItem(LS_EMAIL) ?? "");
        setPassword(localStorage.getItem(LS_PASSWORD) ?? "");
        setRememberMe(true);
    }, [
        router
    ]);
    async function handleLogin(e) {
        e.preventDefault();
        setError("");
        setLoading(true);
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].auth.signInWithPassword({
            email,
            password
        });
        if (error) {
            setError(error.message);
            setLoading(false);
            return;
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        router.push("/dashboard");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center",
        style: {
            background: "linear-gradient(135deg, #0f172a 0%, #7f1d1d 45%, #dc2626 100%)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none opacity-30",
                style: {
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }
            }, void 0, false, {
                fileName: "[project]/Star-Panaflex/app/page.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-slide-up w-[420px] max-w-[calc(100vw-32px)] bg-white rounded-3xl overflow-hidden",
                style: {
                    boxShadow: "0 24px 60px rgba(0,0,0,.25)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative text-center overflow-hidden",
                        style: {
                            background: "linear-gradient(135deg, #7f1d1d, #dc2626)",
                            padding: "36px 40px 44px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center mb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/Logo.jpeg",
                                    alt: "Star Sign Panaflex & 3D Sign",
                                    className: "h-20 w-auto rounded-xl object-contain"
                                }, void 0, false, {
                                    fileName: "[project]/Star-Panaflex/app/page.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/app/page.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-7 -left-[10%] w-[120%] h-14 bg-white rounded-[50%]"
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/app/page.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Star-Panaflex/app/page.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-10 pt-12 pb-9",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mb-6 text-[13px] font-semibold tracking-[0.8px] uppercase",
                                style: {
                                    color: "var(--gray-400)"
                                },
                                children: "Sign in to your account"
                            }, void 0, false, {
                                fileName: "[project]/Star-Panaflex/app/page.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 px-3.5 py-2.5 mb-3.5 rounded-md text-xs font-semibold",
                                style: {
                                    background: "#FFF0F0",
                                    border: "1.5px solid #e2e8f0",
                                    color: "var(--red)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/page.tsx",
                                                lineNumber: 107,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "12",
                                                y1: "9",
                                                x2: "12",
                                                y2: "13"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/page.tsx",
                                                lineNumber: 108,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "12",
                                                y1: "17",
                                                x2: "12.01",
                                                y2: "17"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/page.tsx",
                                                lineNumber: 108,
                                                columnNumber: 56
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/page.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this),
                                    error
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/page.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleLogin,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-[10px] font-bold tracking-[1.5px] uppercase mb-1.5",
                                                style: {
                                                    color: "var(--blue-deeper)"
                                                },
                                                children: "Email"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/page.tsx",
                                                lineNumber: 116,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                value: email,
                                                onChange: (e)=>setEmail(e.target.value),
                                                className: "w-full border-[1.5px] rounded-[9px] px-3.5 py-2.5 text-[13.5px] outline-none transition-all",
                                                style: {
                                                    borderColor: "var(--gray-200)",
                                                    background: "var(--gray-50)",
                                                    color: "var(--gray-900)"
                                                },
                                                onFocus: (e)=>{
                                                    e.target.style.borderColor = "var(--blue)";
                                                    e.target.style.background = "#fff";
                                                    e.target.style.boxShadow = "0 0 0 3px rgba(220,38,38,.1)";
                                                },
                                                onBlur: (e)=>{
                                                    e.target.style.borderColor = "var(--gray-200)";
                                                    e.target.style.background = "var(--gray-50)";
                                                    e.target.style.boxShadow = "none";
                                                },
                                                placeholder: "Enter email"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/page.tsx",
                                                lineNumber: 119,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/page.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-[10px] font-bold tracking-[1.5px] uppercase mb-1.5",
                                                style: {
                                                    color: "var(--blue-deeper)"
                                                },
                                                children: "Password"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/page.tsx",
                                                lineNumber: 144,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "password",
                                                value: password,
                                                onChange: (e)=>setPassword(e.target.value),
                                                className: "w-full border-[1.5px] rounded-[9px] px-3.5 py-2.5 text-[13.5px] outline-none transition-all",
                                                style: {
                                                    borderColor: "var(--gray-200)",
                                                    background: "var(--gray-50)",
                                                    color: "var(--gray-900)"
                                                },
                                                onFocus: (e)=>{
                                                    e.target.style.borderColor = "var(--blue)";
                                                    e.target.style.background = "#fff";
                                                    e.target.style.boxShadow = "0 0 0 3px rgba(220,38,38,.1)";
                                                },
                                                onBlur: (e)=>{
                                                    e.target.style.borderColor = "var(--gray-200)";
                                                    e.target.style.background = "var(--gray-50)";
                                                    e.target.style.boxShadow = "none";
                                                },
                                                placeholder: "Enter password"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/page.tsx",
                                                lineNumber: 147,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/page.tsx",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-2 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "rememberMe",
                                                type: "checkbox",
                                                checked: rememberMe,
                                                onChange: (e)=>setRememberMe(e.target.checked),
                                                className: "w-4 h-4 rounded border-[1.5px] border-[var(--gray-300)] text-[var(--blue)]"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/page.tsx",
                                                lineNumber: 172,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "rememberMe",
                                                className: "text-[12px] font-semibold",
                                                style: {
                                                    color: "var(--gray-600)",
                                                    userSelect: "none"
                                                },
                                                children: "Remember me"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/page.tsx",
                                                lineNumber: 179,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/page.tsx",
                                        lineNumber: 171,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: loading,
                                        className: "w-full py-3 mt-2 rounded-[9px] border-none text-[13px] font-bold tracking-[1px] text-white cursor-pointer transition-all flex items-center justify-center gap-2 disabled:opacity-60",
                                        style: {
                                            background: "linear-gradient(135deg, var(--blue-deeper), var(--blue))",
                                            boxShadow: "0 4px 18px rgba(220,38,38,.35)"
                                        },
                                        onMouseEnter: (e)=>{
                                            if (!loading) {
                                                e.currentTarget.style.transform = "translateY(-2px)";
                                                e.currentTarget.style.boxShadow = "0 8px 24px rgba(220,38,38,.45)";
                                            }
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.transform = "translateY(0)";
                                            e.currentTarget.style.boxShadow = "0 4px 18px rgba(220,38,38,.35)";
                                        },
                                        children: [
                                            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/page.tsx",
                                                lineNumber: 204,
                                                columnNumber: 17
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "15",
                                                height: "15",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: "20 6 9 17 4 12"
                                                }, void 0, false, {
                                                    fileName: "[project]/Star-Panaflex/app/page.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Star-Panaflex/app/page.tsx",
                                                lineNumber: 206,
                                                columnNumber: 17
                                            }, this),
                                            loading ? "Signing In..." : "Sign In"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Star-Panaflex/app/page.tsx",
                                        lineNumber: 184,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/page.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mt-5 text-[11px]",
                                style: {
                                    color: "var(--gray-400)"
                                },
                                children: [
                                    "Software Developed by",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://addsmint.com",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        style: {
                                            color: "var(--blue-deeper)",
                                            fontWeight: 600,
                                            textDecoration: "none"
                                        },
                                        children: "AddsMint.com"
                                    }, void 0, false, {
                                        fileName: "[project]/Star-Panaflex/app/page.tsx",
                                        lineNumber: 216,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Star-Panaflex/app/page.tsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Star-Panaflex/app/page.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Star-Panaflex/app/page.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Star-Panaflex/app/page.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Star-Panaflex_0yr.ucz._.js.map