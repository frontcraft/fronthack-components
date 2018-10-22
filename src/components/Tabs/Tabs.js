import React, { Component } from 'react'
import PropTypes from 'prop-types'
import bemCx from 'bem-modifiers'
// import './style.sass'

/**
 * Switch between different views
 * @render react
 * @name Tabs
 * @property {array} labels - labels of tabs
 * @example
 *  <Tabs labels={['First', 'Second', 'Third']}>
 *    {[
 *      <div>Content of the first tab</div>,
 *      <div>Content of the second tab</div>,
 *      <div>Content of the third tab</div>
 *    ]}
 *  </Tabs>
 */
class Tabs extends Component {
  state = {
    active: 0,
  }
  render() {
    const { active } = this.state
    return(
      <div className="tabs">
        {this.props.labels.map((label, index) =>
          <div
            class={bemCx('tabs__label', {}, { 'is-active': index === active })}
            onClick={() => this.setState({ active: index })}
          >{label}</div>
        )}
        <div className="tabs__content">{this.props.children[active]}</div>
      </div>
    )
  }
}

Tabs.propTypes = {
  labels: PropTypes.array.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
}

export default Tabs