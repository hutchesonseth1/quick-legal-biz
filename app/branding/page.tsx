
export default function Branding() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Branding & Email Templates</h1>
      <p className="opacity-70">Drop your logo in <code>/public/logo.svg</code>. Use the watermark class below in printable pages.</p>
      <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto">
{`.watermark {
  position: fixed;
  inset: 0;
  background: url('/logo.svg') center/300px no-repeat;
  opacity: 0.05;
  pointer-events: none;
}`}
      </pre>
      <h2 className="text-xl font-semibold mt-6 mb-2">Email Templates</h2>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Intake Auto‑Reply</li>
        <li>Order Receipt</li>
        <li>Document Ready + Next Steps</li>
      </ul>
    </main>
  );
}
