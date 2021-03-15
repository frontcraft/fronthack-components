import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './style.sass'


const Tooltip = ({ direction, message, children }) =>
  <div className={classNames('tooltip', `tooltip--${direction}`)} data-tooltip={message}>
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
