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
    <Marquee className="bg-lk-red-600 py-5">
        {tech.map((tech, index) => (
            <span className='px-3 text-xl font-poppins font-medium text-white' key={index}>
                {' '}
                {tech}{' '}
            </span>
        ))}
    </Marquee>
  );
}

export default TechStack;
