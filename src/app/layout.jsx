import { Inter } from "next/font/google";
import SiteShell from "@/components/SiteShell";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Worceny Infotech — IT & web services",
  description:
    "Surat-based IT & web company — modern websites, apps, and software.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <body className={inter.className}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
