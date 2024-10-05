import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const initGSAPAnimations = () => {
  gsap.from(".alt-text", {
    y: 250, // El punto inicial de la animación (comenzando fuera de la vista)
    // opacity: 0, // El valor inicial de la opacidad
    // duration: 1.5, // Duración de la animación (aunque `scrub` la controla más finamente)
    // ease: "power4.out",
    scrollTrigger: {
      trigger: ".alt-text", // El elemento que desencadena la animación
      start: "top 90%", // Cuándo comienza la animación (cuando el elemento está a 80% de la pantalla)
      end: "top 10%", // Cuándo termina la animación
      scrub: true, // Sincroniza el desplazamiento con el scroll. Mientras se scrollea, la animación avanza.
    },
  });
};
