import React from 'react'
import './style.sass'


const ProgressBar = ({ percentage }) =>
  <div className='progress-bar'>
    <div className='progress-bar__meter' style={{ width: `${percentage}%` }} />
    <div className='progress-bar__label'>{percentage}%</div>
  </div>

export default ProgressBar
