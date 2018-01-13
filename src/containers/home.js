import React from 'react'
import { Button, Text, View } from 'react-native'
import styled from 'styled-components/native'

class Home extends React.Component {
  nextPage = () => {
    this.props.navigation.navigate('home')
  }

  render() {
    return (
      <StyledView>
        <StyledText>
          Welcome to the PantryApp
        </StyledText>
        <Margin>
          <Button title='Get Started' onPress={this.nextPage}/>
        </Margin>
      </StyledView>
    )
  }
}
export default Home

const StyledView = styled.View`
  flex: 1;
  background-color: #14568F;
`

const StyledText = styled.Text`
  font-size: 25px;
  padding-left: 20px;
  color: white;
`

const Margin = styled.View`
  margin: 0 50px 0 50px;
`
