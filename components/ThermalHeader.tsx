"use client";

type Props = { style?: React.CSSProperties };

/** Monochrome S.S.D branding for 80mm thermal receipts. */
export function ThermalHeader({ style }: Props = {}) {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        padding: "4px 0 6px",
        borderBottom: "1px solid #000",
        marginBottom: 4,
        ...style,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/thermal.png"
        alt="S.S.D"
        style={{ width: "60mm", maxWidth: "100%", height: "auto", display: "block", margin: "0 auto" }}
      />
    </div>
  );
}
