import './App.css';
import { useEffect } from 'react'
// import Navbar from './components/Navbar';
import Main from './components/Main'
import WhatDoIDo from './components/WhatDoIDo'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Footer from './components/Footer'


function App() {
  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        // eslint-disable-next-line
        const locomotiveScroll = new LocomotiveScroll();
      }

    )()

  }, [])
  return (
    <div className="w-full">
      {/* <Navbar /> */}
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
      <Main />
      <div className='b-100'>
        <WhatDoIDo />
        <AboutMe />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
