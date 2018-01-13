import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'

const StyledView = styled.View`
  flex: 1;
  justify-content: center;
`

const StyledText = styled.Text`
  font-size: 20;
  text-align: center;
  margin: 20;
`

class Loading extends React.Component {
  render() {
    return (
      <StyledView>
        <StyledText>
          Processing Image...
        </StyledText>
      </StyledView>
    )
  }
}

export default Loading