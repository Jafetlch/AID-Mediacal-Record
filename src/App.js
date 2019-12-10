import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { MainPage } from './pages/MainPage'

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={MainPage} />
      </Switch>
    </Router>
  )
}
