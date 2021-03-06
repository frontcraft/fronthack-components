import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import './style.sass'


const Alert = ({ message, type }) =>
  <div className={classNames('alert', `alert--${type}`)}>
    <div className='alert__icon'><Icon type='warning' /></div>
    {message}
  </div>

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'warning', 'error']),
}

export default Alert
