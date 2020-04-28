import React from 'react'
import PropTypes from 'prop-types'
import Spinner from '../Spinner'

const Loader = ({ loading, error, children }) => {
  return (
    loading
      ? <Spinner big />
      : error
        ? <p>Error! Could not load a data from server.</p>
        : children
  )
}

Loader.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default Loader
