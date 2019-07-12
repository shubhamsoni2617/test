import { TabBarBottom, createBottomTabNavigator, createAppContainer, createSwitchNavigator, createStackNavigator, NavigationActions } from 'react-navigation';
import Home from '../../Home';
import Event from '../../Event';
import Login from '../../Auth/Login';
import AuthLoadingScreen  from '../AuthLoadingScreen';
import AuthService from '../../../shared/services/AuthService'


export const EventStackNavigator = createStackNavigator({
  Event: {
      screen: Event,
      navigationOptions: () => ({
        title: 'Event',
        header: null
      })
    }
});

export const MainNavigator = createBottomTabNavigator({
  Home: {
    screen: Home
  },
  Event: {
    screen: EventStackNavigator
  }
}, 
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let imgSource;
      let color = '#8b8b8b';
      if(focused){
        color = '#000000';
      }

    }, 
       
  }),
  tabBarOptions: { 
      inactiveTintColor: "#8b8b8b",
      activeTintColor: "#000000",
      style: {
        fontWeight: 'bold', 
        paddingTop: 10, 
        paddingBottom: 5, 
        height: 60, 
        backgroundColor: 'white', 
        borderTopColor: "transparent"
      }
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
  initialRouteName: "Home",
});

export const AuthNavigator = createStackNavigator(
    {
    Login: {
      screen: Login,
      navigationOptions: () => ({
        title: 'Login',
        header: null
      })
    }
  }
);

export const AppNavigator =  createSwitchNavigator(
  {
    Auth: AuthNavigator,
    App: MainNavigator
  },
  {
    initialRouteName: 'App',
  }
);

// const defaultGetStateForAction = AppNavigator.router.getStateForAction;

// AppNavigator.router.getStateForAction = (action, state) => {
//     const token = AuthService.token;
//     if (state && !token && action.routeName === 'Profile') {
//         // Option 1: will close the application
//         // return null;
        
//         // Option 2: will keep the app open
//         const newRoutes = state.routes.filter(r => r.routeName !== 'auth');
//         const newIndex = newRoutes.length - 1;
//         let newAction = {type: "Navigation/NAVIGATE", routeName: "Login", params: {page: 'Profile'}}
//         return defaultGetStateForAction(newAction, {
//            index: newIndex,
//            routes: newRoutes
//         });
//     }

//     return defaultGetStateForAction(action, state);
// };