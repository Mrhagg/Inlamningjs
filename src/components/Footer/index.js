import React from 'react'
import './styles.css'
import SocialMedia from '../Extras/SocialMedia'

const Footer = ({text}) => {
  return (
    <footer className="end">
      <div className="container">
        <p>
          {text}
        </p>
        <div className="social-media2">
          <SocialMedia />
        </div>
      </div>
    </footer>
  )
}
export default Footer