import React, {Component} from 'react'
import Button from '../Button'
// import './style.sass'

/**
 * Single item on a list of articles for example.
 * @render react
 * @name ListingItem
 * @property {string} id - unique item id
 * @property {string} title - featured title
 * @property {string} date - formatted date
 * @property {string} description - teaser text
 * @property {string} mediaUrl - url for the featured image
 * @example
 *  <ListingItem
 *    id="12345"
 *    title="Featured article name"
 *    date="16 October 2018"
 *    description="Teaser text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
 *    mediaUrl="http://placehold.it/200x145"
 *  />
 */
class ListingItem extends Component {
  render() {
    const {
      id,
      title,
      date,
      description,
      mediaUrl,
    } = this.props
    return(
      <div className="listing-item">
        { mediaUrl &&
          <div className="listing-item__media">
            <img src={mediaUrl} alt="" />
          </div>
        }
        <div className="listing-item__text">
          <span className="listing-item__meta">{date}</span>
          <h3 className="listing-item__title">{title}</h3>
          <div className="listing-item__description">{description}</div>
          <div className="listing-item__footer">
            <Button
              variant="primary"
              size="xs"
              className="pull-right"
              callback={() => alert(`Go to page of item #${id}`)}
            >More information</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default ListingItem