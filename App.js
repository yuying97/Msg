import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './Login';
import Chat from './Chat';
import CreateAccount from './CreateAccount';

const navigator = createStackNavigator({
  Login: { screen: Login },
  CreateAccount: { screen: CreateAccount },
  Chat: { screen: Chat },
});

// Export it as the root component
export default navigator