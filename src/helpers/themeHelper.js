import { createMuiTheme } from '@material-ui/core/styles'

export const themeHelper = createMuiTheme({
  palette: {
    primary: {
      light: '#E4363C',
      main: '#B70C12',
      dark: '#8D060B',
      contrastText: '#f1f1f1'
    },
    secondary: {
      light: '#F8BE65',
      main: '#FBAB31',
      dark: '#D69634',
      contrastText: '#1f1f1f'
    },
    common: {
      white: '#F5F7FB'
    }
  }
})
