import React from 'react'
import { View, Text } from 'react-native'
import { Button, ListItem, Icon } from 'react-native-material-ui'
import styled from 'styled-components/native'

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
      <Container>
        <WhiteBg>
          <Margin>
            <Button
              raised
              primary
              text="Fetch Recipes"
              onPress={this.getRecipes} />
          </Margin>
        </WhiteBg>
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
                    centerElement={<MarginRight><Text>{this.state.recipeList[recipeItem].name}</Text></MarginRight>}
                    onPress={() => this.props.navigation.navigate('RecipeView', { recipe: this.state.recipeList[recipeItem] })} />
                )
              })
            }
          </View>
          :
          <View>
            <ListItem
              divider
              leftElement={<Icon name="import-contacts" />}
              centerElement={{
                primaryText: 'You have no recipes!',
              }} />
            <ListItem
              divider
              leftElement={<Icon name="help-outline" />}
              centerElement={{
                primaryText: 'Feature coming soon...',
              }} />
          </View>
        }
      </Container>
    )
  }
}
export default RecipeList

const Container = styled.View`
  flex: 1;
`

const Margin = styled.View`
  margin: 15px 20px;
`

const MarginRight = styled.View`
  margin-right: 20px;
`

const WhiteBg = styled.View`
  background-color: white;
`
