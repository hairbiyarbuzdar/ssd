"use client";

import { useId } from "react";

export function ProductExpiryField({ nonExpiry, date, onNonExpiryChange, onDateChange, disabled = false }: {
  nonExpiry: boolean; date: string; onNonExpiryChange: (value: boolean) => void;
  onDateChange: (value: string) => void; disabled?: boolean;
}) {
  const id = useId();
  return (
    <fieldset disabled={disabled} className="col-span-2 flex flex-col gap-2">
      <legend className="text-[10px] font-bold tracking-[1.2px] uppercase mb-2" style={{ color: "var(--blue-deeper)" }}>Product expiry</legend>
      <div className="flex flex-wrap gap-x-5 gap-y-2 text-[13px]" style={{ color: "var(--gray-900)" }}>
        <label className="inline-flex items-center gap-2 cursor-pointer">
          <input type="radio" name={id} checked={!nonExpiry} onChange={() => onNonExpiryChange(false)} className="accent-[var(--blue-deeper)]" />Has expiry date
        </label>
        <label className="inline-flex items-center gap-2 cursor-pointer">
          <input type="radio" name={id} checked={nonExpiry} onChange={() => onNonExpiryChange(true)} className="accent-[var(--blue-deeper)]" />Non-expiry product
        </label>
      </div>
      {!nonExpiry && <div className="flex flex-col gap-1">
        <label htmlFor={`${id}-date`} className="text-xs font-semibold" style={{ color: "var(--gray-800)" }}>Expiry date</label>
        <input id={`${id}-date`} type="date" required value={date} onChange={event => onDateChange(event.target.value)}
          className="border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] focus-visible:outline-2 focus-visible:outline-[var(--blue)]"
          style={{ borderColor: "var(--gray-200)", background: "var(--gray-50)", color: "var(--gray-900)" }} />
      </div>}
    </fieldset>
  );
}
