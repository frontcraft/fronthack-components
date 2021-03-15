import React from 'react'
import classNames from 'classnames'
import './style.sass'


const Parallax = ({ children, debug }) =>
  <div className={classNames('parallax', { 'parallax--debug': debug })}>
    {children}
  </div>

export default Parallax


export const ParallaxGroup = ({ children, backLayer, className }) =>
  <div className={classNames('parallax__group', { 'parallax__group--with-backlayer': backLayer })}>
    <div className={classNames('parallax__baselayer', className)}>{children}</div>
    {backLayer && <div className='parallax__backlayer'>{backLayer}</div>}
  </div>
