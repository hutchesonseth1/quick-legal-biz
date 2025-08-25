
import { NextResponse } from "next/server";
import fs from "fs";
export async function POST(req: Request) {
  const data = await req.json().catch(()=>({}));
  try {
    fs.writeFileSync("/tmp/intake.json", JSON.stringify(data, null, 2));
  } catch {}
  return NextResponse.json({ saved: true });
}
