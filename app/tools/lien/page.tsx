

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-50">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-4">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          QuickLegalBiz
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-10">
          Generate, manage, and send your legal documents in minutes — without
          the headache.
        </p>
        <Link
          href="/admin"
          className="rounded-xl bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 border-t bg-white text-center text-gray-500">
        <p>© {new Date().getFullYear()} QuickLegalBiz. All rights reserved.</p>
      </footer>
    </main>
  );
}
