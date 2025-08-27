"use client";
import { useState } from "react";

export default function SmallClaimsWizard() {
  const [plaintiff, setPlaintiff] = useState("");
  const [defendant, setDefendant] = useState("");
  const [amount, setAmount] = useState("");
  const [court, setCourt] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      const res = await fetch("/api/docs/small-claims", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plaintiff, defendant, amount, court })
      });
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url; a.download = "small-claims.pdf"; a.click();
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-3">Small Claims Wizard</h1>
      <form onSubmit={onSubmit} className="space-y-3">
        <input className="border rounded w-full px-3 py-2" placeholder="Plaintiff"
          value={plaintiff} onChange={e=>setPlaintiff(e.target.value)} />
        <input className="border rounded w-full px-3 py-2" placeholder="Defendant"
          value={defendant} onChange={e=>setDefendant(e.target.value)} />
        <input className="border rounded w-full px-3 py-2" placeholder="Amount"
          value={amount} onChange={e=>setAmount(e.target.value)} />
        <input className="border rounded w-full px-3 py-2" placeholder="Court"
          value={court} onChange={e=>setCourt(e.target.value)} />
        <button disabled={busy} className="px-4 py-2 rounded bg-black text-white">
          {busy ? "Generating…" : "Generate PDF"}
        </button>
      </form>
      <p className="text-xs opacity-60 mt-3">Educational only. Not legal advice.</p>
    </main>
  );
}
