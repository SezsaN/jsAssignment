import React from 'react'

const ArticleAndNewsBox = ({image, alt, title, description}) => {
    return (
        <div>
            <img className="pic" src={image} alt={alt} />
            <p className="business">Business</p>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default ArticleAndNewsBox