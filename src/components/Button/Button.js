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
  ...otherProps
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
      {...otherProps}
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
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  onClick: PropTypes.func,
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'light',
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
