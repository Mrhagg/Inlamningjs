import React from 'react'

const Button = ({ className, title, type, onClick }) => {
  return (
    <button className={className} onClick={onClick} type={type}>{title}<i className="fa-solid fa-arrow-up-right"></i></button>
  )
}

export default Button

