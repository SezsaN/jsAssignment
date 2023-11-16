import React from 'react'
import Logo from '../../images/crito-logotype.svg'
import Button from '../baseComponents/Button'
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    
    <header>
        <div className="container" >
            <a href="index.html"><img src={Logo} alt="crito logotype" /></a>
            <button className="menu-bars"><i className="fa-solid fa-bars"></i></button>
            <div className="menu" >
                <div className="top-menu">
                    <div className="contact-information">
                        <div className="contact-box">
                            <i className="fa-regular fa-phone-volume"></i>
                            +46 (8) 121 470 50
                        </div>
                        <div className="contact-box">
                            <a href="mailto: info@crito.com">
                            <i className="fa-regular fa-envelope"></i>                           
                            info@crito.com
                        </a>
                        </div>
                        <div className="contact-box last">
                            <i className="fa-regular fa-location-dot"></i>
                            Sveavägen 21, 111 34 STOCKHOLM
                        </div>
                    </div>
                    <div className="social-media">
                        <a href="https://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                        <a href="https://instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>  
                <div className="bottom-menu">
                    <nav>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/news">Service</NavLink>
                        <NavLink to="/news">News</NavLink>
                        <NavLink to="/contact">Contacts</NavLink>
                    </nav>
                    <Button type="yellow" title="Login" url="/login"/>
                </div>
            </div> 
        </div>
    </header>
  )
}

export default Header