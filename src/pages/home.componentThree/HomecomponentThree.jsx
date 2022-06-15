import React from 'react'
import Footer from '../../components/Footer/Footer'
import Hero from './Hero/Hero';
import Contact from '../../components/contact/contact';
import Features from './Features/Features';
import ScrollToTop from '../../components/Scroll/Scroll';

const HomecomponentThree = () => {
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

export default HomecomponentThree