import React from 'react'
import './AgencySection.css'

import img_Twogirls from '../Assets/Images/girls.svg'
import SectionTitle from './Extras/SectionTitle'

const AgencySection = () => {
  return (
<section className="container-agency">
<SectionTitle className="text6" title="Why Choose Us"/>
<SectionTitle className="container-text4" description="Why We Are The Best Business Consulting Agency" />
<div className="grid-container">
  <div className="grid-item">
    <div className="icon">
      <i className="fa-light fa-thumbs-up"></i>
    </div>
    <div className="text">
      <h3>Process Excellence</h3>
      <p>Lorem, ipsum dolor sit amet consectetur</p>
    </div>
  </div>
  <div className="grid-item">
    <div className="icon">
      <i className="fa-solid fa-chess-knight-piece"></i>
    </div>
    <div className="text">
      <h3>Strategic Planning</h3>
      <p>Lorem, ipsum dolor sit amet consectetur</p>
  </div>
  </div>
    <div className="grid-item">
      <div className="icon">
        <i className="fa-sharp fa-solid fa-crown"></i>
      </div>
      <div className="text">
        <h3>Experience Design</h3>
        <p>Lorem, ipsum dolor sit amet consectetur</p>
    </div>
    </div>
      <div className="grid-item">
        <div className="icon">
          <i className="fa-regular fa-head-side-brain"></i>
        </div>
        <div className="text">
          <h3>Artificial Inteligence</h3>
          <p>Lorem, ipsum dolor sit amet consectetur</p>
        </div>
      </div>
</div>
<div className="parent-box3">
  <div className="box-brown">
  <div>
    <p>'</p>
  </div>
  </div>
  </div>
  <img className="image-girls" src= {img_Twogirls} alt="" />
</section>

  )
}

export default AgencySection