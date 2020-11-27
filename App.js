import * as React from 'react'
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import SearchScreen from './screens/SearchScreen';
import TransactionScreen from './screens/BookTransactionScreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction: {
    screen: TransactionScreen
  },
  Search: {
    screen: SearchScreen
  }
})

const AppContainer = createAppContainer(TabNavigator);