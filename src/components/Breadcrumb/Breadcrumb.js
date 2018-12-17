import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'


class Breadcrumb extends React.Component {
  render() {
    return (
      <div className='breadcrumb'>
        {this.props.items.map((item, index) =>
          <span className='breadcrumb__item' key={index}>{item}</span>
        )}
      </div>
    )
  }
}

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequried,
}

export default Breadcrumb
