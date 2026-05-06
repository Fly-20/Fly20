import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fly20 - Umang Patel',
  description: 'Portfolio of Umang Patel, Full Stack Developer',
  icons: {
    icon: '/fly-20_favicon.png',
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
        {children}
      </body>
    </html>
  );
}
