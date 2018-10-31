import React, {Component} from 'react'
import './style.sass'


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