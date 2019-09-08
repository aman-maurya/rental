import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import {Avatar} from 'react-native-elements';

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  thumbnailContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  headerTextStyle: {
    fontSize: 19,
    textTransform: 'capitalize',
  },
  headerSubtitleStyle: {
    marginTop: -2,
    color: '#a09f9f',
    fontSize: 13,
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
      </CardSection>
    </Card>
  );
};

export default UsersList;
