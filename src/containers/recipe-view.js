import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import { Icon, Card, Subheader } from 'react-native-material-ui'
import styled from 'styled-components/native'

class RecipeView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recipe: null
    }
  }

  componentWillMount() {
    this.setState({ recipe: this.props.navigation.state.params.recipe })
  }

  render() {
    return (
      <Container>
        <Card>
          {
            this.state.recipe ?
            <View>
              <HeaderMargin>
                <Subheader lines={2} text={this.state.recipe.name} />
              </HeaderMargin>
              <MarginLeft>
                <Subheader text='Cook Time:' />
                <Margin>
                  <Text>
                    { this.state.recipe.cookTime }
                  </Text>
                </Margin>
                <Subheader text='Ingredients:' />
                <Margin>
                  <Text>
                    { this.state.recipe.ingredients }
                  </Text>
                </Margin>
                <Subheader text='Instructions:' />
                <Margin>
                  <Text>
                    { this.state.recipe.instructions }
                  </Text>
                </Margin>
              </MarginLeft>
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
export default RecipeView

const Container = styled.ScrollView`
  margin-bottom: 10px;
  margin-top: 10px;
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