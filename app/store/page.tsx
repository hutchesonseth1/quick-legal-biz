import BuyButton from "@/components/BuyButton";

type Item = {
  name: string;
  blurb: string;
  image: string;     // path under /public
  priceId: string;   // Stripe Price ID
};

const PRODUCTS: Item[] = [
  {
    name: "Small Claims Filing Packet",
    blurb: "Complaint + summons + checklist + instructions.",
    image: "/branding/small-claims.png",
    priceId: "price_SMALL_CLAIMS",
  },
  {
    name: "Mechanic’s Lien Packet",
    blurb: "State form + filing guide.",
    image: "/branding/lien.png",
    priceId: "price_MECH_LIEN",
  },
];

export default function StorePage() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Store</h1>
      <ul className="grid gap-6 sm:grid-cols-2">
        {PRODUCTS.map((p) => (
          <li key={p.name} className="border rounded-xl p-4">
            <img src={p.image} alt={p.name}
                 className="w-full h-40 object-cover rounded mb-3" />
            <h2 className="font-medium">{p.name}</h2>
            <p className="text-sm opacity-80 mb-3">{p.blurb}</p>
            <BuyButton priceId={p.priceId} product={p.name} label="Buy Now" />
          </li>
        ))}
      </ul>
    </main>
  );
}
