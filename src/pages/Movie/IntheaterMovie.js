import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {inject, observer} from 'mobx-react';
import Rate from '../../components/Rate';

@inject('movieStore')
@observer
class IntheaterMovie extends Component {
  toDetail = id => {
    const {navigation} = this.props;
    navigation.navigate('Detail', {detailid: id});
  };
  render() {
    const {movieStore, navigation} = this.props;
    const {intheaterMovie} = movieStore;
    return (
      <View style={styles.box}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {intheaterMovie &&
            intheaterMovie.map((movie, index) => {
              const {title, images, rating, id} = movie;
              const {average = 0} = rating;
              return (
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    this.toDetail(id);
                  }}
                  key={index}>
                  <View
                    style={
                      (styles.itemBox, index > 0 ? styles.marginLeft10 : {})
                    }>
                    {images && (
                      <Image
                        style={{width: 100, height: 142}}
                        source={{
                          uri: images.medium,
                        }}
                      />
                    )}

                    <View style={styles.titleBox}>
                      <Text
                        style={styles.title}
                        ellipsizeMode="tail"
                        numberOfLines={1}>
                        {title}
                      </Text>
                    </View>
                    <Rate
                      value={Number(average)}
                      max={5}
                      size={10}
                      color="#FFD21E"
                    />
                  </View>
                </TouchableOpacity>
              );
            })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    marginBottom: 10,
    height: 200,
  },
  itemBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  marginLeft10: {
    marginLeft: 10,
  },
  titleBox: {
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '600',
  },
});

export default IntheaterMovie;
