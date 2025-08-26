export default function About() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-6">About Logic Solutions LLC</h1>

      <p className="mb-4">
        Logic Solutions LLC is focused on creating practical tools that simplify
        complex legal and business processes. From document automation to
        workflow guides, our mission is to save time, reduce errors, and provide
        clarity for individuals and organizations navigating complicated systems.
      </p>

      <p className="mb-4">
        We believe in building solutions that are straightforward, efficient, and
        accessible — whether you’re managing filings, handling contracts, or
        running a small business. By combining technical know-how with real-world
        experience, Logic Solutions delivers resources that help our clients
        operate with confidence.
      </p>
import AdminAccess from "@/components/AdminAccess";
import PortalDebug from "@/components/PortalDebug";

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-semibold">About</h1>
      <p className="text-sm opacity-80">
        Educational resources. Not legal advice.
      </p>

      <AdminAccess />

      {/* Debug widget – remove when you’re done testing */}
      <PortalDebug />
    </main>
  );
}
      <p className="mb-6">
        Our network includes{" "}
        <a href="https://legaltools.com" className="text-blue-600 hover:underline">
          Legal Tools
        </a>{" "}
        and{" "}
        <a href="https://contractgenius.com" className="text-blue-600 hover:underline">
          Contract Genius
        </a>{" "}
        — two platforms designed to provide specialized support and automation for
        legal and business needs.
      </p>

      <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
      <ul className="space-y-2">
        <li>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:support@quicklegalbiz.com"
            className="text-blue-600 hover:underline"
          >
            support@quicklegalbiz.com
          </a>
          NEXT_PUBLIC_PORTAL_PASS=truepath   # or whatever you want

        </li>

        <li>
          <strong>Phone:</strong>{" "}
          <a
            href="tel:+13177320955"
            className="text-blue-600 hover:underline"
          >
            (317) 732-0955
          </a>
        </li>

        <li>
          <strong>Address:</strong> 1809 Eisenhower Dr, Speedway, IN 46224
        </li>
      </ul>

      {/* Disclaimer Section */}
      <section className="mt-12 text-sm text-gray-600">
        <h2 className="text-lg font-semibold mb-2">Disclaimer</h2>
        <p>
          This site provides AI-assisted drafting tools and resources. It is not a
          substitute for professional legal advice.
        </p>
      </section>
    </div>
  );
}
