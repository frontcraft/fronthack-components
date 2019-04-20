import React from 'react'
import Button from '.'

export default ({ variant }) => <div>
  <Button
    variant={variant}
    size='xs'
    className='any-class'
  >X-small button</Button>
  <Button
    variant={variant}
    size='sm'
    className='any-class'
  >Small button</Button>
  <Button
    variant={variant}
    className='any-class'
  >Default button</Button>
  <Button
    variant={variant}
    size='lg'
    className='any-class'
  >Large button</Button>
</div>
