import { StackNavigator } from 'react-navigation'

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
    }
  },
  {
    initialRouteName: 'Inventory'
  }
)

export default Pantry
