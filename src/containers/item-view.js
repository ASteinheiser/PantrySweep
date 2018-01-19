import React                             from 'react'
import { ScrollView, View, Text }        from 'react-native'
import { Button, Icon, Card, Subheader } from 'react-native-material-ui'
import { NavigationActions }             from 'react-navigation'
import styled                            from 'styled-components/native'

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
          actions: [
            NavigationActions.navigate({ routeName: 'Inventory'})
          ]
        }))
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <Container>
        <Card>
          {
            this.state.item ?
            <View>
              <HeaderMargin>
                <Subheader lines={2} text={this.state.item.name} />
              </HeaderMargin>
              <MarginLeft>
                <Subheader text='Nutritional Information:' />
                <Margin>
                  <ColoredText>
                    { 'Calories: ' + this.state.item.calories }
                  </ColoredText>
                  {
                    Object.keys(this.state.item.totalNutrients).map((key) => {
                      return <ColoredText key={key}>{ this.state.item.totalNutrients[key].label + ': ' + parseInt(this.state.item.totalNutrients[key].quantity) + this.state.item.totalNutrients[key].unit }</ColoredText>
                    })
                  }
                </Margin>
                <Subheader text='Allergy Information:' />
                <Margin>
                  <ColoredText>
                    { this.state.item.cautions.map((caution) => caution + "   " ) }
                  </ColoredText>
                </Margin>
                <Subheader text='Diet Restrictions:' />
                <Margin>
                  <ColoredText>
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
                  </ColoredText>
                </Margin>
                <Subheader text='Ingredients:' />
                <Margin>
                  <ColoredText>
                    { this.state.item.ingredients[0].parsed[0].foodContentsLabel }
                  </ColoredText>
                </Margin>
              </MarginLeft>
              <TopMargin>
                <WhiteBg>
                  <Margin>
                    <Button
                      raised
                      accent
                      style={{text:{color:'rgba(255, 255, 255, 0.8)'}}}
                      text="Delete This Item"
                      onLongPress={this.deleteItem} />
                  </Margin>
                </WhiteBg>
              </TopMargin>
            </View>
            :
            <LoadingMargin>
              <Subheader text='Loading...' />
            </LoadingMargin>
          }
        </Card>
      </Container>
    )
  }
}
export default ItemView

const Container = styled.ScrollView`
  background: #303030;
  flex: 1;
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

const ColoredText = styled.Text`
  color: rgb(255, 255, 255);
`
