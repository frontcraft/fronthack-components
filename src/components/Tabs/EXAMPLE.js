import React from 'react'
import Tabs from '.'

export default () =>
  <Tabs labels={['First', 'Second', 'Third']}>
    {[
      <div>Content of the first tab</div>,
      <div>Content of the second tab</div>,
      <div>Content of the third tab</div>
    ]}
  </Tabs>