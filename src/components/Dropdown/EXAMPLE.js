import React from 'react'
import Dropdown from '.'

export default () =>
  <Dropdown overlay links={[
    {
      label: 'Profile',
      url: '#',
    },
    {
      label: 'Settings',
      url: '#',
    },
    {
      label: 'Log out',
      url: '#',
    },
  ]}>Toggle dropdown</Dropdown>
