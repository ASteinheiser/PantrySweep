import React from 'react'
import { View } from 'react-native'
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
              this.state.foodItems.map((foodItem, key) => {
                return (
                  <ListItem
                    key={key}
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
