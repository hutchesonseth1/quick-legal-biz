import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: ["/assist/:path*", "/portal/:path*", "/community/:path*"], // only guard these
};

export function middleware(req: NextRequest) {
  const pass = req.cookies.get("portal_pass")?.value;
  const required = process.env.NEXT_PUBLIC_PORTAL_PASS;

  // allow public routes
  const p = req.nextUrl.pathname;
  if (!p.startsWith("/assist") && !p.startsWith("/portal") && !p.startsWith("/community")) {
    return NextResponse.next();
  }

  // gate protected routes
  if (!pass || pass !== required) {
    const url = req.nextUrl.clone();
    url.pathname = "/portal"; // your portal page should have the password UI too
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
