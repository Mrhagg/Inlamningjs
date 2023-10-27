import React from 'react'

const SectionTitle = ({title, description, className, text, bigtitle}) => {
  return (
    <div className={className}>
      <p>{text}</p>
      <h6>{title}</h6>
      <h3>{description}</h3>
      <h1>{bigtitle}</h1>
    </div>
  )
}

export default SectionTitle