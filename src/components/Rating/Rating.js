import React from 'react'
import PropTypes from 'prop-types'
import bemCx from 'bem-modifiers'
import './style.sass'


const Rating = ({ value }) => {
  let dots = []
  let i = 1
  while (i <= 3) {
    dots.push(<div className='rating__dot' key={i} />)
    i++
  }
  return (
    <div className={bemCx('rating', { [value]: value })}>{dots}</div>
  )
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
}

export default Rating
