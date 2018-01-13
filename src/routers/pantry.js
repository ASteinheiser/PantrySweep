import { StackNavigator } from 'react-navigation'

import AddItem from '../containers/add-item.js'
import Camera from '../containers/camera.js'
import Inventory from '../containers/inventory.js'

const Pantry = StackNavigator(
  {
    Camera: {
      screen: Camera,
      navigationOptions: {
        title: 'Scan Barcode'
      }
    },
    Inventory: {
      screen: Inventory,
      navigationOptions: {
        title: 'Inventory'
      }
    },
    AddItem: {
      screen: AddItem,
      navigationOptions: {
        title: 'Add Item'
      }
    }
  },
  {
    initialRouteName: 'Inventory'
  }
)

export default Pantry
