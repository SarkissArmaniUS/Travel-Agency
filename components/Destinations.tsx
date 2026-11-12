"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { EASE } from "@/lib/motion";
import Reveal from "./Reveal";

const DESTINATIONS = [
  { name: "Putuk Truno", place: "Pasuruan, Indonesia", price: "from $120", rating: "4.9", bg: "bg-bg-img-1" },
  { name: "Mountain View", place: "Wilderness Trail", price: "from $95", rating: "4.8", bg: "bg-bg-img-2" },
  { name: "Aguas Calientes", place: "Peru", price: "from $210", rating: "4.9", bg: "bg-[url('/boat.png')]" },
];

const list = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const Destinations = () => {
  return (
    <section id="destinations" className="flexCenter flex-col py-24">
      <div className="padding-container max-container w-full">
        <Reveal y={30} className="flex flex-wrap items-end justify-between gap-5">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[520px]">Popular Destinations</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[420px]">
            Trails and camps picked by our community. Every route works offline, so you only need to choose where to go.
          </p>
        </Reveal>

        <motion.ul
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {DESTINATIONS.map((d) => (
            <motion.li key={d.name} variants={item} className="group relative h-[420px] overflow-hidden rounded-3xl">
              <div
                className={`absolute inset-0 ${d.bg} bg-cover bg-center transition-transform duration-700 group-hover:scale-110`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              <span className="medium-14 absolute right-5 top-5 rounded-full bg-white/90 px-4 py-1 text-gray-90">
                {d.price}
              </span>

              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6 text-white">
                <h3 className="bold-32">{d.name}</h3>
                <p className="regular-14">{d.place}</p>
                <div className="mt-2 flexBetween">
                  <span className="flexCenter gap-1">
                    <Image src="/star.svg" alt="rating" width={16} height={16} />
                    <span className="bold-16">{d.rating}</span>
                  </span>
                  <a href="#contact" className="bold-16 underline-offset-4 hover:underline">
                    Plan this trip
                  </a>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Destinations;
