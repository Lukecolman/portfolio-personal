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
  );
}

export default TechStack;
