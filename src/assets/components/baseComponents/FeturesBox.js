import React from 'react'

const FeturesBox = ({ icon, title, description }) => {
    return (

        <div className="features-box">
            <i className={icon}></i>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>

    )
}

export default FeturesBox