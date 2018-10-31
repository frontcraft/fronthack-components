import React, { Component } from 'react'
import './style.sass'


class Cloudlet extends Component {
  render() {
    return(
      <div className="cloudlet">{this.props.children}</div>
    )
  }
}

export default Cloudlet