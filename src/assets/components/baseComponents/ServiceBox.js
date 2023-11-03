import React from 'react'

const ServiceBox = ({title, description, url}) => {
  return (
    <div className="service-box">
        <div className="small-line"></div>    
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={url}><i className="fa-light fa-arrow-right"></i></a>
    </div>
  )
}

export default ServiceBox