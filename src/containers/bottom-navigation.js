import React from 'react'
import { BottomNavigation } from 'react-native-material-ui'

class BottomNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: this.props.navigation.state.routes[this.props.navigation.state.index].key
    }
  }

  render() {
    return (
      <BottomNavigation active={this.state.active} hidden={false}>
        <BottomNavigation.Action
            key="Pantry"
            icon="kitchen"
            label="Virtual Pantry"
            onPress={() => {
                this.setState({ active: 'Pantry' })
                this.props.navigation.navigate('Pantry')
              }
            }
        />
        <BottomNavigation.Action
           key="Crafting"
           icon="local-dining"
           label="Crafting"
           onPress={() => {
               this.setState({ active: 'Crafting' })
               this.props.navigation.navigate('Recipes')
             }
           }
         />
         <BottomNavigation.Action
            key="Schedule"
            icon="book"
            label="Schedule"
            onPress={() => {
                this.setState({ active: 'Schedule' })
                this.props.navigation.navigate('Schedule')
              }
            }
          />
      </BottomNavigation>
    )
  }
}

export default BottomNav
