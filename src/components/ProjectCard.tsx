"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa6";
import { VscGithubInverted } from "react-icons/vsc";
import { ProjectData } from "./LatestProject";


const ProjectCard = (data:ProjectData) => {
  return (
    <div className="">
      <div className=" flex flex-row justify-evenly">
        <BackgroundGradient className=" rounded-[22px] max-w-sm p-4 bg-zinc-900">
          <div className="relative group flex items-center justify-center">
            <Image
              src={data.imageUrl}
              alt="project"
              height={400}
              width={400}
              className="object-contain rounded-3xl relative group "
            />
            <Link
              href={data.projectLink}
              target="_blank"
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 group-hover:rounded-3xl  text-white"
            >
              <FaLink className="text-5xl" />
            </Link>
          </div>
          <div className="flex items-center justify-between pt-3">
            <h6 className="font-semibold text-xl text-left">{data.name}</h6>
            <Link target="_blank" href={data.githubLink}>
              <VscGithubInverted className="mr-4 opacity-75 hover:opacity-100 text-2xl" />
            </Link>
          </div>
          <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
            {data.descOne}
            <br />
            <br />
            {data.descTwo}
          </p>
        </BackgroundGradient>
      </div>
    </div>
  );
};

export default ProjectCard;
