import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'

const NavVertical = ({ links }) =>
  <nav className='nav-vertical'>
    {links.map((link, index) => (
      <a href={link.url} key={index} className='nav-vertical__link'>{link.label}</a>
    ))}
  </nav>

NavVertical.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
}

export default NavVertical
