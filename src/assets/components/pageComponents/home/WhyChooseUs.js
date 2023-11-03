import React from 'react'
import ChooseUsBox from '../../../images/choose-us-box.png'
import ChooseUsPeople from '../../../images/choose-us-people.svg'

const WhyChooseUs = () => {
  return (
    <>
        <section className="why-choose-us">
            <div className="box">
                <img src={ChooseUsBox} alt="beige box" />
            </div>
            <div className="container">
                <img src={ChooseUsPeople} alt="two people talking and sitting by a table" />

                <div className="content-left">
                    <div className="title-text">
                        <p className="title">Why Choose Us</p>
                        <h2>Why We Are The Best Business Consulting Agency</h2>
                    </div>
                    <div className="topics">
                        <div className="process">
                            <i className="fa-light fa-thumbs-up"></i>
                            <h3>Process Excellence</h3>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        <div className="strategic">
                            <i className="fa-light fa-gem"></i>
                            <h3>Strategic Planning</h3>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        <div className="experience">
                            <i className="fa-sharp fa-light fa-pen-nib"></i>
                            <h3>Experience Design</h3>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        <div className="artificial">
                            <i className="fa-light fa-head-side-gear"></i>
                            <h3>Artificial Intelligence</h3>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default WhyChooseUs