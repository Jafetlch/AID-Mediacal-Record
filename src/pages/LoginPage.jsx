import React, { useState } from 'react'

import Container from '@material-ui/core/es/Container'
import Typography from '@material-ui/core/es/Typography'
import Box from '@material-ui/core/es/Box'
import TextField from '@material-ui/core/es/TextField'
import Button from '@material-ui/core/es/Button'
import Paper from '@material-ui/core/es/Paper'

import { makeStyles } from '@material-ui/styles'

import { Copyright } from '../components/Copyright'
import { ImageContainer } from '../components/ImageContainer'

import logo from '../assets/logo.svg'
import { useUsersValues } from '../../../frontend/src/context/UserContext'

const useStyles = makeStyles(theme => ({
  logo: {
    // background: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(2),
    padding: '30px 0'
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px'
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

export const LoginPage = ({ history }) => {
  const [email, setEmail] = useState('johndoe@gmail.com')
  const [password, setPassword] = useState('secret')
  const [error, setError] = useState('')

  const { setCurrentUser } = useUsersValues()

  const classes = useStyles()

  const submitLogin = () => {
    console.log('1')
    if (email === 'johndoe@gmail.com' && password === 'secret') {
      localStorage.setItem('user', 'feather')
      setCurrentUser(0)
      history.push('/')
    } else if (email === 'doc@gmail.com' && password === 'secret') {
      localStorage.setItem('user', 'feather')
      console.log('3')
      setCurrentUser(1)
      history.push('/')
    } else {
      setError('Los datos no son los correctos.')
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.logo}>
        <ImageContainer img={logo} height="81.99" width="207.37" />
      </Paper>
      <Paper className={classes.body}>
        <Typography component="h1" variant="h5" color="primary">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submitLogin}
          >
            Sign In
          </Button>
          {error && (
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '14px', color: '#B70C12' }}>
                {error}
              </span>
            </div>
          )}
        </form>
      </Paper>

      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}
