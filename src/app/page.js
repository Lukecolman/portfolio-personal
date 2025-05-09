"use client";
import { useEffect } from "react";

// TEST
import { useRef } from "react";
import Navbar from "@/components/navbar";
import WorkCards from "@/components/work-card";
import TechMarquee from "@/components/techMarquee";
import Jobs from "@/components/jobs";
import Footer from "@/components/footer";
import HeroBanner from "@/components/herobanner";
import HeroText from "@/components/herotext";
// import PreLoader from '@/components/Loader/preLoader';

// ANIMACIONES
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

  const height = useTransform(scrollYProgress, [0, 0.88], ["1800px", "0px"]); // Define el rango de altura

  // Información de los proyectos
  const projectInfo = [
    {
      tag: ["WEB DEVELOPMENT"],
      title: "ENVIOPACK",
      imgDesktop: "/projects/enviopack/enviopack-dsk.jpg",
      imgMobile: "/projects/enviopack/enviopack-mb.jpg",
      imgBgColor: "bg-[#2f3a4c]",
      altText: "enviopack website",
      url: "https://statuesque-stroopwafel-7abdd7.netlify.app/",
      techIcons: [
        "/tech-icons/sass.svg",
        "/tech-icons/tailwind.svg",
        "/tech-icons/react.svg",
      ],
    },
    {
      tag: ["WEB DEVELOPMENT / WEB DESIGN"],
      title: "ULTIMATE COMICS",
      imgDesktop: "/projects/ultimate-comics/u-comics-dsk.jpg",
      imgMobile: "/projects/ultimate-comics/u-comics-mb.jpg",
      altText: "ultimate comics website",
      imgBgColor: "bg-[#a81025]",
      url: "https://lukecolman.github.io/comicstore-colman/",
      techIcons: [
        "/tech-icons/sass.svg",
        "/tech-icons/tailwind.svg",
        "/tech-icons/react.svg",
      ],
    },
  ];

  // ANIMACIONES EN GSAP

  const timeline = gsap.timeline({});

  useGSAP(() => {
    gsap.from(".japanese-letter2", {
      y: 300,
      ease: "power4.out",
      delay: 0.5,
      duration: 1.5,
      opacity: 0,
      stagger: {
        amount: 0.2,
        axis: "y",
        grid: [2, 1],
        from: "center",
      },
      scrollTrigger: {
        trigger: ".japanese-letter2",
        start: "top 80%",
        end: "+=100",
      },
    });

    gsap.from(".japanese-letter", {
      y: 200,
      ease: "power4.out",
      delay: 0.5,
      skewY: 21,
      opacity: 0,
      stagger: {
        amount: 0.5,
      },

      scrollTrigger: {
        trigger: ".japanese-letter",
        start: "bottom 90%",
        end: "+=100",
      },
    });

    gsap.from(".japanese-letter3", {
      y: 200,
      ease: "power4.out",
      delay: 0.5,
      skewY: 21,
      opacity: 0,
      stagger: {
        amount: 0.5,
        axis: "y",
        grid: [2, 1],
        from: "center",
      },

      scrollTrigger: {
        trigger: ".japanese-letter3",
        start: "top 95%",
        end: "+=100",
      },
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-poppins overflow-x-hidden ">
      <Navbar />

      {/* HERO BANNER */}
      <HeroBanner />

      {/* WHITE CONTAINER */}
      <div className="bg-lk-white w-full text-lk-red-600 rounded-t-full pt-24 z-30 overflow-hidden flex flex-col items-center lg:content-center">
        {/* HERO TEXT AND CIRCLE*/}
        <HeroText />

        {/*WORK TITLE NEW*/}
        <div className="select-none w-full  text-center mt-20 mb-14 flex flex-col relative justify-center items-center overflow-x-hidden overflow-y-hidden">
          <span
            className="text-[7.7rem] leading-tight font-noto font-black text-lk-red-50 text-nowrap	 items-center tracking-[-0.02em]  pb-3 
                        md:text-[447.22px]"
          >
            <span className="japanese-letter2">入</span>
            <span className="japanese-letter2">選</span>
            <span className="japanese-letter2">作</span>
            <span className="japanese-letter2">品</span>
          </span>
          <div className="flex flex-col absolute  overflow-y-hidden">
            <span
              id="selected2"
              className="font-crimson text-[1.7rem] font-semibold  -mb-5 
                            md:text-[65px] md:mb-[-4.5rem] overflow-y-hidden"
            >
              selected
            </span>
            <h2
              id="works2"
              className="font-haetten  text-8xl  
                            md:text-[287.55px]  "
            >
              WORKS
            </h2>
          </div>
        </div>

        {/* WORKS */}
        <div className="w-[inherit] flex flex-col justify-center items-center gap-8 px-sm lg:px-md">
          {projectInfo.map((project, index) => (
            <WorkCards key={index} projectInfo={project} />
          ))}

          <div
            url="#"
            className="font-extrabold text-lg
        md:mt-3 md:text-xl"
          >
            <span id="moreProjectsL">&#123; </span>
            more projects soon
            <span id="moreProjectsR"> &#125;</span>
          </div>
        </div>

        {/* <AnimationTest/> */}

        {/* TECHSTACK */}
        <div
          className="select-none w-full 
        md:mt-64"
        >
          <div className="w-full  text-center mt-40 mb-5 flex flex-col relative justify-center items-center ">
            <dev
              className="pl-4 text-6xl  leading-tight font-noto font-black text-lk-red-50 text-nowrap	 items-center tracking-[-0.02em] absolute -top-8 -z-10 
          md:text-[140px] md:-top-20 md:pl-6"
            >
              {/* 技術スタック */}
              <span className="japanese-letter3">技</span>
              <span className="japanese-letter3">術</span>
              <span className="japanese-letter3">ス</span>
              <span className="japanese-letter3">タ</span>
              <span className="japanese-letter3">ッ</span>
              <span className="japanese-letter3">ク</span>
            </dev>
            <h2
              className="italic font-extrabold flex flex-col text-5xl 
          md:text-[104px] "
            >
              TECH-STACK
            </h2>
          </div>
          <TechMarquee className="mt-4" />
        </div>

        {/* EXPERIENCE HISTORY TITLE*/}
        <div
          className="select-none w-full  text-left mt-40 flex  relative justify-left items-left  overflow-visible px-sm 
        md:mt-64 
        lg:px-md lg:max-w-[2244px]"
        >
          <div
            className="text-7xl  font-noto font-black text-lk-red-50 overflow-visible text-nowrap absolute -top-4 pb-3 -z-10 
          md:text-9xl md:-top-10"
          >
            <span className="japanese-letter">経</span>
            <span className="japanese-letter">験</span>
            <span className="japanese-letter">履</span>
            <span className="japanese-letter">歴</span>
          </div>
          <h2
            className="font-poppins font-extrabold italic flex flex-col text-6xl 
          md:text-[104px] "
          >
            <span
              className="font-crimson not-italic font-semibold text-4xl pl-1 
            md:text-[62px] md:pl-3 md:pb-1"
            >
              EXPERIENCE
            </span>
            HISTORY
          </h2>

          <img
            src="/ico.svg"
            className="h-6 text-right flex ml-auto mb-[0.53rem] self-end 
          md:h-16 md:mb-[1.3rem] "
            alt="*"
          />
        </div>

        {/* JOBS */}
        <div
          className="px-sm mt-14 mb-28 w-full text-center flex flex-col gap-7 
         md:mb-44 
        lg:px-md lg:max-w-[2244px]"
        >
          <Jobs />
          {/* DOWNLOAD CV */}

          <div className="flex flex-col md:flex-row justify-center text-center font-extrabold text-2xl md:text-3xl md:mt-3 ">
            <a
              href="https://drive.google.com/file/d/1D4x40IcoKRyBerqSBGcIf0iqD3TRhoX_/view?usp=sharing"
              target="_blank"
              className="under-line-css under-line-red w-fit self-center mx-3
                        "
            >
              DOWNLOAD CV
            </a>
            <span className="rotate-[77deg] md:rotate-0">/</span>
            <a
              href="https://drive.google.com/file/d/1FGvTFXri3f5koMq9zqk0mngEdX2TNFpu/view?usp=sharing"
              target="_blank"
              className=" under-line-css under-line-red w-fit self-center mx-3
                        "
            >
              DESCARGAR CV <span className="text-sm md:text-base">(ESP)</span>
            </a>
          </div>
        </div>
      </div>

      <motion.div style={{ height }} className="circleContainer">
        <div className="circle"></div>
      </motion.div>

      {/* FOOTER  */}

      <Footer />
    </main>
  );
}
