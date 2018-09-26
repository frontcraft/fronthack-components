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
 * @param {string} placeholder Placeholder content
 * @param {string} initialHelp Help text
 * @param {string|object} addon Content or icon at the right hand of the field
 * @example
 *   <FormInput
 *     fieldname="username"
 *     label="User name"
 *     type="text"
 *     placeholder="Enter username"
 *     initialHelp="Your desired name"
 *   />
 */
const FormInput = ({fieldname, label, type, placeholder, initialHelp, addon}) => {
  return(
    <FormConsumer>
      {({fields, setValue}) => {
        const { value, validation } = fields[fieldname]
        // TODO: Throw error that this field is not defined in the Form props.
        const help = fields[fieldname].help ? fields[fieldname].help : initialHelp
        return (
          <FormItemWrapper
            fieldname={fieldname}
            label={label}
            type={type}
            validation={validation}
            help={help}
            addon={addon}
          >
            <input
              className="form__input"
              name={fieldname}
              type={type}
              placeholder={placeholder}
              onChange={e => setValue(inputHandler(fields, fieldname, e.target.value, 'string', true))}
              value={value ? value : ''}
            />
          </FormItemWrapper>
        )
      }}
    </FormConsumer>
  )
}

FormInput.defaultProps = {
  type: 'text',
  placeholder: false,
}
 
export default FormInput;