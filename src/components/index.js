// SECTIONS
import PreLoader from "./preloader/preLoader";
import Navbar from "@/components/navbar/navbar";
import HeroBanner from "./herobanner";
import HeroText from "@/components/herotext";
import Work from "@/components/work/work";
import TechMarquee from "@/components/techMarquee";
import Jobs from "@/components/jobs";
import Footer from "@/components/footer/footer";

// ANIMATIONS
import { initGSAPAnimations } from "@/app/animation";

// CONSTANTS
import { Projects } from "@/constants";

// COMPONENTS
import WorkCards from "@/components/work-card";
// import GsapMagnetic from "./shared/gsapMagnetic"; THIS DOESNT WORK

export {
  // PRELOADER
  PreLoader,

  // SECTIONS
  Navbar,
  HeroBanner,
  HeroText,
  Work,
  TechMarquee,
  Jobs,
  Footer,

  // ANIMATIONS
  initGSAPAnimations,

  // COMPONENTS
  WorkCards,

  // CONSTANTS
  Projects,
};
