import React from 'react'
import PropTypes from 'prop-types'
import bemCx from 'bem-modifiers'
import './style.sass'


class Button extends React.Component {
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