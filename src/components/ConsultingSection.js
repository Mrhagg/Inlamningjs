import React from 'react'
import './ConsultingSection.css'
import img_Linemiddle from '../Assets/Images/linemiddleri.svg'

const ConsultingSection = () => {
  return (
     <section className="consulting">
      <img className="linemiddle" src={img_Linemiddle} alt="" />
      <div className="container">
        <div className="container-texts">
          <h6>Our Services</h6>
          <h3>We Provide The Best Services For Consulting</h3>
        </div>
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
      <a className="btn-black"href="Learn more.html">Browse Services<i className="fa-solid fa-arrow-up-right"></i></a>
      
    </section>
  )
}

export default ConsultingSection