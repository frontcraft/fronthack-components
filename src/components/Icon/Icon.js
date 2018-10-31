import React, { Component } from 'react'
import bemCx from 'bem-modifiers'
import './style.sass'


class Icon extends Component {
  render() {
    return <i  className={bemCx('icon', this.props.type, this.props.className)} />
  }
}

export default Icon