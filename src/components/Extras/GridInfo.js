import React from 'react'

const GridInfo = ({title, text, gridicon}) => {
  return (
    <div className="grid-info">
        <i className={gridicon}></i>
        <h3>{title}</h3>
        <p> {text}</p>
    </div>
  )
}

export default GridInfo