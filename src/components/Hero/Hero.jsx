import React from 'react';
import {ReactComponent as HeroLogo} from "../Assets/Group Hero.svg";
import HeroImg from "../Assets/cuate.svg";
import SectionHero from '../Section.components/SectionHero';
import Header from '../Header/Header';

const Hero = () => {
  return (
    <div className='mb-4'>
      <Header/>
        <SectionHero
             Subheading = 'OTIF PLATFORM'
             headingOne = 'OPTIMIZATION OF'
             headingTwo = " GLOBAL SUPPLY CHAIN"
             paragraph = 'OTIF is the next dimension of consolidation, orchestration, and optimization of the global supply chain networks, integrating different production enterprises and logistics providers for your convenience.  
             '
             SubHeadingImg = {HeroLogo}
             ButtonContent = "Start"
             Img = {HeroImg}
             imgAlt= ""
       />
      
    </div>
  )
}

export default Hero;