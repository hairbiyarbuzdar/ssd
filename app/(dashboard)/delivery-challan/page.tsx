"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { ClipboardList, Download, Loader2, Printer } from "lucide-react";
import { db } from "@/lib/db";
import { showToast } from "@/components/Toast";
import { formatCurrency, formatDate } from "@/lib/helpers";
import { PrintFooter } from "@/components/PrintFooter";
import { PrintHeader } from "@/components/PrintHeader";
import { useUser } from "@/lib/UserContext";
import type { InvoiceItem } from "@/lib/database.types";

type InvoicePick = {
  id: string;
  invoice_number: string;
  client_name: string;
  client_phone: string;
  invoice_date: string;
  grand_total: number;
  job_notes?: string;
};

type PrintRow = {
  id: string;
  detail: string;
  ver: string;
  hor: string;
  qty: string;
  sFeet: string;
  rate: string;
  amount: string;
};

/** Matches sample `delivery_chalan.pdf` date style (e.g. 23-Aug-25). */
function formatChallanDate(iso: string): string {
  if (!iso) return "—";
  const d = new Date(iso + "T12:00:00");
  if (Number.isNaN(d.getTime())) return iso;
  const day = d.getDate();
  const mon = d.toLocaleDateString("en-GB", { month: "short" });
  const yr = String(d.getFullYear()).slice(-2);
  return `${day}-${mon}-${yr}`;
}

function nowTimeStr(): string {
  return new Date().toLocaleTimeString("en-PK", { hour: "numeric", minute: "2-digit", hour12: true });
}

function parseNum(s: string): number {
  const n = parseFloat(String(s).replace(/,/g, ""));
  return Number.isFinite(n) ? n : 0;
}

function itemsToPrintRows(items: InvoiceItem[]): PrintRow[] {
  return items.map((it, i) => {
    const w = Number(it.width);
    const h = Number(it.height);
    const sqUnit = Math.round(w * h);
    const qty = Number(it.qty) || 1;
    const sFeetTot = sqUnit * qty;
    const detail = [it.category, it.description].filter(Boolean).join(" — ");
    return {
      id: it.id || `row-${i}`,
      detail,
      ver: w ? String(w) : "",
      hor: h ? String(h) : "",
      qty: String(qty),
      sFeet: sFeetTot > 0 ? String(sFeetTot) : "",
      rate: it.rate ? String(it.rate) : "",
      amount: Number(it.amount) > 0 ? String(Math.round(Number(it.amount))) : "",
    };
  });
}

const DEFAULT_TERMS =
  "Goods delivered as per above details. Please verify quantity and condition on receipt. Subject to invoice and payment terms.";

