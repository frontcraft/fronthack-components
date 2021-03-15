import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './style.sass'


const Donut = ({ percentage, pie }) =>
  <div
    className={classNames('donut', { 'donut--pie': pie })}
    style={{ animationDelay: `-${percentage}s` }}
  >
    <div className='donut__label'>{percentage}%</div>
  </div>

Donut.propTypes = {
  percentage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pie: PropTypes.bool,
}

export default Donut
