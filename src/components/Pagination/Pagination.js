import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import bemCx from 'bem-modifiers'
import './style.sass'


const Pagination = ({ pages, onClick, current }) => {
  let items = []
  let i = 1
  while (i < pages) {
    items.push(i)
    i++
  }
  return (
    <div className='pagination'>
      <div
        className='pagination__item'
        onClick={() => onClick(current - 1)}
      ><Icon type='arrow-left' /></div>
      {items.map(page =>
        <div
          onClick={() => onClick(page)}
          key={page}
          className={bemCx('pagination__item', { active: page === current })}
        >{page}</div>
      )}
      <div
        className='pagination__item'
        onClick={() => onClick(current + 1)}
      ><Icon type='arrow-right' /></div>
    </div>
  )
}

Pagination.propTypes = {
  pages: PropTypes.number,
  onClick: PropTypes.func,
  current: PropTypes.number,
}

export default Pagination
