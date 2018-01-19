import React       from 'react'
import { View }    from 'react-native'
import { Toolbar } from 'react-native-material-ui'
import styled      from 'styled-components/native'

import Kitchen from './routers/kitchen.js'

export default class Router extends React.Component {
  render() {
    return (
      <Container>
        <Toolbar leftElement="menu" />
        <Kitchen />
      </Container>
    )
  }
}

const Container = styled.View`
  flex: 1
`
