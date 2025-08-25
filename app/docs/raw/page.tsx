
import fs from "fs";
import path from "path";

export const dynamic = "force-static";

export default function RawDoc({ searchParams }: { searchParams: { file?: string }}) {
  const name = searchParams?.file || "";
  const safe = name.replace(/[^a-zA-Z0-9._-]/g, "");
  const p = path.join(process.cwd(), "public", "docs", safe);
  let content = "Not found.";
  if (fs.existsSync(p)) content = fs.readFileSync(p, "utf8");
  return (
    <main className="max-w-3xl mx-auto p-6">
      <pre className="whitespace-pre-wrap text-sm">{content}</pre>
    </main>
  );
}
