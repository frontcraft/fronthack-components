import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'


const Breadcrumb = ({ items }) =>
  <div className='breadcrumb'>
    {items.map((item, index) =>
      <span className='breadcrumb__item' key={index}>{item}</span>
    )}
  </div>

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
}
export default Breadcrumb
