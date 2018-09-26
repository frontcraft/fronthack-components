import React, { Component, createContext } from 'react'
import './style.sass'
import { initiateFormFields } from './helpers'

const FieldsContext = createContext({});
const SetValueContext = createContext(() => {});

export const FormConsumer = ({children}) => (
  <FieldsContext.Consumer>
    {fields =>
      <SetValueContext.Consumer>
        {setValue => children({fields, setValue})}
      </SetValueContext.Consumer>
    }
  </FieldsContext.Consumer>
)
/**
 * This form component's Creates new context with defined fields that are
 * avaliable for all field items inside. 
 * @render react
 * @name Form
 * @property {array} fields List of field names
 * @property {node} children Children passed through
 * @example
 *   <Form fields={['username', 'email']}>
  *    <FormInput
 *       fieldname="username"
 *       label="User name"
 *       type="text"
 *       placeholder="Enter username"
 *       initialHelp="Your desired name"
 *     />
 *   </Form>
 */
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: initiateFormFields(this.props.fields)
    };
  }
  setValue(fields) {
    this.setState({ fields });
  }
  render() {
    return(
      <div className="form">
        <FieldsContext.Provider value={this.state.fields}>
          <SetValueContext.Provider value={this.setValue.bind(this)}>
            {this.props.children}
          </SetValueContext.Provider>
        </FieldsContext.Provider>
      </div>
    )
  }
}
 
export default Form;