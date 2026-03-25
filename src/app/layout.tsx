import type { Metadata } from "next";
import { Sidebar } from "@/components/sidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "LegalHub - Hukum & Politik Indonesia",
  description: "Platform komprehensif untuk informasi hukum, politik, dan anti-korupsi di Indonesia",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect fill='%234f46e5' width='100' height='100'/><text x='50' y='60' font-size='60' fill='white' text-anchor='middle' dominant-baseline='middle' font-weight='bold'>L</text></svg>",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Sidebar />
        <main className="min-h-screen bg-gray-950 p-4 lg:p-8">
          {children}
        </main>
      </body>
    </html>
  );
}
