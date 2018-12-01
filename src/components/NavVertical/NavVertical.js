import React from 'react'
import './style.sass'

/**
 * React component for a vertical navigation.
 * @render react
 * @name NavVertical
 * @property {array} links - Array of objects, that has two keys with sting values - label and url.
 * @example
 *  <NavVertical
 *    links={[
 *      {
 *        label: 'Home',
 *        url: '/home',
 *      },
 *      {
 *        label: 'Blog',
 *        url: '/blog',
 *      },
 *      {
 *        label: 'About',
 *        url: '/about',
 *      },
 *    ]}
 *  />
 */
// IMPORTANT: I DID NOT IMPORTED THIS COMPONENT FROM BIT, I JUST COPY-PASTED IT
// FROM MY DRIVE
class NavVertical extends React.Component {
  render(){
    return(
      <nav className="nav-vertical">
        {this.props.links.map((link, index) => (
          <a href={link.url} key={index} className="nav-vertical__link">{link.label}</a>
        ))}
      </nav>
    )
  }
}

NavVertical.defaultProps = {
  links: [
    {
      label: 'Home',
      url: '/home',
    },
    {
      label: 'Blog',
      url: '/blog',
    },
    {
      label: 'About',
      url: '/about',
    },
  ],
}

export default NavVertical
