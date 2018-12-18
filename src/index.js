import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker();

// This is an entrypoint for the Fronthack development scripts. If you remove
// it, you will loose the ability to use a following tools: design overlay and
// canvas, which are described here: http://docs.fronthack.com/en/recognition
(process.env.NODE_ENV === 'development') && import('fronthack-scripts')
