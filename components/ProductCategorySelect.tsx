"use client";

import { useEffect, useId, useState } from "react";
import { db } from "@/lib/db";

export function ProductCategorySelect({ value, onChange, disabled = false }: {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}) {
  const id = useId();
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        const { data, error } = await db.from("product_categories").select("id, name").order("name");
        if (!active) return;
        if (error) setError(error.message);
        else setCategories(data ?? []);
      } catch {
        if (active) setError("Could not load categories.");
      } finally {
        if (active) setLoading(false);
      }
    }
    void load();
    return () => { active = false; };
  }, [attempt]);

  return (
    <div className="flex flex-col gap-1 col-span-2">
      <label htmlFor={id} className="text-[10px] font-bold tracking-[1.2px] uppercase" style={{ color: "var(--blue-deeper)" }}>
        Category <span style={{ color: "var(--red)" }}>*</span>
      </label>
      <select id={id} value={value} onChange={event => onChange(event.target.value)} required
        disabled={disabled || loading || !!error || categories.length === 0}
        aria-describedby={error || (!loading && !categories.length) ? `${id}-help` : undefined}
        className="border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] focus-visible:outline-2 focus-visible:outline-[var(--blue)] disabled:opacity-60"
        style={{ borderColor: "var(--gray-200)", background: "var(--gray-50)", color: "var(--gray-900)" }}>
        <option value="">{loading ? "Loading categories…" : "Select category"}</option>
        {categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
      </select>
      {error ? (
        <p id={`${id}-help`} role="alert" className="text-xs" style={{ color: "var(--red)" }}>
          {error} <button type="button" className="underline cursor-pointer" onClick={() => {
            setError(""); setLoading(true); setAttempt(current => current + 1);
          }}>Retry</button>
        </p>
      ) : !loading && categories.length === 0 ? (
        <p id={`${id}-help`} className="text-xs" style={{ color: "var(--gray-800)" }}>Create a category from the Products page first.</p>
      ) : null}
    </div>
  );
}
