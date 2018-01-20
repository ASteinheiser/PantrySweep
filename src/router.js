import { DrawerNavigator }              from 'react-navigation'
import { fade }                         from 'material-ui/utils/colorManipulator'
import { pink700, blueGrey700, white }  from '../colors.js'

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
    initialRouteName: 'Pantry',
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
