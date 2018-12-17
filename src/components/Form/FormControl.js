import React from 'react'
import PropTypes from 'prop-types'
import { FormConsumer } from './Form'
import Input from './Input'

/**
 * A single form input
 */
class FormControl extends React.Component {
  // If default (initial) field value has changed, apply it.
  componentDidUpdate(prevProps) {
    if (this.props.initialValue && this.props.initialValue !== prevProps.initialValue) {
      const { fieldname, initialValue, fieldsData, type, setValue } = this.props
      setValue(fieldname, initialValue, fieldsData[fieldname].required, type)
    }
  }
  componentDidMount() {
    if (this.props.initialValue) {
      const { fieldname, initialValue, fieldsData, type, setValue } = this.props
      setValue(fieldname, initialValue, fieldsData[fieldname].required, type)
    }
  }
  render() {
    const {
      fieldname,
      label,
      type,
      initialValue,
      initialHelp,
      options,
      addon,
      disabled,
      className,
      fieldsData,
      setValue,
    } = this.props
    !fieldsData[fieldname] && console.error(`Field "${fieldname}" is not defined in props of the parent Form component. Define Form props as on example: <Form fields={['${fieldname}']}>.`)
    // Force label shrink or keep default behavior
    const { value, validation, required } = fieldsData[fieldname]
    const currentValue = value !== null ? value : initialValue || ''
    const help = fieldsData[fieldname].help ? fieldsData[fieldname].help : initialHelp

    return (
      <div
        className={`form__item${validation ? ` has-${validation}` : ''}${className ? ` ${className}` : ''}`}
        disabled={disabled}
      >
        { label && ['checkbox', 'radio'].includes(type)
          ? <span className='form__label'>{label}</span>
          : label &&
          <label className='form__label' htmlFor={fieldname}>{label}</label>
        }
        <Input
          fieldname={fieldname}
          type={type}
          value={currentValue}
          required={required}
          setValue={setValue}
          options={options}
        />
        { addon &&
          <div className='form__addon'>{addon}</div>
        }
        { help &&
          <span className='form__help'>{help}</span>
        }
      </div>
    )
  }
}

FormControl.defaultProps = {
  type: 'text',
  placeholder: false,
  bottomMargin: false,
  fullWidth: false,
  disabled: false,
}

FormControl.propTypes = {
  fieldname: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  initialValue: PropTypes.any,
  initialHelp: PropTypes.string,
  options: PropTypes.array,
  disabled: PropTypes.bool,
}

const withFormConsumer = (Component) => {
  return (props) => (
    <FormConsumer>
      {context => <Component {...context} {...props} />}
    </FormConsumer>
  )
}

export default withFormConsumer(FormControl)
