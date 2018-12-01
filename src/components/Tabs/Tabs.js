import React from 'react'
import PropTypes from 'prop-types'
import bemCx from 'bem-modifiers'
import './style.sass'


class Tabs extends React.Component {
  state = {
    active: 0,
  }
  render() {
    const { active } = this.state
    return(
      <div className="tabs" data-active-tab={active}>
        {this.props.labels.map((label, index) =>
          <div
            className={bemCx('tabs__label', {}, { 'is-active': index === active })}
            onClick={() => this.setState({ active: index })}
            key={index}
          >{label}</div>
        )}
        <div className="tabs__content is-open">{this.props.children[active]}</div>
      </div>
    )
  }
}

Tabs.propTypes = {
  labels: PropTypes.array.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
}

export default Tabs