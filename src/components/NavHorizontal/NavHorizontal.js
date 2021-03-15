import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './style.sass'


const NavHorizontal = ({ links, className }) =>
  <nav className={classNames('nav-horizontal', className)}>
    {links.map((link, index) => (
      <a href={link.url} key={index} className={classNames(
        'nav-horizontal__link',
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
