import React from 'react'
import {
  createAppContainer,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AsyncStorage from '@react-native-community/async-storage';

import HeaderImage from './components/HeaderImage'

import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home'

function initialRoute () {
  const auth = AsyncStorage.getItem('@AUTH')
  if (auth) {
    return 'Home'
  } else {
    return 'Login'
  }
}

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
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      },
    }
  }, 
  {
    headerLayoutPreset: 'center',
    initialRouteName: initialRoute(),
    cardStyle: {backgroundColor: '#eaeef3'}
  }
))

export default Routes