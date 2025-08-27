import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Providers from "./providers";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // choose weights you need
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: "Forber & Sons LTD",
  description: "Electrical installations across Merseyside",
  icons: {
    icon: [
      { url: "/favicon.ico" }, // default
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png", // for iOS devices
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} antialiased font-sans bg-black min-h-screen flex flex-col`}>
        <Header />
  <main className="bg-black flex-1">
    <Providers>{children}</Providers>
  </main>
        <Footer />
      </body>
    </html>
  );
}
