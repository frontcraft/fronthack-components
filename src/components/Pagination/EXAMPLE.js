import React from 'react'
import { action } from '@storybook/addon-actions'
import Pagination from '.'

export default () =>
  <Pagination
    pages={5}
    callback={item => action(item)}
    current={3}
  />