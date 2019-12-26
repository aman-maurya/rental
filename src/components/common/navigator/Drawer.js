/* eslint-disable react/display-name */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {
  DashboardScreen,
  UsersScreen,
  SettingScreen,
  AddUserScreen,
  UserDetailScreen,
} from '../screens';
import {Icon} from 'react-native-elements';
import {
  createDrawerNavigator,
  createAppContainer,
  createStackNavigator,
  DrawerItems,
} from 'react-navigation';

const GLOBAL = require('../../../Globals');

const styles = StyleSheet.create({
  icon: {
    height: 30,
    width: 40,
    paddingLeft: 8,
    paddingTop: 2,
  },
});

const AppDrawerNavigation = createDrawerNavigator(
  {
    Home: {
      screen: DashboardScreen,
      navigationOptions: {
        drawerLabel: 'Home',
        drawerIcon: (
          <Icon iconStyle={styles.icon} type="font-awesome" name="home" />
        ),
      },
    },
    Users: {
      screen: UsersScreen,
      navigationOptions: {
        drawerLabel: 'Users',
        drawerIcon: (
          <Icon iconStyle={styles.icon} type="font-awesome" name="users" />
        ),
      },
    },
    Setting: {
      screen: SettingScreen,
      navigationOptions: {
        drawerLabel: 'Setting',
        drawerIcon: (
          <Icon iconStyle={styles.icon} type="font-awesome" name="cogs" />
        ),
      },
    },
  },
  {
    contentComponent: props => (
      <View>
        <DrawerItems {...props} />
      </View>
    ),
  },
);

const AppStackNavigation = createStackNavigator(
  {
    Drawer: {screen: AppDrawerNavigation, navigationOptions: {header: null}},
    Add_User: {
      screen: AddUserScreen,
      navigationOptions: {title: 'Add User'},
    },
    User_Detail: {
      screen: UserDetailScreen,
      navigationOptions: {
        title: 'User Detail',
      },
    },
  },
  {
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: GLOBAL.COLOR.BLUE,
      },
      headerTitleStyle: {
        ...GLOBAL.HEADER_STYLE,
      },
      headerTintColor: '#fff'
    },
  },
);

const AppDrawerContainer = createAppContainer(AppStackNavigation);

export default AppDrawerContainer;
