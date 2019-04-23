import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'


const Logo = ({ className }) =>
  <img
    src='http://placehold.it/120x40px'
    srcSet='http://placehold.it/240x80px 2x'
    className={`logo ${className}`}
    alt='Logo'
  />

Logo.propTypes = {
  className: PropTypes.string,
}

export default Logo
