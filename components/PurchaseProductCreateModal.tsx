"use client";

import { useEffect, useState } from "react";
import { X, Loader2 } from "lucide-react";
import { db } from "@/lib/db";
import { showToast } from "@/components/Toast";

export type CreatedPurchaseProduct = {
  id: string;
  code: string | null;
  name: string;
  cost_price: number;
  gram: number | null;
  meter: number | null;
};

// Generates the next sequential numeric purchase-product code, zero-padded to 3
// digits to match the codes created from the Supplier Products manager.
export function nextPurchaseProductCode(existing: { code: string | null }[]): string {
  let max = 0;
  for (const p of existing) {
    const m = String(p.code ?? "").match(/(\d+)/);
    if (m) max = Math.max(max, parseInt(m[1], 10));
  }
  return String(max + 1).padStart(3, "0");
}

export function PurchaseProductCreateModal({
  initialName,
  existingProducts,
  onClose,
  onCreated,
}: {
  initialName: string;
  existingProducts: { code: string | null }[];
  onClose: () => void;
  onCreated: (p: CreatedPurchaseProduct) => void;
}) {
  const [fName, setFName] = useState(initialName);
  const [fCode, setFCode] = useState(() => nextPurchaseProductCode(existingProducts));
  const [fCost, setFCost] = useState("");
  const [fGram, setFGram] = useState("");
  const [fMeter, setFMeter] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && !saving) onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, saving]);

  async function handleSave() {
    const trimmed = fName.trim();
    if (!trimmed) { showToast("Enter product name", "err"); return; }
    setSaving(true);
    const payload = {
      code: fCode || nextPurchaseProductCode(existingProducts),
      name: trimmed,
      cost_price: parseFloat(fCost) || 0,
      gram: fGram.trim() === "" ? null : parseFloat(fGram),
      meter: fMeter.trim() === "" ? null : parseFloat(fMeter),
    };
    const { data, error } = await db.from("purchase_products").insert(payload).select("id").single();
    setSaving(false);
    if (error || !data?.id) { showToast(error?.message || "Could not save product", "err"); return; }
    showToast("Product saved", "ok");
    onCreated({ id: String(data.id), code: payload.code, name: payload.name, cost_price: payload.cost_price, gram: payload.gram, meter: payload.meter });
  }

  const inputStyle = { borderColor: "var(--gray-200)", background: "var(--gray-50)", color: "var(--gray-900)" };

  return (
    <div className="fixed inset-0 z-[1000] flex items-start justify-center backdrop-blur-sm pt-10 px-4 overflow-y-auto"
      style={{ background: "rgba(10,30,50,.45)" }}
      onClick={() => { if (!saving) onClose(); }}
    >
      <div className="bg-white rounded-[20px] w-[480px] max-w-full overflow-hidden animate-slide-up"
        style={{ boxShadow: "var(--shadow-lg)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--gray-100)]">
          <h2 className="text-[15px] font-bold">Add Supplier Product</h2>
          <button onClick={onClose} disabled={saving}
            className="w-7 h-7 rounded-full flex items-center justify-center border-none cursor-pointer disabled:opacity-50"
            style={{ background: "var(--gray-100)", color: "var(--gray-800)" }}>
            <X size={12} />
          </button>
        </div>
        <div className="p-5 grid grid-cols-2 gap-3.5">
          <div className="flex flex-col gap-1 col-span-2">
            <label className="text-[10px] font-bold tracking-[1.2px] uppercase" style={{ color: "var(--blue-deeper)" }}>
              Product Name <span style={{ color: "var(--red)" }}>*</span>
            </label>
            <input value={fName} onChange={(e) => setFName(e.target.value)}
              placeholder="e.g. Flex Banner 13oz, Vinyl Roll"
              className="border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none" style={inputStyle} autoFocus />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-bold tracking-[1.2px] uppercase" style={{ color: "var(--blue-deeper)" }}>Item Code</label>
            <input value={fCode} onChange={(e) => setFCode(e.target.value)}
              placeholder="Auto-generated"
              className="border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none font-mono font-bold"
              style={{ ...inputStyle, background: "var(--blue-pale)", color: "var(--blue-deeper)" }} />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-bold tracking-[1.2px] uppercase" style={{ color: "var(--blue-deeper)" }}>Cost Price (Rs)</label>
            <input type="number" value={fCost} onChange={(e) => setFCost(e.target.value)}
              placeholder="0" min="0"
              className="border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none font-mono" style={inputStyle} />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-bold tracking-[1.2px] uppercase" style={{ color: "var(--blue-deeper)" }}>
              Gram <span className="font-normal normal-case" style={{ color: "var(--gray-800)" }}>(optional)</span>
            </label>
            <input type="number" value={fGram} onChange={(e) => setFGram(e.target.value)}
              placeholder="—" min="0"
              className="border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none font-mono" style={inputStyle} />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-bold tracking-[1.2px] uppercase" style={{ color: "var(--blue-deeper)" }}>
              MM (meter) <span className="font-normal normal-case" style={{ color: "var(--gray-800)" }}>(optional)</span>
            </label>
            <input type="number" value={fMeter} onChange={(e) => setFMeter(e.target.value)}
              placeholder="—" min="0"
              className="border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none font-mono" style={inputStyle} />
          </div>
        </div>
        <div className="flex justify-end gap-2 px-5 py-3.5 border-t border-[var(--gray-100)]">
          <button onClick={onClose} disabled={saving}
            className="px-4 py-2 rounded-[9px] text-[12.5px] font-semibold border-[1.5px] cursor-pointer bg-white disabled:opacity-50"
            style={{ borderColor: "var(--gray-200)", color: "var(--blue-deeper)" }}>
            Cancel
          </button>
          <button onClick={handleSave} disabled={saving}
            className="px-4 py-2 rounded-[9px] text-[12.5px] font-semibold border-none cursor-pointer text-white disabled:opacity-60 inline-flex items-center gap-1.5"
            style={{ background: "linear-gradient(135deg, var(--blue-deeper), var(--blue))" }}>
            {saving ? <Loader2 size={13} className="animate-spin" /> : null}
            {saving ? "Saving…" : "Save Product"}
          </button>
        </div>
      </div>
    </div>
  );
}
