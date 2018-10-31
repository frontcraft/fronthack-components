import React, { Component } from 'react'
import bemCx from 'bem-modifiers'
import './style.sass'

/**
 * A circular diagram based on pure CSS technique. animation-delay value serves
 * as a percentage input. Inspired by http://codepen.io/MikitaLisavets/pen/PqEwvV
 * @render react
 * @name Donut
 * @property {integer} percentage - Value between 1-100
 * @property {pie} percentage - Displays chat as a full pie (without a hollow inside)
 * @example
 *  <Donut percentage={43} pie />
 */
class Donut extends Component {
  render() {
    const { percentage, pie } = this.props
    return(
      <div className={bemCx('donut', { pie: pie })} style={{animationDelay: `-${percentage}s`}}>
        <div className="donut__label">{percentage}%</div>
      </div>
    )
  }
}

Donut.defaultProps = {
  pie: false,
}

export default Donut