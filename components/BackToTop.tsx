"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLenis } from "./SmoothScroll";

const BackToTop = () => {
  const lenis = useLenis();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          key="back-to-top"
          type="button"
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => (lenis ? lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: "smooth" }))}
          className="fixed bottom-6 right-6 z-50 flexCenter h-12 w-12 rounded-full bg-green-90 text-white shadow-lg transition-colors hover:bg-black"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
