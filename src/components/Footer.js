import React from 'react'
import './Footer.css'
import SocialMedia from './Extras/SocialMedia'

const Footer = () => {
  return (
    <footer className="end">
      <div className="container">
        <p>
          &copy; 2023 Crito - consulting inc. All rights Reserved.
        </p>
        <div className="social-media2">
          <SocialMedia />
        </div>
      </div>
    </footer>
  )
}
export default Footer