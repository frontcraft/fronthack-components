import React, { Component } from 'react'
import './style.sass'

/**
 * A cloud with sentence like in comic books.
 * @render react
 * @name Cloudlet
 * @example
 *  <Cloudlet>Lorem ipsum dolor sit amet</Cloudlet>
 */
class Cloudlet extends Component {
  render() {
    return(
      <div className="cloudlet">{this.props.children}</div>
    )
  }
}

export default Cloudlet