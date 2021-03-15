import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './style.sass'


const Rating = ({ value }) => {
  let dots = []
  let i = 1
  while (i <= 3) {
    dots.push(<div className='rating__dot' key={i} />)
    i++
  }
  return (
    <div className={classNames('rating', `rating--${value}`)}>{dots}</div>
  )
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
}

export default Rating
