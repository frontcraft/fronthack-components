import React from 'react'
import PropTypes from 'prop-types'
import bemCx from 'bem-modifiers'
import './style.sass'


const Donut = ({ percentage, pie }) =>
  <div
    className={bemCx('donut', { pie: pie })}
    style={{ animationDelay: `-${percentage}s` }}
  >
    <div className='donut__label'>{percentage}%</div>
  </div>

Donut.propTypes = {
  percentage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pie: PropTypes.bool,
}

export default Donut
