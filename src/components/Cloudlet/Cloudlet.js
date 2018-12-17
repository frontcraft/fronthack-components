import React from 'react'
import './style.sass'


class Cloudlet extends React.Component {
  render() {
    return (
      <div className='cloudlet'>{this.props.children}</div>
    )
  }
}

export default Cloudlet
