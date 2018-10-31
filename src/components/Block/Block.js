import React, { Component } from 'react'
import './style.sass'


class Block extends Component {
  render() {
    const { title, children } = this.props
    return(
      <div className="block">
        <h2 className="block__title">{title}</h2>
        <div className="block__content">{children}</div>
      </div>
    )
  }
}

export default Block