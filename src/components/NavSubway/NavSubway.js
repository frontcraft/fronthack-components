import React, {Component} from 'react'
// import './style.sass'

/**
 * Navigation that looks like a subway map
 * @render react
 * @name NavSubway
 * @property {array} links - Array of objects, that has two keys with sting values - label and url.
 * @example
 *  <NavSubway links={[
 *    {
 *      label: 'Home',
 *      url: 'home',
 *    },
 *    {
 *      label: 'About',
 *      url: 'about',
 *    },
 *    {
 *      label: 'Contact',
 *      url: 'contact',
 *    },
 *  ]} />
 */
class NavSubway extends Component {
  render() {
    return(
      <nav className="nav-subway">
      {this.props.links.map((link, index) =>
        <div className="nav-subway__item" key={index}>
          <div className="nav-subway__station"></div>
          <a href={link.url} className="nav-subway__link">{link.label}</a>
        </div>
      )}
    </nav>
    )
  }
}

export default NavSubway