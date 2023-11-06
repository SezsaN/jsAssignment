import React from 'react'
import FeatureLine from '../../../images/features-line.svg'
import Button from '../../baseComponents/Button'
import FeturesBox from '../../baseComponents/FeturesBox'


const Features = () => {
    return (
    <>
    <section className="features">
        <div className="container">
            <img src={FeatureLine} alt="border line" />
            <div className="content-left">
                <div className="left-title">
                    <p>Features</p>
                    <h2>Our Accounting is trusted by thousand of companies</h2>
                    <Button type="yellow" title="Learn More" url="/learnmore"/>
                </div>
            </div>
            <div className="content-right">
                <FeturesBox icon="fa-light fa-handshake" title="Business Advice" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                <FeturesBox icon="fa-regular fa-lightbulb-on" title="Startup Business" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                <FeturesBox icon="fa-light fa-chart-mixed" title="Financial Advive" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit." /> 
                <FeturesBox icon="fa-sharp fa-light fa-box-open-full" title="Risk Management" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
            </div>
        </div>
    </section>
    </>
  )
}

export default Features





    