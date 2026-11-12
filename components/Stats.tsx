"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "motion/react";
import { EASE } from "@/lib/motion";
import Reveal from "./Reveal";

const CountUp = ({ to, suffix = "", decimals = 0 }: { to: number; suffix?: string; decimals?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 2,
      ease: EASE,
      onUpdate: (v) => {
        if (ref.current) {
          ref.current.textContent =
            v.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix;
        }
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix, decimals]);

  return <span ref={ref}>0{suffix}</span>;
};

const STATS = [
  { value: 50000, suffix: "+", label: "Travelers on the trails" },
  { value: 120, suffix: "+", label: "Offline-ready locations" },
  { value: 4.9, suffix: "", decimals: 1, label: "Average rating" },
];

const Stats = () => {
  return (
    <section className="flexCenter w-full pb-24">
      <Reveal y={40} className="max-container w-full bg-green-90 px-6 py-14 text-white lg:px-20 2xl:rounded-5xl">
        <ul className="grid gap-10 text-center sm:grid-cols-3">
          {STATS.map((s) => (
            <li key={s.label}>
              <p className="bold-40 lg:bold-64">
                <CountUp to={s.value} suffix={s.suffix} decimals={s.decimals} />
              </p>
              <p className="regular-16 mt-2 text-gray-20">{s.label}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
};

export default Stats;
