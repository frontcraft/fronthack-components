import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'


const Tags = ({ tags }) =>
  tags
    ? <div className='tags'>
      {tags.map((tag, index) =>
        <span key={index} className='tags__tag'>{tag}</span>
      )}
    </div>
    : null

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
}

export default Tags
