import validator from 'validator';

/**
 * Process the data from given field and updates the form state accordingly.
 * @property {object} passedThis "this" object, for which handler should set a state
 * @property {string} fieldName Unique identifier of the field
 * @property {string|number|array|object} value Value received from the field
 * @property {string} type Type of the field that defines a method of validation
 * @property {boolean} required Required fields cannot be left as empty
 * @example
 *   value => inputHandler(this, 'username', value, 'text', true)
 */
export function inputHandler(fields, fieldName, value, type, required = false) {
  let validation, help = null;

  // If value is an array, remove its empty values.
  const processedValue = Array.isArray(value)
    ? value.filter(item => item.length)
    : value;

  // VALIDATION - it sets the error status and a help message if check will fail.
  // If field is required and the value is empty, set an error. Otherwise,
  // continue with the validation.
  if (required && (!processedValue || processedValue.length === 0)) {
    validation = "error";
    help = "This field is required."
  } else if (processedValue.length > 0) {
    switch (type) {
      case 'text':
        // Text should be longer than 3 chars.
        if (processedValue.length < 3) {
          validation = "error";
          help = "Value should have at least 3 characters."
        }
        break;
      case 'email':
        if (!validator.isEmail(value)) {
          validation = "error";
          help = "This is not a valid email address."
        }
        break;
      case 'url':
        if (!validator.isURL(value)) {
          validation = "error";
          help = "This is not a valid URL."
        }
        break;
      case 'json':
        try {
          JSON.parse(value);
        } catch(e) {
          validation = "error";
          help = "This is not a valid JSON.";
        }
        break;
      case 'number':
        // TODO: Should we check anything there?
        break;
      case 'array':
        // TODO: If any item is mentioned twice, set validation error.
        break;
      case 'object':
        // TODO: Check whether it is really a javascript object.
        break;
      default:
        break;
    }
  }

  // If there is no error and value is not empty, we can talk about success.
  if (validation !== "error" && ((processedValue && processedValue.length > 0)
  || (typeof value === 'object' && !Array.isArray(value)))) {
    validation = "success";
  }
  return {
    ...fields,
    [fieldName]: {
      value: processedValue,
      validation,
      help,
    }
  }
}

/**
 * Returns a form object with initial null values from provided field names.
 * @property {array} fields List of field names
 * @example
 * // returns { username: { value: null, validation: null }, email: { value: null, validation: null }}
 * initiateFormFields('username', 'email')
 */
export function initiateFormFields(fields = []) {
  return fields.reduce((acc, field) => (
    {...acc, [field]: { value: null, validation: null }}
  ), {})
}