// app/about/page.tsx
import AdminAccess from "@/components/AdminAccess";

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-semibold">About</h1>
      <p className="text-sm opacity-80">
        Educational resources to help you self-serve paperwork. Not legal advice.
      </p>

      {/* Visible Admin button for portal access */}
      <AdminAccess />
    </main>
  );
}
