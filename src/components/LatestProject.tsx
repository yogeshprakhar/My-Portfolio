"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const LatestProject = () => {
  return (
    <div className="">
      <h1 className="mt-32 text-center mb-32 text-4xl ml-2 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        Latest Projects
      </h1>
      <div className="flex flex-row justify-evenly">
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 bg-white dark:bg-zinc-900">
          <Link
            className="hover:bg-slate-800"
            href={"https://hotel-booking-xrw9.onrender.com/"}
          >
            <Image
              src="https://res.cloudinary.com/ddjdz0aqe/image/upload/v1713435403/Screenshot_152_be4yhn.png"
              alt="project"
              height={600}
              width={600}
              className="object-contain rounded-xl "
            />
          </Link>
          <h2>Hotel book karo</h2>
          <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            animi cum necessitatibus illum, perferendis laboriosam aliquid
            beatae error sunt consequatur? Non possimus temporibus obcaecati
          </p>
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Buy now </span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
              $100
            </span>
          </button>
        </BackgroundGradient>

        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 bg-white dark:bg-zinc-900">
          <Link
            className="hover:bg-slate-800"
            href={"https://hotel-booking-xrw9.onrender.com/"}
          >
            <Image
              src="https://res.cloudinary.com/ddjdz0aqe/image/upload/v1713436204/Screenshot_153_xftmpu.png"
              alt="project"
              height={600}
              width={600}
              className="object-contain rounded-xl "
            />
          </Link>
          <h2>Code sync</h2>
          <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            animi cum necessitatibus illum, perferendis laboriosam aliquid
            beatae error sunt consequatur? Non possimus temporibus obcaecati
            exercitationem molestiae laborum consectetur eligendi dolorem?
          </p>
          <button
            className="rounded-full p-3 text-white flex items-end
           justify-end space-x-1 bg-black mt-4 text-xs font-bold hover:bg-slate-400"
          >
            <Link
              href={"https://github.com/yogeshprakhar/Realtime-Code-Editor"}
            >
              GitHub{" "}
            </Link>
          </button>
        </BackgroundGradient>

        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 bg-white dark:bg-zinc-900">
          <Link
            className="hover:bg-slate-800"
            href={"https://hotel-booking-xrw9.onrender.com/"}
          >
            <Image
              src="https://res.cloudinary.com/ddjdz0aqe/image/upload/v1713436204/Screenshot_153_xftmpu.png"
              alt="project"
              height={600}
              width={600}
              className="object-contain rounded-xl "
            />
          </Link>

          <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            animi cum necessitatibus illum, perferendis laboriosam aliquid
            beatae error sunt consequatur? Non possimus temporibus obcaecati
            exercitationem molestiae laborum consectetur eligendi dolorem?
          </p>
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Buy now </span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
              $100
            </span>
          </button>
        </BackgroundGradient>
      </div>
    </div>
  );
};

export default LatestProject;
