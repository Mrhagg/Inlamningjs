import React from 'react'

import img_Backgroundlines from '../Assets/Images/Linesmallri.svg'

const NewSection = () => {
  return (
          <section class="newsletter">
        <img class="background-lines-right" src={img_Backgroundlines} alt="" />
        <div class="container">
          <h2>Get News Updates By Signup</h2>
          <form>
              <input type="text" placeholder="Username@domain.com" />
              <button class="btn-yellow">Subscribe <i class="fa-solid fa-arrow-up-right"></i></button>
          </form>
      </div>
      </section>
  )
}

export default NewSection