"use client";
import { useEffect, useState } from "react";

export default function PortalDebug() {
  const [cookieVal, setCookieVal] = useState<string | null>(null);
  const [matches, setMatches] = useState<boolean | null>(null);

  const REQUIRED = process.env.NEXT_PUBLIC_PORTAL_PASS || "";

  useEffect(() => {
    // read cookie in the browser
    const m = document.cookie.match(/(?:^|;\s*)portal_pass=([^;]+)/);
    const val = m ? decodeURIComponent(m[1]) : null;
    setCookieVal(val);
    setMatches(val ? val === REQUIRED : false);
  }, []);

  return (
    <div className="mt-4 rounded-xl border p-3 text-sm">
      <div className="font-semibold mb-1">Portal Cookie Debug</div>
      <div>Cookie present: <b>{cookieVal ? "Yes" : "No"}</b></div>
      <div>Matches env password: <b>{matches ? "Yes" : "No"}</b></div>
      {cookieVal && (
        <div className="break-all mt-1 opacity-70">
          portal_pass=<code>{cookieVal}</code>
        </div>
      )}
      <div className="mt-2 flex gap-2">
        <button
          onClick={() => {
            // clear cookie
            document.cookie = "portal_pass=; Max-Age=0; Path=/; SameSite=Lax";
            location.reload();
          }}
          className="px-2 py-1 rounded border"
        >
          Clear cookie
        </button>
        <button
          onClick={() => location.reload()}
          className="px-2 py-1 rounded border"
        >
          Reload
        </button>
      </div>
    </div>
  );
}
