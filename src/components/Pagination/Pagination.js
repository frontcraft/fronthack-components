import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import classNames from 'classnames'
import './style.sass'


const Pagination = ({ pagesInTotal, onClick, page, pagesMax }) => {
  const isTooManyPages = pagesInTotal > pagesMax + 1
  let items = []
  let i = 0
  while (
    (!isTooManyPages && i < pagesInTotal) ||
    (isTooManyPages && ((page <= pagesMax && i < pagesMax - 2) || (page > pagesMax - 1 && i < pagesMax - 3)))
  ) {
    items.push(i)
    i++
  }

  return (
    <div className='pagination'>
      <div
        className={classNames('pagination__item', { 'pagination__item--disabled': page === 0 })}
        onClick={() => onClick(page - 1)}
      ><Icon type='arrow-left' /></div>
      {items.map(item =>
        <div
          onClick={() => onClick(item)}
          key={item}
          className={classNames('pagination__item', { 'pagination__item--active': item === page })}
        >{item + 1}</div>
      )}
      {isTooManyPages &&
        <>
          {page >= pagesMax - 1 &&
            <div
              className={classNames('pagination__item', 'pagination__item--disabled')}
            >...</div>
          }
          {page >= pagesMax - 2 && page < pagesInTotal - 1 &&
            <div
              className={classNames('pagination__item', 'pagination__item--active')}
            >{page + 1}</div>
          }
          {page < pagesInTotal - 2 &&
            <div
              className={classNames('pagination__item', 'pagination__item--disabled')}
            >...</div>
          }
          <div
            onClick={() => onClick(pagesInTotal - 1)}
            className={classNames('pagination__item', { 'pagination__item--active': pagesInTotal - 1 === page })}
          >{pagesInTotal}</div>
        </>
      }
      <div
        className={classNames('pagination__item', { 'pagination__item--disabled': page + 1 >= pagesInTotal })}
        onClick={() => onClick(page + 1)}
      ><Icon type='arrow-right' /></div>
    </div>
  )
}

Pagination.defaultProps = {
  pagesMax: 8,
}

Pagination.propTypes = {
  pagesInTotal: PropTypes.number,
  onClick: PropTypes.func,
  page: PropTypes.number,
}

export default Pagination
