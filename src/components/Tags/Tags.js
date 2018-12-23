import React from 'react'
import './style.sass'


const Tags = ({ tags }) =>
  tags
    ? <div className='tags'>
      {tags.map((tag, index) =>
        <span key={index} className='tags__tag'>{tag}</span>
      )}
    </div>
    : null

export default Tags
