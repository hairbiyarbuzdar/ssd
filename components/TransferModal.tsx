"use client";

import { useEffect, useMemo, useState } from "react";
import { X, Loader2, ArrowRight } from "lucide-react";
import { db } from "@/lib/db";
import { showToast } from "@/components/Toast";
import { todayISO, formatCurrency } from "@/lib/helpers";
import type { PaymentMethodRow } from "@/lib/paymentMethods";
import { logActivity } from "@/lib/activityLog";

export function TransferModal({
  methods,
  currentBalances,
  initialFrom,
  onClose,
  onDone,
}: {
  methods: PaymentMethodRow[];
  currentBalances: Record<string, number>;
  initialFrom?: string;
  onClose: () => void;
  onDone: () => void | Promise<void>;
}) {
  const active = useMemo(() => methods.filter((m) => !m.archived), [methods]);
  const firstName = active[0]?.name ?? "";
  const secondName = active.find((m) => m.name !== (initialFrom ?? firstName))?.name ?? "";

  const [from, setFrom] = useState<string>(initialFrom ?? firstName);
  const [to, setTo] = useState<string>(secondName);
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(todayISO());
  const [note, setNote] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && !saving) onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, saving]);

  const fromBalance = currentBalances[from];
  const amountNum = parseFloat(amount.replace(/,/g, ""));
  const validAmount = Number.isFinite(amountNum) && amountNum > 0;
  const sameMethod = !!from && !!to && from === to;
  const willOverdraw =
    validAmount && typeof fromBalance === "number" && amountNum > fromBalance + 0.0001;

  async function handleSave() {
    if (!from || !to) { showToast("Pick both methods", "err"); return; }
    if (sameMethod) { showToast("From and To must be different", "err"); return; }
    if (!validAmount) { showToast("Enter a valid amount", "err"); return; }
    if (!date) { showToast("Pick a date", "err"); return; }

    setSaving(true);
    try {
      // Shared reference links the two paired rows so they can be matched later.
      const ref = `transfer:${crypto.randomUUID()}`;
      const trimmedNote = note.trim();
      const outDesc = `Transfer to ${to}` + (trimmedNote ? ` — ${trimmedNote}` : "");
      const inDesc = `Transfer from ${from}` + (trimmedNote ? ` — ${trimmedNote}` : "");

      const { error } = await db.from("cashbook").insert([
        {
          type: "out",
          description: outDesc,
          amount: amountNum,
          date,
          method: from,
          account_name: "",
          reference: ref,
        },
        {
          type: "in",
          description: inDesc,
          amount: amountNum,
          date,
          method: to,
          account_name: "",
          reference: ref,
        },
      ]);
      if (error) { showToast(error.message, "err"); return; }

      await logActivity({
        action: "create",
        entityType: "cashbook",
        entityId: ref,
        title: "Transfer between methods",
        subtitle: `${from} → ${to}`,
        amount: amountNum,
        metadata: { from, to, date, note: trimmedNote, reference: ref },
      });

      showToast(`Transferred ${formatCurrency(amountNum)} from ${from} to ${to}`, "ok");
      await onDone();
      onClose();
    } finally {
      setSaving(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-[800] flex items-start justify-center backdrop-blur-sm pt-12 px-4 overflow-y-auto"
      style={{ background: "rgba(10,30,50,.3)" }}
    >
      <div
        className="bg-white rounded-[20px] w-[480px] max-w-full overflow-hidden animate-slide-up"
        style={{ boxShadow: "var(--shadow-lg)" }}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--gray-100)]">
          <h2 className="text-[15px] font-bold">Transfer between methods</h2>
          <button
            onClick={() => !saving && onClose()}
            className="w-7 h-7 rounded-full flex items-center justify-center border-none cursor-pointer"
            style={{ background: "var(--gray-100)", color: "var(--gray-800)" }}
          >
            <X size={12} />
          </button>
        </div>

        <div className="p-5 flex flex-col gap-4">
          <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-3">
            <div className="flex flex-col gap-1 min-w-0">
              <label className="text-[10px] font-bold tracking-[1.2px] uppercase" style={{ color: "var(--blue-deeper)" }}>
                From <span style={{ color: "var(--red)" }}>*</span>
              </label>
              <select
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="border-[1.5px] rounded-[9px] px-3 py-2.5 text-[14px] outline-none bg-white"
                style={{ borderColor: "var(--gray-200)" }}
              >
                {active.map((m) => (
                  <option key={m.id} value={m.name}>{m.name}</option>
                ))}
              </select>
              {typeof fromBalance === "number" && (
                <p className="text-[10.5px] mt-0.5 font-mono" style={{ color: fromBalance >= 0 ? "var(--gray-700)" : "var(--red)" }}>
                  Available: {formatCurrency(fromBalance)}
                </p>
              )}
            </div>
            <div className="pb-3">
              <ArrowRight size={16} style={{ color: "var(--gray-700)" }} />
            </div>
            <div className="flex flex-col gap-1 min-w-0">
              <label className="text-[10px] font-bold tracking-[1.2px] uppercase" style={{ color: "var(--blue-deeper)" }}>
                To <span style={{ color: "var(--red)" }}>*</span>
              </label>
              <select
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="border-[1.5px] rounded-[9px] px-3 py-2.5 text-[14px] outline-none bg-white"
                style={{ borderColor: "var(--gray-200)" }}
              >
                <option value="">Select…</option>
                {active.filter((m) => m.name !== from).map((m) => (
                  <option key={m.id} value={m.name}>{m.name}</option>
                ))}
              </select>
              {to && typeof currentBalances[to] === "number" && (
                <p className="text-[10.5px] mt-0.5 font-mono" style={{ color: "var(--gray-700)" }}>
                  Current: {formatCurrency(currentBalances[to])}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold tracking-[1.2px] uppercase" style={{ color: "var(--blue-deeper)" }}>
                Amount (Rs) <span style={{ color: "var(--red)" }}>*</span>
              </label>
              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type="number"
                min="0"
                step="0.01"
                placeholder="0"
                autoFocus
                className="border-[1.5px] rounded-[9px] px-3 py-2.5 text-[14px] outline-none font-mono"
                style={{ borderColor: "var(--gray-200)", background: "var(--gray-50)" }}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold tracking-[1.2px] uppercase" style={{ color: "var(--blue-deeper)" }}>
                Date <span style={{ color: "var(--red)" }}>*</span>
              </label>
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="date"
                className="border-[1.5px] rounded-[9px] px-3 py-2.5 text-[14px] outline-none"
                style={{ borderColor: "var(--gray-200)", background: "var(--gray-50)" }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-bold tracking-[1.2px] uppercase" style={{ color: "var(--blue-deeper)" }}>
              Note (optional)
            </label>
            <input
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="e.g. ATM withdrawal, cash to wallet top-up"
              className="border-[1.5px] rounded-[9px] px-3 py-2.5 text-[14px] outline-none"
              style={{ borderColor: "var(--gray-200)", background: "var(--gray-50)" }}
            />
          </div>

          {willOverdraw && (
            <div
              className="rounded-[9px] px-3 py-2 text-[11.5px]"
              style={{ background: "rgba(220, 38, 38, .08)", color: "var(--red)" }}
            >
              Heads up — this transfer puts <b>{from}</b> into a negative balance. Proceed only if you&apos;re reconciling against an off-record top-up.
            </div>
          )}
        </div>

        <div className="flex justify-end gap-2 px-5 py-3.5 border-t border-[var(--gray-100)]">
          <button
            onClick={() => !saving && onClose()}
            disabled={saving}
            className="px-4 py-2 rounded-[9px] text-[12.5px] font-semibold border-[1.5px] cursor-pointer bg-white disabled:opacity-50"
            style={{ borderColor: "var(--gray-200)", color: "var(--blue-deeper)" }}
          >
            Cancel
          </button>
          <button
            onClick={() => void handleSave()}
            disabled={saving || !validAmount || !from || !to || sameMethod}
            className="px-4 py-2 rounded-[9px] text-[12.5px] font-semibold border-none cursor-pointer text-white disabled:opacity-50 inline-flex items-center gap-1.5"
            style={{ background: "linear-gradient(135deg, var(--blue-deeper), var(--blue))" }}
          >
            {saving && <Loader2 size={13} className="animate-spin" />}
            Transfer
          </button>
        </div>
      </div>
    </div>
  );
}
