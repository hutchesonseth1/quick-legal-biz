import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = { matcher: ["/assist/:path*", "/portal/:path*", "/community/:path*"] };

export function middleware(req: NextRequest) {
  const cookie = req.cookies.get("portal_pass")?.value;
  if (cookie === "ok") return NextResponse.next();
  const url = req.nextUrl.clone(); url.pathname = "/portal";
  return NextResponse.redirect(url);
}
