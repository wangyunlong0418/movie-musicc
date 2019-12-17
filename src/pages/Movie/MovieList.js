import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Rate from '../../components/Rate';
class ComingSoonMovie extends Component {
  toDetail = id => {
    const {navigation} = this.props;
    navigation.navigate('Detail', {detailid: id});
  };
  render() {
    const {movieList = []} = this.props;
    return (
      <View style={styles.box}>
        {movieList.map((movie, index) => {
          const {
            title,
            images,
            directors,
            rating,
            casts,
            collect_count,
            id,
          } = movie;
          return (
            <TouchableOpacity
              activeOpacity={1}
              focusedOpacity={1}
              onPress={() => {
                this.toDetail(id);
              }}
              key={index}>
              <View
                style={[styles.itemBox, index > 0 ? styles.marginTop10 : {}]}>
                {images && images.medium && (
                  <Image style={styles.image} source={{uri: images.medium}} />
                )}
                <View style={styles.contentBox}>
                  <Text style={styles.title}>{title}</Text>
                  {rating && rating.average > 0 && (
                    <View
                      style={{
                        alignItems: 'flex-start',
                      }}>
                      <Rate
                        max={5}
                        value={rating.average}
                        size={10}
                        color="#FFD21E"
                      />
                    </View>
                  )}
                  <View style={[styles.rowBox, {marginTop: 4}]}>
                    <Text style={styles.commonText}>导演: </Text>
                    {directors &&
                      directors.map((director, key) => {
                        return (
                          <Text style={styles.commonText} key={`name-${key}`}>
                            {`${director.name} `}
                          </Text>
                        );
                      })}
                  </View>
                  <View
                    style={[styles.rowBox, {marginTop: 8, marginBottom: 8}]}>
                    <Text style={styles.commonText}>主演: </Text>
                    {casts &&
                      casts.map((cast, key) => {
                        return (
                          <Text
                            style={styles.commonText}
                            ellipsizeMode="tail"
                            numberOfLines={2}
                            key={`name-${key}`}>
                            {`${cast.name} `}
                          </Text>
                        );
                      })}
                  </View>
                  <Text style={styles.collectcount}>{collect_count}人看过</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    marginTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 0,
  },
  itemBox: {
    flexDirection: 'row',
  },
  image: {
    width: 80,
    height: 120,
  },
  marginTop10: {
    marginTop: 10,
  },
  contentBox: {
    marginLeft: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
  rowBox: {
    flexDirection: 'row',
  },
  commonText: {
    fontSize: 12,
    color: '#777777',
  },
  collectcount: {
    fontSize: 12,
    color: '#333333',
  },
});

export default ComingSoonMovie;
