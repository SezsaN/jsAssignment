import React from 'react'
import AboutCompanyImage from '../../../images/about-company-image.png'
import Button from '../../baseComponents/Button'


const AboutCompany = () => {
  return (
    <>
        <section className="about-company">   
            <div className="container">
                <div className="content-left">
                    <img src={AboutCompanyImage} alt="woman in blue shirt holding a laptop in a corridor" />
                    <div className="founder">
                        <div className="box">
                            <h3>Samantha Brown,</h3>
                            <p className="title">Founder</p>
                            <p className="description">"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                        </div>
                    </div>   
                </div>
                <div className="content-right">
                    <p className="title">About company</p>
                    <h2>We Are Business Consulting & Credit Repair Experts</h2>
                    <p className="first-p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nam quia nobis praesentium, ut in fuga facere quasi nulla, eum aliquam reiciendis asperiores exercitationem!</p>
                    <p className="second-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum doloremque iusto beatae perferendis.</p>
                    <div className="flex">
                        <Button type="black" title="Learn More" url="/company/learnmore" />
                        <a href="/introvideo">
                            <div className="btn-video">
                                <i className="fa-sharp fa-solid fa-play"></i>
                            </div>
                            <p>Intro Video</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default AboutCompany