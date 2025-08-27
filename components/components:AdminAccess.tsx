"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminAccess() {
  const [open, setOpen] = useState(false);
  const [pwd, setPwd] = useState("");
  const [err, setErr] = useState("");
  const router = useRouter();

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setErr("");
    const r = await fetch("/api/portal-cookie", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: pwd })
    });
    if (r.ok) {
      setOpen(false);
      router.push("/portal");
      router.refresh();
    } else {
      setErr("Incorrect password.");
    }
  }

  return (
    <>
      <button onClick={() => setOpen(true)} className="rounded-xl px-4 py-2 bg-black text-white text-sm hover:opacity-90">
        Admin
      </button>
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <form onSubmit={submit} className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl">
            <h2 className="text-lg font-semibold mb-3">Admin Access</h2>
            <input type="password" value={pwd} onChange={(e)=>setPwd(e.target.value)}
              placeholder="Enter password" className="border rounded-lg w-full px-3 py-2 mb-2" autoFocus />
            {err && <p className="text-red-600 text-sm mb-2">{err}</p>}
            <div className="flex gap-2 justify-end">
              <button type="button" onClick={()=>setOpen(false)} className="px-3 py-2 rounded-lg border">Cancel</button>
              <button type="submit" className="px-3 py-2 rounded-lg bg-black text-white">Enter</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
