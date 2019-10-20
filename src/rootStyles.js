import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

const theme = createMuiTheme({
  fonts: {
    primary: 'Shadows Into Light',
    secondary: 'Turret Road'
  },
  palette: {
    type: 'dark',
    primary: {
      light: '#393939',
      main: '#1e1e1e',
      dark: '#141414'
    },
    secondary: {
      light: '#F52E2E',
      main: '#d21e1e',
      dark: '#AC1919'
    }
  }
})

function rootStyles(Component) {
  function RootStyles(props) {
    // make the theme available down the React tree
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    )
  }

  return RootStyles
}

export default rootStyles
