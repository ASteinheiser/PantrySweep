import { StackNavigator } from 'react-navigation'

import SettingsDashboard from '../entry-containers/settings-dashboard.js'

const Settings = StackNavigator(
  {
    SettingsDashboard: {
      screen: SettingsDashboard,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'SettingsDashboard'
  }
)

export default Settings
