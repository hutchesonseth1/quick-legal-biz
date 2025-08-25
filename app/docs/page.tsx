
import Link from "next/link";
import fs from "fs";
import path from "path";

export const dynamic = "force-static";

export default function DocsIndex() {
  const dir = path.join(process.cwd(), "public", "docs");
  const files = fs.readdirSync(dir).filter(f=>f.endsWith(".md"));
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Docs Index</h1>
      <ul className="list-disc pl-6 space-y-1">
        {files.map((f)=> (
          <li key={f}><Link className="underline" href={`/docs/raw?file=${encodeURIComponent(f)}`}>{f}</Link></li>
        ))}
      </ul>
    </main>
  );
}
