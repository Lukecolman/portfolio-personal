import Image from 'next/image';
import Link from 'next/link';

export default function Footer({}) {
    return (
        <footer className='bg-lk-red-600 text-white relative px-sm pt-md pb-sm -z-20 w-full overflow-hidden
       
        lg:p-md lg:pb-[2.5rem] lg:items-center '>
            <div className='mt-md lg:max-w-[2244px] lg:mx-auto'>
                <span className="font-noto text-[#F74746] font-black text-[190px] absolute h-full -top-2 left-1/2 transform -translate-x-1/2 -z-10 select-none [writing-mode:vertical-lr] 
                md:[writing-mode:horizontal-tb] md:text-[500px] md:text-center md:overflow-visible md:text-nowrap  md:-top-16 lg:-top-10">
                コルマン
                </span>
                <div className='max-w-64'>
                    <span className='text-5xl text-left font-medium select-none'>Let's work together</span>
                </div>

                <div className='flex flex-col w-full font-haetten text-[15rem] leading-none text-center select-none
                md:flex-row md:justify-center lg:text-[18rem] md:py-10 
                '>
                    <span className='leading-none -mb-10
                    md:pr-6
                    '>LUKE</span>

                    <div className='flex self-center'>
                        <img className='pt-6' src='/x.svg'></img>
                        <span className='
                        md:pl-3'
                        >YOU</span>
                    </div>
                </div>
                
                <div className='text-center flex flex-col gap-7 mt-12 md:mt-2'>
                    {/* MAIL */}
                    <a className='text-center font-extrabold text-2xl self-center w-full justify-center' href="mailto:lucas.a.colman@gmail.com">lucas.a.colman@gmail.com</a>

                    {/* SOCIAL MEDIA Y COPYRIGHT */}
                    <div className="flex flex-col gap-7 md:mt-12 md:flex-row md:items-center md:justify-between ">
                        {/* SOCIAL MEDIA */}
                        <ul className='flex justify-between px-sm font-bold gap-8'>
                        <li>
                            <Link href='https://www.github.com' target='_blank' rel="noopener noreferrer">GITHUB</Link>
                        </li>
                        <li>
                            <Link href='https://www.behance.com' target='_blank' rel="noopener noreferrer">BEHANCE</Link>
                        </li>
                        <li>
                            <Link href='https://www.linkedin.com' target='_blank' rel="noopener noreferrer">LINKEDIN</Link>
                        </li>
                        </ul>
                    
                        {/* COPYRIGHT */}
                        <span className='font-bold md:ml-auto md:font-medium md:text-sm'>© COPYRIGHT 2024 LUKE COLMAN</span>
                    </div>
                </div>
            </div>


        </footer>
    );
}
