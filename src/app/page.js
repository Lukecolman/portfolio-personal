// -CHORE LIST
// - [x] REFACTOR
// - [x] ADD WORKS AND CURRICULUM TO CONSTANTS
// - [x] FIX SCROLL BAR PROBLEM WITH MOTION DIV FOOTER
// -REDESIGN BASED IN DANDADAN INTRO
// - [x] REMOVE OR MODIFY SCROLLBAR
// - [x] ADD SOCIAL MEDIA AND MAIL TO CONSTANTS
// - [x] !!! FIX SCROLLBAR ON MOBILE
// - [x] !!! FIX FOOTER ANIMATION ON MOBILE

// - [] CODE AND ADD PRELOADER
// - [] ADD NEW PAGES
// -- [] FULL LIST OF WORKS
// -- [] INDIVIDUAL WORK
// -- [] PERSONAL PROJECTS
// -- [] ABOUT ME
// -- [] PHOTOGRAPHY(?MAYBE)
// - [] ADD PAGE TRANSITION

"use client";
import { useEffect, useRef } from "react";
import {
  Navbar,
  HeroBanner,
  HeroText,
  Work,
  TechMarquee,
  Jobs,
  Footer,
} from "@/components/index";

import { useOverlayScrollbars } from "../hooks/useOverlayScrollbars"; // Importar el hook

// ANIMACIONES
import { initGSAPAnimations } from "@/components/index";
import { useScroll, useTransform, motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useOverlayScrollbars();

  // SMOOTH SCROLL FOR THE WEB

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
        lenisOptions: {
          wrapper: window,
          content: document.documentElement,
          lerp: 0.1,
          duration: 1,
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          smoothTouch: false,
          wheelMultiplier: 1.2,
          touchMultiplier: 2,
          normalizeWheel: true,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
        },
      });
    })();
  }, []);

  // // FOOTER BENDING
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 0.89], ["2300px", "0px"]);

  // Ejecuta las animaciones de GSAP
  useGSAP(() => {
    initGSAPAnimations();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-poppins overflow-x-hidden ">
      <Navbar />

      {/* HERO BANNER */}
      <HeroBanner />

      {/* WHITE CONTAINER */}
      <section className="bg-lk-white w-full text-lk-red-600 rounded-t-full pt-24 z-30 overflow-hidden flex flex-col items-center -mb-[2px] lg:content-center">
        {/* HERO TEXT AND CIRCLE*/}
        <HeroText />

        {/* WORKS */}
        <Work />

        {/* TECHSTACK */}
        <TechMarquee />

        {/* EXPERIENCE HISTORY */}
        <Jobs />
      </section>

      {/* FOOTER  */}
      <div className="relative w-full overflow-x-hidden bg-lk-white">
        <motion.div
          style={{ height }}
          className="circleContainer absolute top-0  z-[500] !bg-transparent hidden md:block"
        >
          <div className="circle"></div>
        </motion.div>

        <Footer />
      </div>
    </main>
  );
}
