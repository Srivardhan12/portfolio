import React from "react";
import ClipText from "./ClipText";

export default function AboutMe() {
  // const textOne = "I'm a self-taught creative web developer ";
  // const textTwo = "based in Hyderabad, India. I am passionate ";
  // const textThree = "about crafting my work for companies that ";
  // const textFour = "make an impact, inspire, and connect with people.";
  const aboutMePara = [
    "I'm a self-taught creative web developer ",
    "based in Hyderabad, India. I am passionate ",
    "about crafting my work for companies that ",
    "make an impact, inspire, and connect with people.",
  ];
  return (
    <div className="px-10 flex justify-center align-middle flex-col w-11/12 m-auto min-h-screen">
      <h2 className="c-100 px-10 uppercase text-base pb-5 font-semibold tracking-widest md:pt-28 sm:pt-28">
        About me
      </h2>
      {aboutMePara.map((el) => {
        return <ClipText key={el} text={el} end={75} />;
      })}
    </div>
  );
}
