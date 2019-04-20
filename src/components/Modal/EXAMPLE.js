import React from 'react'
import Modal from '.'
import Button from '../Button'

export default ({ size }) =>
  <Modal
    size={size}
    title='Modal title'
    trigger={<Button variant='primary'>Open modal</Button>}
  // isOpen
  >Modal content</Modal>
