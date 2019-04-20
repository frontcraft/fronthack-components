import React from 'react'
import Pagination from '.'

export default () => {
  const [currentItem, setCurrentItem] = React.useState(1)
  return (
    <Pagination
      pages={5}
      onClick={item => setCurrentItem(item)}
      current={currentItem}
    />
  )
}
