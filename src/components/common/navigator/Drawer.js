import React from 'react';
import {StyleSheet} from 'react-native';
import {DashboardScreen, UsersScreen, SettingScreen} from '../screens';
import {Icon} from 'react-native-elements';
import {
  createDrawerNavigator,
  createAppContainer,
} from 'react-navigation';

const styles = StyleSheet.create({
  icon: {
    height: 30,
    width: 40,
    paddingLeft: 8,
    paddingTop: 2,
  },
});

const AppDrawerNavigation = createDrawerNavigator({
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
});

const AppDrawerContainer = createAppContainer(AppDrawerNavigation);

export default AppDrawerContainer;
