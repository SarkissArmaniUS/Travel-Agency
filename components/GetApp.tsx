"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { EASE } from "@/lib/motion";
import Button from "./Button";
import { APP_LINKS } from "@/constants";

const col = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const child = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const GetApp = () => {
  return (
    <section id="get-app" className="flexCenter w-full flex-col pb-[100px]">
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: EASE }}
        className="get-app"
      >
        <motion.div
          variants={col}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12"
        >
          <motion.h2 variants={child} className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Get for free now!
          </motion.h2>
          <motion.p variants={child} className="regular-16 text-gray-10">
            Available on iOS and Android
          </motion.p>
          <motion.div
            variants={child}
            className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row"
          >
            <Button type="button" title="App Store"
              href={APP_LINKS.appStore} icon="/apple.svg" variant="btn_white" full />
            <Button
              type="button"
              title="Play Store"
              href={APP_LINKS.playStore}
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-1 items-center justify-end"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: EASE }}
        >
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image src="/phones.png" alt="phones" width={550} height={870} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetApp;
