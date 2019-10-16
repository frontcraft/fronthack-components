import React from 'react'
import Icon from '.'
import README from './README.md'


const iconTypes = README.split('\n * ').filter((item, index) => index > 0)


export default () =>
  <React.Fragment>
    {iconTypes.map(type =>
      <div>
        <Icon type={type} /> {type}
      </div>
    )}
  </React.Fragment>
