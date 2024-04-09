'use client';
import { useEffect } from 'react';

// TEST
import { useRef } from 'react';



import Image from 'next/image';
import Link from 'next/link';

import Navbar from '@/components/navbar';
import WorkCards from '@/components/work-card';
// import TechStack from '@/components/techStack';
import TechMarquee from '@/components/techMarquee';
import Jobs from '@/components/jobs';
import Footer from '@/components/footer';
import HeroBanner from '@/components/herobanner';
import HeroText from '@/components/herotext';
import AnimationTest from '@/components/animationsFull';

// ANIMACIONES 
import { useScroll, useTransform, motion } from 'framer-motion';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap"
gsap.registerPlugin(ScrollTrigger)



export default function Home() {

  // SMOOTH SCROLL FOR THE WEB
  useEffect( () => {

    (

      async () => {

          const LocomotiveScroll = (await import('locomotive-scroll')).default

          const locomotiveScroll = new LocomotiveScroll();

      }

    )()

  }, [])


  // FOOTER BENDING
  const container = useRef(null);

  const { scrollYProgress } = useScroll({

      target: container,

      offset: ["start end", "end start"]

  })



  const height = useTransform(scrollYProgress, [0, 0.88], ['1800px', '0px']); // Define el rango de altura



    // Información de los proyectos
    const projectInfo = [
      {
        tag: ['web development'],
        title: 'ENVIOPACK',
        img: '/projects/image-294.jpg',
        url: 'http://www.google.com',
        techIcons: ['/tech-icons/sass.svg', '/tech-icons/tailwind.svg', '/tech-icons/react.svg'],
      },
      {
        tag: ['web development'],
        title: 'COMIC STORE',
        img: '/projects/image-294.jpg',
        url: 'http://www.google.com',
        techIcons: ['/tech-icons/react.svg', '/tech-icons/nextjs.svg', '/tech-icons/tailwind.svg'],
      },
      {
        tag: ['web development'],
        title: 'MUJERES AL VUELO',
        img: '/projects/image-294.jpg',
        url: 'http://www.google.com',
        techIcons: ['/tech-icons/html5.svg', '/tech-icons/css3.svg', '/tech-icons/tailwind.svg'],
      },
    ];


    // ANIMACIONES EN GSAP
    useGSAP(() => {
      gsap.from(".japanese-letter2", {
        y: 300,
        ease: "power4.out",
        delay: 1,
        // skewY: 21,
        opacity: 0,
        stagger: {
        amount: 0.2,
        axis: "y",
        grid: [2, 1],
        from: "center",
     },
      yoyo: true,
      repeat: -1,
    })

    
    gsap.from("#selected2", {
        y: 100,
        ease: "power4.out",
        delay: 1,
        // skewY: 21,
        opacity: 0,
        stagger: {
        amount: 0.2,
        axis: "y",
        grid: [2, 1],
        from: "center",
     },
      yoyo: true,
      repeat: -1,
    })

    
    gsap.from("#works2", {
        y: 300,
        ease: "power4.out",
        delay: 1,
        // skewY: 21,
        opacity: 0,
        stagger: {
            amount: 0.9, },

      yoyo: true,
      repeat: -1,
    })
  }, []);

    return (
        <main className='flex min-h-screen flex-col items-center justify-between font-poppins overflow-x-hidden '>

        <Navbar/>

        {/* HERO BANNER */}
        <HeroBanner/>


        {/* WHITE CONTAINER */}
          <div className='bg-lk-white w-full text-lk-red-600 rounded-t-full pt-24 z-30 overflow-x-hidden flex flex-col items-center lg:content-center'>
       
        {/* HERO TEXT AND CIRCLE*/}
      <HeroText/>
        

        {/*WORK TITLE */}
        <div className='select-none w-full  text-center mt-20 flex flex-col relative justify-center items-center overflow-x-hidden overflow-y-hidden'>
          <span className='text-[7.7rem] leading-tight font-noto font-black text-lk-red-50 text-nowrap	 items-center tracking-[-0.02em]  pb-3 
          md:text-[447.22px]'>
          入選作品
          </span>
          <h2 className='font-haetten flex flex-col text-8xl absolute 
          md:text-[287.55px] md:pt-10'>
            <span className='font-crimson text-[1.7rem] font-semibold  -mb-5 
            md:text-[65px] md:mb-[-3.25rem] '>
              selected
              </span>
            WORKS
          </h2>

        </div>

        {/* WORKS */}
        <div className='flex flex-col justify-center items-center gap-8 px-sm lg:px-md'>
        {projectInfo.map((project, index) => (
          <WorkCards key={index} projectInfo={project} />
        ))}

        <a url="#" className='font-extrabold text-2xl hover:cursor-pointer 
        md:mt-3 md:text-3xl'>
          MORE PROJECTS SOON
        </a>
      </div>

      <AnimationTest/>


        {/* TECHSTACK */}
        <div className='select-none w-full 
        md:mt-64'>
        <div className='w-full  text-center mt-40 mb-5 flex flex-col relative justify-center items-center '>
          <span className='pl-4 text-6xl  leading-tight font-noto font-black text-lk-red-50 text-nowrap	 items-center tracking-[-0.02em] absolute -top-8 -z-10 
          md:text-[140px] md:-top-20 md:pl-6'>
          技術スタック
          </span>
          <h2 className='italic font-extrabold flex flex-col text-5xl 
          md:text-[104px] '>
            TECH-STACK
          </h2>


        </div>
          <TechMarquee className='mt-4'/>

        </div>

        {/* POR ALGUNA RAZON DE ESTA FORMA NO ANDA
        <TechStack/> */}


        {/* EXPERIENCE HISTORY TITLE*/}
        <div className='select-none w-full  text-left mt-40 flex  relative justify-left items-left  overflow-visible px-sm 
        md:mt-64 
        lg:px-md lg:max-w-[2244px]'>
          <span className='text-7xl  font-noto font-black text-lk-red-50 overflow-visible text-nowrap absolute -top-4 pb-3 -z-10 
          md:text-9xl md:-top-10'>
          経験履歴
          </span>
          <h2 className='font-poppins font-extrabold italic flex flex-col text-6xl 
          md:text-[104px] '>
            <span className='font-crimson not-italic font-semibold text-4xl pl-1 
            md:text-[62px] md:pl-3 md:pb-1'>
              EXPERIENCE
              </span>
            HISTORY
          </h2>

          <img src='/ico.svg' className='h-6 text-right flex ml-auto mb-[0.53rem] self-end 
          md:h-16 md:mb-[1.3rem] '></img>
        </div>


        {/* JOBS */}
        <div className='px-sm mt-14 mb-28 w-full text-center flex flex-col gap-7 
         md:mb-44 
        lg:px-md lg:max-w-[2244px]'>
          <Jobs/>

          <a href="http://www.google.com" target='_blank' className='under-line-css under-line-red >text-center font-extrabold text-2xl w-fit self-center
          md:mt-3 md:text-3xl'>
          DOWNLOAD CV
        </a>
        </div>



          </div>

          <motion.div style={{height}} className="circleContainer">

            <div className="circle"></div>

          </motion.div> 

          {/* FOOTER  */}

          <Footer/>
        </main>
    );
}
