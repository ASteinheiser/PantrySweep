import React                               from 'react'
import { Text, View, ScrollView }          from 'react-native'
import { Button, ListItem, Icon, Toolbar } from 'react-native-material-ui'
import styled                              from 'styled-components/native'

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
      .then(responseJson => {
        if(!responseJson.message) {
          this.setState({ foodItems: responseJson })
        }
      })
      .catch(error => console.log(error))
  }

  nextPage = () => {
    this.props.navigation.navigate('Camera')
  }

  openMenu(e) {
    this.props.navigation.navigate('DrawerToggle')
  }

  render() {
    return (
      <Container>
        <Toolbar
          centerElement='Toolbar'
          leftElement='menu'
          onLeftElementPress={this.openMenu.bind(this)}
        />
        <Margin>
          <Button
            raised
            primary
            style={{text:{color:'rgba(255, 255, 255, 0.8)'}}}
            icon="camera"
            text="Scan Food"
            onPress={this.nextPage} />
        </Margin>
        <Margin>
          <Button
            raised
            accent
            style={{text:{color:'rgba(255, 255, 255, 0.8)'}}}
            icon="check"
            text="Secondary Button"
            onPress={() => {}} />
        </Margin>
        {
          this.state.foodItems ?
          <View>
            {
              this.state.foodItems.map((foodItem, key) => {
                return (
                  <ListItem
                    key={key}
                    divider
                    leftElement={<Icon name="keyboard-arrow-right" />}
                    centerElement={{primaryText: foodItem.name}}
                    onPress={() => this.props.navigation.navigate('ItemView', { item: foodItem })} />
                )
              })
            }
          </View>
          :
          <View>
            <ListItem
              divider
              centerElement={{primaryText: 'Your Virtual Pantry is empty...'}} />
          </View>
        }
      </Container>
    )
  }
}
export default Inventory

const Container = styled.ScrollView`
  background-color: #303030;
`

const Margin = styled.View`
  margin: 15px 20px;
`

const MarginRight = styled.View`
  margin-right: 20px;
`
