import React from 'react'
import { action } from '@storybook/addon-actions'
import Button from '.'

export default ({ variant }) => <div>
  <Button
    variant={variant}
    size='xs'
    className='any-class'
    onClick={() => action('Button callback, eg. history.push')}
  >X-small button</Button>
  <Button
    variant={variant}
    size='sm'
    className='any-class'
    onClick={() => action('Button callback, eg. history.push')}
  >Small button</Button>
  <Button
    variant={variant}
    className='any-class'
    onClick={() => action('Button callback, eg. history.push')}
  >Default button</Button>
  <Button
    variant={variant}
    size='lg'
    className='any-class'
    onClick={() => action('Button callback, eg. history.push')}
  >Large button</Button>
</div>
