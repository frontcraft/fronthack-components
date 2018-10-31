import React, { Component } from 'react'
import bemCx from 'bem-modifiers'
import './style.sass'


class Field extends Component {
  render() {
    const { label, values, children, spacing, inlineLabel } = this.props
    return(
      <div className={bemCx('field', {spacing, 'inline-label': inlineLabel})}>
        <div className="field__label">{label}:</div>
        <div className="field__items">
          {children ?
            <div className="field__item">{children}</div>
          :
            values.map((value, index) => (
            <div className="field__item" key={index}>{value}</div>
          ))}
        </div>
      </div>
    )
  }
}

Field.defaultProps = {
  spacing: false,
  inlineLabel: false,
}

export default Field