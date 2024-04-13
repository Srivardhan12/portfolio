import React from 'react'
import ClipText from "./ClipText"

export default function AboutMe() {
    const textOne = "I am a self-taught creative web developer ";
    const textTwo = "based in Hyderabad, India. I am passionate ";
    const textThree = "about crafting my work for companies that ";
    const textFour = " make an impact, inspire, and connect with people.";
    return (
        <div className='px-10 flex justify-center align-middle flex-col w-11/12 m-auto h-screen'>
            <h2 className='c-100 px-10 uppercase text-2xl pb-5 font-medium'>About me</h2>
            <ClipText text={textOne} />
            <ClipText text={textTwo} />
            <ClipText text={textThree} />
            <ClipText text={textFour} />
        </div>
    )
}
