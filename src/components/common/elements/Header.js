/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, {Component} from 'react';
import { Platform } from 'react-native';
import { Header } from 'react-native-elements';
import MenuButton from './MenuButton';

const GLOBAL = require('../../../Globals');

const AppHeader = props => {
  return (
    <Header
      placement="center"
      leftComponent={<MenuButton navigation={props.navigation} />}
      centerComponent={{
        text: props.title,
        style: {
          ...GLOBAL.HEADER_STYLE
        },
      }}
      containerStyle={{
        backgroundColor: GLOBAL.COLOR.BLUE,
        marginTop: Platform.OS === 'ios' ? 0 : -25,
      }}
      statusBarProps={{barStyle: 'light-content'}}
    />
  );
};

export default AppHeader;
