"use client";
import { skillData } from "@/data/skillData";
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

// <div className="p-4 md:mt-12 md:p-16 md:gap-10 gap-2 flex flex-wrap">
//   {skillData.map((item) => (
//     <div
//       key={item.key}
//       className="flex flex-col items-center justify-between p-4"
//     >
//       <Image src={item.url} alt={item.name} height={50} width={50} />
//       <h6>{item.name}</h6>
//     </div>
//   ))}
//   {/*  Can not find the next js logo */}
//   <div className="flex flex-col items-center justify-between gap-1">
//     <Image
//       className="bg-white rounded-full border"
//       src={
//         "https://res.cloudinary.com/ddjdz0aqe/image/upload/v1713431771/9118036_nextjs_fill_icon_i60vqa.png"
//       }
//       alt="next js"
//       height={70}
//       width={70}
//     />
//     <h6>Next js</h6>
//   </div>
// </div>;

export default Skill;
