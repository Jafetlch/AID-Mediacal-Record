import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { MainPage } from './pages/MainPage'
import { LoginPage } from './pages/LoginPage'
import { PrivateRoute } from './components/PrivateRoute'
import { PublicRoute } from './components/PublicRoute'

export const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route component={MainPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}
