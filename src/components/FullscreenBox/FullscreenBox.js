import React from 'react'
import './style.sass'


const FullscreenBox = ({ title, children, footer }) =>
  <div className='fullscreen-box'>
    <div className='fullscreen-box__box'>
      {title && <h2 className='fullscreen-box__title'>{title}</h2>}
      {children}
    </div>
    {footer && <div className='fullscreen-box__footer'>{footer}</div>}
  </div>

export default FullscreenBox
