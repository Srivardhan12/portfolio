import React from "react";
// import ClipText from "./ClipText";

export default function AboutMe() {
  // const textOne = "I'm a self-taught creative web developer ";
  // const textTwo = "based in Hyderabad, India. I am passionate ";
  // const textThree = "about crafting my work for companies that ";
  // const textFour = "make an impact, inspire, and connect with people.";
  const aboutMePara =
    "I'm a self-taught creative web developer based in Hyderabad, India. I am passionate about crafting my work for companies that make an impact, inspire, and connect with people.";
  // const aboutMePara = [
  //   "I'm a self-taught creative web developer ",
  //   "based in Hyderabad, India. I am passionate ",
  //   "about crafting my work for companies that ",
  //   "make an impact, inspire, and connect with people.",
  // ];
  return (
    <div className="md:lg:px-10 flex justify-center align-middle flex-col w-11/12 m-auto md:lg:min-h-screen sm:h-fit">
      <h2 className="c-100 md:lg:px-10 uppercase text-base pb-5 font-semibold tracking-widest md:pt-28 pt-16">
        About me
      </h2>
      <p className="c-400 md:lg:line-h-ex leading-10 md:lg:px-10 text-3xl lg:text-6xl font-semibold">
        {aboutMePara}
      </p>
      {/* {aboutMePara.map((el) => {
        return <ClipText key={el} text={el} end={75} />;
      })} */}
    </div>
  );
}
