import React from 'react'
import PropTypes from 'prop-types'
import bemCx from 'bem-modifiers'
import './style.sass'


const Icon = ({ type, className }) => <i className={bemCx('icon', type, className)} />

Icon.propTypes = {
  type: PropTypes.string,
}

export default Icon
