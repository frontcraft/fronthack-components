import React, {Component} from 'react'
// import './style.sass'

/**
 * Inline navigation for primary top bar menu or footer links
 * @render react
 * @name NavHorizontal
 * @property {array} links - Array of objects, that has two keys with sting values - label and url.
 * @example
 *  <NavHorizontal />
 */
class NavHorizontal extends Component {
  render() {
    return(
      <nav className="nav-horizontal">
        {this.props.links.map((link, index) => (
          <a href={link.url} key={index} className="nav-horizontal__link">{link.label}</a>
        ))}
      </nav>
    )
  }
}

export default NavHorizontal