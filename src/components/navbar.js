

export default function Navbar({}) {
    return(

        // {/* INTRODUCTION */}
        <nav className='absolute z-30 backdrop-blur-xl shadow-md w-full py-4 px-sm lg:px-md '>
          <div className='text-sm flex justify-between items-center lg:max-w-[2244px] lg:mx-auto'>
            <div className="font-black tracking-wider text-xl">
              luke
            </div>
            
            <div className="flex gap-32">
            <div className="font-light mx-auto ">
              Last visit from Chaco, Argentina
            </div>
            <a className="font-light" href="mailto:lucas.a.colman@gmail.com">lucas.a.colman@gmail.com</a>
            </div>
          </div>
        </nav>
        
        );
}