"use client";

import { useState, useEffect, useCallback } from "react";
import { useUser } from "@/lib/UserContext";
import { db } from "@/lib/db";
import { showToast } from "@/components/Toast";
import { formatCurrency } from "@/lib/helpers";
import { Plus, FolderOpen, ChevronDown, X, Trash2, Pencil } from "lucide-react";
import type { HeadAccount, Account, HeadAccountType } from "@/lib/database.types";
import { confirmDialog } from "@/components/ConfirmModal";
import { logActivity } from "@/lib/activityLog";
import { useSaving } from "@/lib/useSaving";


function normalBalanceForType(t: HeadAccountType): "debit" | "credit" {
  return t === "Liability" || t === "Revenue" ? "credit" : "debit";
}

function parseHeadType(raw: string | null | undefined): HeadAccountType {
  if (raw === "Asset" || raw === "Liability" || raw === "Revenue" || raw === "Expense") return raw;
  return "Asset";
}

function generateCode(name: string): string {
  const cleaned = name.trim().toUpperCase();
  if (!cleaned) return "";
  const words = cleaned.split(/\s+/);
  let prefix: string;
  if (words.length >= 2) {
    prefix = words.slice(0, 3).map((w) => w[0]).join("");
  } else {
    const consonants = cleaned.replace(/[AEIOU]/g, "");
    prefix = consonants.length >= 3 ? consonants.slice(0, 3) : cleaned.slice(0, 3);
  }
  return prefix;
}

