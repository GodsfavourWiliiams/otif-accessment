import React from 'react';
import SectionHero from '../../../components/Section.components/SectionHero';
import {ReactComponent as HeroLogo} from "../../../components/Assets/Group 1000003021.svg";
import HeroImg from "../../../components/Assets/cuate.svg";
import Header from '../../../components/Header/Header';

const Hero = () => {
  return (
    <div className='mb-4'>
    <Header/>
       <SectionHero
             Subheading = 'LESS THAN TRUCK LOAD LTL'
             headingOne = 'SHIP ANY AMOUNT '
             headingTwo = "ANYWHERE"
             paragraph = 'When it comes to optimizing less-than-truckload freight transportation, we got you. 
             We use our economies of scale, for you to get the best prices and the best experience.  Your products must get through. 
             '
             SubHeadingImg = {HeroLogo}
             ButtonContent = "GET STARTED"
             Img = {HeroImg}
             imgAlt= ""
       />
    </div>
  )
}

export default Hero;