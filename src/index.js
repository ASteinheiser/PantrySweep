import { TabNavigator } from 'react-navigation'

import BottomNavigation from './containers/bottom-navigation.js'
import Pantry from './routers/pantry.js'
import Recipes from './routers/recipes.js'

const Router = TabNavigator(
  {
    Pantry: {
      screen: Pantry,
      navigationOptions: {
        title: 'Virtual Pantry'
      }
    },
    Recipes: {
      screen: Recipes,
      navigationOptions: {
        title: 'Crafting'
      }
    }
  },
  {
    tabBarComponent: BottomNavigation,
    tabBarPosition: 'bottom',
    swipeEnabled: false
  }
)

export default Router
