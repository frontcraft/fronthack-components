import React, { Component } from 'react'
import PropTypes from 'prop-types';
// import './style.sass'

/**
 * Shows progress through numbered steps
 * @render react
 * @name Stepper
 * @property {array} steps - Names of the steps
 * @property {integer} current - Number of highlighted step
 * @example
 *  <Stepper
 *    steps={['Cart', 'Shipping', 'Billing', 'Summary', 'Complete']}
 *    current={2}
 *  />
 */
class Stepper extends Component {
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