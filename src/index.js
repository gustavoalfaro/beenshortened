import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from 'pages/Home'
import Redirection from 'pages/Redirection'
import Top from 'pages/Top'
import 'dotenv/config'

import './index.sass'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/top" component={Top} />
      <Route exact path="/:slug" component={Redirection} />
    </Switch>
  </Router>,
  document.getElementById('root'),
)

serviceWorker.unregister()
