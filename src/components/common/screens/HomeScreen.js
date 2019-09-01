import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import AppHeader from '../elements/Header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

class HomeScreen extends Component {
  render() {
    return (
      <View>
        <AppHeader navigation={this.props.navigation} title="Home" />
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate('Settings')}
          type="clear"
        />
        <Button title="Settings" type="clear" />
      </View>
    );
  }
}

export { HomeScreen };
