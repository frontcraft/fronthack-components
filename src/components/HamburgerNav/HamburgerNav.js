import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'
import Icon from '../Icon'


const HamburgerNav = ({ links, className }) => {
  const [show, setShow] = React.useState()
  return (
    <div className={`hamburger-nav ${show ? 'is-visible' : ''} ${className}`}>
      <div className='hamburger-nav__trigger' onClick={() => setShow(true)}>
        <div className='hamburger-nav__icon' />
      </div>
      {show &&
        <div className='hamburger-nav__overlay' onClick={() => setShow(false)} />
      }
      <div className='hamburger-nav__wrapper'>
        <nav className='hamburger-nav__menu'>
          {links.map((item, index) => item.url
            ? <a
              href={item.url}
              key={index}
              className='hamburger-nav__link'
            >
              {item.icon &&
                <Icon type={item.icon} className='hamburger-nav__link-icon' />
              }
              {item.label}
            </a>
            : <div
              onClick={() => item.callback()}
              key={index}
              className='nav-vertical__link'
            >
              {item.icon &&
                <Icon type={item.icon} className='hamburger-nav__link-icon' />
              }
              {item.label}
            </div>
          )}
        </nav>
      </div>
    </div>
  )
}

HamburgerNav.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    callback: PropTypes.func,
    label: PropTypes.string.isRequired,
  })),
}

export default HamburgerNav
