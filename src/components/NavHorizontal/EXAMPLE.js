import React from 'react'
import NavHorizontal from '.'

export default () =>
  <NavHorizontal
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
