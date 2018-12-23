import React from 'react'
import bemCx from 'bem-modifiers'
import './style.sass'


const Field = ({ label, values, children, spacing, inlineLabel }) =>
  <div className={bemCx('field', { spacing, 'inline-label': inlineLabel })}>
    <div className='field__label'>{label}:</div>
    <div className='field__items'>
      {children
        ? <div className='field__item'>{children}</div>
        : values.map((value, index) => (
          <div className='field__item' key={index}>{value}</div>
        ))}
    </div>
  </div>

export default Field
