import React from 'react'
import PropTypes from 'prop-types'
// import ReactQuill from 'react-quill'
// import 'react-quill/dist/quill.snow.css'
import { checkboxHandler } from './helpers'


class Input extends React.Component {
  render() {
    const {
      fieldname,
      type,
      value,
      required,
      placeholder,
      setValue,
      options = [],
    } = this.props

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
            onChange={e => setValue(fieldname, e.target.value, required, type)}
            value={value ? value : ''}
          />
        )

      // case 'wysiwyg':
      //   return(
      //     <ReactQuill
      //       value={value}
      //       onChange={value => setValue(fieldname, value, required, 'text')}
      //       modules={{
      //         toolbar: [
      //           [{ 'header': [1, 2, false] }],
      //           ['bold', 'italic', 'underline', 'blockquote'],
      //           [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      //           ['link', 'image'],
      //         ],
      //       }}
      //       placeholder="Write your story. You’ve got lots of room, so say what you need to say."
      //     />
      //   )

      case 'select':
        return (
          <select
            className="form__input"
            name={fieldname}
            value={value}
            onChange={e => setValue(fieldname, e.target.value, required)}
          >
            {options.map((item, index) => {
              if (typeof item === 'string') {
                return <option key={index} value={item}>{item}</option>
              } return <option key={index} value={item.value}>{item.label}</option>
            })}
          </select>
        )

      case 'checkbox':
        return options.map((option, index) => {
          const optionLabel = (typeof option === 'string') ? option : option.label
          const optionValue = (typeof option === 'string') ? option : option.value
          const checked = (value && value.includes(optionValue))
          return (
            <label className="form__checkbox" key={index}>
              <input
                type="checkbox"
                name={fieldname}
                checked={checked}
                onChange={() => {
                  const finalValue = checkboxHandler(!checked, optionValue, value)
                  setValue(fieldname, finalValue, required, 'array')
                }}
              /> {optionLabel}
            </label>
          )
        })

      case 'radio':
        return options.map((option, index) => (
          <label className="form__radio" key={index}>
            <input
              type="radio"
              name={fieldname}
              value={option.value}
              checked={option.value === value}
              onChange={e => setValue(fieldname, e.target.value, required)}
            /> {option.label}
          </label>
        ))

      default:
        console.error(`"${type}" is unrecognized input type.`)
        return null
    }
  }
}

Input.propTypes = {
  fieldname: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.any,
  setValue: PropTypes.func.isRequired,
  options: PropTypes.array,
}

export default Input