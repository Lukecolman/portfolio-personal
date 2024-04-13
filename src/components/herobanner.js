export default function HeroBanner({}) {
    return (
        <div className=' text-center h-[18rem] md:h-[30rem] w-full overflow-x-visible lg:h-[620px]'>
            <div className='select-none flex flex-col relative justify-center items-center lg:-top-14'>
                <div
                    className='font-noto font-black text-lk-red-600 text-nowrap	flex flex-col items-center tracking-[-0.02em] 
                    lg:tracking-[-0.8rem]
                    '>
                    <div
                        className='text-[160px] leading-none md:text-[280px] md:leading-none
                        lg:text-[480px] 
                        '>
                        ルウク
                    </div>
                    <div
                        className='text-[160px] leading-[1.3] -mt-8 pb-2 md:text-[280px] md:leading-none
                        lg:text-[480px]  lg:-mt-12
                        '>
                        コルマン
                    </div>
                </div>

                <div className='text-lk-white z-50 absolute lg:pt-6 flex flex-col-reverse lg:flex-row '>

                    {/* FRONTEND DEVELOPER */}
                    <div className= ' md:block  leading-none -mt-3 md:text-[24px] lg:mt-0 lg:text-[36px] lg:mr-[4vw] font-semibold justify-center content-center '>
                        Frontend <br className="hidden lg:block"/>
                        Developer
                    </div>

                    {/* HI IM LUKE */}
                    <div>

                        <div
                            className='font-crimson font-semibold  text-4xl md:text-[3.5rem]
                            lg:text-[4.8rem] 
                            '>
                            <span>Hi &nbsp; I’m</span>
                        </div>

                        <div
                            className='font-haetten text-[10.6rem] leading-none -mt-8 md:text-[16.5rem]	md:-mt-11
                            lg:text-[22.5rem] lg:-mt-12
                            '>
                            LUKE
                        </div>

                    </div>

                    {/* LOCATED IN ARGENTINA */}
                    <div className='hidden text-[36px] leading-none ml-[4vw] font-semibold justify-center content-center lg:block'>
                        Located in <br/>
                        Argentina
                    </div>
                </div>
            </div>
        </div>
    );
}
