"use client";
import Image from "next/image";

const Skill = () => {
  return (
    <div className="bg-stone-900 pt-12 md:pt-0 pb-32">
      <h1 className="text-4xl bg-center text-center font-bold bg-clip-text text-stone-300 pb-10 md:pb-16 ">
        Skills
      </h1>

      <div className="flex flex-col gap-2 p-3 md:px-64">
        <div className="grid grid-cols-3 hover:bg-stone-600 rounded-xl">
          <span className="text-right text-balance p-2 md:p-4 font-semibold text-lg md:font-bold md:text-2xl text-zinc-400">
            Programming Languages
          </span>
          <span className="col-span-2 p-2 md:p-4 text-center md:font-semibold md:text-xl">
            Java, JavaScript, TypeScript, SQL
          </span>
        </div>

        <div className="grid grid-cols-3 hover:bg-stone-600 rounded-xl">
          <span className="text-center text-balance p-2 md:p-4 font-semibold text-lg md:font-bold md:text-2xl text-zinc-400">
            Frontend
          </span>
          <span className="col-span-2 p-2 md:p-4 text-center md:font-semibold md:text-xl">
            HTML, CSS, React.js, React-Native, Next.js, Tailwind CSS
          </span>
        </div>

        <div className="grid grid-cols-3 hover:bg-stone-600 rounded-xl">
          <span className="text-center text-balance p-2 md:p-4 font-semibold text-lg md:font-bold md:text-2xl text-zinc-400">
            Backend
          </span>
          <span className="col-span-2 p-2 md:p-4 text-center md:font-semibold md:text-xl">
            Node.js, Express.js, MongoDB, MySQL
          </span>
        </div>

        <div className="grid grid-cols-3 hover:bg-stone-600 rounded-xl">
          <span className="text-center text-balance p-2 md:p-4 font-semibold text-lg md:font-bold md:text-2xl text-zinc-400">
            Other Skills
          </span>
          <span className="col-span-2 p-2 md:p-4 text-center md:font-semibold md:text-xl">
            GitHub, Git
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skill;
