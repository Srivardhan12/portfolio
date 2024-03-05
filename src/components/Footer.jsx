import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div>
            <footer className="c-200 body-font">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-96 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <p className="text-6xl font-medium c-200">Srivardhan</p>
                        <p className="mt-2 text-sm c-100 font-medium">Always curious to learn new things...</p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="font-bold c-200 tracking-widest text-sm mb-3 uppercase">Social</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link className="c-400" to="https://www.linkedin.com/in/srivardhan-vuthdfdkuru-95117a248/fgdkgfjgfj" target='_blank'>Linkedin</Link>
                                </li>
                                <li>
                                    <Link className="c-400" to="https://twitter.com/srivardhan_24_" target='_blank'>Twitter</Link>
                                </li>
                                <li>
                                    <Link className="c-400" to="https://www.instagram.com/srivardhan_24_?igsh=dDI0Y3B3Z3hrODRu" target='_blank'>Instagram</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="font-bold c-200 tracking-widest text-sm mb-3 uppercase">codes</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link className="c-400" to="https://www.linkedin.com/in/srivardhan-vuthdfdkuru-95117a248/fgdkgfjgfj" target='_blank'>CodePen</Link>
                                </li>
                                <li>
                                    <Link className="c-400" to="https://twitter.com/srivardhan_24_" target='_blank'>Twitter</Link>
                                </li>
                                <li>
                                    <Link className="c-400" to="https://www.instagram.com/srivardhan_24_?igsh=dDI0Y3B3Z3hrODRu" target='_blank'>Instagram</Link>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="c-200 bg-opacity-75">
                    <div className="container mx-auto py-4 px-5">
                        <p className="c-200 text-sm font-medium sm:text-left uppercase" style={{ textAlign: "center" }}>Designed and coded by srivardhan</p>
                    </div>
                </div>
            </footer >
        </div >
    )
}
