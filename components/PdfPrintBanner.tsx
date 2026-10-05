"use client";

import { PrintHeader } from "@/components/PrintHeader";

type Props = { subtitle?: string };

export function PdfPrintBanner({ subtitle }: Props) {
  return (
    <header style={{ marginBottom: 10 }}>
      <PrintHeader />
      {subtitle && (
        <div style={{ marginTop: 4, fontSize: 11, color: "#000", fontWeight: 600, textAlign: "center" }}>
          {subtitle}
        </div>
      )}
    </header>
  );
}
