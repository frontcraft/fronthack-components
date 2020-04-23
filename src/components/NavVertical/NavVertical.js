import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'

const NavVertical = ({ links }) =>
  <nav className='nav-vertical'>
    {links.map((item, index) => item.url
      ? <a
        href={item.url}
        key={index}
        className='nav-vertical__link'
      >{item.label}</a>
      : <div
        onClick={() => item.callback()}
        key={index}
        className='nav-vertical__link'
      >{item.label}</div>
    )}
  </nav>

NavVertical.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    callback: PropTypes.func,
    label: PropTypes.string.isRequired,
  })),
}

export default NavVertical
