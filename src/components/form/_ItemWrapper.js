import React from 'react'
import './style.sass'

/**
 * A wrapper for input, that provides label, help text, stylings etc. It is a
 * helper for input components.
 * @param {string} fieldname Unique identifier of the field
 * @param {string} label Label to be displayed above the field
 * @param {boolean} labelAsSpan Should it display label as a span tag
 * @param {string} type Type of the input
 * @param {string|object} addon Content or icon at the right hand of the field
 * @param {string} help Help text
 * @example
 *   <ItemWrapper
 *    fieldname="username"
 *    label="User name"
 *    type="text"
 *    validation="success"
 *    help="Enter your username"
 *  >
 */
const ItemWrapper = ({fieldname, label, labelAsSpan, type, validation, help, addon, children}) => (
  <div className={`form__item${validation ? ` has-${validation}` : ''}`}>
    { label && labelAsSpan ?
      <span className="form__label">{label}</span>
    : label &&
      <label className="form__label" htmlFor={fieldname}>{label}</label>
    }
    {children}
    { addon &&
      <div className="form__addon">{addon}</div>
    }
    { help &&
      <span className="form__help">{help}</span>
    }
  </div>
)

ItemWrapper.defaultProps = {
  labelAsSpan: false,
}
 
export default ItemWrapper;