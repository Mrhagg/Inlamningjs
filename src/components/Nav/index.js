import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

import img_Crito from '../../Assets/Images/Crito.svg'
import Button from '../Extras/Button'
import SocialMedia from '../Extras/SocialMedia'
import NavInfo from '../Extras/NavInfo'
import LinkBar from '../Extras/LinkBar'

const Nav = () => {
  return (
    
  <header className="nav-section">
      <div className="container">
        <Link to="/"><img src={img_Crito} alt="" /></Link>
        <div className="top-menu">
          <div className="contact-information">
              <NavInfo />
            <div className="social-media">
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-container">
      <LinkBar />
        <Button className="btn-yellow" title="Login" />
      </div>
  </header>
  )
}

export default Nav