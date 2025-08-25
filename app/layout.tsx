import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Logic Solutions LLC",
  description: "Practical tools for legal and business automation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {/* Navbar appears on all pages */}
        <Navbar />

        {/* Page-specific content */}
        <main>{children}</main>

        {/* Footer appears on all pages */}
        <footer className="py-6 text-center bg-gray-900 text-white mt-12">
          <p>© 2025 Logic Solutions LLC. All rights reserved.</p>
          <p className="text-sm mt-2">
            Support:{" "}
            <a
              href="mailto:support@quicklegalbiz.com"
              className="hover:underline"
            >
              support@quicklegalbiz.com
            </a>{" "}
            | Office:{" "}
            <a href="tel:+13177320955" className="hover:underline">
              (317) 732-0955
            </a>
          </p>
          <p className="text-xs mt-2">
            Part of the Logic Solutions Network:{" "}
            <a href="https://legaltools.com" className="hover:underline">
              Legal Tools
            </a>{" "}
            |{" "}
            <a href="https://contractgenius.com" className="hover:underline">
              Contract Genius
            </a>
          </p>
        </footer>
      
  <div className="fixed bottom-0 inset-x-0 text-center text-[11px] py-2 bg-neutral-100 border-t">
    Not Legal Advice — Educational Materials Only. For legal advice, consult a licensed attorney.
  </div>
</body>

    </html>
  );
}

