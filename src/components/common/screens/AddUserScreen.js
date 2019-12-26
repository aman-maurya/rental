import React, {Component} from 'react';
import ReactNative, {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  findNodeHandle,
  Keyboard,
} from 'react-native';
import {RaisedTextButton} from 'react-native-material-buttons';
import {TextField} from 'react-native-material-textfield';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {Dropdown} from 'react-native-material-dropdown';
import {Icon} from 'react-native-elements';
import {ImageUpload} from '../elements';
import {TextInputMask} from 'react-native-masked-text';
import csc from 'country-state-city';

const GLOBAL = require('../../../Globals');

const styles = StyleSheet.create({
  col: {
    flex: 1,
    flexDirection: 'column',
    // alignItems: 'center', // this will prevent TFs from stretching horizontal
    marginLeft: 7,
    marginRight: 7,
  },
  avatar: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 70,
    marginRight: 70,
    marginTop: 20,
  },
  textfieldWithFloatingLabel: {
    height: 48, // have to do it on iOS
    marginTop: 10,
  },
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
    color: GLOBAL.COLOR.BLACK,
  },
  row: {
    flexDirection: 'row',
  },
  heading: {
    fontFamily: GLOBAL.FONT_FAMILY.BOLD,
    fontSize: 16,
    color: GLOBAL.COLOR.BLUE,
  },
  headingMargin: {
    marginTop: 22,
  },
});

const txtInputs = {
  firstName: '',
  lastName: '',
  email: '',
  mobileNo: '',
  dob: '',
  occupation: '',
  address: '',
  city: null,
  cityList: [],
  state: null,
  country: '101',
  photo: '',
};

class AddUserScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...txtInputs,
      dobPlaceholder: null,
      errors: {},
    };

    Object.entries(txtInputs).forEach(([key, val]) => {
      this[`${key}_ref`] = React.createRef();
    });
  }

  // componentDidMount() {
  //   // Define your models and their properties
  //   const CarSchema = {
  //     name: 'Car',
  //     properties: {
  //       make: 'string',
  //       model: 'string',
  //       miles: {type: 'int', default: 0},
  //     },
  //   };
  //   const PersonSchema = {
  //     name: 'Person',
  //     properties: {
  //       name: 'string',
  //       birthday: 'date',
  //       cars: 'Car[]',
  //       picture: 'data?', // optional property
  //     },
  //   };

  //   Realm.open({schema: [CarSchema, PersonSchema]})
  //     .then(realm => {
  //       // Create Realm objects and write to local storage
  //       realm.write(() => {
  //         const myCar = realm.create('Car', {
  //           make: 'Honda',
  //           model: 'Civic',
  //           miles: 1000,
  //         });
  //         myCar.miles += 20; // Update a property value
  //       });

  //       // Query Realm for all cars with a high mileage
  //       const cars = realm.objects('Car').filtered('miles > 1000');

  //       // Will return a Results object with our 1 car
  //       cars.length; // => 1

  //       // Add another car
  //       realm.write(() => {
  //         const myCar = realm.create('Car', {
  //           make: 'Ford',
  //           model: 'Focus',
  //           miles: 2000,
  //         });
  //       });

  //       // Query results are updated in realtime
  //       cars.length; // => 2
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  setPlaceholder() {
    if (this.state.dobPlaceholder) {
      this.setState({dobPlaceholder: null});
    } else {
      this.setState({dobPlaceholder: 'DD/MM/YYYY'});
    }
  }

  getState() {
    let statesList = csc.getStatesOfCountry(this.state.country);
    let states = [];
    statesList.forEach(function(item) {
      states.push({label: item.name, value: item.id});
    });

    return states;
  }

  getCity() {
    let cityList = csc.getCitiesOfState(this.state.state);
    let cities = [];
    cityList.forEach(function(item) {
      cities.push({label: item.name, value: item.id});
    });

    this.setState({cityList: cities});
  }

  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  onSubmit() {
    let errors = {};
    Object.entries(txtInputs).forEach(([key, val]) => {
      if (key == 'firstName') {
        if (this.state.firstName == '') {
          errors['firstName'] = 'Please Enter First Name.';
        }
      }
      if (key == 'lastName') {
        if (this.state.lastName == '') {
          errors['lastName'] = 'Please Enter Last Name.';
        }
      }
      if (key == 'email') {
        if (this.state.email == '') {
          errors['email'] = 'Please Enter Email.';
        } else if (this.validateEmail(this.state.email) === false) {
          errors['email'] = 'Please Enter Valid Email.';
        }
      }
      if (key == 'mobileNo') {
        if (this.state.mobileNo == '') {
          errors['mobileNo'] = 'Please Enter Mobile No.';
        }
      }
      if (key == 'dob') {
        if (this.state.dob == '') {
          errors['dob'] = 'Please Enter Date of Birth.';
        }
      }
      if (key == 'occupation') {
        if (this.state.occupation == '') {
          errors['occupation'] = 'Please Enter Occupation.';
        }
      }
      if (key == 'address') {
        if (this.state.address == '') {
          errors['address'] = 'Please Enter Address.';
        }
      }
      if (key == 'city') {
        if (this.state.city == '') {
          errors['city'] = 'Please Enter City.';
        }
      }
      if (key == 'state') {
        if (this.state.state == '') {
          errors['state'] = 'Please Enter State.';
        }
      }
      if (key == 'countries') {
        if (this.state.countries == '') {
          errors['countries'] = 'Please Enter Country.';
        }
      }
    });

    let fldFocus = Object.keys(errors)[0];
    this[`${fldFocus}_ref`].current.input.measureLayout(
      ReactNative.findNodeHandle(this.scrollViewRef),
      (x, y) => {
        this.scrollViewRef.scrollResponderScrollTo({
          x: x,
          y: 0,
          animated: true,
        });
        //this[`${fldFocus}_ref`].current.input.focus();
      },
    );
    this.setState({errors});
  }

  setScrollViewRef = element => {
    this.scrollViewRef = element;
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          ref={this.setScrollViewRef}
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}>
          <View style={styles.row}>
            <View style={styles.col}>
              <Text style={styles.heading}>Basic Detail:</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.avatar}>
              <ImageUpload uploadTextName={'Add Photo'} />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.col}>
              <TextField
                label="First Name"
                ref={this.firstName_ref}
                value={this.state.firstName}
                onChangeText={firstName => this.setState({firstName})}
                tintColor={GLOBAL.COLOR.BLUE}
                error={this.state.errors.firstName}
                errorColor={GLOBAL.COLOR.RED}
              />
            </View>
            <View style={styles.col}>
              <TextField
                label="Last Name"
                value={this.state.lastName}
                onChangeText={lastName => this.setState({lastName})}
                tintColor={GLOBAL.COLOR.BLUE}
                error={this.state.errors.lastName}
                errorColor={GLOBAL.COLOR.RED}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.col}>
              <TextField
                label="Email"
                keyboardType="email-address"
                value={this.state.email}
                onChangeText={email => this.setState({email})}
                tintColor={GLOBAL.COLOR.BLUE}
                error={this.state.errors.email}
                errorColor={GLOBAL.COLOR.RED}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.col}>
              <TextField
                label="Mobile No"
                keyboardType="phone-pad"
                value={this.state.mobileNo}
                onChangeText={mobileNo => this.setState({mobileNo})}
                tintColor={GLOBAL.COLOR.BLUE}
                error={this.state.errors.mobileNo}
                errorColor={GLOBAL.COLOR.RED}
              />
            </View>
            <View style={styles.col}>
              <TextInputMask
                type={'datetime'}
                options={{
                  format: 'DD/MM/YYYY',
                }}
                value={this.state.dob}
                //error={this.state.errors.firstName}
                //errorColor={GLOBAL.COLOR.RED}
                onChangeText={dob => {
                  this.setState({
                    dob,
                  });
                }}
                customTextInput={TextField}
                customTextInputProps={{
                  label: 'Date of Birth',
                  keyboardType: 'number-pad',
                  placeholder: this.state.dobPlaceholder,
                  onFocus: this.setPlaceholder.bind(this),
                  onBlur: this.setPlaceholder.bind(this),
                  tintColor: `${GLOBAL.COLOR.BLUE}`,
                }}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.col}>
              <TextField
                label="Address"
                value={this.state.address}
                onChangeText={address => this.setState({address})}
                tintColor={GLOBAL.COLOR.BLUE}
                error={this.state.errors.address}
                errorColor={GLOBAL.COLOR.RED}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.col}>
              <TextField
                label="Occupation"
                value={this.state.occupation}
                onChangeText={occupation => this.setState({occupation})}
                tintColor={GLOBAL.COLOR.BLUE}
                error={this.state.errors.occupation}
                errorColor={GLOBAL.COLOR.RED}
              />
            </View>
            <View style={styles.col}>
              <Dropdown
                label="Type"
                data={[
                  {
                    label: 'Guest',
                    value: 'guest',
                  },
                  {
                    label: 'Partner',
                    value: 'partner',
                  },
                ]}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.col}>
              <Dropdown
                label="State"
                data={this.getState()}
                onChangeText={(addressState) => {
                  this.setState({
                    state: addressState.toString(),
                  });
                  this.getCity();
                }}
              />
            </View>
            <View style={styles.col}>
              <Dropdown
                label="City"
                data={this.state.cityList}
                onChangeText={(value, city) => {
                  this.setState({
                    city,
                  });
                }}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.col}>
              <Text style={[styles.heading, styles.headingMargin]}>
                Upload Document:
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.col}>
              <Dropdown label="Document Type 1" data={GLOBAL.proof} />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.col}>
              <ImageUpload />
            </View>
            <View style={styles.col}>
              <ImageUpload />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.col}>
              <Dropdown label="Document Type 2" data={GLOBAL.proof} />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.col}>
              <ImageUpload />
            </View>
            <View style={styles.col}>
              <ImageUpload />
            </View>
          </View>
          <View style={styles.container}>
            <RaisedTextButton
              title="Submit"
              onPress={this.onSubmit.bind(this)}
              color={GLOBAL.COLOR.BLUE}
              titleColor="white"
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export {AddUserScreen};
