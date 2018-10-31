import React, { Component } from 'react'
import bemCx from 'bem-modifiers'
import Icon from '../Icon'
import './style.sass'

/**
 * Alert with icon and description in various states.
 * @render react
 * @name Alert
 * @property {string} type - Can be "success", "warning", "error" or leave empty for default
 * @example
 *  <Alert message="Example message" type="success"/>
 */
class Alert extends Component {
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