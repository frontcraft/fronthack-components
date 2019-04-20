import React, { Fragment } from 'react'
import Parallax, { ParallaxGroup } from '.'


export default ({ debug }) =>
  <Parallax debug={debug}>
    <ParallaxGroup className='parallax__demo-solid'>
      <div className='parallax_demo-title'>Solid base layer</div>
    </ParallaxGroup>
    <ParallaxGroup backLayer={
      <Fragment>
        <img className='full-width' src='https://placeimg.com/640/480/nature' alt='' />
        <div className='parallax_demo-title'>Back layer</div>
      </Fragment>
    }>
      <div className='parallax_demo-title'>Transparent base layer</div>
    </ParallaxGroup>
    <ParallaxGroup className='parallax__demo-solid'>
      <div className='parallax_demo-title'>Solid base layer</div>
    </ParallaxGroup>
    <ParallaxGroup className='parallax__demo-solid'>
      <div className='parallax_demo-title'>Solid base layer</div>
    </ParallaxGroup>
  </Parallax>
