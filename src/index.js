import { TabNavigator } from 'react-navigation'

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
    tabBarPosition: 'top',
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#14568F',
      labelStyle: {
        fontSize: 18
      },
      style: {
        marginTop: 20,
        paddingTop: 45
      }
    }
  }
)

export default Router
