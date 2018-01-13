import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { COLOR, ThemeProvider } from 'react-native-material-ui'

import Router from './src/index.js'

const uiTheme = {
  palette: {
    primaryColor: COLOR.paperBlue
  }
}

export default class PantrySweep extends Component {
  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <Router />
      </ThemeProvider>
    )
  }
}

AppRegistry.registerComponent('PantrySweep', () => PantrySweep)
