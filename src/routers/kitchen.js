import { TabNavigator } from 'react-navigation'

import BottomNavigation from '../containers/bottom-navigation.js'
import Pantry           from './pantry.js'
import Recipes          from './recipes.js'
import Schedule         from './schedule.js'

const Kitchen = TabNavigator(
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
    swipeEnabled: false,
  }
)

export default Kitchen
