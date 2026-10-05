"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { db } from "@/lib/db";
import { showToast } from "@/components/Toast";
import { formatCurrency, formatDate, todayISO } from "@/lib/helpers";
import {
  Plus,
  X, Trash2, Pencil, Briefcase, Wallet, Printer, ListChecks,
} from "lucide-react";
import type { LaborAdvance, Laborer, LaborTask } from "@/lib/database.types";
import { normalizePaymentMethod, usePaymentMethods, getMethodBalance, type PaymentMethod } from "@/lib/paymentMethods";
import { DT } from "@/lib/dataTableStyles";
import { PdfPrintBanner } from "@/components/PdfPrintBanner";
import { PrintFooter } from "@/components/PrintFooter";
import { ThermalHeader } from "@/components/ThermalHeader";
import { useUser } from "@/lib/UserContext";
import { openWhatsAppNewTab } from "@/lib/whatsappWaMe";
import { confirmDialog } from "@/components/ConfirmModal";
import { logActivity } from "@/lib/activityLog";
import { useSaving } from "@/lib/useSaving";

function WhatsAppIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function buildLaborTasksMessage(l: LaborerWithData): string {
  const pending = l.tasks.filter((t) => t.status === "pending");
  const lines: string[] = [
    `Assalaamu Alaikum *${l.name}*,`,
    ``,
    `Here are your assigned tasks:`,
    ``,
  ];
  if (pending.length === 0) {
    lines.push(`No pending tasks at the moment.`);
  } else {
    pending.forEach((t, i) => {
      const net = Math.max(0, Number(t.amount) - Number(t.advance));
      lines.push(`*${i + 1}. ${t.task_name}*`);
      lines.push(`   Amount: ${formatCurrency(Number(t.amount))}`);
      if (Number(t.advance) > 0) lines.push(`   Advance deducted: − ${formatCurrency(Number(t.advance))}`);
      lines.push(`   You will receive: *${formatCurrency(net)}*`);
      lines.push(``);
    });
    const totalNet = pending.reduce((s, t) => s + Math.max(0, Number(t.amount) - Number(t.advance)), 0);
    if (pending.length > 1) lines.push(`*Total payable: ${formatCurrency(totalNet)}*`, ``);
  }
  lines.push(`— S.S.D`);
  return lines.join("\n");
}

type LaborerWithData = Laborer & {
  tasks: LaborTask[];
  advances: LaborAdvance[];
};

function inIsoDateRange(d: string, from?: string, to?: string) {
  // d/from/to are expected in YYYY-MM-DD; string compare works for ISO dates.
  const dd = (d || "").slice(0, 10);
  if (!dd) return false;
  if (from && dd < from) return false;
  if (to && dd > to) return false;
  return true;
}

function laborerNetPayable(l: LaborerWithData) {
  return l.tasks
    .filter((t) => t.status === "pending")
    .reduce((s, t) => s + Math.max(0, Number(t.amount) - Number(t.advance)), 0);
}

function formatDateTime(iso: string): string {
  if (!iso) return "—";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  const date = d.toLocaleDateString("en-PK", { year: "numeric", month: "short", day: "numeric" });
  const time = d.toLocaleTimeString("en-PK", { hour: "numeric", minute: "2-digit", hour12: true });
  return `${date} · ${time}`;
}

interface TaskTemplate {
  id: string;
  name: string;
}
const TEMPLATES_KEY = "labor_task_templates";

