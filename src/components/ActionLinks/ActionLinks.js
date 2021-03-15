import React from 'react'
import ReactLoading from 'react-loading'
import classNames from 'classnames'
import './style.sass'
import Modal from '../Modal'
import Button from '../Button'
import Icon from '../Icon'
// import { push } from '../../history'


const ActionLinks = ({ editUrl, deleteAction, visible, still }) => {
  const [loading, setLoading] = React.useState(false)
  return (
    visible
      ? <div className={classNames('action-links', { 'action-links--still': still })}>
        {editUrl &&
          <button
            className='action-links__link'
            title='Edit'
            onClick={e => {
              e.preventDefault()
              push(editUrl)
            }}
          ><Icon type='pencil' /></button>
        }
        {deleteAction &&
          <Modal size='sm' isOpen={loading} trigger={
            <button
              className='action-links__link action-links__link--danger'
              title='Bearbeiten'
              onClick={e => e.preventDefault()}
            ><Icon type='x' /></button>
          }>
            Are you sure you want to permanently delete this item?<br /><br />
            <Button
              variant='danger'
              onClick={async e => {
                e.preventDefault()
                setLoading(true)
                await deleteAction()
                setLoading(false)
              }}
              disabled={loading}
            >
              {loading
                ? <React.Fragment>
                  <ReactLoading
                    type='spinningBubbles'
                    width={18}
                    height={18}
                    color='#ffffff'
                  /> Delete
                </React.Fragment>
                : 'Delete'
              }
            </Button>
          </Modal>
        }
      </div>
      : <div className='action-links' />
  )
}

export default ActionLinks
