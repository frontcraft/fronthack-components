import React from 'react'
import PropTypes from 'prop-types'
import bemCx from 'bem-modifiers'
import './style.sass'


const Tooltip = ({ direction, message, children }) =>
  <div className={bemCx('tooltip', direction)} data-tooltip={message}>
    {children}
  </div>

Tooltip.defaultProps = {
  direction: 'tl',
}

Tooltip.propTypes = {
  direction: PropTypes.oneOf(['tl', 'tr', 'bl', 'br']),
  message: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default Tooltip
