import React from 'react'
import bemCx from 'bem-modifiers'
import Icon from '../Icon'
import './style.sass'


const Alert = ({ message, type }) =>
  <div className={bemCx('alert', type)}>
    <div className='alert__icon'><Icon type='warning' /></div>
    {message}
  </div>

export default Alert
