import React from 'react'

import './FormsSection.css'

const FormsSection = () => {
  return (
    <section class="message-container">
      <div class="Text1">
        <h1>
          <span>Leave us a message</span>
          <span>for any information.</span>
        </h1>
      </div>
      <div />
      <form>
        <input type="text" placeholder="Name*"/>
      </form>
      <form>
        <input class="input2" type="text" placeholder="Email*"/>
      </form>
      <form>
        <input class="input3" type="text" placeholder="Your Message*"/>
      </form>
      <button class="btn-yellow">Send message<i class="fa-solid fa-arrow-up-right"></i></button>
</section>
  )
}

export default FormsSection