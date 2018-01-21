import React                            from 'react'
import { ScrollView, Text, View }       from 'react-native'
import { DrawerNavigator, DrawerItems } from 'react-navigation'
import { fade }                         from 'material-ui/utils/colorManipulator'
import styled                           from 'styled-components/native'
import { pink700, blueGrey700, white }  from '../colors.js'

import Pantry        from './routers/pantry.js'
import Recipes       from './routers/recipes.js'
import Schedule      from './routers/schedule.js'
import WatchPage     from './routers/watch-page.js'
import ShoppingList  from './routers/shopping-list.js'
import Settings      from './routers/settings.js'

const Router = DrawerNavigator(
  {
    Inventory: {
      screen: Pantry
    },
    'Shopping List': {
      screen: ShoppingList
    },
    Recipes: {
      screen: Recipes
    },
    'Task List': {
      screen: Schedule
    },
    'Fitbit Dashboard': {
      screen: WatchPage
    },
    Settings: {
      screen: Settings
    }
  },
  {
    initialRouteName: 'Inventory',
    drawerBackgroundColor: '#303030',
    contentComponent: props => <ScrollView><Margin><StyledText>Pantry Sweep</StyledText></Margin><DrawerItems {...props}/></ScrollView>,
    contentOptions: {
      labelStyle: {
        fontFamily: 'Roboto',
        fontSize: 16,
      },
      activeTintColor: white,
      activeBackgroundColor: pink700,
      inactiveTintColor: fade(white, 0.8),
    }
  }
)

export default Router

const StyledText = styled.Text`
  font-size: 18px;
  color: white;
`

const Margin = styled.View`
  margin: 20px 0 20px 20px;
`
