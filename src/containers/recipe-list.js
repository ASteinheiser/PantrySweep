import React from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'

class RecipeList extends React.Component {
  render() {
    return (
      <Container>
        <Title>
          Recipe List Page!!!
        </Title>
      </Container>
    )
  }
}
export default RecipeList

const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #14568F;
`

const Title = styled.Text`
  font-size: 25px;
  text-align: center;
  color: white;
`
