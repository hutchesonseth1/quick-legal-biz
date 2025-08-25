
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

type Intent = "form_help" | "filing_location" | "case_law_education" | "banned";

function classify(q: string): Intent {
  const s = q.toLowerCase();
  if (/(what|should)\s+i\s+(file|say|argue|plead)/.test(s)) return "banned";
  if (/where.*(send|file|mail)/.test(s)) return "filing_location";
  if (/case\s*law|precedent|cite/.test(s)) return "case_law_education";
  return "form_help";
}

function retrieveFromKB(keywords: string[]): string {
  const kbDir = path.join(process.cwd(), "public", "knowledge");
  let chunks: string[] = [];
  for (const fname of fs.readdirSync(kbDir)) {
    if (!fname.endsWith(".md")) continue;
    const txt = fs.readFileSync(path.join(kbDir, fname), "utf8");
    const hit = keywords.some(k => txt.toLowerCase().includes(k.toLowerCase()));
    if (hit) {
      chunks.push(`# ${fname}\n` + txt.slice(0, 2500)); // simple slice to keep small
    }
  }
  if (!chunks.length) {
    // fallback: include table of contents
    for (const fname of fs.readdirSync(kbDir)) {
      if (fname.endsWith(".md")) {
        const txt = fs.readFileSync(path.join(kbDir, fname), "utf8");
        chunks.push(`# ${fname}\n` + txt.slice(0, 1200));
      }
    }
  }
  return chunks.join("\n\n---\n\n");
}

export async function POST(req: Request) {
  const { question } = await req.json().catch(() => ({ question: "" }));
  const q = String(question||"").trim();
  const intent = classify(q);

  // Non-advice safety banner
  const disclaimer = fs.readFileSync(path.join(process.cwd(), "public", "knowledge", "disclaimer.md"), "utf8");

  if (!q) {
    return NextResponse.json({ ok: true, intent: "form_help", answer: `Ask about how a template works, where to file, or general case-law reading tips.\n\n${disclaimer}` });
  }

  if (intent === "banned") {
    return NextResponse.json({
      ok: true,
      intent,
      answer: `We can't provide legal advice (what you should file, say, or argue). We provide educational materials and templates only.\n\nSee /tools for templates and /docs for plain-English notes.\n\n${disclaimer}`
    });
  }

  if (intent === "filing_location") {
    const dataPath = path.join(process.cwd(), "public", "data", "jurisdictions.json");
    let extra = "";
    if (fs.existsSync(dataPath)) {
      extra = fs.readFileSync(dataPath, "utf8");
    }
    const kb = retrieveFromKB(["file", "send", "mail", "clerk", "recorder"]);
    return NextResponse.json({
      ok: true, intent,
      answer: `General filing guidance from our knowledge base (verify locally before mailing):\n\n${kb}\n\nJurisdiction directory (verify links):\n${extra}\n\n${disclaimer}`
    });
  }

  if (intent === "case_law_education") {
    const kb = retrieveFromKB(["case law", "precedent", "jurisdiction", "reasoning"]);
    return NextResponse.json({
      ok: true, intent,
      answer: `Here are general pointers for researching case law. We do not choose cases for your facts or give strategy:\n\n${kb}\n\nTip: use official court or state sites first; check if a decision is still good law.\n\n${disclaimer}`
    });
  }

  // default: form_help
  const kb = retrieveFromKB(["form", "template", "notice", "motion", "discovery", "lien", "small claims", "llc"]);
  return NextResponse.json({
    ok: true, intent,
    answer: `Here are educational notes about common forms and how to read them:\n\n${kb}\n\nFor downloads, see /tools. For plain-text viewing, see /docs.\n\n${disclaimer}`
  });
}
