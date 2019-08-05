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
      callback: () => alert('A callback instead of url.'),
    },
    {
      label: 'Log out',
      url: '#',
    },
  ]}>Toggle dropdown</Dropdown>
