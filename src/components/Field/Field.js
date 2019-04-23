import React from 'react'
import PropTypes from 'prop-types'
import bemCx from 'bem-modifiers'
import './style.sass'


const Field = ({ label, values, children, spacing, inlineLabel }) =>
  <div className={bemCx('field', { spacing, 'inline-label': inlineLabel })}>
    <div className='field__label'>{label}</div>
    <div className='field__items'>
      {children
        ? <div className='field__item'>{children}</div>
        : values ? values.map((value, index) =>
          <div className='field__item' key={index}>{value}</div>
        )
          : <div className='field__item'>—</div>
      }
    </div>
  </div>

Field.propTypes = {
  label: PropTypes.string,
  values: PropTypes.array,
  spacing: PropTypes.bool,
  inlineLabel: PropTypes.bool,
}

export default Field
