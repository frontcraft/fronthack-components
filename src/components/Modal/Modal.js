import React from 'react'
import PropTypes from 'prop-types'
import bemCx from 'bem-modifiers'
import './style.sass'
import Icon from '../Icon'


class Modal extends React.Component {
  state = {
    isOpen: false,
  }
  componentDidMount() {
    if (typeof this.props.isOpen !== 'undefined' && this.props.isOpen) {
      this.setState({ isOpen: true })
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.isOpen === prevState.isOpen && this.props.isOpen !== this.state.isOpen) {
      this.setState({ isOpen: this.props.isOpen })
    }
  }
  render() {
    const { children, size, title, trigger } = this.props
    return (
      <div className={bemCx('modal', {
        [size]: size,
      }, 'is-open')}>
        <span onClick={() => this.setState({ isOpen: true })}>{trigger}</span>

        { this.state.isOpen &&
          <div className='modal__inner'>
            {title && <div className='modal__title'>{title}</div>}
            <div className='modal__content'>{children}</div>
            <div
              className='modal__close'
              onClick={() => this.setState({ isOpen: false })}
            ><Icon type='x' /></div>
          </div>
        }
        { this.state.isOpen &&
          <div
            className='modal__overlay'
            onClick={() => this.setState({ isOpen: false })}
          />
        }
      </div>
    )
  }
}

Modal.propTypes = {
  trigger: PropTypes.node.isRequired,
  title: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'lg']),
}

export default Modal
