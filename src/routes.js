import {
  createAppContainer,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

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
        headerTitle: 'Register',
      },
    },
  })
)

export default Routes