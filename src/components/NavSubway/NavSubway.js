import React from 'react'
import PropTypes from 'prop-types'
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

NavSubway.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
}

export default NavSubway
