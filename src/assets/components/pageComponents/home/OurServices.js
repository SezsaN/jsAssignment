import React from 'react'
import SwirlyLines from '../../../images/our-services-lines.svg'

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
                    <div className="business">
                        <div className="small-line"></div>    
                        <h3>Business Advice</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <a href="#"><i className="fa-light fa-arrow-right"></i></a>
                    </div>
                    <div className="startup">
                        <div className="small-line"></div> 
                        <h3>Startup Business</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <a href="#"><i className="fa-light fa-arrow-right"></i></a>
                    </div>
                    <div className="financial">
                        <div className="small-line"></div> 
                        <h3>Financial Advice</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <a href="#"><i className="fa-light fa-arrow-right"></i></a>
                    </div>
                    <div className="risk">
                        <div className="small-line"></div> 
                        <h3>Risk Management</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <a href="#"><i className="fa-light fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="bottom-button">
                <a href="#" className="btn-transparent">Browse Services<i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
        </section>

    </>
  )
}

export default OurServices