import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import HomePage from './views/home-page'
import ErrorPage from './views/error-page'
import Turnos from './views/turnos'
import LoginPage from './views/login-page'
import Agenda from './views/agenda'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={HomePage} exact path="/home-page" />
        <Route component={ErrorPage} exact path="/error-page" />
        <Route component={Turnos} exact path="/turnos" />
        <Route component={LoginPage} exact path="/" />
        <Route component={Agenda} exact path="/agenda" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
