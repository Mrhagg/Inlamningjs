import React from 'react'
import './CompanySection.css'

import img_Samantha from '../Assets/Images/Samantha.svg'

const CompanySection = () => {
  return (
    <div className="container-company">
        <div className="parent-box2">
          <div className="box-blue">
            <h3>
              <span className="name">Samantha Brown,</span><span className="roll">Founder</span>
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit."
              </p>
            </h3>
        </div>
      </div>
      <img src={img_Samantha} alt="" />
      <div className="container-right">
        <aside className="aside-right">
          <h6>About Company</h6>
          <h3>We Are Business Consulting & Credit Repair Experts</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
          <div>
            <a className="btn-black"href="Learn more.html">Learn More<i className="fa-solid fa-arrow-up-right"></i></a>
            <a className="btn-play"href="Intro video.html"><i className="fa-sharp fa-regular fa-circle-play"></i>Intro video</a>
          </div>
        </aside>
        </div>
    </div>
  )
}

export default CompanySection