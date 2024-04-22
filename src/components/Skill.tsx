"use client";
import { skillData } from "@/data/skillData";
import Image from "next/image";

const Skill = () => {
  return (
    <div className=" mt-40">
      <h1 className="text-4xl bg-center text-center mt-4 mb-10 ml-2 font-bold bg-clip-text text-stone-300">
        Skills
      </h1>
      <div className="mt-20 ml-48 mr-44 gap-24 flex flex-wrap">
        {skillData.map((item) => (
          <div
            key={item.key}
            className="flex flex-col items-center justify-between gap-1"
          >
            <Image src={item.url} alt={item.name} height={70} width={70} />
            <h6>{item.name}</h6>
          </div>
        ))}
        {/*  Can not find the next js logo */}
        <div className="flex flex-col items-center justify-between gap-1">
          <Image
            className="bg-white rounded-full border"
            src={
              "https://res.cloudinary.com/ddjdz0aqe/image/upload/v1713431771/9118036_nextjs_fill_icon_i60vqa.png"
            }
            alt="next js"
            height={70}
            width={70}
          />
          <h6>Next js</h6>
        </div>
      </div>
    </div>
  );
};

export default Skill;