## Cashbook: WhatsApp receipt as generated PDF

### Summary
Extend the Cashbook “Send WhatsApp Receipt” action so it generates a fresh PDF receipt (instead of a plain text WhatsApp message) and sends it to WhatsApp using the browser’s share sheet where available.

### Goals
1. Clicking the Cashbook table row “Send WhatsApp Receipt” button generates a PDF receipt for that specific entry (including computed previous/current balance for that account).
2. The WhatsApp UX attaches the generated PDF to the message (via `navigator.share({ files })`).
3. Preserve existing receipt content semantics (Name, Date, Time, Previous Balance, Payment Received, Balance, footer).
4. Add a safe fallback if file sharing isn’t supported.

### Non-goals
1. Hosting/uploading PDFs to a remote storage service.
2. Replacing the current receipt text content with a completely different format.
3. Refactoring the Cashbook table UI beyond what’s required for the new handler.

### UX / Interaction
When the user clicks the WhatsApp `Send` icon in the “Actions” column:
1. A PDF is generated client-side from a hidden “print template” DOM.
2. The app opens the platform share sheet (preferred) so the user chooses the WhatsApp chat/contact and the PDF is attached.
3. If share-sheet file attachment is not available, the app downloads the PDF locally and opens WhatsApp with the receipt text (text-only fallback).

### Receipt PDF content
The PDF should include the following fields, matching the current WhatsApp receipt message data:
1. `*Sky Digital*` header
2. Account name (or `Customer` if missing)
3. Entry date (`formatDate(e.date)`)
4. Entry time (`formatTime(e.created_at)`)
5. Previous balance (computed for the same account using chronological order)
6. Payment received amount (`Number(e.amount)`; note: current cashbook code labels this as “Payment Received” regardless of `type`)
7. New/current balance (computed similarly)
8. Footer: `Thank you!!` and “Software Developed by Sky Digital”

### Implementation approach (reuse existing invoice pipeline)
Use the existing invoice PDF generator approach from `app/(dashboard)/invoices/page.tsx`:
1. Render a `print-only` receipt container hidden in normal UI (`display:none` by default in CSS).
2. In the “send” handler, temporarily force that container visible (like invoices does) before calling:
   - `html2canvas(node, ...)`
   - `new jsPDF({ orientation: "p", unit: "mm", format: "a4" })`
   - `pdf.output("blob")`
3. Convert the PDF blob to a `File` and call the share sheet:
   - Preferred: `navigator.share({ files: [file], text: msgText, title })`
   - Fallback: create object URL, trigger download, open WhatsApp with `wa.me/... ?text=...`

### WhatsApp behavior
1. Preferred (share sheet): user selects chat; PDF attaches automatically.
2. Fallback:
   - download the PDF
   - open `https://wa.me/<to>?text=<receipt text>`
3. WhatsApp number formatting:
   - derive digits-only from the account’s `whatsapp` field (current Cashbook logic uses `replace(/\D/g,"")`)
   - prefix handling should mirror current Cashbook logic (`https://wa.me/92...` with leading `0` trimmed when present).

### Error handling
1. If WhatsApp destination number is missing:
   - open share sheet without a fixed recipient (share sheet will still allow user selection).
   - if fallback is required and no number exists, open `https://wa.me/?text=...`.
2. If PDF generation fails:
   - send the text-only WhatsApp message (same behavior as today).
3. Show a toast on errors (similar to invoices: `showToast(e?.message || "Failed to generate/send PDF", "err")`).

### Compatibility considerations
1. `navigator.share` with files depends on the browser and device. The code must feature-detect:
   - `typeof navigator.share === "function"`
   - `navigator.canShare?.({ files: [file] })`
2. The capture template must avoid external assets that `html2canvas` cannot render; reuse existing local header image path `/Header.jpeg`.

### Testing / verification checklist
1. Click the Cashbook WhatsApp action for an entry with a valid account `whatsapp` and confirm:
   - share sheet opens
   - PDF is attached
   - WhatsApp message text includes correct computed balances
2. Click for an entry where the account has no WhatsApp number:
   - share sheet still opens (if using share sheet)
   - fallback opens WhatsApp with message text only
3. Simulate PDF generation failure (temporarily) and confirm:
   - app still opens WhatsApp with the text receipt

