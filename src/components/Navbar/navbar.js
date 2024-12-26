import { SocialMedia } from "@/components/index";
export default function Navbar({}) {
  return (
    <nav className="text-white absolute z-30 backdrop-blur-xl shadow-md w-full py-2 md:py-3 px-sm lg:px-md ">
      <div className="text-sm flex justify-between items-center lg:max-w-[2244px] lg:mx-auto">
        <div className="font-black tracking-wider text-lg md:text-xl">luke</div>

        <div className="flex gap-12 items-center">
          {/* IMPLEMENTAR MAS ADELANTE CON UN BACKEND */}
          {/* <div className="hidden md:block font-light mx-auto">
            Last visit from Chaco, Argentina
          </div> */}
          <a
            className="hidden md:block font-light under-line-css"
            href={`mailto:${SocialMedia.mail.url}`}
          >
            {SocialMedia.mail.url}
          </a>
          <a
            className="block md:hidden font-light under-line-css"
            href={`mailto:${SocialMedia.mail.url}`}
          >
            {SocialMedia.mail.text}
          </a>

          {/* SOCIAL MEDIA */}
          <div className="flex items-center gap-3">
            <a href={SocialMedia.github.url} target="_blank">
              <img
                className="h-6 md:h-7"
                src={SocialMedia.github.icon}
                alt={SocialMedia.github.text}
              />
            </a>
            <a href={SocialMedia.linkedin.url} target="_blank">
              <img
                className="h-[27px] md:h-8"
                src={SocialMedia.linkedin.icon}
                alt={SocialMedia.linkedin.text}
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
