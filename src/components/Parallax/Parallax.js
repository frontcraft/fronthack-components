import React, { Component } from 'react'
import bemCx from 'bem-modifiers'
// import './style.sass'

/**
 * Parallax effect written in pure CSS. Parallax is unique component. It should
 * be used on layout abstraction level, as wrapper of whole content structure.
 * Layer groups that contains backlayers must have lower z-index than default.
 * It is achieved by using .parallax__group--with-baselayer modifier class.
 * To display page properly, all layout elements, including header and footer,
 * should be placed at least inside the .parallax div. You can even use it as a
 * body class. Inspired by http://keithclark.co.uk/articles/pure-css-parallax-websites
 * @render react
 * @name Parallax
 * @property {bool} debug - debugging mode shows layers in perspective
 * @example
 *  <Parallax>
 *   <ParallaxGroup className="parallax__demo-solid">
 *     <div class="parallax_demo-title">Solid base layer</div>
 *   </ParallaxGroup>
 *   <ParallaxGroup backLayer={
 *     <Fragment>
 *       <img class="full-width" src="https://placeimg.com/640/480/nature" alt="" />
 *       <div class="parallax_demo-title">Back layer</div>
 *     </Fragment>
 *   }>
 *     <div class="parallax_demo-title">Transparent base layer</div>
 *   </ParallaxGroup>
 *   <ParallaxGroup className="parallax__demo-solid">
 *     <div class="parallax_demo-title">Solid base layer</div>
 *   </ParallaxGroup>
 *   <ParallaxGroup className="parallax__demo-solid">
 *     <div class="parallax_demo-title">Solid base layer</div>
 *   </ParallaxGroup>
 * </Parallax>
 */
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