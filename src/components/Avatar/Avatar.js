import React from 'react'
import './style.sass'
import classNames from 'classnames'
import initials from 'initials'


const Avatar = ({ image, name, size, className }) =>
  <div className={classNames('avatar', {
    [`avatar--${size}`]: size,
    [className]: className,
  })}>
    {image
      ? <img src={image} alt={`${name}'s profile picture`} />
      : initials(name).substring(0, 2).toUpperCase()
    }
  </div>

export default Avatar
