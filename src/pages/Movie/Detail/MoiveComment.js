import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {inject, observer} from 'mobx-react';
import Rate from '../../../components/Rate';

@inject('movieStore')
@observer
class MovieComment extends Component {
  render() {
    const {detailInfo} = this.props.movieStore;
    const {popular_reviews: reviews = []} = detailInfo;
    const {
      box,
      avatarNameRateBox,
      avatarStyle,
      nameStyle,
      titleStyle,
      summaryStyle,
    } = styles;
    return (
      <View style={box}>
        {reviews.map((review, index) => {
          const {author = {}, rating = {}, summary, title} = review;
          const {avatar, name} = author;
          const {value} = rating;
          return (
            <View style={{marginTop: index > 0 ? 20 : 0}} key={index}>
              <View style={avatarNameRateBox}>
                <Image style={avatarStyle} source={{uri: avatar}} />
                <Text style={nameStyle}>{name}</Text>
                <Rate
                  value={Number(value)}
                  max={5}
                  size={10}
                  color="#FFD21E"
                  hasText={false}
                />
              </View>
              <Text style={titleStyle}>{title}</Text>
              <Text style={summaryStyle}>{summary}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    paddingTop: 16,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 32,
  },
  avatarNameRateBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarStyle: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  nameStyle: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 14,
    color: '#777777',
  },
  titleStyle: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
    color: '#333333',
    fontWeight: '600',
  },
  summaryStyle: {
    fontSize: 14,
    color: '#777777',
    lineHeight: 20,
  },
});

export default MovieComment;
