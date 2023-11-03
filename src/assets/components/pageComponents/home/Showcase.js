import React from 'react'
import ManPicture from '../../../images/showcase-picture.png'
import Line from '../../../images/showcase-background-lines.svg'
import Button from '../../baseComponents/Button'

const Showcase = () => {
  return (
    <>
        <section className="showcase">
        <div className="container">
            <div className="content">
                <h1>We Provide The Best Business Solutions</h1>
                <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                <Button type="yellow" title="Get Consulting" url="/consulting"/>
                <Button type="transparent" title="Learn More" url="/learnmore"/>
            </div>
            <img src={ManPicture} alt="image of a man in a suit holding a tablet" />
        </div>
        <img class ="background-line" src={Line} alt="background line in showcase section" />
        </section>
    </>
  )
}

export default Showcase