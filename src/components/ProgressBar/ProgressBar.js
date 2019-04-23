import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'


const ProgressBar = ({ percentage }) =>
  <div className='progress-bar'>
    <div className='progress-bar__meter' style={{ width: `${percentage}%` }} />
    <div className='progress-bar__label'>{percentage}%</div>
  </div>

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
}

export default ProgressBar
