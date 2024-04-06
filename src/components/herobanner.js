export default function HeroBanner({}) {
    return (
        <div className=' text-center h-[30rem] w-full overflow-x-hidden md:overflow-x-visible lg:h-[620px]'>
            <div className='select-none flex flex-col relative justify-center items-center lg:-top-14'>
                <div
                    className='font-noto font-black text-lk-red-600 text-nowrap	flex flex-col items-center tracking-[-0.02em] 
                    lg:tracking-[-0.8rem]
                    '>
                    <div
                        className='text-[7.7rem] leading-tight 
                        lg:text-[480px] lg:leading-none
                        '>
                        ルウク
                    </div>
                    <div
                        className='text-[7.5rem] leading-[1.3] pb-2
                        lg:text-[480px] lg:leading-none lg:-mt-12
                        '>
                        コルマン
                    </div>
                </div>

                <div className='text-lk-white z-50 absolute lg:pt-6'>
                    <div
                        className='font-crimson font-semibold  text-4xl 
                        lg:text-[4.8rem] 
                        '>
                        <span>Hi &nbsp; I’m</span>
                    </div>
                    <div
                        className='font-haetten text-[10.6rem] leading-none -mt-8 	
                        lg:text-[22.5rem] lg:-mt-12
                        '>
                        LUKE
                    </div>
                </div>
            </div>
        </div>
    );
}
