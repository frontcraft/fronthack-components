import React from 'react'
import './style.sass'


class Badge extends React.Component {
  render() {
    return <span className="badge">{this.props.number}</span>
  }
}

export default Badge