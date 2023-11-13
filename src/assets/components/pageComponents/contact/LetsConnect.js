import React from 'react'
import BackroundLine from '../../../images/showcase-background-lines.svg'
import { NavLink } from 'react-router-dom';

const LetsConnect = () => {
    return (
        <section className="lets-connect">
            <img src={BackroundLine} alt="lines contact page" />
                <div className="container">
                    <div className="connect">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/contact">Contacts</NavLink>
                        <h2>Let’s Connect</h2>
                    </div>
                </div>
        </section>
    )
}

export default LetsConnect