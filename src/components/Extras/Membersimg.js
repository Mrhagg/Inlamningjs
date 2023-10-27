import React from 'react'

const Membersimg = ({ className, text, title, description }) => {
  return (
    <article className="members-img">
    <img src={className} alt="" />
    <h3>{title}</h3>
    <p>{text}</p>
    <h6>{description}</h6>
  </article>
  )
}

export default Membersimg