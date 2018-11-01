import React, { Component, createContext } from 'react'
import PropTypes from 'prop-types'
import {
  initiateFormFields,
  processField,
  updateFieldsRequirements,
} from './helpers'
import './style.sass'

const FieldsContext = createContext({});
const SetValueContext = createContext(() => {});

export const FormConsumer = ({ children }) => (
  <FieldsContext.Consumer>
    {fieldsData =>
      <SetValueContext.Consumer>
        {setValue => children({fieldsData, setValue})}
      </SetValueContext.Consumer>
    }
  </FieldsContext.Consumer>
)

FormConsumer.propTypes = {
  children: PropTypes.func.isRequired,
}

/**
 * This form component's Creates new context with defined fields that are
 * avaliable for all field items inside.
 */
class Form extends Component {
  constructor(props) {
    super(props)
    const requiredFields = this.props.allRequired ? this.props.fields : this.props.required
    this.state = {
      fieldsData: initiateFormFields(this.props.fields, requiredFields)
    }
  }
  setValue(fieldName, value, required, type = null) {
    // If no fieldName is provided, reset whole form
    if (!fieldName) {
      const requiredFields = this.props.allRequired ? this.props.fields : this.props.required
      this.setState({
        fieldsData: initiateFormFields(this.props.fields, requiredFields)
      })
    } else {
      this.setState(prevState => ({
        fieldsData: {
          ...prevState.fieldsData,
          ...processField(fieldName, value, required, type),
        }
      }))
    }
  }
  componentDidUpdate(prevProps) {
    if ((prevProps.required && this.props.required)
    && (prevProps.required.toString() !== this.props.required.toString())
    && !this.props.allRequired) {
      this.setState({ fieldsData: updateFieldsRequirements(this.state.fieldsData, this.props.required)} )
    }
  }
  render() {
    return(
      <div className="form">
        <FieldsContext.Provider value={this.state.fieldsData}>
          <SetValueContext.Provider value={this.setValue.bind(this)}>
            {this.props.children}
          </SetValueContext.Provider>
        </FieldsContext.Provider>
      </div>
    )
  }
}

Form.propTypes = {
  fields: PropTypes.array.isRequired,
  required: PropTypes.array,
  allRequired: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Form;