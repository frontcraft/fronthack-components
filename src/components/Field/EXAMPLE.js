import React from 'react'
import Field from '.'

export default ({ inlineLabel }) => <div>
  <Field label='Field label' spacing inlineLabel={inlineLabel} values={[
    'Multiple value',
    'Another value',
    'Third value',
  ]} />
  <Field label='Field label' inlineLabel={inlineLabel}>Single value</Field>
</div>
