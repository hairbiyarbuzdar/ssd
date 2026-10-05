module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Star-Panaflex/lib/prisma.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/Star-Panaflex/node_modules/@prisma/client)");
;
const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma ?? new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]();
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = prisma;
}),
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/node:util [external] (node:util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:util", () => require("node:util"));

module.exports = mod;
}),
"[project]/Star-Panaflex/lib/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COOKIE_MAX_AGE",
    ()=>COOKIE_MAX_AGE,
    "COOKIE_NAME",
    ()=>COOKIE_NAME,
    "signToken",
    ()=>signToken,
    "verifyToken",
    ()=>verifyToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/jose/dist/node/esm/jwt/sign.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/jose/dist/node/esm/jwt/verify.js [app-route] (ecmascript)");
;
const SECRET = new TextEncoder().encode(process.env.JWT_SECRET ?? "change-me-in-production-star-panaflex");
const COOKIE_NAME = "star_auth_token";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days
async function signToken(payload) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SignJWT"]({
        ...payload
    }).setProtectedHeader({
        alg: "HS256"
    }).setIssuedAt().setExpirationTime("7d").sign(SECRET);
}
async function verifyToken(token) {
    try {
        const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jwtVerify"])(token, SECRET);
        return payload;
    } catch  {
        return null;
    }
}
;
}),
"[project]/Star-Panaflex/app/api/db/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Star-Panaflex/lib/auth.ts [app-route] (ecmascript)");
;
;
;
// Map Supabase snake_case table names → Prisma camelCase model accessors
const TABLE_MAP = {
    head_accounts: "headAccount",
    accounts: "account",
    products: "product",
    cashbook: "cashbook",
    invoices: "invoice",
    invoice_items: "invoiceItem",
    expenses: "expense",
    quick_invoices: "quickInvoice",
    quick_invoice_items: "quickInvoiceItem",
    quotation_products: "quotationProduct",
    quotations: "quotation",
    quotation_items: "quotationItem",
    suppliers: "supplier",
    purchase_orders: "purchaseOrder",
    purchase_order_items: "purchaseOrderItem",
    purchase_products: "purchaseProduct",
    workers: "worker",
    worker_advances: "workerAdvance",
    worker_payments: "workerPayment",
    worker_extra_hours: "workerExtraHours",
    laborers: "laborer",
    labor_tasks: "laborTask",
    labor_advances: "laborAdvance",
    payment_methods: "paymentMethod",
    activity_log: "activityLog"
};
// FK relations: maps (tableName, relationAlias) → prisma include key
// Supabase auto-discovers FK: accounts.head_id → head_accounts
// Prisma uses the relation field name declared in the schema
const RELATION_MAP = {
    accounts: {
        head_accounts: "head_account"
    },
    invoices: {
        invoice_items: "items"
    },
    quick_invoices: {
        quick_invoice_items: "items"
    },
    quotations: {
        quotation_items: "items",
        invoices: "source_invoice"
    },
    purchase_orders: {
        purchase_order_items: "items",
        suppliers: "supplier"
    },
    workers: {
        worker_advances: "advances",
        worker_payments: "payments"
    },
    laborers: {
        labor_tasks: "tasks",
        labor_advances: "advances"
    },
    labor_tasks: {
        laborers: "laborer"
    },
    worker_payments: {
        workers: "worker"
    },
    worker_advances: {
        workers: "worker"
    },
    invoice_items: {
        invoices: "invoice"
    }
};
function parseSelectFields(select, table) {
    if (!select || select === "*") return undefined; // return all scalar fields
    // Check for relation patterns like "*, head_accounts(*)" or "id, name, head_accounts(name)"
    const relMap = RELATION_MAP[table] ?? {};
    const parts = select.split(",").map((s)=>s.trim());
    const scalarFields = {};
    const includeFields = {};
    let hasWildcard = false;
    for (const part of parts){
        const relMatch = part.match(/^(\w+)\(([^)]*)\)$/);
        if (relMatch) {
            const [, relName, relSelect] = relMatch;
            const prismaRel = relMap[relName];
            if (prismaRel) {
                if (relSelect === "*" || relSelect === "") {
                    includeFields[prismaRel] = true;
                } else {
                    const relFields = relSelect.split(",").map((s)=>s.trim()).filter(Boolean);
                    includeFields[prismaRel] = {
                        select: Object.fromEntries(relFields.map((f)=>[
                                f,
                                true
                            ]))
                    };
                }
            }
        } else if (part === "*") {
            hasWildcard = true;
        } else if (part) {
            scalarFields[part] = true;
        }
    }
    if (Object.keys(includeFields).length === 0) {
        // No relations — just a column projection
        if (hasWildcard) return undefined;
        return {
            select: scalarFields
        };
    }
    // Has relations — use select + include pattern
    if (hasWildcard || Object.keys(scalarFields).length === 0) {
        return {
            include: includeFields
        };
    }
    return {
        select: {
            ...scalarFields,
            ...includeFields
        }
    };
}
function buildWhere(filters, table) {
    const dateFields = table ? DATE_FIELDS[table] : undefined;
    const isDateCol = (col)=>!!dateFields && dateFields.includes(col);
    // Prisma @db.Date columns must be filtered with Date objects, not bare YYYY-MM-DD strings.
    const coerce = (col, v)=>isDateCol(col) && typeof v === "string" && v ? new Date(v) : v;
    const where = {};
    for (const f of filters){
        switch(f.type){
            case "eq":
                where[f.col] = coerce(f.col, f.val);
                break;
            case "neq":
                where[f.col] = {
                    not: coerce(f.col, f.val)
                };
                break;
            case "in":
                where[f.col] = {
                    in: f.val.map((v)=>coerce(f.col, v))
                };
                break;
            case "ilike":
                {
                    // Supabase ilike uses % wildcards; strip them for Prisma contains
                    const pattern = String(f.val).replace(/%/g, "");
                    where[f.col] = {
                        contains: pattern,
                        mode: "insensitive"
                    };
                    break;
                }
            case "is":
                where[f.col] = f.val; // null
                break;
            case "gte":
                where[f.col] = {
                    gte: coerce(f.col, f.val)
                };
                break;
            case "lte":
                where[f.col] = {
                    lte: coerce(f.col, f.val)
                };
                break;
        }
    }
    return where;
}
function buildOrderBy(orders) {
    return orders.map((o)=>({
            [o.col]: o.ascending ? "asc" : "desc"
        }));
}
// Date fields per table — Prisma @db.Date requires a Date object, not a bare string
const DATE_FIELDS = {
    invoices: [
        "invoice_date",
        "due_date",
        "job_start",
        "job_end"
    ],
    cashbook: [
        "date"
    ],
    expenses: [
        "date"
    ],
    purchase_orders: [
        "order_date"
    ],
    quotations: [
        "quote_date"
    ],
    worker_advances: [
        "date"
    ],
    worker_payments: [
        "paid_date"
    ],
    labor_tasks: [
        "date"
    ],
    labor_advances: [
        "date"
    ]
};
function coerceDates(data, table) {
    const fields = DATE_FIELDS[table];
    if (!fields) return data;
    const out = {
        ...data
    };
    for (const field of fields){
        const v = out[field];
        if (typeof v === "string" && v) {
            out[field] = new Date(v);
        }
    }
    return out;
}
// Tables that carry created_by_email / created_by_name. The API stamps these
// from the verified JWT on every insert so the activity log can attribute each
// "Created" row to a specific user without trusting the client.
const CREATOR_TABLES = new Set([
    "invoices",
    "cashbook",
    "expenses",
    "quick_invoices",
    "quotations",
    "purchase_orders",
    "labor_tasks",
    "worker_payments"
]);
// Atomically assign the next sequential po_number on insert. The client must
// not send po_number — whatever it sends is discarded. We compute max(suffix)+1
// across ALL existing rows, then retry on P2002 if a concurrent insert beat us
// to that number.
async function createPurchaseOrderWithUniquePoNumber(data) {
    const stripped = {
        ...data
    };
    delete stripped.po_number;
    const MAX_ATTEMPTS = 12;
    let lastErr = null;
    for(let attempt = 0; attempt < MAX_ATTEMPTS; attempt++){
        const rows = await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].purchaseOrder.findMany({
            select: {
                po_number: true
            }
        });
        let max = 0;
        for (const r of rows){
            const m = /(\d+)$/.exec(r.po_number);
            if (m) {
                const n = parseInt(m[1], 10);
                if (n > max) max = n;
            }
        }
        const candidate = `PO${String(max + 1).padStart(3, "0")}`;
        try {
            return await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].purchaseOrder.create({
                // The generic /api/db route hands us a Record<string, unknown>; the
                // Prisma create input is fully typed, but here we trust the caller's
                // shape (matched to the schema) — the ergonomic alternative would be
                // duplicating field validation. Same pattern as the generic
                // `model.create({ data: stampedRow })` below.
                data: {
                    ...stripped,
                    po_number: candidate
                }
            });
        } catch (err) {
            const code = err?.code;
            if (code === "P2002") {
                lastErr = err;
                continue;
            }
            throw err;
        }
    }
    throw lastErr ?? new Error("Failed to assign unique po_number after retries");
}
// Atomically assign the next sequential invoice_number ("SSP0xx") on insert.
// The client must not send invoice_number — whatever it sends is discarded.
// Walk-in and party invoices share ONE number sequence spread across both the
// `invoices` and `quick_invoices` tables, so max(suffix)+1 is computed across
// both. Retries on P2002 if a concurrent insert (from another tab/user) beat
// us to that number — this is what actually fixes the race that let two
// invoices collide on the same client-computed number.
async function createInvoiceWithUniqueNumber(data) {
    const stripped = {
        ...data
    };
    delete stripped.invoice_number;
    const MAX_ATTEMPTS = 12;
    let lastErr = null;
    for(let attempt = 0; attempt < MAX_ATTEMPTS; attempt++){
        const [invRows, qiRows] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].invoice.findMany({
                select: {
                    invoice_number: true
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].quickInvoice.findMany({
                select: {
                    invoice_number: true
                }
            })
        ]);
        let max = 0;
        for (const r of [
            ...invRows,
            ...qiRows
        ]){
            const m = /(\d+)$/.exec(r.invoice_number);
            if (m) {
                const n = parseInt(m[1], 10);
                if (n > max) max = n;
            }
        }
        const candidate = `SSP${String(max + 1).padStart(3, "0")}`;
        try {
            return await __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].invoice.create({
                data: {
                    ...stripped,
                    invoice_number: candidate
                }
            });
        } catch (err) {
            const code = err?.code;
            if (code === "P2002") {
                lastErr = err;
                continue;
            }
            throw err;
        }
    }
    throw lastErr ?? new Error("Failed to assign unique invoice_number after retries");
}
function stampUserFields(row, table, user) {
    if (table === "activity_log") {
        return {
            ...row,
            user_id: user.id,
            user_email: user.email,
            user_name: user.name
        };
    }
    if (CREATOR_TABLES.has(table)) {
        const out = {
            ...row
        };
        if (out.created_by_email == null || out.created_by_email === "") out.created_by_email = user.email;
        if (out.created_by_name == null || out.created_by_name === "") out.created_by_name = user.name;
        return out;
    }
    return row;
}
// Recursively convert Decimal/BigInt/Date to plain JS values for JSON.
// `dateOnlyFields` are @db.Date columns that must round-trip as YYYY-MM-DD,
// not full ISO datetimes — string comparisons in callers depend on this.
function serialize(val, dateOnlyFields, parentKey) {
    if (val === null || val === undefined) return val;
    if (typeof val === "bigint") return Number(val);
    if (val !== null && typeof val === "object" && "toNumber" in val) {
        return val.toNumber();
    }
    if (val instanceof Date) {
        if (parentKey && dateOnlyFields?.has(parentKey)) {
            return val.toISOString().slice(0, 10);
        }
        return val.toISOString();
    }
    if (Array.isArray(val)) return val.map((v)=>serialize(v, dateOnlyFields));
    if (typeof val === "object") {
        const out = {};
        for (const [k, v] of Object.entries(val)){
            out[k] = serialize(v, dateOnlyFields, k);
        }
        return out;
    }
    return val;
}
function serializeForTable(data, table) {
    const fields = DATE_FIELDS[table];
    return serialize(data, fields ? new Set(fields) : undefined);
}
// Rename Prisma relation field names back to Supabase table names in response
// e.g. { head_account: {...} } → { head_accounts: {...} }
function renameRelations(data, table) {
    if (!data || typeof data !== "object") return data;
    const relMap = RELATION_MAP[table] ?? {};
    const reverseMap = {};
    for (const [supabaseName, prismaName] of Object.entries(relMap)){
        reverseMap[prismaName] = supabaseName;
    }
    if (Object.keys(reverseMap).length === 0) return data;
    if (Array.isArray(data)) return data.map((row)=>renameRelations(row, table));
    const out = {};
    for (const [k, v] of Object.entries(data)){
        const newKey = reverseMap[k] ?? k;
        out[newKey] = v;
    }
    return out;
}
async function POST(req) {
    // Auth guard — all DB operations require a valid session
    const token = req.cookies.get(__TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COOKIE_NAME"])?.value;
    const payload = token ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyToken"])(token) : null;
    if (!payload) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            data: null,
            error: {
                message: "Unauthorized"
            }
        }, {
            status: 401
        });
    }
    const authUser = {
        id: payload.sub,
        email: payload.email,
        name: payload.full_name || payload.email.split("@")[0]
    };
    const body = await req.json();
    const { table, operation, filters = [], orders = [], limit, single, data, selectAfterMutation, count, head } = body;
    const select = body.select ?? "*";
    const modelName = TABLE_MAP[table];
    if (!modelName) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            data: null,
            error: {
                message: `Unknown table: ${table}`
            }
        }, {
            status: 400
        });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const model = __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"][modelName];
    try {
        let result;
        if (operation === "select") {
            const where = buildWhere(filters, table);
            const orderBy = buildOrderBy(orders);
            const selectArgs = parseSelectFields(select, table);
            if (count === "exact" && head) {
                // COUNT query
                const cnt = await model.count({
                    where
                });
                return __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    data: null,
                    error: null,
                    count: cnt
                });
            }
            const queryArgs = {
                where,
                orderBy
            };
            if (limit != null) queryArgs.take = limit;
            if (selectArgs) {
                if ("select" in selectArgs) queryArgs.select = selectArgs.select;
                if ("include" in selectArgs) queryArgs.include = selectArgs.include;
            }
            if (single) {
                result = await model.findFirst(queryArgs);
                if (!result) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        data: null,
                        error: {
                            message: "No rows found",
                            code: "PGRST116"
                        }
                    });
                }
                result = serializeForTable(renameRelations(result, table), table);
                return __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    data: result,
                    error: null
                });
            }
            result = await model.findMany(queryArgs);
            result = serializeForTable(renameRelations(result, table), table);
            return __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                data: result,
                error: null
            });
        }
        if (operation === "insert") {
            if (Array.isArray(data)) {
                await model.createMany({
                    data: data.map((row)=>coerceDates(stampUserFields(row, table, authUser), table))
                });
                return __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    data: null,
                    error: null
                });
            }
            const stampedRow = coerceDates(stampUserFields(data ?? {}, table, authUser), table);
            const inserted = table === "purchase_orders" ? await createPurchaseOrderWithUniquePoNumber(stampedRow) : table === "invoices" ? await createInvoiceWithUniqueNumber(stampedRow) : await model.create({
                data: stampedRow
            });
            if (selectAfterMutation !== null && selectAfterMutation !== undefined) {
                // caller wants the inserted row back
                const fields = parseSelectFields(selectAfterMutation || "*", table);
                const fetchArgs = {
                    where: {
                        id: inserted.id
                    }
                };
                if (fields) {
                    if ("select" in fields) fetchArgs.select = fields.select;
                    if ("include" in fields) fetchArgs.include = fields.include;
                }
                const row = await model.findUnique(fetchArgs);
                if (single) {
                    result = serializeForTable(renameRelations(row, table), table);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        data: result,
                        error: null
                    });
                }
                result = serializeForTable(renameRelations(row, table), table);
                return __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    data: [
                        result
                    ],
                    error: null
                });
            }
            result = serializeForTable(inserted, table);
            return __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                data: result,
                error: null
            });
        }
        if (operation === "update") {
            const where = buildWhere(filters, table);
            const updateData = data ?? {};
            await model.updateMany({
                where,
                data: coerceDates(updateData, table)
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                data: null,
                error: null
            });
        }
        if (operation === "delete") {
            const where = buildWhere(filters, table);
            await model.deleteMany({
                where
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                data: null,
                error: null
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            data: null,
            error: {
                message: "Unknown operation"
            }
        }, {
            status: 400
        });
    } catch (err) {
        const code = err?.code;
        // P2002 = Prisma unique-constraint violation. Surface a clear message +
        // the conflicting field so the client can show something actionable
        // instead of a raw Prisma stack trace (e.g. duplicate invoice_number
        // from two invoices being created around the same time).
        if (code === "P2002") {
            const target = err?.meta?.target;
            const field = Array.isArray(target) ? target[0] : target;
            const message = field ? `Duplicate value for "${field}" — this ${field.replace(/_/g, " ")} already exists. Please refresh and try again.` : "Duplicate value — this record already exists. Please refresh and try again.";
            console.error(`[/api/db] ${table}.${operation} duplicate:`, field);
            return __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                data: null,
                error: {
                    message,
                    code: "P2002"
                }
            }, {
                status: 409
            });
        }
        const message = err instanceof Error ? err.message : String(err);
        console.error(`[/api/db] ${table}.${operation} error:`, message);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Star$2d$Panaflex$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            data: null,
            error: {
                message
            }
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__03g~ao7._.js.map