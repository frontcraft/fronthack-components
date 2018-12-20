import React from 'react'
import { action } from '@storybook/addon-actions'
import {
  Form,
  Input,
  Select,
  Checkbox,
  Radio,
  FormButton,
} from '.'

export default () =>
  <Form
    fields={['username', 'framework', 'car', 'color']}
    required={['username', 'framework']}
  >
    <Input
      name='username'
      label='User name'
      type='text'
      placeholder='Enter username'
      initialHelp='Your desired name'
    />
    <Select
      name='framework'
      label='Select a Framework'
      options={[
        { label: 'React', value: 'react' },
        { label: 'Vue', value: 'vue' },
        { label: 'Angluar', value: 'angluar' },
      ]}
      initialHelp='Select from the list'
    />
    <Checkbox
      name='car'
      label='Select cars'
      options={[
        { label: 'Toyota', value: 'toyota' },
        { label: 'Renault', value: 'renault' },
        { label: 'Volkswagen', value: 'volkswagen' },
      ]}
      initialHelp='You can pick a few'
    />
    <Radio
      name='color'
      label='Pick a color'
      options={[
        { label: 'Red', value: 'red' },
        { label: 'Yellow', value: 'yellow' },
        { label: 'Blue', value: 'blue' },
      ]}
      initialHelp='Choose one'
    />
    <FormButton callback={action()}>Submit</FormButton>
  </Form>
