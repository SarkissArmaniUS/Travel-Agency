"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { EASE, fadeUp } from "@/lib/motion";
import Button from "./Button";
import Modal from "./Modal";
import { HOW_IT_WORKS_VIDEO } from "@/constants";

const TITLE = "Putuk Truno Camp Area".split(" ");

const Hero = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  // Паралакс фону-карти при скролі
  const { scrollY } = useScroll();
  const mapY = useTransform(scrollY, [0, 900], [0, 140]);

  return (
    <section id="home" className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <motion.div
        className="hero-map"
        style={{ y: mapY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
      />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        >
          <Image src="/camp.svg" alt="camp" width={50} height={50} />
        </motion.div>

        {/* Заголовок: слова виїжджають знизу по черзі */}
        <h1 className="bold-52 lg:bold-88" aria-label="Putuk Truno Camp Area">
          {TITLE.map((word, i) => (
            <span
              key={i}
              aria-hidden
              className="mr-[0.25em] inline-block overflow-hidden pb-[0.1em] align-bottom"
            >
              <motion.span
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 + i * 0.12, ease: EASE }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          {...fadeUp(0.8)}
          className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]"
        >
          We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app
        </motion.p>

        <motion.div {...fadeUp(1)} className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0, rotate: -90 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    delay: 1.1 + index * 0.08,
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                >
                  <Image src="/star.svg" alt="star" width={24} height={24} />
                </motion.div>
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </motion.div>

        <motion.div {...fadeUp(1.2)} className="flex w-full flex-col gap-3 sm:flex-row">
          <Button type="button" title="Download App" href="#get-app" variant="btn_green" />
          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
            onClick={() => setVideoOpen(true)}
          />
        </motion.div>
      </div>

      <div className="relative flex flex-1 items-start">
        <motion.div
          className="relative z-20"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: EASE }}
        >
          {/* Легке "левітування" картки */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8"
          >
            <div className="flex flex-col">
              <div className="flexBetween">
                <p className="regular-16 text-gray-20">Location</p>
                <Image src="/close.svg" alt="close" width={24} height={24} />
              </div>
              <p className="bold-20 text-white">Aguas Calientes</p>
            </div>

            <div className="flexBetween">
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-20">Distance</p>
                <p className="bold-20 text-white">173.28 mi</p>
              </div>
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-20">Elevation</p>
                <p className="bold-20 text-white">2.040 km</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <Modal open={videoOpen} onClose={() => setVideoOpen(false)} title="How it works" wide>
        <h2 className="bold-32 pr-10">How it works</h2>
        <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl bg-black">
          <iframe
            className="h-full w-full"
            src={`${HOW_IT_WORKS_VIDEO}?autoplay=1&rel=0`}
            title="How it works"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Modal>
    </section>
  );
};

export default Hero;
