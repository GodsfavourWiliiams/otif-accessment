import React from 'react';
import Footer from '../../components/Footer/Footer';
import Contact from '../../components/contact/contact';
import Hero from './Hero/Hero';
import Features from './Features/Features';
import ScrollToTop from '../../components/Scroll/Scroll';

const HomeComponentTwo = () => {
  return (
    <div>
        <Hero/>
        <Features/>
        <Contact/>
        <Footer/>
        <ScrollToTop/>
    </div>
  )
}

export default HomeComponentTwo;