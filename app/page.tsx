"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/db";
import { useRouter } from "next/navigation";

const LS_REMEMBER = "ssd_login_remember";
const LS_EMAIL = "ssd_login_email";
const LS_PASSWORD = "ssd_login_password";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    db.auth.getSession().then(({ data }) => {
      if (data.session) router.replace("/dashboard");
    });

    const remembered = localStorage.getItem(LS_REMEMBER);
    if (remembered !== "1") return;

    setEmail(localStorage.getItem(LS_EMAIL) ?? "");
    setPassword(localStorage.getItem(LS_PASSWORD) ?? "");
    setRememberMe(true);
  }, [router]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error } = await db.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    if (typeof window !== "undefined") {
      if (rememberMe) {
        localStorage.setItem(LS_REMEMBER, "1");
        localStorage.setItem(LS_EMAIL, email);
        localStorage.setItem(LS_PASSWORD, password);
      } else {
        localStorage.removeItem(LS_REMEMBER);
        localStorage.removeItem(LS_EMAIL);
        localStorage.removeItem(LS_PASSWORD);
      }
    }

    router.push("/dashboard");
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "var(--bg)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div
        className="animate-slide-up w-[420px] max-w-[calc(100vw-32px)] bg-white rounded-3xl overflow-hidden"
        style={{ boxShadow: "0 24px 60px rgba(0,0,0,.25)" }}
      >
        <div
          className="relative text-center overflow-hidden"
          style={{ background: "var(--accent-sky)", padding: "36px 40px 44px" }}
        >
          <div className="flex items-center justify-center mb-2">
            <img
              src="/brand/logo.svg"
              alt="S.S. Diagnostics"
              className="w-full max-w-[300px] h-auto object-contain"
            />
          </div>
          <div className="absolute -bottom-7 -left-[10%] w-[120%] h-14 bg-white rounded-[50%]" />
        </div>

        <div className="px-10 pt-12 pb-9">
          <div
            className="text-center mb-6 text-[13px] font-semibold tracking-[0.8px] uppercase"
            style={{ color: "var(--gray-400)" }}
          >
            Sign in to your account
          </div>

          {error && (
            <div
              className="flex items-center gap-2 px-3.5 py-2.5 mb-3.5 rounded-md text-xs font-semibold"
              style={{ background: "#FFF0F0", border: "1.5px solid #e2e8f0", color: "var(--red)" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              {error}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-[10px] font-bold tracking-[1.5px] uppercase mb-1.5" style={{ color: "var(--blue-deeper)" }}>
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-[1.5px] rounded-[9px] px-3.5 py-2.5 text-[13.5px] outline-none transition-all"
                style={{
                  borderColor: "var(--gray-200)",
                  background: "var(--gray-50)",
                  color: "var(--gray-900)",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "var(--blue)";
                  e.target.style.background = "#fff";
                  e.target.style.boxShadow = "0 0 0 3px rgba(2,132,199,.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "var(--gray-200)";
                  e.target.style.background = "var(--gray-50)";
                  e.target.style.boxShadow = "none";
                }}
                placeholder="Enter email"
              />
            </div>

            <div className="mb-4">
              <label className="block text-[10px] font-bold tracking-[1.5px] uppercase mb-1.5" style={{ color: "var(--blue-deeper)" }}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-[1.5px] rounded-[9px] px-3.5 py-2.5 text-[13.5px] outline-none transition-all"
                style={{
                  borderColor: "var(--gray-200)",
                  background: "var(--gray-50)",
                  color: "var(--gray-900)",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "var(--blue)";
                  e.target.style.background = "#fff";
                  e.target.style.boxShadow = "0 0 0 3px rgba(2,132,199,.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "var(--gray-200)";
                  e.target.style.background = "var(--gray-50)";
                  e.target.style.boxShadow = "none";
                }}
                placeholder="Enter password"
              />
            </div>

            <div className="mb-2 flex items-center gap-2">
              <input
                id="rememberMe"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-[1.5px] border-[var(--gray-300)] text-[var(--blue)]"
              />
              <label htmlFor="rememberMe" className="text-[12px] font-semibold" style={{ color: "var(--gray-600)", userSelect: "none" }}>
                Remember me
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 mt-2 rounded-[9px] border-none text-[13px] font-bold tracking-[1px] text-white cursor-pointer transition-all flex items-center justify-center gap-2 disabled:opacity-60"
              style={{
                background: "linear-gradient(135deg, var(--blue-deeper), var(--blue))",
                boxShadow: "0 4px 18px rgba(2,132,199,.35)",
              }}
              onMouseEnter={(e) => {
                if (!loading) {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(2,132,199,.45)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 18px rgba(2,132,199,.35)";
              }}
            >
              {loading ? (
                <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <div className="text-center mt-5 text-[11px]" style={{ color: "var(--gray-400)" }}>
            Software Developed by{" "}
            <a
              href="https://addsmint.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--blue-deeper)", fontWeight: 600, textDecoration: "none" }}
            >
              AddsMint.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
