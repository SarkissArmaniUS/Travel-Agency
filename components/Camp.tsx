"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PEOPLE_URL } from "@/constants";
import Reveal from "../components/Reveal";

gsap.registerPlugin(ScrollTrigger);

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
      <div
          className={`h-full w-[85vw] shrink-0 snap-center sm:w-[60vw] lg:w-[72vw] lg:max-w-[1100px] ${backgroundImage} rounded-3xl bg-cover bg-center bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
      >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>

        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-10 w-10 rounded-full"
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const wrap = wrapRef.current;
      const track = trackRef.current;
      if (!wrap || !track) return;

      const distance = () => Math.max(0, track.scrollWidth - wrap.clientWidth);

      gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          start: "center center",
          end: () => `+=${distance()}`,
          pin: true,
          pinSpacing: true,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    });

    document.fonts?.ready.then(() => ScrollTrigger.refresh());

    return () => mm.revert();
  }, []);

  return (
      <section className="2xl:max-container relative py-10 lg:mb-10 lg:py-20 xl:mb-20">
        <div
            ref={wrapRef}
            className="hide-scrollbar h-[420px] w-full snap-x snap-mandatory overflow-x-auto sm:h-[460px] lg:h-[min(480px,62vh)] lg:snap-none lg:overflow-hidden xl:h-[min(600px,68vh)]"
        >
          <div ref={trackRef} className="flex h-full w-max items-start justify-start gap-4 px-6 lg:gap-8 lg:px-0">
            <CampSite
                backgroundImage="bg-bg-img-1"
                title="Putuk Truno Camp"
                subtitle="Prigen, Pasuruan"
                peopleJoined="50+ Joined"
            />
            <CampSite
                backgroundImage="bg-bg-img-2"
                title="Mountain View Camp"
                subtitle="Somewhere in the Wilderness"
                peopleJoined="50+ Joined"
            />
          </div>
        </div>
      </section>
  );
};

export default Camp;
