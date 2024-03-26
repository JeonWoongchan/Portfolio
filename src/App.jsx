import './App.css';
import { useRef, useState, useEffect } from 'react';
import Header from './Header/Header'
import Home from './Main/Home'
import About from './Main/About';
import Skills from './Main/Skills';
import Work from './Main/Work';
import Testimonials from './Main/Testimonials';
import Footer from './Footer/Footer';
import './Function/useScroll'
import useScroll from './Function/useScroll';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const workRef = useRef(null);
  const testimonialsRef = useRef(null);
  const footRef = useRef(null);

  const sectionRefs = {
    Home: homeRef,
    About: aboutRef,
    Skills: skillsRef,
    Work: workRef,
    Testimonials: testimonialsRef,
    Contact : footRef
  };

  const handleMenuClick = (menu) => {
    sectionRefs[menu].current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="App">
      <Header handleMenuClick={handleMenuClick} />
      <main>
        <Home ref={homeRef} handleMenuClick={handleMenuClick}/>
        <About ref={aboutRef} handleMenuClick={handleMenuClick}/>
        <Skills ref={skillsRef} handleMenuClick={handleMenuClick}/>
        <Work ref={workRef} handleMenuClick={handleMenuClick}/>
        {/* <Testimonials ref={testimonialsRef} handleMenuClick={handleMenuClick}/> */}
      </main>
      <Footer ref={footRef} />
    </div>
  );
}

export default App;
