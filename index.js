import React                from 'react'
import { AppRegistry }      from 'react-native'
import { ThemeProvider }    from 'react-native-material-ui'
import { fade }             from 'material-ui/utils/colorManipulator'

import Router                          from './src/router.js'
import { pink700, blueGrey700, white } from './colors.js'

const uiTheme = {
  // spacing: spacing,
  // typography: typography,
  fontFamily: 'Roboto',
  palette: {
    primaryColor: pink700,
    accentColor: blueGrey700,
    primaryTextColor: fade(white, 0.8),
    secondaryTextColor: fade(white, 0.8),
    canvasColor: '#303030',
    borderColor: fade(white, 0.3),
    disabledColor: fade(white, 0.3),
    pickerHeaderColor: fade(white, 0.12),
    clockCircleColor: fade(white, 0.12),
  },
  toolbar: {
    container: {
      height: 65
    }
  }
}

export default class PantrySweep extends React.Component {
  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <Router />
      </ThemeProvider>
    )
  }
}

AppRegistry.registerComponent('PantrySweep', () => PantrySweep)
