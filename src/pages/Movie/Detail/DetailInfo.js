import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {inject, observer} from 'mobx-react';
import {Card} from 'react-native-shadow-cards';
import Rate from '../../../components/Rate/index';

@inject('movieStore')
@observer
class DetailInfo extends Component {
  render() {
    const {movieStore} = this.props;
    const {detailInfo, pubdate} = movieStore;
    const {
      title,
      year,
      genres = [],
      original_title,
      durations = [],
      rating = {},
      collect_count,
    } = detailInfo;
    return (
      <View style={styles.box}>
        <View style={styles.leftBox}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.commonText}>
            {year} {genres.join(' / ')}
          </Text>
          <Text
            style={styles.commonText}
            ellipsizeMode="tail"
            numberOfLines={1}>
            原名: {original_title}
          </Text>
          <Text style={styles.commonText}>上映时间: {pubdate}</Text>
          <Text style={styles.commonText}>片长: {durations[0]}</Text>
        </View>
        <Card style={styles.rightBox}>
          <View style={styles.rightWrap}>
            <Text style={[styles.commonText, {textAlign: 'center'}]}>
              豆瓣评分
            </Text>
            <Text>{rating.average}</Text>
            <View style={styles.rateBox}>
              {rating.average ? (
                <Rate
                  value={Number(rating.average)}
                  max={5}
                  size={10}
                  color="#FFD21E"
                  hasText={false}
                />
              ) : null}
            </View>
            <Text>{collect_count}人想看</Text>
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    marginBottom: 16,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 15,
    paddingRight: 16,
    flexDirection: 'row',
  },
  leftBox: {
    flex: 2,
  },
  rightBox: {
    paddingTop: 10,
    paddingLeft: 8,
    paddingRight: 8,
    flex: 1,
    height: 'auto',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 2,
    shadowOpacity: 0.2,
    elevation: 10,
  },
  rightWrap: {
    alignItems: 'center',
  },
  title: {
    marginBottom: 14,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  commonText: {
    marginBottom: 10,
    fontSize: 12,
    color: '#777777',
  },
  rateBox: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default DetailInfo;
