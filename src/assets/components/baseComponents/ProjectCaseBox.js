import React from 'react'

const ProjectCaseBox = ({image, alt, title,}) => {
    return (
        <div>
            <a href="#">
                <img src={image} alt={alt} />
                <h3>{title}</h3>
                <div className="read-more">Read More <i className="fa-regular fa-arrow-up-right"></i></div>
            </a>
        </div>
    )
}

export default ProjectCaseBox
