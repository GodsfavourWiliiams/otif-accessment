import React from 'react';
import { ReactComponent as SubImage } from "../../components/Assets/tri4992.svg"
import "../../components/Section.components/style.css";

export default function SectionFeatures({
  className = '',
  paraClass,
  heading = 'OTIF Internship',
  paragraph = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore optio corporis distinctio! Quasi.',
  img = '',
  imgAlt = "",
  backgroundImgClass = ""
  
})

{

  return (
    <section className="d-flex align-items-center pb-5">
        <div className="container my-3">
            <div className="row ">
               <div className={`${className} col-lg-6 d-flex flex-column pb-lg-0 pb-3 justify-content-center`}>
                    <SubImage className={`mb-2 position-absolute ${backgroundImgClass}`}/>
                    <h3 className='heading ps-4 pt-5 fw-bold text-primary-100'>{heading}</h3>
                    <p className={`paragraph ps-4 ${paraClass}`}>{paragraph}</p>
                </div>

                <div className="col-lg-6 d-flex justify-content-center">
                    <img src={img} className="img-fluid" alt={imgAlt}/>
                </div>
            </div>
        </div>
    </section>
  );
}