import React from 'react'
import PropTypes from 'prop-types'
import bemCx from 'bem-modifiers'
import './style.sass'


const NavHorizontal = ({ links, className }) =>
  <nav className={bemCx('nav-horizontal', {}, className)}>
    {links.map((link, index) => (
      <a href={link.url} key={index} className={bemCx(
        'nav-horizontal__link',
        {},
        { 'is-active': window.location.pathname.startsWith(link.url) }
      )}>{link.label}</a>
    ))}
  </nav>

NavHorizontal.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
}

export default NavHorizontal
