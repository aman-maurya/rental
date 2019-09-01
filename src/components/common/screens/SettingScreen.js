import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppHeader from '../elements/Header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

class SettingScreen extends Component {
  render() {
    return (
      <View>
        <AppHeader navigation={this.props.navigation} title="Setting" />
        <Text> SettingScreen </Text>
      </View>
    );
  }
}

export {SettingScreen};
