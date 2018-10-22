import React, { Component } from 'react'
// import './style.sass'

/**
 * A percentage bar to show the progress based on pure CSS technique.
 * @render react
 * @name ProgressBar
 * @property {string} prop - explanation
 * @example
 *  <ProgressBar />
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