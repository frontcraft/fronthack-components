import React, { Component } from 'react'
import './style.sass'


class ProgressBar extends Component {
  render() {
    const { percentage } = this.props
    return(
      <div className="progress-bar">
        <div className="progress-bar__meter" style={{ width: `${percentage}%`}} />
        <div className="progress-bar__label">{percentage}%</div>
      </div>
    )
  }
}

export default ProgressBar