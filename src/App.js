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
import { useUsersValues } from './context/UserContext'
import { DisplayPage } from './pages/DisplayPage'

export const App = () => {
  const { currentUser } = useUsersValues()

  return (
    <ThemeProvider>
      <Router>
        <Switch>
          <Route exact path="/3117fth" component={DisplayPage} />
          <Route exact path="/login" component={LoginPage} />
          {currentUser !== null ? (
            <Route component={MainPage} />
          ) : (
            <Redirect to="/login" />
          )}
        </Switch>
      </Router>
    </ThemeProvider>
  )
}
