import React from 'react'
import PropTypes from 'prop-types';
import './style.sass'


class Stepper extends React.Component {
  render() {
    const { steps, current } = this.props
    return(
      <div className="stepper">
        { steps.map((step, index) =>
          <div
            className={`stepper__item${ (current && current === index) ? ' is-active' : ''}`}
            key={index}
          ><div className="stepper__label">{step}</div></div>
        )}
      </div>
    )
  }
}

Stepper.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  current: PropTypes.number,
}

export default Stepper