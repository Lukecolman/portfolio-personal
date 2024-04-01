import Image from 'next/image';

export default function WorkCards({ projectInfo }) {
    return (
        <div className='min-h-[636px] w-full rounded-2xl overflow-hidden bg-lk-grey text-white text-center'>
            <img className='h-[439px] w-full object-cover' src={projectInfo.img} />
            <div className='py-7 px-5 flex flex-col gap-4 text-wrap'>
                <div className='flex flex-col'>
                    {projectInfo.tag.map((tag, index) => (
                        <span className='font-poppins font-semibold leading-[131.1%]' key={index}>
                            {' '}
                            {tag}{' '}
                        </span>
                    ))}
                </div>
                <h3 className='font-haetten text-6xl pb-2'>{projectInfo.title}</h3>
                <div className='flex justify-center gap-5 py-1'>
                    {projectInfo.techIcons.map((icon, index) => (
                        <img className='h-[30px]' src={icon} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}
