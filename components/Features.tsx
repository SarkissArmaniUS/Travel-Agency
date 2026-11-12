"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { FEATURES } from "@/constants";
import { EASE } from "@/lib/motion";
import Reveal from "./Reveal";

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const phoneY = useTransform(scrollYProgress, [0, 1], [120, -120]);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24"
    >
      <div className="max-container padding-container relative flex w-full justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <motion.div className="feature-phone" style={{ y: phoneY, rotate: 15 }}>
            <Image src="/phone.png" alt="phone" width={440} height={1000} />
          </motion.div>
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <Reveal y={20} className="relative">
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </Reveal>

          <motion.ul
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20"
          >
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

type FeatureItemProps = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItemProps) => {
  return (
    <motion.li variants={item} className="flex w-full flex-1 flex-col items-start">
      <motion.div
        whileHover={{ rotate: 12, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 12 }}
        className="rounded-full bg-green-50 p-4 lg:p-7"
      >
        <Image src={icon} alt="icon" width={28} height={28} />
      </motion.div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-transparent">
        {description}
      </p>
    </motion.li>
  );
};

export default Features;
