import React from 'react'
import ProjectPaper from '../../../images/project-paper.png'
import ProjectApple from '../../../images/project-apple.png'
import ProjectSupplies from '../../../images/project-supplies.png'
import ProjectLaptop from '../../../images/project-laptop.png'
import Button from '../../baseComponents/Button'

const ProjectAndCase = () => {
  return (
    <>
        <section className="project-and-case">
            <div className="container">
                <div className="section-title">
                    <p>Project & Case Studies</p>
                    <h2>Let’s Looks Our Global Projects</h2>
                </div>
                <div className="projects">
                    <a href="#">
                        <img src={ProjectPaper} alt="two hands holding a businesspaper" />
                        <h3>Grow your business</h3>
                        <div className="read-more">Read More <i className="fa-regular fa-arrow-up-right"></i></div>
                    </a>
                    <a href="#">
                        <img src={ProjectApple} alt="pink apple products on a table with glasses infront" />
                        <h3>Why your client needs a responsive website</h3>
                        <div className="read-more">Read More <i className="fa-regular fa-arrow-up-right"></i></div>
                    </a>   
                    <a href="#">
                        <img src={ProjectSupplies} alt="office supplies on a desk" />
                        <h3>Educate your employees to get better results</h3>
                        <div className="read-more">Read More <i className="fa-regular fa-arrow-up-right"></i></div>
                    </a>   
                    <a href="#">
                        <img src={ProjectLaptop} alt="laptop with business intelligence insights" />
                        <h3>Business insights is a important piece of your business</h3>
                        <div className="read-more">Read More <i className="fa-regular fa-arrow-up-right"></i></div>
                    </a>
                </div>
                <div className="center-content">
                    <Button type="black" title="All Recent Projects" url="/projects" />
                </div>
            </div>
        </section>
    </>
  )
}

export default ProjectAndCase