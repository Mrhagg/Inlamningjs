import React from 'react'

import './FormsSection.css'
import Button from './Extras/Button'

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
      <Button className="btn-yellow" title="Send Message" />
</section>
  )
}

export default FormsSection