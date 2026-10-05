"use client";

import { useCallback, useRef, useState } from "react";

/** Guard async save/delete/pay handlers against rapid double-clicks.
 *
 *  Use the ref check (synchronous) to drop the second invocation before any
 *  DB work happens, and the state flag to drive button `disabled` UI so the
 *  user gets feedback while the request is in flight.
 *
 *  Usage:
 *    const { saving, run } = useSaving();
 *    async function handleSave() {
 *      await run(async () => {
 *        // ...existing async work
 *      });
 *    }
 *    // <button onClick={handleSave} disabled={saving}>...</button>
 */
export function useSaving(): {
  saving: boolean;
  run: <T>(fn: () => Promise<T>) => Promise<T | undefined>;
} {
  const runningRef = useRef(false);
  const [saving, setSaving] = useState(false);

  const run = useCallback(async <T,>(fn: () => Promise<T>): Promise<T | undefined> => {
    if (runningRef.current) return undefined;
    runningRef.current = true;
    setSaving(true);
    try {
      return await fn();
    } finally {
      runningRef.current = false;
      setSaving(false);
    }
  }, []);

  return { saving, run };
}
