import React from 'react'
import PropTypes from 'prop-types'
import withFormControl from './FormControl'
import Button from '../Button'

const ImageUpload = ({
  name,
  value,
  placeholder,
  required,
  setValue,
}) => (
  !value
    ? <div className='form__file-input-wrapper'>
      <input
        accept='image/*'
        className='form__file-input'
        id={name}
        type='file'
        onChange={e => {
          const fileReader = new FileReader()
          const { name: fileName, type: fileType } = e.target.files[0]
          const dataFile = e.target.files[0]
          fileReader.readAsDataURL(e.target.files[0])
          fileReader.onload = () => {
            const data = fileReader.result
            setValue(name, {
              name: fileName,
              type: fileType.split('/')[0],
              data,
              dataFile,
            }, required, 'image')
          }
        }}
      />
      <label htmlFor={name}>
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
        onClick={() => setValue(name, '', required)}
      >Delete {placeholder || 'image'}</Button>
    </div>
)

ImageUpload.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  setValue: PropTypes.func.isRequired,
}

export default withFormControl(ImageUpload)
