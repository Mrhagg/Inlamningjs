import React from 'react'
import './ConsultingSection.css'
import img_Linemiddle from '../Assets/Images/linemiddleri.svg'
import Button from './Extras/Button'
import SectionTitle from './Extras/SectionTitle'
import BoxService from './Extras/BoxService'

const ConsultingSection = () => {
  return (
    <section className="consulting">
      <img className="linemiddle" src={img_Linemiddle} alt="" />
      <div className="container">
       <SectionTitle className="container-texts" title="Why Choose Us" description="We Provide The Best Service for Consulting" />
        <div className="parent-box">
         <BoxService className="box1" titel="Business Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus" url="/services/businessadvice" />
         <BoxService className="box2" titel="Business Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus" url="/services/startupbusiness" />
         <BoxService className="box3" titel="Business Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus" url="/services/financialadvice" />
         <BoxService className="box4" titel="Business Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus" url="/services/riskmanagment" />
      </div>
      </div>
      <Button className="btn-black" title="Browse Services" />
    </section>
  )
}

export default ConsultingSection