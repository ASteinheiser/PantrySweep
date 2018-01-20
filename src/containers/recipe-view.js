import React                               from 'react'
import { ScrollView, View, Text }          from 'react-native'
import { Icon, Card, Subheader, Toolbar }  from 'react-native-material-ui'
import styled                              from 'styled-components/native'

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
      <Flex>
        <Toolbar
          centerElement={this.state.recipe.name}
          leftElement='arrow-back'
          onLeftElementPress={()=>{this.props.navigation.goBack()}}
        />
        <ScrollBackground>
          <Card>
            {
              this.state.recipe ?
              <View>
                <MarginLeft>
                  <Subheader text='Cook Time:' />
                  <Margin>
                    <StyledText>
                      { this.state.recipe.cookTime }
                    </StyledText>
                  </Margin>
                  <Subheader text='Ingredients:' />
                  <Margin>
                    <StyledText>
                      { this.state.recipe.ingredients }
                    </StyledText>
                  </Margin>
                  <Subheader text='Instructions:' />
                  <Margin>
                    <StyledText>
                      { this.state.recipe.instructions }
                    </StyledText>
                  </Margin>
                </MarginLeft>
              </View>
              :
              <LoadingMargin>
                <Subheader text='Loading...' />
              </LoadingMargin>
            }
          </Card>
        </ScrollBackground>
      </Flex>
    )
  }
}
export default RecipeView

const Flex = styled.View`
  flex: 1;
`

const ScrollBackground = styled.ScrollView`
  background: #303030;
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

const StyledText = styled.Text`
  color: rgb(255, 255, 255);
  font-size: 18px;
`
