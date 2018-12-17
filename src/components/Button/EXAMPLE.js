import React from 'react'
import { action } from '@storybook/addon-actions'
import Button from '.'

export default () =>
  <Button
    variant='primary'
    size='xs'
    className='any-class'
    onClick={() => action('Button callback, eg. history.push')}
  >This is button</Button>
