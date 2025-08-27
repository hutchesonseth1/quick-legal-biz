"use client";
import { useState } from "react";

export default function AdminAccess() {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-xl p-4">
      <button
        className="px-4 py-2 rounded-lg bg-black text-white"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "Close Admin" : "Admin"}
      </button>

      {open && (
        <form
          className="mt-3 flex gap-2"
          action="/portal"
          method="get" // temporary: simple gate; replace with cookie-based login later
        >
          <input
            type="password"
            name="code"
            placeholder="Password"
            className="border rounded px-3 py-2"
            required
          />
          <button className="px-4 py-2 rounded bg-gray-900 text-white">
            Enter
          </button>
        </form>
      )}
    </div>
  );
}
