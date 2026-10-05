"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/lib/UserContext";
import { showToast } from "@/components/Toast";
import { KeyRound, Eye, EyeOff, Loader2, ShieldCheck } from "lucide-react";

interface UserRow {
  id: string;
  email: string;
  isAdmin: boolean;
}

interface FieldState {
  currentPassword: string;
  newPassword: string;
  showCurrent: boolean;
  showNew: boolean;
}

const defaultFields = (): FieldState => ({
  currentPassword: "",
  newPassword: "",
  showCurrent: false,
  showNew: false,
});

export default function ChangePasswordPage() {
  const userProfile = useUser();
  const router = useRouter();

  const [users, setUsers] = useState<UserRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [fields, setFields] = useState<Record<string, FieldState>>({});
  const [saving, setSaving] = useState<Record<string, boolean>>({});

  // Redirect non-admins
  useEffect(() => {
    if (userProfile !== null && !userProfile.isAdmin) {
      router.replace("/dashboard");
    }
  }, [userProfile, router]);

  useEffect(() => {
    if (!userProfile?.isAdmin) return;
    fetch("/api/admin/list-users")
      .then((r) => r.json())
      .then((d) => {
        const rows: UserRow[] = d.users ?? [];
        setUsers(rows);
        const init: Record<string, FieldState> = {};
        rows.forEach((u) => { init[u.id] = defaultFields(); });
        setFields(init);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [userProfile]);

  function setField<K extends keyof FieldState>(userId: string, key: K, value: FieldState[K]) {
    setFields((prev) => ({
      ...prev,
      [userId]: { ...(prev[userId] ?? defaultFields()), [key]: value },
    }));
  }

  async function handleSave(user: UserRow) {
    const f = fields[user.id] ?? defaultFields();
    const isSelf = user.id === userProfile?.userId;

    // Current password is only verified when changing your own account.
    if (isSelf && !f.currentPassword) {
      showToast("Please enter the current password", "err");
      return;
    }
    if (f.newPassword.length < 8) {
      showToast("New password must be at least 8 characters", "err");
      return;
    }
    if (isSelf && f.currentPassword === f.newPassword) {
      showToast("New password must differ from current password", "err");
      return;
    }

    setSaving((prev) => ({ ...prev, [user.id]: true }));
    try {
      const res = await fetch("/api/admin/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.id,
          ...(isSelf ? { currentPassword: f.currentPassword } : {}),
          newPassword: f.newPassword,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        showToast(data.error ?? "Failed to update password", "err");
      } else {
        showToast(`Password updated for ${labelFor(user)}`, "ok");
        setFields((prev) => ({ ...prev, [user.id]: defaultFields() }));
      }
    } finally {
      setSaving((prev) => ({ ...prev, [user.id]: false }));
    }
  }

  function labelFor(user: UserRow) {
    if (user.isAdmin) return "Super Admin";
    return user.email.split("@")[0];
  }

  if (userProfile === null || !userProfile.isAdmin) return null;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center"
          style={{ background: "var(--blue)", color: "white" }}
        >
          <KeyRound size={22} />
        </div>
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "var(--blue-deeper)" }}>
            Change Password
          </h1>
          <p className="text-sm" style={{ color: "#6B7280" }}>
            Verify your current password to change your own; reset sub-user passwords directly
          </p>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-16">
          <Loader2 size={32} className="animate-spin" style={{ color: "var(--blue)" }} />
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          {users.map((user) => {
            const f = fields[user.id] ?? defaultFields();
            const isSaving = saving[user.id] ?? false;
            const isSelf = user.id === userProfile?.userId;
            const canSave =
              (!isSelf || f.currentPassword.length > 0) && f.newPassword.length >= 8;

            return (
              <div
                key={user.id}
                className="rounded-2xl border p-6"
                style={{
                  background: "white",
                  borderColor: "var(--gray-200, #E5E7EB)",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                }}
              >
                {/* User info */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                    style={{
                      background: user.isAdmin ? "#0C2433" : "var(--blue)",
                    }}
                  >
                    {labelFor(user).slice(0, 2).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-sm" style={{ color: "#0C2433" }}>
                        {labelFor(user)}
                      </span>
                      {user.isAdmin && (
                        <span
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase"
                          style={{
                            background: "rgba(251,191,36,0.2)",
                            color: "#92400E",
                            border: "1px solid rgba(251,191,36,0.4)",
                          }}
                        >
                          <ShieldCheck size={10} />
                          Admin
                        </span>
                      )}
                    </div>
                    <p className="text-xs truncate" style={{ color: "#6B7280" }}>
                      {user.email}
                    </p>
                  </div>
                </div>

                {/* Current password — only required when changing your own account */}
                {isSelf ? (
                  <div className="mb-3">
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#374151" }}>
                      Current Password
                    </label>
                    <div className="relative">
                      <input
                        type={f.showCurrent ? "text" : "password"}
                        value={f.currentPassword}
                        onChange={(e) => setField(user.id, "currentPassword", e.target.value)}
                        placeholder="Enter current password"
                        className="w-full rounded-xl border px-4 py-2.5 text-sm pr-10 outline-none"
                        style={{
                          borderColor: "var(--gray-200, #E5E7EB)",
                          background: "var(--bg, #F9FAFB)",
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => setField(user.id, "showCurrent", !f.showCurrent)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 border-none bg-transparent cursor-pointer p-0"
                        style={{ color: "#9CA3AF" }}
                        tabIndex={-1}
                      >
                        {f.showCurrent ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className="text-xs mb-3" style={{ color: "#6B7280" }}>
                    Admin reset — you don&apos;t need this user&apos;s current password. The new
                    password takes effect immediately.
                  </p>
                )}

                {/* New password */}
                <div className="mb-4">
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "#374151" }}>
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      type={f.showNew ? "text" : "password"}
                      value={f.newPassword}
                      onChange={(e) => setField(user.id, "newPassword", e.target.value)}
                      onKeyDown={(e) => { if (e.key === "Enter" && canSave) handleSave(user); }}
                      placeholder="New password (min. 8 chars)"
                      className="w-full rounded-xl border px-4 py-2.5 text-sm pr-10 outline-none"
                      style={{
                        borderColor: "var(--gray-200, #E5E7EB)",
                        background: "var(--bg, #F9FAFB)",
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => setField(user.id, "showNew", !f.showNew)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 border-none bg-transparent cursor-pointer p-0"
                      style={{ color: "#9CA3AF" }}
                      tabIndex={-1}
                    >
                      {f.showNew ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => handleSave(user)}
                  disabled={isSaving || !canSave}
                  className="w-full py-2.5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 border-none cursor-pointer transition-opacity disabled:opacity-50"
                  style={{ background: "var(--blue, #1D4ED8)" }}
                >
                  {isSaving && <Loader2 size={15} className="animate-spin" />}
                  Update Password
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
