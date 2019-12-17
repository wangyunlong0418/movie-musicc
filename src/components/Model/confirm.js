import React, {Component} from 'react';
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import ChildrenWrapper from './childrenWrapper';

let SCREEN_WIDTH = Dimensions.get('window').width; //宽
let SCREEN_HEIGHT = Dimensions.get('window').height; //高

export default class ModalDialog extends Component {
  // 构造
  constructor(props) {
    super(props);
  }

  // static propTypes = {
  //   cancelText: React.PropTypes.string, //左按键标题
  //   okText: React.PropTypes.string, //右按键标题
  //   onCancel: React.PropTypes.func.isRequired, //左点击方法
  //   onOk: React.PropTypes.func.isRequired, //右点击方法
  //   visible: React.PropTypes.bool, //显示还是隐藏
  // };

  static defaultProps = {
    dialogTitle: '温馨提示',
    cancelText: 'Cancel',
    okText: 'OK',
    visible: false,
  };

  render() {
    const {
      visible,
      children,
      onCancel,
      onOk,
      cancelText = 'Cancel',
      okText = 'OK',
      dialogTitle,
    } = this.props;
    return (
      <Modal
        visible={visible}
        transparent={true}
        onRequestClose={() => {}} //如果是Android设备 必须有此方法
      >
        <View style={styles.bg}>
          <View style={styles.dialog}>
            <View style={styles.dialogTitleView}>
              <Text style={styles.dialogTitle}>{dialogTitle}</Text>
            </View>
            <View style={styles.dialogContentView}>
              <ChildrenWrapper>{children}</ChildrenWrapper>
            </View>

            <View style={styles.dialogBtnView}>
              <TouchableHighlight
                style={[styles.dialogBtnViewItem, styles.dialogBtnLeftViewItem]}
                onPress={onCancel}>
                <Text style={styles.leftButton}>{cancelText}</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={[
                  styles.dialogBtnViewItem,
                  styles.dialogBtnRightViewItem,
                ]}
                activeOpacity={1}
                onPress={onOk}>
                <Text style={styles.rightButton}>{okText}</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    //全屏显示 半透明 可以看到之前的控件但是不能操作了
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    backgroundColor: 'rgba(52,52,52,0.5)', //rgba  a0-1  其余都是16进制数
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialog: {
    paddingTop: 15,
    // width: SCREEN_WIDTH * 0.8,
    // height: SCREEN_HEIGHT * 0.28,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  dialogTitleView: {
    // width: SCREEN_WIDTH * 0.8,
    // height: SCREEN_HEIGHT * 0.08,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  dialogTitle: {
    textAlign: 'center',
    fontSize: 18,
    color: '#000000',
  },
  dialogContentView: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    width: SCREEN_WIDTH * 0.8,
    // height: SCREEN_HEIGHT * 0.12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialogContent: {
    textAlign: 'center',
    fontSize: 15,
    color: '#888888',
  },
  dialogBtnView: {
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HEIGHT * 0.08,
    flexDirection: 'row',
  },
  dialogBtnViewItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#dddddd',
    borderColor: '#dddddd',
    borderWidth: 1,
    borderStyle: 'solid',
    // borderBottomLeftRadius: 8,
    // borderBottomRightRadius: 8,
  },
  dialogBtnRightViewItem: {
    borderBottomRightRadius: 8,
  },
  dialogBtnLeftViewItem: {
    borderRightWidth: 0,
    borderBottomLeftRadius: 8,
  },
  leftButton: {
    fontSize: 18,
    color: '#000000',
    borderBottomLeftRadius: 8,
  },
  rightButton: {
    fontSize: 18,
    color: '#007AFF',
    borderBottomRightRadius: 8,
  },
});
