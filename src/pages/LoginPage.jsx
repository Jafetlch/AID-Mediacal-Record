import React from 'react'

import Container from '@material-ui/core/es/Container'
import Typography from '@material-ui/core/es/Typography'
import Box from '@material-ui/core/es/Box'
import TextField from '@material-ui/core/es/TextField'
import FormControlLabel from '@material-ui/core/es/FormControlLabel'
import Checkbox from '@material-ui/core/es/Checkbox'
import Button from '@material-ui/core/es/Button'
import Paper from '@material-ui/core/es/Paper'

import { Copyright } from '../components/Copyright'
import { ImageContainer } from '../components/ImageContainer'
import { useLoginStyles } from '../styles/useLoginStyles'

import logo from '../assets/logo.svg'

export const LoginPage = () => {
  const classes = useLoginStyles()

  const loginCallback = e => {
    e.preventDefault()
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
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={loginCallback}
          >
            Sign In
          </Button>
        </form>
      </Paper>

      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}
