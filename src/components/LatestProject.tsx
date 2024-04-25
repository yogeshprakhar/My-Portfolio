"use client";
import { latestProjectData } from "@/data/latestProjectData";
import ProjectCard from "./ProjectCard";

export type ProjectData = {
  name: string;
  imageUrl: string;
  projectLink: string;
  githubLink: string;
  descOne: string;
  descTwo: string;
};

const LatestProject = () => {
  return (
    <div className="pb-20">
      <h1 className="mt-32 text-center mb-32 text-4xl ml-2 font-bold bg-clip-text bg-gradient-to-b text-stone-300">
        Latest Projects
      </h1>
      <div className=" items-center flex flex-wrap justify-evenly gap-5">
        {latestProjectData.map((item) => (
          <ProjectCard
            key={item.name}
            name={item.name}
            imageUrl={item.imageUrl}
            projectLink={item.projectLink}
            githubLink={item.githubLink}
            descOne={item.descOne}
            descTwo={item.descTwo}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestProject;


