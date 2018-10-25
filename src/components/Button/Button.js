import React, { Component } from 'react'
import PropTypes from 'prop-types'
import bemCx from 'bem-modifiers'
// import './style.sass'

/**
 * Button in various colors and sizes
 * @render react
 * @name Button
 * @property {string} variant - Can be "block", "light", "primary", "link" or leave emplty for default
 * @property {string} size - Can be "xs", "sm", "lg" or leave emplty for default
 * @property {function} onClick - Callback after click
 * @property {boolean} disabled - Should button be active or not
 * @example
 *  <Button
 *    variant="primary"
 *    size="xs"
 *    className="any-class"
 *    onClick={() => alert('Button callback, eg. history.push')}
 *  >This is button</Button>
 */
class Button extends Component {
  render() {
    const {
      children,
      onClick,
      variant,
      size,
      disabled,
      className,
    } = this.props
    return(
      <div
        className={bemCx('btn', {
          [variant]: variant,
          [size]: size,
          disabled: disabled,
        }, { [className]: className })}
        onClick={onClick}
      >{children}</div>
    )
  }
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  onClick: PropTypes.func,
  variant: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
}

export default Button