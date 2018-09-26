import React from 'react'
import { inputHandler } from './helpers'

/**
 * Renders right markup for input, depending on given type
 * @param {object} fields An array of fields
 * @param {string} fieldname Unique identifier of the field
 * @param {string} type Type of the input
 * @param {*} value Value of the field
 * @param {string} placeholder Placeholder content
 * @param {function} setValue Function passed from consumer
 * @param {array} options Avaliable options (for some types of inputs)
 */
const renderInput = (fields, fieldname, type, value, placeholder, setValue, options = [], required) => {
  switch (type) {
    case 'text':
    case 'email':
    case 'password':
    case 'url':
    case 'tel':
    case 'number':
    case 'search':
    case 'file':
    case 'date':
    case 'datetime-local':
    case 'month':
    case 'week':
    case 'time':
      return(
        <input
          className="form__input"
          name={fieldname}
          type={type}
          placeholder={placeholder}
          onChange={e => setValue(inputHandler(fields, fieldname, e.target.value, type, required))}
          value={value ? value : ''}
        />
      )

    case 'select':
      return (
        <select
          className="form__input"
          name="selectInput"
          onChange={e => setValue(inputHandler(fields, fieldname, e.target.value, 'text', required))}
          value={value ? value : ''}
        >
          {options.map((item, index) => 
            <option key={index} value={item.value}>{item.label}</option>
          )}
        </select>
      )

    case 'checkbox':
      return options.map((option, index) => (
        <label className="form__checkbox" key={index}>
          <input
            type="checkbox"
            name={fieldname}
            value={option.value}
            onChange={e => {
              const updatedValue = checkboxHandler(e.target.checked, e.target.value, value)
              setValue(inputHandler(fields, fieldname, updatedValue, 'array', required))
            }}
          /> {option.label}
        </label>
      ))

    case 'radio':
      return options.map((option, index) => (
        <label className="form__radio" key={index}>
          <input
            type="radio"
            name={fieldname}
            value={option.value}
            checked={option.value === value}
            onChange={e => setValue(inputHandler(fields, fieldname, e.target.value, 'text', required))}
          /> {option.label}
        </label>
      ))
  
    default:
      console.error(`"${type}" is unrecognized input type. It should be one of the following: 'text' 'email' 'password' 'url' 'tel' 'number' 'search' 'file' 'date' 'datetime-local' 'month' 'week' 'time'`)
      return <div>{type} is unrecognized input type</div>
  }
}
 
export default renderInput

/**
 * Handler for checkbox values from the same list.
 * @param {bool} checked 
 * @param {string} value 
 * @param {string} previousValue 
 */
const checkboxHandler = (checked, value, previousValue) => {
  if (checked) {
    if (previousValue) {
      return [...previousValue, value]
    }
    return [value]
  } 
  return previousValue.filter(item => item !== value)
}