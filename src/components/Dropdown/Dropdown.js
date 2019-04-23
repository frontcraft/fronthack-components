import React from 'react'
import PropTypes from 'prop-types'
import bemCx from 'bem-modifiers'
import './style.sass'


class Dropdown extends React.Component {
  state ={
    isOpen: false,
  }
  render() {
    const { links, children, overlay } = this.props
    const { isOpen } = this.state
    return (
      <div className={bemCx('dropdown', [], { 'is-open': isOpen })}>
        <span
          className='dropdown__label'
          onClick={() => this.setState({ isOpen: !isOpen })}
        >{children}</span>
        <div className='dropdown__inner'>
          <nav className='dropdown__nav'>
            {links.map((link, index) => (
              <a href={link.url} className='dropdown__link' key={index}>{link.label}</a>
            ))}
          </nav>
        </div>
        { (overlay && isOpen) &&
          <div className='dropdown__overlay' onClick={() => this.setState({ isOpen: false })} />
        }
      </div>
    )
  }
}

Dropdown.defaultProps = {
  overlay: false,
}

Dropdown.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
  overlay: PropTypes.bool,
}

export default Dropdown
