import React from 'react'
import { action } from '@storybook/addon-actions'
import LanguageSelect from '.'

export default () =>
  <LanguageSelect
    languages={['English', 'Polish']}
    current='English'
    callback={newLanguage => action(`Switch to ${newLanguage}`)}
  />
