import React from "react";
import ClipText from "./ClipText";

export default function Skills() {
  const skills = [
    "Typescript",
    "Javascript",
    "C++",
    "React",
    "Next.js",
    "Express.js",
    "Hono.js",
    "Tailwind",
    "Postgress",
    "MySql",
    "MongoDB",
    "Prisma",
  ];
  const speed = 50;
  return (
    <div className="lg:md:px-10 lg:md:mt-12 flex justify-center align-middle flex-col w-11/12 m-auto">
      <h2 className="c-100 lg:md:px-10 uppercase text-base pb-5 font-semibold tracking-widest">
        Skills
      </h2>
      {skills.map((elem) => {
        return (
          <div className="flex">
            <ClipText text={elem} end={speed} />
          </div>
        );
      })}
    </div>
  );
}
