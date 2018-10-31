import React from 'react';

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withReadme } from 'storybook-readme'

import '../src/style/index.sass'
import { Button, Welcome } from '@storybook/react/demo'
import Accordion from '../src/components/Accordion'
import AccordionREADME from '../src/components/Accordion/README.md'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Accordion',  module)
  .addDecorator(withReadme(AccordionREADME))
  .add('default', () =>
    <Accordion items={[
      {
        title: 'First accordion item',
        content: 'Content for the first accordion'
      },
      {
        title: 'Second accordion item',
        content: 'Content for the first accordion'
      },
    ]}/>
  )
