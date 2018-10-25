import React, { Component } from 'react'
// import './style.sass'

/**
 * A percentage bar to show the progress based on pure CSS technique.
 * @render react
 * @name ProgressBar
 * @property {integer} percentage - A number from range 1-100
 * @example
 *  <ProgressBar percentage={45} />
 */
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