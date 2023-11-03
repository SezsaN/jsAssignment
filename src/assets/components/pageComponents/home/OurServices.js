import React from 'react'
import SwirlyLines from '../../../images/our-services-lines.svg'
import Button from '../../baseComponents/Button'
import ServiceBox from '../../baseComponents/ServiceBox'

const OurServices = () => {
  return (
    <>
        <section className="our-services">
            <img src={SwirlyLines} alt="swirly lines" />
            <div className="container">
                <div className="content-top">
                    <p className="title">Our Services</p>
                    <h2>We Provide The Best Service For Consulting</h2>
                </div>
                
                <div className="content-bottom">
                    <ServiceBox title="Business Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/businessadvice" />
                    <ServiceBox title="Startup Business" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/startupbusiness" />
                    <ServiceBox title="Financial Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/financialadvice" />
                    <ServiceBox title="Risk Management" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/riskmanagement" />
                </div>
            </div>
            <div className="bottom-button">
                <Button type="transparent" title="Browse Services" url="/services" />
            </div>
        </section>

    </>
  )
}

export default OurServices