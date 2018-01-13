import { StackNavigator } from 'react-navigation'

import RecipeList from '../containers/recipe-list.js'

const Recipes = StackNavigator(
  {
    RecipeList: {
      screen: RecipeList,
      navigationOptions: {
        title: 'Recipe List'
      }
    },
  },
  {
    initialRouteName: 'RecipeList'
  }
)

export default Recipes
