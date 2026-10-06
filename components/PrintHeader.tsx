"use client";

type Props = { style?: React.CSSProperties };

/** Shared S.S. Diagnostics letterhead for A4/A5 print and PDF templates. */
export function PrintHeader({ style }: Props = {}) {
  return (
    <div style={{ width: "100%", marginBottom: 8, ...style }}>
      {/* Plain <img> (not next/image) so html2canvas can capture it in PDFs. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/letterhead.png"
        alt="S.S. Diagnostics — Dawn Medical Centre, Room No. 1, 1st Floor, Jinnah Road, Quetta. Tel: +92-81-2836967. Mob: 0333-7808836, 0334-2247408, 0345-8346536. Email: ssdig@isb.comsats.net.pk. Ejaz Gill, Sales Manager."
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    </div>
  );
}
