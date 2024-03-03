import React from 'react'
import codefeImg from '../assests/images/codefe-5.jpg'

export default function Projects() {
    return (
        <div className='w-11/12 m-auto px-10 h-screen'>
            <h2 className='c-100 px-8 pt-20 uppercase text-8xl font-medium'>Projects</h2>
            <div className="px-8 pt-10 flex">
                <div>
                    <img src={codefeImg} className='w-11/12' alt="ProjectImg" />
                </div>
                <div>
                    <h3 className='c-100 uppercase text-5xl font-medium'>CodeFe</h3>
                    <p className='c-200 text-3xl font-medium py-5'>CodeFE offers an immersive experience filled with exciting challenges and a playground to pratice your front-end skills.</p>
                </div>
            </div>
        </div>
    )
}
