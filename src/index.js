import { TabNavigator } from 'react-navigation'

import BottomNavigation from './containers/bottom-navigation.js'
import Pantry from './routers/pantry.js'
import Recipes from './routers/recipes.js'
import Schedule from './routers/schedule.js'

const Router = TabNavigator(
  {
    Pantry: {
      screen: Pantry
    },
    Recipes: {
      screen: Recipes
    },
    Schedule: {
      screen: Schedule
    }
  },
  {
    tabBarComponent: BottomNavigation,
    tabBarPosition: 'bottom',
    swipeEnabled: false
  }
)

export default Router
