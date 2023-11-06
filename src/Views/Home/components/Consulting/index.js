import React from 'react'
import './styles.css'
import img_Linemiddle from '../../../../Assets/Images/linemiddleri.svg'
import Button from '../../../../components/Extras/Button'
import SectionTitle from '../../../../components/Extras/SectionTitle'
import BoxService from '../../../../components/Extras/BoxService'

const Consulting = () => {
  return (
    <section className="consulting-section" style={{backgroundImage: 'url(' + img_Linemiddle + ')', backgroundPosition: 'bottom right', backgroundRepeat: 'no-repeat'}}>
      <div className="consulting-container">
       <SectionTitle className="container-texts" title="Why Choose Us" description="We Provide The Best Service for Consulting" />
        <div className="parent-box">
          <BoxService className="white" titel="Business Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus" url="/services/businessadvice" />
          <BoxService className="yellow" titel="Startup Business" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus" url="/services/startupbusiness" />
          <BoxService className="white" titel="Financial Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus" url="/services/financialadvice" />
          <BoxService className="white" titel="Risk managment" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus" url="/services/riskmanagment" />
        </div>
        <Button className="btn-black" title="Browse Services" />
      </div>
    </section>
  )
}

export default Consulting