import React from 'react'
import { View } from 'react-native'
import { Button, ListItem } from 'react-native-material-ui';
import styled from 'styled-components/native'

class Inventory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      foodItems: null
    }
  }

  nextPage = () => {
    this.props.navigation.navigate('Camera')
  }

  render() {
    return (
      <Container>
        {
          this.state.foodItems ?
          <View>
            <Button
              raised
              primary
              text="Add Food to Pantry"
              onPress={this.nextPage} />
            {
              this.state.foodItems.map((foodItem) => {
                return (
                  <ListItem
                    divider
                    centerElement={{
                      primaryText: foodItem.name,
                    }}
                    onPress={() => {}} />
                )
              })
            }
          </View>
          :
          <View>
            <Button
              raised
              primary
              text="Add Food to Pantry"
              onPress={this.nextPage} />
            <ListItem
              divider
              centerElement={{
                primaryText: 'Your Virtual Pantry is empty...',
              }}
              onPress={() => {}} />
          </View>
        }
      </Container>
    )
  }
}
export default Inventory

const Container = styled.View`
  flex: 1;
`
