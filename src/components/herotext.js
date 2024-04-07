import Image from 'next/image';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap"
gsap.registerPlugin(ScrollTrigger)



export default function HeroText({}) {

    const timeline = gsap.timeline(
        //OBJETO
            {
            //     repeat: -1, 
            // repeatDelay: 1, 
            // yoyo: true
        });

    useGSAP(() => {
    timeline.from("#htDescriptionL", {
        opacity: 0,
        x:175,
        duration: 2,
    }, 0);
    timeline.from("#htDescriptionR", {
        opacity: 0,
        x:-175,
        duration: 2,
    },  0);
    gsap.from(".htStaggerText", {
        opacity: 0,
        y:150,
        // repeat: -1,
        // yoyo: true,
        duration: 1,
        stagger: 0.5,
        scrollTrigger: {
          // trigger: ".htStaggerText",
          start: "7% 17%",
          end: "center 20%",
          // markers: true,
          // scrub: true,


      }

    });
      
    }, [])


    useGSAP(() => {



    // gsap.from("#htYourFriendly", {
    //     y:150,
    //     repeat: -1,
    //     yoyo: true,
    //     duration: 2,
    // }),

    // gsap.from("#htNeighbourhood", {
    //     y:150,
    //     repeat: -1,
    //     yoyo: true,
    //     duration: 2,
    // }),

    //APROBADO DESCRIPTION R Y L
    // gsap.from("#htDescriptionL", {
    //     opacity: -30,
    //     x:150,
    //     repeat: -1,
    //     yoyo: true,
    //     duration: 2,
    // }),
    // gsap.from("#htDescriptionR", {
    //     opacity: 0,
    //     x:-150,
    //     repeat: -1,
    //     yoyo: true,
    //     duration: 2,
    // })
    // gsap.from("#htDescriptionText", {
    //     y:150,
    //     repeat: -1,
    //     yoyo: true,
    //     duration: 2,
    // })
    
    
    },[])


    return(
        <div>

        <div  className='text-center mt-[70px] md:mt-[200px] lg:mt-[400px] '>
            <div id='htYourFriendly' className='text-4xl tracking-[-0.04em] -mb-1 md:text-[72px] 
            md:leading-[5.5rem] 
            lg:text-[106px] lg:leading-tight lg:mb-0 htStaggerText'>
            your&nbsp;
            <span className=' -tracking-[0.6rem] font-normal align-text-bottom md:align-middle md:-tracking-[1.1rem] lg:-tracking-[1.6rem]'>----</span>
            &nbsp; friendly
            </div>

        <div id='htNeighbourhood' className='text-[42px] tracking-[-0.04em] leading-none font-semibold md:text-[84px] md:leading-[4.5rem] lg:text-[114px] lg:leading-[6.3rem] htStaggerText'>NEIGHBOURHOOD</div>

        <div id='htFrontend' className='text-[42px] tracking-[-0.04em] leading-none  font-semibold md:text-[84px] lg:text-[114px] lg:flex lg:justify-center lg:leading-tight  htStaggerText'>FRONTEND
          <div id='htDescription' className='hidden max-w-[850px] font-normal text-8xl lg:flex ml-8 items-center pt-1 '>
            <span id='htDescriptionL'> ( </span>
            <span id='htDescriptionText' className='text-[15px] tracking-normal font-normal leading-snug text-wrap max-w-[280px] align-middle mx-4'>
                Hi! I’m Lucas Colman, Frontend Developer from Argentina. But my friends calls me Luke
            </span>
            <span id='htDescriptionR'>)</span>
          </div>
        </div>

        <div id='htDeveloper' className='text-[42px] tracking-[-0.04em] leading-none  font-semibold md:text-[84px] md:leading-[4.5rem] lg:text-[114px] lg:leading-[6.3rem] htStaggerText'>DEVELOPER</div>

        <div id='htSuperhero' className='text-base tracking-[-0.04em] font-semibold md:text-[24px] md:leading-[2rem] lg:text-[35px] lg:leading-[3.7rem] htStaggerText'>AND PART-TIME SUPERHERO</div>
      </div>

      
      {/* circle */}
      <div className='select-none w-full flex justify-center items-center tracking-[0.11em] font-semibold mt-20 relative md:mt-40'>
         <svg viewBox="0 0 100 100" width="100" height="100" className='fill-lk-red-600 h-auto max-w-[200px] origin-center w-[16%] md:w-[20%] lg:w-[28%] animate-spin-slow	'>
          <defs>
            <path id="circle"
              d="
                M 50, 50
                m -37, 0
                a 37,37 0 1,1 74,0
                a 37,37 0 1,1 -74,0"/>
          </defs>
          <text  className='text-[14.7px]' >
            <textPath href="#circle">
             MADAFAKA IM LUKE HELLO
            </textPath>
          </text>
        </svg>
        <Image
            id='arrow'
            src="/arrow.svg"
            alt="arrow"
            className="absolute w-[5%] max-w-[20px]  md:max-w-[30px] lg:max-w-[35px]"
            width={25}
            height={2}
            priority
          />
        </div>
        </div>
    );
}