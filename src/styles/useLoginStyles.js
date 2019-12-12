import makeStyles from '@material-ui/core/styles/makeStyles'

export const useLoginStyles = makeStyles(theme => ({
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
