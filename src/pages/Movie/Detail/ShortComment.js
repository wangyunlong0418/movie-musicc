import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import {inject, observer} from 'mobx-react';
import Rate from '../../../components/Rate';

@inject('movieStore')
@observer
class ShortComment extends Component {
  render() {
    const {width} = Dimensions.get('window');
    const {detailInfo} = this.props.movieStore;
    const {popular_comments: comments = []} = detailInfo;
    const {
      box,
      itemBox,
      avatarStyle,
      nameRateBox,
      rightBox,
      nameStyle,
      contentStyle,
      createTime,
    } = styles;
    return (
      <View style={box}>
        {comments.map((comment, index) => {
          const {author = {}, rating = {}, content, created_at} = comment;
          const {avatar, name} = author;
          const {value} = rating;
          return (
            <View
              style={[itemBox, {marginTop: index > 0 ? 20 : 0}]}
              key={index}>
              <View>
                <Image style={avatarStyle} source={{uri: avatar}} />
              </View>
              <View style={rightBox}>
                <View style={nameRateBox}>
                  <Text style={nameStyle}>{name}</Text>
                  <Rate
                    value={Number(value)}
                    max={5}
                    size={10}
                    color="#FFD21E"
                    hasText={false}
                  />
                </View>
                <Text style={[contentStyle, {width: width - 76}]}>
                  {content}
                </Text>
                <Text style={createTime}>{created_at}</Text>
              </View>
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
  itemBox: {
    paddingRight: 10,
    flexDirection: 'row',
  },

  avatarStyle: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  rightBox: {
    marginLeft: 10,
  },
  nameRateBox: {
    flexDirection: 'row',
  },

  nameStyle: {
    marginRight: 6,
    fontSize: 12,
    color: '#333333',
  },
  contentStyle: {
    marginTop: 8,
    marginBottom: 8,
    fontSize: 14,
    color: '#333333',
    fontWeight: '500',
  },
  createTime: {
    color: '#777777',
  },
});

export default ShortComment;
