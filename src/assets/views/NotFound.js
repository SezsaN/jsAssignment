import React from 'react'
import Button from '../components/baseComponents/Button'
import NotFoundimg from '../images/notfound.png'

const NotFound = () => {
  return (
    <section className="not-found">
        <img src={NotFoundimg} alt="404 page not found" />
        
            <div className="text">
                <h1>404 Page not found</h1>
                <h3>Please come back later</h3>
            </div>
            <div className="home">
                <Button type="yellow" title="Go back to home" url="/" />
            </div>
        
        
    </section>
  )
}

export default NotFound
