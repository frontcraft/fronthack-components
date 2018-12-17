import React from 'react'
import './style.sass'


class Accordion extends React.Component {
  state = {
    openedItem: false,
  }
  handleClick(index) {
    this.setState({ openedItem: this.state.openedItem === index ? false : index })
  }
  render() {
    const { openedItem } = this.state
    return (
      <div className='accordion'>
        {this.props.items.map((item, index) => (
          <div className={`accordion__item${openedItem === index ? ' is-expanded' : ''}`} key={index}>
            <div
              className='accordion__title'
              onClick={() => this.handleClick(index)}
            >{item.title}</div>
            { openedItem === index &&
              <div className='accordion__content'>{item.content}</div>
            }
          </div>
        ))}
      </div>
    )
  }
}

export default Accordion
