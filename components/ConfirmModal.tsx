"use client";

import { useEffect, useRef, useState } from "react";
import { AlertTriangle, X, Loader2 } from "lucide-react";

export type ConfirmTone = "danger" | "warn" | "info";

interface ConfirmOptions {
  title: string;
  message: string;
  details?: string;
  confirmText?: string;
  cancelText?: string;
  tone?: ConfirmTone;
}

interface PendingConfirm extends ConfirmOptions {
  resolve: (ok: boolean) => void;
}

let openConfirmFn: (opts: ConfirmOptions) => Promise<boolean> = () =>
  Promise.resolve(false);

export function confirmDialog(opts: ConfirmOptions): Promise<boolean> {
  return openConfirmFn(opts);
}

const TONE: Record<ConfirmTone, { bg: string; color: string; border: string; btn: string; btnHover: string }> = {
  danger: { bg: "#FEF2F2", color: "#B91C1C", border: "#FECACA", btn: "#DC2626", btnHover: "#B91C1C" },
  warn:   { bg: "#FFFBEB", color: "#B45309", border: "#FED7AA", btn: "#D97706", btnHover: "#B45309" },
  info:   { bg: "#EFF6FF", color: "#1D4ED8", border: "#BFDBFE", btn: "#2563EB", btnHover: "#1D4ED8" },
};

export default function ConfirmModal() {
  const [pending, setPending] = useState<PendingConfirm | null>(null);
  const [busy, setBusy] = useState(false);
  const cancelBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    openConfirmFn = (opts: ConfirmOptions) =>
      new Promise<boolean>((resolve) => {
        setBusy(false);
        setPending({ ...opts, resolve });
      });
  }, []);

  useEffect(() => {
    if (!pending) return;
    cancelBtn.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (busy) return;
      if (e.key === "Escape") finish(false);
      if (e.key === "Enter") finish(true);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pending, busy]);

  function finish(ok: boolean) {
    if (!pending) return;
    if (ok) setBusy(true);
    pending.resolve(ok);
    if (!ok) setPending(null);
    else setTimeout(() => setPending(null), 0);
  }

  if (!pending) return null;

  const tone = TONE[pending.tone ?? "danger"];
  const confirmText = pending.confirmText ?? "Delete";
  const cancelText = pending.cancelText ?? "Cancel";

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={(e) => { if (e.target === e.currentTarget && !busy) finish(false); }}
      style={{
        position: "fixed", inset: 0, zIndex: 9998,
        background: "rgba(15, 23, 42, 0.55)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 16,
      }}
    >
      <div
        style={{
          width: "100%", maxWidth: 440,
          background: "white", borderRadius: 16,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "16px 18px",
            display: "flex", alignItems: "center", gap: 12,
            borderBottom: `1px solid ${tone.border}`,
            background: tone.bg,
          }}
        >
          <div
            style={{
              width: 36, height: 36, borderRadius: 10,
              background: "white", color: tone.color,
              display: "flex", alignItems: "center", justifyContent: "center",
              border: `1px solid ${tone.border}`,
            }}
          >
            <AlertTriangle size={18} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 15, fontWeight: 800, color: tone.color }}>
              {pending.title}
            </div>
          </div>
          <button
            onClick={() => !busy && finish(false)}
            disabled={busy}
            aria-label="Close"
            style={{
              background: "transparent", border: "none", cursor: busy ? "not-allowed" : "pointer",
              color: tone.color, padding: 4, borderRadius: 6, opacity: busy ? 0.5 : 1,
            }}
          >
            <X size={16} />
          </button>
        </div>

        <div style={{ padding: "18px" }}>
          <div style={{ fontSize: 13.5, color: "var(--gray-700)", lineHeight: 1.55 }}>
            {pending.message}
          </div>
          {pending.details && (
            <div
              style={{
                marginTop: 10, padding: "10px 12px", borderRadius: 8,
                background: "var(--gray-50)", border: "1px solid var(--gray-200)",
                fontSize: 12, color: "var(--gray-600)", whiteSpace: "pre-wrap",
              }}
            >
              {pending.details}
            </div>
          )}
        </div>

        <div
          style={{
            padding: "12px 18px 18px",
            display: "flex", justifyContent: "flex-end", gap: 8,
          }}
        >
          <button
            ref={cancelBtn}
            onClick={() => finish(false)}
            disabled={busy}
            style={{
              padding: "8px 14px", borderRadius: 8,
              fontSize: 12.5, fontWeight: 700,
              border: "1px solid var(--gray-200)",
              background: "white", color: "var(--gray-700)",
              cursor: busy ? "not-allowed" : "pointer",
              opacity: busy ? 0.6 : 1,
            }}
          >
            {cancelText}
          </button>
          <button
            onClick={() => finish(true)}
            disabled={busy}
            style={{
              padding: "8px 14px", borderRadius: 8,
              fontSize: 12.5, fontWeight: 700,
              border: "none", color: "white",
              background: tone.btn,
              cursor: busy ? "wait" : "pointer",
              display: "inline-flex", alignItems: "center", gap: 6,
              minWidth: 90, justifyContent: "center",
            }}
            onMouseEnter={(e) => { if (!busy) (e.currentTarget.style.background = tone.btnHover); }}
            onMouseLeave={(e) => { if (!busy) (e.currentTarget.style.background = tone.btn); }}
          >
            {busy && <Loader2 size={13} className="animate-spin" />}
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
