import React from 'react'

export default function Navbar() {
    return (
        <div className='nav-main sticky top-0 z-10'>
            < nav className='nav absolute px-10 py-5 flex items-center justify-between' >
                <div className="logo-sec">
                    <span className='c-200 logo text-4xl font-semibold'>S</span>
                </div>
                <div className="menu-sec">
                    <div className='hamburger'></div>
                    <div className='hamburger'></div>
                </div>
            </nav >
        </div>
    )
}
