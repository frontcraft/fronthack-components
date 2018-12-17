import React from 'react'
import Icon from '../Icon'
import bemCx from 'bem-modifiers'
import './style.sass'

/**
 * Element with minimalistic markup to switch between the pages
 * @render react
 * @name Pagination
 * @property {integer} pages - number of total pages
 * @property {function} callback - operation to perform after click
 * @property {integer} current - current page number
 * @example
 *  <Pagination
 *    pages={5}
 *    callback={item => alert(item)}
 *    current={3}
 *  />
 */
class Pagination extends React.Component {
  render() {
    const { pages, onClick, current } = this.props
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
}

export default Pagination
