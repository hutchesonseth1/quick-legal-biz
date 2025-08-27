export default function SuccessPage() {
  return (
    <main className="mx-auto max-w-2xl p-6 text-center">
      <h1 className="text-2xl font-semibold">Payment received ✅</h1>
      <p className="mt-2 opacity-80">Check your email for a receipt and quick links. You can start with the wizard below.</p>
      <div className="mt-6">
        <a href="/tools" className="px-4 py-2 rounded-xl bg-black text-white">Go to Tools</a>
      </div>
    </main>
  );
}
