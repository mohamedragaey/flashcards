import React from 'react'
import AddDeck from './../components/AddDeck'
import AddCard from './../components/AddCard'
import DeckLists from './../components/DeckLists'
import Deck from './../components/Deck'
import Question from './../components/Question'
import {white, black} from './../utils/colors'
import {
  createAppContainer,
  createMaterialTopTabNavigator,
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation'

const Tabs = createMaterialTopTabNavigator({
  DeckLists: {
    screen: DeckLists,
    navigationOptions: {
      tabBarLabel: 'DECKS'
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'ADD DECK'
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: white,
  }
})
// The primary view, seen when the app loads, is a list of created decks which includes the name of each deck
// and the number of cards.
const AppStack = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null
    }
  },
  AddDeck: {
    screen: AddDeck
  },
  AddCard: {
    screen: AddCard
  },
  Deck: {
    screen: Deck
  },
  Question: {
    screen: Question
  }
}, {
  navigationOptions: {
    headerTintColor: white,
  },
  cardStyle: {
    backgroundColor: white
  }
})
export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: AppStack
}))
