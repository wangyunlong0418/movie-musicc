import React, {Component} from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import {inject, observer} from 'mobx-react';

@inject('movieStore')
@observer
class MoviePerson extends Component {
  render() {
    const {movieStore} = this.props;
    const {detailInfo} = movieStore;
    const {directors = [], casts = []} = detailInfo;
    const {personBox, title, imageStyle, nameText, itemBox, roleText} = styles;
    return (
      <View style={personBox}>
        <Text style={title}>影人</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {directors.map((director, index) => {
            const {avatars, name} = director;
            return (
              <View style={itemBox} key={index}>
                <View>
                  {avatars && avatars.medium && (
                    <Image
                      style={imageStyle}
                      source={{
                        uri: avatars.medium,
                      }}
                    />
                  )}
                </View>
                <Text style={nameText}>{name}</Text>
                <Text style={roleText}>导演</Text>
              </View>
            );
          })}
          {casts.map((cast, index) => {
            const {avatars, name} = cast;
            return (
              <View style={[itemBox, {marginLeft: 10}]} key={index}>
                {avatars && avatars.medium && (
                  <Image
                    style={imageStyle}
                    source={{
                      uri: avatars.medium,
                    }}
                  />
                )}
                <Text style={nameText} numberOfLines={1} ellipsizeMode="tail">
                  {name}
                </Text>
                <Text style={roleText}>演员</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  personBox: {
    marginTop: 16,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 16,
    borderStyle: 'solid',
    borderBottomColor: '#ebedf0',
    borderBottomWidth: 1,
  },
  title: {
    marginBottom: 10,
    color: '#777777',
  },
  itemBox: {
    // width: 90,
  },
  imageStyle: {
    width: 90,
    height: 120,
  },
  nameText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#000000',
  },
  roleText: {
    fontSize: 12,
    color: '#777777',
    textAlign: 'center',
  },
});

export default MoviePerson;
