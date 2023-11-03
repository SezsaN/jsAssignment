import React from 'react'
import UpdateLine from '../../../images/update-line-right.svg'
import Button from '../../baseComponents/Button'

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
                    <Button type="yellow" title="Subscribe" url="/subscribe" />
                </form>
            </div>
            </div>
        </section>
    </>
  )
}

export default NewsAndUpdates