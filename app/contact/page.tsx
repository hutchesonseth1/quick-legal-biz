export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-6">
        We’d love to hear from you. Reach out anytime:
      </p>

      <ul className="space-y-2">
        <li>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:support@quicklegalbiz.com"
            className="text-blue-600 hover:underline"
          >
            support@quicklegalbiz.com
          </a>
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
          <strong>Address:</strong>{" "}
          5140 East Southport Rd, #1051, Southport, IN
        </li>
      </ul>

      {/* Footer sits outside the main content */}
      <footer className="py-6 text-center bg-gray-900 text-white mt-12 text-xs opacity-75">
        <p>© 2025 Quick Legal Docs | AI-assisted drafting | Not legal advice</p>
      </footer>
    </div>
  );
}
