import React from 'react'
import { render } from 'react-dom'
import './index.css'
import { App } from './App'
import { UserProvider } from './context/UserContext'
// import * as serviceWorker from './serviceWorker'

render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()
