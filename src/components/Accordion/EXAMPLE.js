import React from 'react'
import Accordion, { AccordionItem } from '.'

export default () =>
  <Accordion>
    <AccordionItem title='First accordion item'>
      Content for a first item
    </AccordionItem>
    <AccordionItem title='Second accordion item'>
      Content for a second item
    </AccordionItem>
  </Accordion>
