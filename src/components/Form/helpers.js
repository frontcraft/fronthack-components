import validator from 'validator'


/**
 * Process the data from given field and prepare it for form mutation.
 * @property {object} fieldsData Object that contains data of all fields
 * @property {string} fieldName Unique identifier of the field
 * @property {string|number|array|object} value Value received from the field
 * @property {string} type Type of the field that defines a method of validation
 */
export function processField(fieldName, value, required, type) {
  // If the value is an array, remove its empty values for safety.
  const processedValue = Array.isArray(value)
    ? value.filter(item => item.length)
    : value

  let validation; let help = null

  // VALIDATION - If check will fail, set an error state and help message.
  if (required && (!processedValue || processedValue.length === 0)) {
    // If the field is required and its value is empty, set an error. Otherwise
    // continue the validation.
    validation = 'error'
    help = 'This field is required.'
  } else if (processedValue && processedValue.length > 0) {
    switch (type) {
      case 'text':
        // Text should be longer than 3 chars.
        if (processedValue.length < 5) {
          validation = 'error'
          help = 'Enter at least 5 characters.'
        }
        break
      case 'email':
        if (!validator.isEmail(value)) {
          validation = 'error'
          help = 'This is not a valid email address.'
        }
        break
      case 'url':
        if (!validator.isURL(value)) {
          validation = 'error'
          help = 'This is not a valid URL.'
        }
        break
      case 'tel':
        if (!validator.isMobilePhone(validator.trim(value, '+'))) {
          validation = 'error'
          help = 'This is not a valid phone number.'
        }
        break
      case 'json':
        try {
          JSON.parse(value)
        } catch (e) {
          validation = 'error'
          help = 'This is not a valid JSON.'
        }
        break
      case 'number':
        // TODO: Should we check anything there?
        break
      case 'array':
        // TODO: If any item is mentioned twice, set validation error.
        break
      case 'object':
        // TODO: Check whether it is really a javascript object.
        break
      default:
        break
    }
  }

  // If there is no error and value is not empty, we can talk about success.
  if (validation !== 'error' && ((processedValue && processedValue.length > 0) ||
  (typeof value === 'object' && !Array.isArray(value)))) {
    validation = 'success'
  }
  return {
    [fieldName]: {
      value: processedValue,
      validation,
      required,
      help,
    },
  }
}


/**
 * Returns a form object with initial null values from provided field names.
 * @property {array} fields List of all field names
 * @property {array} required List of names of all required fields
 * @example
 *   initiateFormFields('username', 'email')
 */
export function initiateFormFields(fields = [], required = []) {
  return fields.reduce((acc, field) => (
    { ...acc,
      [field]: {
        value: null,
        validation: null,
        required: required.includes(field),
        help: null,
      } }
  ), {})
}


/**
 * Resets valdiation states and values of all fields in a form.
 * @property {object} fieldsData Object that contains data of all fields
 * @property {array} required List of names of all required fields
 */
export function updateFieldsRequirements(fieldsData, required) {
  let updatedFieldsData = {}
  Object.keys(fieldsData).forEach(key => {
    const { value, validation, help } = fieldsData[key]
    updatedFieldsData[key] = {
      value,
      validation,
      help,
      required: required.includes(key),
    }
  })
  return updatedFieldsData
}


/**
 * Handler for checkbox values from the same list.
 * @param {bool} checked
 * @param {string} value
 * @param {string} previousValue
 */
export function checkboxHandler(checked, value, previousValue) {
  if (checked) {
    if (previousValue) {
      return [...previousValue, value]
    }
    return [value]
  }
  return previousValue.filter(item => item !== value)
}


/**
 * Checks whether the whole form is valid or not.
 * @property {object} fieldsData Object that contains data of all fields
 * @param {array} fieldKeys fields to check against. Otherwise it checks whole form.
 */
export function formIsInvalid(fieldsData, fieldKeys = []) {
  const fieldsToCheck = fieldKeys.length ? fieldKeys : Object.keys(fieldsData)
  let requiredButEmpty = false
  let hasAnyError = false

  fieldsToCheck.forEach(key => {
    const { value, validation, required } = fieldsData[key]
    if (required && !((!Array.isArray(value) && value) || (Array.isArray(value) && value.length))) {
      requiredButEmpty = true
    }
    if (validation === 'error') {
      hasAnyError = true
    }
  })

  return requiredButEmpty || hasAnyError
}

/**
 * Get values from all fields and organize them into API friendly format.
 * @property {object} fieldsData Object that contains data of all fields
 */
export function getValues(fieldsData) {
  let values = {}
  Object.keys(fieldsData).forEach(key => {
    values[key] = fieldsData[key].value
  })
  return values
}
