import { StackNavigator } from 'react-navigation'

import RecipeList from '../containers/recipe-list.js'
import RecipeView from '../containers/recipe-view.js'

const Recipes = StackNavigator(
  {
    RecipeList: {
      screen: RecipeList,
      navigationOptions: {
        title: 'Recipe List'
      }
    },
    RecipeView: {
      screen: RecipeView,
      navigationOptions: {
        title: 'View Recipe'
      }
    },
  },
  {
    initialRouteName: 'RecipeList'
  }
)

export default Recipes
