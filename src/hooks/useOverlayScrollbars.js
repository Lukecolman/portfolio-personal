import { useEffect } from "react";
import { OverlayScrollbars } from "overlayscrollbars";
import "overlayscrollbars/overlayscrollbars.css";

export const useOverlayScrollbars = () => {
  useEffect(() => {
    // Seleccionar el body y aplicar OverlayScrollbars
    const osInstance = OverlayScrollbars(document.querySelector("body"), {
      scrollbars: {
        autoHide: "scroll",
        autoHideDelay: 1200,
        autoHideSuspend: true,
        dragScroll: true,
      },
    });

    return () => {
      if (osInstance) osInstance.destroy(); // Limpiar la instancia cuando el componente se desmonte
    };
  }, []);
};
