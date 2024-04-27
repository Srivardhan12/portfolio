import React from 'react'
import codefeImg from '../assests/images/codefe-5.jpg'
import { Link } from 'react-router-dom'

export default function Projects() {
    return (
        <div className='w-11/12 m-auto px-10 h-screen'>
            <h2 className='c-100 px-8 pt-20 uppercase text-base font-semibold tracking-widest'>Projects</h2>
            <div className="px-8 pt-10 flex">
                <Link to="https://codefe.vercel.app" target='_blank'>
                    <img src={codefeImg} className='w-11/12 rounded-md hover:scale-105 transition' alt="ProjectImg" />
                </Link>
                <div>
                    <h3 className='c-400 text-5xl font-medium'>CodeFE</h3>
                    <p className='c-200 text-2xl font-medium py-5'>CodeFE offers an immersive experience filled with exciting challenges and a playground to pratice your front-end skills.</p>
                </div>
            </div>
        </div>
    )
}
