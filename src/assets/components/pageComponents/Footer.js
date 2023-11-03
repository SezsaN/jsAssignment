import React from 'react'
import CritoLogo from '../../images/crito-logo-dark.svg'
import LineRight from '../../images/footer-line-right.svg'

const Footer = () => {
  return (
    <>
    <section className="crito-footer-top">
    <div className="footer-line">
        <img src={LineRight} alt="footer lines right" />
    </div>
    <div className="container">
        <div className="content-top">
            <div>
                <img src={CritoLogo} alt="crito logotype" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
            </div>
            <div>
                <h3>Company</h3>
                <a href="#">About</a>
                <a href="#">Features</a>
                <a href="#">Works</a>
                <a href="#">Career</a>
            </div>
            <div>
                <h3>Help</h3>
                <a href="#">Costumer Support</a>
                <a href="#">Delivery Details</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Privacy Policy</a>
            </div>
            <div>
                <h3>Resources</h3>
                <a href="#">Free eBooks</a>
                <a href="#">Development Tutorial</a>
                <a href="#">How to - Blog</a>
                <a href="#">Youtube Playlist</a>
            </div>
            <div>
                <h3>Link</h3>
                <a href="#">Free eBooks</a>
                <a href="#">Development Tutorial</a>
                <a href="#">How to - Blog</a>
                <a href="#">Youtube Playlist</a>
            </div>
        </div>
    </div>
</section>
    <section className="crito-footer-bottom">
    <div className="container">
        <div className="content-bottom">
            <p>&copy 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
            <p className="mobile">&copy 2023 Crito.</p>
            <div className="social-media">
                <a href="https://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="https://instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default Footer