import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerStyle: {
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
  },
});

const CardSection = props => {
  return <View style={styles.containerStyle}>{props.children}</View>;
};

export default CardSection;
