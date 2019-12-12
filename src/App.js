import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { MainPage } from './pages/MainPage'
import { LoginPage } from './pages/LoginPage'
import { PrivateRoute } from './components/PrivateRoute'

export const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Switch>
          <Route component={MainPage} />
          {/* {localStorage.getItem('user') ? (
          ) : (
            <Route exact path="/login" component={LoginPage} />
          )} */}
        </Switch>
      </Router>
    </ThemeProvider>
  )
}
