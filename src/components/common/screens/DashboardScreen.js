import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import AppHeader from '../elements/Header';
import {Icon} from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 160,
    borderColor: '#eff0f1',
    borderWidth: 1,
    height: 130,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  leftBtn: {
    marginLeft: 10,
    marginRight: 5,
  },
  rightBtn: {
    marginLeft: 5,
    marginRight: 10,
  },
  btnLabel: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 17,
  },
});

const DashboardControl = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={[styles.buttonContainer, styles.leftBtn]}
        onPress={() => alert('Navigate to users screen')}>
        <Icon type="font-awesome" name="users" size={80} color="#eff0f1" />
        <Text style={styles.btnLabel}>Users</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        style={[styles.buttonContainer, styles.rightBtn]}
        onPress={() => alert('Navigate to setting screen')}>
        <Icon type="font-awesome" name="cogs" size={80} color="#eff0f1" />
        <Text style={styles.btnLabel}>Setting</Text>
      </TouchableOpacity>
    </View>
  );
};

class DashboardScreen extends Component {
  render() {
    return (
      <View>
        <AppHeader navigation={this.props.navigation} title="Home" />
        <DashboardControl />
      </View>
    );
  }
}

export {DashboardScreen};
