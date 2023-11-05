import React from 'react'
import './styles.css'

const Message = () => {
  return (
    <section className="contact-container">
    <div className="box">
      <div><i className="fa-solid fa-location-dot"></i>
        <h4>Visit us</h4>
        <p>
          <span>Sveavägen 31</span>
          <span>111 34 STOCKHOLM</span>
        </p>
      </div>
    </div>
    <div className="box">
      <div><i className="fa-solid fa-circle-phone"></i>
        <h4>Call us</h4>
        <p>
          <span>+46 (8) 121 470 50</span>
          <span>+46 (8) 121 470 51</span>
        </p>
      </div>
    </div>
      <div className="box">
        <div><i className="fa-solid fa-circle-envelope"></i>
          <h4>Email us</h4>
          <p>
            <span>info@crito.com</span>
            <span>support@crito.com</span>
          </p>
        </div>
        </div>
    </section>
  )
}

export default Message