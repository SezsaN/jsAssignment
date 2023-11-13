import React from 'react'

const OurClientsBox = ({description, title, pos, image, alt}) => {
    return (
        <div>
            <span className="fa-solid fa-star"></span>
            <span className="fa-solid fa-star"></span>
            <span className="fa-solid fa-star"></span>
            <span className="fa-solid fa-star"></span>
            <span className="fa-solid fa-star"></span>
            <p>{description}</p>
            <h3>{title}</h3>
            <p className="positions">{pos}</p>
            <img src={image} alt={alt} />
        </div>
    )
}

export default OurClientsBox