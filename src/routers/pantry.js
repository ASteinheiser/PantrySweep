import { StackNavigator } from 'react-navigation'

import AddItem   from '../containers/add-item.js'
import Camera    from '../containers/camera.js'
import Inventory from '../entry-containers/inventory.js'
import ItemView  from '../containers/item-view.js'

const Pantry = StackNavigator(
  {
    Camera: {
      screen: Camera,
      navigationOptions: {
        header: null
      }
    },
    Inventory: {
      screen: Inventory,
      navigationOptions: {
        header: null
      }
    },
    AddItem: {
      screen: AddItem,
      navigationOptions: {
        header: null
      }
    },
    ItemView: {
      screen: ItemView,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'Inventory'
  }
)

export default Pantry
