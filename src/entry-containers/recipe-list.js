import React                               from 'react'
import { ScrollView, View, Text }          from 'react-native'
import { Button, ListItem, Icon, Toolbar } from 'react-native-material-ui'
import styled                              from 'styled-components/native'

import recipes from '../config/recipes.json'

class RecipeList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recipeList: null
    }
  }

  getRecipes = () => {
    this.setState({ recipeList: recipes })
  }

  render() {
    return (
      <Flex>
        <Toolbar
          centerElement='Recipes'
          leftElement='menu'
          onLeftElementPress={()=>{this.props.navigation.navigate('DrawerToggle')}}
        />
        <Container>
          <Margin>
            <Button
              raised
              primary
              style={{text:{color:'rgba(255, 255, 255, 0.8)'}}}
              icon="chrome-reader-mode"
              text="Fetch Recipes"
              onPress={this.getRecipes} />
          </Margin>
          {
            this.state.recipeList ?
            <View>
              {
                Object.keys(this.state.recipeList).map((recipeItem) => {
                  return (
                    <ListItem
                      key={this.state.recipeList[recipeItem].id}
                      divider
                      leftElement={<Icon name="keyboard-arrow-right" />}
                      centerElement={{primaryText: this.state.recipeList[recipeItem].name}}
                      onPress={() => this.props.navigation.navigate('RecipeView', { recipe: this.state.recipeList[recipeItem] })} />
                  )
                })
              }
            </View>
            :
            <View>
              <ListItem
                divider
                centerElement={{primaryText: 'Your Recipe Book is empty...'}} />
            </View>
          }
        </Container>
      </Flex>
    )
  }
}
export default RecipeList

const Flex = styled.View`
  flex: 1;
`

const Container = styled.ScrollView`
  background-color: #303030;
  flex: 1;
`

const Margin = styled.View`
  margin: 25px 20px;
`

const MarginRight = styled.View`
  margin-right: 20px;
`
