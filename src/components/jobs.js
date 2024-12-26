import { ExperienceHistoryTitle } from "@/components/shared/titles";
import { JobItem, Curriculums } from "@/constants";

export default function Jobs({}) {
  return (
    <>
      <ExperienceHistoryTitle />

      <div
        className="px-sm mt-14 mb-28 w-full text-center flex flex-col gap-7 
      md:mb-44 
      lg:px-md lg:max-w-[2244px]"
      >
        <div>
          {JobItem.map((job, index) => (
            <div
              key={index}
              className="font-medium my-4 py-6 text-lk-red-400 border-b-2 border-lk-red-400 flex flex-col gap-1 text-left 
          md:flex-row md:justify-between md:font-semibold group/item "
            >
              <div className="md:group-hover/item:translate-x-6 transition">
                <h1 className=" text-4xl text-lk-red-600">{job.role}</h1>
                <p className="">{job.company}</p>
              </div>
              <div className="md:self-end md:text-right md:group-hover/item:-translate-x-6 transition">
                <p>{job.period}</p>
                <p>{job.type}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-center text-center font-extrabold text-2xl md:text-3xl md:mt-3 ">
          <a
            href={Curriculums[0].url}
            target="_blank"
            className="under-line-css under-line-red w-fit self-center mx-3"
          >
            {Curriculums[0].title}
          </a>
          <span className="rotate-[77deg] md:rotate-0">/</span>
          <a
            href={Curriculums[1].url}
            target="_blank"
            className="under-line-css under-line-red w-fit self-center mx-3"
          >
            {Curriculums[1].title}
            <span className="text-sm md:text-base">{Curriculums[1].span}</span>
          </a>
        </div>
      </div>
    </>
  );
}
