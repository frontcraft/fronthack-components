import React from 'react'
import './style.sass'


const Logo = ({ className }) =>
  <img
    src='http://placehold.it/120x40px'
    srcSet='http://placehold.it/240x80px 2x'
    className={`logo ${className}`}
    alt='Logo'
  />

export default Logo
