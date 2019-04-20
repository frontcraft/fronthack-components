import React from 'react'
import Alert from '.'

export default ({ type }) =>
  <Alert message={`Alert of ${type || 'default'} type`} type={type} />
