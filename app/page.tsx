
'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [show, setShow] = useState(false);
  const [pass, setPass] = useState('');
  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-center">Quick Legal Biz</h1>
      <p className="mt-3 text-center max-w-xl">Affordable templates and guided workflows so you can move fast without breaking the bank.</p>

      <div className="mt-8 flex gap-4">
        <Link href="/about" className="px-4 py-2 border rounded-xl">About</Link>
        <Link href="/contact" className="px-4 py-2 border rounded-xl">Contact</Link>
        <Link href="/tools/lien" className="px-4 py-2 border rounded-xl">Lien Tool</Link>
      </div>

      {/* Bottom-left unlock */}
      <div className="absolute left-4 bottom-4">
        <button className="text-xs underline" onClick={() => setShow(s => !s)}>
          {show ? 'Close' : 'Member Login'}
        </button>
        {show && (
          <div className="mt-2 p-3 border rounded-xl bg-white/80 backdrop-blur w-64">
            <input
              type="password"
              placeholder="Enter access password"
              value={pass}
              onChange={e => setPass(e.target.value)}
              className="w-full border rounded px-2 py-1 text-sm"
            />
            <button
              className="mt-2 w-full border rounded px-2 py-1 text-sm"
              onClick={() => {
                if (pass.trim() === (process.env.NEXT_PUBLIC_GATE || 'letmein')) {
                  window.location.href = '/hidden';
                } else {
                  alert('Invalid password');
                }
              }}
            >
              Unlock
            </button>
            <div className="text-[10px] text-gray-500 mt-1">Default password: <code>letmein</code> (set NEXT_PUBLIC_GATE)</div>
          </div>
        )}
      </div>
    </main>
  );
}
