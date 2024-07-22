import React from "react";
import ClipText from "./ClipText";

export default function WhatDoIDo() {
  const textForSm =
    "I create purposeful digital experiences. Passionate about coding, crafting sleek designs, and bringing ideas to life interactively.";
  const splaitedText = textForSm.split(" ");
  const textParas = [
    "I create purposeful digital experiences. ",
    "Passionate about coding, crafting sleek ",
    "designs, and bringing ideas to life interactively.",
  ];
  return (
    <div className="md:lg:px-10 b-100 flex md:justify-center align-middle flex-col w-11/12 m-auto md:lg:min-h-screen h-fit">
      <h2 className="c-100 md:lg:px-10 uppercase pb-5 text-base font-semibold tracking-widest md:lg:pt-20 pt-10">
        What i do?
      </h2>
      <p className="c-400 md:lg:line-h-ex leading-10 md:lg:px-10 text-3xl lg:text-6xl font-semibold sm:hidden">
        I create purposeful digital experiences. Passionate about coding,
        crafting sleek designs, and bringing ideas to life interactively.
      </p>
      {/* {textParas.map((el) => {
          return <ClipText key={el} text={el} end={75} />;
        })} */}
      <div className="c-400 line-h-ex sm:leading-10 md:lg:px-10 px-0 text-3xl lg:text-6xl font-semibold hidden md:lg:block">
        {textParas.map((el) => {
          return <p className="leading-snug">{el}</p>;
        })}
      </div>
    </div>
  );
}
