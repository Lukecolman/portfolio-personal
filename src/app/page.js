import Image from 'next/image';
import WorkCards from '@/components/work-card';

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between font-poppins bg-lk-grey'>
            {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex bg-green-300">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.js</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />      
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left bg-lk-red-600">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-haetten`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 font-crimson"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl  font-semibold font-noto`}>
          コルマン{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 font-crimson`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold font-poppins`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}

        {/* INTRODUCTION */}
            <div className=' text-center h-[30rem] w-full overflow-x-hidden '>
              <div className='flex flex-col relative justify-center items-center bg-blue-200'>

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

          <div className='bg-lk-white w-full text-lk-red-600 rounded-t-full pt-24'>
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

        {/* WORK */}
        <div className='flex flex-col justify-center items-center gap-8'>
          <WorkCards/>

        </div>

          <div className='h-96'>
          </div>
          </div>
        </main>
    );
}