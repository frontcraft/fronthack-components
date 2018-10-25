import React, { Component } from 'react'
import bemCx from 'bem-modifiers'
// import './style.sass'

/**
 * Better tooltips styling inspired by this article
 * http://hackingui.com/front-end/scss-tooltips/. Avaliable in four direction
 * variants:
 * - tl - top left (default)
 * - tr - top right
 * - bl - bottom left
 * - br - bottom right
 * @render react
 * @name Tooltip
 * @property {string} direction - Can be "tl" (default), "tr" "bl" or "br"
 * @property {string} message - A tooltip content
 * @example
 *  <Tooltip message="Hey I'm made with pure CSS" direction="tr" />
 */
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