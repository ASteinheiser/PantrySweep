import React, { Component } from 'react'
import { AppRegistry } from 'react-native'

import Router from './src/index.js'

export default class PantryApp extends Component {
  render() {
    return (
      <Router />
    )
  }
}

AppRegistry.registerComponent('PantryApp', () => PantryApp)
