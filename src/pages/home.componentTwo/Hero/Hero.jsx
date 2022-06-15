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
             Subheading = 'EXPRESS SHIPPING'
             headingOne = 'A PLATFORM DESIGNED '
             headingTwo = "FOR SHIPPING PRODUCTS"
             paragraph = 'We bring together all the express shipping companies. OTIF facilitates logistics for your company, either brick, mortar or your ecommerce store.
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