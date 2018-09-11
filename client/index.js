const React = require('react')
const ReactDOM = require('react-dom')

import App from './App'

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    )
})
