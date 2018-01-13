import { StackNavigator } from 'react-navigation'

import Home from './containers/home.js'

const Router = StackNavigator(
  {
    home: { screen: Home }
  },
  {
    initialRouteName: 'home'
  }
)

export default Router
