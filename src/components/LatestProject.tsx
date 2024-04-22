"use client";
import ProjectCard from "./ProjectCard";

const LatestProject = () => {
  return (
    <div className="pb-20">
      <h1 className="mt-32 text-center mb-32 text-4xl ml-2 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        Latest Projects
      </h1>
      <div className=" items-center flex flex-wrap justify-evenly gap-5">
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </div>
    </div>
  );
};

export default LatestProject;
