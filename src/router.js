import { DrawerNavigator } from 'react-navigation'

import Pantry   from './routers/pantry.js'
import Recipes  from './routers/recipes.js'
import Schedule from './routers/schedule.js'

const Router = DrawerNavigator(
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
    initialRouteName: 'Pantry'
  }
)

export default Router
