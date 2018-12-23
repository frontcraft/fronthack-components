import React from 'react'
import './style.sass'

const NavVertical = ({ links }) =>
  <nav className='nav-vertical'>
    {links.map((link, index) => (
      <a href={link.url} key={index} className='nav-vertical__link'>{link.label}</a>
    ))}
  </nav>

export default NavVertical
