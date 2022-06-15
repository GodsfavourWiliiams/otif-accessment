import React from 'react';
import SectionFeatures from '../Section.components/SectionFeatures';
import FeatureOneImg  from "../Assets/rafiki.svg";
import FeatureTwoImg  from "../Assets/manufacturing-amico.svg";
import FeatureThreeImg  from "../Assets/amico.svg"

const Features = () => {
    
    const list = [ 
        "Now there is, OTIF." ,
       ' OTIF : ON-TIME IN FULL ',
        'Our team is your team.' ,
      '  Our technology is your technology to use as you please when you please. ',
       ' The power of your business.' ]
  return (
    <div>
        <SectionFeatures
            className = ''
            heading = 'Data Driven'
            paragraph = 'We decided to use technology in logistics to habilitate transparent, data-driven, and easy decisions for your business. Our technology is your business’ competitive advantage.
            This brings decisions into the user’s hands. Users choose to their company’s convenience the times, prices, and modalities that they need and want. '
            img = {FeatureOneImg}
            imgAlt = "FeatureOneImg"
            />

        <SectionFeatures
            className = 'order-lg-2'
            heading = 'Efficiency and Transparency'
            paragraph = 'OTIF is a platform that can smoothly and flexibly integrate all parties across multiple supply chains, enabling the formation of modular services for your needs, maximizing your efficiency, and reducing your costs.
            '
            img = {FeatureTwoImg}
            imgAlt = "FeatureTwoImg"
            />

        <SectionFeatures
            className = ''
            heading = 'On-Time  In Full'
            paragraph = 'Do you ever wish there was a platform where you could search, compare, and buy the best, most reliable logistical bookings? 
           
            '
            list = {list}
            img = {FeatureThreeImg}
            imgAlt = "FeatureThreeImg"
            />
    </div>
  )
}

export default Features;