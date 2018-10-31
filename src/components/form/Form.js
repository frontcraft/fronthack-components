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
 * @example
 *   <Form fields={['username', 'framework', 'color', 'car']}>
 *     <FormInput
 *       fieldname="username"
 *       label="User name"
 *       type="text"
 *       placeholder="Enter username"
 *       initialHelp="Your desired name"
 *       required
 *     />
 *     <FormInput
 *       fieldname="framework"
 *       label="Select a Framework"
 *       type="select"
 *       options={[
 *         { label: 'React', value: 'react' },
 *         { label: 'Vue', value: 'vue' },
 *         { label: 'Angluar', value: 'angluar' },
 *       ]}
 *       initialHelp="Select from the list"
 *     />
 *     <FormInput
 *       fieldname="car"
 *       label="Select cars"
 *       type="checkbox"
 *       options={[
 *         { label: 'Toyota', value: 'toyota' },
 *         { label: 'Renault', value: 'renault' },
 *         { label: 'Volkswagen', value: 'volkswagen' },
 *       ]}
 *       initialHelp="You can pick a few"
 *     />
 *     <FormInput
 *       fieldname="color"
 *       label="Pick a color"
 *       type="radio"
 *       options={[
 *         { label: 'Red', value: 'red' },
 *         { label: 'Yellow', value: 'yellow' },
 *         { label: 'Blue', value: 'blue' },
 *       ]}
 *       initialHelp="Choose one"
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