import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {inject, observer} from 'mobx-react';

@inject('testStore')
@observer
class Mine extends Component {
  render() {
    return (
      <View>
        <Text>我的</Text>
      </View>
    );
  }
}

export default Mine;
