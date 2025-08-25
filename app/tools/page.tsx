
import Link from "next/link";

const items = [
  { title: "Terminate Counsel", file: "/docs/Notice_Termination_of_Counsel.md" },
  { title: "Pro Se Appearance", file: "/docs/Notice_Pro_Se_Appearance.md" },
  { title: "Motion to Dismiss", file: "/docs/Motion_to_Dismiss_Template.md" },
  { title: "Discovery Request", file: "/docs/Discovery_Request_Template.md" },
  { title: "Indiana Mechanic's Lien (Notes)", file: "/docs/Indiana_Mechanics_Lien_Form_Notes.md" },
  { title: "Small Claims Starter Packet", file: "/docs/Small_Claims_Starter_Packet.md" },
  { title: "Start Your Own LLC Packet", file: "/docs/Start_Your_Own_LLC_Packet.md" },
  { title: "5 Key Elements to Funding", file: "/docs/Five_Key_Elements_Funding.md" },
  { title: "Court & Mailing Walkthrough", file: "/docs/Court_Mailing_Walkthrough.md" }
];

export default function ToolsPage() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Legal Document Packages</h1>
      <p className="opacity-70 mb-6">
        Stripped starter templates for early‑case tasks. Replace bracketed fields and export.
      </p>
      <ul className="space-y-3">
        {items.map((it) => (
          <li key={it.title} className="flex justify-between items-center border rounded p-3">
            <div>
              <div className="font-semibold">{it.title}</div>
              <div className="text-xs opacity-70">{it.file}</div>
            </div>
            <Link className="underline" href={it.file} download>Download</Link>
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-2">Next Up</h2>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>Add form‑fill wizards and PDF export (server or client).</li>
          <li>Stripe/Gumroad for checkout + email delivery.</li>
          <li>Database (Postgres) for customers/intake + review flags.</li>
        </ul>
      </div>
    </main>
  );
}
