import React, { Component } from 'react'
import './style.sass'


class Tags extends Component {
  render(){
    if (this.props.tags) {
      return (
        <div className="tags">
          {this.props.tags.map((tag, index) => (
            <span key={index} className="tags__tag">{tag}</span>
          ))}
        </div>
      );
    }
    return null
  }
}

Tags.defaultProps = {
  tags: ['travel', 'nature', 'people'],
}

export default Tags
