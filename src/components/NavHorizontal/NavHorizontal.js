import React from 'react'
import bemCx from 'bem-modifiers'
import './style.sass'


const NavHorizontal = ({ links, className }) =>
  <nav className={bemCx('nav-horizontal', {}, className)}>
    {links.map((link, index) => (
      <a href={link.url} key={index}>
        <a className={bemCx(
          'nav-horizontal__link',
          {},
          { 'is-active': window.location.pathname.startsWith(link.url) }
        )}>{link.label}</a>
      </a>
    ))}
  </nav>

export default NavHorizontal
