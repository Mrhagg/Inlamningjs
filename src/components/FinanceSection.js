import React from 'react'
import './FinanceSection.css'

const FinanceSection = () => {
  return (
    <section className="container-finance">
  <div className="container-text">
    <div className="content-2">
      <p>Features</p>
      <h2>
        <span>Our Accounting is</span>
        <span>Trusted by Thousands</span>
        <span>Of companies</span>
      </h2>
      <a className="btn-yellow-3"href="Get consulting.html">Learn More<i className="fa-solid fa-arrow-up-right"></i></a>
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