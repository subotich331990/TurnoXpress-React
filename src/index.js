import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Turnos from './views/turnos'
import HomaPage from './views/homa-page'
import Home from './views/home'
import NotFound from './views/not-found'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Turnos} exact path="/turnos" />
        <Route component={HomaPage} exact path="/home-page" />
        <Route component={Home} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
