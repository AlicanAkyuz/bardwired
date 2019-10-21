import React from 'react'
import rootStyles from '../../../rootStyles'
import { withStyles } from '@material-ui/core/styles'

function Home({ classes, testStr }) {
  return (
    <div className={classes.container}>
      <header className={classes.header}>BardWired</header>
      <header className={classes.subHeader}>{testStr}</header>
      <header className={classes.seubSubHeader}>{testStr}</header>
      <header className={classes.third}>{testStr}</header>
    </div>
  )
}

const styles = theme => ({
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.main,
    textAlign: 'center'
  },
  header: {
    fontFamily: theme.fonts.primary,
    fontSize: '10rem',
    color: theme.palette.secondary.main,
    margin: 0
  },
  subHeader: {
    fontFamily: theme.fonts.secondary,
    fontSize: '1rem',
    color: theme.palette.secondary.dark,
    margin: 0
  },
  seubSubHeader: {
    fontFamily: theme.fonts.secondary,
    fontSize: '1.4rem',
    color: theme.palette.secondary.main,
    margin: 0
  },
  third: {
    fontFamily: theme.fonts.secondary,
    fontSize: '1.8rem',
    color: theme.palette.secondary.light,
    margin: 0
  }
})

export default rootStyles(withStyles(styles)(Home))
