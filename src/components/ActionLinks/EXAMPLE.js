import React from 'react'
import ActionLinks from '.'

export default () =>
  <div style={{
    backgroundColor: 'whitesmoke',
    minWidth: 400,
    height: 160,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    Hover on me!
    <ActionLinks
      visible
      editUrl='projects/123/edit'
      deleteAction={() => alert('Delete action callback.')}
    />
  </div>
