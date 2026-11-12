"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { PEOPLE_URL } from "@/constants";
import { EASE } from "@/lib/motion";
import Reveal from "./Reveal";

// Тимчасові відгуки: заміни на справжні
const ITEMS = [
  {
    name: "Anna K.",
    role: "Weekend hiker",
    quote: "The offline map saved our trip. No signal for six hours and we still reached the summit exactly on schedule.",
  },
  {
    name: "Mark S.",
    role: "Trail runner",
    quote: "I plan every route with friends in the schedule view. No more endless chats about who goes where and when.",
  },
  {
    name: "Olena P.",
    role: "Camping enthusiast",
    quote: "New locations show up every month, so there is always something to explore. The AR guide is a lot of fun.",
  },
  {
    name: "David L.",
    role: "Mountain guide",
    quote: "I recommend it to every group I lead. Clear routes, accurate distances and it works without internet.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((v) => (v + 1) % ITEMS.length), 6000);
    return () => clearInterval(t);
  }, [paused]);

  const current = ITEMS[index];

  return (
    <section className="flexCenter flex-col pb-24">
      <div className="padding-container max-container w-full">
        <Reveal y={30}>
          <h2 className="bold-40 lg:bold-64 text-center">What Travelers Say</h2>
        </Reveal>

        <div
          className="mx-auto mt-12 max-w-[820px] text-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="min-h-[260px] sm:min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="flex flex-col items-center gap-6"
              >
                <blockquote className="regular-20 md:regular-24 lg:regular-32 text-gray-90">
                  “{current.quote}”
                </blockquote>
                <figcaption className="flexCenter gap-4">
                  <Image
                    src={PEOPLE_URL[index % PEOPLE_URL.length]}
                    alt={current.name}
                    width={52}
                    height={52}
                    className="h-12 w-12 rounded-full"
                  />
                  <span className="text-left">
                    <span className="bold-16 block">{current.name}</span>
                    <span className="regular-14 block text-gray-30">{current.role}</span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-8 flexCenter gap-3">
            {ITEMS.map((item, i) => (
              <button
                key={item.name}
                type="button"
                aria-label={`Show review ${i + 1}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-green-50" : "w-2.5 bg-gray-20 hover:bg-gray-30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
