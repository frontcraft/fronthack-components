import React, { Component } from 'react'
// import './style.sass'

/**
 * Shows a number of new items. To be used together with Icon component.
 * @render react
 * @name Badge
 * @property {integer} number - Number displayed in badge
 * @example
 *  <Badge number={7} />
 */
class Badge extends Component {
  render() {
    return <span className="badge">{this.props.number}</span>
  }
}

export default Badge