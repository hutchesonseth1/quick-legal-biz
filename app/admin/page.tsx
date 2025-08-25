
'use client';
import { useEffect, useState } from 'react';

export default function Admin() {
  const [orders, setOrders] = useState<any[]>([]);
  useEffect(() => {
    fetch('/api/orders').then(r => r.json()).then(d => setOrders(d.orders || []));
  }, []);
  return (
    <main className="min-h-screen p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Admin — Review Queue</h1>
      <p className="text-sm mb-6">Stub: approve orders after secondary review.</p>
      <table className="w-full text-sm border">
        <thead>
          <tr className="bg-gray-50">
            <th className="text-left p-2 border-r">ID</th>
            <th className="text-left p-2 border-r">Package</th>
            <th className="text-left p-2 border-r">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(o => (
            <tr key={o.id} className="border-t">
              <td className="p-2 border-r">{o.id}</td>
              <td className="p-2 border-r">{o.packageId}</td>
              <td className="p-2 border-r">{o.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
