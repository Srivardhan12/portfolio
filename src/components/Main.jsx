import React from 'react'

export default function Main() {
    return (
        <div className='landing b-200 flex justify-center items-center h-screen w-11/12 m-auto flex-col relative'>
            <div className='box'>
                <span className='c-100 uppercase text-8xl font-medium text-start'>Hello there, I'm</span>
                <h1 className='c-100 pt-10 uppercase text-8xl font-medium text-end'>Srivardhan</h1>
                {/* <div>
                    <p className='c-300 pt-3 uppercase  font-medium text-end'>STUDENT AND A WEB DEVELOPER</p>
                </div> */}
            </div>
            <div className=''>
                <p className='absolute mt-40 bounce-ball animate-bounce w-10 h-10 b-100 mx-auto c-200 text-center'>&darr;</p>
            </div>
        </div>
    )
}
