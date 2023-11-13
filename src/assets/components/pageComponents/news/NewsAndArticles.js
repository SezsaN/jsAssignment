import React from 'react'
import BackroundLine from '../../../images/showcase-background-lines.svg'
import { NavLink } from 'react-router-dom';

const NewsAndArticles = () => {
    return (
        <section className="lets-connect">
            <img src={BackroundLine} alt="lines contact page" />
            <div className="container">
                <div className="connect">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/news">News</NavLink>
                    <h2>News & Articles</h2>
                </div>
            </div>
        </section>
    )
}

export default NewsAndArticles