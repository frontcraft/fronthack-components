import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './style.sass'


const Tabs = ({ labels, children }) => {
  const [active, setActive] = React.useState(0)

  return (
    <div className='tabs' data-active-tab={active}>
      <div className='tabs__btns'>
        {labels.map((label, index) =>
          <div
            className={classNames('tabs__btn', { 'is-active': index === active })}
            onClick={() => setActive(index)}
            key={index}
          >{label}</div>
        )}
      </div>
      <div className='tabs__content is-open'>{children[active]}</div>
    </div>
  )
}

Tabs.propTypes = {
  labels: PropTypes.array.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
}

export default Tabs
