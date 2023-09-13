import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';

const App = () => {
  return (
    <>
    
    
     <Navbar></Navbar>
      <main>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Portfolio></Portfolio>
      <Testimonial></Testimonial>
      <Contact></Contact>
     
      </main>
      <Footer></Footer>
      <BackToTop></BackToTop>
    </>
    
  );
};

export default App;
