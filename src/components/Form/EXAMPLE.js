import React from 'react'
import { action } from '@storybook/addon-actions'
import { Form, FormInput, FormButton } from '.'

export default () =>
  <Form
    fields={['username', 'framework', 'car', 'color']}
    required={['username', 'framework']}
  >
    <FormInput
      fieldname='username'
      label='User name'
      type='text'
      placeholder='Enter username'
      initialHelp='Your desired name'
      // initialValue="Initial value"
    />
    <FormInput
      fieldname='framework'
      label='Select a Framework'
      type='select'
      options={[
        { label: 'React', value: 'react' },
        { label: 'Vue', value: 'vue' },
        { label: 'Angluar', value: 'angluar' },
      ]}
      initialHelp='Select from the list'
    />
    <FormInput
      fieldname='car'
      label='Select cars'
      type='checkbox'
      options={[
        { label: 'Toyota', value: 'toyota' },
        { label: 'Renault', value: 'renault' },
        { label: 'Volkswagen', value: 'volkswagen' },
      ]}
      initialHelp='You can pick a few'
    />
    <FormInput
      fieldname='color'
      label='Pick a color'
      type='radio'
      options={[
        { label: 'Red', value: 'red' },
        { label: 'Yellow', value: 'yellow' },
        { label: 'Blue', value: 'blue' },
      ]}
      initialHelp='Choose one'
    />
    <FormButton callback={action()}>Submit</FormButton>
  </Form>
