import React, {Component} from 'react'
import './style.sass'

/**
 * An universal block with headline and content.
 * @render react
 * @name Block
 * @property {string} title - Displayed block title
 * @example
 *  <Block title="Title of the block">
 *    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
 *  </Block>
 */
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