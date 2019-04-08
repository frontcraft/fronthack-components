import React from 'react'
import PropTypes from 'prop-types'
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
    const { children } = this.props
    return (
      <div className='accordion'>
        {Array.isArray(children) && children.map((child, index) => ({
          ...child,
          props: {
            ...child.props,
            openedItem,
            index,
            handleClick: () => this.handleClick(index),
          },
        }))}
      </div>
    )
  }
}

Accordion.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
}

export default Accordion


export const AccordionItem = ({
  title,
  children,
  openedItem,
  index,
  handleClick,
}) =>
  <div
    className={`accordion__item${openedItem === index ? ' is-expanded' : ''}`}
    key={index}
  >
    <div className='accordion__title' onClick={() => handleClick()}>{title}</div>
    {openedItem === index &&
      <div className='accordion__content'>{children}</div>
    }
  </div>

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}
