import React from 'react'
import { View } from 'react-native'
import { Button, ListItem, Icon } from 'react-native-material-ui'
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
        <WhiteBg>
          <Margin>
            <Button
              raised
              primary
              text="Scan Food"
              onPress={this.nextPage} />
          </Margin>
        </WhiteBg>
        {
          this.state.foodItems ?
          <View>
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
            <ListItem
              divider
              leftElement={<Icon name="gradient" />}
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

const Margin = styled.View`
  margin: 15px 20px;
`

const WhiteBg = styled.View`
  background-color: white;
`
