import Image from 'next/image';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap"
import GsapMagnetic from './extras/gsapMagnetic';
gsap.registerPlugin(ScrollTrigger)


import { useEffect } from 'react';
// import { gsap } from 'gsap';

export default function AnimationTest() {

  // Mouseenter function
function enterAnimation(link, e, index) {
  link.tl.tweenFromTo(0, "midway");
}

// Mouseleave function
function leaveAnimation(link, e) {
  link.tl.play();
}

// Animations variables
let workLinkUnderlineAnimEnter;
let workLinkUnderlineAnimLeave;

// Get all links
let workLinks = document.querySelectorAll(".js-work-link");

workLinks.forEach((link, index, value) => {
  
  let underline = link.querySelector(".underline");
  link.tl = gsap.timeline({paused: true});
  
  link.tl.fromTo(underline, {
    width: "0%",
    left: "0%",
  }, {
    width: "100%",
    duration: 0.5, 
  });
  
  link.tl.add("midway");
  
  link.tl.fromTo(underline, {
    width: "100%",
    left: "0%",
  }, {
    width: "0%",
    left: "100%",
    duration: 0.5, 
    immediateRender: false
  });

  // Mouseenter
  link.addEventListener("mouseenter", (e) => {
    enterAnimation(link, e, index);
  });

  // Mouseleave
  link.addEventListener("mouseleave", (e) => {
    leaveAnimation(link, e);
  });

});


    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { duration: 0.5, ease: "power1.out" } });

        gsap.from(".japanese-letter", {
            y: 300,
            ease: "power4.out",
            delay: 1,
            skewY: 21,
            opacity: 0,
            stagger: {
              amount: 0.9, },
          yoyo: true,
          repeat: -1,
        })

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


    // timeline.from("#otherElement", {
    //   opacity: 0,
    //   x: -175,
    //   duration: 2,
    // }, 0);
    
    // gsap.from("#anotherElement", {
    //   opacity: 0,
    //   y: "100%",
    //   duration: 0.75,
    //   stagger: 0.5,
    //   scrollTrigger: {
    //     start: "7% 17%",
    //     end: "center 20%",
    //   }
    // });

  }, []);

  return (
    <div className='w-full'>
      {/* EXPERIENCE HISTORY TITLE*/}
      FULL TEST ANIMATIONS
      <div className='select-none w-full text-left mt-40 flex relative justify-left items-left overflow-visible px-sm md:mt-64 lg:px-md lg:max-w-[2244px]'>
        {/* <span className='japanese-letter text-7xl font-noto font-black text-lk-red-50 overflow-visible text-nowrap absolute -top-4 pb-3 -z-10 md:text-9xl md:-top-10'>
          経験履歴
        </span> */}
        <h2 className='font-poppins font-extrabold italic flex flex-col text-6xl md:text-[104px] '>
          <span className='font-crimson not-italic font-semibold text-4xl pl-1 md:text-[62px] md:pl-3 md:pb-1'>
            EXPERIENCE
          </span>
          HISTORY
        </h2>
        <img id='asterisquito' src='/ico.svg' className='h-6 text-right flex ml-auto mb-[0.53rem] self-end md:h-16 md:mb-[1.3rem]' alt="Asterisco" />


<span className=' text-7xl font-noto font-black text-lk-red-50 overflow-visible text-nowrap absolute -top-4 pb-3 -z-10 md:text-9xl md:-top-10'>
<span className="japanese-letter">経</span>
<span className="japanese-letter">験</span>
<span className="japanese-letter">履</span>
<span className="japanese-letter">歴</span>

        </span>
      </div>


              {/*WORK TITLE */}
              <div className='select-none w-full  text-center mt-20 flex flex-col relative justify-center items-center overflow-x-hidden overflow-y-hidden'>
          <span className='text-[7.7rem] leading-tight font-noto font-black text-lk-red-50 text-nowrap	 items-center tracking-[-0.02em]  pb-3 
          md:text-[447.22px]'>
          <span className="japanese-letter2">入</span>
          <span className="japanese-letter2">選</span>
          <span className="japanese-letter2">作</span>
          <span className="japanese-letter2">品</span>

          </span>
          <div className='flex flex-col absolute  overflow-y-hidden'>

          <span id="selected2" className='font-crimson text-[1.7rem] font-semibold  -mb-5 
          md:text-[65px] md:mb-[-4.5rem] overflow-y-hidden'>
            selected
            </span>
          <h2 id='works2' className='font-haetten  text-8xl  
          md:text-[287.55px]  '>
            WORKS
          </h2>
          </div>


        </div>

<div className='w-full bg-green-400 flex flex-col items-center justify-center'>
          <GsapMagnetic>
        <h2>
          <a href="#" class="js-work-link" target="_blank">
            <span class="js-an-word">Lorem ipsum</span>
            <span class="underline"></span>
          </a>

        </h2>
        </GsapMagnetic>
        <h2>
          <a href="#" class="js-work-link" target="_blank">
            <span class="js-an-word">Ipsum lorem ipsum lorem</span>
            <span class="underline"></span>
          </a>
        </h2>
        <h2>
          <a href="#" class="js-work-link" target="_blank">
            <span class="js-an-word">Lorem</span>
            <span class="underline"></span>
          </a>
        </h2>
        </div>
    </div>
  );
}
