import React from 'react'
import FeatureLine from '../../../images/features-line.svg'

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
                    <a class ="btn-yellow" href="#">Learn More <i className="fa-regular fa-arrow-up-right"></i></a>
                </div>
            </div>
            <div className="content-right">
                <div className="business-advice">
                    <i className="fa-light fa-handshake"></i>
                    <h3>Business Advice</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="startup-business">
                    <i className="fa-regular fa-lightbulb-on"></i>
                    <h3>Startup Business</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="financial-advice">
                    <i className="fa-light fa-chart-mixed"></i>
                    <h3>Financial Advice</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="risk-management">
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