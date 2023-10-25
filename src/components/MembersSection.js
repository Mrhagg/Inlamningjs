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

const MembersSection = () => {
  return (
      <section className="Team-members">
    <div className="container">
      <div className="titel">
        <p>Meet Our Team</p>
        <h2>Experience Team Members</h2>
          <a className="btn-black"href="browse.html">Browse Teams<i className="fa-solid fa-arrow-up-right"></i></a>
      </div>
      <div className="members">
        <article>
          <img src={img_Kristine} alt="" />
          <h3>Kristine Palmer</h3>
          <p>Chef Operation Officer</p>
        </article>
        <article>
          <img src={img_Mark} alt="" />
          <h3>Mark Aubri</h3>
          <p>Senior Consultant</p>
        </article>
        <article>
          <img src={img_Kimberly} alt="" />
          <h3>Kimberly Hansen</h3>
          <p>Senior Consultant</p>
        </article>
        <article>
          <img src= {img_Justin} alt="" />
          <h3>Justin Willoman</h3>
          <p>Senior Tech Consultant</p>
        </article>
      </div>
      <img className="dot-image" src={img_Dotyellow} /> 
      </div>
    <div />
      <section className="container-client">
        <div className="titel-box">
            <p>Testimonial</p>
            <h3>What our Client Says</h3>
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
        <a className="btn-black"href="All Reviews.html">All Reviews<i className="fa-solid fa-arrow-up-right"></i></a>
      </section>
  </section>
  )
}

export default MembersSection