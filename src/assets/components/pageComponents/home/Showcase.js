import React from 'react'
import ManPicture from '../../../images/showcase-picture.png'
import Line from '../../../images/showcase-background-lines.svg'

const Showcase = () => {
  return (
    <>
        <section className="showcase">
        <div className="container">
            <div className="content">
                <h1>We Provide The Best Business Solutions</h1>
                <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                <a className="btn-yellow" href="#">Get Consulting <i className="fa-regular fa-arrow-up-right"></i></a>
                <a className="btn-transparent" href="#">Learn More <i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
            <img src={ManPicture} alt="image of a man in a suit holding a tablet" />
        </div>
        <img class ="background-line" src={Line} alt="background line in showcase section" />
        </section>
    </>
  )
}

export default Showcase