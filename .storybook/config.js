import { addDecorator, configure } from '@storybook/react'
import { addReadme } from 'storybook-readme'

addDecorator(addReadme)

function loadStories() {
  require('../stories/index.js')
}

configure(loadStories, module)
