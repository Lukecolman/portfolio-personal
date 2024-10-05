import React from "react";
import { WorkTitle } from "@/components/shared/titles";
import { WorkCards, Projects } from "@/components/index";
function Work() {
  return (
    <>
      <WorkTitle />
      <div className="w-[inherit] flex flex-col justify-center items-center gap-8 px-sm lg:px-md">
        {Projects.map((project, index) => (
          <WorkCards key={index} projectInfo={project} />
        ))}

        <div
          url="#"
          className="font-extrabold text-lg
        md:mt-3 md:text-xl"
        >
          <span id="moreProjectsL">&#123; </span>
          more projects soon
          <span id="moreProjectsR"> &#125;</span>
        </div>
      </div>{" "}
    </>
  );
}

export default Work;
