import React from 'react'
import './style.sass'


const Block = ({ title, children }) =>
  <div className='block'>
    <h2 className='block__title'>{title}</h2>
    <div className='block__content'>{children}</div>
  </div>

export default Block
