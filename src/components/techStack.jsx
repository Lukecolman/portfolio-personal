import React from "react";
import Marquee from "react-fast-marquee";

const TechStack = () => {
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

  return (
    <div>
            
    {/* TECHSTACK TITLE */}
    <div className='select-none w-full 
    md:mt-64'>
    <div className='w-full  text-center mt-40 mb-5 flex flex-col relative justify-center items-center '>
      <span className='pl-4 text-6xl  leading-tight font-noto font-black text-lk-red-50 text-nowrap	 items-center tracking-[-0.02em] absolute -top-8 -z-10 
      md:text-[140px] md:-top-20 md:pl-6'>
      技術スタック
      </span>
      <h2 className='italic font-extrabold flex flex-col text-5xl 
      md:text-[104px] '>
        TECH-STACK
      </h2>


    </div>
      {/* ACA VA EL MARQUEE */}
      <div className='mt-4'>
      <Marquee 
        className="bg-lk-red-600 py-5 text-white md:py-10	"
        autoFill={true}
    >
        {tech.map((tech, index) => (
            <span className='px-3 text-xl font-poppins font-medium text-white md:text-3xl md:px-5' key={index}>
                {tech}
            </span>
        ))}

    </Marquee>
      </div>

    </div>

    </div>
   
  );
}

export default TechStack;