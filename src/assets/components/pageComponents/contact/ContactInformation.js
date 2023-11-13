import React from 'react'

const ContactInformation = () => {
    return (
        <section className="contact-information">
            <div className="container">
                <div className="information">
                    <div className="visit">
                        <a href="#"><i className="fa-sharp fa-solid fa-location-dot"></i></a>
                        <h3>Visit us</h3>
                        <p>Sveavägen 31</p>
                        <p>111 34 StockHolm</p>
                    </div>
                    <div className="call">
                        <a href="#"><i className="fa-sharp fa-solid fa-phone"></i></a>
                        <h3>Call us</h3>
                        <p>+46 (8) 121 470 50</p>
                        <p>+46 (8) 121 470 51</p>
                    </div>
                    <div className="email">
                        <a href="mailto: info@crito.com"><i className="fa-sharp fa-solid fa-envelope"></i></a>
                        <h3>Email us</h3>
                        <p>info@crito.com</p>
                        <p>support@crito.com</p>
                    </div>
                </div>
            </div>    
        </section>
    )
}

export default ContactInformation