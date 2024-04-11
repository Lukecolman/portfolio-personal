import Image from 'next/image';

export default function WorkCards({ projectInfo }) {
    return (
        <a href={projectInfo.url} target='_blank' rel='noopener noreferrer ' className='w-full'>
            <div className=' w-full  text-lk-red-600 text-center  '>
                {/* TEXT-BOX */}
                <div
                    className='z-50 pb-7 flex gap-4 text-wrap 
                    lg:text-left justify-between  w-full'>

                    {/* TITLE OF THE PROJECT */}
                    <h3
                        className='font-haetten text-6xl pb-2 text-end	
                        lg:text-[11rem] lg:mt-auto leading-[0.7] '>
                        {projectInfo.title}
                    </h3>

                    {/* TAG TEXT */}
                    <div className='  h-full flex self-end'>
                        {projectInfo.tag.map((tag, index) => (
                            <span
                                className=' self-end leading-[0.8] lg:text-[1.5rem] font-semibold '
                                key={index}>
                                {' '}
                                {tag}{' '}
                            </span>
                        ))}
                    </div>
                    {/* <div className='flex justify-center gap-5 py-1 
                lg:justify-start lg:mt-10 bg-violet-400
                '>
                    {projectInfo.techIcons.map((icon, index) => (
                        <img className='h-[30px] bg-green-300' src={icon} key={index} />
                    ))}
                </div> */}
                </div>

                {/* RED LINE */}
                <div className='bg-lk-red-600 w-full h-1 mb-8' />

                {/* IMAGE */}
                {/* <div className='flex gap-7 min-w-full w-full overflow-hidden justify-center items-center bg-white md:bg-blue-400 lg:max-h-[594px]  '> */}

                    {/* DESKTOP */}
                    {/* <div className=' h-screen w-full flex justify-center items-center bg-green-400'>
                        <img
                            className='h-[439px] w-full max-w-[904px] object-contain	 hover:scale-105 transition-transform duration-200
                               lg:h-full lg:max-h-[530px] '
                            src={projectInfo.imgDesktop}
                        />
                    </div> */}

                    {/* MOBILE */}
                    {/* <div className='flex h-screen w-full max-w-[392px] lg:max-w-[392px] lg:max-h-[594px] justify-center items-center bg-[#E4E6E5]'>
                        <img
                            className='  h-[439px] w-full object-contain   hover:scale-105 transition-transform duration-200
                            lg:h-full lg:max-h-[530px]  lg:max-w-[293px]   '
                            src={projectInfo.imgMobile}
                        />
                    </div> */}

                {/* </div> */}

                <div className="flex flex-nowrap gap-7">
                    {/* Div menor izquierda */}
                    <div className={`flex bg-[#${projectInfo.imgBgColor}] h-[594px] lg:w-full justify-center items-center`}>
                        <img
                                className='h-[439px] w-full max-w-[904px] object-contain	 hover:scale-105 transition-transform duration-200
                                lg:h-full lg:max-h-[530px] '
                                src={projectInfo.imgDesktop}
                                loading="lazy"
                            />
                    </div>

                    {/* Div menor derecha */}
                    <div className={`flex bg-[#${projectInfo.imgBgColor}] h-[594px] lg:w-[392px] justify-center items-center`}>
                        <img
                            className='h-[439px] w-full object-contain hover:scale-105 transition-transform duration-200
                            lg:h-full lg:max-h-[530px]  lg:max-w-[293px]'
                            src={projectInfo.imgMobile}
                        />
                    </div>
                </div>
                
            </div>
        </a>
    );
}
