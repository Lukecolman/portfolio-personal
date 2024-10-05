import React from "react";
import Marquee from "react-fast-marquee";
import { TechMarqueeTitle } from "./shared/titles";

//gsap
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const TechMarquee = () => {
  const tech = [
    "Tailwind",
    "Sass",
    "CSS",
    "ReactJs",
    "JavaScript",
    "HTML",
    "NextJs",
    "Wordpress",
  ];

  useGSAP(() => {
    gsap.from("#redBanner", {
      x: "100%",
      duration: 2,
      ease: "expo",
      scrollTrigger: {
        trigger: "#redBanner",
        start: "top 90%",
        end: "+=100",
      },
    });
  }, []);

  return (
    <div
      className="select-none w-full 
  md:mt-64"
    >
      <TechMarqueeTitle />

      <div id="redBanner" className="mt-4">
        <Marquee
          className="bg-lk-red-600 py-5 text-white  md:py-10 "
          autoFill={true}
        >
          {tech.map((tech, index) => (
            <span
              className="px-3 text-xl font-poppins font-medium text-white md:text-3xl md:px-5"
              key={index}
            >
              {tech}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TechMarquee;
