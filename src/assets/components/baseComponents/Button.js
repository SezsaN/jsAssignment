import React from 'react'

const Button = ({type, title, url}) => {
  
  const buttonType = () => {
    switch (type) {
        case 'yellow': 
            return 'btn-yellow'
        case 'black':
            return 'btn-black'
        case 'transparent':
            return 'btn-transparent'
        case 'video':
            return 'btn-video'
        default:
            return 'btn-browse-team'               
    }
  }
  
  
  
    return (

        <a className={buttonType()} href={url}>{title} <i className="fa-regular fa-arrow-up-right"></i></a>
  )
}

export default Button