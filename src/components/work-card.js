export default function WorkCards({ projectInfo }) {
  return (
    <a
      href={projectInfo.url}
      target="_blank"
      rel="noopener noreferrer "
      className="w-full mt-8"
    >
      <div className=" w-full  text-lk-red-600 text-center   ">
        {/* TEXT-BOX */}
        <div
          className="z-50 pb-3  flex flex-col justify-between w-full gap-4 text-wrap 
                    md:flex-row md:pb-7 lg:text-left"
        >
          {/* TITLE OF THE PROJECT */}
          <h3
            className="font-haetten text-7xl pb-2 text-start leading-[0.8]
                        md:text-start md:-mb-[7px] md:text-[7rem] lg:text-[11rem] lg:w-full lg:mt-auto"
          >
            {projectInfo.title}
          </h3>

          {/* TAG TEXT */}
          <div className="  h-full  flex self-start md:justify-end md:self-end">
            {projectInfo.tag.map((tag, index) => (
              <span
                className="font-semibold md:w-max self-end text-lg leading-[0.8]  md:text-[1.2rem] lg:text-[1.5rem]"
                key={index}
              >
                {" "}
                {tag}{" "}
              </span>
            ))}
          </div>
        </div>

        {/* RED LINE */}
        <div className="bg-lk-red-600 w-full h-1 mb-4 md:mb-8" />

        {/* IMAGES */}
        <div className="flex flex-nowrap gap-7 h-auto md:h-[450px] lg:h-[594px]">
          {/* DESKTOP */}
          <div
            className={`px-3 py-6 overflow-hidden md:p-2 flex ${projectInfo.imgBgColor} lg:w-full justify-center items-center`}
          >
            <img
              className=" md:h-[439px] w-full max-w-[904px] object-contain	 hover:scale-105 transition-transform duration-200
                                lg:h-full lg:max-h-[530px] "
              src={projectInfo.imgDesktop}
              alt={projectInfo.altText}
              loading="lazy"
            />
          </div>

          {/* MOBILE */}
          <div
            className={`hidden md:p-2 md:flex ${projectInfo.imgBgColor} lg:w-[392px] justify-center items-center`}
          >
            <img
              className="h-[439px] w-full object-contain hover:scale-105 transition-transform duration-200
                            lg:h-full lg:max-h-[530px]  lg:max-w-[293px]"
              src={projectInfo.imgMobile}
              alt={projectInfo.altText}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </a>
  );
}
