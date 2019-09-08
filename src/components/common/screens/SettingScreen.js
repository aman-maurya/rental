import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppHeader from '../elements/Header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class SettingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppHeader navigation={this.props.navigation} title="Setting" />
        <View style={styles.container}>
          <Text> Setting Screen </Text>
        </View>
      </View>
    );
  }
}

export {SettingScreen};
