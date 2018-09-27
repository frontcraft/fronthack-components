import React, {Component} from 'react'
import bemCx from 'bem-modifiers'
import './style.sass'

/**
 * Inspired by Drupal 8 Twig field markup. Can use children to pass a single
 * value or use a values prop to define multiple values.
 * @render react
 * @name Field
 * @property {string} label - Field label
 * @property {array} values - A list of values
 * @property {boolean} inlineLabel - Values in the same line as label
 * @property {boolean} spacing - Adds bottom margin
 * @example
 *  <Field label="Field label" spacing values={[
 *    'Multiple value',
 *    'Another value',
 *    'Third value',
 *  ]}/>
 *  <Field label="Field label" inlineLabel>Single value</Field>
 */
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