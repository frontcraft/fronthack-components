import React from 'react'
import { action } from '@storybook/addon-actions'
import LanguageSelect from '.'

export default () =>
  <LanguageSelect
    languages={[
      {
        name: 'English',
        callback: () => action('Callback. It can be history.push or anything'),
      },
      {
        name: 'Polish',
        callback: () => action('Callback. It can be history.push or anything'),
      },
    ]}
    current="English"
  />