"use client";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="min-h-screen bg-stone-900">
      <h1 className="text-center text-4xl pt-16 mb-10 font-bold bg-clip-text text-stone-300">
        About Me
      </h1>
      <div className=" mt-16 grid md:grid-cols-2 justify-center items-center">
        <div className="flex justify-center items-center">
          <Image
            className="rounded-3xl"
            src={
              "https://res.cloudinary.com/ddjdz0aqe/image/upload/v1713424328/two._k8l1cf.jpg"
            }
            width={350}
            height={350}
            alt="Picture of author"
          />
        </div>
        <div className="flex flex-col p-3 md:p-12 pt-5  items-start">
          <div className="mt-4 font-normal text-base text-neutral-300">
            <p className="text-balance">
              I am a Full Stack Developer and passionate about learning new
              things, a quick learner, a problem solver, and a highly motivated
              software developer entering the industry with a strong foundation
              in full-stack development. My skill set includes Java, JavaScript,
              TypeScript, Node.js,Express.js, React.js and React Native, and proficient in
              MongoDB and MySQL databases.
            </p>
            <h1 className="mt-8 ml-1 mb-1 font-semibold text-xl text-orange-500">
              Education
            </h1>
            <div className="flex flex-col">
              <div className="flex flex-col hover:bg-stone-700 rounded-lg p-2">
                <div className="flex justify-between">
                  <h1 className="text-base font-semibold">
                    Master in Computer Application
                  </h1>
                  <i className="text-xs">2022-2024 </i>
                </div>
                <div className=" text-sm">Galgotia College</div>
              </div>

              <div className="flex flex-col hover:bg-stone-700 rounded-lg p-2">
                <div className="flex justify-between">
                  <h1 className="text-base font-semibold">
                    Bachelor in Computer Application
                  </h1>
                  <i className="text-xs">2019-2022 </i>
                </div>
                <div className=" text-sm">I.P College Bulandshahr</div>
              </div>

              <div className="flex flex-col hover:bg-stone-700 rounded-lg p-2">
                <div className="flex justify-between">
                  <h1 className="text-base font-semibold">High School</h1>
                  <i className="text-xs">2016-2018 </i>
                </div>
                <div className=" text-sm">B.B.C School</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
