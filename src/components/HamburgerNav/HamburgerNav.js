import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'
import Icon from '../Icon'


class HamburgerNav extends React.Component {
  state = {
    show: false,
  }

  render() {
    return(
      <div className="hamburger-nav is-visible">
        <div className="hamburger-nav__icon" onClick={() => this.setState({ show: true })}>
          <Icon type="menu" />
        </div>
        { this.state.show &&
          <div className="hamburger-nav__overlay" onClick={() => this.setState({ show: false })}></div>
        }
        { this.state.show &&
          <div className="hamburger-nav__wrapper">
            <nav className="hamburger-nav__menu">
              { this.props.links.map((link, index) =>
                <a href={link.url} className="hamburger-nav__link" key={index}>
                  {link.icon &&
                    <Icon type={link.icon} className="hamburger-nav__link-icon" />
                  }
                  {link.label}
                </a>
              )}
            </nav>
          </div>
        }
      </div>
    )
  }
}

HamburgerNav.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default HamburgerNav