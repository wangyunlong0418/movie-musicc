import React, {PureComponent} from 'react';
import {
  View,
  ActivityIndicator,
  Modal,
  StyleSheet,
  Dimensions,
} from 'react-native';

let SCREEN_WIDTH = Dimensions.get('window').width; //宽
let SCREEN_HEIGHT = Dimensions.get('window').height; //高

export default class Loading extends PureComponent {
  renderLoading = () => {
    const {isShow, color = '#4ea834'} = this.props;
    const {width, height} = Dimensions.get('window');
    const {loading} = styles;
    return (
      <ActivityIndicator
        style={[loading, {top: height / 2 - 18, left: width / 2 - 18}]} // large 高度是36， small是20
        size="large"
        animating={isShow}
        color={color}
      />
    );
  };

  render() {
    const {hasMask, isShow} = this.props;
    const {loadingBox} = styles;

    if (!hasMask) {
      return this.renderLoading();
    }

    return (
      <Modal
        visible={isShow}
        transparent={true}
        onRequestClose={() => {}}
        style={loadingBox}>
        {this.renderLoading()}
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  loadingBox: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    backgroundColor: 'rgba(52,52,52,0.5)', //rgba  a0-1  其余都是16进制数
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    position: 'absolute',
  },
});
