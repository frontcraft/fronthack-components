import React from 'react'
import Field from '.'

export default () => <div>
  <Field label="Field label" spacing values={[
    'Multiple value',
    'Another value',
    'Third value',
  ]}/>
  <Field label="Field label" inlineLabel>Single value</Field>
</div>