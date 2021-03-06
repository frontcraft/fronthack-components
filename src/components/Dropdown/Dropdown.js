import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './style.sass'


class Dropdown extends React.Component {
  state ={
    isOpen: false,
  }
  render() {
    const { links, children, overlay } = this.props
    const { isOpen } = this.state
    return (
      <div className={classNames('dropdown', { 'is-open': isOpen })}>
        <span
          className='dropdown__label'
          onClick={() => this.setState({ isOpen: !isOpen })}
        >{children}</span>
        <div className='dropdown__inner'>
          <nav className='dropdown__nav'>
            {links.map((link, index) =>
              link.url
                ? <a
                  href={link.url}
                  className='dropdown__link'
                  key={index}
                >{link.label}</a>
                : link.callback
                  ? <div
                    onClick={() => {
                      link.callback()
                      setIsOpen(false)
                    }}
                    className='dropdown__link'
                    key={index}
                  >{link.label}</div>
                  : <div className='dropdown__link' key={index}>{link.label}</div>
            )}
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
    url: PropTypes.string,
    callback: PropTypes.func,
    label: PropTypes.string.isRequired,
  })),
  overlay: PropTypes.bool,
}

export default Dropdown
