import React from 'react'
import HamburgerNav from '.'

export default () =>
  <HamburgerNav links={[
    {
      label: 'Home',
      url: 'home',
      icon: 'home',
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