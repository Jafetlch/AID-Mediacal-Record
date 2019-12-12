import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { themeHelper } from '../helpers/themeHelper'

export const ThemeProvider = ({ children }) => {
  return <MuiThemeProvider theme={themeHelper}>{children}</MuiThemeProvider>
}
