import React from 'react'
import './styles.css'

import img_Linebottom from '../../../../Assets/Images/linebottomr.svg'
import img_Critowhite from '../../../../Assets/Images/critowhite.svg'

const ContactInfo = () => {
  return (
    <section className="info">
    <img className="linebottom" src={img_Linebottom} alt="" />
  <div className="crito">
    <img src={img_Critowhite} alt="" />
    <p>
      <span>Lorem ipsum dolor sit amet consectetur</span>
      <span>adipisicing elit. Placeat obcaecati voluptas</span>
      <span>voluptates! Voluptates laborum nam</span>
      <span>ratione minus necessitatibus, iure</span>
      <span>praesentium.</span>
    </p>
  </div>
  <div className="information">
    <div className="links">
      <ul>
        <h4>Company</h4>
        <p>About</p>
        <p>Features</p>
        <p>Works</p>
        <p>Career</p>
      </ul>
      <ul>
        <h4>Help</h4>
        <p>Customer Support</p>
        <p>Delivery Details</p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
      </ul>
      <ul>
        <h4>Resources</h4>
        <p>Free eBooks</p>
        <p>Development Tutorial</p>
        <p>How to-Blog</p>
        <p>Youtube Playlist</p>
      </ul>
      <ul>
        <h4>Link</h4>
        <p>Free eBooks</p>
        <p>Development Tutorial</p>
        <p>How to-Blog</p>
        <p>Youtube Playlist</p>
      </ul>
    </div>
  </div>
  </section>
  )
}

export default ContactInfo