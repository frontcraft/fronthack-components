import React, { Component } from 'react'
import './style.sass'

/**
 * Group of collapsible horizontal panels
 * @render react
 * @name Accordion
 * @property {array} items - Array of objects, that has two keys with sting values - title and content.
 * @example
 *  <Accordion items={[
 *    {
 *      title: 'First accordion item',
 *      content: 'Content for the first accordion'
 *    },
 *    {
 *      title: 'Second accordion item',
 *      content: 'Content for the first accordion'
 *    },
 *  ]}/>
 */
class Accordion extends Component {
  state = {
    openedItem: false
  }
  handleClick(index) {
    this.setState({openedItem: this.state.openedItem === index ? false : index})
  }
  render() {
    const { openedItem } = this.state
    return(
      <div className="accordion">
        {this.props.items.map((item, index) => (
          <div className={`accordion__item${openedItem === index ? ' is-checked' : ''}`} key={index}>
            <div
              className="accordion__title"
              onClick={() => this.handleClick(index)}
            >{item.title}</div>
            { openedItem === index &&
              <div className="accordion__content">{item.content}</div>
            }
          </div>
        ))}
      </div>
    )
  }
}

export default Accordion