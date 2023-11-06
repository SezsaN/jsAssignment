import React from 'react'

const WhyChooseUsBox = ({icon, title, description}) => {
    return (
        <>
            <div className="process">
                <i className={icon}></i>
                <h3>{title}</h3>
            </div>
            <p>{description}</p>
        </>
    )
}

export default WhyChooseUsBox