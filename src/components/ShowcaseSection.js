import React from 'react'
import './NewsSection.css'
import './ShowcaseSection.css'
import Button from './Extras/Button'

import img_linetopleft from '../Assets/Images/linetopleft.svg'
import img_Showcase from '../Assets/Images/Showcase-type.svg'
import SectionTitle from './Extras/SectionTitle'


const ShowcaseSection = () => {
  return (
    <>
  <section className="Showcase">
        <img className="linetopleft" src={img_linetopleft} alt="" />
      <div class ="container">
          <div className="content-text">
            <SectionTitle bigtitle="We Provide The Best Business Solutions" />
            <SectionTitle text="Establish your vision and value proposition and turn them into testable prototypes." />
            <Button className="btn-yellow" title="Get consulting" />
            <Button className="btn-transparent"title="Learn More" />
          </div>
        <img src={img_Showcase} alt="" />
      </div>
  </section>
    </>
  )
}

export default ShowcaseSection