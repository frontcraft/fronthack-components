import React, { Component } from 'react'
import PropTypes from 'prop-types'
import bemCx from 'bem-modifiers'
// import './style.sass'

/**
 * Widget to display any rating from (0 to 3 points by default).
 * @render react
 * @name Rating
 * @property {number} value - Rate. A number from 0 to 3
 * @example
 *  <Rating value={2} />
 */
class Rating extends Component {
  render() {
    const { value } = this.props
    let dots = []
    let i = 1
    while (i <= 3) {
      dots.push(<div className="rating__dot"></div>)
      i++
    }
    return(
      <div className={bemCx('rating', { [value]: value })}>{dots}</div>
    )
  }
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
}

export default Rating