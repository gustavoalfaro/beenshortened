import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './components/App'
import ShortLink from './pages/ShortLink'

import './index.sass'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/:id" component={ShortLink} />
    </div>
  </Router>,
  document.getElementById('root'),
)

serviceWorker.unregister()
