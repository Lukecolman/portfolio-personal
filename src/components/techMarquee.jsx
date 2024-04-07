import React from "react";
import Marquee from "react-fast-marquee";

//gsap
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap"
gsap.registerPlugin(ScrollTrigger)


const TechMarquee = () => {
    const tech = [
        'Tailwind',
        'Sass',
        'CSS',
        'ReactJs',
        'JavaScript',
        'HTML',
        'NextJs',
        'Wordpress',
    ]

    useGSAP(() => {
        gsap.from("#redBanner", {
            x:"100%",
            // repeat: -1,
            // yoyo: true,
            duration: 2,
            ease:"expo",
            scrollTrigger: {
              trigger: "#redBanner",
              start: "top 90%",
              end: "+=100",
              markers: true,
    
    
          }
    
        });
    }, [])

  return (
    <div         id="redBanner" >
    <Marquee

        className="bg-lk-red-600 py-5 text-white md:py-10"
        autoFill={true}
    >
        {tech.map((tech, index) => (
            <span className='px-3 text-xl font-poppins font-medium text-white md:text-3xl md:px-5' key={index}>
                {tech}
            </span>
        ))}

    </Marquee>
    </div>
  );
}

export default TechMarquee;
