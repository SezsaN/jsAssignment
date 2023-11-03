import React from 'react'
import FeatureLine from '../../../images/features-line.svg'
import Button from '../../baseComponents/Button'


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
                <div className="features-box">
                    <i className="fa-light fa-handshake"></i>
                    <h3>Business Advice</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="features-box">
                    <i className="fa-regular fa-lightbulb-on"></i>
                    <h3>Startup Business</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="features-box">
                    <i className="fa-light fa-chart-mixed"></i>
                    <h3>Financial Advice</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="features-box">
                    <i className="fa-sharp fa-light fa-box-open-full"></i>
                    <h3>Risk Management</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Features





    