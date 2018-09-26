import React, {Component} from 'react'
import './style.sass'

/**
 * React component that displays given array as a tags.
 * @render react
 * @name Tags
 * @property {array} tags - Array of strings.
 * @example
 *  <Tags tags={['travel', 'nature', 'people']}/>
 */
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
