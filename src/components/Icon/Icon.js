import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './style.sass'


const Icon = ({ type, className }) =>
  <i className={classNames('icon', `icon--${type}`, className)} />

Icon.propTypes = {
  type: PropTypes.string.isRequired,
}

export default Icon
