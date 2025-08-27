import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { token } = await req.json();
  const required = process.env.NEXT_PUBLIC_PORTAL_PASS || "";
  if (!token || token !== required) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  const res = NextResponse.json({ ok: true });
  res.cookies.set("portal_pass", "ok", {
    httpOnly: true, sameSite: "lax", path: "/", maxAge: 60 * 60 * 24 * 30
  });
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set("portal_pass", "", { path: "/", maxAge: 0 });
  return res;
}
