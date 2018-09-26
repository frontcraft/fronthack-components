import React, {Component} from 'react'
import bemCx from 'bem-modifiers'
import './style.sass'

/**
 * Alert with icon and description in various states.
 * @render react
 * @name Alert
 * @example
 *  <Alert message="Example message" type="success"/>
 */
class Alert extends Component {
  render(){
    const { message, type } = this.props
    return(
      <div className={bemCx('alert', type)}>
        <div className="alert__icon"><i className="icon icon--warning"></i></div>
        {message}
      </div>
    )
  }
}

Alert.defaultProps = {
  type: false,
}

export default Alert