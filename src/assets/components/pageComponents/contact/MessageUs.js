import React from 'react'
import Button from '../../baseComponents/Button'

const MessageUs = () => {
    return (
        <section className="message-us">
            <div className="container">
                <div className="box"></div>
                <div className="title">
                    <h2>Leave us a message</h2>
                    <h2>for any information.</h2>
                </div>
                <div className="user-information">
                    <form action="#">
                        <input method="post" type="text" name="name" placeholder="Name*"></input>
                        <input method="post" type="email" name="email" placeholder="Email*"></input>
                        <textarea method="post" name="message" placeholder="Your message*"></textarea>
                    </form>
                    <Button type="yellow" title="Send Message" url="/sendmessage" />
                </div>
            </div>
        </section>
    )
}

export default MessageUs

                        

