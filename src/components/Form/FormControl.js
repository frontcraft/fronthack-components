import React, { Component } from 'react'
import PropTypes from 'prop-types'
import bemCx from 'bem-modifiers'
import { FormConsumer } from './Form'
import FormInput from './FormInput'

/**
 * A single form input
 */
class FormControl extends Component {
  componentDidUpdate(prevProps) {
    // If default field value has changed, change the current value.
    if (this.props.initialValue && this.props.initialValue !== prevProps.initialValue) {
      const { fieldname, initialValue, fieldsData, type, setValue } = this.props
      setValue(fieldname, initialValue, fieldsData[fieldname].required, type)
    }
  }
  componentDidMount() {
    // Appply default field value.
    if (this.props.initialValue) {
      const { fieldname, initialValue, fieldsData, type, setValue } = this.props
      setValue(fieldname, initialValue, fieldsData[fieldname].required, type)
    }
  }
  render() {
    const {
      fieldname,
      label,
      placeholder,
      className,
      addon,
      initialHelp,
      initialValue,
      fieldsData,
      disabled,
      inlineLabel,
      tiny,
      large,
      ...otherProps
    } = this.props

    !fieldsData[fieldname] && console.error(`Field "${fieldname}" is not defined in props of the parent Form component. Define Form props as on example: <Form fields={['${fieldname}']}>.`)

    const { value, validation, required } = fieldsData[fieldname]
    const currentValue = value !== null ? value : initialValue || ''
    const help = fieldsData[fieldname].help ? fieldsData[fieldname].help : initialHelp

    return (
      <div
        className={bemCx('form__item', {
          'inline-label': inlineLabel,
          'tiny': tiny,
          'lg': large,
        }, {
          [`has-${validation}`]: validation,
          className: className,
        })}
        disabled={disabled}
      >
        { label && ['checkbox', 'radio'].includes(this.props.type)
          ? <span className='form__label'>{label}</span>
          : label &&
          <label className='form__label' htmlFor={fieldname}>{label}</label>
        }
        <FormInput
          fieldname={fieldname}
          value={currentValue}
          required={required}
          placeholder={placeholder || undefined}
          {...otherProps}
        />
        {addon &&
          <div className='form__addon'>{addon}</div>
        }
        {help &&
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
  min: PropTypes.number,
  max: PropTypes.number,
  multiple: PropTypes.bool,
  disabled: PropTypes.bool,
  inlineLabel: PropTypes.bool,
  tiny: PropTypes.bool,
}

const withFormConsumer = (Component) => {
  return (props) => (
    <FormConsumer>
      {context => <Component {...context} {...props} />}
    </FormConsumer>
  )
}

export default withFormConsumer(FormControl)
