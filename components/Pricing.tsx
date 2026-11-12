"use client";

import { motion } from "motion/react";
import { EASE } from "@/lib/motion";
import Button from "./Button";
import Reveal from "./Reveal";

const PLANS = [
  {
    name: "Explorer",
    price: "$0",
    note: "For weekend trips",
    features: ["Offline maps for 1 region", "3 saved trips", "Community guides"],
    highlight: false,
  },
  {
    name: "Adventurer",
    price: "$9",
    note: "per month",
    features: ["Unlimited offline maps", "Trip scheduling with friends", "AR trail guide", "Priority support"],
    highlight: true,
  },
  {
    name: "Expedition",
    price: "$29",
    note: "per month",
    features: ["Everything in Adventurer", "Groups up to 10 people", "Custom routes", "Personal route consultant"],
    highlight: false,
  },
];

const list = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const Pricing = () => {
  return (
    <section id="pricing" className="flexCenter flex-col pb-24">
      <div className="padding-container max-container w-full">
        <Reveal y={30} className="text-center">
          <h2 className="bold-40 lg:bold-64">Simple Pricing</h2>
          <p className="regular-16 mx-auto mt-5 max-w-[520px] text-gray-30">
            Start free and upgrade when your adventures get bigger. Cancel any time.
          </p>
        </Reveal>

        <motion.ul
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid items-stretch gap-6 lg:grid-cols-3"
        >
          {PLANS.map((plan) => (
            <motion.li
              key={plan.name}
              variants={item}
              whileHover={{ y: -8 }}
              className={`relative flex flex-col rounded-3xl p-8 lg:p-10 ${
                plan.highlight ? "bg-green-90 text-white shadow-xl" : "border border-gray-20 bg-white"
              }`}
            >
              {plan.highlight && (
                <span className="medium-14 absolute right-6 top-6 rounded-full bg-green-50 px-4 py-1 text-white">
                  Most popular
                </span>
              )}
              <h3 className="bold-20">{plan.name}</h3>
              <p className="mt-4 flex items-end gap-2">
                <span className="bold-52">{plan.price}</span>
                <span className={`regular-14 pb-2 ${plan.highlight ? "text-gray-20" : "text-gray-30"}`}>
                  {plan.note}
                </span>
              </p>

              <ul className="mt-8 flex flex-1 flex-col gap-4">
                {plan.features.map((f) => (
                  <li key={f} className="regular-16 flex gap-3">
                    <span className="text-green-50" aria-hidden>
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Button
                  type="button"
                  title="Get started"
                  href="#contact"
                  variant={plan.highlight ? "btn_white" : "btn_green"}
                  full
                />
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Pricing;
