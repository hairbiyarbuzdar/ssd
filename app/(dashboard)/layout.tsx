"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import TopNav from "@/components/TopNav";
import Toast from "@/components/Toast";
import ConfirmModal from "@/components/ConfirmModal";
import { UserContext } from "@/lib/UserContext";
import { fetchUserProfile } from "@/lib/userProfile";
import type { UserProfile } from "@/lib/userProfile";

const SUB_USER_ALLOWED = ["/quick-invoice", "/accounts"];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [checking, setChecking] = useState(true);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      try {
        const p = await fetchUserProfile();
        if (!cancelled) setProfile(p);
      } finally {
        if (!cancelled) setChecking(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (checking || !profile) return;
    if (profile.role === "sub_user" && !SUB_USER_ALLOWED.includes(pathname)) {
      router.replace("/quick-invoice");
    }
  }, [checking, profile, pathname, router]);

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--bg)" }}>
        <div className="w-8 h-8 border-3 border-[var(--gray-200)] border-t-[var(--blue)] rounded-full animate-spin" />
      </div>
    );
  }

  // Prevent flash of restricted content before redirect fires
  if (profile?.role === "sub_user" && !SUB_USER_ALLOWED.includes(pathname)) {
    return null;
  }

  return (
    <UserContext.Provider value={profile}>
      <div className="min-h-screen" style={{ background: "var(--bg)" }}>
        <TopNav />
        <main className="pt-[var(--header-h)] min-h-screen">
          <div className="p-6 lg:p-8 pb-14">
            {children}
          </div>
        </main>
        <footer
          className="fixed bottom-0 right-0 left-0 py-2 no-print flex items-center justify-center gap-6 px-6"
          style={{ background: "var(--bg)", color: "#000", fontSize: 13 }}
        >
          <span style={{ fontWeight: 500 }}>Software Developed by AddsMint.com</span>
        </footer>
        <Toast />
        <ConfirmModal />
      </div>
    </UserContext.Provider>
  );
}
