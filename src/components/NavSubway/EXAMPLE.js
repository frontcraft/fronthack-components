import React from 'react'
import NavSubway from '.'

export default () =>
  <NavSubway links={[
    {
      label: 'Home',
      url: 'home',
    },
    {
      label: 'About',
      url: 'about',
    },
    {
      label: 'Contact',
      url: 'contact',
    },
  ]} />