import React from "react";

export default function Main() {
  return (
    <div className="landing b-200 flex justify-center items-center h-screen w-full m-auto flex-col relative">
      <div className="pt-32">
        <p className="c-100 uppercase lg:text-8xl md:text-7xl text-4xl font-semibold text-center md:lg:text-center md:mr-24">
          Hello there, I'm
        </p>
        <h1 className="c-100 pt-10 uppercase lg:text-8xl md:text-7xl text-5xl font-semibold text-center md:text-end lg:text-end md:ml-32">
          Srivardhan
        </h1>
      </div>
      <div>
        {/* <div className='absolute mt-96 rotate-90'> */}
        <p className="mt-40 bounce-ball animate-bounce w-10 h-10 b-100 lg:md:mx-auto c-200 text-center">
          &darr;
        </p>
        {/* <p className='bounce-ball animate-bounce mt-40 text-base w-auto rotate-90' style={{ "fontSize": "16px" }}>Scroll down</p> */}
      </div>
    </div>
  );
}
