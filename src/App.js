import React, { Component } from 'react';
import logo from './logo.svg';
import './style/index.sass';
import Accordion from './components/Accordion';
import { Form, FormInput } from './components/form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Accordion items={[
          {
            title: 'First accordion item',
            content: 'Content for the first accordion'
          },
          {
            title: 'Second accordion item',
            content: 'Content for the first accordion'
          },
        ]}/>
        <Form fields={['username', 'framework', 'color', 'car']}>
          <FormInput
            fieldname="username"
            label="User name"
            type="text"
            placeholder="Enter username"
            initialHelp="Required field"
            required
          />
          <FormInput
            fieldname="framework"
            label="Select a Framework"
            type="select"
            options={[
              { label: 'React', value: 'react' },
              { label: 'Vue', value: 'vue' },
              { label: 'Angluar', value: 'angluar' },
            ]}
            initialHelp="Select from the list"
          />
          <FormInput
            fieldname="car"
            label="Select cars"
            type="checkbox"
            options={[
              { label: 'Toyota', value: 'toyota' },
              { label: 'Renault', value: 'renault' },
              { label: 'Volkswagen', value: 'volkswagen' },
            ]}
            initialHelp="You can pick a few"
          />
          <FormInput
            fieldname="color"
            label="Pick a color"
            type="radio"
            options={[
              { label: 'Red', value: 'red' },
              { label: 'Yellow', value: 'yellow' },
              { label: 'Blue', value: 'blue' },
            ]}
            initialHelp="Choose one"
          />
        </Form>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
