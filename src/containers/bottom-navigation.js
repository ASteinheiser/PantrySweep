import React from 'react'
import { BottomNavigation } from 'react-native-material-ui'

class BottomNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 'pantry'
    }
  }

  render() {
    return (
      <BottomNavigation active={this.state.active} hidden={false} >
        <BottomNavigation.Action
            key="pantry"
            icon="kitchen"
            label="Virtual Pantry"
            onPress={() => {
                this.setState({ active: 'pantry' })
                this.props.navigation.navigate('Pantry')
              }
            }
        />
        <BottomNavigation.Action
           key="crafting"
           icon="local-dining"
           label="Crafting"
           onPress={() => {
               this.setState({ active: 'crafting' })
               this.props.navigation.navigate('Recipes')
             }
           }
       />
      </BottomNavigation>
    )
  }
}

export default BottomNav
