import React                       from 'react'
import { ScrollView, View, Text }  from 'react-native'
import { Icon, Toolbar }           from 'react-native-material-ui'
import styled                      from 'styled-components/native'

class ShoppingListView extends React.Component {
  render() {
    return (
      <Flex>
        <Toolbar
          centerElement='Shopping List'
          leftElement='menu'
          onLeftElementPress={()=>{this.props.navigation.navigate('DrawerToggle')}}
        />
        <Container>
          <Margin>
            <FlexRow>
              <MarginRight>
                <Icon name='view-list'/>
              </MarginRight>
              <StyledText>
                Shopping List coming soon...
              </StyledText>
            </FlexRow>
          </Margin>
        </Container>
      </Flex>
    )
  }
}
export default ShoppingListView

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

const StyledText = styled.Text`
  font-size: 16px;
  color: #ffffff;
`

const FlexRow = styled.View`
  flex: 1;
  flex-direction: row;
`

const MarginRight = styled.View`
  margin-right: 10px;
`
