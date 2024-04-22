"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa6";
import { VscGithubInverted } from "react-icons/vsc";

const ProjectCard = () => {
  return (
    <div className="">
      <div className=" flex flex-row justify-evenly">
        <BackgroundGradient className=" rounded-[22px] max-w-sm p-4 bg-white dark:bg-zinc-900">
          <div className="relative group">
            <Image
              src="https://res.cloudinary.com/ddjdz0aqe/image/upload/v1713435403/Screenshot_152_be4yhn.png"
              alt="project"
              height={600}
              width={600}
              className="object-contain rounded-3xl relative group "
            />
            <Link
              href={"https://www.linkedin.com/in/yogeshprakhar/"}
              target="_blank"
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 group-hover:rounded-3xl  text-white"
            >
              <FaLink className="text-5xl" />
            </Link>
          </div>
          <div className="flex items-center justify-between pt-3">
            <h6 className="font-semibold text-xl text-left">
              Real-Time Editor
            </h6>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/yogeshprakhar/"}
            >
              <VscGithubInverted className="mr-4 opacity-75 hover:opacity-100 text-2xl" />
            </Link>
          </div>
          <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
            Technologies used - React.js, Express.js, MongoDB, Cloudinary,
            React-hook forms and many more.
            <br />
            <br />
            Projects used Context Api for passing data and React Query for
            fetching data from backend and have functionalities Signup, Login,
            Logout, Sorting, Searching and Pagination.
          </p>
        </BackgroundGradient>
      </div>
    </div>
  );
};

export default ProjectCard;
