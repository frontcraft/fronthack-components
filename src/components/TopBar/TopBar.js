import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'
import NavHorizontal from '../../components/NavHorizontal'
import Logo from '../../components/Logo'
import HamburgerNav from '../../components/HamburgerNav'


const TopBar = ({ links }) => {
  return (
    <header className='top-bar'>
      <div className='top-bar__spacer'>
        <div className='top-bar__bar'>
          <div className='top-bar__container'>
            <div className='top-bar__logo'>
              <a href='/'><Logo /></a>
            </div>
            <NavHorizontal links={links} className='hidden-xs' />
            <div className='top-bar__hamburger visible-xs-block'>
              <HamburgerNav
                links={links}
                className='visible-xs-block'
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

TopBar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
}

export default TopBar
