import React                              from 'react'
import { ScrollView, View, Text }         from 'react-native'
import { Icon, Card, Subheader, Toolbar } from 'react-native-material-ui'
import { NavigationActions }              from 'react-navigation'
import styled                             from 'styled-components/native'

import Button from '../components/button.js'

const BASE_URL = 'https://bljp0y84gh.execute-api.us-west-2.amazonaws.com/Hack'

class ItemView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: null
    }
  }

  componentWillMount() {
    this.setState({ item: this.props.navigation.state.params.item })
  }

  deleteItem = () => {
    var body = { id: this.state.item.id }
    var options = {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
    fetch(`${BASE_URL}/user/pantry/deleteitem`, options)
      .then(response => response.json())
      .then(responseJson => {
        this.props.navigation.dispatch(NavigationActions.reset({
          index: 0,
          actions: [ NavigationActions.navigate({ routeName: 'Inventory'}) ]
        }))
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <Flex>
        <Toolbar
          centerElement={this.state.item.name}
          leftElement='arrow-back'
          onLeftElementPress={()=>{this.props.navigation.goBack()}}
        />
        <Container>
          <Card>
            {
              this.state.item ?
              <View>
                <MarginLeft>
                  <Subheader text='Nutritional Information:' />
                  <Margin>
                    <StyledText>
                      { 'Calories: ' + this.state.item.calories }
                    </StyledText>
                    {/* {
                      Object.keys(this.state.item.totalNutrients).map((key) => {
                        return <StyledText key={key}>{ this.state.item.totalNutrients[key].label + ': ' + parseInt(this.state.item.totalNutrients[key].quantity) + this.state.item.totalNutrients[key].unit }</StyledText>
                      })
                    }
                  </Margin>
                  <Subheader text='Allergy Information:' />
                  <Margin>
                    <StyledText>
                      { this.state.item.cautions.map((caution) => caution + "   " ) }
                    </StyledText> */}
                  </Margin>
                  {/* <Subheader text='Diet Restrictions:' />
                  <Margin>
                    <StyledText>
                      {
                        this.state.item.healthLabels.map((label) => {
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
                    </StyledText>
                  </Margin>
                  <Subheader text='Ingredients:' />
                  <Margin>
                    <StyledText>
                      { this.state.item.ingredients[0].parsed[0].foodContentsLabel }
                    </StyledText>
                  </Margin> */}
                </MarginLeft>
                <TopMargin>
                  <Margin>
                    <Button
                      accent
                      icon="cancel"
                      text="Delete This Item"
                      onLongPress={this.deleteItem} />
                  </Margin>
                </TopMargin>
              </View>
              :
              <LoadingMargin>
                <Subheader text='Loading...' />
              </LoadingMargin>
            }
          </Card>
        </Container>
      </Flex>
    )
  }
}

export default ItemView

const Flex = styled.View`
  flex: 1;
`

const Container = styled.ScrollView`
  background: #303030;
  flex: 1;
`

const Margin = styled.View`
  margin: 0 20px 20px 20px;
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

const StyledText = styled.Text`
  color: rgb(255, 255, 255);
  font-size: 18px;
`
