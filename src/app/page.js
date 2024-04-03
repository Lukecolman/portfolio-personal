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
        url: 'http://www.google.com',
        techIcons: ['/tech-icons/sass.svg', '/tech-icons/tailwind.svg', '/tech-icons/react.svg'],
      },
      {
        tag: ['Tag1', 'Tag2', 'Tag3'],
        title: 'Descripción del Proyecto 2',
        img: '/projects/image-294.jpg',
        url: 'http://www.google.com',
        techIcons: ['/tech-icons/react.svg', '/tech-icons/nextjs.svg', '/tech-icons/tailwind.svg'],
      },
    ];

    return (
        <main className='flex min-h-screen flex-col items-center justify-between font-poppins overflow-x-hidden '>
        {/* INTRODUCTION */}
        <nav className='absolute z-30 backdrop-blur-xl shadow-md w-full py-4 px-sm lg:px-md '>
          <div className='flex justify-between lg:max-w-[2244px] lg:mx-auto'>
            <div>
              Holi
            </div>
            <div>
              Holi
            </div>
            <div>
              Holi
            </div>
          </div>
        </nav>
            <div className=' text-center h-[30rem] w-full overflow-x-hidden md:overflow-x-visible lg:h-[620px]'>

              <div className='flex flex-col relative justify-center items-center lg:-top-14'>

                <div className='font-noto font-black text-lk-red-600 text-nowrap	flex flex-col items-center tracking-[-0.02em] 
                lg:tracking-[-0.8rem]
                '>
                    <div className='text-[7.7rem] leading-tight 
                    lg:text-[480px] lg:leading-none
                    '>
                      ルウク
                      </div>
                    <div className='text-[7.5rem] leading-[1.3] pb-2
                    lg:text-[480px] lg:leading-none lg:-mt-12
                    '>
                      コルマン
                    </div>
                </div>

                <div className='absolute lg:pt-6'>
                  <div className='font-crimson font-semibold  text-4xl 
                  lg:text-[4.8rem] 
                  '>
                  <span>
                  Hi &nbsp; I’m
                    </span> 
                  </div>
                  <div className='font-haetten text-[10.6rem] leading-none -mt-8 	
                  lg:text-[22.5rem] lg:-mt-12
                  '>
                  LUKE 
                  </div>
                </div>
              </div>

            </div>

          <div className='bg-lk-white w-full text-lk-red-600 rounded-t-full pt-24 z-30 overflow-x-hidden flex flex-col items-center lg:content-center'>
        {/* HERO */}
        <div className='text-center mt-[70px] md:mt-[200px] lg:mt-[400px] '>
          <div className='text-4xl tracking-[-0.04em] -mb-1 md:text-[72px] 
          md:leading-[5.5rem] 
          lg:text-[106px] lg:leading-tight'>
            your&nbsp;
            <span className=' -tracking-[0.6rem] font-normal align-text-bottom md:align-middle md:-tracking-[1.1rem] lg:-tracking-[1.6rem]'>----</span>
            &nbsp; friendly
          </div>
          <div className='text-[42px] tracking-[-0.04em] leading-none font-semibold md:text-[84px] md:leading-[4.5rem] lg:text-[114px] lg:leading-[4.3rem]'>NEIGHBOURHOOD</div>
          <div className='text-[42px] tracking-[-0.04em] leading-none  font-semibold md:text-[84px] lg:text-[114px] lg:flex lg:justify-center lg:leading-tight '>FRONTEND
            <div className='hidden max-w-[850px] font-normal text-8xl lg:flex ml-8 items-center pt-1'>
              (
              <span className='text-[15px] tracking-normal font-normal leading-snug text-wrap max-w-[280px] align-middle mx-4'>
                  Acá va texto simulado hasta que me me ocurra que poder poner jeje
                </span>
              )
            </div>
          </div>
          <div className='text-[42px] tracking-[-0.04em] leading-none  font-semibold md:text-[84px] md:leading-[4.5rem] lg:text-[114px] lg:leading-[4.3rem]'>DEVELOPER</div>
          <div className='text-base tracking-[-0.04em] font-semibold md:text-[24px] md:leading-[2rem] lg:text-[35px] lg:leading-[2.7rem]'>AND PART-TIME SUPERHERO</div>
        </div>

        
        {/* circle */}
        <div className='w-full flex justify-center items-center tracking-[0.11em] font-semibold mt-20 relative md:mt-40'>
           <svg viewBox="0 0 100 100" width="100" height="100" className='fill-lk-red-600 h-auto max-w-[200px] origin-center w-[16%] md:w-[20%] lg:w-[28%] animate-spin-slow	'>
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
              className="absolute w-[5%] max-w-[20px]  md:max-w-[30px] lg:max-w-[35px]"
              width={25}
              height={2}
              priority
            />
          </div>
        
        {/* work title */}
        <div className='w-full  text-center mt-20 flex flex-col relative justify-center items-center overflow-x-hidden overflow-y-hidden'>
          <span className='text-[7.7rem] leading-tight font-noto font-black text-lk-red-50 text-nowrap	 items-center tracking-[-0.02em]  pb-3 
          md:text-[447.22px]'>
          入選作品
          </span>
          <h2 className='font-haetten flex flex-col text-8xl absolute 
          md:text-[287.55px] md:pt-10'>
            <span className='font-crimson text-[1.7rem] font-semibold  -mb-5 
            md:text-[65px] md:mb-[-3.25rem] '>
              selected
              </span>
            WORKS
          </h2>

        </div>

        {/* WORKS */}
        <div className='flex flex-col justify-center items-center gap-8 px-sm lg:px-md'>
        {projectInfo.map((project, index) => (
          <WorkCards key={index} projectInfo={project} />
        ))}

        <a url="#" className='font-extrabold text-2xl hover:cursor-pointer 
        md:mt-3 md:text-3xl'>
          MORE PROJECTS SOON
        </a>
      </div>

        {/* TECHSTACK */}
        <div className=' w-full 
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
          <TechStack className='mt-4'/>

        </div>

        {/* EXPERIENCE HISTORY TITLE*/}
        <div className='w-full  text-left mt-40 flex  relative justify-left items-left  overflow-visible px-sm 
        md:mt-64 
        lg:px-md lg:max-w-[2244px]'>
          <span className='text-7xl  font-noto font-black text-lk-red-50 overflow-visible text-nowrap absolute -top-4 pb-3 -z-10 
          md:text-9xl md:-top-10'>
          経験履歴
          </span>
          <h2 className='font-poppins font-extrabold italic flex flex-col text-6xl 
          md:text-[104px] '>
            <span className='font-crimson not-italic font-semibold text-4xl pl-1 
            md:text-[62px] md:pl-3 md:pb-1'>
              EXPERIENCE
              </span>
            HISTORY
          </h2>

          <img src='/ico.svg' className='h-6 text-right flex ml-auto mb-[0.53rem] self-end 
          md:h-16 md:mb-[1.3rem] '></img>
        </div>


        {/* JOBS */}
        <div className='px-sm mt-14 w-full text-center flex flex-col gap-7 
        lg:px-md lg:max-w-[2244px]'>
          <Jobs/>

          <a href="http://www.google.com" target='_blank' className='text-center font-extrabold text-2xl 
          md:mt-3 md:text-3xl'>
          DOWNLOAD CV
        </a>
        </div>

          <Footer/>
          </div>
        </main>
    );
}
