"use client";
import Image from "next/image";
const Skill = () => {
  return (
    <div className="mt-16">
      <h1 className="text-4xl text-slate-200 bg-center text-center mt-4 mb-10 ml-2 font-bold bg-clip-text  bg-gradient-to-b ">
        Skills
      </h1>
      <div className="mt-20 ml-48 mr-44 gap-24 flex flex-wrap">
        <div className="flex flex-col items-center gap-1">
          <Image
            src={
              "https://res.cloudinary.com/ddjdz0aqe/image/upload/v1713431034/html_h6a441.png"
            }
            alt="Html"
            height={70}
            width={70}
          />
          <h6>Html</h6>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Image
            src={
              "https://res.cloudinary.com/ddjdz0aqe/image/upload/v1713431031/css_hxjf5s.png"
            }
            alt="CSS"
            height={70}
            width={70}
          />
          <h6>CSS</h6>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Image
            src={
              "https://res.cloudinary.com/ddjdz0aqe/image/upload/v1713431903/JavaScript-logo_fpcfxi.png"
            }
            alt="js"
            height={70}
            width={70}
          />
          <h6>JavaScript</h6>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Image
            src={
              "https://res.cloudinary.com/ddjdz0aqe/image/upload/v1713431903/1174965_ik1h8d.webp"
            }
            alt="typescript"
            height={70}
            width={70}
          />
          <h6>TypeScript</h6>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Image
            className="mt-3"
            src={
              "https://res.cloudinary.com/ddjdz0aqe/image/upload/v1713431771/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8_nbrhd9.svg"
            }
            alt="tailwind"
            height={70}
            width={70}
          />
          <h6 className="mt-4">Tailwind CSS</h6>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Image
            src={
              "https://res.cloudinary.com/ddjdz0aqe/image/upload/v1713431037/node_k6y7bk.png"
            }
            alt="node js"
            height={70}
            width={70}
          />
          <h6>Node Js</h6>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Image
            src={
              "https://res.cloudinary.com/ddjdz0aqe/image/upload/v1713431037/react_o1rpv8.png"
            }
            alt="react"
            height={70}
            width={70}
          />
          <h6 className="mt-2">React Js</h6>
        </div>

        <div className="flex flex-col items-center gap-1">
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

        <div className="flex flex-col items-center gap-1">
          <Image
            src={
              "https://res.cloudinary.com/ddjdz0aqe/image/upload/v1713431771/4373217_java_logo_logos_icon_ktspeo.png"
            }
            alt="Java"
            height={70}
            width={70}
          />
          <h6>Java</h6>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Image
            src={
              "https://res.cloudinary.com/ddjdz0aqe/image/upload/v1713431771/2993773_git_social_media_icon_uubl3e.png"
            }
            alt="git"
            height={70}
            width={70}
          />
          <h6>Git</h6>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src={
              "https://res.cloudinary.com/ddjdz0aqe/image/upload/v1713431771/1012822_code_development_logo_mongodb_programming_icon_lemhuz.png"
            }
            alt="mongo db"
            height={70}
            width={70}
          />
          <h6>Mongo DB</h6>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src={
              "https://res.cloudinary.com/ddjdz0aqe/image/upload/v1713434117/React_owfqrd.webp"
            }
            alt="react native"
            height={70}
            width={70}
          />
          <h6>React Native</h6>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src={
              "https://res.cloudinary.com/ddjdz0aqe/image/upload/v1713431773/Postgresql_elephant.svg_lxv24y.png"
            }
            alt="postgresql"
            height={70}
            width={70}
          />
          <h6>Postgresql</h6>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src={
              "https://res.cloudinary.com/ddjdz0aqe/image/upload/v1713431772/2993785_docker_social_media_icon_x6efhf.png"
            }
            alt="docker"
            height={70}
            width={70}
          />
          <h6>Docker</h6>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src={
              "https://res.cloudinary.com/ddjdz0aqe/image/upload/v1713431033/graphql_sjcz6q.png"
            }
            alt="graphql"
            height={70}
            width={70}
          />
          <h6>Graphql</h6>
        </div>
      </div>
    </div>
  );
};

export default Skill;
