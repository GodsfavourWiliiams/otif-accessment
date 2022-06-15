import React from 'react';
import Hero from "../../components/Hero/Hero";
import Features from '../../components/Features/Features';
import Contact from '../../components/contact/contact';
import Footer from '../../components/Footer/Footer';
import Scroll from "../../components/Scroll/Scroll";

const HomeComponentOne = () => {
  return (
    <>
        <Hero/>
        <Features/>
        <Contact/>
        <Footer/>
        <Scroll/>
    </>
  )
}

export default HomeComponentOne