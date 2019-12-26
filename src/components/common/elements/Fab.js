/* eslint-disable react/prop-types */
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const GLOBAL = require('../../../Globals');

const styles = StyleSheet.create({
  fab: {
    height: 50,
    width: 50,
    borderRadius: 200,
    position: 'absolute',
    bottom: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GLOBAL.COLOR.BLUE,
  },
  text: {
    fontSize: 30,
    color: 'white',
    marginBottom: 3,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Fab = props => {
  const {navigate} = props.navigation;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigate(props.screen)} style={styles.fab}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Fab;
