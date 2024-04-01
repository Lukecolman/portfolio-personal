import Image from 'next/image';

export default function WorkCards() {
return(

    <div className="min-h-[636px] w-[325px] rounded-2xl overflow-hidden bg-lk-grey text-white text-center">
        <img 
            className="h-[439px] w-full object-cover" 
            src="/projects/image-294.jpg"
        />
        <div className='py-7 px-5 flex flex-col gap-4 text-wrap'>
            <span className='font-poppins font-semibold leading-[131.1%] '>
                DESARROLLO WEB <br />COSO DIGITAL
            </span>
            <h3 className='font-haetten text-6xl pb-2'>
                ACA EL NOMBRE DE COSITO
            </h3>
            <div className='flex justify-center gap-5 py-1 '>
                <img
                    className='h-[30px]'
                    src='/tech-icons/sass.svg'
                />
                <img
                    className='h-[30px] max-w-9'
                    src='/tech-icons/tailwind.svg'
                />
                <img
                    className='h-[30px]'
                    src='/tech-icons/react.svg'
                />
            </div>
        </div>
    </div>
)



}