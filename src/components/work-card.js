import Image from 'next/image';

export default function WorkCards({ projectInfo }) {
    return (
        <a href={projectInfo.url} target='_blank' rel="noopener noreferrer">
        <div className='min-h-[636px] w-full rounded-2xl overflow-hidden bg-lk-grey text-white text-center   lg:flex'>

            {/* IMAGE */}
            <div>
            <img className='h-[439px] w-full object-cover
            lg:h-[826px] lg:max-w-[1200px] lg:object-cover 
            ' src={projectInfo.img} />
            </div>
            
            {/* TEXT */}
            <div className='py-7 px-5 flex flex-col gap-4 text-wrap 
            lg:text-left lg:p-md lg:min-w-[500px] lg:max-w-[500px]'>
                <div className='flex flex-col bg-green'>
                    {projectInfo.tag.map((tag, index) => (
                        <span className='font-poppins font-semibold leading-[131.1%] lg:text-[20px]' key={index}>
                            {' '}
                            {tag}{' '}
                        </span>
                    ))}
                </div>
                <h3 className='font-haetten text-6xl pb-2
                lg:text-[100px] lg:max-w-[497px] lg:mt-auto
                '>{projectInfo.title}</h3>
                <div className='flex justify-center gap-5 py-1 
                lg:justify-start lg:mt-10
                '>
                    {projectInfo.techIcons.map((icon, index) => (
                        <img className='h-[30px]' src={icon} key={index} />
                    ))}
                </div>
            </div>
        </div>
        </a>
    );
}
