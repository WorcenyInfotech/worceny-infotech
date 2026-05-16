import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import PageLoader from "@/components/PageLoader";
import CursorGlow from "@/components/CursorGlow";

const inter = Inter({ subsets: ["latin"], weight: ["300","400","500","600","700","800","900"] });

export const metadata = {
  title: "Top IT Service Company in Surat | Worceny Infotech — Web & Software",
  description:
    "Worceny Infotech is a top IT service company in Surat, Gujarat. Website development, web apps, UI/UX, SEO, and full-stack software for businesses in Surat and worldwide.",
  keywords:
    "IT company Surat, top IT services Surat, web development Surat, software company Surat, website design Surat, Worceny Infotech, Gujarat IT services, React development, full stack Surat",
  metadataBase: new URL("https://worcenyinfotech.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Top IT Service Company in Surat | Worceny Infotech",
    description:
      "Leading Surat IT company for websites, web apps, UI/UX, and digital solutions. Creative, fast, and scalable delivery.",
    type: "website",
    url: "https://worcenyinfotech.com",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top IT Service Company in Surat | Worceny Infotech",
    description:
      "Websites, web apps, and IT services from Surat, Gujarat — built for performance and growth.",
  },
  other: {
    "theme-color": "#2d4dca",
    "geo.region": "IN-GJ",
    "geo.placename": "Surat",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Worceny Infotech",
              description:
                "Top IT service company in Surat offering website development, web applications, UI/UX design, SEO, and software consulting.",
              url: "https://worcenyinfotech.com",
              areaServed: {
                "@type": "City",
                name: "Surat",
                containedInPlace: {
                  "@type": "State",
                  name: "Gujarat",
                  containedInPlace: { "@type": "Country", name: "India" },
                },
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Surat",
                addressRegion: "Gujarat",
                addressCountry: "IN",
              },
              knowsAbout: [
                "Web development",
                "IT services",
                "Software development",
                "UI/UX design",
                "SEO",
              ],
              sameAs: [
                "https://www.linkedin.com/company/worceny-infotech",
                "https://github.com/WorcenyInfotech",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <PageLoader />
        <CursorGlow />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
