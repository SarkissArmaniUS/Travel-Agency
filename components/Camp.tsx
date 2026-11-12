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
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
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

    // Только десктоп и без reduce-motion
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
        {/* На мобилке обычный свайп, на lg+ управляет GSAP */}
        <div
            ref={wrapRef}
            className="hide-scrollbar h-[340px] w-full overflow-x-auto lg:h-[400px] lg:overflow-hidden xl:h-[640px]"
        >
          <div ref={trackRef} className="flex h-full w-max items-start justify-start gap-8">
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
// const Camp = () => {
//   const wrapRef = useRef<HTMLDivElement>(null);
//   const trackRef = useRef<HTMLDivElement>(null);
//
//   useEffect(() => {
//     const mm = gsap.matchMedia();
//
//     mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
//       const wrap = wrapRef.current;
//       const track = trackRef.current;
//       if (!wrap || !track) return;
//
//       const distance = () => Math.max(0, track.scrollWidth - wrap.clientWidth);
//
//       gsap.to(track, {
//         x: () => -distance(),
//         ease: "none",
//         scrollTrigger: {
//           trigger: wrap,
//           start: "center center",
//           end: () => `+=${distance()}`,
//           pin: true,
//           pinSpacing: true,
//           scrub: true,
//           invalidateOnRefresh: true,
//         },
//       });
//     });
//
//     // один раз пересчитать, когда шрифты и вёрстка устоялись
//     document.fonts?.ready.then(() => ScrollTrigger.refresh());
//
//     return () => mm.revert();
//   }, []);
//
//   // useEffect(() => {
//   //   const mm = gsap.matchMedia();
//   //
//   //   // Тільки десктоп і без reduce-motion:
//   //   // вертикальний скрол крутить горизонтальну стрічку (pin + scrub)
//   //   mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
//   //     const wrap = wrapRef.current;
//   //     const track = trackRef.current;
//   //     if (!wrap || !track) return;
//   //
//   //     const distance = () => Math.max(0, track.scrollWidth - wrap.clientWidth);
//   //
//   //     gsap.to(track, {
//   //       x: () => -distance(),
//   //       ease: "none",
//   //       scrollTrigger: {
//   //         trigger: wrap,
//   //         start: "center center",
//   //         end: () => `+=${distance()}`,
//   //         pin: true,
//   //         scrub: true,
//   //         invalidateOnRefresh: true,
//   //       },
//   //       // scrollTrigger: {
//   //       //   trigger: wrap,
//   //       //   start: "center center",
//   //       //   end: () => `+=${distance()}`,
//   //       //   pin: true,
//   //       //   scrub: 1,
//   //       //   anticipatePin: 1,
//   //       //   invalidateOnRefresh: true,
//   //       // },
//   //     });
//   //   });
//   //
//   //   return () => mm.revert();
//   // }, []);
//
//   return (
//       <section className="2xl:max-container relative py-10 lg:mb-10 lg:py-20 xl:mb-20">
//       {/* На мобілці лишається звичайний свайп, на lg+ керує GSAP */}
//       <div
//         ref={wrapRef}
//         className="hide-scrollbar h-[340px] w-full overflow-x-auto lg:h-[400px] lg:overflow-hidden xl:h-[640px]"
//       >
//         <div ref={trackRef} className="flex h-full w-max items-start justify-start gap-8">
//           <CampSite
//             backgroundImage="bg-bg-img-1"
//             title="Putuk Truno Camp"
//             subtitle="Prigen, Pasuruan"
//             peopleJoined="50+ Joined"
//           />
//           <CampSite
//             backgroundImage="bg-bg-img-2"
//             title="Mountain View Camp"
//             subtitle="Somewhere in the Wilderness"
//             peopleJoined="50+ Joined"
//           />
//         </div>
//       </div>
//
//       <div className="flexEnd mt-10 px-6 lg:mt-12 lg:px-0 lg:pr-4">
//         <Reveal
//             x={0}
//             y={60}
//             className="relative w-full overflow-hidden rounded-3xl bg-green-50 p-6 lg:max-w-[320px] xl:max-w-[380px] xl:rounded-5xl xl:p-8"
//         >
//           <h2 className="regular-20 md:regular-24 2xl:regular-32 capitalize text-white xl:pr-8">
//             <strong>Feeling Lost</strong> And Not Knowing The Way?
//           </h2>
//           <p className="regular-14 mt-3 text-white xl:pr-8">
//             Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure
//           </p>
//           <Image
//               src="/quote.svg"
//               alt="camp-2"
//               width={186}
//               height={219}
//               className="camp-quote !w-[90px] xl:!w-[110px]"
//           />
//         </Reveal>
//       </div>
//
//       {/*<div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">*/}
//       {/*  <Reveal*/}
//       {/*    x={80}*/}
//       {/*    y={0}*/}
//       {/*    className="relative w-full overflow-hidden rounded-3xl bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20"*/}
//       {/*  >*/}
//       {/*    <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">*/}
//       {/*      <strong>Feeling Lost</strong> And Not Knowing The Way?*/}
//       {/*    </h2>*/}
//       {/*    <p className="regular-14 xl:regular-16 mt-5 text-white">*/}
//       {/*      Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure*/}
//       {/*    </p>*/}
//       {/*    <Image*/}
//       {/*      src="/quote.svg"*/}
//       {/*      alt="camp-2"*/}
//       {/*      width={186}*/}
//       {/*      height={219}*/}
//       {/*      className="camp-quote"*/}
//       {/*    />*/}
//       {/*  </Reveal>*/}
//       {/*</div>*/}
//     </section>
//   );
// };

export default Camp;
