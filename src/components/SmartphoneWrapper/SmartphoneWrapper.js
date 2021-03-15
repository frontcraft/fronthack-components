import React from 'react'
import './style.sass'


const SmartphoneWrapper = ({ children }) =>
  <div className='smartphone-wrapper'>
    <div className='smartphone-wrapper__phone'>
      <div className='smartphone-wrapper__screen'>{children}</div>
    </div>
  </div>

export default SmartphoneWrapper
