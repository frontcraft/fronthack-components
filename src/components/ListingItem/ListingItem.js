import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import './style.sass'


const ListingItem = ({
  id,
  title,
  date,
  description,
  mediaUrl,
}) =>
  <div className='listing-item'>
    { mediaUrl &&
      <div className='listing-item__media'>
        <img src={mediaUrl} alt='' />
      </div>
    }
    <div className='listing-item__text'>
      <span className='listing-item__meta'>{date}</span>
      <h3 className='listing-item__title'>{title}</h3>
      <div className='listing-item__description'>{description}</div>
      <div className='listing-item__footer'>
        <Button
          variant='primary'
          size='xs'
          className='pull-right'
          callback={() => alert(`Go to page of item #${id}`)}
        >More information</Button>
      </div>
    </div>
  </div>

ListingItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  mediaUrl: PropTypes.string,
}

export default ListingItem
