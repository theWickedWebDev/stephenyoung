import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Loadable from 'react-loadable';

import App from './App'

const Main = () => (
  <Router>
    <App />
  </Router>
)

Loadable.preloadReady().then(() => {
  ReactDOM.hydrate(
    <Main />, document.getElementById('root')
  )
});
