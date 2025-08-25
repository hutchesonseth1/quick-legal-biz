
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const PASS = process.env.NEXT_PUBLIC_PORTAL_PASS || "truepath";

export default function PortalGate() {
  const [ok, setOk] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    const v = typeof window !== "undefined" ? localStorage.getItem("portal_ok") : null;
    if (v === "yes") setOk(true);
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === PASS) {
      localStorage.setItem("portal_ok", "yes");
      setOk(true);
    } else {
      alert("Nope.");
    }
  };

  if (ok) {
    return (
      <main className="min-h-screen p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Operations Portal</h1>
        <p className="opacity-70 mb-6">Internal tools and document packages.</p>
        <ul className="space-y-3 list-disc pl-6">
          <li><Link className="underline" href="/tools">Legal Document Packages</Link></li>
          <li><Link className="underline" href="/metrics">Daily Sales (stub)</Link></li>
          <li><Link className="underline" href="/branding">Branding & Templates</Link></li>
          <li><Link className="underline" href="/docs">Docs Index</Link></li>
        </ul>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-2">Enter Portal</h1>
      <form onSubmit={submit} className="space-y-3">
        <input
          className="border rounded px-3 py-2 w-full"
          placeholder="Password"
          type="password"
          value={input}
          onChange={(e)=>setInput(e.target.value)}
        />
        <button className="bg-black text-white px-4 py-2 rounded" type="submit">Unlock</button>
      </form>
      <p className="text-xs opacity-60 mt-4">Change via NEXT_PUBLIC_PORTAL_PASS env.</p>
    </main>
  );
}
