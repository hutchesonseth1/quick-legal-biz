
"use client";
import { useState } from "react";

export default function AssistPage() {
  const [q, setQ] = useState("");
  const [a, setA] = useState("");

  const ask = async () => {
    const res = await fetch("/api/assist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: q })
    });
    const data = await res.json();
    setA(data.answer || "No answer.");
  };

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-3">Educational Assistant (Guardrailed)</h1>
      <p className="opacity-70 mb-4 text-sm">
        This tool explains templates and where to find public info. It does not provide legal advice.
      </p>
      <div className="flex gap-2 mb-3">
        <input
          className="border rounded px-3 py-2 grow"
          placeholder="Ask about forms, where to file, or case-law basics"
          value={q}
          onChange={(e)=>setQ(e.target.value)}
        />
        <button className="bg-black text-white px-4 py-2 rounded" onClick={ask}>Ask</button>
      </div>
      <pre className="whitespace-pre-wrap text-sm border rounded p-3 min-h-[200px]">{a}</pre>
    </main>
  );
}
