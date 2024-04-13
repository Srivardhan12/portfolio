import React from 'react'
import ClipText from './ClipText'

export default function WhatDoIDo() {
    const textOne = "I create purposeful digital experiences. ";
    const textTwo = "Passionate about coding, crafting sleek ";
    const textThree = "designs, and bringing ideas to life interactively.";
    return (
        <div className='px-10 b-100 flex justify-center align-middle flex-col w-11/12 m-auto h-screen'>
            <h2 className='c-100 px-10 uppercase pb-5 text-2xl font-medium'>What do i do?</h2>
            <ClipText text={textOne} />
            <ClipText text={textTwo} />
            <ClipText text={textThree} />
        </div>
    )
}
