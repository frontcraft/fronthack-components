import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'
import Icon from '../Icon'


class HamburgerNav extends React.Component {
  state = {
    show: false,
  }

  render() {
    return (
      <div className={`hamburger-nav ${this.state.show ? 'is-visible' : ''}`}>
        <div className='hamburger-nav__trigger' onClick={() => this.setState({ show: true })}>
          <div className='hamburger-nav__icon' />
        </div>
        {this.state.show &&
          <div className='hamburger-nav__overlay' onClick={() => this.setState({ show: false })} />
        }
        <div className='hamburger-nav__wrapper'>
          <nav className='hamburger-nav__menu'>
            { this.props.links.map((link, index) =>
              <a href={link.url} className='hamburger-nav__link' key={index}>
                {link.icon &&
                  <Icon type={link.icon} className='hamburger-nav__link-icon' />
                }
                {link.label}
              </a>
            )}
          </nav>
        </div>
      </div>
    )
  }
}

HamburgerNav.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
}

export default HamburgerNav
