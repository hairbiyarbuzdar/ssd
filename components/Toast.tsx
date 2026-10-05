"use client";

import { useEffect, useState } from "react";

type ToastType = "ok" | "err" | "info";

let showToastFn: (msg: string, type: ToastType) => void = () => {};

export function showToast(msg: string, type: ToastType = "ok") {
  showToastFn(msg, type);
}

export default function Toast() {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState<ToastType>("ok");

  useEffect(() => {
    showToastFn = (msg, t) => {
      setMessage(msg);
      setType(t);
      setVisible(true);
      setTimeout(() => setVisible(false), 3000);
    };
  }, []);

  if (!visible) return null;

  const bg = type === "ok" ? "var(--green)" : type === "err" ? "var(--red)" : "var(--gray-900)";

  return (
    <div
      className="fixed bottom-5 right-5 z-[9999] flex items-center gap-2 px-4 py-2.5 rounded-xl text-[12.5px] font-semibold text-white max-w-[320px] animate-slide-up"
      style={{ background: bg, boxShadow: "var(--shadow-lg)" }}
    >
      {message}
    </div>
  );
}