export default function DeliveryChallanPage() {
  const userProfile = useUser();
  const docRef = useRef<HTMLDivElement>(null);
  const [pdfBusy, setPdfBusy] = useState(false);
  const [loadingList, setLoadingList] = useState(true);
  const [loadingInvoice, setLoadingInvoice] = useState(false);
  const [invoices, setInvoices] = useState<InvoicePick[]>([]);
  const [invoiceId, setInvoiceId] = useState("");

  const [headerParty, setHeaderParty] = useState("");
  const [challanDate, setChallanDate] = useState("");
  const [challanTime, setChallanTime] = useState("");
  const [cell, setCell] = useState("");
  const [delNo, setDelNo] = useState("");
  const [terms, setTerms] = useState(DEFAULT_TERMS);
  const [recvName, setRecvName] = useState("");
  const [recvDate, setRecvDate] = useState("");
  const [deliverName, setDeliverName] = useState("");
  const [lineItems, setLineItems] = useState<InvoiceItem[]>([]);
  const [grandTotal, setGrandTotal] = useState(0);
  const [invoiceRef, setInvoiceRef] = useState("");

  const fetchInvoices = useCallback(async () => {
    setLoadingList(true);
    const { data, error } = await db
      .from("invoices")
      .select("id, invoice_number, client_name, client_phone, invoice_date, grand_total, job_notes")
      .order("created_at", { ascending: false })
      .limit(300);
    setLoadingList(false);
    if (error) {
      showToast(error.message, "err");
      return;
    }
    setInvoices((data ?? []) as InvoicePick[]);
  }, []);

  useEffect(() => {
    void fetchInvoices();
  }, [fetchInvoices]);

  const loadInvoice = useCallback(async (id: string) => {
    if (!id) {
      setHeaderParty("");
      setChallanDate("");
      setChallanTime(nowTimeStr());
      setCell("");
      setDelNo("");
      setLineItems([]);
      setGrandTotal(0);
      setInvoiceRef("");
      setTerms(DEFAULT_TERMS);
      setRecvName("");
      setRecvDate("");
      setDeliverName("");
      return;
    }
    setLoadingInvoice(true);
    try {
      const { data: inv, error: invErr } = await db.from("invoices").select("*").eq("id", id).single();
      if (invErr || !inv) {
        showToast(invErr?.message || "Invoice not found", "err");
        return;
      }
      const { data: rows, error: itemErr } = await db
        .from("invoice_items")
        .select("*")
        .eq("invoice_id", id)
        .order("id", { ascending: true });
      if (itemErr) {
        showToast(itemErr.message, "err");
        return;
      }
      const items = (rows ?? []) as InvoiceItem[];
      setHeaderParty(String(inv.client_name ?? ""));
      setChallanDate(String(inv.invoice_date ?? ""));
      setChallanTime(nowTimeStr());
      setCell(String(inv.client_phone ?? "").trim());
      setDelNo(String(inv.invoice_number ?? ""));
      setInvoiceRef(String(inv.invoice_number ?? ""));
      setLineItems(items);
      setGrandTotal(Number(inv.grand_total) || items.reduce((s, it) => s + Number(it.amount), 0));
      if (String(inv.job_notes ?? "").trim()) {
        setTerms(String(inv.job_notes));
      } else {
        setTerms(DEFAULT_TERMS);
      }
    } finally {
      setLoadingInvoice(false);
    }
  }, []);

  useEffect(() => {
    void loadInvoice(invoiceId);
  }, [invoiceId, loadInvoice]);

  const printRows = useMemo(() => itemsToPrintRows(lineItems), [lineItems]);
  const rowsForPdf = useMemo(
    () =>
      printRows.length
        ? printRows
        : [{ id: "e", detail: "", ver: "", hor: "", qty: "", sFeet: "", rate: "", amount: "" }],
    [printRows],
  );

  const displayDate = formatChallanDate(challanDate);

  async function downloadPdf() {
    const node = docRef.current;
    if (!node || pdfBusy || !invoiceId) return;
    setPdfBusy(true);
    const prev = {
      display: node.style.display,
      position: node.style.position,
      left: node.style.left,
      top: node.style.top,
      width: node.style.width,
    };
    node.style.display = "block";
    node.style.position = "absolute";
    node.style.left = "-99999px";
    node.style.top = "0";
    node.style.width = "210mm";

    try {
      await new Promise((r) => setTimeout(r, 200));
      const canvas = await html2canvas(node, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        logging: false,
      });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({ orientation: "p", unit: "mm", format: "a4" });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgProps = pdf.getImageProperties(imgData);
      const imgWidth = pageWidth;
      const imgHeight = (imgProps.height * imgWidth) / imgProps.width;
      const totalPages = Math.max(1, Math.ceil(imgHeight / pageHeight));
      for (let i = 0; i < totalPages; i++) {
        if (i > 0) pdf.addPage();
        const y = -pageHeight * i;
        pdf.addImage(imgData, "PNG", 0, y, imgWidth, imgHeight);
      }
      const safe = (delNo || invoiceRef || "challan").replace(/[^\w.-]+/g, "_");
      const party = (headerParty || "Client").slice(0, 40).replace(/[^\w\s.-]+/g, "").replace(/\s+/g, "_");
      pdf.save(`DeliveryChallan_${safe}_${party || "SkyDigital"}.pdf`);
      showToast("PDF downloaded", "ok");
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Failed to generate PDF";
      showToast(msg, "err");
    } finally {
      node.style.display = prev.display;
      node.style.position = prev.position;
      node.style.left = prev.left;
      node.style.top = prev.top;
      node.style.width = prev.width;
      setPdfBusy(false);
    }
  }

  function handlePrint() {
    if (!invoiceId) {
      showToast("Select an invoice first", "err");
      return;
    }
    window.print();
  }

  const canPrint = Boolean(invoiceId) && !loadingInvoice;

  return (
    <>
      <div className="no-print max-w-5xl animate-fade-in">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
          <div>
            <h1 className="text-xl font-extrabold flex items-center gap-2" style={{ color: "var(--gray-900)" }}>
              <ClipboardList size={24} className="shrink-0" style={{ color: "var(--blue-deeper)" }} />
              Delivery challan
            </h1>
            <p className="text-xs mt-0.5" style={{ color: "var(--gray-800)" }}>
              Select an invoice to build a delivery challan (layout aligned with{" "}
              <a href="/delivery_chalan.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold underline" style={{ color: "var(--blue-deeper)" }}>
                sample PDF
              </a>
              ). Print or download PDF — does not change accounts or stock.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-[14px] border border-[var(--gray-100)] p-5 mb-5" style={{ boxShadow: "var(--shadow-sm)" }}>
          <label className="flex flex-col gap-1.5 max-w-xl">
            <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color: "var(--blue-deeper)" }}>
              Invoice
            </span>
            <select
              value={invoiceId}
              onChange={(e) => setInvoiceId(e.target.value)}
              disabled={loadingList}
              className="border-[1.5px] rounded-[9px] px-3 py-2.5 text-[13px] outline-none cursor-pointer"
              style={{ borderColor: "var(--gray-200)", color: "var(--gray-900)" }}
            >
              <option value="">— Select invoice —</option>
              {invoices.map((inv) => (
                <option key={inv.id} value={inv.id}>
                  {inv.invoice_number} — {inv.client_name} ({formatDate(inv.invoice_date)}) — {formatCurrency(Number(inv.grand_total))}
                </option>
              ))}
            </select>
          </label>
          {loadingInvoice && (
            <p className="text-[12px] mt-2 flex items-center gap-2" style={{ color: "var(--gray-600)" }}>
              <Loader2 size={14} className="animate-spin" /> Loading line items…
            </p>
          )}
        </div>

        {invoiceId ? (
          <div className="bg-white rounded-[14px] border border-[var(--gray-100)] p-5 space-y-4 mb-5" style={{ boxShadow: "var(--shadow-sm)" }}>
            <p className="text-[11px] font-bold uppercase tracking-wide m-0" style={{ color: "var(--gray-800)" }}>
              Edit challan header (optional)
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color: "var(--blue-deeper)" }}>
                  Party / consignee
                </span>
                <input
                  value={headerParty}
                  onChange={(e) => setHeaderParty(e.target.value)}
                  className="border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none"
                  style={{ borderColor: "var(--gray-200)" }}
                />
              </label>
              <div className="grid grid-cols-2 gap-2">
                <label className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color: "var(--blue-deeper)" }}>
                    Date
                  </span>
                  <input
                    type="date"
                    value={challanDate}
                    onChange={(e) => setChallanDate(e.target.value)}
                    className="border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none"
                    style={{ borderColor: "var(--gray-200)" }}
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color: "var(--blue-deeper)" }}>
                    Time
                  </span>
                  <input
                    value={challanTime}
                    onChange={(e) => setChallanTime(e.target.value)}
                    className="border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none"
                    style={{ borderColor: "var(--gray-200)" }}
                  />
                </label>
              </div>
              <label className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color: "var(--blue-deeper)" }}>
                  Cell
                </span>
                <input
                  value={cell}
                  onChange={(e) => setCell(e.target.value)}
                  className="border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none"
                  style={{ borderColor: "var(--gray-200)" }}
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color: "var(--blue-deeper)" }}>
                  Del No
                </span>
                <input
                  value={delNo}
                  onChange={(e) => setDelNo(e.target.value)}
                  className="border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none font-mono"
                  style={{ borderColor: "var(--gray-200)" }}
                />
              </label>
            </div>
            <label className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color: "var(--blue-deeper)" }}>
                Terms &amp; conditions
              </span>
              <textarea
                value={terms}
                onChange={(e) => setTerms(e.target.value)}
                rows={3}
                className="border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none resize-y"
                style={{ borderColor: "var(--gray-200)" }}
              />
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="text-[11px] font-bold" style={{ color: "var(--gray-900)" }}>
                  Received by
                </div>
                <input
                  value={recvName}
                  onChange={(e) => setRecvName(e.target.value)}
                  placeholder="Name"
                  className="w-full border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none"
                  style={{ borderColor: "var(--gray-200)" }}
                />
                <input
                  value={recvDate}
                  onChange={(e) => setRecvDate(e.target.value)}
                  placeholder="Date"
                  className="w-full border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none"
                  style={{ borderColor: "var(--gray-200)" }}
                />
              </div>
              <div className="space-y-2">
                <div className="text-[11px] font-bold" style={{ color: "var(--gray-900)" }}>
                  Delivered by
                </div>
                <input
                  value={deliverName}
                  onChange={(e) => setDeliverName(e.target.value)}
                  placeholder="Name"
                  className="w-full border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none"
                  style={{ borderColor: "var(--gray-200)" }}
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <button
                type="button"
                onClick={handlePrint}
                disabled={!canPrint}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[10px] text-[13px] font-bold border-[1.5px] cursor-pointer bg-white disabled:opacity-45"
                style={{ borderColor: "var(--gray-200)", color: "var(--blue-deeper)" }}
              >
                <Printer size={18} />
                Print
              </button>
              <button
                type="button"
                onClick={() => void downloadPdf()}
                disabled={!canPrint || pdfBusy}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[10px] text-[13px] font-bold border-none cursor-pointer text-white disabled:opacity-50"
                style={{ background: "linear-gradient(135deg, var(--blue-deeper), var(--blue))" }}
              >
                <Download size={18} />
                {pdfBusy ? "Preparing…" : "Download PDF"}
              </button>
            </div>
          </div>
        ) : null}
      </div>

      {/* Print / PDF template — matches quotation / sample delivery_chalan layout */}
      <div
        ref={docRef}
        className="delivery-challan-doc print-only bg-white"
        style={{
          width: "210mm",
          maxWidth: "100%",
          padding: "10mm 12mm 12mm",
          boxSizing: "border-box",
          fontFamily: "Arial, Helvetica, sans-serif",
          color: "#111",
          fontSize: 11,
          lineHeight: 1.35,
        }}
      >
        <PrintHeader />

        {/* Title bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 8px", background: "#166534", color: "#fff", marginBottom: 10 }}>
          <span style={{ fontSize: 13, fontWeight: 900, letterSpacing: 1.5, textTransform: "uppercase" }}>Delivery Challan</span>
          {invoiceRef ? <span style={{ fontSize: 11, fontWeight: 700 }}>Ref: {invoiceRef}</span> : null}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 10,
            gap: 16,
          }}
        >
          <div style={{ fontWeight: 800, fontSize: 18, letterSpacing: 0.5, textTransform: "uppercase", maxWidth: "58%" }}>
            {headerParty || "\u00A0"}
          </div>
          <div style={{ textAlign: "right", fontSize: 11 }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "flex-end", gap: 8, flexWrap: "wrap" }}>
              <span style={{ fontWeight: 700 }}>Date</span>
              <span>{displayDate}</span>
              <span style={{ color: "#000" }}>{challanTime || "\u00A0"}</span>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 8,
            fontSize: 11,
          }}
        >
          <div>
            <span style={{ fontWeight: 700 }}>Cell</span>
            <span style={{ marginLeft: 8 }}>{cell || "\u00A0"}</span>
          </div>
          <div>
            <span style={{ fontWeight: 700 }}>Del No :</span>
            <span style={{ marginLeft: 8, fontFamily: "monospace", fontWeight: 700 }}>{delNo || "\u00A0"}</span>
          </div>
        </div>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            border: "1px solid #000",
            fontSize: 10,
            marginBottom: 12,
          }}
        >
          <thead>
            <tr>
              <th rowSpan={2} style={{ border: "1px solid #000", padding: "6px 4px", width: "6%", verticalAlign: "middle", fontWeight: 700 }}>
                S.#
              </th>
              <th
                rowSpan={2}
                style={{
                  border: "1px solid #000",
                  padding: "6px 6px",
                  width: "34%",
                  verticalAlign: "middle",
                  fontWeight: 700,
                  textAlign: "left",
                }}
              >
                Detail
              </th>
              <th colSpan={4} style={{ border: "1px solid #000", padding: "5px 4px", fontWeight: 700, textAlign: "center", letterSpacing: 0.5 }}>
                SIZE / QUANTITY
              </th>
              <th rowSpan={2} style={{ border: "1px solid #000", padding: "6px 4px", width: "11%", verticalAlign: "middle", fontWeight: 700 }}>
                RATE
              </th>
              <th rowSpan={2} style={{ border: "1px solid #000", padding: "6px 4px", width: "13%", verticalAlign: "middle", fontWeight: 700 }}>
                Amount
              </th>
            </tr>
            <tr>
              <th style={{ border: "1px solid #000", padding: "5px 3px", fontWeight: 700 }}>VER</th>
              <th style={{ border: "1px solid #000", padding: "5px 3px", fontWeight: 700 }}>HOR</th>
              <th style={{ border: "1px solid #000", padding: "5px 3px", fontWeight: 700 }}>QTY</th>
              <th style={{ border: "1px solid #000", padding: "5px 3px", fontWeight: 700 }}>S.Feet</th>
            </tr>
          </thead>
          <tbody>
            {rowsForPdf.map((r, idx) => (
              <tr key={r.id}>
                <td style={{ border: "1px solid #000", padding: "5px 4px", textAlign: "center", fontFamily: "monospace" }}>{idx + 1}</td>
                <td style={{ border: "1px solid #000", padding: "5px 6px", verticalAlign: "top" }}>{r.detail || "\u00A0"}</td>
                <td style={{ border: "1px solid #000", padding: "5px 3px", textAlign: "center", fontFamily: "monospace" }}>{r.ver || "\u00A0"}</td>
                <td style={{ border: "1px solid #000", padding: "5px 3px", textAlign: "center", fontFamily: "monospace" }}>{r.hor || "\u00A0"}</td>
                <td style={{ border: "1px solid #000", padding: "5px 3px", textAlign: "center", fontFamily: "monospace" }}>{r.qty || "\u00A0"}</td>
                <td style={{ border: "1px solid #000", padding: "5px 3px", textAlign: "center", fontFamily: "monospace" }}>{r.sFeet || "\u00A0"}</td>
                <td style={{ border: "1px solid #000", padding: "5px 4px", textAlign: "right", fontFamily: "monospace" }}>
                  {r.rate ? formatCurrency(parseNum(r.rate)).replace("Rs ", "") : "\u00A0"}
                </td>
                <td style={{ border: "1px solid #000", padding: "5px 4px", textAlign: "right", fontFamily: "monospace", fontWeight: 600 }}>
                  {r.amount ? formatCurrency(parseNum(r.amount)).replace("Rs ", "") : "\u00A0"}
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan={7} style={{ border: "1px solid #000", padding: "7px 6px", fontWeight: 800, textAlign: "right", letterSpacing: 1 }}>
                TOTAL
              </td>
              <td style={{ border: "1px solid #000", padding: "7px 6px", textAlign: "right", fontFamily: "monospace", fontWeight: 800 }}>
                {formatCurrency(grandTotal).replace("Rs ", "")}
              </td>
            </tr>
          </tbody>
        </table>

        <div style={{ marginBottom: 14 }}>
          <div style={{ fontWeight: 800, marginBottom: 6, fontSize: 11, textDecoration: "underline" }}>Terms &amp; Conditions</div>
          <div style={{ whiteSpace: "pre-wrap", fontSize: 10, color: "#222", lineHeight: 1.45 }}>{terms || "\u00A0"}</div>
        </div>

        <div style={{ display: "flex", gap: 24, marginTop: 20 }}>
          <div style={{ flex: 1, fontSize: 10 }}>
            <div style={{ fontWeight: 800, marginBottom: 10 }}>Recieved By</div>
            <div style={{ marginBottom: 6 }}>
              <span style={{ fontWeight: 700 }}>Name:</span> <span>{recvName || "\u00A0"}</span>
            </div>
            <div style={{ marginBottom: 6 }}>
              <span style={{ fontWeight: 700 }}>Date:</span> <span>{recvDate || "\u00A0"}</span>
            </div>
            <div style={{ marginTop: 14, fontWeight: 700 }}>Signature &amp; Stamp</div>
            <div style={{ borderBottom: "1px solid #000", minHeight: 36, marginTop: 6 }} />
          </div>
          <div style={{ flex: 1, fontSize: 10 }}>
            <div style={{ fontWeight: 800, marginBottom: 10 }}>Delivered By</div>
            <div style={{ marginBottom: 6 }}>
              <span style={{ fontWeight: 700 }}>Name:</span> <span>{deliverName || "\u00A0"}</span>
            </div>
            <div style={{ marginTop: 48, textAlign: "center", fontWeight: 700 }}>Authorised Sign</div>
            <div style={{ borderBottom: "1px solid #000", minHeight: 36, marginTop: 6 }} />
          </div>
        </div>

        {/* Footer image */}
        <PrintFooter style={{ marginTop: 16 }} />
      </div>
    </>
  );
}
