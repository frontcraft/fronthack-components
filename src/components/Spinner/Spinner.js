import React from 'react'
import ReactLoading from 'react-loading'


const Spinner = ({ big, white, type, ...rest }) =>
  <span style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: big ? 80 : 0,
    paddingBottom: big ? 80 : 0,
  }}>
    <ReactLoading
      type={type}
      width={big ? 80 : 18}
      height={big ? 80 : 18}
      color={white ? '#fff' : '#ddd'}
      {...rest}
    />
  </span>

Spinner.defaultProps = {
  type: 'spinningBubbles',
}

export default Spinner
