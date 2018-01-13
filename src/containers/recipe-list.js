import React from 'react'
import { View } from 'react-native'
import { Button, ListItem, Icon } from 'react-native-material-ui'
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
        <WhiteBg>
          <Margin>
            <Button
              raised
              primary
              text="Load More Recipes"
              onPress={this.reloadRecipes} />
          </Margin>
        </WhiteBg>
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
              leftElement={<Icon name="import-contacts" />}
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

const Margin = styled.View`
  margin: 15px 20px;
`

const WhiteBg = styled.View`
  background-color: white;
`
