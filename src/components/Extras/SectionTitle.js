import React from 'react'

const SectionTitle = ({title, description, className, text, bigtitle}) => {
  return (
    <div className={className}>
      {text && <p>{text}</p>}
      {title && <h6>{title}</h6>}
      {description && <h3>{description}</h3>}
      {bigtitle && <h1>{bigtitle}</h1>}
    </div>
  )
}

export default SectionTitle