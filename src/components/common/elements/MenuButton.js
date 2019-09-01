import React from 'react';
import {Icon} from 'react-native-elements';

const MenuButton = props => {
  return (
    <Icon
      color="#fff"
      name="menu"
      onPress={() => props.navigation.toggleDrawer()}
    />
  );
};

export default MenuButton;