export default function LaborPage() {
  const userProfile = useUser();
  const { methods: paymentMethods } = usePaymentMethods();
  const { saving, run } = useSaving();
  const [laborers, setLaborers] = useState<LaborerWithData[]>([]);
  const [selectedLaborerId, setSelectedLaborerId] = useState<string | null>(null);

  // Laborer modal
  const [showLaborerModal, setShowLaborerModal] = useState(false);
  const [editingLaborer, setEditingLaborer] = useState<Laborer | null>(null);
  const [lName, setLName] = useState("");
  const [lPhone, setLPhone] = useState("");
  const [lRole, setLRole] = useState("");
  const [lStatus, setLStatus] = useState<"Active" | "Inactive">("Active");

  // Task modal
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [taskLaborer, setTaskLaborer] = useState<Laborer | null>(null);
  const [tItems, setTItems] = useState<{ name: string; amount: string; width: string; height: string; qty: string }[]>([{ name: "", amount: "", width: "", height: "", qty: "1" }]);
  const [tDate, setTDate] = useState(todayISO());
  const [tAdvance, setTAdvance] = useState("");
  const [tAdvanceMethod, setTAdvanceMethod] = useState<PaymentMethod>("Cash");

  // Pay task modal
  const [showPayTaskModal, setShowPayTaskModal] = useState(false);
  const [payingTask, setPayingTask] = useState<LaborTask | null>(null);
  const [payingLaborerName, setPayingLaborerName] = useState("");
  const [payTaskDate, setPayTaskDate] = useState(todayISO());

  // Task thermal print
  const [taskPrintBusy, setTaskPrintBusy] = useState(false);

  // Print-only report date filter
  const [showReportRangeModal, setShowReportRangeModal] = useState(false);
  const [reportFromDate, setReportFromDate] = useState("");
  const [reportToDate, setReportToDate] = useState("");
  const [payNowAmount, setPayNowAmount] = useState<string>("");

  // Standalone advance (no job yet)
  const [showAdvanceModal, setShowAdvanceModal] = useState(false);
  const [advanceLaborer, setAdvanceLaborer] = useState<Laborer | null>(null);
  const [advAmount, setAdvAmount] = useState("");
  const [advDate, setAdvDate] = useState(todayISO());
  const [advNotes, setAdvNotes] = useState("");
  const [advLaborMethod, setAdvLaborMethod] = useState<PaymentMethod>("Cash");
  const [payTaskMethod, setPayTaskMethod] = useState<PaymentMethod>("Cash");

  // Task templates
  const [taskTemplates, setTaskTemplates] = useState<TaskTemplate[]>([]);
  const [showTemplateModal, setShowTemplateModal] = useState(false);
  const [tplName, setTplName] = useState("");
  const [tDropdownIdx, setTDropdownIdx] = useState<number | null>(null);
  const dropdownCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Edit task
  const [editingTask, setEditingTask] = useState<LaborTask | null>(null);
  const [editTaskLaborer, setEditTaskLaborer] = useState<LaborerWithData | null>(null);
  const [editTaskName, setEditTaskName] = useState("");
  const [editTaskDate, setEditTaskDate] = useState("");
  const [editTaskAmount, setEditTaskAmount] = useState("");
  const [editTaskWidth, setEditTaskWidth] = useState("");
  const [editTaskHeight, setEditTaskHeight] = useState("");

  // Single-task thermal print
  const [taskSlipToPrint, setTaskSlipToPrint] = useState<{ task: LaborTask; laborer: LaborerWithData } | null>(null);
  const [taskSlipPrintBusy, setTaskSlipPrintBusy] = useState(false);

  // ── Fetch ──────────────────────────────────────────────────────────────────

  const fetchData = useCallback(async () => {
    const [{ data: laborerData }, { data: taskData }, { data: advanceData }] = await Promise.all([
      db.from("laborers").select("*").order("name"),
      db.from("labor_tasks").select("*").order("date"),
      db.from("labor_advances").select("*").order("date", { ascending: false }),
    ]);

    if (!laborerData) return;

    const labRows = laborerData as Laborer[];
    const taskRows = (taskData || []) as LaborTask[];
    const advRows = (advanceData || []) as LaborAdvance[];

    const enriched: LaborerWithData[] = labRows.map((l) => ({
      ...l,
      advance_balance: Number(l.advance_balance ?? 0),
      tasks: taskRows
        .filter((t) => t.laborer_id === l.id)
        .map((t) => ({
          ...t,
          advance: Number(t.advance ?? 0),
          advance_from_balance: Number(t.advance_from_balance ?? 0),
        })),
      advances: advRows.filter((a) => a.laborer_id === l.id),
    }));

    setLaborers(enriched);
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  // Load task templates from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(TEMPLATES_KEY);
      if (stored) setTaskTemplates(JSON.parse(stored) as TaskTemplate[]);
    } catch { /* ignore */ }
  }, []);

  function saveTemplates(updated: TaskTemplate[]) {
    setTaskTemplates(updated);
    localStorage.setItem(TEMPLATES_KEY, JSON.stringify(updated));
  }

  function handleAddTemplate() {
    if (!tplName.trim()) { showToast("Enter a task name", "err"); return; }
    const tpl: TaskTemplate = { id: crypto.randomUUID(), name: tplName.trim() };
    saveTemplates([...taskTemplates, tpl]);
    setTplName("");
  }

  function handleDeleteTemplate(id: string) {
    saveTemplates(taskTemplates.filter((t) => t.id !== id));
  }

  useEffect(() => {
    if (!showPayTaskModal || !payingTask?.cashbook_entry_id) return;
    const cid = payingTask.cashbook_entry_id;
    void db
      .from("cashbook")
      .select("method")
      .eq("id", cid)
      .single()
      .then(({ data }) => {
        if (data?.method) setPayTaskMethod(normalizePaymentMethod(data.method as string));
      });
  }, [showPayTaskModal, payingTask?.cashbook_entry_id]);

  useEffect(() => {
    if (laborers.length === 0) {
      setSelectedLaborerId(null);
      return;
    }
    setSelectedLaborerId((prev) => {
      if (prev && laborers.some((l) => l.id === prev)) return prev;
      return laborers.find((l) => l.status === "Active")?.id ?? laborers[0].id;
    });
  }, [laborers]);

  // ── Stats ──────────────────────────────────────────────────────────────────

  const activeLaborers = laborers.filter((l) => l.status === "Active");
  const totalPending = laborers.reduce(
    (s, l) => s + l.tasks.filter((t) => t.status === "pending").reduce((a, t) => a + Math.max(0, Number(t.amount) - Number(t.advance)), 0),
    0
  );
  const totalAdvances = laborers.reduce(
    (s, l) =>
      s +
      l.tasks.reduce((a, t) => a + Number(t.advance), 0) +
      Number(l.advance_balance ?? 0),
    0
  );
  const totalPaid = laborers.reduce(
    (s, l) => s + l.tasks.filter((t) => t.status === "paid").reduce((a, t) => a + Math.max(0, Number(t.amount) - Number(t.advance)), 0),
    0
  );

  // ── Laborer CRUD ───────────────────────────────────────────────────────────

  function openAddLaborer() {
    setEditingLaborer(null);
    setLName(""); setLPhone(""); setLRole(""); setLStatus("Active");
    setShowLaborerModal(true);
  }

  function openEditLaborer(l: Laborer) {
    setEditingLaborer(l);
    setLName(l.name); setLPhone(l.phone); setLRole(l.role); setLStatus(l.status);
    setShowLaborerModal(true);
  }

  async function handleSaveLaborer() {
    if (!lName.trim()) { showToast("Enter laborer name", "err"); return; }
    const payload = { name: lName.trim(), phone: lPhone, role: lRole, status: lStatus };

    if (editingLaborer) {
      const { error } = await db.from("laborers").update(payload).eq("id", editingLaborer.id);
      if (error) { showToast(error.message, "err"); return; }
      showToast("Laborer updated", "ok");
    } else {
      const { error } = await db.from("laborers").insert(payload);
      if (error) { showToast(error.message, "err"); return; }
      showToast("Laborer added", "ok");
    }

    setShowLaborerModal(false);
    fetchData();
  }

  async function handleDeleteLaborer(l: Laborer) {
    const ok = await confirmDialog({
      title: "Delete laborer?",
      message: `Delete laborer "${l.name}"? This cannot be undone.`,
      details: "All of their tasks and advances will also be removed.",
      tone: "danger",
    });
    if (!ok) return;
    await db.from("laborers").delete().eq("id", l.id);
    await logActivity({
      action: "delete",
      entityType: "laborer",
      entityId: l.id,
      title: "Laborer Deleted",
      subtitle: l.name,
      metadata: { role: l.role, status: l.status, advance_balance: Number(l.advance_balance ?? 0) },
    });
    showToast("Laborer deleted", "ok");
    fetchData();
  }

  // ── Standalone advance (no task) ─────────────────────────────────────────

  function openGiveAdvance(l: Laborer) {
    setAdvanceLaborer(l);
    setAdvAmount("");
    setAdvDate(todayISO());
    setAdvNotes("");
    setAdvLaborMethod("Cash");
    setShowAdvanceModal(true);
  }

  async function handleSaveStandaloneAdvance() {
    if (!advanceLaborer) return;
    const amt = parseFloat(advAmount);
    if (!amt || amt <= 0) {
      showToast("Enter a valid advance amount", "err");
      return;
    }
    if (!advLaborMethod || !advLaborMethod.trim()) {
      showToast("Please select a payment method", "err");
      return;
    }
    if (!paymentMethods.some((m) => m.name === advLaborMethod)) {
      showToast("Select a valid payment method", "err");
      return;
    }
    const available = await getMethodBalance(advLaborMethod);
    if (amt > available) {
      showToast(`Not enough funds in "${advLaborMethod}" (available ${formatCurrency(available)}). Choose a different payment method.`, "err");
      return;
    }

    const { data: cbEntry, error: cbErr } = await db
      .from("cashbook")
      .insert({
        type: "out",
        description: `Labor advance — ${advanceLaborer.name}`,
        amount: amt,
        date: advDate,
        account_name: "",
        method: advLaborMethod,
        reference: "",
      })
      .select("id")
      .single();

    if (cbErr) {
      showToast(cbErr.message, "err");
      return;
    }

    const { error: advErr } = await db.from("labor_advances").insert({
      laborer_id: advanceLaborer.id,
      amount: amt,
      date: advDate,
      notes: advNotes.trim(),
      cashbook_entry_id: cbEntry?.id ?? null,
    });

    if (advErr) {
      if (cbEntry?.id) await db.from("cashbook").delete().eq("id", cbEntry.id);
      showToast(advErr.message, "err");
      return;
    }

    const { data: fresh, error: selErr } = await db
      .from("laborers")
      .select("advance_balance")
      .eq("id", advanceLaborer.id)
      .single();

    if (selErr) {
      showToast(selErr.message, "err");
      return;
    }

    // Apply advance to existing pending tasks (oldest first)
    const labData = laborers.find((l) => l.id === advanceLaborer.id);
    const pendingTasks = (labData?.tasks ?? [])
      .filter((t) => t.status === "pending")
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    let remaining = amt;
    for (const task of pendingTasks) {
      if (remaining <= 0) break;
      const taskNet = Math.max(0, Number(task.amount) - Number(task.advance));
      if (taskNet <= 0) continue;
      const apply = Math.min(remaining, taskNet);
      const newAdvance = Number(task.advance) + apply;
      const newAdvFromBalance = Number(task.advance_from_balance) + apply;
      const newStatus = Number(task.amount) - newAdvance <= 0 ? "paid" : "pending";
      await db
        .from("labor_tasks")
        .update({ advance: newAdvance, advance_from_balance: newAdvFromBalance, status: newStatus })
        .eq("id", task.id);
      remaining -= apply;
    }

    const nextBal = Number((fresh as Laborer).advance_balance ?? 0) + remaining;
    const { error: upErr } = await db
      .from("laborers")
      .update({ advance_balance: nextBal })
      .eq("id", advanceLaborer.id);

    if (upErr) {
      showToast(upErr.message, "err");
      return;
    }

    showToast(`Recorded ${formatCurrency(amt)} advance for ${advanceLaborer.name}`, "ok");
    setShowAdvanceModal(false);
    fetchData();
  }

  // ── Task management ────────────────────────────────────────────────────────

  function openPrintReportModal() {
    setShowReportRangeModal(true);
  }

  function printTaskAssignment() {
    if (taskPrintBusy) return;
    setTaskPrintBusy(true);

    // Hide all standard print-only elements so only the thermal task slip prints
    const printOnlyEls = Array.from(document.querySelectorAll<HTMLElement>(".print-only"));
    printOnlyEls.forEach((el) => el.style.setProperty("display", "none", "important"));

    // Switch to thermal mode
    const styleEl = document.createElement("style");
    styleEl.id = "__thermal_task_page_style";
    styleEl.textContent = "@page { size: 80mm auto; margin: 2mm 3mm; }";
    document.head.appendChild(styleEl);
    document.body.classList.add("thermal-mode");

    const cleanup = () => {
      document.getElementById("__thermal_task_page_style")?.remove();
      document.body.classList.remove("thermal-mode");
      printOnlyEls.forEach((el) => el.style.removeProperty("display"));
      setTaskPrintBusy(false);
    };

    let ran = false;
    const run = () => {
      if (ran) return;
      ran = true;
      window.removeEventListener("afterprint", run);
      cleanup();
    };
    window.addEventListener("afterprint", run);
    window.setTimeout(run, 3500);

    setTimeout(() => window.print(), 80);
  }

  function handleConfirmPrintRange() {
    if (reportFromDate && reportToDate && reportFromDate > reportToDate) {
      showToast("From date cannot be after To date", "err");
      return;
    }
    setShowReportRangeModal(false);
    // Ensure modal closes + report filters update before opening print dialog.
    setTimeout(() => window.print(), 0);
  }

  function openAddTask(l: Laborer) {
    setTaskLaborer(l);
    setTItems([{ name: "", amount: "", width: "", height: "", qty: "1" }]);
    setTDate(todayISO());
    setTAdvance("");
    setTAdvanceMethod(paymentMethods[0]?.name ?? "Cash");
    setShowTaskModal(true);
  }

  function updateTItem(idx: number, field: "name" | "amount" | "width" | "height" | "qty", value: string) {
    setTItems((prev) => prev.map((it, i) => i === idx ? { ...it, [field]: value } : it));
  }

  async function handleSaveTask() {
    if (!taskLaborer) return;

    const validItems = tItems.filter((it) => it.name.trim() && parseFloat(it.amount) > 0);
    if (validItems.length === 0) {
      showToast("Add at least one task with a name and rate", "err");
      return;
    }
    for (const it of validItems) {
      if (parseFloat(it.amount) <= 0) {
        showToast(`Amount must be greater than 0 for "${it.name}"`, "err");
        return;
      }
    }

    const { data: freshLaborer, error: balErr } = await db
      .from("laborers")
      .select("advance_balance")
      .eq("id", taskLaborer.id)
      .single();
    if (balErr) { showToast(balErr.message, "err"); return; }

    const standing = Number((freshLaborer as Laborer).advance_balance ?? 0);
    const collectiveAdv = Math.max(0, parseFloat(tAdvance) || 0);

    // If a fresh advance is being given, the method must be picked and the
    // method must currently hold enough cash.
    if (collectiveAdv > 0) {
      if (!tAdvanceMethod || !tAdvanceMethod.trim()) {
        showToast("Please select a payment method for the advance", "err");
        return;
      }
      if (!paymentMethods.some((m) => m.name === tAdvanceMethod)) {
        showToast("Select a valid payment method for the advance", "err");
        return;
      }
      const available = await getMethodBalance(tAdvanceMethod);
      if (collectiveAdv > available) {
        showToast(`Not enough funds in "${tAdvanceMethod}" (available ${formatCurrency(available)}). Choose a different payment method.`, "err");
        return;
      }
    }

    let remainingFresh = collectiveAdv;
    let remainingPool = standing;
    const insertedIds: string[] = [];

    // Create a cashbook entry for the fresh advance (if any)
    let advCashbookId: string | null = null;
    if (collectiveAdv > 0) {
      const { data: cbEntry, error: cbErr } = await db
        .from("cashbook")
        .insert({
          type: "out",
          description: `Labor advance — ${taskLaborer.name}`,
          amount: collectiveAdv,
          date: tDate || todayISO(),
          account_name: "",
          method: tAdvanceMethod,
          reference: "",
        })
        .select("id")
        .single();
      if (cbErr) { showToast(cbErr.message, "err"); return; }
      advCashbookId = cbEntry?.id ?? null;
    }

    for (const it of validItems) {
      const w = parseFloat(it.width) || null;
      const h = parseFloat(it.height) || null;
      const sqft = w && h ? Math.round(w * h * 100) / 100 : null;
      const rate = parseFloat(it.amount);
      const qty = Math.max(1, parseFloat(it.qty) || 1);
      const amt = Math.round((sqft !== null ? sqft * rate : rate) * qty * 100) / 100;

      // Apply fresh advance first, then drain standing pool to cover the rest.
      const fromFresh = Math.min(remainingFresh, amt);
      remainingFresh -= fromFresh;
      const fromPool = Math.min(remainingPool, amt - fromFresh);
      remainingPool -= fromPool;

      const adv = fromFresh + fromPool;
      const fromBalance = adv;
      const netPayable = Math.max(0, amt - adv);
      const status = netPayable === 0 ? "paid" : "pending";

      const { data: inserted, error: insErr } = await db
        .from("labor_tasks")
        .insert({
          laborer_id: taskLaborer.id,
          task_name: it.name.trim(),
          description: "",
          amount: amt,
          advance: adv,
          advance_from_balance: fromBalance,
          date: tDate || todayISO(),
          status,
          cashbook_entry_id: null,
          width: w,
          height: h,
          sqft,
        })
        .select("id")
        .single();

      if (insErr) {
        // Roll back already-inserted tasks
        if (insertedIds.length > 0) {
          await db.from("labor_tasks").delete().in("id", insertedIds);
        }
        if (advCashbookId) await db.from("cashbook").delete().eq("id", advCashbookId);
        showToast(insErr.message, "err");
        return;
      }
      insertedIds.push(inserted.id);
    }

    // Apply any leftover fresh advance to existing pending tasks (oldest first),
    // matching the behavior of handleSaveStandaloneAdvance. This avoids the
    // confusing state where the pool grows while a pending balance still exists.
    if (remainingFresh > 0) {
      const labData = laborers.find((l) => l.id === taskLaborer.id);
      const pendingTasks = (labData?.tasks ?? [])
        .filter((t) => t.status === "pending" && !insertedIds.includes(t.id))
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

      for (const task of pendingTasks) {
        if (remainingFresh <= 0) break;
        const taskNet = Math.max(0, Number(task.amount) - Number(task.advance));
        if (taskNet <= 0) continue;
        const apply = Math.min(remainingFresh, taskNet);
        const newAdvance = Number(task.advance) + apply;
        const newAdvFromBalance = Number(task.advance_from_balance ?? 0) + apply;
        const newStatus = Number(task.amount) - newAdvance <= 0 ? "paid" : "pending";
        await db
          .from("labor_tasks")
          .update({ advance: newAdvance, advance_from_balance: newAdvFromBalance, status: newStatus })
          .eq("id", task.id);
        remainingFresh -= apply;
      }
    }

    // Update laborer's standing pool: drained amount removed, any final leftover fresh added.
    const newPool = remainingPool + remainingFresh;
    if (newPool !== standing) {
      const { error: poolErr } = await db
        .from("laborers")
        .update({ advance_balance: newPool })
        .eq("id", taskLaborer.id);
      if (poolErr) {
        showToast("Tasks saved but pool update failed: " + poolErr.message, "err");
      }
    }

    // Record advance in labor_advances table (fresh advance — not from standing balance)
    if (collectiveAdv > 0) {
      const { error: advRecErr } = await db.from("labor_advances").insert({
        laborer_id: taskLaborer.id,
        amount: collectiveAdv,
        date: tDate || todayISO(),
        notes: `Advance with task: ${validItems.map((i) => i.name.trim()).join(", ")}`,
        cashbook_entry_id: advCashbookId,
      });
      if (advRecErr) {
        // Non-fatal — tasks are already saved; just warn
        showToast("Tasks saved but advance record failed: " + advRecErr.message, "err");
      }
    }

    showToast(
      validItems.length === 1
        ? `Task "${validItems[0].name}" added for ${taskLaborer.name}`
        : `${validItems.length} tasks added for ${taskLaborer.name}`,
      "ok"
    );
    setShowTaskModal(false);
    fetchData();
  }

  function openPayTask(task: LaborTask, laborerName: string) {
    setPayingTask(task);
    setPayingLaborerName(laborerName);
    setPayTaskDate(todayISO());
    setPayTaskMethod("Cash");
    const net = Math.max(0, Number(task.amount) - Number(task.advance));
    setPayNowAmount(net > 0 ? String(net) : "0");
    setShowPayTaskModal(true);
  }

  async function handlePayTask() {
    if (!payingTask) return;

    const netAmount = Math.max(0, Number(payingTask.amount) - Number(payingTask.advance));
    const payNow = parseFloat(payNowAmount);

    if (!Number.isFinite(payNow) || payNow <= 0) {
      showToast("Enter a valid amount to pay", "err");
      return;
    }
    if (payNow > netAmount) {
      showToast("Payment cannot exceed remaining net payable", "err");
      return;
    }
    if (!payTaskMethod || !payTaskMethod.trim()) {
      showToast("Please select a payment method", "err");
      return;
    }
    if (!paymentMethods.some((m) => m.name === payTaskMethod)) {
      showToast("Select a valid payment method", "err");
      return;
    }
    // Skip funds check if reusing an existing entry (already accounted for).
    if (!payingTask.cashbook_entry_id) {
      const available = await getMethodBalance(payTaskMethod);
      if (payNow > available) {
        showToast(`Not enough funds in "${payTaskMethod}" (available ${formatCurrency(available)}). Choose a different payment method.`, "err");
        return;
      }
    }

    // If there was a previous partial payment, reuse the same Cashbook entry
    // so delete-task cleanup still removes a single entry.
    let cashbookEntryId: string | null = payingTask.cashbook_entry_id ?? null;
    if (cashbookEntryId) {
      const { data: existing, error: existingErr } = await db
        .from("cashbook")
        .select("amount")
        .eq("id", cashbookEntryId)
        .single();
      if (existingErr) { showToast(existingErr.message, "err"); return; }

      const nextCashbookAmount = Number(existing?.amount ?? 0) + payNow;
      const { error: updErr } = await db
        .from("cashbook")
        .update({ amount: nextCashbookAmount, date: payTaskDate })
        .eq("id", cashbookEntryId);
      if (updErr) { showToast(updErr.message, "err"); return; }
    } else {
      const { data: cbEntry, error: cbErr } = await db
        .from("cashbook")
        .insert({
          type: "out",
          description: `Labor — ${payingLaborerName}: ${payingTask.task_name}`,
          amount: payNow,
          date: payTaskDate,
          account_name: "",
          method: payTaskMethod,
          reference: "",
        })
        .select("id")
        .single();

      if (cbErr) { showToast(cbErr.message, "err"); return; }
      cashbookEntryId = cbEntry?.id ?? null;
    }

    const oldAdvance = Number(payingTask.advance);
    const newAdvance = oldAdvance + payNow;
    const remainingAfter = Math.max(0, Number(payingTask.amount) - newAdvance);
    const status = remainingAfter === 0 ? "paid" : "pending";

    const { error } = await db
      .from("labor_tasks")
      .update({ advance: newAdvance, status, cashbook_entry_id: cashbookEntryId })
      .eq("id", payingTask.id);

    if (error) { showToast(error.message, "err"); return; }

    showToast(
      remainingAfter === 0
        ? `Paid ${formatCurrency(payNow)} for "${payingTask.task_name}"`
        : `Paid ${formatCurrency(payNow)} — remaining due ${formatCurrency(remainingAfter)} for "${payingTask.task_name}"`,
      "ok"
    );
    setShowPayTaskModal(false);
    fetchData();
  }

  async function handleDeleteTask(task: LaborTask) {
    const ok = await confirmDialog({
      title: "Delete task?",
      message: `Delete task "${task.task_name}" (${formatCurrency(Number(task.amount))})?`,
      details: task.cashbook_entry_id ? "The linked cashbook entry will also be removed." : undefined,
      tone: "danger",
    });
    if (!ok) return;
    if (task.cashbook_entry_id) {
      await db.from("cashbook").delete().eq("id", task.cashbook_entry_id);
    }

    const restore = task.status === "pending" ? Number(task.advance_from_balance ?? 0) : 0;
    if (restore > 0) {
      const { data: row } = await db
        .from("laborers")
        .select("advance_balance")
        .eq("id", task.laborer_id)
        .single();
      const cur = Number((row as Laborer | null)?.advance_balance ?? 0);
      await db
        .from("laborers")
        .update({ advance_balance: cur + restore })
        .eq("id", task.laborer_id);
    }

    await db.from("labor_tasks").delete().eq("id", task.id);
    await logActivity({
      action: "delete",
      entityType: "labor_task",
      entityId: task.id,
      title: "Labor Task Deleted",
      subtitle: task.task_name,
      amount: Number(task.amount),
      metadata: { status: task.status, laborer_id: task.laborer_id },
    });
    showToast("Task deleted", "ok");
    fetchData();
  }

  function openEditTask(task: LaborTask, laborer: LaborerWithData) {
    const t = task as LaborTask & { width?: number | null; height?: number | null };
    setEditingTask(task);
    setEditTaskLaborer(laborer);
    setEditTaskName(task.task_name);
    setEditTaskDate(task.date);
    setEditTaskAmount(String(task.amount));
    setEditTaskWidth(t.width != null ? String(t.width) : "");
    setEditTaskHeight(t.height != null ? String(t.height) : "");
  }

  async function handleSaveEditTask() {
    if (!editingTask) return;
    const amt = parseFloat(editTaskAmount);
    if (!editTaskName.trim() || !amt || amt <= 0) {
      showToast("Enter a valid task name and amount", "err");
      return;
    }
    const w = parseFloat(editTaskWidth) || null;
    const h = parseFloat(editTaskHeight) || null;
    const sqft = w && h ? Math.round(w * h * 100) / 100 : null;
    const newStatus: "pending" | "paid" = amt - Number(editingTask.advance) <= 0 ? "paid" : "pending";
    const { error } = await db.from("labor_tasks").update({
      task_name: editTaskName.trim(),
      date: editTaskDate,
      amount: amt,
      width: w,
      height: h,
      sqft,
      status: newStatus,
    }).eq("id", editingTask.id);
    if (error) { showToast(error.message, "err"); return; }
    showToast("Task updated", "ok");
    setEditingTask(null);
    fetchData();
  }

  function printSingleTaskSlip(task: LaborTask, laborer: LaborerWithData) {
    if (taskSlipPrintBusy) return;
    setTaskSlipToPrint({ task, laborer });
    setTaskSlipPrintBusy(true);

    const printOnlyEls = Array.from(document.querySelectorAll<HTMLElement>(".print-only"));
    printOnlyEls.forEach((el) => el.style.setProperty("display", "none", "important"));

    const styleEl = document.createElement("style");
    styleEl.id = "__thermal_task_slip_style";
    styleEl.textContent = "@page { size: 80mm auto; margin: 2mm 3mm; }";
    document.head.appendChild(styleEl);
    document.body.classList.add("thermal-mode");

    const cleanup = () => {
      document.getElementById("__thermal_task_slip_style")?.remove();
      document.body.classList.remove("thermal-mode");
      printOnlyEls.forEach((el) => el.style.removeProperty("display"));
      setTaskSlipPrintBusy(false);
      setTaskSlipToPrint(null);
    };

    let ran = false;
    const run = () => {
      if (ran) return;
      ran = true;
      window.removeEventListener("afterprint", run);
      cleanup();
    };
    window.addEventListener("afterprint", run);
    window.setTimeout(run, 3500);
    setTimeout(() => window.print(), 80);
  }

  // ── UI ─────────────────────────────────────────────────────────────────────

  const inputStyle = { borderColor: "var(--gray-200)", background: "var(--gray-50)", color: "var(--gray-900)" };

  const selectedLaborer =
    selectedLaborerId ? laborers.find((l) => l.id === selectedLaborerId) ?? null : null;

  return (
    <>
    <div className="no-print animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-5 gap-3 flex-wrap">
        <div>
          <h1 className="text-xl font-extrabold" style={{ color: "var(--gray-900)" }}>Labor</h1>
          <p className="text-xs mt-0.5" style={{ color: "var(--gray-800)" }}>Manage laborers, tasks &amp; advances</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => { setTplName(""); setShowTemplateModal(true); }}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[9px] text-[12.5px] font-semibold cursor-pointer"
            style={{ background: "var(--gray-100)", color: "var(--blue-deeper)", border: "1.5px solid var(--gray-200)" }}
          >
            <ListChecks size={14} /> Task Templates
          </button>
          <button
            onClick={openAddLaborer}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[9px] border-none text-[12.5px] font-semibold cursor-pointer text-white"
            style={{ background: "linear-gradient(135deg, var(--blue-deeper), var(--blue))", boxShadow: "0 2px 10px rgba(21,128,61,.28)" }}
          >
            <Plus size={14} /> Add Laborer
          </button>
        </div>
      </div>

      {/* Stats */}
      <div
        className="rounded-[14px] border border-[var(--gray-100)] overflow-hidden mb-5"
        style={{ boxShadow: "var(--shadow-sm)", background: "var(--gray-50)" }}
      >
        <div className="px-4 py-3 border-b border-[var(--gray-100)] bg-white">
          <h2 className="text-[13px] font-extrabold m-0" style={{ color: "var(--gray-900)" }}>Labor Overview</h2>
          <p className="text-[10px] m-0 mt-0.5 leading-snug" style={{ color: "var(--gray-600)" }}>
            Summary of active laborers, pending earnings, advances &amp; total payouts
          </p>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "Active Laborers", val: String(activeLaborers.length), color: "var(--gray-900)" },
              { label: "Pending Earnings", val: formatCurrency(totalPending), color: "var(--orange)" },
              { label: "Total Advances", val: formatCurrency(totalAdvances), color: "var(--red)" },
              { label: "Total Paid (Tasks)", val: formatCurrency(totalPaid), color: "var(--green)" },
            ].map((c) => (
              <div
                key={c.label}
                className="rounded-[10px] border border-[var(--gray-100)] bg-white px-3 py-2.5"
                style={{ boxShadow: "var(--shadow-xs)" }}
              >
                <div className="text-[9px] font-bold tracking-wider uppercase mb-0.5" style={{ color: "var(--gray-600)" }}>{c.label}</div>
                <div className="text-[14px] font-extrabold font-mono leading-tight" style={{ color: c.color }}>{c.val}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="flex items-center gap-2.5 mb-3">
        <Briefcase size={14} style={{ color: "var(--gray-700)" }} />
        <span className="text-[10px] font-bold tracking-[2px] uppercase" style={{ color: "var(--gray-700)" }}>
          Laborers
        </span>
        <div className="flex-1 h-px" style={{ background: "var(--gray-200)" }} />
        <span className="text-[11px] font-semibold" style={{ color: "var(--gray-700)" }}>{laborers.length} records</span>
      </div>

      {/* Sidebar + selected laborer detail */}
      {laborers.length === 0 ? (
        <div className="bg-white rounded-[14px] border border-[var(--gray-100)] text-center py-12 text-[13px]"
          style={{ color: "var(--gray-800)", boxShadow: "var(--shadow-sm)" }}>
          No laborers found. Add your first laborer.
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-4 items-stretch min-h-0">
          {/* Laborers sidebar */}
          <aside
            className="w-full lg:w-[272px] shrink-0 bg-white rounded-[14px] border border-[var(--gray-100)] flex flex-col overflow-hidden max-h-[min(42vh,320px)] lg:max-h-none"
            style={{ boxShadow: "var(--shadow-sm)" }}
          >
            <div className="px-3 py-2.5 border-b border-[var(--gray-100)] shrink-0" style={{ background: "var(--gray-50)" }}>
              <div className="text-[9.5px] font-bold tracking-[1.4px] uppercase" style={{ color: "var(--gray-800)" }}>Laborers</div>
              <div className="text-[11px] mt-0.5" style={{ color: "var(--gray-800)" }}>Select a name to view tasks &amp; advances</div>
            </div>
            <nav className="overflow-y-auto flex-1 p-2 min-h-0 lg:max-h-[calc(100vh-220px)]">
              <ul className="flex flex-col gap-1">
                {laborers.map((l) => {
                  const isSel = l.id === selectedLaborerId;
                  const np = laborerNetPayable(l);
                  const st = Number(l.advance_balance ?? 0);
                  const isActive = l.status === "Active";
                  return (
                    <li key={l.id}>
                      <button
                        type="button"
                        onClick={() => setSelectedLaborerId(l.id)}
                        className="w-full text-left rounded-[10px] px-3 py-2.5 transition-colors border-[1.5px] cursor-pointer"
                        style={{
                          borderColor: isSel ? "var(--blue)" : "transparent",
                          background: isSel ? "var(--blue-light)" : "transparent",
                        }}
                      >
                        <div className="flex items-center gap-2.5">
                          <div
                            className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-[11px] font-bold text-white"
                            style={{ background: isActive ? "linear-gradient(135deg, var(--blue-deeper), var(--blue))" : "var(--gray-300)" }}
                          >
                            {l.name.split(" ").map((p) => p[0]).join("").toUpperCase().slice(0, 2)}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className="text-[13px] font-bold truncate" style={{ color: "var(--gray-900)" }}>{l.name}</span>
                              {!isActive && (
                                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full shrink-0"
                                  style={{ background: "var(--gray-200)", color: "var(--gray-800)" }}>Off</span>
                              )}
                            </div>
                            <div className="text-[10px] font-mono mt-0.5" style={{ color: "var(--gray-800)" }}>
                              {np > 0 ? <span style={{ color: "var(--orange)" }}>Due {formatCurrency(np)}</span> : <span>—</span>}
                              {st > 0 && (
                                <span style={{ color: "var(--red)" }}> · Adv {formatCurrency(st)}</span>
                              )}
                            </div>
                          </div>
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          {/* Detail panel */}
          <div className="flex-1 min-w-0 bg-white rounded-[14px] border border-[var(--gray-100)] overflow-hidden flex flex-col"
            style={{ boxShadow: "var(--shadow-sm)" }}>
            {selectedLaborer ? (() => {
              const l = selectedLaborer;
              const pendingTasks = l.tasks.filter((t) => t.status === "pending");
              const netPayable = pendingTasks.reduce((s, t) => s + Math.max(0, Number(t.amount) - Number(t.advance)), 0);
              const paidTotal = l.tasks.filter((t) => t.status === "paid").reduce((s, t) => s + Math.max(0, Number(t.amount) - Number(t.advance)), 0);
              const standingAdv = Number(l.advance_balance ?? 0);
              const isActive = l.status === "Active";

              return (
                <>
                  <div className="flex items-center gap-3 px-4 py-4 flex-wrap border-b border-[var(--gray-100)]" style={{ background: "var(--gray-50)" }}>
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-[14px] font-bold text-white"
                      style={{ background: isActive ? "linear-gradient(135deg, var(--blue-deeper), var(--blue))" : "var(--gray-300)" }}
                    >
                      {l.name.split(" ").map((p) => p[0]).join("").toUpperCase().slice(0, 2)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h2 className="text-[16px] font-extrabold" style={{ color: "var(--gray-900)" }}>{l.name}</h2>
                        {l.role && (
                          <span className="text-[10.5px] font-semibold px-2 py-0.5 rounded-full"
                            style={{ background: "var(--blue-light)", color: "var(--blue-deeper)" }}>{l.role}</span>
                        )}
                        {!isActive && (
                          <span className="text-[10.5px] font-semibold px-2 py-0.5 rounded-full"
                            style={{ background: "var(--gray-100)", color: "var(--gray-800)" }}>Inactive</span>
                        )}
                      </div>
                      {l.phone && <div className="text-[12px] mt-0.5" style={{ color: "var(--gray-800)" }}>{l.phone}</div>}
                      <div className="text-[11px] font-semibold mt-1 font-mono" style={{ color: standingAdv > 0 ? "var(--red)" : "var(--gray-400)" }}>
                        Standing advance: {formatCurrency(standingAdv)}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-right flex-wrap">
                      <div>
                        <div className="text-[10px] font-bold tracking-[1px] uppercase mb-0.5" style={{ color: "var(--gray-800)" }}>Net Payable</div>
                        <div className="text-[14px] font-bold font-mono" style={{ color: netPayable > 0 ? "var(--orange)" : "var(--gray-400)" }}>
                          {netPayable > 0 ? formatCurrency(netPayable) : "—"}
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] font-bold tracking-[1px] uppercase mb-0.5" style={{ color: "var(--gray-800)" }}>Paid</div>
                        <div className="text-[14px] font-bold font-mono" style={{ color: paidTotal > 0 ? "var(--green)" : "var(--gray-400)" }}>
                          {paidTotal > 0 ? formatCurrency(paidTotal) : "—"}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-wrap w-full lg:w-auto lg:ml-auto justify-end">
                      {isActive && (
                        <>
                          <button type="button" onClick={() => openGiveAdvance(l)}
                            className="text-[11px] font-bold px-3 py-2 rounded-[8px] border-none cursor-pointer text-white inline-flex items-center gap-1"
                            style={{ background: "var(--red)" }}>
                            <Wallet size={12} /> Give Advance
                          </button>
                          <button type="button" onClick={() => openAddTask(l)}
                            className="text-[11px] font-bold px-3 py-2 rounded-[8px] border-none cursor-pointer text-white inline-flex items-center gap-1"
                            style={{ background: "var(--orange)" }}>
                            <Briefcase size={12} /> Add Task
                          </button>
                        </>
                      )}
                      {l.phone && (
                        <button
                          type="button"
                          onClick={() => {
                            if (!openWhatsAppNewTab(l.phone, buildLaborTasksMessage(l))) {
                              showToast("Add a valid phone number for this laborer", "err");
                            }
                          }}
                          className="w-8 h-8 rounded-[6px] border-[1.5px] flex items-center justify-center cursor-pointer bg-white transition-colors hover:opacity-90"
                          style={{ borderColor: "#25D366", color: "#25D366" }}
                          title="WhatsApp: send task assignment"
                        >
                          <WhatsAppIcon size={15} />
                        </button>
                      )}
                      <button type="button" onClick={openPrintReportModal}
                        className="w-8 h-8 rounded-[6px] border-[1.5px] flex items-center justify-center cursor-pointer bg-white transition-all hover:bg-[var(--blue-pale)]"
                        style={{ borderColor: "var(--gray-200)", color: "var(--blue-deeper)" }}
                        title="Print Report">
                        <Printer size={14} />
                      </button>
                      <button type="button" onClick={() => openEditLaborer(l)}
                        className="w-8 h-8 rounded-[6px] border-[1.5px] flex items-center justify-center cursor-pointer bg-white transition-all hover:bg-[var(--blue-pale)]"
                        style={{ borderColor: "var(--gray-200)", color: "var(--blue-deeper)" }}>
                        <Pencil size={14} />
                      </button>
                      {userProfile?.isAdmin && (
                        <button type="button" onClick={() => handleDeleteLaborer(l)}
                          className="w-8 h-8 rounded-[6px] border-[1.5px] flex items-center justify-center cursor-pointer bg-white transition-all hover:bg-[var(--red-light)]"
                          style={{ borderColor: "var(--gray-200)", color: "var(--red)" }}>
                          <Trash2 size={14} />
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto">

                    {/* ── Tasks Table ── */}
                    <div className="border-b border-[var(--gray-100)]">
                      <div className="flex items-center justify-between px-4 py-2.5" style={{ background: "var(--gray-50)" }}>
                        <span className="text-[10.5px] font-bold tracking-[1.5px] uppercase" style={{ color: "var(--gray-800)" }}>
                          Tasks ({l.tasks.length})
                        </span>
                      </div>

                      {l.tasks.length === 0 ? (
                        <div className="px-4 py-3 text-[12px]" style={{ color: "var(--gray-800)" }}>No tasks assigned yet.</div>
                      ) : (
                        <div className="overflow-x-auto">
                          <table className={DT.table}>
                            <thead>
                              <tr>
                                {["Date", "Task", "Total Amount", "Advance", "Net Payable", "Status", ""].map((h) => {
                                  const right = ["Total Amount", "Advance", "Net Payable"].includes(h);
                                  const center = h === "Status" || h === "";
                                  return (
                                    <th key={h || "x"} className={`${DT.thDense} ${right ? "text-right" : center ? "text-center" : "text-left"}`} style={DT.thStyle}>
                                      {h}
                                    </th>
                                  );
                                })}
                              </tr>
                            </thead>
                            <tbody>
                              {l.tasks.map((task, i) => {
                                const taskNet = Math.max(0, Number(task.amount) - Number(task.advance));
                                const needsCashPay = task.status === "pending" && taskNet > 0;
                                const isSettled = !needsCashPay;
                                const badgeLabel = needsCashPay ? "Pending" : task.status === "paid" && task.cashbook_entry_id ? "Paid" : "Settled";
                                const badgeColor = needsCashPay ? "var(--orange)" : "var(--green)";
                                const badgeBg = needsCashPay ? "var(--orange-light)" : "var(--green-light)";
                                return (
                                  <tr key={task.id} className={DT.row}>
                                    <td className={`${DT.tdDense} ${DT.cellBody} whitespace-nowrap`} style={{ color: "var(--gray-800)" }}>
                                      {formatDate(task.date)}
                                    </td>
                                    <td className={DT.tdDense}>
                                      <div className={DT.cellPrimary} style={{ color: "var(--gray-900)" }}>{task.task_name}</div>
                                      {task.description && (
                                        <div className={`${DT.cellBody} mt-0.5`} style={{ color: "var(--gray-800)" }}>{task.description}</div>
                                      )}
                                    </td>
                                    <td className={`${DT.tdDense} font-mono text-right font-bold text-[15px]`} style={{ color: "var(--gray-900)", whiteSpace: "nowrap" }}>
                                      {formatCurrency(Number(task.amount))}
                                    </td>
                                    <td className={`${DT.tdDense} font-mono text-right text-[13.5px] font-semibold`} style={{ color: Number(task.advance) > 0 ? "var(--red)" : "var(--gray-300)", whiteSpace: "nowrap" }}>
                                      {Number(task.advance) > 0 ? formatCurrency(Number(task.advance)) : "—"}
                                    </td>
                                    <td className={`${DT.tdDense} font-mono text-right font-bold text-[15px]`} style={{ color: isSettled ? "var(--green)" : "var(--orange)", whiteSpace: "nowrap" }}>
                                      {formatCurrency(taskNet)}
                                    </td>
                                    <td className={`${DT.tdDense} text-center`}>
                                      <span className={DT.badge}
                                        style={{ background: badgeBg, color: badgeColor }}>
                                        {badgeLabel}
                                      </span>
                                    </td>
                                    <td className={`${DT.tdDense} text-center`}>
                                      <div className="flex items-center gap-1.5">
                                        {needsCashPay && (
                                          <button type="button" onClick={() => openPayTask(task, l.name)}
                                            className="text-[10px] font-bold px-2.5 py-1 rounded-[6px] border-none cursor-pointer text-white flex items-center gap-1"
                                            style={{ background: "var(--green)" }}>
                                            <Wallet size={10} /> Pay
                                          </button>
                                        )}
                                        <button type="button" onClick={() => printSingleTaskSlip(task, l)}
                                          className="w-6 h-6 rounded-[5px] border-[1.5px] flex items-center justify-center cursor-pointer bg-white"
                                          style={{ borderColor: "var(--gray-200)", color: "var(--blue-deeper)" }}
                                          title="Print task slip">
                                          <Printer size={11} />
                                        </button>
                                        <button type="button" onClick={() => openEditTask(task, l)}
                                          className="w-6 h-6 rounded-[5px] border-[1.5px] flex items-center justify-center cursor-pointer bg-white"
                                          style={{ borderColor: "var(--gray-200)", color: "var(--orange)" }}
                                          title="Edit task">
                                          <Pencil size={11} />
                                        </button>
                                        {userProfile?.isAdmin && (
                                          <button type="button" onClick={() => handleDeleteTask(task)}
                                            className="w-6 h-6 rounded-[5px] border-[1.5px] flex items-center justify-center cursor-pointer bg-white"
                                            style={{ borderColor: "var(--gray-200)", color: "var(--red)" }}>
                                            <Trash2 size={11} />
                                          </button>
                                        )}
                                      </div>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                            <tfoot>
                              <tr style={{ borderTop: "2px solid var(--gray-100)", background: "var(--gray-50)" }}>
                                <td colSpan={2} className={`${DT.tdDense} text-[13.5px] font-bold`} style={{ color: "var(--gray-800)" }}>Totals</td>
                                <td className={`${DT.tdDense} font-mono text-right font-bold text-[15px]`} style={{ color: "var(--gray-900)" }}>
                                  {formatCurrency(l.tasks.reduce((s, t) => s + Number(t.amount), 0))}
                                </td>
                                <td className={`${DT.tdDense} font-mono text-right font-bold text-[15px]`} style={{ color: "var(--red)" }}>
                                  {formatCurrency(l.tasks.reduce((s, t) => s + Number(t.advance), 0))}
                                </td>
                                <td colSpan={3} className={`${DT.tdDense} text-[13.5px]`}>
                                  <span className="font-bold font-mono" style={{ color: "var(--orange)" }}>Due {formatCurrency(netPayable)}</span>
                                  <span className="mx-2" style={{ color: "var(--gray-700)" }}>|</span>
                                  <span className="font-bold font-mono" style={{ color: "var(--green)" }}>Paid {formatCurrency(paidTotal)}</span>
                                </td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      )}
                    </div>

                    {/* ── Standalone Advances Table ── */}
                    <div>
                      <div className="flex items-center justify-between px-4 py-2.5" style={{ background: "var(--gray-50)", borderBottom: "1px solid var(--gray-100)" }}>
                        <span className="text-[10.5px] font-bold tracking-[1.5px] uppercase" style={{ color: "var(--gray-800)" }}>
                          Advances ({l.advances.length})
                        </span>
                        {Number(l.advance_balance) > 0 && (
                          <span className="text-[10.5px] font-bold" style={{ color: "var(--red)" }}>
                            Pool: {formatCurrency(Number(l.advance_balance))}
                          </span>
                        )}
                      </div>

                      {l.advances.length === 0 ? (
                        <div className="px-4 py-3 text-[12px]" style={{ color: "var(--gray-800)" }}>
                          None yet. Use &quot;Give Advance&quot; to pay before a task exists.
                        </div>
                      ) : (
                        <div className="overflow-x-auto">
                          <table className={DT.table}>
                            <thead>
                              <tr>
                                {["Date", "Notes", "Amount"].map((h) => (
                                  <th key={h} className={`${DT.thDense} ${h === "Amount" ? "text-right" : "text-left"}`} style={DT.thStyle}>
                                    {h}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {[...l.advances]
                                .sort((a, b) => (a.created_at || a.date).localeCompare(b.created_at || b.date))
                                .map((a) => (
                                  <tr key={a.id} className={DT.row}>
                                    <td className={`${DT.tdDense} ${DT.cellBody} whitespace-nowrap`} style={{ color: "var(--gray-800)" }}>{formatDateTime(a.created_at || a.date)}</td>
                                    <td className={`${DT.tdDense} ${DT.cellBody}`} style={{ color: "var(--gray-900)" }}>{a.notes || "—"}</td>
                                    <td className={`${DT.tdDense} font-mono text-right font-bold text-[15px]`} style={{ color: "var(--red)", whiteSpace: "nowrap" }}>{formatCurrency(Number(a.amount))}</td>
                                  </tr>
                                ))}
                            </tbody>
                            <tfoot>
                              <tr style={{ borderTop: "2px solid var(--gray-100)", background: "var(--gray-50)" }}>
                                <td colSpan={2} className={`${DT.tdDense} text-[13.5px] font-bold`} style={{ color: "var(--gray-800)" }}>Total Given</td>
                                <td className={`${DT.tdDense} font-mono text-right font-bold text-[15px]`} style={{ color: "var(--red)" }}>
                                  {formatCurrency(l.advances.reduce((s, a) => s + Number(a.amount), 0))}
                                </td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      )}
                    </div>

                  </div>
                </>
              );
            })() : (
              <div className="p-8 text-center text-[13px]" style={{ color: "var(--gray-800)" }}>Select a laborer from the list.</div>
            )}
          </div>
        </div>
      )}

      {/* ── Print-only Labor Report — rendered outside animate-fade-in, see below ── */}


      {/* ── Add/Edit Laborer Modal ───────────────────────────────────────────── */}
      {showLaborerModal && (
        <Modal title={editingLaborer ? "Edit Laborer" : "Add Laborer"} onClose={() => setShowLaborerModal(false)}>
          <div className="grid grid-cols-2 gap-3.5">
            <div className="flex flex-col gap-1 col-span-2">
              <label className="text-[10px] font-bold tracking-[1.2px] uppercase" style={{ color: "var(--blue-deeper)" }}>Full Name *</label>
              <input value={lName} onChange={(e) => setLName(e.target.value)} placeholder="e.g. Tariq Ahmed"
                className="border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none" style={inputStyle} />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold tracking-[1.2px] uppercase" style={{ color: "var(--blue-deeper)" }}>Role / Position</label>
              <input value={lRole} onChange={(e) => setLRole(e.target.value)} placeholder="e.g. Installer"
                className="border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none" style={inputStyle} />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold tracking-[1.2px] uppercase" style={{ color: "var(--blue-deeper)" }}>Phone</label>
              <input value={lPhone} onChange={(e) => setLPhone(e.target.value.replace(/\D/g, ""))} placeholder="03XX XXXXXXX"
                maxLength={11} inputMode="numeric"
                className="border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none" style={inputStyle} />
            </div>
            <div className="flex flex-col gap-1 col-span-2">
              <label className="text-[10px] font-bold tracking-[1.2px] uppercase" style={{ color: "var(--blue-deeper)" }}>Status</label>
              <div className="flex border-[1.5px] rounded-[9px] overflow-hidden" style={{ borderColor: "var(--gray-200)" }}>
                {(["Active", "Inactive"] as const).map((s) => (
                  <button key={s} onClick={() => setLStatus(s)}
                    className="flex-1 py-2 text-[12.5px] font-semibold border-none cursor-pointer transition-all"
                    style={{
                      background: lStatus === s ? (s === "Active" ? "var(--green)" : "var(--gray-400)") : "var(--gray-50)",
                      color: lStatus === s ? "#fff" : "var(--gray-500)",
                    }}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <ModalFooter onCancel={() => setShowLaborerModal(false)} onSave={() => run(handleSaveLaborer)} saveDisabled={saving}
            saveLabel={editingLaborer ? "Update Laborer" : "Add Laborer"} />
        </Modal>
      )}

      {/* ── Task Templates Modal ─────────────────────────────────────────────── */}
      {showTemplateModal && (
        <Modal title="Task Templates" subtitle="Define reusable task names for quick selection" onClose={() => setShowTemplateModal(false)}>
          {/* Existing templates */}
          <div className="flex flex-col gap-2 mb-4 max-h-[260px] overflow-y-auto">
            {taskTemplates.length === 0 && (
              <p className="text-[12px] text-center py-4" style={{ color: "var(--gray-400)" }}>No templates yet. Add one below.</p>
            )}
            {taskTemplates.map((t) => (
              <div key={t.id} className="flex items-center justify-between gap-2 px-3 py-2.5 rounded-[9px] border border-[var(--gray-100)]" style={{ background: "var(--gray-50)" }}>
                <span className="text-[13px] font-semibold" style={{ color: "var(--gray-900)" }}>{t.name}</span>
                <button type="button" onClick={() => handleDeleteTemplate(t.id)}
                  className="w-7 h-7 rounded-[7px] flex items-center justify-center border-none cursor-pointer shrink-0"
                  style={{ background: "var(--red-light)", color: "var(--red)" }}>
                  <Trash2 size={12} />
                </button>
              </div>
            ))}
          </div>
          {/* Add new template */}
          <div className="border-t border-[var(--gray-100)] pt-4">
            <p className="text-[10px] font-bold tracking-[1.2px] uppercase mb-2.5" style={{ color: "var(--blue-deeper)" }}>Add New Template</p>
            <div className="flex gap-2">
              <input
                value={tplName}
                onChange={(e) => setTplName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAddTemplate()}
                placeholder="Task name (e.g. Banner Installation)"
                className="flex-1 border-2 border-[var(--gray-200)] rounded-[8px] px-3 py-2 text-[13px] outline-none focus:border-[var(--blue)]"
                style={{ color: "var(--gray-900)" }}
              />
              <button type="button" onClick={handleAddTemplate}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-[8px] text-[12.5px] font-semibold border-none cursor-pointer text-white"
                style={{ background: "var(--blue-deeper)" }}>
                <Plus size={13} /> Add
              </button>
            </div>
          </div>
          <div className="flex justify-end pt-4 mt-2 border-t border-[var(--gray-100)]">
            <button type="button" onClick={() => setShowTemplateModal(false)}
              className="px-4 py-2 rounded-[9px] text-[12.5px] font-semibold border-[1.5px] cursor-pointer bg-white"
              style={{ borderColor: "var(--gray-200)", color: "var(--blue-deeper)" }}>
              Done
            </button>
          </div>
        </Modal>
      )}

      {/* ── Give advance (no task) ───────────────────────────────────────────── */}
      {showAdvanceModal && advanceLaborer && (
        <Modal title={`Give Advance — ${advanceLaborer.name}`} onClose={() => setShowAdvanceModal(false)}>
          <div className="rounded-[10px] px-3 py-2.5 mb-3.5 text-[12px]" style={{ background: "var(--gray-50)", color: "var(--gray-900)" }}>
            Current standing advance:{" "}
            <span className="font-mono font-bold" style={{ color: "var(--gray-900)" }}>
              {formatCurrency(Number(advanceLaborer.advance_balance ?? 0))}
            </span>
            . This will be logged in the cashbook and applied to existing pending tasks first (oldest first), then stored as standing balance for future tasks.
          </div>
          <div className="grid grid-cols-2 gap-3.5">
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold tracking-[1.2px] uppercase" style={{ color: "var(--blue-deeper)" }}>Amount (Rs) *</label>
              <input value={advAmount} onChange={(e) => setAdvAmount(e.target.value)} type="number" placeholder="0"
                className="border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none font-mono" style={inputStyle} />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold tracking-[1.2px] uppercase" style={{ color: "var(--blue-deeper)" }}>Date</label>
              <input value={advDate} onChange={(e) => setAdvDate(e.target.value)} type="date"
                className="border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none" style={inputStyle} />
            </div>
            <div className="flex flex-col gap-1 col-span-2">
              <label className="text-[10px] font-bold tracking-[1.2px] uppercase" style={{ color: "var(--blue-deeper)" }}>Notes (optional)</label>
              <input value={advNotes} onChange={(e) => setAdvNotes(e.target.value)} placeholder="e.g. Eid advance"
                className="border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none" style={inputStyle} />
            </div>
            <div className="flex flex-col gap-1 col-span-2">
              <label className="text-[10px] font-bold tracking-[1.2px] uppercase" style={{ color: "var(--blue-deeper)" }}>Paid via</label>
              <div className="flex flex-wrap border-[1.5px] rounded-[9px] overflow-hidden" style={{ borderColor: "var(--gray-200)" }}>
                {paymentMethods.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setAdvLaborMethod(m.name)}
                    className="flex-1 min-w-[80px] py-2 text-[11px] font-semibold border-none cursor-pointer transition-all"
                    style={{
                      background: advLaborMethod === m.name ? "var(--blue-deeper)" : "var(--gray-50)",
                      color: advLaborMethod === m.name ? "#fff" : "var(--gray-500)",
                    }}
                  >
                    {m.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <ModalFooter
            onCancel={() => setShowAdvanceModal(false)}
            onSave={() => run(handleSaveStandaloneAdvance)}
            saveDisabled={saving}
            saveLabel="Record advance"
            saveStyle={{ background: "var(--red)" }}
          />
        </Modal>
      )}

      {/* ── Add Task Modal ───────────────────────────────────────────────────── */}
      {showTaskModal && taskLaborer && (() => {
        const standing = Number(taskLaborer.advance_balance ?? 0);
        const laborerData = laborers.find((l) => l.id === taskLaborer.id);
        const previousOwed = (laborerData?.tasks ?? [])
          .filter((t) => t.status === "pending")
          .reduce((s, t) => s + Math.max(0, Number(t.amount) - Number(t.advance)), 0);
        const advNum = Math.max(0, parseFloat(tAdvance) || 0);
        let remainingFresh = advNum;
        let remainingStanding = standing;
        const previews = tItems.map((it) => {
          const rate = parseFloat(it.amount) || 0;
          const qty = Math.max(1, parseFloat(it.qty) || 1);
          const w = parseFloat(it.width);
          const h = parseFloat(it.height);
          const sqftUnit = w > 0 && h > 0 ? Math.round(w * h * 100) / 100 : null;
          const sqftVal = sqftUnit !== null ? Math.round(sqftUnit * qty * 100) / 100 : null;
          const amt = Math.round((sqftUnit !== null ? sqftUnit * rate : rate) * qty * 100) / 100;
          const fromFresh = Math.min(remainingFresh, amt);
          remainingFresh -= fromFresh;
          const fromPool = Math.min(remainingStanding, amt - fromFresh);
          remainingStanding -= fromPool;
          const adv = fromFresh + fromPool;
          return { amt, sqft: sqftVal, adv, fromFresh, fromPool, net: Math.max(0, amt - adv) };
        });
        const totalAmt = previews.reduce((s, p) => s + p.amt, 0);
        const totalAdv = previews.reduce((s, p) => s + p.adv, 0);
        const totalFromPool = previews.reduce((s, p) => s + p.fromPool, 0);
        const totalNet = previews.reduce((s, p) => s + p.net, 0);
        // Leftover fresh advance is applied to existing pending tasks first
        // (oldest-first) — matches handleSaveTask, mirrors the standalone
        // advance flow. Anything still left after that becomes the new pool.
        const freshAppliedToPrevious = Math.min(remainingFresh, previousOwed);
        const remainingPreviousOwed = previousOwed - freshAppliedToPrevious;
        const finalLeftoverFresh = remainingFresh - freshAppliedToPrevious;
        const poolAfter = standing - totalFromPool + finalLeftoverFresh;
        const lastIdx = tItems.length - 1;

        const numCell = "px-1.5 py-2 border-b border-[var(--gray-100)]";
        const numInput = "border-2 border-[var(--gray-200)] rounded-[8px] px-2 py-2.5 text-[17px] font-bold font-mono outline-none bg-white focus:border-[var(--blue)] focus:ring-2 focus:ring-[var(--blue-light)] w-full text-center transition-all text-[#0C2433]";

        return (
          <div className="fixed inset-0 z-[800] flex items-start justify-center backdrop-blur-sm pt-6 sm:pt-10 px-3 pb-8 overflow-y-auto">
            <button type="button" aria-label="Close" className="absolute inset-0 bg-black/35 cursor-default border-none" onClick={() => setShowTaskModal(false)} />
            <div
              className="relative z-10 w-full max-w-[1100px] bg-white rounded-[14px] border border-[var(--gray-100)]"
              style={{ boxShadow: "var(--shadow-lg)" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between gap-3 px-5 py-4 rounded-t-[14px]" style={{ background: "var(--blue-deeper)" }}>
                <div>
                  <h2 className="text-[15px] font-extrabold text-white tracking-tight">Add Tasks — {taskLaborer.name}</h2>
                  <p className="text-[11px] text-white/70 mt-0.5">
                    Standing advance: <span className="font-mono font-bold">{formatCurrency(standing)}</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {/* Shared date */}
                  <input
                    type="date"
                    value={tDate}
                    onChange={(e) => setTDate(e.target.value)}
                    className="border-2 border-white/30 rounded-[8px] px-3 py-2 text-[13px] font-bold outline-none bg-white/10 text-white focus:bg-white/20 transition-all"
                  />
                  <button type="button" onClick={printTaskAssignment} disabled={taskPrintBusy} title="Print task assignment on thermal"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-[8px] border-[1.5px] text-[11px] font-bold cursor-pointer text-white hover:bg-white/10 transition-all disabled:opacity-40"
                    style={{ borderColor: "rgba(255,255,255,0.35)" }}>
                    <Printer size={14} /> Print
                  </button>
                  <button type="button" onClick={() => setShowTaskModal(false)}
                    className="w-9 h-9 rounded-[8px] flex items-center justify-center border-none cursor-pointer text-white hover:bg-white/10 transition-all">
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto px-2 sm:px-4 py-4" style={{ minHeight: 280 }}>
                <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 700 }}>
                  <thead>
                    <tr>
                      {["Task", "W (ft)", "H (ft)", "Qty", "Total Sq.ft", "Rate / Sqft", "Total", "Remaining", ""].map((h) => {
                        const center = ["W (ft)", "H (ft)", "Qty", "Total Sq.ft", "Rate / Sqft", "Total", "Remaining", ""].includes(h);
                        return (
                          <th key={h || "actions"} className={`${DT.thDense} ${center ? "text-center" : "text-left"}`} style={DT.thStyle}>
                            {h}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {tItems.map((it, idx) => {
                      const p = previews[idx];
                      return (
                        <tr key={idx} className="transition-colors hover:bg-[var(--blue-pale)]">
                          {/* Task name */}
                          <td className="px-2 py-2 border-b border-[var(--gray-100)]" style={{ minWidth: 220, position: "relative" }}>
                            <div
                              style={{ position: "relative" }}
                              onBlur={() => {
                                dropdownCloseTimer.current = setTimeout(() => setTDropdownIdx(null), 150);
                              }}
                            >
                              <input
                                value={it.name}
                                onChange={(e) => updateTItem(idx, "name", e.target.value)}
                                onFocus={() => {
                                  if (dropdownCloseTimer.current) clearTimeout(dropdownCloseTimer.current);
                                  setTDropdownIdx(idx);
                                }}
                                placeholder="e.g. Banner installation…"
                                className="border-2 border-[var(--gray-200)] rounded-[8px] px-2 py-2.5 text-[15px] outline-none bg-white focus:border-[var(--blue)] focus:ring-2 focus:ring-[var(--blue-light)] w-full transition-all"
                                style={{ color: "#0C2433" }}
                              />
                              {tDropdownIdx === idx && taskTemplates.length > 0 && (() => {
                                const q = it.name.toLowerCase();
                                const matches = taskTemplates.filter((t) => t.name.toLowerCase().includes(q));
                                if (matches.length === 0) return null;
                                return (
                                  <div
                                    style={{ position: "absolute", top: "100%", left: 0, right: 0, zIndex: 9999, background: "#fff", border: "1.5px solid var(--blue)", borderTop: "none", borderRadius: "0 0 10px 10px", boxShadow: "0 8px 24px rgba(0,0,0,.13)", maxHeight: 200, overflowY: "auto" }}
                                    onMouseDown={(e) => e.preventDefault()}
                                  >
                                    {matches.map((t) => (
                                      <button
                                        key={t.id}
                                        type="button"
                                        onClick={() => {
                                          updateTItem(idx, "name", t.name);
                                          setTDropdownIdx(null);
                                        }}
                                        className="w-full px-3 py-2.5 border-none cursor-pointer text-left hover:bg-[var(--blue-pale)] transition-colors"
                                        style={{ background: "transparent" }}
                                      >
                                        <span className="text-[13px] font-semibold" style={{ color: "var(--gray-900)" }}>{t.name}</span>
                                      </button>
                                    ))}
                                  </div>
                                );
                              })()}
                            </div>
                          </td>
                          {/* W */}
                          <td className={numCell} style={{ width: 90 }}>
                            <input type="number" min="0" step="0.01" value={it.width} onChange={(e) => updateTItem(idx, "width", e.target.value)}
                              onWheel={(e) => e.currentTarget.blur()} placeholder="0" className={numInput} />
                          </td>
                          {/* H */}
                          <td className={numCell} style={{ width: 90 }}>
                            <input type="number" min="0" step="0.01" value={it.height} onChange={(e) => updateTItem(idx, "height", e.target.value)}
                              onWheel={(e) => e.currentTarget.blur()} placeholder="0" className={numInput} />
                          </td>
                          {/* Qty */}
                          <td className={numCell} style={{ width: 80 }}>
                            <input type="number" min="1" step="1" value={it.qty} onChange={(e) => updateTItem(idx, "qty", e.target.value)}
                              onWheel={(e) => e.currentTarget.blur()} placeholder="1" className={numInput} />
                          </td>
                          {/* Sq.ft */}
                          <td className="px-2 py-2.5 border-b border-[var(--gray-100)] text-center font-mono font-extrabold text-[15px]"
                            style={{ color: p.sqft ? "#0C2433" : "var(--gray-300)", width: 80 }}>
                            {p.sqft ?? "—"}
                          </td>
                          {/* Rate */}
                          <td className={numCell} style={{ width: 110 }}>
                            <input type="number" min="0" step="1" value={it.amount} onChange={(e) => updateTItem(idx, "amount", e.target.value)}
                              onWheel={(e) => e.currentTarget.blur()} placeholder="0" className={numInput} />
                          </td>
                          {/* Total */}
                          <td className="px-2 py-2.5 border-b border-[var(--gray-100)] text-center font-mono font-extrabold whitespace-nowrap text-[15px]"
                            style={{ color: "var(--blue-deeper)", width: 110 }}>
                            {p.amt > 0 ? formatCurrency(p.amt) : "—"}
                          </td>
                          {/* Remaining */}
                          <td className="px-2 py-2.5 border-b border-[var(--gray-100)] text-center font-mono font-extrabold whitespace-nowrap text-[15px]"
                            style={{ color: p.net > 0 ? "var(--green)" : "var(--gray-300)", width: 110 }}>
                            {formatCurrency(p.net)}
                          </td>
                          {/* Actions */}
                          <td className="px-2 py-2.5 border-b border-[var(--gray-100)]" style={{ width: 80 }}>
                            <div className="flex items-center gap-1.5 justify-center">
                              {tItems.length > 1 && (
                                <button type="button" onClick={() => setTItems((prev) => prev.filter((_, j) => j !== idx))}
                                  className="w-7 h-7 rounded-[6px] flex items-center justify-center border-none cursor-pointer shrink-0"
                                  style={{ background: "var(--red-light)", color: "var(--red)" }}>
                                  <Trash2 size={11} />
                                </button>
                              )}
                              {idx === lastIdx && (
                                <button type="button" onClick={() => setTItems((prev) => [...prev, { name: "", amount: "", width: "", height: "", qty: "1" }])}
                                  className="inline-flex items-center gap-1 px-2 py-1.5 rounded-[6px] text-[11px] font-bold border cursor-pointer"
                                  style={{ borderColor: "rgba(14,173,106,.3)", color: "var(--green)", background: "var(--green-light)" }}>
                                  <Plus size={10} /> Add
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Footer */}
              <div className="flex flex-wrap items-end justify-between gap-4 px-5 py-4 border-t border-[var(--gray-100)]" style={{ background: "var(--gray-50)" }}>
                {/* Summary card */}
                <div className="rounded-[10px] border border-[var(--gray-200)] bg-white px-4 py-3 min-w-[min(100%,240px)]" style={{ boxShadow: "var(--shadow-sm)" }}>
                  <div className="text-[9px] font-bold tracking-[1px] uppercase mb-2" style={{ color: "var(--gray-600)" }}>Remaining Balance</div>
                  <div className="flex flex-col gap-1.5 font-mono text-[13px]">
                    {standing > 0 && (
                      <div className="flex justify-between gap-8 pb-1.5 border-b border-[var(--gray-100)]">
                        <span style={{ color: "var(--gray-500)" }}>Standing Advance</span>
                        <span className="font-extrabold" style={{ color: "var(--orange)" }}>{formatCurrency(standing)}</span>
                      </div>
                    )}
                    {previousOwed > 0 && (
                      <div className="flex justify-between gap-8 pb-1.5 border-b border-[var(--gray-100)]">
                        <span style={{ color: "var(--gray-500)" }}>Previous Owed</span>
                        <span className="font-extrabold" style={{ color: "var(--red)" }}>{formatCurrency(previousOwed)}</span>
                      </div>
                    )}
                    {freshAppliedToPrevious > 0 && (
                      <div className="flex justify-between gap-8 pb-1.5 border-b border-[var(--gray-100)]">
                        <span style={{ color: "var(--gray-500)" }}>Applied to Previous</span>
                        <span className="font-extrabold" style={{ color: "var(--green)" }}>− {formatCurrency(freshAppliedToPrevious)}</span>
                      </div>
                    )}
                    <div className="flex justify-between gap-8">
                      <span style={{ color: "var(--gray-700)" }}>Total Amount</span>
                      <span className="font-extrabold" style={{ color: "var(--blue-deeper)" }}>{formatCurrency(totalAmt)}</span>
                    </div>
                    {totalFromPool > 0 && (
                      <div className="flex justify-between gap-8">
                        <span style={{ color: "var(--gray-700)" }}>From Standing Pool</span>
                        <span className="font-extrabold" style={{ color: "var(--orange)" }}>− {formatCurrency(totalFromPool)}</span>
                      </div>
                    )}
                    <div className="flex justify-between gap-8">
                      <span style={{ color: "var(--gray-700)" }}>Fresh Advance</span>
                      <span className="font-extrabold" style={{ color: "var(--red)" }}>− {formatCurrency(advNum)}</span>
                    </div>
                    <div className="flex justify-between gap-8 pt-1.5 border-t border-[var(--gray-100)]" style={{ marginTop: 2 }}>
                      <span className="font-bold" style={{ color: "var(--gray-800)" }}>Net Payable</span>
                      <span className="font-extrabold" style={{ color: totalNet > 0 ? "var(--green)" : "var(--gray-400)" }}>{formatCurrency(totalNet)}</span>
                    </div>
                    {(standing > 0 || poolAfter > 0) && (
                      <div className="flex justify-between gap-8 pt-1.5 border-t border-[var(--gray-100)]" style={{ marginTop: 2 }}>
                        <span style={{ color: "var(--gray-500)" }}>Pool After</span>
                        <span className="font-extrabold" style={{ color: poolAfter > 0 ? "var(--orange)" : "var(--gray-400)" }}>{formatCurrency(poolAfter)}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Collective advance + actions */}
                <div className="flex flex-col gap-3 items-end">
                  {/* Advance input */}
                  <div className="flex items-center gap-0 rounded-[9px] overflow-hidden border-2 border-[var(--blue-deeper)]">
                    <div className="px-3 py-2.5 text-[11px] font-bold tracking-[1px] uppercase text-white"
                      style={{ background: "var(--blue-deeper)" }}>
                      Advance
                    </div>
                    <input
                      type="number"
                      min={0}
                      step={1}
                      value={tAdvance}
                      onChange={(e) => setTAdvance(e.target.value)}
                      onWheel={(e) => e.currentTarget.blur()}
                      placeholder="0"
                      className="px-3 py-2.5 text-[15px] font-bold font-mono outline-none bg-white w-36 text-[#0C2433]"
                    />
                  </div>
                  {/* Method picker — only relevant when a fresh advance is being given */}
                  {advNum > 0 && (
                    <div className="flex flex-wrap border-[1.5px] rounded-[9px] overflow-hidden self-stretch" style={{ borderColor: "var(--gray-200)" }}>
                      {paymentMethods.map((m) => (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => setTAdvanceMethod(m.name)}
                          className="flex-1 min-w-[80px] py-1.5 text-[10.5px] font-semibold border-none cursor-pointer transition-all"
                          style={{
                            background: tAdvanceMethod === m.name ? "var(--blue-deeper)" : "var(--gray-50)",
                            color: tAdvanceMethod === m.name ? "#fff" : "var(--gray-500)",
                          }}
                        >
                          {m.name}
                        </button>
                      ))}
                    </div>
                  )}
                  {/* Buttons */}
                  <div className="flex items-center gap-2">
                    <button type="button" onClick={() => setShowTaskModal(false)}
                      className="px-4 py-2.5 rounded-[9px] text-[12.5px] font-semibold cursor-pointer border-[1.5px] bg-white transition-all"
                      style={{ borderColor: "var(--gray-200)", color: "var(--gray-900)" }}>
                      Cancel
                    </button>
                    <button type="button" onClick={() => run(handleSaveTask)} disabled={saving}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-[9px] border-none text-[12.5px] font-semibold cursor-pointer text-white disabled:opacity-60 disabled:cursor-not-allowed"
                      style={{ background: "linear-gradient(135deg, var(--blue-deeper), var(--blue))", boxShadow: "0 2px 10px rgba(21,128,61,.28)" }}>
                      <Briefcase size={14} />
                      {saving
                        ? "Saving…"
                        : tItems.filter((it) => it.name.trim()).length > 1
                          ? `Save ${tItems.filter((it) => it.name.trim()).length} Tasks`
                          : "Save Task"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* ── Pay Task Modal ───────────────────────────────────────────────────── */}
      {showPayTaskModal && payingTask && (() => {
        const netAmount = Math.max(0, Number(payingTask.amount) - Number(payingTask.advance));
        const payNow = parseFloat(payNowAmount);
        const safePayNow = Number.isFinite(payNow) ? payNow : 0;
        const remainingAfter = Math.max(0, netAmount - safePayNow);
        const payMethodLocked = !!payingTask.cashbook_entry_id;
        return (
          <Modal title="Pay for Task" subtitle={payingTask.task_name} onClose={() => setShowPayTaskModal(false)}>
            <div className="rounded-[12px] border border-[var(--gray-100)] overflow-hidden mb-3.5">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--gray-100)]">
                <span className="text-[12.5px]" style={{ color: "var(--gray-900)" }}>Task Amount</span>
                <span className="text-[12.5px] font-semibold font-mono" style={{ color: "var(--gray-900)" }}>{formatCurrency(Number(payingTask.amount))}</span>
              </div>
              {Number(payingTask.advance) > 0 && (
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--gray-100)]" style={{ background: "var(--red-light)" }}>
                  <span className="text-[12.5px]" style={{ color: "var(--red)" }}>Advance Deducted</span>
                  <span className="text-[12.5px] font-semibold font-mono" style={{ color: "var(--red)" }}>− {formatCurrency(Number(payingTask.advance))}</span>
                </div>
              )}
              <div className="flex items-center justify-between px-4 py-2.5" style={{ background: "var(--green-light)" }}>
                <span className="text-[12.5px] font-bold" style={{ color: "var(--green)" }}>Net Payable</span>
                <span className="text-[15px] font-extrabold font-mono" style={{ color: "var(--green)" }}>
                  {formatCurrency(netAmount)}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1 mb-3">
              <label className="text-[10px] font-bold tracking-[1.2px] uppercase" style={{ color: "var(--blue-deeper)" }}>
                Amount to pay now (Rs) <span style={{ color: "var(--red)" }}>*</span>
              </label>
              <input
                value={payNowAmount}
                onChange={(e) => setPayNowAmount(e.target.value)}
                type="number"
                placeholder="0"
                min="0"
                max={netAmount}
                step="0.1"
                autoFocus
                className="border-[1.5px] rounded-[9px] px-3 py-2 text-[14px] font-mono font-bold outline-none"
                style={{ borderColor: "var(--gray-200)", background: "var(--gray-50)", color: "var(--gray-900)" }}
              />
              {safePayNow > 0 && (
                <div className="mt-2 px-3 py-2 rounded-[9px]" style={{ background: "var(--green-light)", border: "1.5px solid rgba(14,173,106,.2)" }}>
                  <p className="text-[11px] font-semibold" style={{ color: "var(--green)" }}>
                    Remaining due after this: {formatCurrency(remainingAfter)}
                  </p>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-1 mb-3">
              <label className="text-[10px] font-bold tracking-[1.2px] uppercase" style={{ color: "var(--blue-deeper)" }}>Paid via</label>
              {payMethodLocked ? (
                <p className="text-[10px] m-0 mb-1" style={{ color: "var(--gray-600)" }}>
                  This task already has a cashbook line — further payments add to the same entry (method unchanged).
                </p>
              ) : null}
              <div className="flex flex-wrap border-[1.5px] rounded-[9px] overflow-hidden" style={{ borderColor: "var(--gray-200)" }}>
                {paymentMethods.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    disabled={payMethodLocked}
                    onClick={() => setPayTaskMethod(m.name)}
                    className="flex-1 min-w-[80px] py-2 text-[11px] font-semibold border-none cursor-pointer transition-all disabled:opacity-60"
                    style={{
                      background: payTaskMethod === m.name ? "var(--blue-deeper)" : "var(--gray-50)",
                      color: payTaskMethod === m.name ? "#fff" : "var(--gray-500)",
                    }}
                  >
                    {m.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1 mb-3">
              <label className="text-[10px] font-bold tracking-[1.2px] uppercase" style={{ color: "var(--blue-deeper)" }}>Payment Date</label>
              <input value={payTaskDate} onChange={(e) => setPayTaskDate(e.target.value)} type="date"
                className="border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none" style={inputStyle} />
            </div>

            <div className="rounded-[10px] p-3" style={{ background: "var(--green-light)" }}>
              <div className="text-[11px] font-bold mb-1" style={{ color: "var(--green)" }}>Cashbook Impact</div>
              <div className="text-[12px]" style={{ color: "var(--gray-700)" }}>
                An <b>outgoing (Debit)</b> entry of <b>{safePayNow > 0 ? formatCurrency(safePayNow) : "—"}</b>
                {payMethodLocked ? "" : <> via <b>{payTaskMethod}</b></>} will be added/updated in the Cash Book.
              </div>
            </div>

            <ModalFooter
              onCancel={() => setShowPayTaskModal(false)}
              onSave={() => run(handlePayTask)}
              saveDisabled={saving}
              saveLabel={safePayNow > 0 ? `Pay ${formatCurrency(safePayNow)}` : "Pay"}
              saveStyle={{ background: "var(--green)" }}
            />
          </Modal>
        );
      })()}

      {/* ── Edit Task Modal ─────────────────────────────────────────────────── */}
      {editingTask && editTaskLaborer && (() => {
        const w = parseFloat(editTaskWidth);
        const h = parseFloat(editTaskHeight);
        const sqftPreview = w > 0 && h > 0 ? Math.round(w * h * 100) / 100 : null;
        const amtNum = parseFloat(editTaskAmount) || 0;
        const net = Math.max(0, amtNum - Number(editingTask.advance));
        return (
          <Modal title={`Edit Task — ${editTaskLaborer.name}`} subtitle={editingTask.task_name} onClose={() => setEditingTask(null)}>
            <div className="grid grid-cols-2 gap-3.5">
              <div className="flex flex-col gap-1 col-span-2">
                <label className="text-[10px] font-bold tracking-[1.2px] uppercase" style={{ color: "var(--blue-deeper)" }}>Task Name *</label>
                <input value={editTaskName} onChange={(e) => setEditTaskName(e.target.value)} placeholder="e.g. Banner Installation"
                  className="border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none" style={{ borderColor: "var(--gray-200)", background: "var(--gray-50)", color: "var(--gray-900)" }} />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold tracking-[1.2px] uppercase" style={{ color: "var(--blue-deeper)" }}>Date</label>
                <input value={editTaskDate} onChange={(e) => setEditTaskDate(e.target.value)} type="date"
                  className="border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none" style={{ borderColor: "var(--gray-200)", background: "var(--gray-50)", color: "var(--gray-900)" }} />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold tracking-[1.2px] uppercase" style={{ color: "var(--blue-deeper)" }}>Total Amount (Rs) *</label>
                <input value={editTaskAmount} onChange={(e) => setEditTaskAmount(e.target.value)} type="number" min="0" step="1" placeholder="0"
                  className="border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] font-mono outline-none" style={{ borderColor: "var(--gray-200)", background: "var(--gray-50)", color: "var(--gray-900)" }} />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold tracking-[1.2px] uppercase" style={{ color: "var(--blue-deeper)" }}>Width (ft)</label>
                <input value={editTaskWidth} onChange={(e) => setEditTaskWidth(e.target.value)} type="number" min="0" step="0.01" placeholder="0"
                  className="border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] font-mono outline-none" style={{ borderColor: "var(--gray-200)", background: "var(--gray-50)", color: "var(--gray-900)" }} />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold tracking-[1.2px] uppercase" style={{ color: "var(--blue-deeper)" }}>Height (ft)</label>
                <input value={editTaskHeight} onChange={(e) => setEditTaskHeight(e.target.value)} type="number" min="0" step="0.01" placeholder="0"
                  className="border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] font-mono outline-none" style={{ borderColor: "var(--gray-200)", background: "var(--gray-50)", color: "var(--gray-900)" }} />
              </div>
            </div>
            {(sqftPreview || amtNum > 0) && (
              <div className="mt-3 rounded-[10px] border border-[var(--gray-100)] overflow-hidden">
                {sqftPreview && (
                  <div className="flex items-center justify-between px-4 py-2 border-b border-[var(--gray-100)]">
                    <span className="text-[12px]" style={{ color: "var(--gray-700)" }}>Sq.ft</span>
                    <span className="text-[12px] font-mono font-bold" style={{ color: "var(--gray-900)" }}>{sqftPreview}</span>
                  </div>
                )}
                <div className="flex items-center justify-between px-4 py-2 border-b border-[var(--gray-100)]">
                  <span className="text-[12px]" style={{ color: "var(--gray-700)" }}>Advance (locked)</span>
                  <span className="text-[12px] font-mono font-bold" style={{ color: "var(--red)" }}>{formatCurrency(Number(editingTask.advance))}</span>
                </div>
                <div className="flex items-center justify-between px-4 py-2" style={{ background: net > 0 ? "var(--orange-light)" : "var(--green-light)" }}>
                  <span className="text-[12px] font-bold" style={{ color: net > 0 ? "var(--orange)" : "var(--green)" }}>Net Payable after edit</span>
                  <span className="text-[14px] font-extrabold font-mono" style={{ color: net > 0 ? "var(--orange)" : "var(--green)" }}>{formatCurrency(net)}</span>
                </div>
              </div>
            )}
            <ModalFooter onCancel={() => setEditingTask(null)} onSave={() => run(handleSaveEditTask)} saveDisabled={saving} saveLabel="Update Task" />
          </Modal>
        );
      })()}

      {/* ── Print date range modal (print-only) ─────────────────────────────── */}
      {showReportRangeModal && (
        <Modal
          title="Print Labor Report"
          subtitle="Choose a date range to filter tasks and advances"
          onClose={() => setShowReportRangeModal(false)}
        >
          <div className="grid grid-cols-2 gap-3.5">
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold tracking-[1.2px] uppercase" style={{ color: "var(--blue-deeper)" }}>
                From
              </label>
              <input
                value={reportFromDate}
                onChange={(e) => setReportFromDate(e.target.value)}
                type="date"
                className="border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none"
                style={{ borderColor: "var(--gray-200)", background: "var(--gray-50)", color: "var(--gray-900)" }}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold tracking-[1.2px] uppercase" style={{ color: "var(--blue-deeper)" }}>
                To
              </label>
              <input
                value={reportToDate}
                onChange={(e) => setReportToDate(e.target.value)}
                type="date"
                className="border-[1.5px] rounded-[9px] px-3 py-2 text-[13px] outline-none"
                style={{ borderColor: "var(--gray-200)", background: "var(--gray-50)", color: "var(--gray-900)" }}
              />
            </div>

            <div className="col-span-2 rounded-[10px] px-3 py-2" style={{ background: "var(--blue-light)", border: "1.5px solid var(--blue-pale)" }}>
              <div className="text-[11px] font-semibold" style={{ color: "var(--blue-deeper)" }}>
                Tip:
              </div>
              <div className="text-[12px]" style={{ color: "var(--gray-700)" }}>
                Leave either field empty to include all dates.
              </div>
            </div>
          </div>

          <ModalFooter
            onCancel={() => setShowReportRangeModal(false)}
            onSave={handleConfirmPrintRange}
            saveLabel="Print filtered report"
            saveStyle={{ background: "var(--blue-deeper)" }}
          />
        </Modal>
      )}
    </div>
    <LaborPrintReport laborer={selectedLaborer} reportFromDate={reportFromDate} reportToDate={reportToDate} />

    {/* ── Task Assignment Thermal Print Template ── */}
    {showTaskModal && taskLaborer && (() => {
      const advNum = Math.max(0, parseFloat(tAdvance) || 0);
      let rb = advNum;
      const pv = tItems.map((it) => {
        const rate = parseFloat(it.amount) || 0;
        const qty = Math.max(1, parseFloat(it.qty) || 1);
        const w = parseFloat(it.width);
        const h = parseFloat(it.height);
        const sqftVal = w > 0 && h > 0 ? Math.round(w * h * 100) / 100 : null;
        const amt = Math.round((sqftVal !== null ? sqftVal * rate : rate) * qty * 100) / 100;
        const adv = Math.min(rb, amt);
        rb -= adv;
        return { name: it.name, sqft: sqftVal, rate, qty, amt, adv, net: Math.max(0, amt - adv) };
      }).filter((p) => p.name.trim() && p.amt > 0);

      if (pv.length === 0) return null;
      const totalAmt = pv.reduce((s, p) => s + p.amt, 0);
      const totalAdv = pv.reduce((s, p) => s + p.adv, 0);
      const totalNet = pv.reduce((s, p) => s + p.net, 0);

      return (
        <div className="thermal-print-only" style={{ background: "#fff", fontFamily: "Arial, Helvetica, sans-serif", color: "#000", fontSize: 11, width: "72mm", margin: "0 auto" }}>
          <ThermalHeader />

          <div style={{ padding: "5px 4px", borderBottom: "1px dashed #000" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10 }}>
              <span style={{ fontWeight: 700 }}>TASK ASSIGNMENT</span>
              <span>{tDate ? formatDate(tDate) : new Date().toLocaleDateString("en-PK", { day: "2-digit", month: "short", year: "numeric" })}</span>
            </div>
            <div style={{ fontWeight: 900, fontSize: 13, marginTop: 2 }}>{taskLaborer.name}</div>
            {taskLaborer.role && <div style={{ fontSize: 10, color: "#444" }}>{taskLaborer.role}</div>}
            {taskLaborer.phone && <div style={{ fontSize: 10, color: "#444" }}>{taskLaborer.phone}</div>}
          </div>

          {pv.map((p, i) => (
            <div key={i} style={{ padding: "5px 4px", borderBottom: "1px dashed #ccc" }}>
              <div style={{ fontWeight: 800, fontSize: 11 }}>{i + 1}. {p.name}</div>
              {p.sqft && <div style={{ fontSize: 10, color: "#555" }}>Sq.ft: {p.sqft} × Rs {p.rate}/sqft{p.qty > 1 ? ` × ${p.qty}` : ""}</div>}
              {!p.sqft && p.qty > 1 && <div style={{ fontSize: 10, color: "#555" }}>Qty: {p.qty} × Rs {p.rate}</div>}
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, marginTop: 2 }}>
                <span>Amount</span><span style={{ fontWeight: 700 }}>{formatCurrency(p.amt)}</span>
              </div>
              {p.adv > 0 && (
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#b91c1c" }}>
                  <span>Advance</span><span style={{ fontWeight: 700 }}>− {formatCurrency(p.adv)}</span>
                </div>
              )}
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, fontWeight: 900, marginTop: 2 }}>
                <span>You Receive</span><span>{formatCurrency(p.net)}</span>
              </div>
            </div>
          ))}

          <div style={{ padding: "6px 4px", borderTop: "2px solid #000" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10 }}>
              <span>Total Assigned</span><span style={{ fontWeight: 700 }}>{formatCurrency(totalAmt)}</span>
            </div>
            {totalAdv > 0 && (
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#b91c1c" }}>
                <span>Total Advance</span><span style={{ fontWeight: 700 }}>− {formatCurrency(totalAdv)}</span>
              </div>
            )}
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, fontWeight: 900, marginTop: 4, borderTop: "1px solid #000", paddingTop: 4 }}>
              <span>Net Payable</span><span>{formatCurrency(totalNet)}</span>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "6px 4px 2px", fontSize: 9, color: "#666" }}>
            S.S.D — {new Date().toLocaleTimeString("en-PK", { hour: "2-digit", minute: "2-digit" })}
          </div>
        </div>
      );
    })()}

    {/* ── Single Task Slip Thermal Print ── */}
    {taskSlipToPrint && (() => {
      const { task, laborer } = taskSlipToPrint;
      const net = Math.max(0, Number(task.amount) - Number(task.advance));
      const t = task as LaborTask & { width?: number | null; height?: number | null; sqft?: number | null };
      const isPaid = task.status === "paid" || net === 0;
      return (
        <div className="thermal-print-only" style={{ background: "#fff", fontFamily: "Arial, Helvetica, sans-serif", color: "#000", fontSize: 11, width: "72mm", margin: "0 auto" }}>
          <ThermalHeader />

          <div style={{ padding: "5px 4px", borderBottom: "1px dashed #000" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10 }}>
              <span style={{ fontWeight: 700 }}>TASK SLIP</span>
              <span>{formatDate(task.date)}</span>
            </div>
            <div style={{ fontWeight: 900, fontSize: 13, marginTop: 2 }}>{laborer.name}</div>
            {laborer.role && <div style={{ fontSize: 10, color: "#444" }}>{laborer.role}</div>}
            {laborer.phone && <div style={{ fontSize: 10, color: "#444" }}>{laborer.phone}</div>}
          </div>

          <div style={{ padding: "5px 4px", borderBottom: "1px dashed #000" }}>
            <div style={{ fontWeight: 800, fontSize: 11, marginBottom: 3 }}>{task.task_name}</div>
            {t.sqft && (
              <div style={{ fontSize: 10, color: "#555", marginBottom: 2 }}>
                {t.width} ft × {t.height} ft = {t.sqft} sq.ft
              </div>
            )}
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, marginTop: 2 }}>
              <span>Amount</span><span style={{ fontWeight: 700 }}>{formatCurrency(Number(task.amount))}</span>
            </div>
            {Number(task.advance) > 0 && (
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#b91c1c" }}>
                <span>Advance</span><span style={{ fontWeight: 700 }}>− {formatCurrency(Number(task.advance))}</span>
              </div>
            )}
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, fontWeight: 900, marginTop: 4, borderTop: "1px solid #000", paddingTop: 4 }}>
              <span>Net Payable</span><span>{formatCurrency(net)}</span>
            </div>
          </div>

          <div style={{ padding: "4px 4px", borderBottom: "1px dashed #000", display: "flex", justifyContent: "space-between", fontSize: 10 }}>
            <span>Status</span>
            <span style={{ fontWeight: 900, color: isPaid ? "#16a34a" : "#d97706" }}>{isPaid ? "PAID" : "PENDING"}</span>
          </div>

          <div style={{ textAlign: "center", padding: "6px 4px 2px", fontSize: 9, color: "#666" }}>
            S.S.D — {new Date().toLocaleTimeString("en-PK", { hour: "2-digit", minute: "2-digit" })}
          </div>
          <div style={{ textAlign: "center", padding: "2px 4px 6px", fontSize: 11, fontWeight: 700, color: "#333" }}>
            Software Developed by Addsmint.com
          </div>
        </div>
      );
    })()}
    </>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────


function Modal({ title, subtitle, onClose, children }: {
  title: string; subtitle?: string; onClose: () => void; children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-[800] flex items-start justify-center backdrop-blur-sm pt-10 px-4 overflow-y-auto"
      style={{ background: "rgba(10,30,50,.3)" }}
    >
      <div className="bg-white rounded-[20px] w-[480px] max-w-full overflow-hidden animate-slide-up"
        style={{ boxShadow: "var(--shadow-lg)" }}>
        <div className="flex items-center justify-between px-5 py-4"
          style={{ background: "var(--blue-deeper)" }}>
          <div>
            <h2 className="text-[15px] font-bold text-white">{title}</h2>
            {subtitle && <div className="text-[11.5px] mt-0.5 text-white/70">{subtitle}</div>}
          </div>
          <button onClick={onClose}
            className="w-7 h-7 rounded-full flex items-center justify-center border-none cursor-pointer"
            style={{ background: "rgba(255,255,255,0.15)", color: "white" }}>
            <X size={12} />
          </button>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}

function ModalFooter({ onCancel, onSave, saveLabel, saveStyle, saveDisabled }: {
  onCancel: () => void; onSave: () => void; saveLabel: string; saveStyle?: React.CSSProperties; saveDisabled?: boolean;
}) {
  return (
    <div className="flex justify-end gap-2 pt-4 mt-4 border-t border-[var(--gray-100)]">
      <button onClick={onCancel} disabled={saveDisabled}
        className="px-4 py-2 rounded-[9px] text-[12.5px] font-semibold border-[1.5px] cursor-pointer bg-white disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ borderColor: "var(--gray-200)", color: "var(--blue-deeper)" }}>
        Cancel
      </button>
      <button onClick={onSave} disabled={saveDisabled}
        className="px-4 py-2 rounded-[9px] text-[12.5px] font-semibold border-none cursor-pointer text-white disabled:opacity-60 disabled:cursor-not-allowed"
        style={saveStyle || { background: "linear-gradient(135deg, var(--blue-deeper), var(--blue))" }}>
        {saveDisabled ? "Saving…" : saveLabel}
      </button>
    </div>
  );
}

function LaborPrintReport({
  laborer,
  reportFromDate,
  reportToDate,
}: {
  laborer: LaborerWithData | null;
  reportFromDate: string;
  reportToDate: string;
}) {
  if (!laborer) return null;
  const l = laborer;
  const tasksInRange = l.tasks.filter((t) => {
    const d = (t.date || "").slice(0, 10);
    if (!d) return false;
    return inIsoDateRange(d, reportFromDate || undefined, reportToDate || undefined);
  });
  const advancesInRange = l.advances.filter((a) => {
    const d = (a.date || "").slice(0, 10);
    if (!d) return false;
    return inIsoDateRange(d, reportFromDate || undefined, reportToDate || undefined);
  });

  const totalGross = tasksInRange.reduce((s, t) => s + Number(t.amount), 0);
  const totalAdvOnTasks = tasksInRange.reduce((s, t) => s + Number(t.advance), 0);
  const cashPaid = tasksInRange
    .filter((t) => t.status === "paid")
    .reduce((s, t) => s + Math.max(0, Number(t.amount) - Number(t.advance)), 0);
  const pendingDue = tasksInRange
    .filter((t) => t.status === "pending")
    .reduce((s, t) => s + Math.max(0, Number(t.amount) - Number(t.advance)), 0);
  const standingAdv = Number(l.advance_balance ?? 0);
  const standaloneTotal = advancesInRange.reduce((s, a) => s + Number(a.amount), 0);

  return (
    <div className="print-only" style={{ background: "#fff", fontFamily: "Arial, sans-serif" }}>
      <PdfPrintBanner subtitle="Labor report" />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "4px 10px 6px", marginBottom: 10 }}>
        <div style={{ display: "flex", gap: 20 }}>
          <div>
            <div style={{ fontSize: 9, color: "#999", textTransform: "uppercase", letterSpacing: 1 }}>Report Type</div>
            <div style={{ fontWeight: 900, color: "#14532d", fontSize: 14, fontFamily: "monospace" }}>LABOR REPORT</div>
          </div>
          <div>
            <div style={{ fontSize: 9, color: "#999", textTransform: "uppercase", letterSpacing: 1 }}>Generated</div>
            <div style={{ fontWeight: 700, color: "#333", fontSize: 12 }}>{new Date().toLocaleDateString("en-PK", { day: "numeric", month: "short", year: "numeric" })}</div>
          </div>
        </div>
        <span style={{ fontSize: 10, fontWeight: 800, padding: "3px 10px", borderRadius: 6, background: l.status === "Active" ? "#dcfce7" : "#f3f4f6", color: l.status === "Active" ? "#16a34a" : "#6b7280" }}>
          {l.status.toUpperCase()}
        </span>
      </div>

      {/* Laborer info */}
      <div style={{ border: "1px solid #e5e7eb", borderRadius: 10, padding: "8px 12px", margin: "0 6px 10px" }}>
        <div style={{ fontSize: 10, fontWeight: 900, letterSpacing: 1.5, textTransform: "uppercase", color: "#1e3a8a", background: "linear-gradient(90deg, #eff6ff, transparent)", padding: "5px 8px", borderRadius: 6, marginBottom: 8 }}>
          Laborer Information
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6 }}>
          <div>
            <div style={{ fontSize: 9, color: "#9ca3af" }}>Name</div>
            <div style={{ fontWeight: 900, color: "#111827", fontSize: 12 }}>{l.name}</div>
          </div>
          <div>
            <div style={{ fontSize: 9, color: "#9ca3af" }}>Role</div>
            <div style={{ fontWeight: 700, color: "#111827", fontSize: 12 }}>{l.role || "—"}</div>
          </div>
          <div>
            <div style={{ fontSize: 9, color: "#9ca3af" }}>Phone</div>
            <div style={{ fontWeight: 700, color: "#111827", fontSize: 12 }}>{l.phone || "—"}</div>
          </div>
        </div>
      </div>

      {/* Summary boxes */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr", gap: 6, margin: "0 6px 12px" }}>
        {[
          { label: "Total Work Value", value: formatCurrency(totalGross), color: "#1e3a8a", bg: "#eff6ff" },
          { label: "Advances on Tasks", value: formatCurrency(totalAdvOnTasks), color: "#dc2626", bg: "#fef2f2" },
          { label: "Standalone Advances", value: formatCurrency(standaloneTotal), color: "#9a3412", bg: "#fff7ed" },
          { label: "Cash Paid Out", value: formatCurrency(cashPaid), color: "#16a34a", bg: "#f0fdf4" },
          { label: "Amount Due", value: formatCurrency(pendingDue), color: "#d97706", bg: "#fffbeb" },
        ].map((box) => (
          <div key={box.label} style={{ border: `1px solid ${box.bg}`, borderRadius: 8, padding: "8px 10px", background: box.bg, textAlign: "center" }}>
            <div style={{ fontSize: 9, color: box.color, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 4 }}>{box.label}</div>
            <div style={{ fontSize: 13, fontWeight: 900, color: box.color, fontFamily: "monospace" }}>{box.value}</div>
          </div>
        ))}
      </div>

      {/* Tasks table */}
      <div style={{ margin: "0 6px 12px" }}>
        <div style={{ fontSize: 10, fontWeight: 900, letterSpacing: 1.5, textTransform: "uppercase", color: "#1e3a8a", background: "linear-gradient(90deg, #eff6ff, transparent)", padding: "5px 8px", borderRadius: 6, marginBottom: 6 }}>
          Tasks ({tasksInRange.length})
        </div>
        {tasksInRange.length === 0 ? (
          <div style={{ fontSize: 11, color: "#9ca3af", padding: "8px 4px" }}>No tasks assigned.</div>
        ) : (
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 10 }}>
            <thead>
              <tr style={{ background: "#f9fafb" }}>
                {["#", "Date", "Task", "Description", "Amount", "Advance", "Net", "Status"].map((h) => (
                  <th key={h} style={{ padding: "5px 6px", textAlign: h === "#" ? "center" : "left", fontWeight: 800, color: "white", background: "var(--blue-deeper)", fontSize: 9, textTransform: "uppercase", letterSpacing: 0.8 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tasksInRange.map((task, i) => {
                const net = Math.max(0, Number(task.amount) - Number(task.advance));
                const isPaid = task.status === "paid" || (task.status === "pending" && net === 0);
                return (
                  <tr key={task.id} style={{ borderBottom: "1px solid #f3f4f6", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                    <td style={{ padding: "5px 6px", textAlign: "center", color: "#9ca3af", fontWeight: 700 }}>{i + 1}</td>
                    <td style={{ padding: "5px 6px", color: "#6b7280", whiteSpace: "nowrap" }}>{formatDate(task.date)}</td>
                    <td style={{ padding: "5px 6px", fontWeight: 700, color: "#111827" }}>{task.task_name}</td>
                    <td style={{ padding: "5px 6px", color: "#6b7280" }}>{task.description || "—"}</td>
                    <td style={{ padding: "5px 6px", fontFamily: "monospace", fontWeight: 700, color: "#111827" }}>{formatCurrency(Number(task.amount))}</td>
                    <td style={{ padding: "5px 6px", fontFamily: "monospace", color: Number(task.advance) > 0 ? "#dc2626" : "#9ca3af" }}>
                      {Number(task.advance) > 0 ? formatCurrency(Number(task.advance)) : "—"}
                    </td>
                    <td style={{ padding: "5px 6px", fontFamily: "monospace", fontWeight: 800, color: isPaid ? "#16a34a" : "#d97706" }}>{formatCurrency(net)}</td>
                    <td style={{ padding: "5px 6px" }}>
                      <span style={{ fontSize: 9, fontWeight: 800, padding: "2px 6px", borderRadius: 4, background: isPaid ? "#dcfce7" : "#fff7ed", color: isPaid ? "#16a34a" : "#d97706" }}>
                        {isPaid ? "PAID" : "PENDING"}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr style={{ borderTop: "2px solid #e5e7eb", background: "#f9fafb" }}>
                <td colSpan={4} style={{ padding: "6px 6px", fontWeight: 800, fontSize: 10, color: "#374151" }}>Totals</td>
                <td style={{ padding: "6px 6px", fontFamily: "monospace", fontWeight: 900, color: "#111827" }}>{formatCurrency(totalGross)}</td>
                <td style={{ padding: "6px 6px", fontFamily: "monospace", fontWeight: 900, color: "#dc2626" }}>{formatCurrency(totalAdvOnTasks)}</td>
                <td colSpan={2} style={{ padding: "6px 6px", fontFamily: "monospace", fontWeight: 900, color: "#d97706" }}>
                  Due: {formatCurrency(pendingDue)} &nbsp;|&nbsp; <span style={{ color: "#16a34a" }}>Paid: {formatCurrency(cashPaid)}</span>
                </td>
              </tr>
            </tfoot>
          </table>
        )}
      </div>

      {/* Standalone advances */}
      {advancesInRange.length > 0 && (
        <div style={{ margin: "0 6px 12px" }}>
          <div style={{ fontSize: 10, fontWeight: 900, letterSpacing: 1.5, textTransform: "uppercase", color: "#991b1b", background: "linear-gradient(90deg, #fef2f2, transparent)", padding: "5px 8px", borderRadius: 6, marginBottom: 6 }}>
            Standalone Advances ({advancesInRange.length})
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 10 }}>
            <thead>
              <tr style={{ background: "#f9fafb" }}>
                {["#", "Date", "Notes", "Amount"].map((h) => (
                  <th key={h} style={{ padding: "5px 6px", textAlign: h === "#" ? "center" : "left", fontWeight: 800, color: "white", background: "var(--blue-deeper)", fontSize: 9, textTransform: "uppercase", letterSpacing: 0.8 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {advancesInRange.map((a, i) => (
                <tr key={a.id} style={{ borderBottom: "1px solid #f3f4f6", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                  <td style={{ padding: "5px 6px", textAlign: "center", color: "#9ca3af", fontWeight: 700 }}>{i + 1}</td>
                  <td style={{ padding: "5px 6px", color: "#6b7280", whiteSpace: "nowrap" }}>{formatDate(a.date)}</td>
                  <td style={{ padding: "5px 6px", color: "#6b7280" }}>{a.notes || "—"}</td>
                  <td style={{ padding: "5px 6px", fontFamily: "monospace", fontWeight: 800, color: "#dc2626" }}>{formatCurrency(Number(a.amount))}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr style={{ borderTop: "2px solid #e5e7eb", background: "#f9fafb" }}>
                <td colSpan={3} style={{ padding: "6px 6px", fontWeight: 800, fontSize: 10, color: "#374151" }}>Total Standalone Advances</td>
                <td style={{ padding: "6px 6px", fontFamily: "monospace", fontWeight: 900, color: "#dc2626" }}>{formatCurrency(standaloneTotal)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}

      {/* Unallocated advance balance */}
      <div style={{ margin: "0 6px 12px", padding: "10px 12px", borderRadius: 8, background: standingAdv > 0 ? "#fef2f2" : "#f9fafb", border: `1px solid ${standingAdv > 0 ? "#fecaca" : "#e5e7eb"}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: "#374151" }}>
          Unallocated Advance Balance (not yet applied to any task)
        </div>
        <div style={{ fontSize: 14, fontFamily: "monospace", fontWeight: 900, color: standingAdv > 0 ? "#dc2626" : "#9ca3af" }}>
          {formatCurrency(standingAdv)}
        </div>
      </div>

      <PrintFooter />
    </div>
  );
}
