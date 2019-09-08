import React, {Component} from 'react';
import { Platform } from 'react-native';
import { Header } from 'react-native-elements';
import MenuButton from './MenuButton';

const AppHeader = props => {
  return (
    <Header
      placement='left'
      leftComponent={<MenuButton navigation={props.navigation} />}
      centerComponent={{
        text: props.title,
        style: {
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 16,
        },
      }}
      containerStyle={{marginTop: Platform.OS === 'ios' ? 0 : -25}}
      statusBarProps={{barStyle: 'light-content'}}
    />
  );
};

export default AppHeader;
