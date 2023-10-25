import React from 'react'
import './NavSection.css'

import img_Crito from '../Assets/Images/Crito.svg'

const NavSection = () => {
  return (
    
    <header className="nav-section">
    <div className="container">
      <img src={img_Crito} alt="" />
        <div className="top-menu">
          <div className="contact-information">
            <div className="contact-box">
              <i className="fa-regular fa-phone-volume"></i>
              +46 (8) 121 470 50
            </div>
            <div className="contact-box">
              <i className="fa-light fa-envelope-dot"></i>
              info@crito.com
            </div>
            <div className="contact-box">
              <i className="fa-sharp fa-light fa-location-dot"></i>
              Sveavägen 31, 111 34 Stockholm
            </div>
          <div />
          <div className="social-media">
            <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
        </div>
    </div>
    <div className="bottom-container">
      <nav>
        <a className="active"href="home.html">Home</a>
        <a href="services.html">Service</a>
        <a href="news.html">News</a>
        <a href="contacts.html">Contact</a>
      </nav>
      <button>Login<i className="fa-solid fa-arrow-up-right"></i>
      </button>
    </div>
    <div />
  </header>
  )
}

export default NavSection