import React from 'react'
import PropTypes from 'prop-types'
import bemCx from 'bem-modifiers'
import './style.sass'
import Icon from '../Icon'


const Modal = ({
  isOpen: isOpenProp,
  trigger,
  title,
  size,
  onClose,
  children,
}) => {
  const [isOpen, setIsOpen] = React.useState()

  React.useEffect(() => {
    if (isOpenProp) {
      setIsOpen(isOpenProp)
    }
  }, [])

  React.useEffect(() => {
    if (isOpenProp !== isOpen) {
      setIsOpen(isOpenProp)
    }
  }, [isOpenProp])

  return (
    <div className={bemCx('modal', { [size]: size }, 'is-open')}>

      {trigger && <span onClick={() => setIsOpen(true)}>{trigger}</span>}

      {isOpen &&
        <div className='modal__inner'>
          <div className='modal__content'>
            {title && <h2 className='modal__title'>{title}</h2>}
            {children}
          </div>
          <div
            className='modal__close'
            onClick={() => {
              setIsOpen(false)
              onClose && onClose()
            }}
          ><Icon type='x' /></div>
        </div>
      }
      {isOpen &&
        <div
          className='modal__overlay'
          onClick={() => {
            setIsOpen(false)
            onClose && onClose()
          }}
        />
      }
    </div>
  )
}

Modal.propTypes = {
  trigger: PropTypes.node,
  title: PropTypes.node,
  size: PropTypes.oneOf(['xs', 'sm', 'lg']),
}

export default Modal
