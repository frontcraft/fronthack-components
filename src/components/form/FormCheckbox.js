import React from 'react'
import './style.sass'
import { FormItemWrapper } from '.'
import { FormConsumer } from './Form'
import { inputHandler } from './helpers'

/**
 * A single line form input
 * @param {string} fieldname Unique identifier of the field
 * @param {string} label Label to be displayed above the field
 * @param {string} type Type of the input
 * @param {array} options Avaliable options
 * @param {string} initialHelp Help text
 * @example
 *   <FormCheckbox
 *     fieldname="color"
 *     label="Select color"
 *     options={[
 *       { label: 'Red', value: 'red' },
 *       { label: 'Yellow', value: 'yellow' },
 *       { label: 'Blue', value: 'blue' },
 *     ]}
 *     initialHelp="Your desired name"
 *   />
 */
const FormCheckbox = ({fieldname, label, options, initialHelp}) => (
  <FormConsumer>
    {({fields, setValue}) => {
      const { value, validation } = fields[fieldname]
      // TODO: Throw error that this field is not defined in the Form props.
      const help = fields[fieldname].help ? fields[fieldname].help : initialHelp
      return (
        <FormItemWrapper
          fieldname={fieldname}
          label={label}
          labelAsSpan
          validation={validation}
          help={help}
        >
          {options.map((option, index) => 
            <label className="form__radio" key={index}>
              <input
                type="checkbox"
                name={fieldname}
                value={option.value}
                onChange={e => {
                  const updatedValue = checkboxHandler(e.target.checked, e.target.value, value)
                  setValue(inputHandler(fields, fieldname, updatedValue, 'array', true))
                }}
              /> {option.label}</label>
          )}
        </FormItemWrapper>
      )
    }}
  </FormConsumer>
)

const checkboxHandler = (checked, value, previousValue) => {
  if (checked) {
    if (previousValue) {
      return [...previousValue, value]
    }
    return [value]
  } 
  return previousValue.filter(item => item !== value)
}
 
export default FormCheckbox;