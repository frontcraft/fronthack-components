import React from 'react'
import { action } from '@storybook/addon-actions'
import Pagination from '.'

export default () =>
  <Pagination
    pages={5}
    onClick={item => action(item)}
    current={3}
  />
