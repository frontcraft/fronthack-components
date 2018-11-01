import React, { Component } from 'react'
import bemCx from 'bem-modifiers'
import './style.sass'


class Tooltip extends Component {
  render() {
    const { direction, message, children } = this.props
    return(
      <div className={bemCx('tooltip', direction)} data-tooltip={message}>
        {children}
      </div>
    )
  }
}

Tooltip.defaultProps = {
  direction: 'tl',
}

export default Tooltip