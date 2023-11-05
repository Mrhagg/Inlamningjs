import React from 'react'

const Membersimg = ({ image, text, title, description }) => {
  return (
    <article className="members-img">
    <img src = {image} alt="" />
    <h3>{title}</h3>
    <p>{text}</p>
    <h6>{description}</h6>
  </article>
  )
}

export default Membersimg