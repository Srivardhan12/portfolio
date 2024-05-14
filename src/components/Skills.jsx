import React from 'react'
import ClipText from "./ClipText"

export default function Skills() {
    const skills = ["Typescript", "Javascript", "C++", "React", "Next.js", "Tailwind", "Postgress", "MySql", "MongoDB", "Prisma"]
    // const skillTitle = ["Language"]
    const speed = 50;
    return (
        <div className='px-10 flex justify-center align-middle flex-col w-11/12 m-auto'>
            <h2 className='c-100 px-10 uppercase text-base pb-5 font-semibold tracking-widest'>Skills</h2>
            {skills.map((elem) => {
                return <div className='flex'>
                    <ClipText text={elem} end={speed} />
                    {/* {skillTitle.map((st) => {
                        return <div>
                            <p><ClipText text={st} end={speed} /></p>
                        </div>
                    })} */}
                </div>
            })}
        </div>
    )
}
