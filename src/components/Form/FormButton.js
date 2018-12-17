import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import ReactLoading from 'react-loading'
import Button from '../Button'
import { FormConsumer } from './Form'
import { getValues, formIsInvalid } from './helpers'


/**
 * A button component to handle form actions, like submit or reset.
 */
const FormButton = ({ callback, size, variant, reset, loading, className, children }) => (
  <FormConsumer>
    {({ fieldsData, setValue }) => {
      return (
        <Button
          size={size}
          variant={variant}
          onClick={() => {
            callback && callback(getValues(fieldsData))
            reset && setValue()
          }}
          disabled={formIsInvalid(fieldsData) || loading}
          className={className}
        >
          {loading &&
            <Fragment>
              <ReactLoading
                type='spinningBubbles'
                width={18}
                height={18}
                color='#9e9e9e'
              />&nbsp;
            </Fragment>
          }
          {children}
        </Button>
      )
    }}
  </FormConsumer>
)

FormButton.propTypes = {
  callback: PropTypes.func,
  size: PropTypes.string,
  variant: PropTypes.string,
  loading: PropTypes.bool,
  reset: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default FormButton
