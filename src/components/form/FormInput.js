import React from 'react'
// import './style.sass'
import { FormConsumer } from './Form'
import renderInput from './renderInput'

/**
 * A single line form input
 * @param {string} fieldname Unique identifier of the field
 * @param {string} label Label to be displayed above the field
 * @param {string} type Type of the input
 * @param {string} placeholder Placeholder content
 * @param {string} initialHelp Help text
 * @param {array} options Avaliable options (for some types of inputs)
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
const FormInput = ({
  fieldname,
  label,
  type,
  placeholder,
  initialHelp,
  options,
  addon,
  required,
}) => {
  return(
    <FormConsumer>
      {({fields, setValue}) => {
        !fields[fieldname] && console.error(`Field "${fieldname}" is not defined in props of the parent Form component. Define Form props as on example: <Form fields={['${fieldname}']}>.`)
        const { value, validation } = fields[fieldname]
        const help = fields[fieldname].help ? fields[fieldname].help : initialHelp
        return (
          <div className={`form__item${validation ? ` has-${validation}` : ''}`}>
            { label && ['checkbox', 'radio'].includes(type) ?
              <span className="form__label">{label}</span>
            : label &&
              <label className="form__label" htmlFor={fieldname}>{label}</label>
            }
              {renderInput(fields, fieldname, type, value, placeholder, setValue, options, required)}
            { addon &&
              <div className="form__addon">{addon}</div>
            }
            { help &&
              <span className="form__help">{help}</span>
            }
          </div>
        )
      }}
    </FormConsumer>
  )
}

FormInput.defaultProps = {
  type: 'text',
  placeholder: false,
  required: false,
}

export default FormInput;