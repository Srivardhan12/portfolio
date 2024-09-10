import React from "react";

export default function Main() {
  return (
    <div className="landing b-300 flex justify-center items-center h-screen w-full m-auto flex-col relative grainy">
      <div className="pt-48">
        <p className="c-100 uppercase lg:text-8xl md:text-7xl text-4xl font-semibold text-center md:lg:text-center md:mr-24">
          Hello there, I'm
        </p>
        <h1 className="c-100 pt-10 uppercase lg:text-8xl md:text-7xl text-5xl font-semibold text-center md:text-end lg:text-end md:ml-32">
          Srivardhan
        </h1>
      </div>
      <div>
        <p className="mt-40 bounce-ball animate-bounce w-10 h-10 b-100 lg:md:mx-auto c-200 text-center">
          &darr;
        </p>
      </div>
    </div>
  );
}
