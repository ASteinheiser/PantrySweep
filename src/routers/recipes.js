import { StackNavigator } from 'react-navigation'

import RecipeList from '../entry-containers/recipe-list.js'
import RecipeView from '../containers/recipe-view.js'

const Recipes = StackNavigator(
  {
    RecipeList: {
      screen: RecipeList,
      navigationOptions: {
        header: null
      }
    },
    RecipeView: {
      screen: RecipeView,
      navigationOptions: {
        header: null
      }
    },
  },
  {
    initialRouteName: 'RecipeList'
  }
)

export default Recipes
