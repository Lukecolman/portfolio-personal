import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const initGSAPAnimations = () => {
  gsap.from(".alt-text-position", {
    y: 280, // El punto inicial de la animación (comenzando fuera de la vista)
    // duration: 1.5, // Duración de la animación (aunque `scrub` la controla más finamente)
    // ease: "power4.out",
    scrollTrigger: {
      trigger: ".alt-text-position", // El elemento que desencadena la animación
      start: "top 100%", // Cuándo comienza la animación (cuando el elemento está a 80% de la pantalla)
      end: "top 0%", // Cuándo termina la animación
      scrub: true, // Sincroniza el desplazamiento con el scroll. Mientras se scrollea, la animación avanza.
    },
  });
  gsap.from(".alt-text-opacity", {
    opacity: 0, // El valor inicial de la opacidad
    scrollTrigger: {
      trigger: ".alt-text-opacity", // El elemento que desencadena la animación
      start: "top 80%", // Cuándo comienza la animación (cuando el elemento está a 80% de la pantalla)
      end: "top 35%", // Cuándo termina la animación
      scrub: true, // Sincroniza el desplazamiento con el scroll. Mientras se scrollea, la animación avanza.
    },
  });
};
