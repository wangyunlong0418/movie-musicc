import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {inject, observer} from 'mobx-react';

@inject('movieStore')
@observer
class Poster extends Component {
  render() {
    const {movieStore} = this.props;
    const {detailInfo} = movieStore;
    const {large} = detailInfo.images || {};
    return (
      <View style={styles.imageBox}>
        <Image style={styles.image} source={{uri: large}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageBox: {
    paddingBottom: 20,
    backgroundColor: '#555555',
    alignItems: 'center',
  },
  image: {
    width: 188,
    height: 268,
  },
});

export default Poster;
