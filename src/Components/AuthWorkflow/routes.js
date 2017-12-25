import { StackNavigator } from 'react-navigation';

import Login from './pages/login';
import Logged from './pages/logged';

export const SignedOut_Routes = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Log In"
    }
  },
});

export const SignedIn_Routes = StackNavigator({
  Logged: {
    screen: Logged,
    navigationOptions: {
      title: "My Profile"
    }
  },
});

export const RootNavigator = (signedIn = false) => {
  return StackNavigator({
    SignedIn: { screen: SignedIn_Routes },
    SignedOut: { screen: SignedOut_Routes }
  },
  {
    headerMode: "none",
    mode: "modal",
    initialRouteName: (signedIn == true) ? "SignedIn" : "SignedOut",
    navigationOptions: {
      gesturesEnabled: false
    }
  });
};
