import React from 'react'

export default function Main() {
    return (
        <div className='landing b-200 flex justify-center items-center h-screen w-full m-auto flex-col relative'>
            <div className='box'>
                <span className='c-100 uppercase text-8xl font-semibold text-start'>Hello there, I'm</span>
                <h1 className='c-100 pt-10 uppercase text-8xl font-semibold text-end'>Srivardhan</h1>
                {/* <div>
                    <p className='c-300 pt-3 uppercase  font-medium text-end'>STUDENT AND A WEB DEVELOPER</p>
                </div> */}
            </div>
            <div >
                {/* <div className='absolute mt-96 rotate-90'> */}
                <p className='absolute mt-40 bounce-ball animate-bounce w-10 h-10 b-100 mx-auto c-200 text-center'>&darr;</p>
                {/* <p className='bounce-ball animate-bounce mt-40 text-base w-auto rotate-90' style={{ "fontSize": "16px" }}>Scroll down</p> */}
            </div>
        </div>
    )
}
