import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const initGSAPAnimations = () => {
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
};
