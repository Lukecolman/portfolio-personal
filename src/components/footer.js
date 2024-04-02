import Image from 'next/image';
import Link from 'next/link';

export default function Footer({}) {
    return (
        <footer className='bg-lk-red-600 text-white  pb-10 relative px-sm py-12 mt-28 -z-20'>
            <span className="font-noto text-[#F74746] font-black text-[200px] absolute jp-vertical  h-full -top-2   left-1/2 transform -translate-x-1/2 -z-10 select-none	">
            コルマン
            </span>
            <div className='max-w-64'>
                <span className='text-5xl text-left font-medium select-none'>Let's work together</span>
            </div>

            <div className='flex flex-col w-full font-haetten text-[15rem] leading-none text-center select-none	'>
                <span className='leading-none -mb-10'>LUKE</span>

                <div className='flex self-center'>
                    <img src='/x.svg'></img>
                    <span>YOU</span>
                </div>
            </div>
            
            <div className='text-center flex flex-col gap-7 mt-12'>
            {/* MAIL */}
            <a className='text-center font-extrabold text-2xl self-center w-full justify-center' href="mailto:lucas.a.colman@gmail.com">lucas.a.colman@gmail.com</a>

            {/* SOCIAL MEDIA */}
            <ul className='flex  justify-between px-sm font-bold	'>
                <li>
                    <Link href='https://www.github.net' target='_blank' rel="noopener noreferrer" >GITHUB</Link>
                </li>
                <li>
                    <Link href='https://www.behance.net' target='_blank' rel="noopener noreferrer">BEHANCE</Link>
                </li>
                <li>
                    <Link href='www.google.com' target='_blank' rel="noopener noreferrer">LINKEDIN</Link>
                </li>

            </ul>
            {/* LOCAL TIME */}


            {/* COPIRIGHT */}
            <span className='font-bold'>©COPRIGHT 2024 LUKE COLMAN</span>
            </div>


        </footer>
    );
}
