// import Image from 'next/image';
// import Link from 'next/link'


export default function Footer({}) {
    return (
        <div className='bg-lk-red-600  text-white relative px-sm pt-md pb-sm  w-full overflow-hidden 
        lg:p-md lg:pb-[2.5rem] lg:items-center md:min-h-[830px]
         '>
                          <span className=" font-noto text-[#F74746] font-black text-[190px] absolute h-full top-10 left-1/2 transform -translate-x-1/2   [writing-mode:vertical-lr] 
                md:[writing-mode:horizontal-tb] md:text-[500px] md:text-center md:overflow-visible md:text-nowrap  md:top-8 ">
                コルマン
                </span>

            <div className=' mt-md 
            md:h-[88vh] md:flex md:flex-col md:content-between md:justify-evenly
            lg:max-w-[2244px] lg:mx-auto 
            '>
      
      {/* BG TEXT */}
                {/* <span className="font-noto text-[#F74746] font-black text-[190px] absolute h-full top-10 left-1/2 transform -translate-x-1/2   [writing-mode:vertical-lr] 
                md:[writing-mode:horizontal-tb] md:text-[500px] md:text-center md:overflow-visible md:text-nowrap  md:top-8 ">
                コルマン
                </span> */}

                <div className='z-50 max-w-64'>
                    <span className='text-5xl text-left font-medium '>Let's work together</span>
                </div>

                <div className=' z-50 flex flex-col w-full font-haetten text-[15rem] leading-none text-center 
                md:flex-row md:justify-center 
                lg:text-[18rem] 
                 md:-mb-20 
                '>
                    <span className='z-50 leading-none -mb-10
                    md:pr-6 
                    '>LUKE</span>

                    <div className='z-50 flex self-center'>
                        <img className='pt-6' src='/x.svg'></img>
                        <span className='
                        md:pl-3'
                        >YOU</span>
                    </div>
                </div>
                
                <div className='z-50 text-center flex flex-col gap-7 mt-12 md:mt-2   align-bottom
                 
                '>
                {/* h-full max-h-[500px] */}
                    {/* MAIL */}
                    <a className='z-50 text-center font-extrabold text-2xl self-center w-full justify-center 
                    md:mb-40 md:mt-16' 
                    href="mailto:lucas.a.colman@gmail.com">lucas.a.colman@gmail.com</a>

                    {/* SOCIAL MEDIA Y COPYRIGHT */}
                    <div className="z-50 flex flex-col gap-7 md:mt-10 md:flex-row  md:justify-between ">
                        {/* SOCIAL MEDIA */}
                        <ul className='flex justify-between px-sm font-bold gap-8'>
                        <li>
                            <a href='https://www.github.com/Lukecolman' target='_blank' rel="noopener noreferrer">GITHUB</a>
                        </li>
                        <li>
                            <a href='https://www.behance.net/lukecolman' target='_blank' rel="noopener noreferrer">BEHANCE</a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/in/lukecolman/' target='_blank' rel="noopener noreferrer">LINKEDIN</a>
                        </li>

                        </ul>
                    
                        {/* COPYRIGHT */}
                        <span className='font-medium md:ml-auto md:text-sm'>© COPYRIGHT 2024 LUKE COLMAN</span>




                    </div>
                </div>
            </div>


        </div>
    );
}
