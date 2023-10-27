import React from 'react'
import './FinanceSection.css'
import Button from './Extras/Button'
import SectionTitle from './Extras/SectionTitle'
import GridInfo from './Extras/GridInfo'

const FinanceSection = () => {
  return (
    <section className="container-finance">
  <div className="container-text">
    <div className="content">
      <SectionTitle className="content-2"  text="Features" description="Our Accounting is trusted by thousands of companies" />
      <Button className="btn-yellow-3" title="Learn More" />
    </div>
  </div>  
  <div className="container-grid">
      <GridInfo gridicon="fa-sharp fa-regular fa-handshake" title="Business Advice" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
      <GridInfo gridicon="fa-regular fa-lightbulb-on" title="Startup business" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
      <GridInfo gridicon="fa-regular fa-chart-mixed-up-circle-dollar" title="Financial Advice" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
      <GridInfo gridicon="fa-solid fa-box-dollar" title="Risk Managment" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
  </div>
</section>
  )
}

export default FinanceSection