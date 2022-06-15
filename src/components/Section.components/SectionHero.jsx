import React from 'react';
import {ReactComponent as HeroLogo} from "../Assets/Group Hero.svg";
import HeroImg from "../Assets/Group 8722.svg";


export default function sectionHero ({
    Subheading = 'subheading',
    headingOne = 'heading',
    headingTwo = "",
    paragraph = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore optio corporis distinctio! Quasi.',
    SubHeadingImg = {HeroLogo},
    ButtonContent = "Start",
    Img = {HeroImg} ,
    imgAlt 
  }) {
  return (
    <section className="hero position-relative bg-primary-100 d-flex align-items-center overflow-hidden">
    <div className="container py-5 text-white">
            
        <div className="row d-flex align-items-center justify-content-center">
            <div className="col-lg-6 d-flex gap-3 flex-column pb-5">
                    <div className="d-flex align-items-center gap-2">
                        <SubHeadingImg/>
                        <span className="">{Subheading}</span>
                    </div>
                    <div className="">
                        <h1 className='fw-bold d-block '>{headingOne}</h1>
                        <h1 className='fw-bold '>{headingTwo}</h1>
                     </div>
                <p className='mt-2'>{paragraph}</p>
                
                <div>
                <button className='btn px-5 text-uppercase py-2 text-primary bg-white'>{ButtonContent}</button>
                </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img">
              <img alt={imgAlt} src={Img} className="img-fluid " />
            </div>
        </div>
    </div>
</section>
  )
}

