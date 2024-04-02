import Image from 'next/image';
import Link from 'next/link';

import WorkCards from '@/components/work-card';
import TechStack from '@/components/tech-stack';
import Jobs from '@/components/jobs';
import Footer from '@/components/footer';


export default function Home() {

    // Información de los proyectos
    const projectInfo = [
      {
        tag: ['DESARROLLO WEB', 'COSO DIGITAL'],
        title: 'Descripción del Proyecto 1',
        img: '/projects/image-294.jpg',
        techIcons: ['/tech-icons/sass.svg', '/tech-icons/tailwind.svg', '/tech-icons/react.svg'],
      },
      {
        tag: ['Tag1', 'Tag2', 'Tag3'],
        title: 'Descripción del Proyecto 2',
        img: '/projects/image-294.jpg',
        techIcons: ['/tech-icons/react.svg', '/tech-icons/nextjs.svg', '/tech-icons/tailwind.svg'],
      },
    ];

    return (
        <main className='flex min-h-screen flex-col items-center justify-between font-poppins '>
        {/* INTRODUCTION */}
            <div className=' text-center h-[30rem] w-full overflow-x-hidden '>
              <div className='flex flex-col relative justify-center items-center'>

                <div className='font-noto font-black text-lk-red-600 text-nowrap	flex flex-col items-center tracking-[-0.02em] '>
                    <div className='text-[7.7rem] leading-tight'>
                      ルウク
                      </div>
                    <div className='text-[7.5rem] leading-[1.3] pb-2'>
                      コルマン
                    </div>
                </div>

                <div className='absolute '>
                  <div className='font-crimson font-semibold  text-4xl '>
                  <span>
                  Hi &nbsp; I’m
                    </span> 
                  </div>
                  <div className='font-haetten text-[10.6rem] leading-none -mt-8 	'>
                  LUKE 
                  </div>
                </div>
              </div>

            </div>

          <div className='bg-lk-white w-full text-lk-red-600 rounded-t-full pt-24 z-30 overflow-x-hidden'>
        {/* HERO */}
        <div className='text-center'>
          <div className='text-4xl tracking-[-0.04em] -mb-1'>your&nbsp;<span className=' -tracking-[0.6rem] font-normal align-text-bottom'>----</span>&nbsp; friendly</div>
          <div className='text-[42px] tracking-[-0.04em] leading-none font-semibold'>NEIGHBOURHOOD</div>
          <div className='text-[42px] tracking-[-0.04em] leading-none  font-semibold'>FRONTEND</div>
          <div className='text-[42px] tracking-[-0.04em] leading-none  font-semibold'>DEVELOPER</div>
          <div className='text-base tracking-[-0.04em] font-semibold'>AND PART-TIME SUPERHERO</div>
        </div>
        
        {/* circle */}
        <div className='w-full flex justify-center items-center tracking-[0.11em] font-semibold mt-20 relative '>
           <svg viewBox="0 0 100 100" width="100" height="100" className='fill-lk-red-600 h-auto max-w-[66vmin] origin-center w-[28%] animate-spin-slow	'>
            <defs>
              <path id="circle"
                d="
                  M 50, 50
                  m -37, 0
                  a 37,37 0 1,1 74,0
                  a 37,37 0 1,1 -74,0"/>
            </defs>
            <text font-size="14.7" >
              <textPath href="#circle">
               MADAFAKA IM LUKE HELLO
              </textPath>
            </text>
          </svg>
          <Image
              src="/arrow.svg"
              alt="arrow"
              className="absolute"
              width={25}
              height={2}
              priority
            />
          </div>
        
        {/* work title */}
        <div className='w-full  text-center mt-20 flex flex-col relative justify-center items-center overflow-x-hidden'>
          <span className='text-[7.7rem] leading-tight font-noto font-black text-lk-red-50 text-nowrap	 items-center tracking-[-0.02em]  pb-3'>
          入選作品
          </span>
          <h2 className='font-haetten flex flex-col text-8xl absolute '>
            <span className='font-crimson text-[1.7rem]  -mb-5'>
              selected
              </span>
            WORKS
          </h2>

        </div>

        {/* WORKS */}
        <div className='flex flex-col justify-center items-center gap-8 px-sm'>
        {projectInfo.map((project, index) => (
          <WorkCards key={index} projectInfo={project} />
        ))}

        <a url="www.google.com" className='font-extrabold text-2xl hover:cursor-pointer'>
          MORE PROJECTS
        </a>
      </div>

        {/* TECHSTACK */}
        <div className=' w-full'>
        <div className='w-full  text-center mt-40 mb-5 flex flex-col relative justify-center items-center '>
          <span className='pl-4 text-6xl  leading-tight font-noto font-black text-lk-red-50 text-nowrap	 items-center tracking-[-0.02em] absolute -top-8 -z-10'>
          技術スタック
          </span>
          <h2 className='italic font-extrabold flex flex-col text-5xl  '>
            TECH-STACK
          </h2>


        </div>
          {/* ACA VA EL MARQUEE */}
          <TechStack className='mt-4'/>

        </div>

        {/* EXPERIENCE HISTORY TITLE*/}
        <div className='w-full  text-left mt-40 flex flex-col relative justify-left items-left  overflow-visible px-sm'>
          <span className='text-7xl  font-noto font-black text-lk-red-50 overflow-visible text-nowrap absolute -top-4 pb-3 -z-10'>
          経験履歴
          </span>
          <h2 className='font-poppins font-extrabold italic flex flex-col text-6xl  '>
            <span className='font-crimson not-italic font-semibold text-4xl pl-1'>
              EXPERIENCE
              </span>
            HISTORY
          </h2>

          <img src='/ico.svg' className='h-6 text-right flex ml-auto -mt-8'></img>
        </div>


        {/* JOBS */}
        <div className='px-sm mt-14 w-full text-center flex flex-col gap-7'>
          <Jobs/>

          <a href="http://www.google.com" target='_blank' className='text-center font-extrabold text-2xl '>
          DOWNLOAD CV
        </a>
        </div>

          <Footer/>
          </div>
        </main>
    );
}
