import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class UserDetailScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text> User Detail Screen </Text>
        </View>
      </View>
    );
  }
}

export {UserDetailScreen};
