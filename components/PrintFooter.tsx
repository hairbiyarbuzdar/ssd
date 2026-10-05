"use client";

type Props = { style?: React.CSSProperties };

/** Business footer without legacy contact or payment details. */
export function PrintFooter({ style }: Props = {}) {
  return (
    <div style={{ width: "100%", marginTop: 12, ...style }}>
      <div style={{ borderTop: "1px solid #111", paddingTop: 8, textAlign: "center", color: "#111" }}>
        <div style={{ fontSize: 12, fontWeight: 700 }}>S.S.D</div>
        <div style={{ fontSize: 10, marginTop: 3 }}>sg.addsmint.com</div>
      </div>
      <div style={{ textAlign: "center", fontSize: 11, fontWeight: 800, color: "#000", marginTop: 6, letterSpacing: 0.3 }}>
        Software by AddsMint.com
      </div>
    </div>
  );
}
