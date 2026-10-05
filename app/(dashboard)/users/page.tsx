"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/lib/UserContext";
import { showToast } from "@/components/Toast";
import { DT } from "@/lib/dataTableStyles";
import { Plus, Trash2, Loader2, Users, X, Eye, EyeOff, Pencil } from "lucide-react";
import { formatDate } from "@/lib/helpers";

const MAX_SUB_USERS = 5;

interface SubUser {
  id: string;
  user_id: string;
  email: string;
  full_name: string;
  is_active: boolean;
  created_at: string;
}

export default function UsersPage() {
  const profile = useUser();
  const router = useRouter();
  const [users, setUsers] = useState<SubUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [creating, setCreating] = useState(false);
  const [formError, setFormError] = useState("");

  // Edit modal — admin-direct edit of sub-user name and/or password (CR-15)
  const [editTarget, setEditTarget] = useState<SubUser | null>(null);
  const [editFullName, setEditFullName] = useState("");
  const [editPassword, setEditPassword] = useState("");
  const [editShowPassword, setEditShowPassword] = useState(false);
  const [editSaving, setEditSaving] = useState(false);
  const [editError, setEditError] = useState("");

  useEffect(() => {
    if (profile !== null && profile.role !== "super_admin") {
      router.replace("/quick-invoice");
    }
  }, [profile, router]);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    const res = await fetch("/api/users");
    const json = await res.json();
    if (!res.ok) {
      showToast(json.error ?? "Failed to load users", "err");
    } else {
      setUsers(json.users ?? []);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (profile?.role === "super_admin") {
      void fetchUsers();
    }
  }, [profile, fetchUsers]);

  function openModal() {
    setFullName("");
    setEmail("");
    setPassword("");
    setFormError("");
    setShowPassword(false);
    setShowModal(true);
  }

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setFormError("");
    if (!fullName.trim()) { setFormError("Full name is required"); return; }
    if (!email.trim() || !email.includes("@")) { setFormError("Valid email is required"); return; }
    if (password.length < 6) { setFormError("Password must be at least 6 characters"); return; }

    setCreating(true);
    const res = await fetch("/api/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: email.trim(), password, fullName: fullName.trim() }),
    });
    const json = await res.json();
    if (!res.ok) {
      setFormError(json.error ?? "Failed to create user");
      setCreating(false);
      return;
    }

    showToast(`User ${fullName} created`, "ok");
    setShowModal(false);
    setCreating(false);
    void fetchUsers();
  }

  function openEdit(u: SubUser) {
    setEditTarget(u);
    setEditFullName(u.full_name);
    setEditPassword("");
    setEditShowPassword(false);
    setEditError("");
  }

  function closeEdit() {
    if (editSaving) return;
    setEditTarget(null);
    setEditPassword("");
    setEditError("");
  }

  async function handleEditSave(e: React.FormEvent) {
    e.preventDefault();
    if (!editTarget) return;
    setEditError("");

    const trimmedName = editFullName.trim();
    const nameChanged = trimmedName.length > 0 && trimmedName !== editTarget.full_name;
    const passwordChanged = editPassword.length > 0;

    if (!nameChanged && !passwordChanged) {
      setEditError("Change the name or enter a new password to save.");
      return;
    }
    if (nameChanged && trimmedName.length === 0) {
      setEditError("Full name cannot be empty.");
      return;
    }
    if (passwordChanged && editPassword.length < 6) {
      setEditError("Password must be at least 6 characters.");
      return;
    }

    setEditSaving(true);
    const body: { userId: string; fullName?: string; password?: string } = { userId: editTarget.user_id };
    if (nameChanged) body.fullName = trimmedName;
    if (passwordChanged) body.password = editPassword;

    const res = await fetch("/api/users", {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    });
    const json = await res.json();
    if (!res.ok) {
      setEditError(json.error ?? "Failed to update user");
      setEditSaving(false);
      return;
    }

    const parts: string[] = [];
    if (nameChanged) parts.push("name");
    if (passwordChanged) parts.push("password");
    showToast(`Updated ${parts.join(" and ")} for ${trimmedName || editTarget.full_name}`, "ok");
    setEditSaving(false);
    setEditTarget(null);
    setEditPassword("");
    void fetchUsers();
  }

  async function handleDelete(u: SubUser) {
    if (!confirm(`Delete ${u.full_name} (${u.email})? This cannot be undone.`)) return;
    setDeletingId(u.user_id);
    const res = await fetch("/api/users", {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ userId: u.user_id }),
    });
    const json = await res.json();
    if (!res.ok) showToast(json.error ?? "Failed to delete user", "err");
    else { showToast("User deleted", "ok"); void fetchUsers(); }
    setDeletingId(null);
  }

  if (profile === null || profile.role !== "super_admin") return null;

  const canCreate = users.length < MAX_SUB_USERS;

  const sm = "border border-[var(--gray-200)] rounded-[8px] px-3 py-2.5 text-[13px] outline-none bg-white focus:border-[var(--blue)] w-full transition-all";

  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6 gap-3 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--blue-light)" }}>
            <Users size={20} style={{ color: "var(--blue-deeper)" }} />
          </div>
          <div>
            <h1 className="text-xl font-extrabold m-0" style={{ color: "var(--gray-900)" }}>Sub Users</h1>
            <p className="text-xs m-0 mt-0.5" style={{ color: "var(--gray-700)" }}>
              {users.length} / {MAX_SUB_USERS} users · Access limited to Parties, Walk-in Invoice and Cash Book (tables and entry only)
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={openModal}
          disabled={!canCreate}
          title={!canCreate ? `Maximum ${MAX_SUB_USERS} sub-users reached` : "Create new sub-user"}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[9px] border-none text-[12.5px] font-semibold cursor-pointer text-white disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ background: "linear-gradient(135deg, var(--blue-deeper), var(--blue))", boxShadow: "0 2px 10px rgba(29,78,216,.28)" }}
        >
          <Plus size={14} /> Create User
        </button>
      </div>

      {/* Slot bar */}
      <div className="flex gap-1.5 mb-5 flex-wrap">
        {Array.from({ length: MAX_SUB_USERS }).map((_, i) => (
          <div
            key={i}
            className="h-2 rounded-full flex-1 min-w-[24px]"
            style={{
              background: i < users.length ? "var(--blue-deeper)" : "var(--gray-200)",
              transition: "background 0.2s",
            }}
          />
        ))}
      </div>

      {loading ? (
        <div className="bg-white rounded-[14px] border border-[var(--gray-100)] py-14 text-center" style={{ boxShadow: "var(--shadow-sm)" }}>
          <Loader2 size={22} className="animate-spin mx-auto" style={{ color: "var(--gray-300)" }} />
        </div>
      ) : users.length === 0 ? (
        <div className="bg-white rounded-[14px] border border-[var(--gray-100)] py-14 text-center" style={{ boxShadow: "var(--shadow-sm)" }}>
          <Users size={32} className="mx-auto mb-3" style={{ color: "var(--gray-200)" }} />
          <p className="text-[13px] m-0" style={{ color: "var(--gray-700)" }}>No sub-users yet. Create one to get started.</p>
        </div>
      ) : (
        <div className="bg-white rounded-[14px] border border-[var(--gray-100)] overflow-hidden" style={{ boxShadow: "var(--shadow-sm)" }}>
          <div className="overflow-x-auto">
            <table className={`${DT.table} min-w-[560px]`}>
              <thead>
                <tr>
                  {["#", "Name", "Email", "Created", "Actions"].map((h) => (
                    <th key={h} className={`${DT.th} ${h === "Actions" ? "text-center" : "text-left"}`} style={DT.thStyle}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {users.map((u, idx) => (
                  <tr key={u.user_id} className={DT.row}>
                    <td className={`${DT.td} font-mono text-[11px]`} style={{ color: "var(--gray-500)", width: 40 }}>{idx + 1}</td>
                    <td className={`${DT.td} ${DT.cellPrimary}`} style={{ color: "var(--gray-900)" }}>
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-extrabold text-white shrink-0"
                          style={{ background: "var(--blue-deeper)" }}>
                          {u.full_name.slice(0, 2).toUpperCase()}
                        </div>
                        {u.full_name}
                      </div>
                    </td>
                    <td className={`${DT.td} ${DT.cellBody}`} style={{ color: "var(--gray-700)" }}>{u.email}</td>
                    <td className={`${DT.td} ${DT.cellBody}`} style={{ color: "var(--gray-600)" }}>{formatDate(u.created_at.split("T")[0])}</td>
                    <td className={`${DT.td} text-center`}>
                      <div className="inline-flex gap-1.5 justify-center">
                        <button
                          type="button"
                          onClick={() => openEdit(u)}
                          disabled={deletingId !== null || editSaving}
                          title="Edit name or password"
                          className="inline-flex items-center justify-center w-8 h-8 rounded-[8px] border-[1.5px] cursor-pointer transition-all hover:bg-[var(--blue-pale)] disabled:opacity-40"
                          style={{ borderColor: "var(--gray-200)", color: "var(--blue-deeper)" }}
                        >
                          <Pencil size={13} />
                        </button>
                        <button
                          type="button"
                          onClick={() => void handleDelete(u)}
                          disabled={deletingId !== null}
                          title="Delete user"
                          className="inline-flex items-center justify-center w-8 h-8 rounded-[8px] border-[1.5px] cursor-pointer transition-all hover:bg-[var(--red-light)] disabled:opacity-40"
                          style={{ borderColor: "var(--gray-200)", color: "var(--red)" }}
                        >
                          {deletingId === u.user_id ? <Loader2 size={13} className="animate-spin" /> : <Trash2 size={13} />}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Info card */}
      <div className="mt-5 rounded-[12px] border border-[var(--gray-100)] bg-white px-4 py-3 text-[11.5px]" style={{ color: "var(--gray-600)", boxShadow: "var(--shadow-xs)" }}>
        <strong style={{ color: "var(--gray-900)" }}>Sub-user access:</strong> Can only open the Walk-In Invoice page. All other sections (Dashboard, Accounts, Reports, etc.) are blocked.
      </div>

      {/* Edit modal — admin-direct name/password update (CR-15) */}
      {editTarget && (
        <div className="fixed inset-0 z-[850] flex items-center justify-center p-4" style={{ background: "rgba(10,30,50,.45)" }}>
          <button type="button" aria-label="Close"
            className="absolute inset-0 border-none cursor-default" style={{ background: "transparent" }}
            onClick={closeEdit} />
          <div className="relative z-10 w-full max-w-[420px] bg-white rounded-[14px] border border-[var(--gray-100)] overflow-hidden"
            style={{ boxShadow: "var(--shadow-lg)" }}
            onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--gray-100)]" style={{ background: "var(--blue-deeper)" }}>
              <div>
                <h3 className="text-[14px] font-extrabold text-white m-0">Edit Sub-User</h3>
                <p className="text-[11px] text-white/70 m-0 mt-0.5">{editTarget.email}</p>
              </div>
              <button type="button" disabled={editSaving} onClick={closeEdit}
                className="w-8 h-8 rounded-[8px] border-none cursor-pointer flex items-center justify-center text-white hover:bg-white/10 transition-all disabled:opacity-40"
                style={{ background: "transparent" }}>
                <X size={16} />
              </button>
            </div>

            <form onSubmit={(e) => void handleEditSave(e)} className="px-5 py-4 space-y-3.5">
              {editError && (
                <div className="px-3 py-2 rounded-[8px] text-[12px] font-semibold"
                  style={{ background: "var(--red-light)", color: "var(--red)", border: "1px solid #FCA5A5" }}>
                  {editError}
                </div>
              )}
              <div>
                <label className="block text-[10px] font-bold tracking-[1.2px] uppercase mb-1.5" style={{ color: "var(--blue-deeper)" }}>Full Name</label>
                <input className={sm}
                  value={editFullName}
                  onChange={(e) => setEditFullName(e.target.value)}
                  style={{ color: "var(--gray-900)" }} />
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-[1.2px] uppercase mb-1.5" style={{ color: "var(--blue-deeper)" }}>
                  New Password <span className="font-normal normal-case opacity-70">(leave blank to keep current)</span>
                </label>
                <div className="relative">
                  <input
                    type={editShowPassword ? "text" : "password"}
                    className={sm}
                    value={editPassword}
                    onChange={(e) => setEditPassword(e.target.value)}
                    placeholder="Min 6 characters"
                    autoComplete="new-password"
                    style={{ color: "var(--gray-900)", paddingRight: "2.5rem" }} />
                  <button type="button" onClick={() => setEditShowPassword((v) => !v)}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 border-none bg-transparent cursor-pointer p-0.5"
                    style={{ color: "var(--gray-400)" }}>
                    {editShowPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
                <p className="text-[10.5px] mt-1" style={{ color: "var(--gray-700)" }}>
                  You don&apos;t need the user&apos;s current password — admin reset takes effect immediately.
                </p>
              </div>

              <div className="flex justify-end gap-2 pt-1">
                <button type="button" disabled={editSaving} onClick={closeEdit}
                  className="px-4 py-2 rounded-[8px] text-[12px] font-semibold border-[1.5px] bg-white cursor-pointer disabled:opacity-50"
                  style={{ borderColor: "var(--gray-200)", color: "var(--gray-800)" }}>
                  Cancel
                </button>
                <button type="submit" disabled={editSaving}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[8px] text-[12px] font-semibold border-none text-white cursor-pointer disabled:opacity-60"
                  style={{ background: "linear-gradient(135deg, var(--blue-deeper), var(--blue))" }}>
                  {editSaving ? <><Loader2 size={13} className="animate-spin" /> Saving…</> : "Save changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Create modal */}
      {showModal && (
        <div className="fixed inset-0 z-[850] flex items-center justify-center p-4" style={{ background: "rgba(10,30,50,.45)" }}>
          <button
            type="button"
            aria-label="Close"
            className="absolute inset-0 border-none cursor-default"
            style={{ background: "transparent" }}
            onClick={() => { if (!creating) setShowModal(false); }}
          />
          <div
            className="relative z-10 w-full max-w-[420px] bg-white rounded-[14px] border border-[var(--gray-100)] overflow-hidden"
            style={{ boxShadow: "var(--shadow-lg)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--gray-100)]" style={{ background: "var(--blue-deeper)" }}>
              <div>
                <h3 className="text-[14px] font-extrabold text-white m-0">Create Sub-User</h3>
                <p className="text-[11px] text-white/70 m-0 mt-0.5">{users.length} / {MAX_SUB_USERS} slots used</p>
              </div>
              <button
                type="button"
                disabled={creating}
                onClick={() => setShowModal(false)}
                className="w-8 h-8 rounded-[8px] border-none cursor-pointer flex items-center justify-center text-white hover:bg-white/10 transition-all disabled:opacity-40"
                style={{ background: "transparent" }}
              >
                <X size={16} />
              </button>
            </div>

            <form onSubmit={(e) => void handleCreate(e)} className="px-5 py-4 space-y-3.5">
              {formError && (
                <div
                  className="px-3 py-2 rounded-[8px] text-[12px] font-semibold"
                  style={{ background: "var(--red-light)", color: "var(--red)", border: "1px solid #FCA5A5" }}
                >
                  {formError}
                </div>
              )}
              <div>
                <label className="block text-[10px] font-bold tracking-[1.2px] uppercase mb-1.5" style={{ color: "var(--blue-deeper)" }}>Full Name</label>
                <input
                  className={sm}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Ahmed Raza"
                  style={{ color: "var(--gray-900)" }}
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-[1.2px] uppercase mb-1.5" style={{ color: "var(--blue-deeper)" }}>Email</label>
                <input
                  type="email"
                  className={sm}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="user@example.com"
                  style={{ color: "var(--gray-900)" }}
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-[1.2px] uppercase mb-1.5" style={{ color: "var(--blue-deeper)" }}>Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className={sm}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Min 6 characters"
                    style={{ color: "var(--gray-900)", paddingRight: "2.5rem" }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 border-none bg-transparent cursor-pointer p-0.5"
                    style={{ color: "var(--gray-400)" }}
                  >
                    {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-1">
                <button
                  type="button"
                  disabled={creating}
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-[8px] text-[12px] font-semibold border-[1.5px] bg-white cursor-pointer disabled:opacity-50"
                  style={{ borderColor: "var(--gray-200)", color: "var(--gray-800)" }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={creating}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[8px] text-[12px] font-semibold border-none text-white cursor-pointer disabled:opacity-60"
                  style={{ background: "linear-gradient(135deg, var(--blue-deeper), var(--blue))" }}
                >
                  {creating ? <><Loader2 size={13} className="animate-spin" /> Creating…</> : <><Plus size={13} /> Create</>}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
