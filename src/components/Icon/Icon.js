import React from 'react'
import bemCx from 'bem-modifiers'
import './style.sass'


const Icon = ({ type, className }) => <i className={bemCx('icon', type, className)} />

export default Icon
