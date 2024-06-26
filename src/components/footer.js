import GsapMagnetic from './extras/gsapMagnetic';

export default function Footer({}) {
    return (
        <div
            className='bg-lk-red-600  text-white relative px-sm pt-sm pb-sm  w-full overflow-hidden 
        lg:px-md lg:pb-[1rem] lg:items-center z-0 
         '>
            <span
                className='-z-50 font-noto text-[#F74746] font-black text-[190px] absolute  left-1/2 transform -translate-x-1/2 -translate-y-8 [writing-mode:vertical-lr] text-nowrap leading-[10px] content-center
                md:[writing-mode:horizontal-tb] md:text-[550px] md:text-center md:overflow-visible  md:top-0 md:bottom-0 md:mx-auto   md:tracking-[-0.09em]  '>
                コルマン
            </span>

            <div
                className=' mt-sm  z-50
            md:min-h-[96vh] md:flex md:flex-col md:content-between md:justify-between
            lg:max-w-[2244px] lg:mx-auto 
            '>


                <div className='z-50 max-w-64'>
                    <span className='z-50 text-4xl md:text-5xl text-left font-medium '>Let&apos;s work together</span>
                </div>

                <div className='flex flex-col justify-center mb-20'>
                    <div
                        className=' z-50 flex flex-col w-full font-haetten text-[12rem] leading-none text-center 
                md:flex-row md:justify-center  
                lg:text-[19rem]
                xl:text-[25rem]
                '>
                        <span
                            className='z-50 leading-none -mb-10
                    md:pr-6 
                    '>
                            LUKE
                        </span>

                        <div className='z-50 flex self-center'>
                            <img className='pt-6 md:transform md:scale-[175%] md:px-8' src='/x.svg' alt='x'/>
                            <div className='flex'>
                            <span
                                className='
                        md:pl-3'>
                                YOU
                            </span>
                            <span
                                className='
                        hidden md:block md:pl-4'>
                                !
                            </span>
                            </div>
                        </div>
                    </div>

                    {/* MAIL */}
                        <a
                            className='z-50 under-line-css text-center font-extrabold text-xl md:text-2xl self-center w-fit justify-center md:-mt-6'
                            href='mailto:lucas.a.colman@gmail.com'>
                            lucas.a.colman@gmail.com
                        </a>
                </div>

                <div
                    className='z-50 text-center flex flex-col gap-7 mt-12 md:mt-2   align-bottom
                 
                '>
                    {/* SOCIAL MEDIA Y COPYRIGHT */}
                    <div className='z-50 flex flex-col gap-7 md:mt-10 md:flex-row  md:justify-between '>
                        {/* SOCIAL MEDIA */}
                        <ul className='flex justify-between px-sm font-bold gap-8'>
                            <GsapMagnetic>
                                <li>
                                    <a
                                        href='https://www.github.com/Lukecolman'
                                        target='_blank'
                                        rel='noopener noreferrer'>
                                        GITHUB
                                    </a>
                                </li>
                            </GsapMagnetic>
                            <GsapMagnetic>
                                <li>
                                    <a
                                        href='https://www.behance.net/lukecolman'
                                        target='_blank'
                                        rel='noopener noreferrer'>
                                        BEHANCE
                                    </a>
                                </li>
                            </GsapMagnetic>
                            <GsapMagnetic>
                                <li>
                                    <a
                                        href='https://www.linkedin.com/in/lukecolman/'
                                        target='_blank'
                                        rel='noopener noreferrer'>
                                        LINKEDIN
                                    </a>
                                </li>
                            </GsapMagnetic>
                        </ul>

                        {/* COPYRIGHT */}
                        <span className='font-medium md:ml-auto md:text-sm'>&copy; COPYRIGHT 2024 LUKE COLMAN</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
