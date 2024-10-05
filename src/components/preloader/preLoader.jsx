import React from 'react';
import { useEffect, useRef } from "react";
import { introAnimation, collapseWords, progressAnimation } from "./animations";
import { gsap } from "gsap";


const PreLoader = ( ) => {
    const progressNumberRef = useRef(null);

    const tl = gsap.timeline();

    tl.to(
        "#cosito",
        {
          x: "50px",
          duration: 5,
          ease: "power3.inOut",
        },
        "<"
      )
      .to(
        "#cosito",
        {
          textContent: "100",
          duration: 5,
          roundProps: "textContent",
        },
        "<"
      )
      .to("#cosito", {
        y: 24,
        autoAlpha: 0,
      });
  
    return (
        <div className='bg-red-300 h-[100vh] w-[100vw]'>
            <h1 className='text-5xl font-extrabold absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'>
                PRELOADER
            </h1>
            <span id='cosito' className='text-5xl font-extrabold absolute left-1/2 -translate-x-1/2 top-1/2 translate-y-1/2' ref={progressNumberRef}>
                0
                </span>
        </div>
    );
};

export default PreLoader;
