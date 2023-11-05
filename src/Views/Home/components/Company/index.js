import React from 'react'
import './styles.css'

import img_Samantha from '../../../../Assets/Images/Samantha.svg'
import Button from '../../../../components/Extras/Button'
import SectionTitle from '../../../../components/Extras/SectionTitle'

const Company = () => {
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
          <SectionTitle title="About Company" description="We Are Business Consulting & Credit Repair Experts" />
          <SectionTitle text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos." />
          <SectionTitle text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet." />
          <div>
            <Button className="btn-black" title="Learn More" />
            <a className="btn-play" href="Intro video.html">
              <i className="fa-sharp fa-regular fa-circle-play"/>
                Intro video
            </a>
          </div>
        </aside>
        </div>
    </div>
    
  )
}

export default Company