import React from 'react'
import './ConnectSection.css'

import img_linetopleft from '../Assets/Images/linetopleft.svg'

const ConnectSection = () => {
  return (
    <section class="connect">
  <img class="linetopleft" src={img_linetopleft} alt="" />
  <div class="main-text">
    <p>Home</p>
    <p>Contact</p>
    <h1>Let's Connect</h1>
  </div>
</section>
  )
}

export default ConnectSection