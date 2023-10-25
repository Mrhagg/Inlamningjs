import React from 'react'
import './NewsSection.css'
import './ShowcaseSection.css'

import img_linetopleft from '../Assets/Images/linetopleft.svg'
import img_Showcase from '../Assets/Images/Showcase-type.svg'

const ShowcaseSection = () => {
  return (
    <>
      <section className="Showcase">
  <img className="linetopleft" src={img_linetopleft} alt="" />
    <div class ="container">
          <div className="content-text">
            <h1>We Provide The Best Business
            Solutions</h1>
            <p>Establish your vision and value proposition and turn them into testable prototypes.
            </p>
            <a className="btn-yellow"href="consulting.html">Get consulting<i className="fa-solid fa-arrow-up-right"></i></a>
            <a className="btn-transparent"href="services.html">Learn More<i className="fa-solid fa-arrow-up-right"></i></a>
        </div>
        <img Src={img_Showcase} alt="" />
    </div>
</section>
    </>
  )
}

export default ShowcaseSection