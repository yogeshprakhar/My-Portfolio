import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa6";
import { VscGithubInverted } from "react-icons/vsc";

const Card = () => {
  return (
    <div className=" ">
      <div className="flex flex-col p-3 h-fit w-96 border-white border bg-stone-800 rounded-3xl">
        <div className="relative group">
          <Image
            src="https://res.cloudinary.com/ddjdz0aqe/image/upload/v1713436204/Screenshot_153_xftmpu.png"
            alt="project"
            height={400}
            width={400}
            className="rounded-3xl relative group"
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
          <h6 className="font-semibold text-xl text-left">Real-Time Editor</h6>
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/yogeshprakhar/"}
          >
            <VscGithubInverted className="mr-4 opacity-75 hover:opacity-100 text-2xl" />
          </Link>
        </div>
        <p className="mt-4 text-sm text-left text-neutral-600 dark:text-neutral-400">
          Technologies used - React.js, Express.js and socket.io for real-time
          communication.
          <br />
          <br />
          It is real time editor in which you will invite your friends with a
          unique room id and can write and edit the text or code with friends
        </p>
      </div>
    </div>
  );
};

export default Card;
