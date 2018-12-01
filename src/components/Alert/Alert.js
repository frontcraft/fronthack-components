import React from 'react'
import bemCx from 'bem-modifiers'
import Icon from '../Icon'
import './style.sass'


class Alert extends React.Component {
  render(){
    const { message, type } = this.props
    return(
      <div className={bemCx('alert', type)}>
        <div className="alert__icon"><Icon type="warning" /></div>
        {message}
      </div>
    )
  }
}

export default Alert