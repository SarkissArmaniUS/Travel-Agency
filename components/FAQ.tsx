"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EASE } from "@/lib/motion";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "Does the app work without internet?",
    a: "Yes. Download a region before you go and the maps, routes and AR guide keep working with no signal.",
  },
  {
    q: "Can I plan a trip with friends?",
    a: "Create a schedule, invite friends by link and everyone sees the same route, date and meeting point.",
  },
  {
    q: "Which regions are covered?",
    a: "We add new locations every month, shared by our worldwide community of climbers and hikers.",
  },
  {
    q: "How do I cancel my plan?",
    a: "You can cancel at any time from your account. Your plan stays active until the end of the paid period.",
  },
  {
    q: "How can I contact support?",
    a: "Use the contact form below and we will reply by email as soon as possible.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="flexCenter flex-col pb-24">
      <div className="padding-container max-container w-full">
        <Reveal y={30}>
          <h2 className="bold-40 lg:bold-64 text-center">Questions & Answers</h2>
        </Reveal>

        <Reveal y={30} delay={0.1} className="mx-auto mt-12 flex max-w-[820px] flex-col gap-4">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="rounded-3xl border border-gray-20 bg-white">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flexBetween w-full gap-6 px-6 py-5 text-left lg:px-8 lg:py-6"
                >
                  <span className="bold-18 lg:bold-20">{item.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="flexCenter h-9 w-9 shrink-0 rounded-full bg-green-50 text-xl text-white"
                    aria-hidden
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="regular-16 px-6 pb-6 text-gray-30 lg:px-8">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
};

export default FAQ;
