export default function AccessDeniedPage() {
  return <div className="p-6 rounded-xl bg-white border border-[var(--gray-200)]">
    <h1 className="text-lg font-bold">No modules assigned</h1>
    <p className="text-sm mt-2">Ask your administrator to update your module access.</p>
  </div>;
}
