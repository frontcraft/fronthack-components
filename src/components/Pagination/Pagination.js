import React, {Component} from 'react'
import Icon from '../Icon'
import bemCx from 'bem-modifiers'
import './style.sass'

/**
 * Element with minimalistic markup to switch between the pages
 * @render react
 * @name Pagination
 * @property {string} prop - explanation
 * @example
 *  <Pagination />
 */
class Pagination extends Component {
  render() {
    const { maxItems, callback, current } = this.props
    let items = []
    let i = 1
    while (i < maxItems) {
      items.push(i)
      i++
    }
    return(
      <div className="pagination">
        <div
          class="pagination__item"
          onClick={() => callback(current - 1)}
        ><Icon type="arrow-left" /></div>
        {items.map(item =>
          <div
            onClick={() => callback(item)}
            key={item}
            className={bemCx('pagination__item', { active: item === current })}
          >{item}</div>
        )}
        <div
          class="pagination__item"
          onClick={() => callback(current + 1)}
        ><Icon type="arrow-right" /></div>
      </div>
    )
  }
}

export default Pagination