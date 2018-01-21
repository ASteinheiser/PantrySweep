import { StackNavigator } from 'react-navigation'

import ShoppingListView from '../entry-containers/shopping-list-view.js'

const ShoppingList = StackNavigator(
  {
    ShoppingListView: {
      screen: ShoppingListView,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'ShoppingListView'
  }
)

export default ShoppingList
