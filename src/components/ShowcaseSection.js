import React from 'react'
import './NewsSection.css'
import './ShowcaseSection.css'
import Button from './Extras/Button'

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
            <Button className="btn-yellow" title="Get consulting" />
            <Button className="btn-transparent"title="Learn More" />
        </div>
        <img Src={img_Showcase} alt="" />
    </div>
</section>
    </>
  )
}

export default ShowcaseSection