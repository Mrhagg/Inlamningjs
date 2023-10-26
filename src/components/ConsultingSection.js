import React from 'react'
import './ConsultingSection.css'
import img_Linemiddle from '../Assets/Images/linemiddleri.svg'
import Button from './Extras/Button'
import SectionTitle from './Extras/SectionTitle'

const ConsultingSection = () => {
  return (
     <section className="consulting">
      <img className="linemiddle" src={img_Linemiddle} alt="" />
      <div className="container">
       <SectionTitle className="container-texts" title="Why Choose Us" description="We Provide The Best Service for Consulting" />
        <div className="parent-box">
          <div className="box1">
            <div className="topborder"></div>
            <h3>Business Advice</h3>
            <p> 
              <span>Lorem, ipsum dolor sit amet</span>
              <span>consectetur adipisicing elit.</span>
              <span>Officiis in nam possimus.</span>
            </p>
            <a className="btn-play"href="Business Advice.html"><i className="fa-thin fa-circle-arrow-right"></i></a>
          </div>
          <div className="box2">
            <div className="topborder"></div>
            <h3>Startup Business</h3>
            <p> 
              <span>Lorem, ipsum dolor sit amet</span>
              <span>consectetur adipisicing elit.</span>
              <span>Officiis in nam possimus.</span>
            </p>
            <a className="btn-play"href="Startup Business.html"><i className="fa-thin fa-circle-arrow-right"></i></a>
          </div>
          <div className="box3">
            <div className="topborder"></div>
            <h3>Financial Advice</h3>
            <p> 
              <span>Lorem, ipsum dolor sit amet</span>
              <span>consectetur adipisicing elit.</span>
              <span>Officiis in nam possimus.</span>
            </p>
            <a className="btn-play"href="Financial Advice.html"><i className="fa-thin fa-circle-arrow-right"></i></a>
          </div>
          <div className="box4">
            <div className="topborder"></div>
            <h3>Risk Managment</h3>
            <p> 
              <span>Lorem, ipsum dolor sit amet</span>
              <span>consectetur adipisicing elit.</span>
              <span>Officiis in nam possimus.</span>
            </p>
            <a className="btn-play"href="Risk managment.html"><i className="fa-thin fa-circle-arrow-right"></i></a>
          </div>
        </div>
      </div>
      <Button className="btn-black" title="Browse Services" />
      
    </section>
  )
}

export default ConsultingSection