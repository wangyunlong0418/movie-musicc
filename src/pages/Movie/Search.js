import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import Icon from '../../components/Icon';

export default class Search extends Component {
  toSearch = () => {
    const {navigation} = this.props;
    navigation.navigate('Search');
  };
  render() {
    return (
      <View style={styles.searchBox}>
        <Icon code="&#xe82c;" color="#4ea834" size={40} />
        <TouchableOpacity
          style={styles.textInput}
          activeOpacity={1}
          focusedOpacity={1}
          onPress={this.toSearch}>
          <Text style={styles.text}>电影 / 艺人</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchBox: {
    paddingLeft: 15,
    paddingRight: 15,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    marginTop: 4,
    marginLeft: 12,
    height: 40,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
    borderRadius: 4,
  },
  text: {
    fontSize: 14,
    color: '#b7b7b7',
  },
});
