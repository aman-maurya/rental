/* eslint-disable react/prop-types */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Icon} from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';

const GLOBAL = require('../../../Globals');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  imageBox: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: GLOBAL.COLOR.SEMILIGHTGREY,
  },
  imageCloseBtn: {
    height: 15,
    width: 15,
    backgroundColor: GLOBAL.COLOR.RED,
    position: 'absolute',
    top: 3,
    right: 3,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageCloseTxt: {
    color: 'white',
    marginTop: -2,
  },
  imageUploadBtn: {
    color: GLOBAL.COLOR.BLUE,
    fontFamily: GLOBAL.FONT_FAMILY.BOLD,
  },
  imageBtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCancel: true,
      photo: null,
      uploadText: 'Upload',
    };
  }

  componentDidMount() {
    if (this.props.uploadTextName) {
      this.setState({
        uploadText: this.props.uploadTextName,
      });
    }
  }

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {uri: response.uri};
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          photo: source,
        });

        this.toggleCancel();
      }
    });
  }

  toggleCancel() {
    if (!this.state.photo) {
      this.setState({
        photo: null,
      });
    }
    this.setState({
      showCancel: !this.state.showCancel,
    });
  }

  _render() {
    const {
      imageBackground,
      imageBox,
      imageCloseBtn,
      imageCloseTxt,
      imageBtn,
      imageUploadBtn,
    } = styles;
    if (this.state.showCancel) {
      return (
        <TouchableOpacity
          style={[imageBox, imageBtn]}
          activeOpacity={0.5}
          onPress={() => this.selectPhotoTapped()}>
          <Icon
            name="add-circle"
            type="ionicons"
            size={26}
            color={`${GLOBAL.COLOR.BLUE}`}
          />
          <Text style={imageUploadBtn}>{this.state.uploadText}</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <ImageBackground
          source={{uri: this.state.photo.uri}}
          style={[imageBox, imageBackground]}>
          <View>
            <TouchableOpacity
              style={imageCloseBtn}
              onPress={() => this.toggleCancel()}>
              <Text style={imageCloseTxt}>×</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      );
    }
  }
  render() {
    return <View style={styles.container}>{this._render()}</View>;
  }
}

export default ImageUpload;
