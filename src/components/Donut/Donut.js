import React, { Component } from 'react'
import bemCx from 'bem-modifiers'
import './style.sass'


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