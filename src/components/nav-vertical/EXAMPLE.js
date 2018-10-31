import React from 'react'
import NavVertical from '.'

export default () =>
  <NavVertical
    links={[
      {
        label: 'Home',
        url: '/home',
      },
      {
        label: 'Blog',
        url: '/blog',
      },
      {
        label: 'About',
        url: '/about',
      },
    ]}
  />