import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main'
import WhatDoIDo from './components/WhatDoIDo';
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <WhatDoIDo />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
