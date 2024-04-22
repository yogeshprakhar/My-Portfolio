
import ProjectCard from "@/components/ProjectCard";
import { projectData } from "@/data/projectData";

const page = () => {
  return (
    <div className=" mt-28 mb-14 flex flex-col items-center justify-center">
      <h1 className="font-semibold text-4xl text-center text-stone-300">
        {" "}
        All Projects{" "}
      </h1>
      <div className="mt-9 items-center flex flex-wrap justify-evenly gap-4">
        {projectData.map((item) => (
          <div className="p-8 flex flex-col">
            <ProjectCard
              key={item.name}
              name={item.name}
              imageUrl={item.imageUrl}
              projectLink={item.projectLink}
              githubLink={item.githubLink}
              descOne={item.descOne}
              descTwo={item.descTwo}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
