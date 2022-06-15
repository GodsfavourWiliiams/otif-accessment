import React from 'react';
import { ReactComponent as SubImage } from "../Assets/Group 1000003013.svg"

export default function SectionFeatures({
  className = '',
  heading = 'OTIF Internship',
  paragraph = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore optio corporis distinctio! Quasi.',
  img = '',
  imgAlt = "",
  list = ''
  
})

{

  return (
    <section className="d-flex align-items-center pb-5">
        <div className="container my-3">
            <div className="row">
               <div className={`${className} col-lg-6 d-flex flex-column pb-3 justify-content-center`}>
                    <SubImage className='mb-2'/>
                    <h3 className='heading fw-bold text-primary-100'>{heading}</h3>
                    <p className='paragraph mt-2'>{paragraph}</p>
                      {Object.values(list).map((item, index) => (
                        <p key={index} className="paragraph p-0 m-0 ">{item}</p>
                      ))}
                </div>

                <div className="col-lg-6 d-flex justify-content-center">
                    <img src={img} className="img-fluid " alt={imgAlt}/>
                </div>
            </div>
        </div>
    </section>
  );
}