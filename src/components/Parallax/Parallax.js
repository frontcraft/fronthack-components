import React, { Component } from 'react'
import bemCx from 'bem-modifiers'
import './style.sass'



class Parallax extends Component {
  render() {
    return(
      <div className={bemCx('parallax', { debug: this.props.debug })}>
        {this.props.children}
      </div>
    )
  }
}

export default Parallax


export const ParallaxGroup = ({ children, backLayer, className }) =>
  <div className={bemCx('parallax__group', { 'with-backlayer': backLayer })}>
    <div className={bemCx('parallax__baselayer', {}, className)}>{children}</div>
    {backLayer && <div className="parallax__backlayer">{backLayer}</div>}
  </div>