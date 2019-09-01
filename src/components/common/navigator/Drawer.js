import React from 'react';
import {DashboardScreen, HomeScreen, SettingScreen} from '../screens';
import {Icon} from 'react-native-elements';
import {
  createDrawerNavigator,
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

const AppStackNavigation = createStackNavigator(
  {
    Dashboard: DashboardScreen,
    Home: HomeScreen,
    Setting: SettingScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerLeft: (
          <Icon
            name="sc-telegram"
            size={40}
            type="evilicon"
            style={{paddingLeft: 10}}
            onPress={() => navigation.openDrawer()}
          />
        ),
      };
    },
  },
);

const AppDrawerNavigation = createDrawerNavigator(
  {
    Dashboard: DashboardScreen,
    Home: HomeScreen,
    Setting: SettingScreen,
  },
  {
    navigationOptions: ({navigation}) => {
      const {routeName} = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName,
      };
    },
  },
);

const AppDrawerContainer = createAppContainer(AppDrawerNavigation);

export default AppDrawerContainer;
