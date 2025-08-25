
export default function Metrics() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Daily Sales (Stub)</h1>
      <p className="opacity-70">Hook this to Stripe or Gumroad webhooks to populate charts.</p>
      <div className="border rounded p-4">
        <div className="text-sm">Today: $0.00</div>
        <div className="text-sm">This Week: $0.00</div>
        <div className="text-sm">This Month: $0.00</div>
      </div>
    </main>
  );
}
