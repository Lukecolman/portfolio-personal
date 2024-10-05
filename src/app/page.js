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

// ANIMACIONES
import { initGSAPAnimations } from "@/components/index";
import { useScroll, useTransform, motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // SMOOTH SCROLL FOR THE WEB
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  // FOOTER BENDING
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 0.88], ["1800px", "0px"]);

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
      <section className="bg-lk-white w-full text-lk-red-600 rounded-t-full pt-24 z-30 overflow-hidden flex flex-col items-center lg:content-center">
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
      <motion.div style={{ height }} className="circleContainer">
        <div className="circle"></div>
      </motion.div>
      <Footer />
    </main>
  );
}
