import React from 'react';
import {TextInput, View, Text, StyleSheet, Dimensions} from 'react-native';
import Confirm from './confirm';

let SCREEN_WIDTH = Dimensions.get('window').width; //宽

export default class Prompt extends React.PureComponent {
  state = {
    value: '',
  };

  onChangeText = value => {
    this.setState({
      value,
    });
  };

  onOk = () => {
    const {onOk} = this.props;
    const {value} = this.state;
    if (onOk && typeof onOk === 'function') {
      onOk(value);
      this.setState({
        value: '',
      });
    }
  };

  render() {
    const {value} = this.state;
    const {subTitle} = this.props;
    return (
      <Confirm {...this.props} onOk={this.onOk}>
        <View style={styles.promptContentBox}>
          <Text style={styles.promptTitle}>{subTitle}</Text>
          <TextInput
            multiline
            autoFocus
            value={value}
            onChangeText={this.onChangeText}
            returnKeyType="done"
            style={styles.input}
          />
        </View>
      </Confirm>
    );
  }
}

const styles = StyleSheet.create({
  promptContentBox: {
    width: SCREEN_WIDTH * 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  promptTitle: {
    fontSize: 15,
    color: '#888888',
  },
  input: {
    height: 38,
    width: '100%',
    borderColor: '#dddddd',
    borderWidth: 1,
    borderStyle: 'solid',
  },
});
