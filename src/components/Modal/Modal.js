import React, {Component} from 'react'
import bemCx from 'bem-modifiers'
// import './style.sass'

/**
 * Animated popup window
 * @render react
 * @name Modal
 * @property {string} size - Can be "xs", "sm", "lg" or leave empty as default
 * @property {string} title - Modal title
 * @property {node} trigger - Element that will act as a trigger
 * @property {bool} isOpen - Force open state with a prop
 * @example
 *  <Modal
 *    size="lg"
 *    title="Modal title"
 *    trigger={<Button variant="primary">Open modal</Button>}
 *    // isOpen
 *  >Modal content</Modal>
 */
class Modal extends Component {
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