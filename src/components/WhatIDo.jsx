import React from "react";
import ClipText from "./ClipText";

export default function WhatDoIDo() {
  const textParas = [
    "I create purposeful digital experiences. ",
    "Passionate about coding, crafting sleek ",
    "designs, and bringing ideas to life interactively.",
  ];
  // const originalText = "I create purposeful digital experiences. Passionate about coding, crafting sleek designs, and bringing ideas to life interactively."
  // const textOne = "I create purposeful digital experiences. ";
  // const textTwo = "Passionate about coding, crafting sleek ";
  // const textThree = "designs, and bringing ideas to life interactively.";
  return (
    <div className="px-10 b-100 flex justify-center align-middle flex-col w-11/12 m-auto min-h-screen">
      <h2 className="c-100 px-10 uppercase pb-5 text-base font-semibold tracking-widest md:pt-20">
        What i do?
      </h2>
      {textParas.map((el) => {
        return <ClipText key={el} text={el} end={75} />;
      })}
    </div>
  );
}
