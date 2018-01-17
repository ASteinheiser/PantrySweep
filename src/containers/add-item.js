import React from 'react'
import { View, Text } from 'react-native'
import { Button, Icon, Card, Subheader } from 'react-native-material-ui'
import { NavigationActions } from 'react-navigation'
import styled from 'styled-components/native'

const BASE_URL = 'https://bljp0y84gh.execute-api.us-west-2.amazonaws.com/Hack'

class AddItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      barcode: null,
      newItem: null,
      error: null
    }
  }

  async componentWillMount() {
    await this.setState({ barcode: this.props.navigation.state.params.barcode })

    fetch(`${BASE_URL}/food?upc=${this.state.barcode}`, { method: 'GET' })
      .then(response => response.json())
      .then(responseJson => {
        if(!responseJson.message) {
          if(responseJson.errorType) {
            this.setState({ error: 'Unknown Barcode...' })
          } else {
            this.setState({ newItem: responseJson })
          }
        } else {
          this.setState({ error: 'Internal Server Error...' })
        }
      })
      .catch(error => console.log(error))
  }

  addItemToInventory = () => {
    let body = this.state.newItem
    var options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
    fetch(`${BASE_URL}/user/pantry/additem`, options)
      .then(response => response.json())
      .then(responseJson => {
        this.props.navigation.dispatch(NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Inventory'})
          ]
        }))
      })
      .catch(error => console.log(error))
  }

  backToInventory = () => {
    this.props.navigation.dispatch(NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Inventory'})
      ]
    }))
  }

  render() {
    return (
      <Container>
        <Card>
          {
            this.state.newItem && !this.state.error ?
            <View>
              <HeaderMargin>
                <Subheader text={'Item Found:'} />
                <Margin>
                  <Text>
                    {this.state.newItem.name}
                  </Text>
                </Margin>
              </HeaderMargin>
              {
                this.state.newItem.cautions ?
                <MarginLeft>
                  <Subheader text='Allergy Information:' />
                  <Margin>
                    <Text>
                      { this.state.newItem.cautions.map((caution) => caution + "   " ) }
                    </Text>
                  </Margin>
                </MarginLeft>
                :
                ''
              }
              {
                this.state.newItem.healthLabels ?
                <MarginLeft>
                  <Subheader text='Diet Restrictions:' />
                  <Margin>
                    <Text>
                      {
                        this.state.newItem.healthLabels.map((label) => {
                          if(label === 'VEGAN') {
                            return label + "   "
                          }
                          if(label === 'VEGETARIAN') {
                            return label + "   "
                          }
                          if(label === 'KOSHER') {
                            return label + "   "
                          }
                        })
                      }
                    </Text>
                  </Margin>
                </MarginLeft>
                :
                ''
              }
              <TopMargin>
                <WhiteBg>
                  <Margin>
                    <Button
                      raised
                      primary
                      text="Add This Item"
                      onPress={this.addItemToInventory} />
                  </Margin>
                </WhiteBg>
                <WhiteBg>
                  <Margin>
                    <Button
                      raised
                      accent
                      text="Back to Inventory"
                      onPress={this.backToInventory} />
                  </Margin>
                </WhiteBg>
              </TopMargin>
            </View>
            :
            <View>
              {
                 this.state.error ?
                 <LoadingMargin>
                   <Subheader text={this.state.error} />
                   <WhiteBg>
                     <Margin>
                       <Button
                         raised
                         accent
                         text="Back to Inventory"
                         onPress={this.backToInventory} />
                     </Margin>
                   </WhiteBg>
                 </LoadingMargin>
                 :
                 <LoadingMargin>
                   <Subheader text={'Loading...'} />
                 </LoadingMargin>
              }
            </View>
          }
        </Card>
      </Container>
    )
  }
}
export default AddItem

const Container = styled.View`
  flex: 1;
  margin-top: 10px;
  overflow: scroll;
`

const Margin = styled.View`
  margin: 0 20px 20px 20px;
`

const WhiteBg = styled.View`
  background-color: white;
`

const HeaderMargin = styled.View`
  margin: 10px 10px 0 10px;
`

const LoadingMargin = styled.View`
  margin: 10px;
`

const MarginLeft = styled.View`
  margin-left: 10px;
`

const TopMargin = styled.View`
  margin-top: 20px;
`
