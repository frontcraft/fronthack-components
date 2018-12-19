import React from 'react'
import PropTypes from 'prop-types'
import withFormControl from './FormControl'
import AsyncComponent from '../../containers/AsyncComponent'


const Wysiwyg = ({
  name,
  value,
  placeholder,
  required,
  toolbar,
  setValue,
}) =>
  <AsyncComponent
    componentProvider={() =>
      import('react-quill').then(module => module.default)
    }
    componentProps={{
      value: value,
      onChange: value => setValue(name, value, required, 'wysiwyg'),
      modules: {
        clipboard: {
          matchVisual: false,
        },
        toolbar,
      },
      placeholder,
    }}
  />

Wysiwyg.defaultProps = {
  toolbar: [
    ['bold', 'italic', 'underline', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ['link'],
  ],
}

Wysiwyg.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  setValue: PropTypes.func.isRequired,
  toolbar: PropTypes.arrayOf(PropTypes.array),
}

export default withFormControl(Wysiwyg)
