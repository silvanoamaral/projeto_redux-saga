import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import history from '../../helpres/history'
import PreenchaDados from '../PreenchaDados'
import CadastroCertificado from '../CadastroCertificado'

import './App.css'

const App = () => {
  return (
    <Router history={history}>
        <Switch>
          <Route exact path="/" component={PreenchaDados} />
          <Route path="/formulario" component={ CadastroCertificado } />
          <Route path="/users">
          <h1>users</h1>
          </Route>
        </Switch>
    </Router>
  )
}

export default App
