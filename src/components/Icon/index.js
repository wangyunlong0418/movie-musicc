import React, {Component} from 'react';
import {Text} from 'react-native';

export default class Icon extends Component {
  render() {
    const {size, color, code} = this.props;
    return (
      <Text
        style={{
          fontFamily: 'iconfont',
          fontSize: size,
          color: color,
        }}>
        {code}
      </Text>
    );
  }
}
