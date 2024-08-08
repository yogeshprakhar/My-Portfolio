"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { AiOutlineShareAlt } from "react-icons/ai";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

export function Home() {
  return (
    <div className="h-[50rem] w-full bg-stone-900 bg-grid-white/[0.2]  relative flex items-center justify-center">
      <div className="min-h-screen flex w-full flex-row justify-evenly">
        <div className="flex flex-col justify-center">
          <div>
            <h2 className="md:pl-2 text-4xl md:pb-2 pb-5  text-center md:text-start font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Hello, my name is
            </h2>
            <div className="flex flex-col items-center justify-center md:pb-0 pb-2">
              <Image
                className=" rounded-3xl block md:hidden"
                src={"/cowboy-bebop.jpg"}
                width={200}
                height={200}
                alt="Picture of author"
              />
            </div>
            <h1 className="md:pl-2 text-center md:text-start pb-7 md:pb-6 text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Yogesh Prakhar
            </h1>
          </div>
          <div className="flex gap-10 md:pl-2 md:justify-start justify-center">
            <Link target="_blank" href={"mailto:yogeshprakhar50226@gmail.com"}>
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="bg-stone-950 text-white flex items-center space-x-2"
              >
                <AiOutlineShareAlt className="text-xl" />
                <span>Contact</span>
              </HoverBorderGradient>
            </Link>
            <Link
              target="_blank"
              href={
                "https://drive.google.com/file/d/1PCVp2vCFV2vYtmtsAwc9HFeOzPRI_moc/view?usp=sharing"
              }
            >
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="bg-stone-950 text-white flex items-center space-x-2"
              >
                <CiLocationArrow1 className="text-xl" />
                <span>Resume</span>
              </HoverBorderGradient>
            </Link>
          </div>
          <div className="md:pt-5 md:pl-4 pt-10 flex md:justify-start justify-center gap-6">
            <Link target="_blank" href={"https://github.com/yogeshprakhar"}>
              <FaGithub
                size={35}
                className=" rounded opacity-75 hover:opacity-100"
              />
            </Link>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/yogeshprakhar/"}
            >
              <FaLinkedin
                size={35}
                className=" rounded opacity-75 hover:opacity-100"
              />
            </Link>
            <Link target="_blank" href={"https://twitter.com/PrakharYogesh"}>
              <FaSquareXTwitter
                size={35}
                className=" rounded opacity-75 hover:opacity-100"
              />
            </Link>
            <Link
              target="_blank"
              href={"https://www.instagram.com/yogeshprakhar/"}
            >
              <FaInstagram
                size={35}
                className=" rounded opacity-75 hover:opacity-100"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            className=" rounded-3xl hidden md:block"
            src={"/one.jpg"}
            width={350}
            height={350}
            alt="Picture of author"
          />
        </div>
      </div>
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
  );
}
