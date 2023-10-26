import React from 'react'

const Button = ({className, title}) => {
  return (
    <button className={className}>{title}<i className="fa-solid fa-arrow-up-right"></i></button>
  )
}

export default Button

