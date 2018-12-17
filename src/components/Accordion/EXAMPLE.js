import React from 'react'
import Accordion from '.'

export default () =>
  <Accordion items={[
    {
      title: 'First accordion item',
      content: 'Content for the first accordion',
    },
    {
      title: 'Second accordion item',
      content: 'Content for the first accordion',
    },
  ]} />
