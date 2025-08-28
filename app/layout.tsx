import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Muddatsir Portfolio",
  description:
    "Full Stack Developer Portfolio - Building Fast, Scalable Digital Experiences",
  keywords: ["portfolio", "developer", "nextjs", "react", "typescript"],
  authors: [{ name: "Muddatsir" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">
        <ClientLayout>
          <div className="bg-black text-white min-h-screen flex flex-col relative">
            <header className="fixed top-6 md:left-1/2 lg:left-1/2 left-80 transform -translate-x-1/2 z-50 md:mt-3 mt-6 ml-4 md:ml-0 md:bg-gray-600 md:bg-opacity-30 md:px-8 md:py-3 md:rounded-lg md:shadow-lg">
              <Navbar />
            </header>
            <main className="flex-grow p-8">{children}</main>
            <Footer />
          </div>
        </ClientLayout>
      </body>
    </html>
  );
}
