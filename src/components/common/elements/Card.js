import React, {Component} from 'react';
import {View,Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerStyle: {
    //borderWidth: 1,
    borderRadius: 0,
    //borderColor: '#ddd',
    borderBottomWidth: 0,
    //shadowColor: '#000',
    //shadowOffset: {width: 0, height: 2},
    //shadowOpacity: 0.1,
    //shadowRadius: 2,
    //elevation: 1,
    marginRight: 0,
    marginTop: 10,
    marginLeft: 0,
  },
});

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

export default Card;
