/* eslint-disable react/prop-types */
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import {Icon,Avatar} from 'react-native-elements';

const {width, height} = require('Dimensions').get('window');

const GLOBAL = require('../../../Globals');

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  thumbnailContainerStyle: {
    marginLeft: 18,
    marginRight: 10,
  },
  headerTextStyle: {
    fontSize: 17,
    fontFamily: 'OpenSans-Bold',
    textTransform: 'capitalize',
    color: GLOBAL.COLOR.BLACK,
  },
  headerSubtitleStyle: {
    marginTop: -2,
    color: GLOBAL.COLOR.DARKGREY,
    fontFamily: 'OpenSans-Regular',
    flexDirection: 'row',
    fontSize: 13,
  },
  basicInfo: {
    flex: 1,
    flexDirection: 'column',
  },
  basicInfoLabel: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  basicSection: {
    paddingRight: 0,
    paddingLeft: 0,
  },
  basicSectionLabel: {
    color: GLOBAL.COLOR.DARKGREY,
    fontSize: 12,
    fontFamily: 'OpenSans-Regular',
  },
  basicSectionValue: {
    color: GLOBAL.COLOR.BLACK,
    fontFamily: 'OpenSans-Bold',
  },
});

const UsersList = props => {
  return (
    <Card>
      <CardSection>
        <View>
          <Avatar
            rounded
            size="medium"
            containerStyle={styles.thumbnailContainerStyle}
            source={{
              uri: props.users.picture.thumbnail,
            }}
          />
        </View>
        <View style={styles.headerContentStyle}>
          <Text
            style={
              styles.headerTextStyle
            }>{`${props.users.name.first} ${props.users.name.last}`}</Text>
          <Text style={styles.headerSubtitleStyle}>{props.users.cell}</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-end',
            paddingRight: 18,
          }}>
          <TouchableOpacity
            style={{paddingTop: 20, borderRadius: 200, height: 50, width: 50}}
            activeOpacity={0.5}
            onPress={() => props.navigation.navigate('User_Detail')}>
            <Icon
              name="chevron-right"
              type="font-awesome"
              size={18}
              color={`${GLOBAL.COLOR.DARKGREY}`}
            />
          </TouchableOpacity>
        </View>
      </CardSection>
      <CardSection>
        <View style={styles.basicInfo}>
          <View style={styles.basicInfoLabel}>
            <View style={styles.basicSection}>
              <Text style={styles.basicSectionLabel}>Check in</Text>
              <Text style={styles.basicSectionValue}>2 Aug,19</Text>
            </View>
            <View style={styles.basicSection}>
              <Text style={styles.basicSectionLabel}>Check out</Text>
              <Text style={styles.basicSectionValue}>2 Dec,19</Text>
            </View>
            <View style={styles.basicSection}>
              <Text style={styles.basicSectionLabel}>Type</Text>
              <Text style={styles.basicSectionValue}>Partner</Text>
            </View>
            <View style={styles.basicSection}>
              <Text style={styles.basicSectionLabel}>Status</Text>
              <Text style={styles.basicSectionValue}>Active</Text>
            </View>
          </View>
        </View>
      </CardSection>
    </Card>
  );
};

export default UsersList;
