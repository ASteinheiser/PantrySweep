import React from 'react'
import { View } from 'react-native'
import { Button, ListItem } from 'react-native-material-ui'
import styled from 'styled-components/native'

class RecipeList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recipeList: null
    }
  }

  reloadRecipes = () => {
    console.log('More recipes!')
  }

  render() {
    return (
      <Container>
        <Button
          raised
          primary
          text="Refresh"
          onPress={this.reloadRecipes} />
        {
          this.state.recipeList ?
          <View>
            {
              this.state.recipeList.map((recipeItem) => {
                return (
                  <ListItem
                    divider
                    centerElement={{
                      primaryText: recipeItem.name,
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
              centerElement={{
                primaryText: 'You have no recipes...',
              }}
              onPress={() => {}} />
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
