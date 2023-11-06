import React from 'react'
import ChooseUsBox from '../../../images/choose-us-box.png'
import ChooseUsPeople from '../../../images/choose-us-people.svg'
import WhyChooseUsBox from '../../baseComponents/WhyChooseUsBox'

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
                            <WhyChooseUsBox icon="fa-light fa-thumbs-up" title="Process Excellence" description="Lorem, ipsum dolor sit amet consectetur." />
                            <WhyChooseUsBox icon="fa-light fa-gem" title="Strategic Planning" description="Lorem, ipsum dolor sit amet consectetur." />
                            <WhyChooseUsBox icon="fa-sharp fa-light fa-pen-nib" title="Experience Design" description="Lorem, ipsum dolor sit amet consectetur." />
                            <WhyChooseUsBox icon="fa-light fa-head-side-gear" title="Artificial Intelligence" description="Lorem, ipsum dolor sit amet consectetur." />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyChooseUs