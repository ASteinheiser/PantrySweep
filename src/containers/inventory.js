import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import { Button, ListItem, Icon } from 'react-native-material-ui'
import styled from 'styled-components/native'

const BASE_URL = 'https://bljp0y84gh.execute-api.us-west-2.amazonaws.com/Hack'

class Inventory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      foodItems: null
    }
  }

  componentWillMount() {
    fetch(`${BASE_URL}/user/pantry/getitem`, { method: 'GET' })
      .then(response => response.json())
      .then(responseJson => this.setState({ foodItems: responseJson }))
      .catch(error => console.log(error))
  }

  nextPage = () => {
    this.props.navigation.navigate('Camera')
  }

  deleteItem = (e) => {
    console.log(e)
  }

  viewItem = (e) => {
    console.log(e)
  }

  onPress = (e) => {
    console.log(e)
  }

  render() {
    return (
      <ScrollView>
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
              this.state.foodItems.map((foodItem, key) => {
                return (
                  <ListItem
                    key={key}
                    divider
                    onRightElementPress={this.deleteItem}
                    onCenterElementPress={this.viewItem}
                    leftElement={<Icon name="keyboard-arrow-right" />}
                    rightElement={<MarginRight><Icon color='#8e0000' name="delete-forever" /></MarginRight>}
                    centerElement={<MarginRight><Text>{foodItem.name}</Text></MarginRight>}
                    onPress={this.onPress} />
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
              }} />
          </View>
        }
      </ScrollView>
    )
  }
}
export default Inventory

const Margin = styled.View`
  margin: 15px 20px;
`

const WhiteBg = styled.View`
  background-color: white;
`

const MarginRight = styled.View`
  margin-right: 20px;
`
