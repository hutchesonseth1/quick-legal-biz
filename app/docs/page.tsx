import fs from "fs";
import path from "path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const DOC_DIR = path.join(process.cwd(), "public", "docs");

export default function DocsIndex() {
  const files = fs
    .readdirSync(DOC_DIR, { withFileTypes: true })
    .filter((e) => e.isFile() && e.name.endsWith(".md"))
    .map((e) => e.name)
    .sort();

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-3">Documents</h1>
      {files.length === 0 ? (
        <p className="text-sm opacity-70">No .md files in /public/docs.</p>
      ) : (
        <ul className="list-disc pl-6 space-y-2">
          {files.map((n) => (
            <li key={n}>
              <a className="underline" href={`/docs/raw?file=${encodeURIComponent(n)}`}>
                {n}
              </a>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
