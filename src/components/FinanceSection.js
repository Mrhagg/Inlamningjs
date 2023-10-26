import React from 'react'
import './FinanceSection.css'
import Button from './Extras/Button'
import SectionTitle from './Extras/SectionTitle'

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
      <div>
        <i className="fa-sharp fa-regular fa-handshake"></i>
        <h3>Business advice</h3>
        <p>
          <span>Lorem ipsum, dolor sit amet</span>
          <span>consectetur adipisicing elit.</span>
        </p>
      </div>
      <div>
        <i className="fa-regular fa-lightbulb-on"></i>
        <h3>Startup business</h3>
        <p>
          <span>Lorem ipsum, dolor sit amet</span>
          <span>consectetur adipisicing elit.</span>
        </p>
      </div>
      <div>
        <i className="fa-regular fa-chart-mixed-up-circle-dollar"></i>
        <h3>Financial Advice</h3>
        <p>
          <span>Lorem ipsum, dolor sit amet</span>
          <span>consectetur adipisicing elit.</span>
        </p>
      </div>
      <div>
        <i className="fa-solid fa-box-dollar"></i>
        <h3>Risk Managment</h3>
        <p>
          <span>Lorem ipsum, dolor sit amet</span>
          <span>consectetur adipisicing elit.</span>
        </p>
      </div>
  </div>
</section>
  )
}

export default FinanceSection