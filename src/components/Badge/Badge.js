import React, { Component } from 'react'
import './style.sass'


class Badge extends Component {
  render() {
    return <span className="badge">{this.props.number}</span>
  }
}

export default Badge