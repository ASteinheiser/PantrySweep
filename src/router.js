import { DrawerNavigator }              from 'react-navigation'
import { fade }                         from 'material-ui/utils/colorManipulator'
import { pink700, blueGrey700, white }  from '../colors.js'

import Pantry        from './routers/pantry.js'
import Recipes       from './routers/recipes.js'
import Schedule      from './routers/schedule.js'
import WatchPage     from './routers/watch-page.js'
import ShoppingList  from './routers/shopping-list.js'
import Settings      from './routers/settings.js'

const Router = DrawerNavigator(
  {
    Inventory: {
      screen: Pantry
    },
    'Shopping List': {
      screen: ShoppingList
    },
    Recipes: {
      screen: Recipes
    },
    'Task List': {
      screen: Schedule
    },
    'Fitbit Dashboard': {
      screen: WatchPage
    },
    Settings: {
      screen: Settings
    }
  },
  {
    initialRouteName: 'Inventory',
    drawerBackgroundColor: '#303030',
    contentOptions: {
      labelStyle: {
        fontFamily: 'Roboto',
        fontSize: 16,
      },
      activeTintColor: pink700,
      activeBackgroundColor: fade(blueGrey700, 0.4),
      inactiveTintColor: fade(white, 0.8),
    }
  }
)

export default Router
