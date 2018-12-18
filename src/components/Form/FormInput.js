import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import Button from '../Button'
import { checkboxHandler } from './helpers'
import AsyncComponent from '../../containers/AsyncComponent'


class FormInput extends Component {
  state = {
    multipleSelectIsOpen: false,
  }
  render() {
    const {
      fieldname,
      type,
      value,
      required,
      placeholder = '',
      setValue,
      options = [],
      multiple,
      min,
      max,
      step = 1,
      unit,
    } = this.props

    switch (type) {
      case 'text':
      case 'name': // Abstract type for custom validation rule, see processField()
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
        return (
          <input
            className='form__input'
            name={fieldname}
            type={type}
            placeholder={placeholder}
            onChange={e => setValue(fieldname, e.target.value, required, type)}
            value={value || ''}
          />
        )

      case 'textarea':
        return (
          <textarea
            className='form__input'
            name={fieldname}
            type='textarea'
            rows='5'
            placeholder={placeholder}
            onChange={e => setValue(fieldname, e.target.value, required, type)}
            value={value || ''}
          />
        )

      case 'wysiwyg':
        return (
          <AsyncComponent
            componentProvider={() =>
              import('react-quill').then(module => module.default)
            }
            componentProps={{
              value: value,
              onChange: value => setValue(fieldname, value, required, type),
              modules: {
                clipboard: {
                  matchVisual: false,
                },
                toolbar: [
                  ['bold', 'italic', 'underline', 'blockquote'],
                  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                  ['link'],
                ],
              },
              placeholder: placeholder,
            }}
          />
        )

      case 'select':
        return (
          <select
            className='form__input'
            name={fieldname}
            value={value}
            onChange={e => setValue(fieldname, e.target.value, required)}
          >
            {(!value || !required) && <option value='' disabled={required}>{required ? 'All' : 'Select'}</option>}
            {options.map((item, index) =>
              <option
                key={index}
                value={(typeof item === 'string') ? item : item.value}
              >{(typeof item === 'string') ? item : item.label}</option>
            )}
          </select>
        )

      case 'multiselect':
        return (
          <Fragment>
            <div
              className='form__input form__input--multiselect'
              onClick={() => this.setState({ multipleSelectIsOpen: true })}
            >{value.length
                ? value.map((item, index) =>
                  <span
                    key={index}
                    className='form__multiselect-value'
                  >{(typeof item === 'string') ? item : item.label}</span>
                )
                : 'All'}
            </div>
            {this.state.multipleSelectIsOpen &&
              <Fragment>
                <div
                  className='form__multiselect-overlay'
                  onClick={() => this.setState({ multipleSelectIsOpen: false })}
                />
                <div className='form__multiselect'>
                  {options.map((option, index) => {
                    const optionLabel = (typeof option === 'string') ? option : option.label
                    const optionValue = (typeof option === 'string') ? option : option.value
                    const checked = (value && value.includes(optionValue))
                    return <div
                      key={index}
                      className={`form__multiselect-option${checked ? ' is-checked' : ''}`}
                      onClick={() => setValue(fieldname, checkboxHandler(!checked, optionValue, value), required)}
                    >{optionLabel}{checked && <Icon type='ok' />}</div>
                  })}
                </div>
              </Fragment>
            }
          </Fragment>
        )

      case 'checkbox':
        return options.map((option, index) => {
          const optionLabel = (typeof option === 'string') ? option : option.label
          const optionValue = (typeof option === 'string') ? option : option.value
          const checked = (value && value.includes(optionValue))
          return (
            <label className='form__checkbox' key={index} htmlFor={`${fieldname}${index}`}>
              <input
                type='checkbox'
                name={`${fieldname}${index}`}
                id={`${fieldname}${index}`}
                checked={checked}
                onChange={() => {
                  const finalValue = checkboxHandler(!checked, optionValue, value)
                  setValue(fieldname, finalValue, required, 'array')
                }}
              /> {optionLabel}
            </label>
          )
        })

      case 'checkimages':
        return (
          <div className='form__checkimages'>
            {options.map((option, index) => {
              const optionLabel = option.label ? option.label : option.value
              const checked = (value && multiple ? value.includes(option.value) : value === option.value)
              return (
                <div
                  key={index}
                  className={`form__checkimages-input${checked ? ' is-checked' : ''}`}
                  onClick={() => {
                    const finalValue = multiple ? checkboxHandler(!checked, option.value, value) : option.value
                    setValue(fieldname, finalValue, required)
                  }}>
                  <img src={option.image} />
                  {optionLabel}
                </div>
              )
            })}
          </div>
        )

      case 'radio':
        return options.map((option, index) => (
          <label className='form__radio' key={index} htmlFor={`${fieldname}${index}`}>
            <input
              type='radio'
              name={fieldname}
              value={option.value}
              id={`${fieldname}${index}`}
              checked={option.value === value}
              className={checked ? 'is-checked' : ''} // Better IE support
              onChange={e => setValue(fieldname, e.target.value, required)}
            /> {option.label}
          </label>
        ))

      case 'range':
        return <div>
          <input
            className='form__range-input'
            type='range'
            name={fieldname}
            value={value || 0}
            min={min}
            max={max}
            onChange={e => setValue(fieldname, Math.floor(e.target.value / step) * step, required)}
          />
          <div className='form__range-value'>
            {value ? `${value} ${unit}` : `0 ${unit}`}
          </div>
        </div>

      case 'image':
        return (
          !value
            ? <div className='form__file-input-wrapper'>
              <input
                accept='image/*'
                className='form__file-input'
                id={fieldname}
                type='file'
                onChange={e => {
                  const fileReader = new FileReader()
                  const { name, type: fileType } = e.target.files[0]
                  const dataFile = e.target.files[0]
                  fileReader.readAsDataURL(e.target.files[0])
                  fileReader.onload = () => {
                    const data = fileReader.result
                    setValue(fieldname, {
                      name,
                      type: fileType.split('/')[0],
                      data,
                      dataFile,
                    }, required, type)
                  }
                }}
              />
              <label htmlFor={fieldname}>
                <Button size='sm' variant='primary'>
                  Upload {placeholder || 'image'}
                </Button>
              </label>
            </div>
            : <div className='form__file-input-wrapper'>
              <img
                src={typeof value === 'string' && value.includes('http')
                  ? value
                  : value.data
                }
                className='form__file-input-image'
                alt='Uploaded file'
              />
              <div className='form__file-input-filename'>{ value.name || value.data.split('/').pop() }</div>
              <Button
                size='sm'
                variant='primary'
                onClick={() => setValue(fieldname, '', required, type)}
              >Delete {placeholder || 'image'}</Button>
            </div>
        )

      default:
        console.error(`"${type}" is unrecognized input type.`)
        return null
    }
  }
}

FormInput.propTypes = {
  fieldname: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.any,
  setValue: PropTypes.func.isRequired,
  options: PropTypes.array,
}

export default FormInput
