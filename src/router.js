import React       from 'react'
import { View }    from 'react-native'
import { Toolbar } from 'react-native-material-ui'
import styled      from 'styled-components/native'

import Kitchen from './routers/kitchen.js'

export default class Router extends React.Component {
  openMenu(e) {
    console.log('opening menu')
  }

  render() {
    return (
      <Container>
        <Toolbar
          centerElement='Toolbar'
          leftElement='menu'
          onLeftElementPress={this.openMenu}
        />
        <Kitchen />
      </Container>
    )
  }
}

const Container = styled.View`
  flex: 1
`
