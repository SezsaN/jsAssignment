import React from 'react'

const MeetOurTeamBox = ({image, alt, title, description}) => {
    return (
        <div>
            <img src={image} alt={alt} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default MeetOurTeamBox
