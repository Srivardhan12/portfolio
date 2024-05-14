import React from 'react'
import ClipText from "./ClipText"

export default function Skills() {
    const arr = ["React", "Typescript", "Javascript", "Next.js"]
    return (
        <div className='px-10 flex justify-center align-middle flex-col w-11/12 m-auto h-screen'>
            <h2 className='c-100 px-10 uppercase text-base pb-5 font-semibold tracking-widest'>Skills</h2>
            {arr.map((elem) => {
                return <ClipText text={elem} end={-150} />
            })}
        </div>
    )
}
