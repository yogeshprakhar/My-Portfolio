"use client";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="mt-32">
      <h1 className="text-center text-4xl mt-4 mb-10 ml-2 font-bold bg-clip-text text-stone-300">
        About Me
      </h1>
      <div className=" mt-16 grid grid-cols-2 justify-center items-center">
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
        <div className="flex flex-col items-start">
          <div className="mt-4 mr-8 font-normal text-base text-neutral-300">
            I am a Full Stack Developer and passionate about learning new
            things, a quick learner, a problem solver, and a highly motivated
            software engineer.
            <h1 className="mt-8 font-semibold text-lg text-orange-500">
              Education
            </h1>
            <div className="flex flex-col mr-36">
              <div className="flex flex-col hover:bg-slate-800 rounded-lg p-2">
                <div className="flex justify-between">
                  <h1 className="text-base font-semibold">
                    Master in Computer Application
                  </h1>
                  <i className="text-xs">2022-2024 </i>
                </div>
                <div className=" text-sm">Galgotia College</div>
              </div>

              <div className="flex flex-col hover:bg-slate-800 rounded-lg p-2">
                <div className="flex justify-between">
                  <h1 className="text-base font-semibold">
                    Bachelor in Computer Application
                  </h1>
                  <i className="text-xs">2019-2022 </i>
                </div>
                <div className=" text-sm">I.P College Bulandshahr</div>
              </div>

              <div className="flex flex-col hover:bg-slate-800 rounded-lg p-2">
                <div className="flex justify-between">
                  <h1 className="text-base font-semibold">High School</h1>
                  <i className="text-xs">2016-2018 </i>
                </div>
                <div className=" text-sm">B.B.C School</div>
              </div>
            </div>
          </div>
          <h1 className="mt-8 font-semibold text-lg text-orange-500">
            Socials connect
          </h1>
          <div className="mt-2 flex gap-6">
            <Link target="_blank" href={"https://github.com/yogeshprakhar"}>
              <Image
                className="bg-white rounded-full opacity-50 hover:opacity-100"
                src={
                  "https://res.cloudinary.com/ddjdz0aqe/image/upload/v1713429365/211904_social_github_icon_lz6e63.png"
                }
                alt="github"
                height={40}
                width={40}
              />
            </Link>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/yogeshprakhar/"}
            >
              <Image
                className=" rounded-full opacity-50 hover:opacity-100 "
                src={
                  "https://res.cloudinary.com/ddjdz0aqe/image/upload/v1713685780/linkedin-icon-2_tj8iio.svg"
                }
                alt="linkdin"
                height={40}
                width={40}
              />
            </Link>
            <Link target="_blank" href={"https://twitter.com/PrakharYogesh"}>
              <Image
                className=" rounded-full opacity-50 hover:opacity-100"
                src={
                  "https://res.cloudinary.com/ddjdz0aqe/image/upload/v1713685780/twitter-new-2023-x-logo-white-background-vector_1017-45422_brooxh.avif"
                }
                alt="twitter"
                height={40}
                width={40}
              />
            </Link>
            <Link
              target="_blank"
              href={"https://www.instagram.com/yogeshprakhar/"}
            >
              <Image
                className=" rounded opacity-50 hover:opacity-100"
                src={
                  "https://res.cloudinary.com/ddjdz0aqe/image/upload/v1713429365/6929237_instagram_icon_svfoia.png"
                }
                alt="instagram"
                height={40}
                width={40}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
