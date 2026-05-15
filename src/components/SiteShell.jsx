"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import CursorGlow from "@/components/CursorGlow";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageLoader from "@/components/PageLoader";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";

const pageVariants = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: -16, transition: { duration: 0.3, ease: "easeIn" } },
};

export default function SiteShell({ children }) {
  const pathname = usePathname();

  return (
    <>
      <PageLoader />
      <CursorGlow />
      <Navbar />
      <main className="min-h-screen min-w-0 overflow-x-clip">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="min-w-0 overflow-x-clip"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}
