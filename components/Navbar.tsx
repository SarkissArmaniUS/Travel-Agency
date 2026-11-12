"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { NAV_LINKS } from "@/constants";
import { EASE } from "@/lib/motion";
import Button from "./Button";
import LoginModal from "./LoginModal";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "bg-white/80 shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="flexBetween max-container padding-container relative py-5">
        <Link href="/">
          <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
        </Link>

        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              {/* Звичайний <a>, а не next/link: якорі обробляє Lenis */}
              <a
                href={link.href}
                className="regular-16 group relative flexCenter cursor-pointer pb-1.5 text-gray-50 transition-colors hover:text-black"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-green-50 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="lg:flexCenter hidden">
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
            onClick={() => setLoginOpen(true)}
          />
        </div>

        <motion.button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpen((v) => !v)}
          className="inline-block cursor-pointer lg:hidden"
        >
          <Image src="/menu.svg" alt="menu" width={32} height={32} />
        </motion.button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="absolute inset-x-0 top-full overflow-hidden bg-white shadow-md lg:hidden"
          >
            <ul className="padding-container flex flex-col gap-5 py-6">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.4, ease: EASE }}
                >
                  <a href={link.href} onClick={() => setOpen(false)} className="bold-18 text-gray-90">
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + NAV_LINKS.length * 0.07 }}
              >
                <Button
                  type="button"
                  title="Login"
                  icon="/user.svg"
                  variant="btn_dark_green"
                  full
                  onClick={() => {
                    setOpen(false);
                    setLoginOpen(true);
                  }}
                />
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </motion.header>
  );
};

export default Navbar;
