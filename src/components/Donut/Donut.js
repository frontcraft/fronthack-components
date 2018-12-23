import React from 'react'
import bemCx from 'bem-modifiers'
import './style.sass'


const Donut = ({ percentage, pie }) =>
  <div className={bemCx('donut', { pie: pie })} style={{ animationDelay: `-${percentage}s` }}>
    <div className='donut__label'>{percentage}%</div>
  </div>

export default Donut
