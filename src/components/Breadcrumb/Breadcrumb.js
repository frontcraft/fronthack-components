import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.sass'

/**
 * Menu that shows the location of current page in a site navigation context
 * @render react
 * @name Breadcrumb
 * @property {string} prop - explanation
 * @example
 *  <Breadcrumb />
 */
class Breadcrumb extends Component {
  render() {
    return(
      <div className="breadcrumb">
        {this.props.items.map((item, index) => 
          <span className="breadcrumb__item" key={index}>{item}</span>
        )}
      </div>
    )
  }
}

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequried,
}

export default Breadcrumb