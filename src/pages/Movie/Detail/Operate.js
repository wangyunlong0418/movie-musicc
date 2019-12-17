import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../../../components/Button';

export default class Operate extends Component {
  render() {
    return (
      <View style={styles.box}>
        <Button
          title="想看"
          fontstyle={styles.fontStyle}
          boxStyle={styles.btnBox}
        />
        <Button
          title="看过"
          fontstyle={styles.fontStyle}
          boxStyle={[styles.btnBox, {marginLeft: 10}]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 16,
    borderStyle: 'solid',
    borderBottomColor: '#ebedf0',
    borderBottomWidth: 1,
  },
  btnBox: {
    flex: 1,
    height: 30,
    borderStyle: 'solid',
    borderColor: '#44bb00',
    borderWidth: 1,
  },

  fontStyle: {
    color: '#44bb00',
    lineHeight: 28,
    textAlign: 'center',
  },
});
