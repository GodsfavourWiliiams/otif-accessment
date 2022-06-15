import React from 'react';
import SectionFeatures from '../../Section/Section.secondfeatures';
import Fingerprint from "../../../components/Assets/locationsearchsvg.svg";
import Logisticsamico from "../../../components/Assets/barcode.svg";
import Papermap from "../../../components/Assets/agreement.svg";
import Company from "../../../components/Assets/mailsent.svg";
import Presonal from "../../../components/Assets/personalsettings.svg";

const Features = () => {
  return (
    <div>
         <SectionFeatures
            className = ''
            heading = 'Worldwide consolidation network '
            paragraph = 'Load your key SKUs onto OTIF’s worldwide consolidation network where technology adds visibility and control to every handoff.'
            img = {Fingerprint}
            imgAlt = "FeatureOneImg"
            backgroundImgClass = "d-none"
            />

        <SectionFeatures
            className = ''
            heading = 'Only Pay for The Space You Use'
            paragraph = 'Don’t wait to fill a full container. Save time and money now. Only pay for the space you need and never lose track of your cargo thanks to our extensive less-than-truckload (LTL) network managed by OTIF.
            '
            img = {Logisticsamico}
            imgAlt = "FeatureTwoImg"
            paraClass="pt-10"
            />

        <SectionFeatures
            className = 'order-lg-2'
            heading = 'Secure & Reliable'
            paragraph = 'With thousand of certified suppliers on the OTIF Platform, you can find a reliable LTL option that will meet your budget, schedule, and expectations.
            '
            img = {Papermap}
            imgAlt = "FeatureThreeImg"
            />
        <SectionFeatures
            className = ''
            heading = 'Fast '
            paragraph = 'Book with fewer worries. Consolidated shipments managed by OTIF are rarely subject to demurrage or additional days.
            '
            img = {Company}
            imgAlt = "FeatureFourImg"
            paraClass="pt-10"
            />
          <SectionFeatures
            className = 'order-lg-2'
            heading = 'Huge variety'
            paragraph = 'More options make OTIF LTL the right choice for companies of all sizes. With access to more carriers, you can pick the service that’s best for you. Our warehouses, technology, and carrier relationships create higher reliability that will give you leverage in your operation. 
            '
            img = {Presonal}
            imgAlt = "FeatureFourImg"
            paraClass="pt-10"
            />
    </div>
  )
}

export default Features