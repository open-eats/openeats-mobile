import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import BrowseScreen from '../screens/BrowseScreen';
import RecipeScreen from '../screens/RecipeScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

// HomeStack.navigationOptions = {
//   tabBarLabel: 'Home',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios'
//           ? `ios-information-circle${focused ? '' : '-outline'}`
//           : 'md-information-circle'
//       }
//     />
//   ),
// };

HomeStack.path = '';

const BrowseStack = createStackNavigator(
  {
    Browse: BrowseScreen,
    Recipe: RecipeScreen,
  },
  config
);

// BrowseStack.navigationOptions = {
//   tabBarLabel: 'Browse',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
//   ),
// };

BrowseStack.path = '';

const RecipeStack = createStackNavigator(
  {
    Recipe: RecipeScreen,
  },
  config
);

RecipeStack.path = '';

const tabNavigator = createDrawerNavigator({
  HomeStack,
  BrowseStack,
});

tabNavigator.path = '';

export default tabNavigator;
