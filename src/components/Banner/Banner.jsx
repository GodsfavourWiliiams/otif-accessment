import React from 'react';
import {ReactComponent as Flag} from "../Assets/openmoji_flag-united-states.svg";
import { ReactComponent as Arrow } from '../Assets/arrow.svg';

const Banner = () => {
  return (
    <nav className="bg-primary-100 text-white">
         <div className="container py-3">
                <ul className="d-flex align-item-center justify-content-end gap-4 me-auto mb-2 mb-lg-0">
                    <li className="list-unstyled">
                        <span className=" ">Help</span>
                    </li>
                    <li className="list-unstyled">
                        <span className="">Sign In</span>
                    </li>
                    <li className="list-unstyled d-flex align-items-center gap-1">
                        <Flag/>
                         <span className="">English</span>
                         <Arrow className='mt-1'/>
                    </li>
                </ul>
        </div>
    </nav>
  )
}

export default Banner;