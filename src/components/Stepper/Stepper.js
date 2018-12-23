import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'


const Stepper = ({ steps, current }) =>
  <div className='stepper'>
    {steps.map((step, index) =>
      <div
        className={`stepper__item${(current && current === index) ? ' is-active' : ''}`}
        key={index}
      ><div className='stepper__label'>{step}</div></div>
    )}
  </div>

Stepper.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  current: PropTypes.number,
}

export default Stepper
