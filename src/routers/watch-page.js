import { StackNavigator } from 'react-navigation'

import FitbitDashboard from '../entry-containers/fitbit-dashboard.js'

const WatchPage = StackNavigator(
  {
    FitbitDashboard: {
      screen: FitbitDashboard,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'FitbitDashboard'
  }
)

export default WatchPage
