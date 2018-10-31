import React from 'react';
import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'

import '../src/style/index.sass'

import AccordionEXAMPLE from '../src/components/Accordion/EXAMPLE'
import AccordionREADME from '../src/components/Accordion/README.md'
import IconEXAMPLE from '../src/components/Icon/EXAMPLE'
import IconREADME from '../src/components/Icon/README.md'


storiesOf('Accordion',  module)
  .addDecorator(withReadme(AccordionREADME))
  .add('default', () => <AccordionEXAMPLE />)

storiesOf('Icon',  module)
  .addDecorator(withReadme(IconREADME))
  .add('default', () => <IconEXAMPLE />)