"use client";

import { useState } from "react";

type Item = {
  name: string;
  blurb: string;
  price: number;         // display only
  priceId: string;       // Stripe Price ID: price_xxx
  image: string;
};

const PRIMARY: Item = {
  name: "Small Claims Filing Packet",
  blurb:
    "Complaint, summons, service checklist, and filing instructions. Educational only — not legal advice.",
  price: 19,
  priceId: "price_SMALL_CLAIMS", // TODO: replace with your real Stripe Price ID
  image: "/branding/small-claims.png", // put a PNG in /public/branding
};

RELATED: Item[] = [
  {
    name: "Mechanic’s Lien Packet",
    blurb: "State form + filing guide and mailing steps.",
    price: 29,
    priceId: "price_MECH_LIEN",
    image: "/branding/lien.png",
  },
  {
    name: "Notice of Appearance",
    blurb: "Enter your appearance as pro se with service sheet.",
    price: 9,
    priceId: "price_NOTICE_APPEAR",
    image: "/branding/appearance.png",
  },
  {
    name: "Motion to Dismiss (Template)",
    blurb: "Structured template with placeholders and citations slots.",
    price: 15,
    priceId: "price_MTD",
    image: "/branding/motion.png",
  },
];

async function checkout(priceId: string, product: string) {
  const res = await fetch("/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ priceId, product }),
  });
  if (!res.ok) {
    alert("Checkout failed. Try again.");
    return;
  }
  const { url } = await res.json();
  window.location.href = url;
}

function TrustBar() {
  return (
    <div className="flex flex-wrap items-center gap-4 text-xs opacity-75">
      <span className="inline-flex items-center gap-2">
        ✅ Secure checkout by Stripe
      </span>
      <span className="inline-flex items-center gap-2">✅ Instant access</span>
      <span className="inline-flex items-center gap-2">
        ✅ Free updates if the form changes
      </span>
      <span className="inline-flex items-center gap-2">
        ⚖️ Educational only — not legal advice
      </span>
    </div>
  );
}

export default function StorePage() {
  const [buying, setBuying] = useState<string | null>(null);

  return (
    <main className="mx-auto max-w-6xl p-6">
      {/* Hero product */}
      <section className="flex flex-col md:flex-row gap-8 rounded-2xl border p-6 bg-white">
        <div className="flex-1 flex items-center justify-center">
          {/* Big product image */}
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-xl border bg-[linear-gradient(0deg,transparent_24px,rgba(0,0,0,0.05)_25px),linear-gradient(90deg,transparent_24px,rgba(0,0,0,0.05)_25px)] bg-[length:25px_25px]">
            {/* fallback if no image yet */}
            <img
              src={PRIMARY.image}
              alt={PRIMARY.name}
              className="object-contain w-full h-full p-6"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/branding/placeholder-doc.png";
              }}
            />
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <h1 className="text-3xl font-semibold">{PRIMARY.name}</h1>
            <p className="mt-2 text-sm opacity-80">{PRIMARY.blurb}</p>
          </div>

          <div className="flex items-end gap-4">
            <div className="text-3xl font-bold">${PRIMARY.price}</div>
            <div className="text-green-600 text-sm">✔ In Stock — digital download</div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={async () => {
                setBuying(PRIMARY.priceId);
                try {
                  await checkout(PRIMARY.priceId, PRIMARY.name);
                } finally {
                  setBuying(null);
                }
              }}
              className="rounded-xl px-5 py-3 bg-black text-white hover:opacity-90 disabled:opacity-50"
              disabled={!!buying}
            >
              {buying === PRIMARY.priceId ? "Redirecting…" : "Add to Cart"}
            </button>
            <a
              href="/wizards/small-claims"
              className="rounded-xl px-5 py-3 border hover:bg-gray-50"
            >
              Preview Wizard
            </a>
          </div>

          <TrustBar />

          {/* Micro details like SKU / policy */}
          <div className="text-xs opacity-70">
            SKU: QLB-SC-001 · 30-day simple guarantee: if the form is rejected for a template defect, we fix/replace it.
          </div>
        </div>
      </section>

      {/* Related items */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4">You may also need</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {RELATED.map((it) => (
            <div
              key={it.priceId}
              className="rounded-2xl border p-5 bg-white flex flex-col"
            >
              <div className="relative w-full aspect-[4/5] rounded-lg border bg-gray-50">
                <img
                  src={it.image}
                  alt={it.name}
                  className="object-contain w-full h-full p-5"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/branding/placeholder-doc.png";
                  }}
                />
              </div>
              <div className="mt-3 font-medium">{it.name}</div>
              <p className="text-sm opacity-70 mt-1 line-clamp-2">{it.blurb}</p>
              <div className="mt-3 flex items-center justify-between">
                <div className="font-semibold">${it.price}</div>
                <button
                  onClick={async () => {
                    setBuying(it.priceId);
                    try {
                      await checkout(it.priceId, it.name);
                    } finally {
                      setBuying(null);
                    }
                  }}
                  className="rounded-lg px-3 py-2 bg-black text-white text-sm hover:opacity-90 disabled:opacity-50"
                  disabled={!!buying}
                >
                  {buying === it.priceId ? "…" : "Add"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Social proof / footer strip */}
      <section className="mt-10 rounded-2xl border p-5 bg-white">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="text-sm">⭐️⭐️⭐️⭐️⭐️ Average rating</div>
          <div className="text-sm">🔒 PCI-compliant payments</div>
          <div className="text-sm">📩 Email receipt with quick links</div>
          <div className="text-sm">📚 Self-help resources included</div>
        </div>
      </section>
    </main>
  );
}
