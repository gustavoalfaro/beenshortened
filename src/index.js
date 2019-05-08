import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import ShortLink from './pages/ShortLink'
import Top from './pages/Top'

import './index.sass'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/top" component={Top} />
      <Route exact path="/:slug" component={ShortLink} />
    </Switch>
  </Router>,
  document.getElementById('root'),
)

serviceWorker.unregister()
