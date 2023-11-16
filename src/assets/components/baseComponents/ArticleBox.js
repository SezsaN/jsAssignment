import React from 'react'
import { Link } from 'react-router-dom'

const ArticleBox = ({id, title, author, content, month, day,  imageUrl}) => {
  return (
  
    
        
            <Link key={id} to={`/news/${id}`}>
                <img src={imageUrl} alt="bild" />
                <h3>{title}</h3>
                <p>{author}</p>
                <p>{content}</p>
                <div className="date-box">
                    <p className="day">{day}</p>
                    <p className="month">{month}</p>
                </div>
            </Link>
      )
    }
    
export default ArticleBox
      

               

