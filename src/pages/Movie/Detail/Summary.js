import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {inject, observer} from 'mobx-react';
import Button from '../../../components/Button';

@inject('movieStore')
@observer
class Summary extends Component {
  render() {
    const {movieStore} = this.props;
    const {summary, isPanded} = movieStore;
    return (
      <View style={styles.box}>
        <Text style={styles.title}>剧情介绍</Text>
        <View style={styles.sunmmaryBox}>
          <Text style={styles.sunmmaryText}>
            &nbsp;&nbsp;&nbsp;&nbsp;{summary}
          </Text>
          <Button
            title={`[ ${isPanded ? '收起' : '展开'} ]`}
            boxStyle={styles.pand}
            fontstyle={styles.pandText}
            onPress={movieStore.updatePandStatus}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    marginTop: 16,
    marginLeft: 15,
    marginRight: 15,
    paddingBottom: 16,
    borderStyle: 'solid',
    borderBottomColor: '#ebedf0',
    borderBottomWidth: 1,
  },
  title: {
    color: '#777777',
  },
  sunmmaryBox: {
    marginTop: 10,
    position: 'relative',
  },
  sunmmaryText: {
    fontSize: 14,
    color: '#333333',
  },
  pand: {
    position: 'absolute',
    right: 8,
    bottom: 0,
  },
  pandText: {
    fontSize: 12,
    color: '#42bd56',
  },
});

export default Summary;
