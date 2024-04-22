"use client";
import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div
      className={
        "flex max-w-fit fixed top-6 inset-x-0 mx-auto dark:border-white/[0.2] rounded-full z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4"
      }
    >
      <Link
        href={"/"}
        className="border bg-black text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full hover:text-neutral-500 dark:hover:text-neutral-300  shadow-transparent
        "
      >
        <span>Home</span>
        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
      </Link>

      <Link
        href={"/projects"}
        className="bg-black border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full hover:text-neutral-500 dark:hover:text-neutral-300"
      >
        <span>Projects</span>
        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
      </Link>

      <Link
        href={"/gift"}
        className="bg-black border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full hover:text-neutral-500 dark:hover:text-neutral-300"
      >
        <span>Click for Gift</span>
        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px " />
      </Link>
    </div>
  );
}

export default Navbar;
