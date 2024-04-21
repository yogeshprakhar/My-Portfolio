"use client";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <h1 className="text-center text-4xl mt-4 mb-10 ml-2 font-bold bg-clip-text text-transparent bg-gradient-to-b text-gray-100">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            qui provident quam labore delectus temporibus beatae consequuntur!
            Natus vel ipsum iste suscipit, doloribus maiores adipisci velit esse
            neque eum quae? Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Itaque sint iure excepturi minima laudantium, asperiores
            perferendis obcaecati voluptate ullam architecto minus doloremque,
            suscipit sapiente est iusto cum alias quas veritatis.
          </div>
          <div className="mt-10 flex gap-6">
            <Link target="_blank" href={"https://github.com/yogeshprakhar"}>
              <Image
                className="bg-white rounded-lg"
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
                className="bg-white rounded-lg"
                src={
                  "https://res.cloudinary.com/ddjdz0aqe/image/upload/v1713429336/2986200_linkdin_logo_media_social_icon_jhthja.png"
                }
                alt="linkdin"
                height={40}
                width={40}
              />
            </Link>
            <Link target="_blank" href={"https://twitter.com/PrakharYogesh"}>
              <Image
                className="bg-white rounded-lg"
                src={
                  "https://res.cloudinary.com/ddjdz0aqe/image/upload/v1713429362/11053969_x_logo_twitter_new_brand_icon_e5aomz.png"
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
                className=" rounded-lg"
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
