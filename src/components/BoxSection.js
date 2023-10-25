import React from 'react'
import './BoxSection.css'

import img_Paperz from '../Assets/Images/paperz.svg'
import img_dorfus from '../Assets/Images/Dorfus (1).svg'
import img_martino from '../Assets/Images/Martino.svg'
import img_square from '../Assets/Images/Square.svg'
import img_gobona from '../Assets/Images/Gobona.svg'

const BoxSection = () => {
  return (
    <div className="parent-box">
      <div className="box"><img src={img_Paperz} /></div>
      <div className="box"><img src={img_dorfus} /></div>
      <div className="box"><img src={img_martino} /></div>
      <div className="box"><img src={img_square} /></div>
      <div className="box"><img src={img_gobona} /></div>
    </div>
  )
}

export default BoxSection