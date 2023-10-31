import React from 'react'

import img_Backgroundlines from '../Assets/Images/Linesmallri.svg'
import Button from './Extras/Button'

const NewSection = () => {
  return (
          <section className="newsletter">
        <img className="background-lines-right" src={img_Backgroundlines} alt="" />
        <div className="container">
          <h2>Get News Updates By Signup</h2>
          <form>
              <input type="text" placeholder="Username@domain.com" />
              <Button className="btn-yellow" title="Subscribe" />
          </form>
      </div>
      </section>
  )
}

export default NewSection