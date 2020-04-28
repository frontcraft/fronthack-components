import React from 'react'
import './style.sass'


const InfoBox = ({ text, button }) =>
  <div className='info-box'>
    <div className='info-box__text'>{text}</div>
    {button}
  </div>

export default InfoBox
