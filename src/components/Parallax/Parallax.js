import React from 'react'
import bemCx from 'bem-modifiers'
import './style.sass'


const Parallax = ({ children, debug }) =>
  <div className={bemCx('parallax', { debug: debug })}>
    {children}
  </div>

export default Parallax


export const ParallaxGroup = ({ children, backLayer, className }) =>
  <div className={bemCx('parallax__group', { 'with-backlayer': backLayer })}>
    <div className={bemCx('parallax__baselayer', {}, className)}>{children}</div>
    {backLayer && <div className='parallax__backlayer'>{backLayer}</div>}
  </div>
