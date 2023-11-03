import React from 'react'
import UpdateLine from '../../../images/update-line-right.svg'

const NewsAndUpdates = () => {
  return (
    <>
        <section className="news-and-updates">
            <img src={UpdateLine} alt="swirly lines right" />
            <div className="container">
            <div className="updates">
                <h2>Get News Updates By Signup</h2>
                <form action="#" method="post">
                    <input type="email" id="email" name="email" title="email-adress" placeholder="username@domain.com" />
                    <a className="btn-yellow" href="#">Subscribe <i className="fa-regular fa-arrow-up-right"></i></a>
                </form>
            </div>
            </div>
        </section>
    </>
  )
}

export default NewsAndUpdates