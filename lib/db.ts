type Filter = { type: string; col: string; val: unknown };
type Order  = { col: string; ascending: boolean };

// Pragmatic typing: this client doesn't know the row shape of each table, so
// `data` flows through as `any` and callers either type-assert or rely on the
// default `any` inference. The error envelope is properly typed.
export type DbError = { message: string; code?: string };
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DbResult<T = any> = { data: T; error: null } | { data: null; error: DbError };

/** Invoice header, canonical items, and stock are committed together. */
export async function saveInvoice(invoice: Record<string, unknown>, items: Record<string, unknown>[], invoiceId?: string): Promise<DbResult> {
  try {
    const response = await fetch("/api/db", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ table: "invoices", operation: "save_invoice", data: invoice, items, invoiceId }),
    });
    return await response.json();
  } catch {
    return { data: null, error: { message: "Could not confirm invoice save. Reload the invoice list before trying again." } };
  }
}

interface DbPayload {
  table: string;
  operation: "select" | "insert" | "update" | "delete";
  select?: string;
  filters: Filter[];
  orders: Order[];
  limit?: number | null;
  single?: boolean;
  data?: Record<string, unknown> | Record<string, unknown>[];
  selectAfterMutation?: string | null;
  count?: string | null;
  head?: boolean;
}

class QueryBuilder {
  private _select = "*";
  private _filters: Filter[] = [];
  private _orders: Order[] = [];
  private _limit: number | null = null;
  private _single = false;
  private _operation: "select" | "insert" | "update" | "delete";
  private _data: Record<string, unknown> | Record<string, unknown>[] | null = null;
  private _selectAfterMutation: string | null = null;
  private _count: string | null = null;
  private _head = false;

  constructor(
    private table: string,
    operation: "select" | "insert" | "update" | "delete" = "select"
  ) {
    this._operation = operation;
  }

  select(fields = "*", opts?: { count?: string; head?: boolean }) {
    if (this._operation === "select") {
      this._select = fields;
      if (opts?.count) this._count = opts.count;
      if (opts?.head) this._head = true;
    } else {
      this._selectAfterMutation = fields;
    }
    return this;
  }

  eq(col: string, val: unknown)   { this._filters.push({ type: "eq",   col, val }); return this; }
  neq(col: string, val: unknown)  { this._filters.push({ type: "neq",  col, val }); return this; }
  in(col: string, val: unknown[]) { this._filters.push({ type: "in",   col, val }); return this; }
  ilike(col: string, val: string) { this._filters.push({ type: "ilike",col, val }); return this; }
  is(col: string, val: null)      { this._filters.push({ type: "is",   col, val }); return this; }
  gte(col: string, val: unknown)  { this._filters.push({ type: "gte",  col, val }); return this; }
  lte(col: string, val: unknown)  { this._filters.push({ type: "lte",  col, val }); return this; }

  order(col: string, opts?: { ascending?: boolean }) {
    this._orders.push({ col, ascending: opts?.ascending ?? true });
    return this;
  }

  limit(n: number) { this._limit = n; return this; }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  single(): Promise<{ data: any; error: DbError | null; count?: number }> {
    this._single = true;
    return this._execute();
  }

  then(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolve: (value: { data: any; error: DbError | null; count?: number }) => unknown,
    reject?: (reason: unknown) => unknown
  ) {
    return this._execute().then(resolve as (v: unknown) => unknown, reject);
  }

  catch(reject: (reason: unknown) => unknown) {
    return this._execute().catch(reject);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private async _execute(): Promise<{ data: any; error: DbError | null; count?: number }> {
    const payload: DbPayload = {
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
      head: this._head,
    };

    const res = await fetch("/api/db", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    return res.json();
  }
}

class MutationBuilder extends QueryBuilder {
  constructor(table: string, operation: "insert" | "update" | "delete", data?: Record<string, unknown> | Record<string, unknown>[]) {
    super(table, operation);
    if (data) (this as unknown as { _data: Record<string, unknown> | Record<string, unknown>[] })._data = data;
  }
}

function makeInsert(table: string, data: Record<string, unknown> | Record<string, unknown>[]) {
  return new MutationBuilder(table, "insert", data);
}

function makeUpdate(table: string, data: Record<string, unknown>) {
  return new MutationBuilder(table, "update", data);
}

function makeDelete(table: string) {
  return new MutationBuilder(table, "delete");
}

const authClient = {
  getUser: async () => {
    try {
      const res = await fetch("/api/auth/session");
      if (!res.ok) return { data: { user: null }, error: { message: "Unauthorized" } };
      const json = await res.json();
      return { data: { user: json.user }, error: null };
    } catch (e) {
      return { data: { user: null }, error: e };
    }
  },

  getSession: async () => {
    try {
      const res = await fetch("/api/auth/session");
      if (!res.ok) return { data: { session: null }, error: { message: "Unauthorized" } };
      const json = await res.json();
      return { data: { session: json.session }, error: null };
    } catch (e) {
      return { data: { session: null }, error: e };
    }
  },

  signInWithPassword: async ({ email, password }: { email: string; password: string }): Promise<{ error: DbError | null }> => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        const json = await res.json();
        return { error: { message: json.error ?? "Login failed" } };
      }
      return { error: null };
    } catch (e) {
      return { error: { message: e instanceof Error ? e.message : "Network error" } };
    }
  },

  signOut: async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } catch {
      // ignore
    }
    return { error: null };
  },
};

export const db = {
  from: (table: string) => ({
    select: (fields = "*", opts?: { count?: string; head?: boolean }) =>
      new QueryBuilder(table).select(fields, opts),
    insert: (data: Record<string, unknown> | Record<string, unknown>[]) =>
      makeInsert(table, data),
    update: (data: Record<string, unknown>) =>
      makeUpdate(table, data),
    delete: () =>
      makeDelete(table),
  }),
  auth: authClient,
};
