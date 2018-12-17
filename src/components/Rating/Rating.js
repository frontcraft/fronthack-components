import React from 'react'
import PropTypes from 'prop-types'
import bemCx from 'bem-modifiers'
import './style.sass'


class Rating extends React.Component {
  render() {
    const { value } = this.props
    let dots = []
    let i = 1
    while (i <= 3) {
      dots.push(<div className='rating__dot' />)
      i++
    }
    return (
      <div className={bemCx('rating', { [value]: value })}>{dots}</div>
    )
  }
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
}

export default Rating
