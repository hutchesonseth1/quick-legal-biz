
'use client';
import { useEffect, useState } from 'react';

export default function Hidden() {
  const [items, setItems] = useState<any[]>([]);
  useEffect(() => {
    fetch('/api/catalog').then(r => r.json()).then(d => setItems(d.items || []));
  }, []);
  return (
    <main className="min-h-screen p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Quick Legal Biz — Packages</h1>
      <p className="text-sm mb-6">Starter templates (stripped). Click to download; submit order when ready for review.</p>
      <ul className="grid sm:grid-cols-2 gap-4">
        {items.map(i => (
          <li key={i.id} className="border rounded-xl p-4">
            <div className="font-semibold">{i.title}</div>
            <div className="text-xs text-gray-500 truncate">{i.file}</div>
            <div className="mt-3 flex gap-2">
              <a className="px-3 py-1 border rounded" href={i.file} download>Download</a>
              <button className="px-3 py-1 border rounded"
                onClick={async () => {
                  const res = await fetch('/api/orders', { method:'POST', body: JSON.stringify({packageId: i.id, data: {}})});
                  const j = await res.json();
                  alert('Order queued: ' + j.id + ' (status: ' + j.status + ')');
                }}
              >Submit for Review</button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
