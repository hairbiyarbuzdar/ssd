"use client";

type Props = { style?: React.CSSProperties };

/** Shared S.S.D letterhead for A4/A5 print and PDF templates. */
export function PrintHeader({ style }: Props = {}) {
  return (
    <div style={{ width: "100%", marginBottom: 8, ...style }}>
      {/* Plain <img> (not next/image) so html2canvas can capture it in PDFs. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/letterhead.png"
        alt="S.S.D"
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    </div>
  );
}
