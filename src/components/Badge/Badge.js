import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'


const Badge = ({ number }) => <span className='badge'>{number}</span>

Badge.propTypes = {
  number: PropTypes.number,
}

export default Badge
