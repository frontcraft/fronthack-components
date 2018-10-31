import React, {Component} from 'react'
import './style.sass'


class Logo extends Component {
  render() {
    return(
      <img
        src="http://placehold.it/120x40px"
        srcSet="http://placehold.it/240x80px 2x"
        className="logo"
        alt="Logo"
      />
    )
  }
}

export default Logo