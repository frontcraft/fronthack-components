import React from 'react'
import Pagination from '.'

export default () => {
  const [currentItem, setCurrentItem] = React.useState(1)
  return (
    <Pagination
      onClick={item => setCurrentItem(item)}
      page={currentItem}
      pagesInTotal={10}
      pagesMax={5}
    />
  )
}
