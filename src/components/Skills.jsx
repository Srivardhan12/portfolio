import React from "react";
// import ClipText from "./ClipText";

export default function Skills() {
  const skills = [
    "Typescript",
    "Javascript",
    "C++",
    "React",
    "Express.js",
    "Hono.js",
    "Tailwind",
    "Postgress",
    "SQL",
    "MongoDB",
  ];
  // const speed = 50;
  return (
    <div className="lg:md:px-10 lg:md:mt-12 flex justify-center align-middle flex-col w-11/12 m-auto">
      <h2 className="c-100 lg:md:px-10 uppercase text-base pb-5 font-semibold tracking-widest pt-5 sm:pt-0">
        Skills
      </h2>
      {skills.map((elem) => {
        return (
          <p className="c-400 line-h-ex leading-snug sm:pb-3 md:lg:px-10 text-6xl font-semibold">
            {elem}
          </p>
        );
      })}
      {/* {skills.map((elem) => {
        return (
          <div className="flex leading-snug">
            <ClipText text={elem} end={speed} />
          </div>
        );
      })} */}
    </div>
  );
}
