import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./Header";

export const metadata: Metadata = {
  title: "Fly20 - Umang Patel",
  description: "Portfolio of Umang Patel, Full Stack Developer",
  icons: {
    icon: "/fly-20_favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-50 antialiased">
        <div className="min-h-screen bg-slate-50 text-slate-900 scroll-smooth">
          <Header />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}
            <footer className="mt-10 border-t border-slate-200 py-6 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-center sm:text-left">
                © 2026 FLY-20 LTD · Company No. 14103702 · VAT No. 501942712
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/Fly-20"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-slate-700 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/umang-fly20/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-slate-700 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
