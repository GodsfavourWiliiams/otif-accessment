import React from 'react'
import SectionFeatures from '../../Section/Section.secondfeatures';
import Fingerprint from "../../../components/Assets/fingerprintsvg.svg";
import Logisticsamico from "../../../components/Assets/logisticsamico.svg";
import Papermap from "../../../components/Assets/paper-map.svg";
import Company from "../../../components/Assets/company.svg";

const Features = () => {
  return (
    <div>
         <SectionFeatures
            className = ''
            heading = 'Automation'
            paragraph = 'We optimize and automate your entire shipping process. You do not have to look over your shoulder or facilitate any process in the course of shipping. '
            img = {Fingerprint}
            imgAlt = "FeatureOneImg"
            />

        <SectionFeatures
            className = 'order-lg-2'
            heading = 'volume'
            paragraph = 'Regardless of the size, big or very small,  of whatever you are shipping, be it a a small taco, some packages  or an entire  stand we make sure it gets there on time and in full.
            '
            img = {Logisticsamico}
            imgAlt = "FeatureTwoImg"
            paraClass="pt-10"
            />

        <SectionFeatures
            className = ''
            heading = 'Seamless navigation '
            paragraph = 'We service all route and handle all types of navigation, inbound or outbound. Our carriers are sufficent for efficient servicing of the entire globe. 
            '
            img = {Papermap}
            imgAlt = "FeatureThreeImg"
            />
        <SectionFeatures
            className = 'order-lg-2'
            heading = 'Multiple business model'
            paragraph = 'We have prepared packages for all types of busines model; business to business, business to consumer, and consumer to business. We will handle your package either way.
            '
            img = {Company}
            imgAlt = "FeatureFourImg"
            paraClass="pt-10"
            />
    </div>
  )
}

export default Features