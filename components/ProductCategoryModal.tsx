"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { db } from "@/lib/db";
import { useSaving } from "@/lib/useSaving";
import { showToast } from "@/components/Toast";

export function ProductCategoryModal({ onClose, onCreated }: { onClose: () => void; onCreated: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const { saving, run } = useSaving();

  useEffect(() => {
    const element = dialog.current;
    element?.showModal();
    return () => element?.close();
  }, []);

  async function save() {
    setError("");
    try {
      const { error } = await db.from("product_categories").insert({ name });
      if (error) {
        setError(error.code === "P2002" ? "A category with this name already exists." : error.message);
        return;
      }
      showToast("Category saved", "ok");
      onCreated();
      onClose();
    } catch {
      setError("Could not save category. Please try again.");
    }
  }

  return (
    <dialog ref={dialog} aria-labelledby="category-modal-title"
      onCancel={event => { event.preventDefault(); if (!saving) onClose(); }}
      className="m-auto w-[480px] max-w-[calc(100%_-_2rem)] rounded-[20px] border-none p-0 bg-white backdrop:bg-black/40"
      style={{ boxShadow: "var(--shadow-lg)", color: "var(--gray-900)" }}>
      <form onSubmit={event => { event.preventDefault(); void run(save); }}>
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--gray-100)]">
          <h2 id="category-modal-title" className="text-[15px] font-bold">Add Category</h2>
          <button type="button" aria-label="Close category modal" onClick={onClose} disabled={saving}
            className="w-7 h-7 rounded-full flex items-center justify-center border-none cursor-pointer disabled:opacity-50"
            style={{ background: "var(--gray-100)", color: "var(--gray-800)" }}><X size={12} /></button>
        </div>
        <div className="p-5 flex flex-col gap-2">
          <label htmlFor="category-name" className="text-[10px] font-bold tracking-[1.2px] uppercase" style={{ color: "var(--blue-deeper)" }}>Category name</label>
          <input id="category-name" autoFocus required maxLength={100} value={name} disabled={saving}
            onChange={event => setName(event.target.value)} placeholder="e.g. Signage"
            aria-invalid={!!error} aria-describedby={error ? "category-error" : undefined}
            className="border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] focus-visible:outline-2 focus-visible:outline-[var(--blue)]"
            style={{ borderColor: "var(--gray-200)", background: "var(--gray-50)" }} />
          {error && <p id="category-error" role="alert" className="text-xs" style={{ color: "var(--red)" }}>{error}</p>}
        </div>
        <div className="flex justify-end gap-2 px-5 py-3.5 border-t border-[var(--gray-100)]">
          <button type="button" onClick={onClose} disabled={saving}
            className="px-4 py-2 rounded-[9px] text-[12.5px] font-semibold border-[1.5px] cursor-pointer bg-white disabled:opacity-50"
            style={{ borderColor: "var(--gray-200)", color: "var(--blue-deeper)" }}>Cancel</button>
          <button type="submit" disabled={saving || !name.trim()}
            className="px-4 py-2 rounded-[9px] text-[12.5px] font-semibold border-none cursor-pointer text-white disabled:opacity-60 disabled:cursor-not-allowed"
            style={{ background: "var(--blue-deeper)" }}>{saving ? "Saving…" : "Save Category"}</button>
        </div>
      </form>
    </dialog>
  );
}
