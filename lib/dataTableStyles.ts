/**
 * Shared data-table visuals — matches Accounts → Account List
 * (maroon header, 11px uppercase tracking, body px-4 py-2.5, primary 15px bold).
 */
export const DT = {
  table: "w-full border-collapse",
  /** Standard header cell (use with text-left / text-center / text-right). */
  th: "text-[11px] font-bold tracking-[1.2px] uppercase px-4 py-3 whitespace-nowrap",
  /** Wider tables: tighter horizontal padding. */
  thDense: "text-[11px] font-bold tracking-[1.2px] uppercase px-3 py-3 whitespace-nowrap",
  thStyle: { background: "var(--blue-deeper)", color: "white" } as const,
  td: "px-4 py-2.5 border-b border-[var(--gray-100)]",
  tdDense: "px-3 py-2.5 border-b border-[var(--gray-100)]",
  row: "hover:bg-[#bfcffe] transition-colors cursor-default",
  empty: "text-center py-8 text-[14px] font-semibold",
  emptyStyle: { color: "var(--gray-800)" } as const,
  cellPrimary: "text-[15px] font-bold",
  cellBody: "text-[13.5px] font-semibold",
  cellMono: "text-[13.5px] font-mono font-semibold",
  badge: "text-[11px] font-bold px-2.5 py-0.5 rounded-full",
} as const;
