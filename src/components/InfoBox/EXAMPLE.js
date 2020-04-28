import React from 'react'
import InfoBox from '.'
import Button from '../Button'

export default () =>
  <InfoBox
    text='An important text to show.'
    button={<Button size='lg'>Button</Button>}
  />
