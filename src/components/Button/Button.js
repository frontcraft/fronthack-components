import React from 'react'
import PropTypes from 'prop-types'
import bemCx from 'bem-modifiers'
import './style.sass'


const Button = ({
  children,
  onClick,
  component,
  variant,
  size,
  block,
  disabled,
  className,
}) => {
  const ComponentProp = component
  return (
    <ComponentProp
      className={bemCx('btn', {
        [variant]: variant,
        [size]: size,
        block: block,
        disabled: disabled,
      }, { [className]: className })}
      onClick={onClick}
    >{children}</ComponentProp>
  )
}

Button.defaultProps = {
  component: 'button',
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  component: PropTypes.node,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'danger',
    'link',
  ]),
  size: PropTypes.oneOf([
    'xs',
    'sm',
    'lg',
  ]),
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
}

export default Button
