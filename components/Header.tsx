"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { db } from "@/lib/db";
import { useRouter } from "next/navigation";
import { getInitials } from "@/lib/helpers";

export default function Header({ onMenuToggle }: { onMenuToggle: () => void }) {
  const [email, setEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    db.auth.getUser().then(({ data }) => {
      setEmail(data.user?.email || "User");
    });
  }, []);

  const today = new Date().toLocaleDateString("en-PK", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const displayName = email.split("@")[0] || "User";

  async function handleLogout() {
    await db.auth.signOut();
    router.push("/");
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 h-[var(--header-h)] bg-white border-b border-[var(--gray-100)] flex items-center pr-6 z-[200]"
      style={{ boxShadow: "var(--shadow-xs)" }}
    >
      <button
        onClick={onMenuToggle}
        className="lg:hidden flex items-center justify-center w-9 h-9 ml-3 border-none bg-transparent cursor-pointer"
        style={{ color: "var(--gray-700)" }}
      >
        <Menu size={20} />
      </button>

      <div className="hidden lg:flex items-center gap-2.5 px-5 h-full border-r border-[var(--gray-100)] shrink-0"
        style={{ width: "var(--sidebar-w)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/mark.svg" alt="" width={36} height={36} className="shrink-0" />
        <div className="flex flex-col">
          <div className="text-[13px] font-extrabold leading-tight tracking-wide" style={{ color: "var(--gray-900)" }}>
            S.S. Diagnostics
          </div>
          <div className="text-[9px] font-semibold tracking-[1.5px] uppercase" style={{ color: "var(--gray-400)" }}>
            Business
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-end gap-3.5 pl-6">
        <div className="text-xs font-semibold whitespace-nowrap hidden md:block" style={{ color: "var(--blue)" }}>
          {today}
        </div>

        <div
          className="flex items-center gap-2 py-1 pl-1 pr-3 rounded-full cursor-pointer transition-all border-[1.5px]"
          style={{
            background: "var(--blue-pale)",
            borderColor: "var(--blue-light)",
          }}
          onClick={handleLogout}
          title="Sign out"
        >
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-extrabold text-white"
            style={{ background: "linear-gradient(135deg, var(--blue-deeper), var(--blue))" }}>
            {getInitials(displayName)}
          </div>
          <span className="text-[12.5px] font-semibold hidden sm:inline" style={{ color: "var(--gray-700)" }}>
            {displayName}
          </span>
        </div>
      </div>
    </header>
  );
}
