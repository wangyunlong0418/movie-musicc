import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {inject, observer} from 'mobx-react';
import {Tabs} from '@ant-design/react-native';

@inject('testStore')
@observer
class Music extends Component {
  render() {
    const style = {
      alignItems: 'center',
      justifyContent: 'center',
      height: 150,
      backgroundColor: '#fff',
    };
    const tabs = [
      {title: 'First Tab'},
      {title: 'Second Tab'},
      {title: 'Third Tab'},
    ];
    return (
      <View style={{flex: 1, backgroundColor: 'red', width: 375}}>
        <Text>11</Text>
      </View>
    );
  }
}

export default Music;
