import React                      from 'react'
import { Text, View, ScrollView } from 'react-native'
import { Icon, Toolbar }          from 'react-native-material-ui'
import styled                     from 'styled-components/native'

import Button   from '../components/button.js'
import ListItem from '../components/list-item.js'

const BASE_URL = 'https://bljp0y84gh.execute-api.us-west-2.amazonaws.com/Hack'

class Inventory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      foodItems: [
        {
          key: '0',
          name: 'Apples',
          calories: '100'
        },
        {
          key: '0',
          name: 'Bananas',
          calories: '90'
        },
        {
          key: '0',
          name: 'Oranges',
          calories: '80'
        }
      ]
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

  render() {
    return (
      <Flex>
        <Toolbar
          centerElement='Pantry'
          leftElement='menu'
          onLeftElementPress={()=>{this.props.navigation.navigate('DrawerToggle')}}
        />
        <Container>
          <MarginTop>
            <Button
              primary
              icon="camera"
              text="Scan Food"
              onPress={this.nextPage} />
          </MarginTop>
          <MarginBottom>
            <Button
              accent
              icon="assignment"
              text="Enter Food"
              onPress={() => {}} />
          </MarginBottom>
          {
            this.state.foodItems ?
            <View>
              {
                this.state.foodItems.map((foodItem, key) => {
                  return (
                    <ListItem
                      key={key}
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
                centerElement={{primaryText: 'Your Virtual Pantry is empty...'}} />
            </View>
          }
        </Container>
      </Flex>
    )
  }
}
export default Inventory

const Flex = styled.View`
  flex: 1;
`

const Container = styled.ScrollView`
  background-color: #303030;
`

const MarginTop = styled.View`
  margin: 25px 20px 15px 20px;
`

const MarginBottom = styled.View`
  margin: 15px 20px 25px 20px;
`

const MarginRight = styled.View`
  margin-right: 20px;
`
