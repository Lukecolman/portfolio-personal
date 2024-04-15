export default function Navbar({}) {


  return (
    <nav className='absolute z-30 backdrop-blur-xl shadow-md w-full py-2 md:py-3 px-sm lg:px-md '>
      <div className='text-sm flex justify-between items-center lg:max-w-[2244px] lg:mx-auto'>
        <div className="font-black tracking-wider text-lg md:text-xl">
          luke 
        </div>
        
        <div className="flex gap-12 items-center">
          {/* IMPLEMENTAR MAS ADELANTE CON UN BACKEND */}
          {/* <div className="hidden md:block font-light mx-auto">
            Last visit from Chaco, Argentina
          </div> */}
          <a className="hidden md:block font-light under-line-css" href="mailto:lucas.a.colman@gmail.com">lucas.a.colman@gmail.com</a>
          <a className="block md:hidden font-light under-line-css" href="mailto:lucas.a.colman@gmail.com">email</a>

          {/* SOCIAL MEDIA */}
          <div className="flex items-center gap-3">
            <a href="">
              <img 
                className="h-7" 
                src="/github-logo.svg" 
                alt="github logo"/>
                </a>
            <a href="">
              <img 
                className="h-8" 
                src="/linkedin-logo.svg" 
                alt="linkedin logo"/>
                </a>
          </div>

        </div>
      </div>
    </nav>
  );
}
