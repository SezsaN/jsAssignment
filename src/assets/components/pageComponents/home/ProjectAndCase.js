import React from 'react'
import ProjectPaper from '../../../images/project-paper.png'
import ProjectApple from '../../../images/project-apple.png'
import ProjectSupplies from '../../../images/project-supplies.png'
import ProjectLaptop from '../../../images/project-laptop.png'
import Button from '../../baseComponents/Button'
import ProjectCaseBox from '../../baseComponents/ProjectCaseBox'

const ProjectAndCase = () => {

    const projects = [
        { image: ProjectPaper, alt: "two hands holding a business paper", title: "Grow your business" },
        { image: ProjectApple, alt: "pink apple products", title: "Why your clients need a responsive website" },
        { image: ProjectSupplies, alt: "office supplies on a desk", title: "Educate your employees to get better results" },
        { image: ProjectLaptop, alt: "laptop on a desk", title: "Business insights is a important piece of your business" }
    ]



    return (
        <>
            <section className="project-and-case">
                <div className="container">
                    <div className="section-title">
                        <p>Project & Case Studies</p>
                        <h2>Let’s Looks Our Global Projects</h2>
                    </div>
                    <div className="projects">
                        {
                            projects.map((project, index,) => (
                                <ProjectCaseBox key={index} image={project.image} alt={project.alt} title={project.title} />
                            ))
                        }
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