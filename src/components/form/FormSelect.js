import React from 'react'
import './style.sass'
import { FormItemWrapper } from './'
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
 *   <FormSelect
 *    fieldname="color"
 *    label="Select color"
 *    options={[
 *      { label: 'Red', value: 'red' },
 *      { label: 'Yellow', value: 'yellow' },
 *      { label: 'Blue', value: 'blue' },
 *    ]}
 *    initialHelp="Pick a color"
 *   />
 */
const FormSelect = ({fieldname, label, options, initialHelp, multiple}) => (
  <FormConsumer>
    {({fields, setValue}) => {
      const { value, validation } = fields[fieldname]
      // TODO: Throw error that this field is not defined in the Form props.
      const help = fields[fieldname].help ? fields[fieldname].help : initialHelp
      return (
        <FormItemWrapper
          fieldname={fieldname}
          label={label}
          validation={validation}
          help={help}
        >
          <select
            className="form__input"
            name="selectInput"
            multiple={multiple}
            onChange={e => setValue(inputHandler(fields, fieldname, e.target.value, 'text', true))}
            value={value ? value : ''}
          >
            {options.map((item, index) => 
              <option key={index} value={item.value}>{item.label}</option>
            )}
          </select>
        </FormItemWrapper>
      )
    }}
  </FormConsumer>
)

FormSelect.defaultProps = {
  multiple: false,
}
 
export default FormSelect;