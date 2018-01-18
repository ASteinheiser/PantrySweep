import React from 'react'
import { ScrollView, View, Text } from 'react-native'
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
              icon="chrome-reader-mode"
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
              centerElement={<CenterText>Your Recipe Book is empty...</CenterText>} />
          </View>
        }
      </Container>
    )
  }
}
export default RecipeList

const Container = styled.ScrollView`
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

const CenterText = styled.Text`
  text-align: center;
  font-size: 15px;
`
