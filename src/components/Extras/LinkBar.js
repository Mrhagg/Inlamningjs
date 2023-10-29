import React from 'react'
import { NavLink } from 'react-router-dom'

const LinkBar = () => {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Service</NavLink>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/contacts">Contact</NavLink>
    </nav>
  )
}

export default LinkBar