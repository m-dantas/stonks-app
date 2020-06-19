import React from 'react'
import {
  createAppContainer,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HeaderImage from './components/HeaderImage'

import Login from './pages/login';
import Register from './pages/register';

const Routes = createAppContainer(
  createStackNavigator({
    Login: {
      screen: Login,
      navigationOptions: {
        header: null
      },
    },
    Register: {
      screen: Register,
      navigationOptions: {
        headerTitle: ( <HeaderImage /> )
      },
    },
  }, {headerLayoutPreset: 'center'})
)

export default Routes