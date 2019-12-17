import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {inject, observer} from 'mobx-react';
import Tab from '../../../components/Tab';
import Poster from './Poster';
import DetailInfo from './DetailInfo';
import Operate from './Operate';
import Summary from './Summary';
import MoviePerson from './MoviePerson';
import ShortComment from './ShortComment';
import MovieComment from './MoiveComment';
import Loading from '../../../components/Loading';

@inject('movieStore')
@observer
class MovieDetail extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('title', '电影'),
    };
  };
  async componentDidMount() {
    const {movieStore, navigation} = this.props;
    const id = navigation.getParam('detailid');
    await movieStore.getDetail(id);
    const {
      detailInfo: {title},
    } = movieStore;
    navigation.setParams({title: title});
  }

  componentWillUnmount() {
    const {movieStore} = this.props;
    movieStore.initDetail();
  }

  render() {
    const {height} = Dimensions.get('window');
    const tabs = [{title: '短评'}, {title: '影评'}];
    const {loading} = this.props.movieStore;
    const {detailLoading} = loading;
    return (
      <View>
        <Loading isShow={detailLoading} hasMask={true} />
        <ScrollView showsHorizontalScrollIndicator={false}>
          <View style={styles.box}>
            <Poster />
            <DetailInfo />
            <Operate />
            <Summary />
            <MoviePerson />
            {/* <ShortComment /> */}
            <Tab tabs={tabs}>
              <ShortComment />
              <MovieComment />
            </Tab>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    // height: '100%',
    flex: 1,
  },
  image: {
    width: 188,
    height: 268,
  },
});

export default MovieDetail;
