import React from 'react'
import TopBar from '.'

export default () =>
  <TopBar links={[
    { label: 'Projects', url: '/projects' },
    { label: 'About us', url: '/about' },
    { label: 'Contact', url: '/contact' },
  ]} />
