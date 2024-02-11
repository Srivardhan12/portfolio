import React from 'react'

export default function Navbar() {
    return (
        <nav className='nav px-10 py-5 flex items-center justify-between'>
            <div className="logo-sec">
                <span className='logo text-4xl font-semibold'>S</span>
            </div>
            <div className="menu-sec">
                <div className='hamburger'></div>
                <div className='hamburger'></div>
            </div>
        </nav>
    )
}
