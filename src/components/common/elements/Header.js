import React, {Component} from 'react';
import { Header } from 'react-native-elements';
import MenuButton from './MenuButton';

const AppHeader = props => {
  return (
    <Header
      leftComponent={<MenuButton navigation={props.navigation} />}
      centerComponent={{
        text: props.title,
        style: {color: '#fff', fontWeight: 'bold'},
      }}
      statusBarProps={{barStyle: 'light-content'}}
    />
  );
};

export default AppHeader;
