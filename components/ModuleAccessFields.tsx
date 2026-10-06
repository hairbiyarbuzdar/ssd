"use client";

import { useId } from "react";
import { MODULES } from "@/lib/moduleAccess";

export function ModuleAccessFields({ value, onChange, disabled }: {
  value: string[]; onChange: (value: string[]) => void; disabled?: boolean;
}) {
  const id = useId();
  return <fieldset disabled={disabled} className="space-y-2">
    <legend className="text-[11px] font-bold uppercase tracking-wide mb-1" style={{ color: "var(--gray-700)" }}>Module access</legend>
    <p className="text-xs" style={{ color: "var(--gray-700)" }}>Allow the modules this user needs. Select at least one.</p>
    <div className="max-h-64 overflow-y-auto rounded-lg border border-[var(--gray-200)] divide-y divide-[var(--gray-100)]">
      {MODULES.map(module => <fieldset key={module.id} className="px-3 py-2 flex flex-wrap items-center justify-between gap-2">
        <legend className="sr-only">{module.label}</legend>
        <span className="text-[12px] font-semibold" aria-hidden="true">{module.label}</span>
        <div className="flex gap-3 text-xs">
          {[true, false].map(allowed => <label key={String(allowed)} className="inline-flex items-center gap-1.5 cursor-pointer">
            <input type="radio" name={`${id}-${module.id}`} checked={value.includes(module.id) === allowed}
              onChange={() => onChange(allowed ? [...value.filter(item => item !== module.id), module.id] : value.filter(item => item !== module.id))}
              className="accent-[var(--blue-deeper)]" />
            {allowed ? "Allow" : "No access"}
          </label>)}
        </div>
      </fieldset>)}
    </div>
  </fieldset>;
}
