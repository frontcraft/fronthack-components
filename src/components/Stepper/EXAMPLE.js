import React from 'react'
import Stepper from '.'

export default () =>
  <Stepper
    steps={['Cart', 'Shipping', 'Billing', 'Summary', 'Complete']}
    current={2}
  />