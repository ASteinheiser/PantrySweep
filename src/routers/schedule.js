import { StackNavigator } from 'react-navigation'

import ScheduleOverview from '../containers/schedule-overview.js'

const Schedule = StackNavigator(
  {
    ScheduleOverview: {
      screen: ScheduleOverview
    }
  },
  {
    initialRouteName: 'ScheduleOverview'
  }
)

export default Schedule
