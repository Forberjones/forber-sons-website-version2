import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Providers from "./providers";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: "Forber & Sons LTD",
  description: "Electrical installations across Merseyside",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={[
          lexend.variable,
          "antialiased font-sans",
          "min-h-screen flex flex-col overflow-x-hidden",
          // ✅ Let CSS variables control global background
          "bg-[var(--background)] text-[var(--foreground)]",
        ].join(" ")}
      >
        <Header />

        {/* ✅ IMPORTANT: no bg-black here, let pages decide */}
        <main className="flex-1">
          <Providers>{children}</Providers>
        </main>

        <Footer />
      </body>
    </html>
  );
}