import './App.css';
import { useEffect } from 'react'
import Navbar from './components/Navbar';
import Main from './components/Main'
import WhatDoIDo from './components/WhatIDo'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Skills from './components/Skills'


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
      <Navbar />
      <Main />
      <div className='b-100'>
        <WhatDoIDo />
        <AboutMe />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </div>
  );
}

export default App;
