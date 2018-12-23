import React from 'react'
import './style.sass'

const NavSubway = ({ links }) =>
  <nav className='nav-subway'>
    {links.map((link, index) =>
      <div className='nav-subway__item' key={index}>
        <div className='nav-subway__station' />
        <a href={link.url} className='nav-subway__link'>{link.label}</a>
      </div>
    )}
  </nav>

export default NavSubway
