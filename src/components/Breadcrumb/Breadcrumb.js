import React from 'react'
import './style.sass'


const Breadcrumb = ({ items }) =>
  <div className='breadcrumb'>
    {items.map((item, index) =>
      <span className='breadcrumb__item' key={index}>{item}</span>
    )}
  </div>

export default Breadcrumb
