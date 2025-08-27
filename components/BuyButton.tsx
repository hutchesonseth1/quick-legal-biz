"use client";

type Props = { priceId: string; product?: string; label?: string };

export default function BuyButton({ priceId, product, label = "Buy" }: Props) {
  const go = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ priceId, product }),
    });
    const data = await res.json();
    if (data?.url) window.location.href = data.url;
    else alert(data?.error ?? "Checkout error");
  };

  return (
    <button
      onClick={go}
      className="px-4 py-2 rounded bg-black text-white hover:opacity-90"
    >
      {label}
    </button>
  );
}
