import React from 'react'
import bemCx from 'bem-modifiers'
import './style.sass'


class Modal extends React.Component {
  state = {
    isOpen: this.props.isOpen,
  }
  render() {
    const { children, size, title, trigger } = this.props
    return(
      <div className={bemCx('modal', {
        [size]: size
      }, 'is-open')}>
        <span onClick={() => this.setState({ isOpen: true })}>{trigger}</span>

        { this.state.isOpen &&
          <div className="modal__inner">
            {title && <div className="modal__title">{title}</div>}
            <div className="modal__content">{children}</div>
          </div>
        }
        { this.state.isOpen &&
          <div
            className="modal__overlay"
            onClick={() => this.setState({ isOpen: false })}
          />
        }
      </div>
    )
  }
}

export default Modal