export default function HeadAccountsPage() {
  const userProfile = useUser();
  const { saving, run } = useSaving();
  const [heads, setHeads] = useState<HeadAccount[]>([]);
  const [subAccounts, setSubAccounts] = useState<Record<string, Account[]>>({});
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [showModal, setShowModal] = useState(false);
  const [formName, setFormName] = useState("");
  const [formType, setFormType] = useState<HeadAccountType>("Asset");
  const [generatedCode, setGeneratedCode] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    const { data: headData } = await db
      .from("head_accounts")
      .select("*")
      .order("created_at", { ascending: true });
    if (headData) {
      setHeads(headData);
      const { data: accts } = await db
        .from("accounts")
        .select("*")
        .order("name");
      if (accts) {
        const grouped: Record<string, Account[]> = {};
        accts.forEach((a: Account) => {
          if (!grouped[a.head_id]) grouped[a.head_id] = [];
          grouped[a.head_id].push(a);
        });
        setSubAccounts(grouped);
      }
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  function handleNameChange(name: string) {
    setFormName(name);
    const prefix = generateCode(name);
    if (prefix) {
      const existingCount = heads.filter((h) =>
        h.code.toUpperCase().startsWith(prefix)
      ).length;
      const nextNum = editingId ? existingCount : existingCount + 1;
      setGeneratedCode(`${prefix}-${String(nextNum).padStart(3, "0")}`);
    } else {
      setGeneratedCode("");
    }
  }

  async function handleSave() {
    if (!formName.trim()) {
      showToast("Enter head account name", "err");
      return;
    }

    if (editingId) {
      const bal = normalBalanceForType(formType);
      const { error } = await db.from("head_accounts").update({
        name: formName.trim(),
        type: formType,
        bal,
      }).eq("id", editingId);
      if (error) { showToast(error.message, "err"); return; }
      showToast("Head Account updated", "ok");
    } else {
      const code = generatedCode || generateCode(formName) + "-001";
      const bal = normalBalanceForType(formType);
      const { error } = await db.from("head_accounts").insert({
        code,
        name: formName.trim(),
        type: formType,
        bal,
      });
      if (error) { showToast(error.message, "err"); return; }
      showToast("Head Account saved", "ok");
    }

    setShowModal(false);
    setFormName("");
    setFormType("Asset");
    setGeneratedCode("");
    setEditingId(null);
    fetchData();
  }

  async function handleDelete(id: string) {
    const subs = subAccounts[id] || [];
    if (subs.length > 0) {
      showToast("Cannot delete — has linked accounts", "err");
      return;
    }
    const head = heads.find((h) => h.id === id);
    const ok = await confirmDialog({
      title: "Delete head account?",
      message: head ? `Delete "${head.name}" (${head.code})? This cannot be undone.` : "Delete this head account?",
      tone: "danger",
    });
    if (!ok) return;
    const { error } = await db.from("head_accounts").delete().eq("id", id);
    if (error) { showToast(error.message, "err"); return; }
    if (head) {
      await logActivity({
        action: "delete",
        entityType: "head_account",
        entityId: id,
        title: "Head Account Deleted",
        subtitle: `${head.code} — ${head.name}`,
        metadata: { type: head.type },
      });
    }
    showToast("Head Account deleted", "ok");
    fetchData();
  }

  function openEdit(h: HeadAccount) {
    setEditingId(h.id);
    setFormName(h.name);
    setFormType(parseHeadType(h.type));
    setGeneratedCode(h.code);
    setShowModal(true);
  }

  function toggleExpand(id: string) {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-5 gap-3 flex-wrap">
        <div>
          <h1 className="text-xl font-extrabold" style={{ color: "var(--gray-900)" }}>Head Accounts</h1>
          <p className="text-xs mt-0.5" style={{ color: "var(--gray-800)" }}>Main ledger parent categories</p>
        </div>
        <button
          onClick={() => { setShowModal(true); setFormName(""); setFormType("Asset"); setGeneratedCode(""); setEditingId(null); }}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[9px] border-none text-[12.5px] font-semibold cursor-pointer text-white transition-all"
          style={{ background: "linear-gradient(135deg, var(--blue-deeper), var(--blue))", boxShadow: "0 2px 10px rgba(21,128,61,.28)" }}
        >
          <Plus size={14} /> Add Head
        </button>
      </div>

      {/* Head Accounts List */}
      {heads.length === 0 ? (
        <div className="bg-white rounded-[14px] border border-[var(--gray-100)] p-8 text-center" style={{ boxShadow: "var(--shadow-sm)" }}>
          <FolderOpen size={32} className="mx-auto mb-2" style={{ color: "var(--gray-200)" }} />
          <p className="text-[13px] font-medium" style={{ color: "var(--gray-800)" }}>No head accounts yet. Add your first one.</p>
        </div>
      ) : (
        heads.map((h) => {
          const subs = subAccounts[h.id] || [];
          const total = subs.reduce((s, a) => s + Number(a.balance), 0);

          return (
            <div key={h.id} className="mb-1">
              {/* Head row */}
              <div className="flex items-center justify-between px-4 py-3 bg-white rounded-[9px] border border-[var(--gray-100)] transition-all hover:border-[var(--blue)] hover:bg-[var(--blue-pale)] gap-3">
                <div
                  className="flex items-center gap-2.5 text-[13px] font-semibold flex-1 cursor-pointer"
                  style={{ color: "var(--gray-700)" }}
                  onClick={() => toggleExpand(h.id)}
                >
                  <FolderOpen size={14} />
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded" style={{ background: "var(--blue-light)", color: "var(--blue-deeper)" }}>
                    {h.code}
                  </span>
                  {h.name}
                  <span className="text-[10.5px] ml-1 px-1.5 py-0.5 rounded-full font-medium" style={{ background: "var(--gray-100)", color: "var(--gray-800)" }}>
                    {subs.length} accounts
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[13.5px] font-bold font-mono" style={{ color: subs.length > 0 ? "var(--blue-deeper)" : "var(--gray-300)" }}>
                    {subs.length > 0 ? formatCurrency(total) : "—"}
                  </span>
                  <button onClick={() => openEdit(h)}
                    className="w-7 h-7 rounded-[6px] border-[1.5px] flex items-center justify-center cursor-pointer transition-all bg-white"
                    style={{ borderColor: "var(--gray-200)", color: "var(--blue-deeper)" }}>
                    <Pencil size={12} />
                  </button>
                  {userProfile?.isAdmin && (
                    <button onClick={() => handleDelete(h.id)}
                      className="w-7 h-7 rounded-[6px] border-[1.5px] flex items-center justify-center cursor-pointer transition-all bg-white"
                      style={{ borderColor: "var(--gray-200)", color: "var(--red)" }}>
                      <Trash2 size={12} />
                    </button>
                  )}
                  <ChevronDown
                    size={14}
                    className="cursor-pointer"
                    onClick={() => toggleExpand(h.id)}
                    style={{ color: "var(--gray-800)", transform: expanded[h.id] ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}
                  />
                </div>
              </div>

              {/* Sub accounts */}
              {expanded[h.id] && (
                <div className="border border-[var(--gray-100)] rounded-[9px] mb-2 overflow-hidden">
                  {subs.length === 0 ? (
                    <div className="text-center py-4 text-xs" style={{ color: "var(--gray-800)" }}>
                      No accounts under this head
                    </div>
                  ) : (
                    subs.map((s) => (
                      <div key={s.id} className="flex justify-between items-center px-4 py-2.5 border-b border-[var(--gray-100)] last:border-b-0 text-[12.5px] gap-2 flex-wrap" style={{ color: "var(--gray-700)" }}>
                        <div className="flex flex-col gap-0.5">
                          <span className="font-semibold" style={{ color: "var(--gray-900)" }}>{s.name}</span>
                          <span className="text-[11px]" style={{ color: "var(--gray-800)" }}>{s.phone}</span>
                        </div>
                        <span className={`font-bold font-mono ${s.bal_type === "credit" ? "text-[var(--red)]" : "text-[var(--green)]"}`}>
                          {s.bal_type === "credit" ? "− " : ""}{formatCurrency(Number(s.balance))}
                        </span>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          );
        })
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[800] flex items-start justify-center backdrop-blur-sm pt-10 px-4 overflow-y-auto"
          style={{ background: "rgba(10,30,50,.3)" }}
          >
          <div className="bg-white rounded-[20px] w-[440px] max-w-full overflow-hidden animate-slide-up"
            style={{ boxShadow: "var(--shadow-lg)" }}>
            <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--gray-100)]">
              <h2 className="text-[15px] font-bold">{editingId ? "Edit Head Account" : "Add Head Account"}</h2>
              <button onClick={() => { setShowModal(false); setEditingId(null); setFormType("Asset"); }}
                className="w-7 h-7 rounded-full flex items-center justify-center border-none cursor-pointer transition-all"
                style={{ background: "var(--gray-100)", color: "var(--gray-800)" }}>
                <X size={12} />
              </button>
            </div>
            <div className="p-5">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold tracking-[1.2px] uppercase" style={{ color: "var(--blue-deeper)" }}>Head Account Name</label>
                  <input
                    value={formName}
                    onChange={(e) => handleNameChange(e.target.value)}
                    className="border-[1.5px] rounded-[9px] px-3 py-2.5 text-[14px] outline-none transition-all"
                    style={{ borderColor: "var(--gray-200)", background: "var(--gray-50)" }}
                    placeholder="e.g. Government, Suppliers, Revenue..."
                    autoFocus
                    onFocus={(e) => { e.target.style.borderColor = "var(--blue)"; e.target.style.background = "#fff"; e.target.style.boxShadow = "0 0 0 3px rgba(21,128,61,.08)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "var(--gray-200)"; e.target.style.background = "var(--gray-50)"; e.target.style.boxShadow = "none"; }}
                    onKeyDown={(e) => { if (e.key === "Enter") handleSave(); }}
                  />
                </div>

                {/* Auto-generated code preview */}
                {generatedCode && (
                  <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-[9px]"
                    style={{ background: "var(--blue-pale)", border: "1.5px solid var(--blue-light)" }}>
                    <span className="text-[10px] font-bold tracking-[1px] uppercase" style={{ color: "var(--gray-800)" }}>
                      {editingId ? "Code:" : "Auto ID:"}
                    </span>
                    <span className="font-mono text-[14px] font-extrabold" style={{ color: "var(--blue-deeper)" }}>
                      {generatedCode}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-end gap-2 px-5 py-3.5 border-t border-[var(--gray-100)]">
              <button onClick={() => { setShowModal(false); setEditingId(null); setFormType("Asset"); }}
                className="px-4 py-2 rounded-[9px] text-[12.5px] font-semibold border-[1.5px] cursor-pointer bg-white transition-all"
                style={{ borderColor: "var(--gray-200)", color: "var(--blue-deeper)" }}>
                Cancel
              </button>
              <button onClick={() => run(handleSave)} disabled={saving}
                className="px-4 py-2 rounded-[9px] text-[12.5px] font-semibold border-none cursor-pointer text-white transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ background: "linear-gradient(135deg, var(--blue-deeper), var(--blue))" }}>
                {saving ? "Saving…" : (editingId ? "Update" : "Save Head")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
