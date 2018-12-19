import React from 'react'
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

export default Breadcrumb
