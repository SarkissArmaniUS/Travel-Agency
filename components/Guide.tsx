"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { EASE } from "@/lib/motion";
import Reveal from "./Reveal";

const Guide = () => {
  const boatRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: boatRef,
    offset: ["start end", "end start"],
  });
  // Картинка трохи збільшена й повільніше рухається за скролом
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section id="guide" className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Reveal y={20}>
          <Image src="/camp.svg" alt="camp" width={50} height={50} />
          <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">We are here for you</p>
        </Reveal>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <Reveal delay={0.1}>
            <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Guide You to Easy Path</h2>
          </Reveal>
          <Reveal delay={0.25} className="xl:max-w-[520px]">
            <p className="regular-16 text-gray-30">
              Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain
            </p>
          </Reveal>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <div ref={boatRef} className="w-full overflow-hidden 2xl:rounded-5xl">
          <motion.div style={{ scale, y }}>
            <Image
              src="/boat.png"
              alt="boat"
              width={1440}
              height={580}
              className="w-full object-cover object-center"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          className="absolute flex gap-3 rounded-3xl border bg-white py-8 pl-5 pr-7 shadow-md md:left-[5%] lg:top-20"
        >
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="bold-20 mt-2">Aguas Calientes</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Wonorejo Pasuruan</h4>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Guide;
