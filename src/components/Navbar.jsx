import React from 'react'

export default function Navbar() {
    return (
        <div className='nav-main sticky top-0 z-10'>
            < nav className='nav absolute px-10 py-5 flex items-top justify-between' >
                <div className="logo-sec">
                    <span className='c-200 logo text-4xl font-semibold'>S</span>
                </div>
                <div className="menu-sec">
                    <ul>
                        <li className='text-md c-100 font-semibold'>Home</li>
                        <li className='text-md c-100 font-semibold'>About</li>
                        <li className='text-md c-100 font-semibold'>Contact</li>
                    </ul>
                </div>
            </nav >
        </div>
    )
}
