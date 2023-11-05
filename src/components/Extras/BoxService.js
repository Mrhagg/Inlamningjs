import React from 'react'

const BoxService = ({titel, description, url, className,}) => {
  return (
    <div className={className}>
            <div className="topborder"></div>
            <h3>{titel}</h3>
            <p>{description}</p>
            <div className='link'>
              <a href={url}>
                <i className="fa-thin fa-circle-arrow-right"/>
              </a>
            </div>
    </div>
  )
}

export default BoxService