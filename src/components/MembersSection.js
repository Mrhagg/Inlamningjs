import React from 'react'
import './MembersSection.css'

import img_Kristine from '../Assets/Images/Kristine.svg'
import img_Mark from '../Assets/Images/Mark.svg'
import img_Kimberly from '../Assets/Images/Kimberly.svg'
import img_Justin from '../Assets/Images/Justin.svg'
import img_Dotyellow from '../Assets/Images/Dot-yellow.svg'
import img_Star from '../Assets/Images/Star.svg'
import img_Cass from '../Assets/Images/Cass.svg'
import img_Amanda from '../Assets/Images/Amanda.svg'
import img_Jack from '../Assets/Images/Jack.svg'
import Button from './Extras/Button'
import SectionTitle from './Extras/SectionTitle'
import Membersimg from './Extras/Membersimg'

const MembersSection = () => {
  return (
      <section className="Team-members">
    <div className="container">
      <div className="titel">
        <SectionTitle text="Meet Our Team" description="Experience Team Members" />
          <Button className="btn-black-2" title="Browse team" />
      </div>
      <div className="members">
        <Membersimg className={img_Kristine} title="Kristine Palmer" text="Chef Operation Officer" />
        <Membersimg className={img_Mark} title="Mark Aubri" text="Senior Consultant" />
        <Membersimg className={img_Kimberly} title="Kimberly Hansen" text="Senior Consultant" />
        <Membersimg className={img_Justin} title="Justin Willoman" text="Senior Tech Consultant" />
      </div>
      <img className="dot-image" src={img_Dotyellow} /> 
      </div>
    <div />
      <section className="container-client">
        <div className="titel-box">
            <SectionTitle text="Testimonial" description="What Our Client Says" />
        </div>
        <div className="clients">
          <article>
            <img src={img_Star} className="image1" /> 
            <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
              <img src={img_Cass} className="image2" /> 
            <h3>Cassandra Warren</h3>
            <h6>Business Manager, Dorfus</h6>
          </article>
          <article>
            <img src={img_Star} className="image1" /> 
            <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
            <img src={img_Amanda} className="image2" /> 
            <h3>Amanda Tulling</h3>
            <h6>Senior Developer, Square</h6>
          </article>
          <article>
            <img src={img_Star} className="image1" /> 
            <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
            <img src={img_Jack} className="image2" /> 
            <h3>Jack Mcdogglas</h3>
            <h6>Key Account Manager, Gobona</h6>
          </article>
        </div>
        <Button className="btn-black" title="All reviews" />
      </section>
  </section>
  )
}

export default MembersSection